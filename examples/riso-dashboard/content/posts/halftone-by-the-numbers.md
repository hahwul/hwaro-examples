+++
title = "Halftone by the Numbers"
date = "2026-01-21"
draft = false
description = "Choosing a dot screen so a single flat ink can pretend to be a dozen shades of itself."
tags = ["halftone", "screen", "duotone"]
categories = ["process"]
reading_time = 3
+++

A riso lays down one density of ink. To get anything lighter, you do not dilute the ink &mdash; you break the fill into dots and let the paper show through between them. That is the halftone, and the dot size is a design decision.

## picking a screen

We default to an 8px dot for this studio. It is coarse enough to read as texture from across the room and fine enough to hold a clean edge in a meter bar.

- **Coarse dots** (10px+): loud, zine-like, great for posters.
- **Mid dots** (6&ndash;8px): our house screen, works for fills and charts.
- **Fine dots** (under 4px): nearly solid, loses the riso character.

## tuning a meter

Each ink-level bar on the dashboard is a halftone fill, not a flat block. The percentage is just how wide we let the dotted region run.

```css
.meter-fill {
  background-image: var(--halftone-blue);
  background-repeat: repeat;
}
```

The dot stays the same size while the bar grows, so a half-full drum reads as a literal half-screen of dots. It is the same logic the press uses, ported to the panel.

> A flat ink and a good screen will give you a dozen shades for the price of one.
