+++
title = "Building a Neon Theme with CSS"
date = "2025-05-20"
description = "Technical deep dive into creating neon glow effects with pure CSS"
tags = ["css", "tutorial", "web-design"]
template = "page"
+++

Creating authentic neon effects in CSS requires layering multiple techniques — from `text-shadow` glows to animated `box-shadow` pulses.

## CSSでネオンを作る

The foundation of any neon effect is the **glow** — a soft, colored light that radiates outward from the element.

### Text Glow

The classic neon text effect uses multiple `text-shadow` layers at increasing blur radius:

```css
.neon-text {
  color: #fff;
  text-shadow:
    0 0 7px #ff2d78,
    0 0 10px #ff2d78,
    0 0 21px #ff2d78,
    0 0 42px #ff007f,
    0 0 82px #ff007f,
    0 0 92px #ff007f;
}
```

Each layer adds depth. The inner layers (small blur) create the bright core, while outer layers (large blur) create the soft ambient glow.

### Animated Flicker

Real neon signs flicker — a subtle imperfection that adds life:

```css
@keyframes neon-flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow:
      0 0 7px #ff2d78,
      0 0 10px #ff2d78,
      0 0 21px #ff2d78;
  }
  20%, 24%, 55% {
    text-shadow: none;
  }
}

.flickering-sign {
  animation: neon-flicker 1.5s infinite alternate;
}
```

### Box Glow

For glowing containers and cards:

```css
.neon-card {
  border: 1px solid rgba(0, 240, 255, 0.3);
  box-shadow:
    0 0 5px rgba(0, 240, 255, 0.1),
    0 0 20px rgba(0, 240, 255, 0.05),
    inset 0 0 20px rgba(0, 240, 255, 0.03);
  transition: box-shadow 0.3s ease;
}

.neon-card:hover {
  box-shadow:
    0 0 10px rgba(0, 240, 255, 0.3),
    0 0 40px rgba(0, 240, 255, 0.15),
    inset 0 0 30px rgba(0, 240, 255, 0.05);
}
```

### Performance Considerations

Neon effects can be GPU-intensive. Keep these tips in mind:

1. **Limit animated elements** — Only animate the most impactful elements
2. **Use `will-change`** — Hint to the browser about upcoming animations
3. **Reduce on mobile** — Use `@media` queries to simplify effects on smaller devices
4. **Prefer `transform` and `opacity`** — These are the cheapest properties to animate

The result is a design that captures the magic of Tokyo's night — all with standard CSS.
