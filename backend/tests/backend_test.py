"""Backend API tests for Enlace Fintech - /api/contacto and /api/ health."""
import os
import time
import pytest
import requests

BASE_URL = os.environ["REACT_APP_BACKEND_URL"].rstrip("/") if os.environ.get("REACT_APP_BACKEND_URL") else None
if not BASE_URL:
    # fallback to frontend .env
    from pathlib import Path
    for line in Path("/app/frontend/.env").read_text().splitlines():
        if line.startswith("REACT_APP_BACKEND_URL="):
            BASE_URL = line.split("=", 1)[1].strip().rstrip("/")


@pytest.fixture(scope="module")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Health / root ---
def test_root(api):
    r = api.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert "Enlace Fintech" in r.json().get("message", "")


# --- POST /api/contacto valid ---
def test_create_contacto_valid(api):
    payload = {
        "nombre": "TEST Usuario QA",
        "email": "test_qa@example.com",
        "telefono": "+52 55 1234 5678",
        "empresa": "TEST Empresa",
        "interes": "Wallet Negocios",
        "mensaje": "Necesito información sobre wallet para mi negocio.",
    }
    r = api.post(f"{BASE_URL}/api/contacto", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["nombre"] == payload["nombre"]
    assert data["email"] == payload["email"]
    assert "id" in data and len(data["id"]) > 0
    assert "created_at" in data


# --- POST invalid: bad email ---
def test_create_contacto_invalid_email(api):
    r = api.post(f"{BASE_URL}/api/contacto", json={
        "nombre": "TEST Nombre",
        "email": "not-an-email",
        "mensaje": "Mensaje suficiente largo",
    })
    assert r.status_code == 422


# --- POST invalid: empty nombre ---
def test_create_contacto_empty_nombre(api):
    r = api.post(f"{BASE_URL}/api/contacto", json={
        "nombre": "",
        "email": "ok@example.com",
        "mensaje": "Mensaje suficiente largo",
    })
    assert r.status_code == 422


# --- POST invalid: mensaje too short ---
def test_create_contacto_short_mensaje(api):
    r = api.post(f"{BASE_URL}/api/contacto", json={
        "nombre": "TEST",
        "email": "ok@example.com",
        "mensaje": "hi",
    })
    assert r.status_code == 422


# --- GET /api/contacto lists desc ---
def test_list_contactos_desc(api):
    # create two with small delay
    p1 = {"nombre": "TEST A", "email": "a@example.com", "mensaje": "primer mensaje de prueba"}
    p2 = {"nombre": "TEST B", "email": "b@example.com", "mensaje": "segundo mensaje de prueba"}
    r1 = api.post(f"{BASE_URL}/api/contacto", json=p1)
    assert r1.status_code == 200
    time.sleep(1.1)
    r2 = api.post(f"{BASE_URL}/api/contacto", json=p2)
    assert r2.status_code == 200

    r = api.get(f"{BASE_URL}/api/contacto")
    assert r.status_code == 200
    data = r.json()
    assert isinstance(data, list) and len(data) >= 2
    # find our two records
    emails_in_order = [d["email"] for d in data]
    idx_a = emails_in_order.index("a@example.com")
    idx_b = emails_in_order.index("b@example.com")
    assert idx_b < idx_a, f"Expected B (newer) before A. Order: {emails_in_order[:5]}"
    # no _id field leaked
    for d in data[:5]:
        assert "_id" not in d



# --- POST /api/contacto with new interes values (Servicios) ---
@pytest.mark.parametrize("interes", ["Consultoría empresarial", "Terminales punto de venta"])
def test_create_contacto_new_interes(api, interes):
    payload = {
        "nombre": "TEST Servicios",
        "email": "test_servicios@example.com",
        "telefono": "+52 55 9876 5432",
        "empresa": "TEST Empresa Servicios",
        "interes": interes,
        "mensaje": f"Solicito información sobre {interes}.",
    }
    r = api.post(f"{BASE_URL}/api/contacto", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["interes"] == interes
