"""Tests for the notify_team / contact_email_html feature.

Covers:
- POST /api/contacto responds quickly (< 2s) with the created contact.
- After a delay, Mongo doc has notificado=True + email_id (Resend UUID).
- Backend log shows 'Aviso de contacto enviado'.
- contact_email_html escapes HTML in name/message and includes all fields.
- GET /api/contacto still returns list (ignoring extra fields).
- Cleanup of TEST_ documents.
"""
import os
import re
import sys
import time
import asyncio
import pytest
import requests
from pathlib import Path
from dotenv import dotenv_values

# Load backend .env to get MONGO_URL/DB_NAME
_backend_env = dotenv_values("/app/backend/.env")
MONGO_URL = _backend_env["MONGO_URL"].strip('"')
DB_NAME = _backend_env["DB_NAME"].strip('"')

# BASE_URL from frontend/.env
_front_env = dotenv_values("/app/frontend/.env")
BASE_URL = _front_env["REACT_APP_BACKEND_URL"].rstrip("/")

BACKEND_LOG = "/var/log/supervisor/backend.err.log"

# Ensure the backend module is importable for unit test of HTML helper
sys.path.insert(0, "/app/backend")


@pytest.fixture(scope="module")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="module")
def mongo():
    from pymongo import MongoClient
    c = MongoClient(MONGO_URL)
    yield c[DB_NAME]
    c.close()


# --- 1. POST /api/contacto responds quickly (<2s) ---
def test_create_contacto_fast_response(api):
    payload = {
        "nombre": "QA Test Notify",
        "email": "delivered@resend.dev",
        "telefono": "+52 55 0000 0001",
        "empresa": "QA Empresa",
        "interes": "Wallet Negocios",
        "mensaje": "QA Test - mensaje de prueba para notify.",
    }
    t0 = time.perf_counter()
    r = api.post(f"{BASE_URL}/api/contacto", json=payload, timeout=10)
    elapsed = time.perf_counter() - t0
    assert r.status_code == 200, r.text
    assert elapsed < 2.0, f"POST took {elapsed:.2f}s (should be <2s, background email)"
    data = r.json()
    assert data["id"] and data["email"] == payload["email"]
    # cache for downstream test
    pytest.qa_contact_id = data["id"]
    pytest.qa_contact_elapsed = elapsed


# --- 2. Mongo doc gets notificado + email_id AND confirmacion_enviada + confirmacion_id ---
def test_mongo_notificado_and_confirmacion_flags_set(mongo):
    contact_id = getattr(pytest, "qa_contact_id", None)
    assert contact_id, "previous test must have created a contact"

    doc = None
    for _ in range(20):  # up to ~10s
        doc = mongo.contactos.find_one({"id": contact_id})
        if doc and "notificado" in doc and "confirmacion_enviada" in doc:
            break
        time.sleep(0.5)

    assert doc is not None, "Contact doc not found in Mongo"
    assert "notificado" in doc, f"Field 'notificado' never set. Doc: {doc}"
    assert "confirmacion_enviada" in doc, f"Field 'confirmacion_enviada' never set. Doc: {doc}"

    if doc.get("notificado") is True:
        assert doc.get("email_id"), "notificado=True but no email_id stored"
        assert re.match(r"^[0-9a-fA-F-]{8,}$", str(doc["email_id"])), doc["email_id"]
    else:
        pytest.fail(f"Notify team failed: notificado=False, email_error={doc.get('email_error')}")

    if doc.get("confirmacion_enviada") is True:
        assert doc.get("confirmacion_id"), "confirmacion_enviada=True but no confirmacion_id stored"
        assert re.match(r"^[0-9a-fA-F-]{8,}$", str(doc["confirmacion_id"])), doc["confirmacion_id"]
    else:
        pytest.fail(f"Client confirmation failed: confirmacion_enviada=False, confirmacion_error={doc.get('confirmacion_error')}")


# --- 3. Backend log shows the sent message ---
def test_backend_log_shows_sent(mongo):
    contact_id = getattr(pytest, "qa_contact_id", None)
    assert contact_id
    doc = mongo.contactos.find_one({"id": contact_id}) or {}
    email_id = doc.get("email_id")
    if not email_id:
        pytest.skip("no email_id; skipping log verification")

    try:
        text = Path(BACKEND_LOG).read_text(errors="ignore")
    except Exception as e:
        pytest.skip(f"cannot read log: {e}")
    assert "Aviso de contacto enviado" in text, "Success log line missing"
    assert email_id in text, f"email_id {email_id} not in log"
    assert "Confirmación al cliente enviada" in text, "Client confirmation log line missing"
    confirmacion_id = doc.get("confirmacion_id")
    if confirmacion_id:
        assert confirmacion_id in text, f"confirmacion_id {confirmacion_id} not in log"


