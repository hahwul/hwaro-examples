+++
title = "The Geometry of Perception"
date = "2026-03-15"
tags = ["op-art", "design"]
categories = ["essay"]
description = "How repeating geometric patterns trick the brain into seeing motion on a static surface."
+++

Op Art operates at the boundary between vision and cognition. When you look at a field of concentric circles or alternating black-and-white stripes, your visual cortex begins to interpolate motion that isn't there. The pattern is static, but the perception is dynamic.

## Why It Works

The human eye is wired for edge detection. When presented with high-frequency contrast patterns — tight grids, converging lines, radiating circles — the neurons responsible for tracking edges fire in rapid succession. This overload creates the sensation of flicker, pulse, or drift.

Bridget Riley exploited this effect to its fullest. Her paintings are meticulous arrangements of simple shapes that produce overwhelming visual energy. No color is needed; black and white alone generate the illusion.

## Applying It to the Web

CSS gives us the tools to recreate these effects:

- `repeating-conic-gradient` for checkerboard and radial patterns
- `repeating-linear-gradient` for moiré-style stripe fields
- `animation` with slow rotation to amplify the optical distortion
- High-contrast color schemes (`#000` / `#fff`) for maximum perceptual impact

> The simplest patterns produce the strongest illusions. Complexity is the enemy of Op Art.

The goal is not to decorate but to disorient — just enough to make the viewer pause and look again.
