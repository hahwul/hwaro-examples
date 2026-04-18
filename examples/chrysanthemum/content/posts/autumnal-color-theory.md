+++
title = "Autumnal Color Theory for Digital Design"
date = "2026-02-15"
tags = ["color", "design", "autumn"]
categories = ["tech"]
description = "Building rich, warm color palettes inspired by the chrysanthemum's autumnal hues."
+++

Autumn is the season of transformation — when nature trades green uniformity for a riot of warm color. For digital designers, this palette offers extraordinary richness.

## The Chrysanthemum Palette

Our core palette draws directly from the chrysanthemum's natural range:

| Color | Hex | Role |
|-------|-----|------|
| Deep Crimson | `#b71c1c` | Primary accent, headings |
| Burnt Gold | `#ffd700` | Highlights, ornaments |
| Warm Amber | `#ff8f00` | Secondary accent |
| Rich Burgundy | `#4a0000` | Deep backgrounds |
| Dark Earth | `#1a0a00` | Base background |
| Ivory Cream | `#fdf6e3` | Text, light elements |

## Color Harmony Principles

### Analogous Warmth

The chrysanthemum palette works because its colors are analogous — they sit beside each other on the color wheel. This creates natural harmony:

```
Red → Orange → Amber → Gold → Yellow
```

Each transition feels organic, like watching a sunset or the gradual color shift across a petal.

### Contrast for Readability

Even in warm-heavy palettes, contrast is critical. Light cream text on dark burgundy backgrounds provides a comfortable reading experience while maintaining the autumnal mood.

## Gradient Techniques

Gradients bring the palette to life:

```css
.hero {
  background: linear-gradient(
    160deg,
    #1a0a00 0%,
    #4a0000 40%,
    #b71c1c 100%
  );
}
```

Radial gradients can simulate the glow of chrysanthemum petals catching autumn light:

```css
.glow {
  background: radial-gradient(
    circle at 30% 40%,
    rgba(255, 215, 0, 0.15),
    transparent 60%
  );
}
```

## Accessibility Considerations

Rich, warm palettes must still meet contrast requirements. Test all text-background combinations against WCAG AA standards. Our palette achieves this by pairing light cream (`#fdf6e3`) against dark backgrounds (`#1a0a00`, `#4a0000`).

> "The most beautiful color palette is worthless if no one can read the text."

Design boldly, but design responsibly.
