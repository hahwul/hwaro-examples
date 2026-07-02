+++
title = "The Retained Scene Graph"
description = "Paths join groups, groups join a tree, and a dirty flag decides what the tessellator has to redo this frame."
date = "2025-02-11"
weight = 20
toc = true
[extra]
section_id = "RHY.2"
status = "stable"
+++

A `Path` is inert geometry. It becomes drawable once a `Scene` gives it a node. Rhyolite's scene graph is retained — you build it once and mutate it across frames — rather than rebuilt from scratch on every draw call the way an immediate-mode API would. That single decision is what lets the tessellator skip work: a node that nobody touched since the last frame does not get re-tessellated, re-batched, or re-uploaded.

<!-- more -->

## Four node kinds

Every node is one of `Group`, `Shape`, `Clip`, or `Transform`. Groups have children and exist only to be transformed or clipped together. Shapes own a `Path` and a `Paint` and are always leaves. Clips restrict everything beneath them to a region, itself just another path. Transform nodes hold a 2D affine matrix that composes with every ancestor transform above them.

<figure class="figure-bleed blueprint-grid" aria-label="A scene graph tree: a root group with a transform node and two shape leaves, one of them marked dirty">
  <svg viewBox="0 0 640 260" class="diagram" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="square" aria-hidden="true" focusable="false">
    <path d="M120 60 V95 H320 V130"/>
    <path d="M320 60 V95"/>
    <path d="M320 130 V165 H180 V195"/>
    <path d="M320 165 H460 V195"/>
    <rect x="70" y="30" width="100" height="34"/>
    <rect x="270" y="30" width="100" height="34"/>
    <rect x="270" y="130" width="100" height="34" class="node-dirty"/>
    <rect x="130" y="195" width="100" height="34"/>
    <rect x="410" y="195" width="100" height="34"/>
    <g font-family="var(--font-mono)" font-size="11" fill="var(--fg)" stroke="none" text-anchor="middle">
      <text x="120" y="51">root · Group</text>
      <text x="320" y="51">camera · Transform</text>
      <text x="320" y="151">ring · Group</text>
      <text x="180" y="216">stroke · Shape</text>
      <text x="460" y="216">fill · Shape</text>
    </g>
  </svg>
  <figcaption>The <code>ring</code> group was translated this frame, so it and both of its shape children are marked dirty (dashed outline); <code>camera</code> and its other descendants are untouched and skip re-tessellation entirely.</figcaption>
</figure>

## Building and mutating

```rust
let mut scene = Scene::new();

let root = scene.group(None);
let camera = scene.transform(root, Transform::IDENTITY);
let ring = scene.group(camera);

let stroke = scene.shape(ring, ring_path.clone())
    .paint(Paint::stroke(PINK, 3.0));
let fill = scene.shape(ring, ring_path)
    .paint(Paint::solid(SURFACE));

// Later, once per frame:
scene.set_transform(ring, Transform::rotate(elapsed * 0.4));
```

`set_transform`, `set_paint`, and `set_path` all mark the node — and only that node's subtree — dirty. Nodes you never call a setter on stay marked clean across an unbounded number of frames; a static background full of hundreds of shapes costs nothing after its first tessellation pass.

{{ alert(type="tip", body="Group shapes that animate together under one Transform node instead of setting each shape's own transform per frame. A single set_transform call on the group dirties the whole subtree once; N individual calls dirty N subtrees and N cache entries.") }}

## Traversal order is paint order

Children paint in insertion order, back to front, exactly like SVG or a layered image editor. Reordering a child calls `scene.reorder(node, index)`, which is an O(1) pointer splice in the sibling list, not a rebuild. The scene graph keeps a flat generation counter per node rather than a boolean, so a node that toggles dirty twice in one frame — set then immediately reset — still tessellates exactly once, at the end of the frame, from its final state. [Chapter three](/learn/tessellation/) follows a dirty shape into the tessellator to see what "re-tessellated" actually produces.
