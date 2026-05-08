+++
title = "Frosted Pane Optics"
date = 2024-05-20
description = "How backdrop blur filters approximate ground-glass diffusion in the browser."
[taxonomies]
tags = ["glassmorphism", "css"]
+++

Glass is not transparent. It scatters. Frosted glass, in particular, behaves as a low-pass filter on incoming light. High-frequency detail dissolves into a soft luminance field while broad color regions survive. The browser approximates this with `backdrop-filter: blur()`, a Gaussian convolution applied to whatever sits behind the element.

The kernel radius matters. A blur of 4 pixels keeps recognizable shapes. A blur of 24 pixels reduces the underlying scene to color blocks. Stack a translucent fill on top, around 8 to 14 percent opacity, and the eye reads the layer as a physical surface rather than a tinted overlay.

Performance is non-trivial. Each frame, the compositor must sample the underlying pixels, apply the blur, then composite the foreground. On modern GPUs this runs near free for a single layer. Three or four overlapping panels with different blur radii will halve frame rates on integrated graphics.

```css
.pane {
  background: rgba(20, 20, 32, 0.12);
  backdrop-filter: blur(18px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

The saturation boost compensates for the desaturation introduced by blur averaging. Without it, panels look gray and dead. A thin inner border, slightly brighter than the fill, sells the illusion of a refractive edge.

Fallbacks remain necessary. Older Firefox builds and embedded webviews ignore the property silently. Use `@supports` to detect, then degrade to a flat translucent fill. The hierarchy survives. The optics do not.
