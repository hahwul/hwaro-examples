+++
title = "Contour Drift"
date = "2025-01-18"
description = "Nine concentric rings drawn from a single wandering-radius function, plotted in two ink passes on cold-press paper."
template = "plot"
[extra]
seed = "contour-drift"
pattern = "concentric contour rings"
paper = "300gsm cold-press, A4"
ink = "0.3mm archival fineliner, warm black + gray overlay"
passes = 2
runtime = "14 minutes"
+++

Contour Drift is the first piece in this index and the one that set the house rule for every piece after it: the seed is the slug, never a separate number, so a reader can type the thing that made the drawing. This one's seed is `contour-drift`.

The technique is a wandering-radius ring: nine circles sharing a center, each one's radius nudged by a small random offset at every one of ninety-six points around its circumference, so the ring reads as hand-drawn contour lines rather than compass-perfect circles. It is the same trick a topographic map uses to show elevation, except there is no elevation data underneath — just the seed feeding a pseudo-random number generator called `mulberry32`, the same one every piece in this index uses.

<!-- more -->

The plotter runs the outer five rings in warm black at 0.3mm, lifts the pen once, and runs the inner four in a lighter gray as a second pass, which is where the two ink counts on the spec sheet come from. Total plot time, start to lifted pen, was fourteen minutes on 300gsm cold-press A4 — soft enough that the fineliner drags very slightly at each direction change, which is most of why no two sheets pulled from this seed look pixel-identical even though the underlying path is exact.

```js
import { hashSeed, mulberry32 } from "./determinism.js";

export function contourDrift(slug) {
  const rand = mulberry32(hashSeed(slug));
  const cx = 105 + rand() * 60;
  const cy = 140 + rand() * 40;
  const rings = 9;
  const paths = [];

  for (let r = 0; r < rings; r++) {
    const base = 18 + r * 16;
    const pts = [];
    for (let i = 0; i <= 96; i++) {
      const a = (i / 96) * Math.PI * 2;
      const wobble = (rand() - 0.5) * 5.5;
      pts.push([
        cx + Math.cos(a) * (base + wobble),
        cy + Math.sin(a) * (base + wobble) * 0.82
      ]);
    }
    paths.push(pts);
  }
  return paths;
}
```

`hashSeed` folds the slug string down to a 32-bit integer with a plain FNV-1a loop, and `mulberry32` turns that integer into a deterministic stream of floats between zero and one. Feed it `"contour-drift"` on any machine, in any decade, and `rand()` will return the exact same first number, the exact same hundredth number, and therefore the exact same nine rings. The card sketch on the index page and the larger version above this paragraph are drawn by a close relative of this same function, running live in your browser against this page's own slug — which is also why they never move between reloads.
