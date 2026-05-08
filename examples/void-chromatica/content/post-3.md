+++
title = "Glassmorphism Without the Performance Tax"
description = "Practical limits on backdrop-filter usage and how to keep frosted panels affordable on mid-range hardware."
date = "2025-02-18"
+++

Frosted glass panels rely on `backdrop-filter: blur()`, which forces the browser to composite a blurred copy of everything behind the element on every paint. On desktop with discrete graphics this is cheap. On mid-range mobile chips it is the single most expensive thing the page does, and it scales with the area covered.

The first optimization is area. A blurred header bar of a hundred pixels is unnoticeable. A full-page blurred overlay during a modal animation can drop frame rates from sixty to fifteen. Keep the blurred regions small, and avoid stacking multiple backdrop-filtered elements on top of each other.

The second optimization is blur radius. Every pixel of radius costs work. A blur of eight pixels feels nearly identical to one at twenty pixels in most layouts, but it costs less than half as much. Start low and increase only if the result feels flat.

The third optimization is paint promotion. An element with `backdrop-filter` becomes its own compositor layer. That is what makes the effect work, but it also means any animation on its contents triggers a relayout of that layer. Animate transforms and opacity only.

The fourth, often overlooked, is fallback handling. Older browsers and reduced-motion preferences should receive a solid translucent panel instead. The visual difference is acceptable. The accessibility and performance gains are not optional.

Used with restraint, glassmorphism still earns its place. Used everywhere, it becomes the reason a site feels slow.
