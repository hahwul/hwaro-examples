+++
title = "Ring Beat"
date = "2026-05-02"
description = "Two sets of concentric rings, their centres nudged six pixels apart, fold into a hyperbolic beat."
[extra]
kind = "rings"
pitch = 8
rot1 = 66
rot2 = 62
+++

Concentric rings are the friendliest moiré source there is: shift two identical ring sets a little and the overlap traces a family of hyperbolas, curving away from the line that joins the two centres. It is the same figure you see when two stones drop into still water a hand's width apart. Here the centres sit six pixels off, and the beat sweeps the whole field into nested arcs.

<!-- more -->

## Why hyperbolas

A bright fringe appears wherever the two ring counts differ by a whole number. That locus — points whose distance to one centre minus the distance to the other is constant — is the textbook definition of a hyperbola. Change the spacing between centres and you change how tightly the arcs curl.

<figure>
<svg viewBox="0 0 320 260" role="img" aria-label="Two offset sets of concentric rings forming curved hyperbolic fringes">
  <g fill="none" stroke="#e4e8e2" stroke-width="0.8">
    <circle cx="150" cy="130" r="12"/><circle cx="150" cy="130" r="24"/><circle cx="150" cy="130" r="36"/><circle cx="150" cy="130" r="48"/><circle cx="150" cy="130" r="60"/><circle cx="150" cy="130" r="72"/><circle cx="150" cy="130" r="84"/><circle cx="150" cy="130" r="96"/><circle cx="150" cy="130" r="108"/><circle cx="150" cy="130" r="120"/>
  </g>
  <g fill="none" stroke="#e4e8e2" stroke-width="0.8" opacity="0.62">
    <circle cx="172" cy="122" r="12"/><circle cx="172" cy="122" r="24"/><circle cx="172" cy="122" r="36"/><circle cx="172" cy="122" r="48"/><circle cx="172" cy="122" r="60"/><circle cx="172" cy="122" r="72"/><circle cx="172" cy="122" r="84"/><circle cx="172" cy="122" r="96"/><circle cx="172" cy="122" r="108"/><circle cx="172" cy="122" r="120"/>
  </g>
</svg>
<figcaption>Two ring sets, radius step 8px, centres 22px apart in the enlarged plate.</figcaption>
</figure>

## Tuning notes

Bring the centres together and the arcs flatten toward straight lines — at zero offset the moiré vanishes entirely, since the sets coincide. Widen the offset and the arcs tighten into a rosette. For the tile above the centres sit close, so the beat reads as a single broad, calm sweep rather than a busy knot.
