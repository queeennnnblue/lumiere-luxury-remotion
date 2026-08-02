#!/usr/bin/env python3
"""فحص هندسي لملف بوستات لوموند: حدود الشرائح + تقدير محافظ لفيض النص.

قياس عرض النص بـ PIL بدون تشكيل عربي يعطي عرضاً أكبر من الفعلي (التشكيل يدمج
الحروف ويقصّرها)، فأي نص يمر من هذا الفحص يمر في العرض الحقيقي من باب أولى.
"""
import sys
from pathlib import Path

from PIL import ImageFont
from pptx import Presentation
from pptx.util import Emu

ROOT = Path(__file__).resolve().parent.parent
FONTS = {
    "Amiri": ROOT / "public/fonts/Amiri-Bold.ttf",
    "Tajawal": ROOT / "public/fonts/Tajawal-Medium.ttf",
    "Times New Roman": ROOT / "public/fonts/Tinos-Regular.ttf",
}
PX_PER_PT = 96 / 72
SLIDE_W, SLIDE_H = 1080, 1350
MARGIN = 24  # أدنى هامش مقبول من حافة الشريحة بالبكسل

_cache = {}


def font(name, size_px):
    key = (name, int(size_px))
    if key not in _cache:
        path = FONTS.get(name, FONTS["Tajawal"])
        _cache[key] = ImageFont.truetype(str(path), int(size_px))
    return _cache[key]


def px(emu):
    return Emu(emu).inches * 96


def wrapped_height(text, fnt, box_w, line_px):
    """ارتفاع تقريبي بعد اللف داخل عرض الصندوق."""
    lines = 0
    for para in text.split("\n"):
        words = para.split(" ")
        cur = ""
        n = 1
        for w in words:
            trial = (cur + " " + w).strip()
            if fnt.getlength(trial) <= box_w or not cur:
                cur = trial
            else:
                n += 1
                cur = w
        lines += n
    return lines * line_px, lines


def main():
    path = sys.argv[1] if len(sys.argv) > 1 else str(
        ROOT / "out/instagram/lomond-instagram-editable.pptx"
    )
    prs = Presentation(path)
    problems = []

    for i, slide in enumerate(prs.slides, 1):
        for shape in slide.shapes:
            x, y = px(shape.left), px(shape.top)
            w, h = px(shape.width), px(shape.height)

            if x < -1 or y < -1 or x + w > SLIDE_W + 1 or y + h > SLIDE_H + 1:
                problems.append(
                    f"شريحة {i}: عنصر خارج الشريحة "
                    f"({x:.0f},{y:.0f} {w:.0f}×{h:.0f})"
                )
            elif not (w >= SLIDE_W - 1) and (
                x < MARGIN or y < MARGIN
                or x + w > SLIDE_W - MARGIN or y + h > SLIDE_H - MARGIN
            ):
                problems.append(
                    f"شريحة {i}: عنصر قريب جداً من الحافة "
                    f"({x:.0f},{y:.0f} {w:.0f}×{h:.0f})"
                )

            if not shape.has_text_frame or not shape.text_frame.text.strip():
                continue

            for para in shape.text_frame.paragraphs:
                text = "".join(r.text for r in para.runs)
                if not text.strip():
                    continue
                run = para.runs[0]
                size_pt = (run.font.size.pt if run.font.size else 18)
                name = run.font.name or "Tajawal"
                size_px = size_pt * PX_PER_PT
                fnt = font(name, size_px)
                line_px = size_px * 1.35
                need_h, lines = wrapped_height(text, fnt, w, line_px)
                if need_h > h + 2:
                    problems.append(
                        f"شريحة {i}: نص قد يفيض — «{text[:34]}» "
                        f"{lines} أسطر ≈ {need_h:.0f}px داخل صندوق {h:.0f}px"
                    )

    print(f"شرائح: {len(prs.slides)} | مقاس: {px(prs.slide_width):.0f}×{px(prs.slide_height):.0f}")
    if problems:
        print(f"\n⚠️  {len(problems)} ملاحظة:")
        for p in problems:
            print("  -", p)
        return 1
    print("\n✅ لا توجد عناصر خارج الحدود ولا نصوص تفيض صناديقها")
    return 0


if __name__ == "__main__":
    sys.exit(main())
