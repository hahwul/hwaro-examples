+++
title = "Tuning the Horizon Light"
description = "How the horizon glow drives the rest of the page's color palette."
date = "2024-03-12"
template = "page"
tags = ["design", "color"]
+++

## The Horizon Sets the Tone

In Aero Glass Horizon, the horizon line at the top of the viewport is the anchor for every other accent color on the page. Pick the horizon hue first, then derive secondary accents from it.

### Picking the Horizon

A horizon at `#1a0f3d` to `#7a2cff` reads as twilight: deep enough to feel like night, vivid enough to set the mood. Push it any cooler and the page goes cold; push it any warmer and the glassmorphism stops feeling aerial.

### Cascading the Palette

```css
:root {
  --horizon-deep: #1a0f3d;
  --horizon-glow: #7a2cff;
  --accent-1: color-mix(in oklab, var(--horizon-glow) 60%, white);
  --accent-2: color-mix(in oklab, var(--horizon-glow) 80%, cyan);
}
```

The accents are derivatives. The horizon is the source. If the design feels off, the fix is almost always at the horizon, not at the accents.
