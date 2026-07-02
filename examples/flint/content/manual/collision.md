+++
title = "Collision Manifolds"
description = "Broadphase to narrowphase, and the compact contact manifold — points, normal, penetration — that the solver consumes."
date = "2025-06-17"
weight = 40
toc = true
[extra]
label = "04 · contact"
+++

Contact detection runs in two passes. **Broadphase** cheaply rejects pairs that cannot possibly touch; **narrowphase** takes the survivors and produces the exact geometry of each overlap. That geometry is a *manifold*, and it is the only thing the solver ever sees.

<!-- more -->

## Broadphase

flint sorts body bounds along an axis and sweeps, reporting overlapping intervals — sweep-and-prune. It is `O(n log n)` on the sort and near-linear on the sweep for the coherent, mostly-still scenes games produce. The output is a list of candidate pairs, deterministically ordered by `BodyId`, because a stable pair order is a prerequisite for a stable solve.

## Narrowphase and the manifold

For each candidate pair, narrowphase runs the separating-axis test for polygons and analytic tests for circles and capsules. When shapes overlap it emits a `Manifold`:

<figure class="diagram px-frame"><div class="px-frame-in">
<svg viewBox="0 0 440 240" role="img" aria-labelledby="mf-title mf-desc" shape-rendering="geometricPrecision">
  <title id="mf-title">A box resting on a surface with a two-point contact manifold</title>
  <desc id="mf-desc">Box A overlaps ground B along a shared edge. Two contact points sit on the surface, a single normal points up out of B, and a bracket marks penetration depth.</desc>
  <rect x="20" y="170" width="400" height="52" fill="#f3f0e9" stroke="#211e1c" stroke-width="3" shape-rendering="crispEdges"/>
  <rect x="150" y="80" width="140" height="98" fill="#fdfcfa" stroke="#211e1c" stroke-width="3" shape-rendering="crispEdges"/>
  <rect x="150" y="170" width="140" height="10" fill="#be123c" fill-opacity="0.16"/>
  <path d="M220 170V116" stroke="#be123c" stroke-width="4"/>
  <path d="M220 104 210 122h20z" fill="#be123c"/>
  <g fill="#be123c" shape-rendering="crispEdges">
    <rect x="144" y="164" width="12" height="12"/>
    <rect x="284" y="164" width="12" height="12"/>
  </g>
  <g stroke="#be123c" stroke-width="2" fill="none">
    <path d="M110 170h14M110 180h14M117 170v10"/>
  </g>
  <g font-family="'Fira Code', monospace" font-size="14" fill="#211e1c">
    <text x="220" y="134" text-anchor="middle">A</text>
    <text x="360" y="202" text-anchor="middle">B</text>
  </g>
  <g font-family="'Fira Code', monospace" font-size="13" fill="#be123c">
    <text x="232" y="112">n</text>
    <text x="96" y="182" text-anchor="end">d</text>
  </g>
</svg>
<figcaption>A manifold: up to two contact points, one shared normal <span class="mono">n</span> pointing out of B, and penetration depth <span class="mono">d</span>.</figcaption>
</div></figure>

```rust
pub struct Contact {
    pub point: Vec2,        // world-space contact position
    pub penetration: f32,   // overlap depth along the normal, >= 0
    pub normal_impulse: f32, // cached for warm starting next frame
    pub tangent_impulse: f32,
}

pub struct Manifold {
    pub a: BodyId,
    pub b: BodyId,
    pub normal: Vec2,       // unit vector, points from A toward B
    pub contacts: [Contact; 2],
    pub count: u8,          // 1 for point contact, 2 for an edge
}
```

Two points are enough to describe any planar contact between convex shapes, so `contacts` is a fixed array — no allocation, no per-frame growth. A box on the ground yields `count = 2`; a circle on the ground yields `count = 1`.

## Persistence

Manifolds are matched across frames by their `(a, b)` pair and their contact identifiers. When a contact persists, its `normal_impulse` and `tangent_impulse` carry over. That cached impulse is the seed the solver warm-starts from in the [next chapter](/manual/solver/) — the single most important trick for making stacks converge in a handful of iterations.
