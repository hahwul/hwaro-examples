+++
title = "Palette Reduction"
description = "Quantizes photographic gradients into a scene-fit palette for icons, diagrams, and anywhere 24-bit depth is wasted weight"
date = "2025-08-11"
weight = 40
toc = true
[extra]
class = "color"
+++

Not every image needs twenty-four bits of color. A diagram, an icon, a flat illustration — these carry almost no gradient information, and shipping them as full-depth JPEG or PNG spends bytes on precision nobody will notice missing. Palette Reduction runs a median-cut quantizer against the source, picks a palette sized to `colors`, and re-encodes every pixel to its nearest palette entry. The output format switches to indexed PNG automatically, since that's the only common format that can actually store a reduced palette instead of re-expanding it back to 24-bit on save.

<!-- more -->

## Choosing a palette size

```
GET /plateau.jpg?colors=8&dither=none&fm=png8
```

Eight colors is aggressive — fine for a stylized illustration, rough for a photograph, which is exactly what the plate below demonstrates. The gradient sky collapses into flat horizontal-ish bands, and each mesa layer becomes a single flat fill instead of the soft opacity blend in the source. `dither=none` is the default for this transform because dithering and palette reduction pull in opposite directions: dithering exists to hide banding, and an 8-color palette bands by design. Pair this transform with Grain & Dither instead of stacking both flags on one request.

{{ swatch(effect="palette", id="palette", chain="?colors=8&dither=none&fm=png8", before="24-bit source", after="8-color · 4.7 KB") }}

## Reading the swatches

The five swatches along the bottom of the after plate are the palette itself, in the order the quantizer picked them — sky first, then sun, then the three mesa layers, darkest last. See [Grain & Dither](/transforms/grain-dither/) for the transform that's meant to run after this one, not before.
