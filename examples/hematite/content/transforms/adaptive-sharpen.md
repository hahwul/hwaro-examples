+++
title = "Adaptive Sharpen"
description = "Measures how much detail a resize actually discarded and sizes the unsharp mask to match, instead of a flat default"
date = "2025-05-20"
weight = 30
toc = true
[extra]
class = "texture"
+++

Downscaling softens an image whether you asked for it or not — a Lanczos resample averages neighboring pixels, and the more aggressive the resize ratio, the softer the result looks even though nothing is technically wrong. A flat, always-on sharpen amount fixes small resizes and over-sharpens large ones, haloing edges until the result looks worse than the soft version it replaced. Adaptive Sharpen instead measures the actual resize ratio for the request and scales the unsharp mask to it: a 10% downscale gets a light touch, a 75% downscale gets a mask sized to recover what that much averaging actually threw away.

<!-- more -->

## Amount and radius

```
GET /plateau.jpg?sharpen=auto&amount=120&radius=1.2
```

`amount` is a percentage ceiling, not a fixed multiplier — Hematite computes the mask strength from the resize ratio and caps it at whatever you pass, so raising `amount` past what a given request needs has no visible effect. `radius` sets the edge-detection kernel size in pixels; smaller radii catch fine texture, larger radii catch structural edges like the ridge line of a mesa.

{{ swatch(effect="sharpen", id="sharpen", chain="?sharpen=auto&amount=120&radius=1.2", before="soft focus", after="unsharp mask · 120%") }}

## Reading the halo

Look at the ridge where the near butte meets the sky in the after plate: a light halo sits just above the edge, a dark halo just below it. That paired halo is the visible signature of unsharp masking — if you see it without a resize behind it, `amount` is set too high for the source. This transform reads the resize ratio left behind by [Smart Crop](/transforms/smart-crop/) when the two run in sequence, so it never needs a manual amount for a cropped request.
