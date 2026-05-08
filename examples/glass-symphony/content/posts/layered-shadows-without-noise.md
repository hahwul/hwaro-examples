+++
title = "Layered Shadows Without the Noise"
date = 2025-11-21
[taxonomies]
tags = ["css", "design"]
categories = ["notes"]
+++

Drop shadows are the easiest way to ruin a translucent panel. A single heavy shadow flattens the surface, contradicts the blur, and pulls the eye toward the edge instead of the content. Layered shadows handle the same job with a much lighter touch.

The model is borrowed from physical lighting. A real surface picks up two contributions at once: a tight contact shadow directly beneath it, and a diffuse ambient shadow that spreads over a much larger area. Reproducing that pairing in CSS only requires two `box-shadow` declarations, comma-separated, with very different blur radii and opacities.

A reasonable starting point for a panel that sits on a dark background:

```css
.panel {
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.35),
    0 24px 48px rgba(0, 0, 0, 0.25);
}
```

The first line is the contact shadow. It is small, sharp, and dark enough to anchor the panel against the page. The second line is the ambient shadow. It is large, soft, and pitched at roughly two thirds the opacity of the contact shadow, which matches the falloff a single light source produces in a real room.

Two adjustments are usually worth making. First, shift the y-offset of the ambient shadow upward as the panel grows: a tall hero card needs the diffuse cone to reach further down the page, so the offset doubles when the panel doubles. Second, reduce both opacities when the page background is light, because the eye reads a faint shadow on a light wall more easily than it reads a strong shadow on a dark one.

Avoid stacking three or more shadows. The rendering cost rises quickly, the result starts looking like a sticker rather than a surface, and the extra layers contribute almost nothing the eye can actually distinguish.
