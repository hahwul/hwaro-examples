+++
title = "Slip Hatch"
date = "2026-03-27"
description = "Two fields of parallel hatching, five degrees apart, slip into wide chartreuse bands."
[extra]
kind = "hatch"
pitch = 7
rot1 = 44
rot2 = 49
+++

Parallel hatching is the purest interference source of all — no grid, no rings, just rulings. Cross two hatch fields at a narrow angle and the classic straight-band moiré appears: broad stripes running perpendicular to the bisector of the two rulings, spaced far wider than either set. This is the effect that muddies scanned newspapers and shimmers on folded window screens.

<!-- more -->

## The band spacing

For two rulings of pitch `p` meeting at angle `θ`, the moiré bands sit a distance `p / (2·sin(θ/2))` apart and lean at half that angle. Five degrees on a seven-pixel pitch throws the bands roughly eighty pixels wide — an order of magnitude coarser than the source.

```
band_spacing = pitch / (2 * sin(theta / 2))
band_angle   = 90 - theta / 2
```

<figure>
<svg viewBox="0 0 400 300" preserveAspectRatio="none" role="img" aria-label="Two parallel hatch fields five degrees apart forming wide diagonal bands">
  <defs>
    <pattern id="fig-slip-a" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(44)"><path d="M0 0 V7" stroke="#e4e8e2" stroke-width="0.9" fill="none"/></pattern>
    <pattern id="fig-slip-b" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(49)"><path d="M0 0 V7" stroke="#b7e04b" stroke-width="0.9" fill="none" opacity="0.75"/></pattern>
  </defs>
  <rect width="400" height="300" fill="url(#fig-slip-a)"/>
  <rect width="400" height="300" fill="url(#fig-slip-b)"/>
</svg>
<figcaption>White field at 44°, chartreuse field at 49°, both a 7px pitch.</figcaption>
</figure>

## Tuning notes

The chartreuse field is not decoration — colouring one layer lets the eye separate cause from effect. You can watch the green rulings and the white rulings stay rigidly straight while the bands they conjure sweep across at a different, invented angle. Narrow the gap toward one degree and the bands widen until a single one fills the tile.
