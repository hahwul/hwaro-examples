+++
title = "Spiral Choke"
date = "2026-03-12"
description = "One unbroken spiral whose winding tightens sharply past its midpoint, plotted in a single pen-down pass with no lifts at all."
template = "plot"
[extra]
seed = "spiral-choke"
pattern = "single-path tightening spiral"
paper = "350gsm cold-press, A4"
ink = "0.5mm archival fineliner, black"
passes = 1
runtime = "6 minutes"
+++

Spiral Choke is the shortest plot in the index at six minutes, and the reason is structural rather than a matter of sparse content: it is a single unbroken path from the outer edge to the center, so the pen goes down once and lifts once. Every other piece here is dozens or hundreds of separate strokes, each one costing the plotter a small pen-up, travel, pen-down cycle; a single continuous spiral skips all of that.

The "choke" in the name is the one deliberate structural rule layered on top of an otherwise ordinary spiral: growth is linear with angle up to a seeded fraction of the total turns, then the radius growth rate drops sharply for the remainder, so the winding visibly tightens partway through instead of expanding at a constant rate to the edge. Seed `spiral-choke` chose a choke point a little past the halfway turn and just under eight full turns overall.

<!-- more -->

```js
import { hashSeed, mulberry32 } from "./determinism.js";

export function spiralChoke(slug) {
  const rand = mulberry32(hashSeed(slug));
  const turns = 7 + rand() * 4;
  const chokeAt = 0.5 + rand() * 0.25;
  const maxR = 130;
  const steps = 720;
  const pts = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = t * turns * Math.PI * 2;
    const growth = t < chokeAt
      ? t / chokeAt
      : 1 - ((t - chokeAt) / (1 - chokeAt)) * 0.72;
    const r = maxR * growth;
    pts.push([150 + Math.cos(a) * r, 150 + Math.sin(a) * r]);
  }
  return pts;
}
```

Because the whole shape is one path sampled at seven hundred and twenty steps, the heavier 0.5mm nib reads as a confident, continuous line rather than the slightly broken feel a hatch or tick piece gets from hundreds of pen lifts — which is also why this is the only series in the index plotted on 350gsm stock instead of 300gsm. The paper needs the extra weight to stay flat under one long, unbroken pass instead of the shorter strokes that let lighter sheets cup and lift at the corners.