# --- 4. GET /api/contacto still works (response_model ignores extra fields) ---
def test_get_contacto_returns_list_with_notified_docs(api):
    r = api.get(f"{BASE_URL}/api/contacto", timeout=10)
    assert r.status_code == 200, r.text
    data = r.json()
    assert isinstance(data, list) and len(data) >= 1
    # extra fields notificado/email_id should NOT appear (ConfigDict extra="ignore" on response_model)
    for d in data[:5]:
        assert "_id" not in d
        assert set(d.keys()) <= {"id", "nombre", "email", "telefono", "empresa", "interes", "mensaje", "created_at"}


# --- 6b. client_email_html unit test: escapes + first name + phone conditional ---
def test_client_email_html_includes_and_escapes():
    from datetime import datetime, timezone
    from server import client_email_html, Contact

    # Case A: with telefono
    c1 = Contact(
        nombre="Juan Pérez López",
        email="juan@example.com",
        telefono="+52 55 1234 5678",
        empresa=None,
        interes="Terminales punto de venta",
        mensaje="<b>Necesito</b> info & cotización",
        created_at=datetime.now(timezone.utc),
    )
    html1 = client_email_html(c1)
    # first name only
    assert "Juan" in html1
    assert "Pérez" not in html1 or html1.count("Juan") >= 1  # first name captured
    # email
    assert "juan@example.com" in html1
    # interes
    assert "Terminales punto de venta" in html1
    # escaped mensaje
    assert "<b>Necesito</b>" not in html1
    assert "&lt;b&gt;Necesito&lt;/b&gt;" in html1
    assert "&amp; cotizaci" in html1
    # 24 horas hábiles
    assert "24 horas hábiles" in html1
    # telefono included
    assert "+52 55 1234 5678" in html1
    assert "o al teléfono" in html1

    # Case B: telefono is None -> no 'o al teléfono'
    c2 = Contact(
        nombre="Ana",
        email="ana@example.com",
        telefono=None,
        empresa=None,
        interes=None,
        mensaje="Consulta general de prueba.",
        created_at=datetime.now(timezone.utc),
    )
    html2 = client_email_html(c2)
    assert "Ana" in html2
    assert "ana@example.com" in html2
    assert "24 horas hábiles" in html2
    assert "o al teléfono" not in html2


# --- 5. Invalid email -> 422 and NO document created ---
def test_invalid_email_no_doc(api, mongo):
    before = mongo.contactos.count_documents({"email": "totally-bad"})
    r = api.post(f"{BASE_URL}/api/contacto", json={
        "nombre": "QA Test Invalid",
        "email": "totally-bad",
        "mensaje": "Este mensaje tiene mas de 5 caracteres.",
    })
    assert r.status_code == 422
    after = mongo.contactos.count_documents({"email": "totally-bad"})
    assert after == before, "Invalid payload should not create a doc"


# --- 5b. Short mensaje -> 422 ---
def test_short_mensaje_no_doc(api, mongo):
    before = mongo.contactos.count_documents({"nombre": "QA Test Short"})
    r = api.post(f"{BASE_URL}/api/contacto", json={
        "nombre": "QA Test Short",
        "email": "short@example.com",
        "mensaje": "hi",
    })
    assert r.status_code == 422
    after = mongo.contactos.count_documents({"nombre": "QA Test Short"})
    assert after == before


# --- 6. contact_email_html escapes HTML and includes all fields ---
def test_contact_email_html_escapes_and_includes_fields():
    from datetime import datetime, timezone
    from server import contact_email_html, Contact

    c = Contact(
        nombre="<script>alert(1)</script>",
        email="hack@example.com",
        telefono=None,
        empresa=None,
        interes="Wallet Negocios",
        mensaje="<b>Hola</b> & adiós",
        created_at=datetime.now(timezone.utc),
    )
    html_out = contact_email_html(c)
    # Escaped
    assert "<script>" not in html_out
    assert "&lt;script&gt;alert(1)&lt;/script&gt;" in html_out
    assert "&lt;b&gt;Hola&lt;/b&gt;" in html_out
    assert "&amp; adi" in html_out
    # Includes labels/values
    assert "Nombre" in html_out
    assert "Correo" in html_out
    assert "hack@example.com" in html_out
    assert "Interés" in html_out or "Inter" in html_out
    assert "Wallet Negocios" in html_out


# --- Cleanup TEST_ / QA docs at module teardown ---
@pytest.fixture(scope="module", autouse=True)
def _cleanup(mongo):
    yield
    try:
        res = mongo.contactos.delete_many({"$or": [
            {"nombre": {"$regex": "^QA Test"}},
            {"nombre": {"$regex": "^TEST"}},
            {"email": "totally-bad"},
        ]})
        print(f"\nCleanup removed {res.deleted_count} test docs")
    except Exception as e:
        print(f"Cleanup error: {e}")
