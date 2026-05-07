+++
title = "Anamorphic Distortion in Grids"
date = "2024-04-12"
description = "Stretching layout proportions to create a viewing-angle illusion without breaking responsive behavior."
weight = 1
template = "page"
+++

Anamorphic effects rely on a deliberate distortion that resolves into something recognizable from a single viewpoint. Translating that to a web layout means controlling proportions per breakpoint instead of fighting them.

## The Core Trick

Set up the grid to deform along the width axis at smaller viewports. Headlines stretch wider, image crops favor the horizontal — and at a wide viewport, the layout snaps back to a balanced 12-column rhythm.

```css
.canvas {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  letter-spacing: clamp(-0.04em, -1vw, 0em);
}
```

The stretched letterforms hint at an off-axis camera lens. Read straight on, the page looks slightly compressed. Read across the diagonal — paragraph by paragraph — it resolves.

## When It Falls Apart

Anamorphic distortion is fragile. Add a third reading axis (animation, parallax, scroll-driven hue shifts) and the illusion collapses into noise. Pick the one axis the layout deforms along, and leave the rest alone.
