from fastapi import FastAPI, APIRouter, HTTPException, Request, Query, BackgroundTasks
from fastapi.responses import HTMLResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import html
import asyncio
import logging
import resend
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

resend.api_key = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL')
NOTIFY_EMAILS = [e.strip() for e in os.environ.get('NOTIFY_EMAILS', '').split(',') if e.strip()]

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


def contact_email_html(c: "Contact") -> str:
    e = html.escape
    rows = [
        ("Nombre", c.nombre), ("Correo", c.email), ("Teléfono", c.telefono or "—"),
        ("Empresa", c.empresa or "—"), ("Interés", c.interes or "—"),
        ("Fecha", c.created_at.strftime("%d/%m/%Y %H:%M UTC")),
    ]
    trs = "".join(
        f'<tr><td style="padding:8px 12px;color:#94a3b8;font-size:13px;white-space:nowrap">{e(k)}</td>'
        f'<td style="padding:8px 12px;color:#ffffff;font-size:14px">{e(v)}</td></tr>' for k, v in rows
    )
    return f"""<table width="100%" cellpadding="0" cellspacing="0" style="background:#0B132B;padding:32px 0;font-family:Arial,sans-serif">
<tr><td align="center"><table width="560" cellpadding="0" cellspacing="0" style="background:#0e1836;border:1px solid rgba(255,255,255,0.1);border-radius:16px">
<tr><td style="padding:28px 32px 8px"><span style="color:#D4AF37;font-size:11px;letter-spacing:3px;text-transform:uppercase">Enlace Fintech</span>
<h1 style="margin:8px 0 0;color:#fff;font-size:22px">Nueva solicitud de contacto</h1></td></tr>
<tr><td style="padding:16px 20px"><table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border-radius:12px">{trs}</table></td></tr>
<tr><td style="padding:0 32px 8px"><p style="margin:0;color:#94a3b8;font-size:13px">Mensaje</p>
<p style="margin:8px 0 0;color:#e2e8f0;font-size:15px;line-height:1.6;white-space:pre-wrap">{e(c.mensaje)}</p></td></tr>
<tr><td style="padding:24px 32px 28px"><a href="mailto:{e(c.email)}" style="display:inline-block;background:#D4AF37;color:#0B132B;font-weight:bold;font-size:14px;padding:12px 22px;border-radius:999px;text-decoration:none">Responder a {e(c.nombre)}</a></td></tr>
</table></td></tr></table>"""


async def notify_team(contact: "Contact") -> None:
    if not (resend.api_key and SENDER_EMAIL and NOTIFY_EMAILS):
        logger.warning("Notificación por correo omitida: falta RESEND_API_KEY, SENDER_EMAIL o NOTIFY_EMAILS")
        return
    params = {
        "from": f"Enlace Fintech <{SENDER_EMAIL}>",
        "to": NOTIFY_EMAILS,
        "reply_to": contact.email,
        "subject": f"Nueva solicitud: {contact.nombre} · {contact.interes or 'Contacto'}",
        "html": contact_email_html(contact),
    }
    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        await db.contactos.update_one({"id": contact.id}, {"$set": {"notificado": True, "email_id": result.get("id")}})
        logger.info("Aviso de contacto enviado (%s)", result.get("id"))
    except Exception as exc:
        await db.contactos.update_one({"id": contact.id}, {"$set": {"notificado": False, "email_error": str(exc)[:300]}})
        logger.error("Error enviando aviso de contacto: %s", exc)


def client_email_html(c: "Contact") -> str:
    e = html.escape
    return f"""<table width="100%" cellpadding="0" cellspacing="0" style="background:#0B132B;padding:32px 0;font-family:Arial,sans-serif">
<tr><td align="center"><table width="560" cellpadding="0" cellspacing="0" style="background:#0e1836;border:1px solid rgba(255,255,255,0.1);border-radius:16px">
<tr><td style="padding:28px 32px 8px"><span style="color:#D4AF37;font-size:11px;letter-spacing:3px;text-transform:uppercase">Enlace Fintech</span>
<h1 style="margin:8px 0 0;color:#fff;font-size:22px">Recibimos tu solicitud, {e(c.nombre.split(' ')[0])}</h1></td></tr>
<tr><td style="padding:8px 32px"><p style="margin:0;color:#e2e8f0;font-size:15px;line-height:1.6">Gracias por escribirnos. Un asesor de Enlace Fintech revisará tu caso y te contactará en menos de <strong style="color:#fff">24 horas hábiles</strong> al correo <strong style="color:#fff">{e(c.email)}</strong>{(' o al teléfono <strong style="color:#fff">' + e(c.telefono) + '</strong>') if c.telefono else ''}.</p></td></tr>
<tr><td style="padding:16px 32px"><table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border-radius:12px">
<tr><td style="padding:12px 16px;color:#94a3b8;font-size:13px">Interés</td><td style="padding:12px 16px;color:#fff;font-size:14px">{e(c.interes or 'Contacto general')}</td></tr>
<tr><td style="padding:12px 16px;color:#94a3b8;font-size:13px;vertical-align:top">Tu mensaje</td><td style="padding:12px 16px;color:#e2e8f0;font-size:14px;line-height:1.6;white-space:pre-wrap">{e(c.mensaje)}</td></tr>
</table></td></tr>
<tr><td style="padding:8px 32px"><p style="margin:0;color:#94a3b8;font-size:13px;line-height:1.6">Mientras tanto, puedes conocer nuestros servicios: terminales punto de venta sin trámites bancarios, plataforma de pagos, tarjetas nominativas y consultoría empresarial.</p></td></tr>
<tr><td style="padding:20px 32px 28px"><a href="https://enlacefintech.com/servicios" style="display:inline-block;background:#D4AF37;color:#0B132B;font-weight:bold;font-size:14px;padding:12px 22px;border-radius:999px;text-decoration:none">Ver servicios</a></td></tr>
<tr><td style="padding:0 32px 24px"><p style="margin:0;color:#64748b;font-size:11px;line-height:1.5">Enlace Fintech es un intermediario de soluciones financieras y corporativas; no es una institución financiera. Este correo es una confirmación automática, no es necesario responderlo.</p></td></tr>
</table></td></tr></table>"""


async def notify_client(contact: "Contact") -> None:
    if not (resend.api_key and SENDER_EMAIL):
        return
    params = {
        "from": f"Enlace Fintech <{SENDER_EMAIL}>",
        "to": [contact.email],
        "subject": "Recibimos tu solicitud · Enlace Fintech",
        "html": client_email_html(contact),
    }
    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        await db.contactos.update_one({"id": contact.id}, {"$set": {"confirmacion_enviada": True, "confirmacion_id": result.get("id")}})
        logger.info("Confirmación al cliente enviada (%s)", result.get("id"))
    except Exception as exc:
        await db.contactos.update_one({"id": contact.id}, {"$set": {"confirmacion_enviada": False, "confirmacion_error": str(exc)[:300]}})
        logger.error("Error enviando confirmación al cliente: %s", exc)


@api_router.post("/contacto", response_model=Contact)
async def create_contacto(input: ContactCreate, background: BackgroundTasks):
    contact = Contact(**input.model_dump())
    doc = contact.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contactos.insert_one(doc)
    logger.info("Nuevo contacto recibido de %s <%s>", contact.nombre, contact.email)
    background.add_task(notify_team, contact)
    background.add_task(notify_client, contact)
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
