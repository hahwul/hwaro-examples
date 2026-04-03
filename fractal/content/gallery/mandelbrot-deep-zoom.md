+++
title = "Mandelbrot Deep Zoom"
date = "2026-03-12"
weight = 1
tags = ["mandelbrot", "iteration"]
description = "Exploring the boundary of the Mandelbrot set at 10^14 magnification"
[extra]
formula = "z = z^2 + c"
iterations = "10,000"
resolution = "8192 x 8192"
+++

At ordinary magnification, the Mandelbrot set appears as a familiar cardioid with circular bulbs. But at ten-to-the-fourteenth magnification, the boundary reveals structures that no one designed.

Spirals emerge that resemble seahorses. Tendrils branch into copies of the whole set, each slightly different, each containing further copies. The computation required 10,000 iterations per pixel to resolve the finest details at this depth.

The color mapping uses iteration count modulo a palette of 256 values, cycling through deep navy, electric blue, cyan, and white. Regions that never escape appear as pure black -- the interior of the set, infinitely complex along its edge.
