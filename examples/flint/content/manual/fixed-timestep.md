+++
title = "The Fixed Timestep"
description = "Why the world advances in whole ticks, how the accumulator drains real time, and how rendering interpolates the remainder."
date = "2025-03-04"
weight = 20
toc = true
[extra]
label = "02 · time"
+++

A physics step is only reproducible if it always sees the same `dt`. flint fixes the timestep at world construction — the default is `1/60 s` — and never scales it by the frame's wall-clock duration. Variable steps make integration and contact resolution frame-rate dependent, and frame-rate dependence is the enemy of determinism.

<!-- more -->

## The accumulator

Your render loop runs at whatever rate the display allows. To reconcile a wobbly render clock with a fixed simulation clock, drain elapsed real time in fixed slices:

```rust
const DT: f32 = 1.0 / 60.0;
let mut accumulator = 0.0;

fn frame(world: &mut World, real_elapsed: f32, accumulator: &mut f32) {
    *accumulator += real_elapsed.min(0.25); // clamp to escape the spiral of death
    while *accumulator >= DT {
        world.step();
        *accumulator -= DT;
    }
    let alpha = *accumulator / DT; // 0..1, how far into the next tick we are
    render(world, alpha);
}
```

<figure class="diagram px-frame"><div class="px-frame-in">
<svg viewBox="0 0 440 120" role="img" aria-labelledby="tl-title" shape-rendering="crispEdges">
  <title id="tl-title">A render frame consuming three fixed ticks, leaving a partial remainder in the accumulator</title>
  <line x1="20" y1="70" x2="420" y2="70" stroke="#211e1c" stroke-width="2"/>
  <g fill="#211e1c" font-family="'Fira Code', monospace" font-size="12">
    <rect x="20" y="60" width="2" height="20"/>
    <rect x="120" y="60" width="2" height="20"/>
    <rect x="220" y="60" width="2" height="20"/>
    <rect x="320" y="60" width="2" height="20"/>
    <text x="60" y="52" text-anchor="middle">tick</text>
    <text x="160" y="52" text-anchor="middle">tick</text>
    <text x="260" y="52" text-anchor="middle">tick</text>
  </g>
  <rect x="320" y="60" width="60" height="20" fill="#be123c" fill-opacity="0.18"/>
  <rect x="380" y="60" width="2" height="20" fill="#be123c"/>
  <g fill="#be123c" font-family="'Fira Code', monospace" font-size="12">
    <text x="350" y="98" text-anchor="middle">remainder</text>
    <text x="350" y="52" text-anchor="middle">&#945;</text>
  </g>
</svg>
<figcaption>One render frame consumed three whole ticks; the leftover <span class="mono">remainder</span> becomes the interpolation factor <span class="mono">&#945;</span> for the next draw.</figcaption>
</div></figure>

## Interpolation, not extrapolation

The `alpha` remainder is used **only for rendering**. Interpolate each body's drawn transform between its previous and current simulated states:

```rust
let draw_pos = prev.position.lerp(curr.position, alpha);
```

This smooths motion on high-refresh displays without ever letting the renderer influence the simulation. The simulation state stays discrete and exact; only the pixels are continuous.

> Clamp accumulated time before the loop. If a frame stalls — a GC pause, a breakpoint — an unclamped accumulator asks flint to run hundreds of catch-up steps, each of which makes the next frame later. That feedback loop is the "spiral of death," and a single `.min(0.25)` prevents it.
