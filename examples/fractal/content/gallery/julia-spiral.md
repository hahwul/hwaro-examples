+++
title = "Julia Spiral"
date = "2026-02-18"
weight = 2
tags = ["julia", "spiral"]
description = "Julia set at c = -0.7269 + 0.1889i producing infinite spiral arms"
[extra]
formula = "z = z^2 + (-0.7269 + 0.1889i)"
iterations = "5,000"
resolution = "4096 x 4096"
+++

The Julia set is the Mandelbrot set's twin -- same equation, different perspective. Instead of varying the constant c across the plane, we fix c and vary the starting point z.

At c = -0.7269 + 0.1889i, the Julia set produces a connected structure dominated by spiral arms. Each arm winds inward, producing smaller spirals at each turn, which produce smaller spirals still.

The rendering uses escape-time coloring with smooth iteration count interpolation to eliminate banding. The result is a continuous flow of color along the spiral arms, from deep navy at the center to bright cyan at the outer boundary.
