+++
title = "Long Fade"
date = "2025-11-08"
description = "Two nearly vertical hatch fields, four degrees apart, stretch the beat into slow columns."
[extra]
kind = "hatch"
pitch = 9
rot1 = 88
rot2 = 92
+++

Take the slip-hatch idea and stretch it. Two hatch fields set almost exactly vertical — eighty-eight and ninety-two degrees — differ by only four, and at a nine-pixel pitch that makes the moiré bands enormous: tall, soft columns that fade from dark to light and back across the full width of the field. It is the gentlest pattern in the library, closer to a gradient than a grid.

<!-- more -->

## Reading the fade

The columns are just very wide interference bands stood on end. Because the two fields straddle the vertical, the bands run vertically too, and their eighty-pixel spacing means only three or four ever fit in a tile. What you read as a smooth fade is really the shoulder of a single broad band.

<figure>
<svg viewBox="0 0 360 300" preserveAspectRatio="none" role="img" aria-label="Two nearly vertical hatch fields forming wide fading vertical columns">
  <defs>
    <pattern id="fig-lf-a" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(88)"><path d="M0 0 V9" stroke="#e4e8e2" stroke-width="0.9" fill="none"/></pattern>
    <pattern id="fig-lf-b" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(92)"><path d="M0 0 V9" stroke="#e4e8e2" stroke-width="0.9" fill="none" opacity="0.6"/></pattern>
  </defs>
  <rect width="360" height="300" fill="url(#fig-lf-a)"/>
  <rect width="360" height="300" fill="url(#fig-lf-b)"/>
</svg>
<figcaption>Hatch fields at 88° and 92°, both a 9px pitch.</figcaption>
</figure>

## Tuning notes

This is the pattern to reach for when you want texture without noise — a surface that breathes rather than buzzes. Widen the angle even to six degrees and the calm columns start to multiply and jostle; hold it at four and the field stays meditative, a slow tide of tone with no hard edge anywhere in it.
