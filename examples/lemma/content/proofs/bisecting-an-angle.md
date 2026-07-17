+++
title = "Bisecting an angle, and why it always works"
date = "2025-04-03"
description = "The oldest compass construction there is, and the congruent triangles hiding inside it."
tags = ["angles", "compass", "symmetry"]
[extra]
fig = 2
claim = "The classic two-arc construction splits any angle into two equal parts."
+++

<figure class="fig fig-plate">
<svg viewBox="0 0 400 250" fill="none" role="img" aria-label="An angle at vertex O bisected by swinging equal arcs to points P and Q and then to their meeting point R">
<line class="c-line" x1="60" y1="220" x2="345" y2="56"/>
<line class="c-line" x1="60" y1="220" x2="193" y2="16"/>
<path class="c-guide" d="M172.6 155 A130 130 0 0 0 128.9 109.8"/>
<path class="c-guide" d="M191.3 62.9 A94 94 0 0 1 234.9 84.6"/>
<path class="c-guide" d="M201.4 50 A94 94 0 0 0 221.6 94.3"/>
<line class="c-line-2" x1="60" y1="220" x2="248" y2="42"/>
<circle class="f-pt" cx="60" cy="220" r="4.2"/>
<circle class="f-pt" cx="172.6" cy="155" r="4"/>
<circle class="f-pt" cx="128.9" cy="109.8" r="4"/>
<circle class="f-pt" cx="214.6" cy="70.7" r="4"/>
<text class="f-label" x="48" y="228" text-anchor="middle">O</text>
<text class="f-label" x="184" y="163" text-anchor="middle">P</text>
<text class="f-label" x="116" y="106" text-anchor="middle">Q</text>
<text class="f-label" x="226" y="66" text-anchor="middle">R</text>
</svg>
<figcaption>Swing one arc from <b>O</b> to mark <b>P</b> and <b>Q</b> at equal distance. Swing two more arcs of equal radius from <b>P</b> and <b>Q</b>; they cross at <b>R</b>. The line <b>OR</b> bisects the angle.</figcaption>
</figure>

This is probably the oldest construction anyone learns, and it is worth pausing on because the compass does something the eye cannot: it guarantees two lengths are equal without ever naming them.

<!-- more -->

Open the compass to any radius and swing an arc from the vertex O. It crosses the two sides at P and Q, and because both were drawn with the same radius, OP and OQ are equal. Keep the compass at some fixed width and swing an arc from P, then another of the same width from Q. Where those two arcs meet, call it R. By construction PR and QR are equal as well.

Now count what we know about triangles OPR and OQR. They share the side OR. We have OP equal to OQ, and PR equal to QR. Three pairs of equal sides, so the triangles are congruent. Congruent triangles have equal angles in the matching places, and the matching angles at O are exactly the two halves of the original angle.

That is the whole reason it works. The bisector is not a lucky line through the middle. It is the axis of a symmetry the two arcs built on purpose, and the congruence makes the symmetry exact rather than approximate.
