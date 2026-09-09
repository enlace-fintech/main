from fastapi import FastAPI, APIRouter, HTTPException, Request, Query
from fastapi.responses import HTMLResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import html
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactCreate(BaseModel):
    nombre: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    telefono: Optional[str] = Field(default=None, max_length=40)
    empresa: Optional[str] = Field(default=None, max_length=160)
    interes: Optional[str] = Field(default=None, max_length=80)
    mensaje: str = Field(..., min_length=5, max_length=2000)


class Contact(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    nombre: str
    email: str
    telefono: Optional[str] = None
    empresa: Optional[str] = None
    interes: Optional[str] = None
    mensaje: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


@api_router.get("/")
async def root():
    return {"message": "Enlace Fintech API"}


SLUG_RE = re.compile(r"^[a-z0-9-]{1,120}$")


@api_router.get("/share/blog/{slug}", response_class=HTMLResponse)
async def share_blog(
    request: Request,
    slug: str,
    title: str = Query(..., max_length=200),
    desc: str = Query("", max_length=400),
    image: str = Query("", max_length=600),
):
    if not SLUG_RE.match(slug):
        raise HTTPException(status_code=404, detail="Artículo no encontrado")
    if image and not image.startswith("https://"):
        image = ""
    proto = request.headers.get("x-forwarded-proto", request.url.scheme)
    host = request.headers.get("x-forwarded-host", request.headers.get("host", request.url.netloc))
    target = f"{proto}://{host}/blog/{slug}"
    t, d, i, u = html.escape(title), html.escape(desc), html.escape(image), html.escape(target)
    page = f"""<!doctype html><html lang="es-MX"><head><meta charset="utf-8">
<title>{t} · Enlace Fintech</title>
<meta name="description" content="{d}">
<meta property="og:type" content="article"><meta property="og:locale" content="es_MX">
<meta property="og:site_name" content="Enlace Fintech">
<meta property="og:title" content="{t}"><meta property="og:description" content="{d}">
<meta property="og:image" content="{i}"><meta property="og:url" content="{u}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{t}">
<meta name="twitter:description" content="{d}"><meta name="twitter:image" content="{i}">
<link rel="canonical" href="{u}">
<meta http-equiv="refresh" content="0;url={u}">
<script>location.replace({target!r});</script>
</head><body style="background:#0B132B;color:#fff;font-family:sans-serif;padding:2rem">
<p>Redirigiendo a <a href="{u}" style="color:#D4AF37">{t}</a>…</p></body></html>"""
    return HTMLResponse(page)


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/contacto", response_model=Contact)
async def create_contacto(input: ContactCreate):
    contact = Contact(**input.model_dump())
    doc = contact.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contactos.insert_one(doc)
    logger.info("Nuevo contacto recibido de %s <%s>", contact.nombre, contact.email)
    return contact


@api_router.get("/contacto", response_model=List[Contact])
async def list_contactos():
    docs = await db.contactos.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            d['created_at'] = datetime.fromisoformat(d['created_at'])
    return docs


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
