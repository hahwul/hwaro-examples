+++
title = "The Sierpinski Triangle"
date = 2026-03-29
tags = ["dark", "gallery", "generative", "mathematical"]
description = "The Sierpinski triangle -- a self-similar fractal constructed through infinite recursive subdivision, with Hausdorff dimension log(3)/log(2)."

[extra]
formula = "dim_H = log(3) / log(2)"
complexity = "Hausdorff dimension 1.585"
+++

## Recursive Subdivision

The Sierpinski triangle, described by Waclaw Sierpinski in 1915, is constructed by a deceptively simple process:

1. Begin with a solid equilateral triangle
2. Remove the central inverted triangle (one quarter of the area)
3. Repeat for each remaining solid triangle
4. Continue to infinity

After infinite iterations, the resulting figure has zero area but infinite perimeter -- a set of Hausdorff dimension log(3)/log(2), approximately 1.585.

## Iterated Function Systems

The Sierpinski triangle can be generated as the attractor of an iterated function system (IFS) consisting of three affine contractions, each scaling by factor 1/2 and translating to a different vertex. Starting from any initial set, repeated application of these three maps converges to the Sierpinski triangle.

## The Chaos Game

Perhaps the most elegant construction: choose three vertices of a triangle. Start at any point. Repeatedly pick a random vertex and move halfway toward it. Plot each new point. After thousands of iterations, the Sierpinski triangle emerges from pure randomness -- a striking demonstration that deterministic structure can arise from stochastic processes.

## Appearances in Mathematics

The Sierpinski triangle appears in unexpected contexts:

- **Pascal's triangle modulo 2**: color odd entries black and even entries white
- **Tower of Hanoi state graph**: the graph of legal moves forms a Sierpinski triangle
- **Cellular automaton Rule 90**: produces the Sierpinski triangle as its spacetime diagram

## Dimension and Measure

With Hausdorff dimension log(3)/log(2), the Sierpinski triangle occupies a dimensional space between a line (dimension 1) and a plane (dimension 2). It is too complex to be a curve, yet too sparse to fill an area. This intermediate dimensionality is the defining characteristic of fractal geometry.

## Generalizations

The construction generalizes naturally:

- **Sierpinski carpet**: the three-dimensional analog, removing central squares from a grid
- **Menger sponge**: extending the principle to three dimensions, producing a solid of infinite surface area and zero volume
- **Sierpinski n-gons**: applying the same subdivision to regular polygons with more sides
