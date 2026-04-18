+++
title = "Building a CSS Light Show"
description = "Using CSS keyframes, gradients, and box-shadows to recreate laser beam effects in the browser."
date = "2026-03-28"
tags = ["css", "tutorial"]
categories = ["code"]
template = "page"
+++

You do not need WebGL or Canvas to create compelling light effects. CSS alone can produce glowing beams, animated sweeps, and pulsing neon — all hardware-accelerated and accessible.

## The Glow Stack

The secret to realistic glow is layering multiple `box-shadow` values at different spread radii:

```css
.beam {
  width: 2px;
  height: 200px;
  background: #ff1744;
  box-shadow:
    0 0 10px #ff1744,
    0 0 30px #ff1744,
    0 0 60px rgba(255, 23, 68, 0.5),
    0 0 120px rgba(255, 23, 68, 0.2);
}
```

Each shadow layer adds atmospheric depth. The inner layers are opaque and tight; the outer layers are translucent and diffuse. Together they mimic how light scatters through haze.

## Animating Beam Sweeps

Combine `transform: rotate()` with `translateX()` in a keyframe sequence to simulate a beam scanning across the stage:

```css
@keyframes sweep {
  0%   { transform: rotate(-30deg); }
  100% { transform: rotate(30deg); }
}
```

Set `transform-origin` to the top of the element so the beam pivots from its source point, just like a real laser mounted on a truss.

## Fog with Radial Gradients

Layer semi-transparent `radial-gradient` backgrounds on a pseudo-element to simulate volumetric fog:

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 60%, rgba(255,0,100,0.08), transparent),
    radial-gradient(ellipse at 80% 30%, rgba(0,200,255,0.06), transparent);
  pointer-events: none;
}
```

The `pointer-events: none` ensures the overlay does not interfere with user interaction. Animate `opacity` or `transform: scale()` for a subtle drifting effect.

## Performance Notes

- Prefer `transform` and `opacity` for animations — they run on the compositor thread
- Avoid animating `box-shadow` directly on large elements; use pseudo-elements instead
- Use `will-change: transform` sparingly and only on elements that actually animate
