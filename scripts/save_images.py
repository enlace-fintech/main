import io, json, sys, urllib.request
from PIL import Image

OUT = "/app/frontend/public/img"
data = json.load(open(sys.argv[1]))
for it in data["images"]:
    n = it["slug_name"]
    im = Image.open(io.BytesIO(urllib.request.urlopen(it["url"]).read())).convert("RGB")
    im.thumbnail((900, 900))
    im.save(f"{OUT}/{n}.jpg", quality=80, optimize=True)
    im.save(f"{OUT}/{n}.webp", quality=76, method=6)
    print(n, im.size)
