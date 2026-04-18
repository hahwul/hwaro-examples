+++
title = "CSS Animations Done Right"
date = "2026-01-10"
tags = ["css", "animation"]
categories = ["blog"]
description = "How to create smooth, performant CSS animations that enhance rather than distract."
+++

Animation on the web is a double-edged sword. Done well, it adds polish and guides user attention. Done poorly, it creates motion sickness and frustration.

## Performance First

The golden rule: only animate `transform` and `opacity`. These properties are handled by the GPU compositor, meaning smooth 60fps animation even on modest hardware.

```css
/* Good — compositor-friendly */
.card {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
  opacity: 0.95;
}

/* Avoid — triggers layout recalculation */
.card:hover {
  margin-top: -4px;
  height: calc(100% + 4px);
}
```

## The Gradient Mesh Animation

This site's background uses a technique worth examining:

1. Multiple `radial-gradient` layers create the mesh
2. A CSS `@keyframes` animation shifts `background-position`
3. `background-size` is set larger than the viewport (e.g., `400% 400%`)
4. The animation runs on an infinite loop with a long duration

The result: organic, flowing color that never repeats in a noticeable pattern.

## Respecting User Preferences

Always honor `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .animated-bg {
    animation: none;
  }
}
```

Animation should be an enhancement, never a barrier to access.
