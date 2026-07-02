+++
title = "Tessellation: Fills & Strokes"
description = "How a dirty path becomes triangles: adaptive flattening, fan fills, and offset-polygon strokes with joins and caps."
date = "2025-03-18"
weight = 30
toc = true
[extra]
section_id = "RHY.3"
status = "stable"
+++

The GPU has no idea what a bezier curve is. Before a path can be drawn it has to become triangles, and turning curves into triangles — tessellation — is the one step in the pipeline that runs on the CPU. Rhyolite does it once per dirty shape, caches the result keyed by path identity and scale bucket, and reuses that cache on every frame the shape doesn't change.

<!-- more -->

## Flattening first

Every curve is first *flattened*: subdivided into short line segments until each segment deviates from the true curve by less than a tolerance, by default 0.25 device pixels at the shape's current scale. Flattening is adaptive — a curve that's nearly straight gets two or three segments, a tight loop gets thirty — so simple paths stay cheap and only genuinely curvy geometry pays for detail.

```rust
let tessellator = Tessellator::new()
    .flatten_tolerance(0.25)
    .stroke_width(3.0)
    .join(Join::Round)
    .cap(Cap::Square);

let geometry = tessellator.tessellate(&path);
```

## Fills become fans, strokes become ribbons

A flattened closed path fills with an ear-clipping triangulation, chosen over a simple fan because Rhyolite's paths are allowed to self-intersect and have holes (even-odd and nonzero winding are both supported and set on the `Paint`, not the path). A stroke is a different shape entirely: the flattened polyline is offset by half the stroke width on each side to build two ribbons, and joins between segments are filled in based on the `Join` you picked — `Miter`, `Round`, or `Bevel` — with caps handled the same way at open endpoints.

<figure class="figure-bleed blueprint-grid" aria-label="Cross-section of a stroked curve showing the offset ribbon polygons on either side of the centerline, with a round join at a corner">
  <svg viewBox="0 0 640 260" class="diagram" fill="none" aria-hidden="true" focusable="false">
    <path d="M60 190 Q220 60 340 130 T580 90" stroke="var(--muted)" stroke-width="1" stroke-dasharray="2 4"/>
    <path d="M60 210 Q220 84 340 150 T580 112" stroke="var(--accent)" stroke-width="1.4"/>
    <path d="M60 170 Q220 36 340 110 T580 68" stroke="var(--accent)" stroke-width="1.4"/>
    <g fill="var(--accent)" fill-opacity="0.14" stroke="none">
      <path d="M60 210 Q220 84 340 150 T580 112 L580 68 Q460 92 340 110 Q220 36 60 170 Z"/>
    </g>
    <circle cx="340" cy="130" r="20" fill="none" stroke="var(--accent)" stroke-width="1" stroke-dasharray="2 3"/>
    <g font-family="var(--font-mono)" font-size="11" fill="var(--muted)">
      <text x="330" y="106">round join</text>
      <text x="30" y="205">centerline</text>
    </g>
  </svg>
  <figcaption>The centerline (dashed) is offset by half the stroke width on each side; the fill between the two ribbons is the actual triangle mesh uploaded to the GPU.</figcaption>
</figure>

## What comes out

`tessellate` returns a `Geometry` — a flat `Vec<Vertex>` and a `Vec<u32>` index buffer, both in the shape's local coordinate space so the same geometry can be reused under any transform. Vertices carry position and, for antialiased edges, a signed distance value the fragment stage uses to soften the outermost ring of triangles rather than relying on MSAA. The cache key is `(path identity, scale bucket, stroke params)`, so zooming smoothly through a handful of buckets re-tessellates a few times total, not once per frame. [Chapter four](/learn/pipeline/) is where this `Geometry` gets uploaded and batched with everything else on screen.
