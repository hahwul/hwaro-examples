+++
title = "Compute Shaders & Custom Passes"
description = "Antialiasing and clip masks as compute passes instead of blend tricks, and how to insert your own pass into the frame graph."
date = "2025-05-27"
weight = 50
toc = true
[extra]
section_id = "RHY.5"
status = "beta"
+++

Everything through [the GPU pipeline](/learn/pipeline/) produces triangles and gets them to the GPU efficiently, but raw triangle coverage is jagged and unclipped. Older 2D renderers resolve that with stencil buffers and multisampling. Rhyolite resolves it with compute: a handful of compute-shader passes run between the rasterizer and the swapchain present, each one reading and writing a small set of storage buffers rather than reaching for a blend trick.

<!-- more -->

## Coverage accumulation

The rasterizer's fragment stage doesn't write color directly — it writes signed coverage deltas into a per-tile storage buffer, one accumulator per 8x8 pixel tile the shape's edges cross. A compute pass then does a prefix sum across each tile row to turn deltas into winding-rule coverage, which is the same trick software rasterizers like the one behind stb_truetype and FreeType use for antialiasing, just moved onto the GPU and parallelized across tiles instead of scanlines:

```wgsl
@group(0) @binding(0) var<storage, read> deltas: array<f32>;
@group(0) @binding(1) var<storage, read_write> coverage: array<f32>;

@compute @workgroup_size(64)
fn accumulate_coverage(@builtin(global_invocation_id) gid: vec3<u32>) {
    let tile_row = gid.x;
    var running: f32 = 0.0;
    for (var x: u32 = 0u; x < 8u; x = x + 1u) {
        running = running + deltas[tile_row * 8u + x];
        coverage[tile_row * 8u + x] = clamp(running, 0.0, 1.0);
    }
}
```

## Clip masks without a stencil buffer

Clips are just paths, so instead of the classic stencil-buffer approach — draw the clip shape, mark the stencil, draw the content masked by it, repeat per nesting level — Rhyolite rasterizes every active clip in the current node's ancestor chain into the same coverage buffer using a `min` combine instead of accumulation. Nesting eight clips costs eight cheap compute dispatches against small tile buffers, not eight full-screen stencil passes, which is why deeply nested clip groups (a common shape in generative art and map rendering) don't fall off a performance cliff the way stencil-based clipping does.

<figure class="figure-bleed blueprint-grid" aria-label="Frame graph of the resolve passes: rasterize to coverage deltas, then three compute passes in sequence: prefix sum, clip combine, and final blend, before present">
  <svg viewBox="0 0 640 200" class="diagram" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="square" aria-hidden="true" focusable="false">
    <path d="M105 30 H165"/>
    <path d="M295 30 H355"/>
    <path d="M485 30 H545"/>
    <rect x="15" y="10" width="90" height="40"/>
    <rect x="165" y="10" width="130" height="40" stroke-dasharray="3 3"/>
    <rect x="355" y="10" width="130" height="40" stroke-dasharray="3 3"/>
    <rect x="545" y="10" width="80" height="40"/>
    <g font-family="var(--font-mono)" font-size="10" fill="var(--fg)" stroke="none" text-anchor="middle">
      <text x="60" y="35">rasterize</text>
      <text x="230" y="30">prefix-sum</text>
      <text x="230" y="43">coverage</text>
      <text x="420" y="30">clip combine</text>
      <text x="420" y="43">(min)</text>
      <text x="585" y="35">present</text>
    </g>
    <g font-family="var(--font-mono)" font-size="10" fill="var(--muted)" stroke="none">
      <text x="165" y="90">custom passes insert here —</text>
      <text x="165" y="103">blur, glow, your own compute stage</text>
    </g>
  </svg>
  <figcaption>Dashed boxes are the two built-in compute passes; a custom pass registered with <code>add_compute_pass</code> can be inserted anywhere in this chain.</figcaption>
</figure>

## Writing your own pass

The frame graph is open. `add_compute_pass` takes a name, a position relative to the built-in passes, and a closure that dispatches your own `wgpu` compute pipeline against the same storage buffers:

```rust
scene.add_compute_pass("glow", PassOrder::After("clip-combine"), |ctx| {
    ctx.bind_storage("coverage", &ctx.coverage_buffer());
    ctx.bind_uniform("radius", &glow_radius);
    ctx.dispatch(GLOW_SHADER, (ctx.tile_cols() / 8, ctx.tile_rows() / 8, 1));
});
```

This is `beta` because the binding layout custom passes read is still expected to change shape before 1.0 — today it exposes the coverage and clip buffers directly, and a later release will likely wrap them in a more restrictive view so built-in passes can change their internal tiling without breaking every custom pass in the wild. If you're shipping a custom pass today, pin your Rhyolite version.
