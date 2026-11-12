from pathlib import Path
from PIL import Image


candidates = [
    "public/images/moda-italia-logos/logo.jpeg",
    # "public/images/logo-removebg-preview.png",
]
logo_path = next((p for p in candidates if Path(p).exists()), None)
if not logo_path:
    raise SystemExit("Logo not found, check the path inside public/images")

W, H = 1200, 630
canvas = Image.new("RGB", (W, H), "#F6F3EE")  

logo = Image.open(logo_path).convert("RGBA")


target_w = int(W * 0.55)
ratio = target_w / logo.width
logo = logo.resize((target_w, int(logo.height * ratio)), Image.LANCZOS)


max_h = int(H * 0.6)
if logo.height > max_h:
    r = max_h / logo.height
    logo = logo.resize((int(logo.width * r), max_h), Image.LANCZOS)

x = (W - logo.width) // 2
y = (H - logo.height) // 2
canvas.paste(logo, (x, y), logo)  

canvas.save("app/opengraph-image.jpg", quality=90, optimize=True)
print("saved from", logo_path, canvas.size)