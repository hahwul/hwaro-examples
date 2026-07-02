+++
title = "The GPU Pipeline: Batching & Instancing"
description = "How thousands of tessellated shapes reach the screen in a handful of draw calls instead of thousands of them."
date = "2025-04-22"
weight = 40
toc = true
[extra]
section_id = "RHY.4"
status = "stable"
+++

Tessellation happens on the CPU, once per dirty shape. What happens next happens on the GPU, once per frame, for every shape whether it changed or not — and that's the step that has to stay fast even at ten thousand shapes. Rhyolite's answer is the same one every efficient 2D renderer converges on: stop issuing one draw call per shape and instead draw many shapes that share a pipeline state in a single instanced call.

<!-- more -->

## Three buffers, one draw call

Every frame, the pipeline walks the scene graph's dirty list, appends any newly-tessellated geometry to a persistent vertex/index buffer, and writes one small `Instance` record per visible shape into a per-instance buffer:

```rust
#[repr(C)]
struct Instance {
    transform: [f32; 6], // 2x3 affine, world space
    paint_index: u32,    // offset into the paint uniform buffer
    clip_index: u32,     // offset into the clip stack buffer
}
```

Shapes that share a `Geometry` slot — the same path tessellated once — and a pipeline state (same blend mode, same clip depth) become one `wgpu::draw_indexed` call with an instance count, rather than N calls. A UI redrawing four thousand identical glyph-cell backgrounds costs one draw call and one instance-buffer write of four thousand small records, not four thousand calls.

<figure class="figure-bleed blueprint-grid" aria-label="Pipeline stages from scene graph to GPU draw: tessellate, batch by pipeline state, write instance buffer, then one instanced draw call per batch">
  <svg viewBox="0 0 640 220" class="diagram" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="square" aria-hidden="true" focusable="false">
    <path d="M110 40 H210"/>
    <path d="M310 40 H410"/>
    <path d="M510 40 H540 V100 H590"/>
    <rect x="20" y="20" width="90" height="40"/>
    <rect x="210" y="20" width="100" height="40"/>
    <rect x="410" y="20" width="100" height="40"/>
    <rect x="540" y="80" width="80" height="40"/>
    <g font-family="var(--font-mono)" font-size="10.5" fill="var(--fg)" stroke="none" text-anchor="middle">
      <text x="65" y="45">scene</text>
      <text x="260" y="40">tessellate</text>
      <text x="260" y="53">+ cache</text>
      <text x="460" y="40">batch by</text>
      <text x="460" y="53">pipeline state</text>
      <text x="580" y="105">instanced</text>
      <text x="580" y="118">draw</text>
    </g>
    <g font-family="var(--font-mono)" font-size="10" fill="var(--muted)" stroke="none">
      <text x="20" y="90">dirty nodes only</text>
      <text x="410" y="90">1 call per batch</text>
    </g>
  </svg>
  <figcaption>Only dirty nodes re-enter tessellation; the batcher groups everything by shared pipeline state before the GPU sees a single instanced draw per batch.</figcaption>
</figure>

## What forces a new batch

Batches split on pipeline state, not on shape count, so the things that actually cost you a draw call are: a blend mode change, a texture change (gradients and images live in an atlas specifically to avoid this), and a clip stack depth change. A scene with three overlapping semi-transparent layers and nothing else beneath them still needs three batches minimum, because blend order can't be reordered across a transparency boundary. Opaque geometry has no such constraint and can be reordered freely for batching, which is why Rhyolite sorts opaque shapes by pipeline state first and only falls back to strict paint order once alpha blending is involved.

The instance buffer is a ring of three GPU-visible regions, one per frame in flight, so writing this frame's instances never stalls waiting on the GPU to finish reading last frame's. Chapter five looks at what happens after the draw call — the compute passes that turn that raw triangle coverage into an antialiased, clipped image.

{{ alert(type="caution", body="Toggling a blend mode on one shape inside a large opaque batch splits that batch in two. If a handful of shapes need transparency, isolate them in their own group rather than interleaving them through an otherwise opaque tree — the batcher cannot merge across a blend-mode boundary no matter how the rest of the scene is organized.") }}

[Chapter five](/learn/compute/) is where the raw triangle coverage this pipeline produces gets resolved into an antialiased, clipped image.
