+++
title = "CSS Animations That Shine"
date = "2026-03-28"
tags = ["css", "animation"]
categories = ["development"]
description = "Techniques for adding glamorous motion to your static sites."
+++

Static sites don't have to feel static. With modern CSS, you can add subtle animations that bring warmth and life to every interaction.

## Glow Effects

The `box-shadow` property is your best friend for creating warm, ambient glows:

```css
.card:hover {
  box-shadow:
    0 0 20px rgba(212, 168, 67, 0.3),
    0 0 60px rgba(212, 168, 67, 0.1);
}
```

## Gradient Animations

Animated gradients can simulate the way light shifts across a gemstone's facets:

```css
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.shimmer-text {
  background: linear-gradient(
    90deg,
    #b8860b,
    #f5d680,
    #d4a843,
    #f5d680,
    #b8860b
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s linear infinite;
}
```

## Transitions

Smooth transitions make interactions feel polished:

- Use `0.3s ease` for hover states
- Use `0.5s ease-out` for entrance animations
- Use `cubic-bezier(0.4, 0, 0.2, 1)` for material-style motion

Keep animations purposeful — every motion should guide the eye or provide feedback.
