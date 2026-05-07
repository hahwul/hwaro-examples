+++
title = "Refractive Layers"
date = "2024-05-25"
description = "Why two layers of frosted glass produce a different effect than one thicker layer."
+++

A single thick layer of frosted glass blurs everything behind it uniformly. Two thinner layers, separated by a small air gap, do not — they refract twice, and the second refraction interacts with whatever the first one produced.

## What This Does on Screen

Stacking two `backdrop-filter: blur(8px)` panels with different opacities and a 1–2px offset produces the same visual signature as physical double glazing: a soft chromatic dispersion at the edges, slightly different blur strengths in different directions, and a sense of *depth* that no single panel achieves.

```css
.outer-glass {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(6px);
}
.inner-glass {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px) saturate(120%);
  margin: 4px;
}
```

The effect is most useful for hero panels and modal overlays — surfaces where the user is supposed to feel the layering. For dense interfaces, a single panel is still cheaper and clearer.
