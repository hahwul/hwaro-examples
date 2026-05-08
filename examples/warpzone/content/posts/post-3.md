+++
title = "CRT Phosphor Decay in Modern Pixel Shaders"
date = "2026-03-15"
description = "Reproducing the persistence and bloom of cathode ray tube displays inside fragment shaders for arcade-faithful retro rendering."
tags = ["shaders", "retro", "crt", "arcade"]
categories = ["development"]
+++

A pixel-perfect emulation of an arcade cabinet is more than nearest-neighbor scaling. The cathode ray tube produced its characteristic look through phosphor persistence, electron beam scan irregularities, and triad subpixel arrangements that disappeared with the move to flat panels. Recreating these behaviors requires a small stack of post-process passes layered on top of the rasterized image.

## Persistence Buffer

Phosphor decay is non-linear. A pixel struck by the electron beam glows for several frames, fading along an exponential curve. The simplest implementation maintains a persistence texture and blends the current frame against it.

```glsl
vec3 prev = texture(uPersistence, uv).rgb;
vec3 curr = texture(uColor, uv).rgb;
vec3 mixed = max(curr, prev * uDecay);
```

A decay value of 0.85 to 0.92 produces motion trails that read as authentic without smearing fast-moving sprites into illegibility.

## Scanline Modulation

CRT scanlines are not solid black bars. They are intensity gradients caused by the beam's vertical sweep pattern. Multiplying the output by a sinusoidal function locked to the framebuffer height yields a softer, more accurate result than discrete dark rows.

## Mask and Bloom

The shadow mask filters light through a triad of red, green, and blue phosphor dots. At native resolution this is invisible, but on upscaled output the triad pattern becomes legible and contributes meaningfully to the warm color cast of period-correct displays.

A separable Gaussian blur on the bright regions adds the halation glow that vintage tubes exhibit around saturated highlights. Tuning the threshold and radius separately for shadow, midtone, and highlight regions matches the response curve of specific cabinet monitors.

## Calibration

Reference photography of original hardware under controlled lighting is the only reliable way to validate the result. Direct A/B comparison against a CRT measures success better than any single quality metric.
