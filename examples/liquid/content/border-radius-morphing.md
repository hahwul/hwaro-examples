+++
title = "Border-Radius Morphing for Organic Shapes"
date = 2024-06-30
description = "Animating the eight-value border-radius syntax to produce drifting blob silhouettes."
[taxonomies]
tags = ["css", "animation", "shapes"]
+++

The full `border-radius` property accepts eight independent values, four for the horizontal radii of each corner and four for the vertical radii. Most stylesheets only set a single shorthand value, but the eight-value form is what makes blob morphing possible without resorting to SVG paths or canvas.

A keyframe animation alternates between two carefully chosen sets of these values. Because the corner radii interpolate independently, the silhouette never collapses to a circle or a rectangle midway through the transition. The result is a wobble that reads as organic motion even though every frame remains an axis-aligned ellipse arc.

```css
@keyframes drift {
  0%, 100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
  50%      { border-radius: 40% 60% 30% 70% / 60% 30% 70% 40%; }
}
```

### Why This Works

The percentage syntax binds each radius to the element's dimensions, so the shape scales cleanly with viewport changes. The slash separates horizontal from vertical components, doubling the available degrees of freedom. By keeping the sums of opposing corners roughly constant, the blob avoids visible asymmetric pulsing.

Performance is generally good because the browser composites these animations on the GPU when the element is promoted to its own layer. A `will-change: border-radius` hint can lock that promotion in, though overuse creates memory pressure on devices with limited video RAM. For most decorative blobs, two or three concurrent animations are well within budget.
