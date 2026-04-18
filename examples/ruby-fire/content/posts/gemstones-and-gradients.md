+++
title = "Gemstones and Gradients"
date = "2026-03-10"
tags = ["css", "color", "tutorial"]
categories = ["tech"]
description = "How gemstone color theory translates into stunning web gradients."
+++

Gemstones have captivated humanity for millennia. Their colors aren't flat — they shift, refract, and glow. We can capture that magic in CSS.

## The Ruby Spectrum

A natural ruby isn't a single shade of red. It ranges from deep pigeon-blood crimson to bright rose, with flashes of violet and orange depending on the light.

```css
/* Ruby-inspired gradient */
.ruby-surface {
  background: linear-gradient(
    135deg,
    #6b0f1a 0%,
    #b91c1c 30%,
    #e63946 50%,
    #f87171 70%,
    #b91c1c 100%
  );
}
```

## Fire Opal

Fire opals shift from deep amber to electric orange, with internal fire that seems to move as you tilt the stone:

```css
.fire-opal {
  background: linear-gradient(
    45deg,
    #92400e,
    #d97706,
    #f59e0b,
    #fbbf24,
    #d97706
  );
  background-size: 200% 200%;
  animation: shimmer 3s ease infinite;
}

@keyframes shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

## Garnet Depths

Garnets are the deep, moody cousins of rubies. Their dark burgundy tones create perfect backgrounds:

```css
.garnet-bg {
  background: radial-gradient(
    ellipse at center,
    #3b0a0a 0%,
    #1a0505 70%,
    #0a0a0f 100%
  );
}
```

## Practical Application

When designing with gemstone palettes, remember:

- **Primary accent** — Your brightest tone (ruby red) for CTAs and key elements
- **Secondary warmth** — Amber and gold for supporting highlights
- **Deep background** — Near-black with a warm undertone for depth
- **Text contrast** — Light warm whites that complement rather than fight the palette

The best color palettes don't just look good — they feel like something.
