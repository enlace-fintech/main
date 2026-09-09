"""Tests for /api/share/blog/{slug}, /robots.txt, /sitemap.xml."""
import os
import pytest
import requests
from pathlib import Path

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    for line in Path("/app/frontend/.env").read_text().splitlines():
        if line.startswith("REACT_APP_BACKEND_URL="):
            BASE_URL = line.split("=", 1)[1].strip()
BASE_URL = BASE_URL.rstrip("/")


@pytest.fixture(scope="module")
def api():
    return requests.Session()


# --- Share endpoint ---
def test_share_blog_ok(api):
    r = api.get(
        f"{BASE_URL}/api/share/blog/repse-2026-que-cambia",
        params={"title": "X", "desc": "Y", "image": "https://ex.com/a.jpg"},
        allow_redirects=False,
    )
    assert r.status_code == 200
    assert "text/html" in r.headers.get("content-type", "")
    body = r.text
    assert 'property="og:title" content="X"' in body
    assert 'property="og:description" content="Y"' in body
    assert 'property="og:image" content="https://ex.com/a.jpg"' in body
    assert 'property="og:url"' in body
    assert body.count("/blog/repse-2026-que-cambia") >= 2
    # og:url ends with slug
    import re
    m = re.search(r'property="og:url" content="([^"]+)"', body)
    assert m and m.group(1).endswith("/blog/repse-2026-que-cambia")
    assert 'rel="canonical"' in body
    assert 'http-equiv="refresh"' in body
    assert "location.replace" in body


def test_share_blog_escapes_html(api):
    r = api.get(
        f"{BASE_URL}/api/share/blog/repse-2026-que-cambia",
        params={"title": "<script>x</script>", "desc": 'A & "B"', "image": "https://ex.com/a.jpg"},
    )
    assert r.status_code == 200
    body = r.text
    assert "<script>x</script>" not in body.replace('location.replace', '')  # only present in JS redirect
    assert "&lt;script&gt;x&lt;/script&gt;" in body
    assert "&amp;" in body
    assert "&quot;" in body


def test_share_blog_image_without_https_becomes_empty(api):
    r = api.get(
        f"{BASE_URL}/api/share/blog/repse-2026-que-cambia",
        params={"title": "T", "desc": "D", "image": "http://ex.com/a.jpg"},
    )
    assert r.status_code == 200
    assert 'property="og:image" content=""' in r.text


def test_share_blog_invalid_slug_uppercase(api):
    r = api.get(f"{BASE_URL}/api/share/blog/UPPER-slug", params={"title": "T"})
    assert r.status_code == 404


def test_share_blog_invalid_slug_dot(api):
    r = api.get(f"{BASE_URL}/api/share/blog/foo.bar", params={"title": "T"})
    assert r.status_code == 404


def test_share_blog_missing_title(api):
    r = api.get(f"{BASE_URL}/api/share/blog/repse-2026-que-cambia")
    assert r.status_code == 422


# --- robots.txt ---
def test_robots_txt(api):
    r = api.get(f"{BASE_URL}/robots.txt")
    assert r.status_code == 200
    body = r.text
    assert "Disallow: /api/" in body
    assert "Sitemap:" in body


# --- sitemap.xml ---
def test_sitemap_xml(api):
    r = api.get(f"{BASE_URL}/sitemap.xml")
    assert r.status_code == 200
    body = r.text
    assert "<urlset" in body
    count = body.count("<url>")
    assert count == 32, f"expected 32 urls, got {count}"
    assert "/servicios/tarjetas" in body
    assert "/blog/repse-2026-que-cambia" in body
