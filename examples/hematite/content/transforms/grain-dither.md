+++
title = "Grain & Dither"
description = "Lays ordered dither over flattened gradients so 8-bit banding never survives a screenshot or a slow-scan display"
date = "2025-11-04"
weight = 50
toc = true
[extra]
class = "texture"
+++

Smooth gradients are where 8-bit color depth fails visibly — a clear sky, a soft shadow, anything that should shade continuously instead shows discrete rings once it's compressed and re-decoded on a cheap panel. Grain & Dither adds controlled noise before the final encode, breaking up those rings by scattering the rounding error across neighboring pixels instead of letting it collect into a hard edge. The visible cost is a texture that reads as film grain; the benefit is a gradient that survives a JPEG pass without banding.

<!-- more -->

## Grain profile and dither method

```
GET /plateau.jpg?grain=film400&dither=bayer&strength=35
```

`grain` selects a noise profile — `film400` approximates the grain structure of ISO 400 film stock, useful when the goal is aesthetic rather than purely corrective. `dither=bayer` applies an ordered Bayer matrix instead of random noise, which is cheaper to compute and produces a more uniform texture at the cost of a faint repeating pattern at extreme strengths. `strength` runs 0 to 100 and controls how much rounding error gets redistributed per pixel.

{{ swatch(effect="grain", id="grain", chain="?grain=film400&dither=bayer&strength=35", before="flat gradient", after="film 400 · dithered") }}

## Where it sits in the chain

Run this transform before [Palette Reduction](/transforms/palette-reduction/), not after — dithering a full 24-bit gradient and then quantizing the result throws the dither pattern away along with everything else the quantizer discards.
