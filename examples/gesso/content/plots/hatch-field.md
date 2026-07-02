+++
title = "Hatch Field"
date = "2025-04-22"
description = "A hundred and forty sheared parallel lines at a seeded angle, dense enough that the plotter takes forty minutes to lay them down."
template = "plot"
[extra]
seed = "hatch-field"
pattern = "sheared parallel hatching"
paper = "250gsm printmaking stock, A3"
ink = "0.1mm fineliner, black"
passes = 1
runtime = "41 minutes"
+++

Hatch Field is deliberately the slowest piece in the index to plot and the simplest to describe: pick an angle, pick a line count, draw that many parallel lines sheared to that angle across the sheet, and let jitter on each line's start position keep it from looking ruled. Seed `hatch-field` produced a shear of roughly twenty-six degrees and a hundred and forty-one lines — dense enough that the fineliner is down on the paper for most of the forty-one minute plot time, which is unusually long for a single-pass piece.

The paper choice matters more here than anywhere else in the index. A hundred and forty close, near-parallel strokes on smooth cold-press paper start to look printed; the tooth on this printmaking stock breaks each line just enough that the field reads as drawn.

<!-- more -->

```js
import { hashSeed, mulberry32 } from "./determinism.js";

export function hatchField(slug) {
  const rand = mulberry32(hashSeed(slug));
  const shear = rand() * 70 - 35;
  const count = 120 + Math.floor(rand() * 40);
  const span = 300 + Math.abs(shear);
  const lines = [];

  for (let i = 0; i < count; i++) {
    const x0 = -40 + (i / (count - 1)) * span;
    const jitter = (rand() - 0.5) * 2.4;
    lines.push([
      [x0 + jitter, -20],
      [x0 + shear + jitter, 300]
    ]);
  }
  return lines;
}
```

There is no fill logic anywhere in this function — every apparent tone shift you see in a printed sheet is a count-and-angle decision made once, at generation time, from the same `mulberry32` stream every other piece here draws from, including [Contour Drift](/plots/contour-drift/). Change the seed by one character and the shear and count both jump to unrelated values; there is no "close to hatch-field" seed that produces a subtly different field, which is one of the small honest disappointments of working this way. You get the exact drawing or a completely different one, never a dial.
