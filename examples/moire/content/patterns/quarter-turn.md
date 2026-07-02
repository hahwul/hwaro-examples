+++
title = "Quarter Turn"
date = "2026-01-14"
description = "A grid against its own near-perpendicular copy, weaving a fine basket of interference."
[extra]
kind = "grid"
pitch = 12
rot1 = 2
rot2 = 43
+++

Most grid moirés live at shallow angles. This one does the opposite: it sets a grid against a near-quarter-turn of itself, forty-three degrees over. Close to ninety the two rulings would simply weave into a denser grid, but held a few degrees shy of square they interfere along both axes at once, and the field fills with a tight, woven basket that flickers between warp and weft.

<!-- more -->

## Two beats at once

Because a grid carries rulings in two directions, rotating it near the diagonal makes each direction beat against *both* directions of the other grid. The eye receives two overlapping band systems crossing at roughly right angles — hence the basket weave rather than a single stripe.

```svg
<!-- near-perpendicular grids weave in both axes -->
<rect fill="url(#gridA)"/>
<rect fill="url(#gridB)" transform="rotate(43)"/>
```

<figure>
<svg viewBox="0 0 380 260" preserveAspectRatio="none" role="img" aria-label="A grid overlaid with a near-perpendicular copy forming a woven basket pattern">
  <defs>
    <pattern id="fig-qt-a" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(2)"><path d="M0 0 H12 M0 0 V12" stroke="#e4e8e2" stroke-width="0.9" fill="none"/></pattern>
    <pattern id="fig-qt-b" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(43)"><path d="M0 0 H12 M0 0 V12" stroke="#e4e8e2" stroke-width="0.9" fill="none" opacity="0.6"/></pattern>
  </defs>
  <rect width="380" height="260" fill="url(#fig-qt-a)"/>
  <rect width="380" height="260" fill="url(#fig-qt-b)"/>
</svg>
<figcaption>Grid at 2°, its copy at 43°, both a 12px pitch.</figcaption>
</figure>

## Tuning notes

Slide the second grid the last few degrees to a true ninety and the basket dissolves into an ordinary tartan; the interference needs the mismatch to survive. The larger twelve-pixel pitch keeps the weave legible — at the tighter pitches used elsewhere in this library the basket would collapse into a grey shimmer too fine to name.
