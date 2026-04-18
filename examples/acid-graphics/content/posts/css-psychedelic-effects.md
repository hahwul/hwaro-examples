+++
title = "Building Psychedelic Effects with CSS"
date = "2026-04-05"
tags = ["css", "tutorial", "animation"]
categories = ["technique"]
description = "How to create trippy visual effects using pure CSS animations and blend modes"
+++

Modern CSS provides everything needed to create convincing psychedelic visual effects. No canvas, no WebGL, no JavaScript — just stylesheets.

## Hue Rotation

The simplest psychedelic effect is continuous hue rotation. Applied to a gradient background, it creates a constantly shifting color field:

```css
@keyframes hue-shift {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}

.trippy-bg {
  background: linear-gradient(135deg, #ff00ff, #00ffff, #ffff00);
  animation: hue-shift 8s linear infinite;
}
```

## Mix Blend Modes

Blend modes let overlapping elements interact with each other's colors. `difference` and `exclusion` produce the most psychedelic results:

```css
.overlay {
  mix-blend-mode: difference;
  background: radial-gradient(circle, #ff00ff, transparent);
}
```

When layered, blend modes create complex color interactions that shift as elements move or as the user scrolls.

## Warped Grids

CSS Grid combined with transforms can create the perspective-warped grids common in acid graphics:

```css
.warp-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  transform: perspective(400px) rotateX(30deg);
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 19px,
    #ff00ff33 20px
  );
}
```

## Animation Layering

The key to convincing psychedelic animation is layering multiple effects at different speeds:

- A slow hue rotation on the background (10–20 seconds)
- Medium-speed scale pulsing on decorative elements (3–5 seconds)
- Fast color cycling on accent elements (1–2 seconds)

The different frequencies create visual complexity that feels organic rather than mechanical. Each cycle produces combinations that do not repeat for minutes, keeping the visual experience fresh.

## Performance

CSS animations are GPU-accelerated by default for `transform` and `opacity`. Filter animations like `hue-rotate` may trigger repaints, so use them on smaller elements or add `will-change: filter` to promote them to their own compositor layer.

Keep the total number of animated elements reasonable. A dozen layered animations creates richness. A hundred creates dropped frames.
