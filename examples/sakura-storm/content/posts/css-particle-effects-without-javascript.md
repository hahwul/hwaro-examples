+++
title = "CSS Particle Effects Without JavaScript"
date = "2026-04-03"
tags = ["css", "animation"]
categories = ["tutorial"]
description = "Creating falling petal particle effects using pure CSS animations and pseudo-elements."
template = "post"
+++

One of the most striking features of the Sakura Storm theme is the floating cherry blossom petals. The best part? They're pure CSS — no JavaScript required.

## The Technique

The core approach uses multiple `div` elements with CSS animations to simulate falling, swirling particles:

### Step 1: Create Petal Elements

```html
<div class="petal petal-1">🌸</div>
<div class="petal petal-2">🌸</div>
<div class="petal petal-3">🌸</div>
```

### Step 2: Position and Animate

```css
.petal {
  position: fixed;
  font-size: 1.5rem;
  opacity: 0.6;
  pointer-events: none;
  z-index: 0;
  animation: petal-fall linear infinite;
}

@keyframes petal-fall {
  0% {
    transform: translateY(-10vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.7;
  }
  90% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(105vh) rotate(360deg);
    opacity: 0;
  }
}
```

### Step 3: Stagger the Timing

Each petal gets different duration, delay, and horizontal position to create a natural, non-repetitive pattern:

```css
.petal-1 { left: 10%; animation-duration: 12s; animation-delay: 0s; }
.petal-2 { left: 30%; animation-duration: 15s; animation-delay: 3s; }
.petal-3 { left: 70%; animation-duration: 10s; animation-delay: 7s; }
```

## Performance Considerations

CSS animations are GPU-accelerated when using `transform` and `opacity`, making them far more performant than JavaScript-driven particle systems. Key tips:

- Use `will-change: transform` sparingly
- Keep particle count reasonable (8-12 is plenty)
- Use `pointer-events: none` so particles don't interfere with clicks
- Set low `z-index` to keep content accessible

## The Result

With just CSS, you get a beautiful ambient effect that brings the sakura storm to life — petals drifting, swirling, and fading as they fall through the twilight background.
