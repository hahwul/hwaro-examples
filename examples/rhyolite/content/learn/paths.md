+++
title = "Paths & Control Cages"
description = "Build vector paths from cubic beziers and see the control cage the tessellator will later consume."
date = "2025-01-14"
weight = 10
toc = true
[extra]
section_id = "RHY.1"
status = "stable"
+++

Everything Rhyolite draws starts as a `Path`: a sequence of move, line, and bezier commands recorded by a `PathBuilder`. Nothing is rasterized yet. A path is pure geometry — anchor points and the control points that pull the curve toward them — and it stays that way until you hand it to the scene graph.

<!-- more -->

## Anchors and handles

A cubic bezier segment is defined by four points: the anchor you're leaving, two control points that steer the curve, and the anchor you're arriving at. Editors call the four points together a *control cage*, because the dashed lines from anchor to control point form a loose polygon around the curve they produce.

<figure class="figure-bleed blueprint-grid" aria-label="A path made of two cubic bezier segments, with its control cage of anchor points and control handles drawn on a blueprint grid">
  <svg viewBox="0 0 640 300" class="diagram" fill="none" stroke-linecap="round" aria-hidden="true" focusable="false">
    <path d="M50,250 C50,90 220,20 340,60" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M340,60 C440,95 560,90 590,220" stroke="var(--accent)" stroke-width="2.5"/>
    <g stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 4">
      <path d="M50,250 L50,90"/>
      <path d="M340,60 L220,20"/>
      <path d="M340,60 L440,95"/>
      <path d="M590,220 L560,90"/>
    </g>
    <g fill="var(--accent)">
      <rect x="45" y="245" width="10" height="10"/>
      <rect x="335" y="55" width="10" height="10"/>
      <rect x="585" y="215" width="10" height="10"/>
    </g>
    <g fill="var(--bg)" stroke="var(--accent)" stroke-width="1.6">
      <circle cx="50" cy="90" r="5.5"/>
      <circle cx="220" cy="20" r="5.5"/>
      <circle cx="440" cy="95" r="5.5"/>
      <circle cx="560" cy="90" r="5.5"/>
    </g>
    <g font-family="var(--font-mono)" font-size="11" fill="var(--muted)" stroke="none">
      <text x="30" y="272">P0</text>
      <text x="348" y="52">P1</text>
      <text x="600" y="238">P2</text>
      <text x="58" y="84">C0</text>
      <text x="228" y="14">C1</text>
      <text x="448" y="90">C2</text>
      <text x="500" y="84">C3</text>
    </g>
  </svg>
  <figcaption>Two cubic segments sharing anchor P1. Squares are anchors, circles are control points; the dashed cage shows which control pulls which curve.</figcaption>
</figure>

## Building the path

```rust
use rhyolite::{Path, Point};

let mut path = Path::builder();
path.move_to(Point::new(50.0, 250.0));
path.cubic_to(
    Point::new(50.0, 90.0),   // C0
    Point::new(220.0, 20.0),  // C1
    Point::new(340.0, 60.0),  // P1
);
path.cubic_to(
    Point::new(440.0, 95.0),  // C2
    Point::new(560.0, 90.0),  // C3
    Point::new(590.0, 220.0), // P2
);
let path = path.finish();
```

`Path::builder()` records commands into a compact op list — one byte per command tag plus its points — and never allocates per-point. `finish()` freezes the path into an immutable, cheaply cloneable value you can hand to more than one scene node.

## Quadratics, arcs, and closing

`quad_to` records a single-control quadratic, which Rhyolite promotes to a cubic internally so the tessellator only ever has one curve type to reason about. `arc_to` takes a radius and sweep and is converted to a short run of cubics at build time, each within 0.1% of the true arc at default tolerance. Call `close()` to draw a final segment back to the path's first anchor and mark it closed for filling; an open path can still be stroked, but `Tessellator::fill` will refuse it.

Paths carry no color, no transform, and no paint. That separation is deliberate — the same `Path` value can be filled in one part of the scene and stroked in another, at two different scales, sharing one tessellated cache entry when the scale matches. [Chapter two](/learn/scene-graph/) puts that path into the scene graph, where it starts to matter which node owns it.
