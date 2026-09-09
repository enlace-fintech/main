import os, re, glob, hashlib, urllib.request, sys

ROOT = "/app/frontend"
OUT = os.path.join(ROOT, "public/img")
os.makedirs(OUT, exist_ok=True)

FILES = glob.glob(f"{ROOT}/src/**/*.js", recursive=True) + glob.glob(f"{ROOT}/src/**/*.jsx", recursive=True) + [f"{ROOT}/public/index.html"]
URL_RE = re.compile(r"https://(?:static\.prod-images\.emergentagent\.com|images\.unsplash\.com|images\.pexels\.com)[^\"' )]+")
KEY_RE = re.compile(r'^\s*(?:export const\s+)?"?([A-Za-z_][A-Za-z0-9_-]*)"?\s*[:=]\s*\{')

FIXED = {"1ea1d960": "logo", "c0ac1b3c": "hero-dashboard", "9c987f57": "hero-person"}

def context_name(lines, idx):
    for j in range(idx, -1, -1):
        m = KEY_RE.match(lines[j])
        if m and m.group(1) not in ("features", "partner", "flowSend", "flowReceive", "premium"):
            return m.group(1).lower().replace("_", "-")
    return "img"

url_to_name = {}
used = set()
for f in FILES:
    lines = open(f).read().split("\n")
    for i, line in enumerate(lines):
        for url in URL_RE.findall(line):
            if url in url_to_name:
                continue
            token = re.sub(r"\?.*", "", url).rsplit("/", 1)[-1][:8]
            base = FIXED.get(token) or context_name(lines, i)
            name = base
            n = 2
            while name in used:
                name = f"{base}-{n}"; n += 1
            used.add(name)
            url_to_name[url] = name

UA = {"User-Agent": "Mozilla/5.0"}
mapping = {}
for url, name in url_to_name.items():
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
        ctype = r.headers.get("Content-Type", "")
    ext = "png" if "png" in ctype else "webp" if "webp" in ctype else "jpg"
    path = os.path.join(OUT, f"{name}.{ext}")
    open(path, "wb").write(data)
    mapping[url] = f"/img/{name}.{ext}"
    print(f"{name}.{ext}  {len(data)//1024} KB  <- {url[:70]}")

for f in FILES:
    s = open(f).read()
    for url, local in sorted(mapping.items(), key=lambda kv: -len(kv[0])):
        s = s.replace(url, local)
    open(f, "w").write(s)
print("done", len(mapping))
