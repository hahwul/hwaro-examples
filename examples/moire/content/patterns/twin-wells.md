+++
title = "Twin Wells"
date = "2025-09-21"
description = "Two ring sets pulled wide apart, their fringes tightening into a pair of facing rosettes."
[extra]
kind = "rings"
pitch = 8
rot1 = 52
rot2 = 68
+++

Ring Beat kept its two centres close and calm. Twin Wells pulls them apart until the hyperbolic fringes curl right back on themselves, forming two facing rosettes that seem to orbit a shared axis. The wider the centres, the tighter the curl — this is the same physics as a two-slit diffraction pattern, drawn in ink instead of light.

<!-- more -->

## From arcs to rosettes

As the centre-to-centre distance grows past the ring spacing, the whole numbers of the difference-count pile up quickly, and the hyperbolas nest into dense whorls near each centre. Between the wells the fringes flatten into the near-vertical fence that always marks the perpendicular bisector.

```
fringe_order(P) = round( dist(P, centre_A) - dist(P, centre_B) )   # in ring-steps
```

<figure>
<svg viewBox="0 0 340 260" role="img" aria-label="Two widely separated ring sets forming facing rosettes with a straight fence between them">
  <g fill="none" stroke="#e4e8e2" stroke-width="0.8">
    <circle cx="120" cy="130" r="12"/><circle cx="120" cy="130" r="24"/><circle cx="120" cy="130" r="36"/><circle cx="120" cy="130" r="48"/><circle cx="120" cy="130" r="60"/><circle cx="120" cy="130" r="72"/><circle cx="120" cy="130" r="84"/><circle cx="120" cy="130" r="96"/><circle cx="120" cy="130" r="108"/><circle cx="120" cy="130" r="120"/>
  </g>
  <g fill="none" stroke="#e4e8e2" stroke-width="0.8" opacity="0.6">
    <circle cx="220" cy="130" r="12"/><circle cx="220" cy="130" r="24"/><circle cx="220" cy="130" r="36"/><circle cx="220" cy="130" r="48"/><circle cx="220" cy="130" r="60"/><circle cx="220" cy="130" r="72"/><circle cx="220" cy="130" r="84"/><circle cx="220" cy="130" r="96"/><circle cx="220" cy="130" r="108"/><circle cx="220" cy="130" r="120"/>
  </g>
</svg>
<figcaption>Two ring sets, radius step 8px, centres 100px apart in the enlarged plate.</figcaption>
</figure>

## Tuning notes

Twin Wells is the most fragile field in the collection: nudge either centre a few pixels and the rosettes swing hard, because the fringe count is so sensitive to distance near the wells. That sensitivity is exactly why the tessellation feels alive — it looks like two forces holding each other in a standoff across the plate.
