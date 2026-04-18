+++
title = "Bold Typography in Dark Themes"
date = "2026-04-08"
tags = ["typography", "design"]
categories = ["blog"]
description = "Techniques for creating stunning, readable typography on dark backgrounds."
template = "post"
+++

Typography on dark backgrounds requires a fundamentally different approach than light themes. The goal is to create text that glows with personality while remaining effortlessly readable.

## Font Weight Matters

On dark backgrounds, thin fonts can feel anemic while ultra-bold weights feel oppressive. The sweet spot:

- **Headings**: Bold to Extra Bold (700-800)
- **Body text**: Regular to Medium (400-500)
- **Captions**: Light to Regular (300-400)

## The Glow Effect

The signature Electric Bloom heading style uses layered `text-shadow` to create a neon tube effect:

```css
text-shadow:
  0 0 10px rgba(255, 0, 128, 0.8),
  0 0 20px rgba(255, 0, 128, 0.6),
  0 0 40px rgba(255, 0, 128, 0.4),
  0 0 80px rgba(255, 0, 128, 0.2);
```

Each shadow layer extends further with decreasing opacity, creating the illusion of light diffusion — just like a real neon sign.

## Color Contrast

White text on black is too harsh. The Electric Bloom approach uses slightly warm off-whites and pale lavenders for body text, reserving pure brightness for headings and accents.

## Line Height and Spacing

Dark themes benefit from generous spacing. Cramped text on a dark background feels claustrophobic. Electric Bloom uses `1.8` line-height for body text and generous `letter-spacing` on headings for an airy, luminous feel.

## The Result

When weight, glow, color, and spacing work together, dark-theme typography doesn't just convey information — it becomes part of the visual spectacle.
