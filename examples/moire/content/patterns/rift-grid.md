+++
title = "Rift Grid"
date = "2026-06-18"
description = "Two square grids at a shallow eight-degree offset open a slow diagonal rift across the field."
[extra]
kind = "grid"
pitch = 9
rot1 = 0
rot2 = 8
+++

Lay one square grid flat, drop an identical grid on top, and turn it a mere eight degrees. The lines almost agree — and it is the *almost* that does the work. Where the two rulings drift a half-cell out of step, the crossings bunch into dark knots; where they snap back into phase, the field opens into bright diamonds. The result is a coarse lattice of light that neither grid contains on its own.

<!-- more -->

## The recipe

At a pitch `p` and a rotation `θ`, the spacing of the interference cells is roughly `p / (2·sin(θ/2))`. Small angles yield enormous cells, which is why eight degrees produces a beat you can read from across the room.

```svg
<pattern id="rift" width="9" height="9" patternTransform="rotate(8)">
  <path d="M0 0 H9 M0 0 V9" stroke="#e4e8e2"/>
</pattern>
```

<figure>
<svg viewBox="0 0 400 260" preserveAspectRatio="none" role="img" aria-label="Two square grids offset by eight degrees, producing a diagonal moiré lattice">
  <defs>
    <pattern id="fig-rift-a" width="9" height="9" patternUnits="userSpaceOnUse"><path d="M0 0 H9 M0 0 V9" stroke="#e4e8e2" stroke-width="0.8" fill="none"/></pattern>
    <pattern id="fig-rift-b" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(8)"><path d="M0 0 H9 M0 0 V9" stroke="#e4e8e2" stroke-width="0.8" fill="none" opacity="0.62"/></pattern>
  </defs>
  <rect width="400" height="260" fill="url(#fig-rift-a)"/>
  <rect width="400" height="260" fill="url(#fig-rift-b)"/>
</svg>
<figcaption>Grid A flat, grid B turned 8°, both at a 9px pitch.</figcaption>
</figure>

## Tuning notes

Push the angle past fifteen degrees and the cells shrink below the eye's resolving power — the rift closes into flat grey. Pull it under three degrees and the pattern grows so large the tile can only show one bright lobe. The band from four to ten degrees is where the rift reads as motion even while it holds perfectly still.
