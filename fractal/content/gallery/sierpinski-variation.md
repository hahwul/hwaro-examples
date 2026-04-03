+++
title = "Sierpinski Variation"
date = "2026-01-25"
weight = 3
tags = ["sierpinski", "recursive"]
description = "A recursive Sierpinski triangle rendered to 12 levels of depth"
[extra]
formula = "IFS: 3 affine transforms"
iterations = "12 levels"
resolution = "4096 x 4096"
+++

The Sierpinski triangle is among the simplest fractals to describe: take a triangle, remove the center, repeat for each remaining triangle. At 12 levels of recursion, the original triangle has been subdivided into 531,441 tiny triangles.

What makes this variation distinct is the rotation applied at each level. Each subdivision introduces a 2-degree clockwise rotation, so that by the twelfth level, the smallest triangles have rotated 24 degrees from the original orientation. The cumulative effect produces a subtle twist visible across the entire structure.

The rendering maps depth level to color intensity, with the deepest triangles appearing as bright cyan points against the dark navy field.
