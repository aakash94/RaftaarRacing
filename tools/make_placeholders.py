"""Dev-only: generate branded placeholder JPEGs. Not used by the website.
Run: python tools/make_placeholders.py   (needs Pillow: pip install pillow)"""
from PIL import Image, ImageDraw, ImageFont

PURPLE = (139, 42, 155)
DARK = (26, 0, 58)
YELLOW = (245, 194, 0)

def placeholder(path, size, label):
    w, h = size
    img = Image.new("RGB", size, DARK)
    d = ImageDraw.Draw(img)
    # simple diagonal band for some life
    d.polygon([(0, h), (w, 0), (w, h)], fill=PURPLE)
    try:
        font = ImageFont.truetype("arialbd.ttf", h // 8)
    except OSError:
        font = ImageFont.load_default()
    tb = d.textbbox((0, 0), label, font=font)
    tw, th = tb[2] - tb[0], tb[3] - tb[1]
    d.text(((w - tw) / 2, (h - th) / 2), label, fill=YELLOW, font=font)
    img.save(path, "JPEG", quality=85)
    print("wrote", path)

if __name__ == "__main__":
    placeholder("images/hero-car.jpg", (1200, 700), "ADD CAR PHOTO")
    placeholder("images/about-team.jpg", (900, 1100), "ADD TEAM PHOTO")
    placeholder("images/car.jpg", (1000, 800), "ADD CAR PHOTO")
