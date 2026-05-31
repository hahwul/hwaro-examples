+++
title = "Warping a Stripe Field Without Bending the Truth"
date = "2025-11-12"
draft = false
description = "How we curve a vertical stripe field on the hero band while keeping the underlying frequency measurement honest."
tags = ["stripes", "frequency", "perception"]
categories = ["patterns"]
reading_time = 3
+++

A vertical stripe field is the simplest engine of optical motion. Make the bands slightly unequal in width, curve them, and the static plane starts to shimmer. The trick for a dashboard is to let the surface shimmer while the measurement stays fixed.

We build the hero band entirely from solid-fill SVG paths. Each black stripe is a single shape with a gentle quadratic curve; the white between them is just the page showing through. No gradient is ever used to fake a band edge — the contrast is real, which is exactly why it reads as motion.

## what we actually log

- **Spatial frequency** in cycles per degree, sampled at the band's narrowest point.
- **Curve deflection**, the horizontal travel of a band from top to bottom.
- **Drift rate**, the slow translate applied to the whole field on screen.

{% alert(type="note") %}
The hero drift is capped at well under one degree per second and is disabled entirely under prefers-reduced-motion. The numbers never move.
{% end %}

The deflection is encoded directly in the path control points:

```
M478,0 h30 q-14,210 0,420 h-30 z
```

That single `q` is the whole illusion: a quadratic pull toward center at the band's waist, released back to true by the bottom edge. Honest geometry, restless surface.
