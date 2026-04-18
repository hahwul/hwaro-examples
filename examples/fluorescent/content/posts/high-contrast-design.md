+++
title = "High Contrast Design"
date = "2026-03-15"
tags = ["design", "accessibility"]
categories = ["design"]
description = "How high contrast palettes improve both aesthetics and accessibility."
template = "post"
+++

High contrast isn't just a style choice — it's an accessibility feature. When done right, vivid color palettes on dark backgrounds create designs that are both stunning and inclusive.

## The Numbers

WCAG 2.1 requires a contrast ratio of at least 4.5:1 for normal text. Fluorescent green on a near-black background can achieve ratios above 15:1 — more than triple the requirement.

## Principles of High Contrast

1. **Dark backgrounds amplify color** — Black or near-black surfaces make vivid hues pop
2. **Limit your palette** — Three to four accent colors prevent visual chaos
3. **Use brightness hierarchy** — Brighter elements draw more attention
4. **Reserve glow for emphasis** — Not everything should shine equally

## Beyond Black and White

Traditional high contrast means black text on white backgrounds. But fluorescent design shows there's another way. Vivid colors on dark surfaces create contrast through saturation and luminance differences rather than just lightness.

```css
:root {
  --bg: #0a0a0f;
  --text: #f0f0f0;
  --accent: #39ff14;
  --glow: 0 0 10px #39ff14, 0 0 40px #39ff1444;
}
```

The result is high contrast that feels energetic rather than sterile.
