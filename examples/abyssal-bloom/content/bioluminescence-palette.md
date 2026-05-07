+++
title = "The Bioluminescence Palette"
description = "Choosing accent colors that glow against deep void backgrounds without burning out the eye."
date = "2024-03-02"
template = "page"
tags = ["color", "design", "bioluminescence"]
+++

## Picking Glow Colors

Bioluminescent organisms tend toward narrow color ranges — cyan, electric green, and the occasional violet. Their light reads as bright because it sits against deep blue-black water with very little ambient light to compete with.

The same logic applies on screen. Pick two accent hues:

- A **dominant glow** for primary actions and key highlights — `#00f0ff` works well.
- A **counterpoint glow** for warnings, hovers, or secondary marks — `#ff007f` or `#a16bff` add contrast without fighting the dominant.

### Reserve Saturation

```css
:root {
  --void: #05020a;
  --glow-primary: #00f0ff;
  --glow-secondary: #ff007f;
  --glass-fill: rgba(10, 5, 20, 0.4);
}
```

Saturation is expensive. If everything glows, nothing glows. Limit fully saturated swatches to small surfaces — a button border, an icon, a single chart line — and let the rest of the page sit at 30–50% saturation.

## Glow as a Hierarchy Tool

Treat the brightest light like a spotlight. The element you want the user to act on should be the most luminous thing on the page. Everything else fades into the void.
