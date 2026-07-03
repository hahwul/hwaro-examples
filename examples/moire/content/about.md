+++
title = "About the library"
description = "What moiré is, why these fields are drawn in pure vector line work, and how to read a tile's label."
+++

**Moiré** is a working library of interference patterns — the large-scale figures that appear when two or three regular line fields are laid over one another and left to disagree. None of the patterns here are drawn directly. Each one is *emergent*: it lives in the gap between two rulings that are each perfectly plain on their own. Turn one field off and the pattern is simply gone.

The collection exists to make that emergence legible. Every field on [the pattern wall](/patterns/) is built from nothing but SVG strokes — no raster, no filters, no fakery — so you can open any tile, read the source, and see exactly which two grids, rings, or hatchings produced the shimmer.

## How to read a tile

Each tile on the wall carries a two-part label:

- **Pitch** — the spacing of the source lines, in pixels. Smaller pitch, finer field.
- **Angles** — the rotation of each overlapping layer. For ring fields this becomes an **offset**: how far the second set of centres has slid from the first.

The rule that governs almost everything here is short enough to memorise:

```
beat_spacing = pitch / (2 * sin(angle_difference / 2))
```

Small angle differences make enormous beats; large ones make fine ones. Every pattern in the library is a point on that curve.

## On the drifting hero

The field on the home page is the one moving piece in the collection. It is two line fields rotating at slightly different rates, so the angle between them is always changing — which means the moiré is always sliding. It is the whole idea of the library, animated: the lines are rigid, the pattern is not. If your system asks for reduced motion, the two fields lock to a fixed offset and the shimmer holds still, so the pattern is legible either way.

## Colophon

Set in [Archivo](https://fonts.google.com/specimen/Archivo). Built with the Hwaro static site generator. Ground is a near-black green-tinted grey; the single accent is chartreuse, chosen because it makes white line work vibrate hardest against a dark field.
