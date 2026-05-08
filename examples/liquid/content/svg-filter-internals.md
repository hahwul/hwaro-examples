+++
title = "Inside the SVG Filter Pipeline"
date = 2024-05-18
description = "How browsers turn primitives like feGaussianBlur and feColorMatrix into pixels."
[taxonomies]
tags = ["svg", "rendering", "css"]
+++

An SVG filter is a small image-processing pipeline declared in markup. Each `<filter>` element holds an ordered list of primitive operations, and every primitive consumes one or more named inputs and produces a named output. The renderer walks this graph from the requested terminal node back to the source, allocating temporary raster buffers along the way.

The classic gooey effect chains three primitives. First, `feGaussianBlur` smears the source through a separable convolution; the standard deviation controls how far each pixel bleeds into its neighbors. Next, `feColorMatrix` in matrix mode remaps the RGBA channels, and a steep alpha curve here is what creates the sharp boundary that makes blurred shapes appear to merge. Finally, `feComposite` with operator `atop` re-clips the result back to the original silhouette, removing the soft halo that would otherwise leak past the original edge.

### Performance Considerations

Filter regions matter. By default the browser allocates a buffer slightly larger than the filtered element, but if the blur radius pushes content outside that bounding box, the engine must expand the region or accept clipping artifacts. Setting an explicit `x`, `y`, `width`, and `height` on the filter avoids surprises.

Hardware acceleration is uneven. Chromium will route most filter chains through the compositor when the inputs are simple, but a single uncacheable primitive can force the entire chain back to the software path. Profiling with the rendering panel reveals which buffers survive between frames and which are recreated on every paint.
