+++
title = "Gilded Restraint"
date = "2024-04-19"
description = "How a single accent of gold defines the entire visual language of a dark interface."
+++

Gold-on-black is a classic combination because gold is one of the few colors that holds presence against deep darks without screaming. The trick is restraint — too much gold reads as gaudy, and the effect collapses into casino chrome.

## The Rule of One

A gold accent works best when there is exactly one focal point per viewport. The first headline of a section, a primary action button, or a single decorative rule. Everything else stays in a tight grayscale band — charcoal, slate, ivory.

## Texture Matters

Flat gold (`#d4af37`) reads as plastic at large surfaces. Gradient gold reads as 1990s web banner. The most convincing gold uses a slight noise texture or a thin metallic-leaf gradient that only varies in luminance, not in hue.

```css
.gold {
  background: linear-gradient(180deg, #e2c069 0%, #b88a2e 100%);
  background-blend-mode: multiply;
  background-image: url('grain.png'), linear-gradient(180deg, #e2c069, #b88a2e);
}
```

The grain texture is what separates "metallic" from "yellow." Without it, the gold reads as a logo color rather than a material.
