+++
title = "Tick Scatter"
date = "2025-11-05"
description = "A 22 by 16 grid where each cell has a 42 percent chance of holding one rotated tick mark, reading like iron filings across a field."
template = "plot"
[extra]
seed = "tick-scatter"
pattern = "probabilistic grid ticks"
paper = "270gsm Bristol vellum, A4"
ink = "0.3mm archival fineliner, black"
passes = 1
runtime = "9 minutes"
+++

Tick Scatter walks a twenty-two by sixteen grid of cells and, for each one, draws a single short tick mark at a random rotation with roughly forty-two percent probability — the other fifty-eight percent of cells stay empty. The effect, at a normal reading distance, looks less like a grid and more like iron filings settling around a field no one can see, which is closer to the intent than the mechanical description suggests.

It is the sparsest piece in the index and the fastest to plot, at nine minutes for the whole sheet, because a pen that never has to travel far between short strokes barely uses its acceleration budget. It is also the piece most sensitive to seed choice, because dropping or gaining even a handful of ticks near the coin-flip threshold visibly changes the field's density.

<!-- more -->

```js
import { hashSeed, mulberry32 } from "./determinism.js";

export function tickScatter(slug) {
  const rand = mulberry32(hashSeed(slug));
  const cols = 22, rows = 16, cell = 13;
  const ticks = [];

  for (let gy = 0; gy < rows; gy++) {
    for (let gx = 0; gx < cols; gx++) {
      if (rand() > 0.58) continue;
      const cx = gx * cell + cell / 2 + (rand() - 0.5) * 4;
      const cy = gy * cell + cell / 2 + (rand() - 0.5) * 4;
      const a = rand() * Math.PI;
      const len = 3 + rand() * 4;
      ticks.push([
        [cx - Math.cos(a) * len, cy - Math.sin(a) * len],
        [cx + Math.cos(a) * len, cy + Math.sin(a) * len]
      ]);
    }
  }
  return ticks;
}
```

Each cell consumes one call to `rand()` if it is skipped, or four if it is kept — one to decide inclusion, two for position jitter, one for rotation — so the total length of the random stream this function walks through depends on how many ticks the seed happens to produce. That is a looser budget than [Contour Drift](/plots/contour-drift/)'s fixed ring count, but it costs nothing here: every piece in this index owns its own seed and its own stream, so nothing ever reads past a point another piece might need. See the [about page](/about/) for the paper and ink rules this series follows along with everything else in the index.
