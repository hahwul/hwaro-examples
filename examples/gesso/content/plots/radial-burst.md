+++
title = "Radial Burst"
date = "2025-07-30"
description = "Around one hundred and seventy straight rays fired from a single off-center point, plotted as one uninterrupted spoke pattern."
template = "plot"
[extra]
seed = "radial-burst"
pattern = "randomized ray burst"
paper = "300gsm cold-press, A3"
ink = "0.3mm archival fineliner, black"
passes = 1
runtime = "22 minutes"
+++

Radial Burst places one point somewhere off-center on the sheet and fires straight lines out from it in every direction, each ray a random angle and a random length between forty and a hundred and ninety units. Seed `radial-burst` put the center in the lower-left third of the page and drew a hundred and seventy-two rays, which is enough overlap near the origin to burn the paper slightly darker there without any extra ink logic — it is purely a density effect from that many strokes sharing one point.

What makes this series different from Contour Drift and Hatch Field is that nothing here repeats a structural pattern; there is no ring count or hatch angle governing the whole piece, just independent draws for every single ray. That makes it the most "noisy" function in the index and also the fastest to write, at nine lines including the export.

<!-- more -->

```js
import { hashSeed, mulberry32 } from "./determinism.js";

export function radialBurst(slug) {
  const rand = mulberry32(hashSeed(slug));
  const cx = 90 + rand() * 120;
  const cy = 90 + rand() * 120;
  const rays = 140 + Math.floor(rand() * 60);
  const spokes = [];

  for (let i = 0; i < rays; i++) {
    const a = rand() * Math.PI * 2;
    const len = 40 + rand() * 150;
    spokes.push([[cx, cy], [
      cx + Math.cos(a) * len,
      cy + Math.sin(a) * len
    ]]);
  }
  return spokes;
}
```

The plot itself is a single ink, single pass, twenty-two minutes on 300gsm cold-press A3 — the shortest plot time of any A3 piece in the index, since straight lines from one origin need almost no acceleration changes for the plotter's stepper motors to manage. The origin point itself is never marked or circled on the finished sheet; you can only find it by counting where the most lines cross, the same way you would on paper covered in real light.
