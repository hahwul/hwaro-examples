+++
title = "Smart Crop"
description = "A saliency pass finds the subject before the crop box is drawn, so fixed aspect ratios stop cutting people in half"
date = "2025-01-14"
weight = 10
toc = true
[extra]
class = "geometry"
+++

Fixed-ratio crops are the most common way a pipeline embarrasses you. Someone uploads a portrait-oriented photo, the layout calls for a 4:5 card, and a center crop slices the subject's head off because the composition put them in the upper third of the frame. Smart Crop replaces the center-crop default with a saliency pass: a lightweight model scores each region of the source for "things a viewer would look at" — faces first, then high-contrast edges, then anything that isn't flat sky or flat ground — and the crop box is drawn around the highest-scoring region instead of the geometric middle.

<!-- more -->

## Overriding the focal point

The `fp-x` and `fp-y` parameters let you override the detected focal point manually, which matters for art-directed crops where the automatic choice is technically correct but editorially wrong — a product shot where the model wants the logo in frame, not the model's face.

```
GET /plateau.jpg?crop=smart&fp-x=0.62&fp-y=0.38&fit=cover
```

`fit=cover` fills the target box and crops any overflow around the focal point; `fit=contain` would instead letterbox to preserve the whole source. Below, the detected focal point sits just off the mesa's near edge — high contrast, structurally interesting, and far enough from the empty sky that a naive center crop would have missed it by a wide margin.

{{ swatch(effect="crop", id="crop", chain="?crop=smart&fp-x=0.62&fp-y=0.38&fit=cover&w=1200&h=1500", before="raw.jpg — 4032×3024", after="cropped.jpg — 1200×1500 · fp 0.62,0.38") }}

## Where it sits in the chain

Smart Crop runs first in the pipeline, before any resampling — cropping a full-resolution source and then downscaling produces a cleaner result than downscaling first and cropping the softened remainder. Pair it with [Adaptive Sharpen](/transforms/adaptive-sharpen/) if the crop also downsizes heavily; the resample ratio changes once the frame tightens, and the sharpen mask should be computed after, not before.
