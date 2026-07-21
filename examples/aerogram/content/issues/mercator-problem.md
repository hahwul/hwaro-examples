+++
title = "The Mercator Problem"
date = "2025-01-14"
description = "Why a 1569 navigation chart became the mental map of the whole world, and what got stretched to make it work."
tags = ["projections", "history", "distortion"]
[extra]
dispatch = "No. 01"
coord = "51°30'26\" N, 0°07'39\" W"
+++

Open a map on a phone right now and Greenland looks roughly the size of
Africa. It is not. Africa could hold Greenland fourteen times over with room
left for India. The mismatch is not a rendering bug. It is the surviving
ghost of a navigation chart drawn for sailors, still quietly deciding what
the world looks like four and a half centuries later.

<!-- more -->

The projection was never built to be honest about area. It was built to
solve one very specific problem: a compass bearing held constant across open
ocean should draw as a straight line on the paper. Cylindrical projections
that preserve this property push meridians into parallel verticals, which
means the grid has to stretch east-west as you move from the equator toward
either pole. To keep angles correct at every point, the projection has to
stretch north-south by the same factor, and the two stretches compound.
Greenland, sitting near 70° north, is inflated by roughly a factor of four in
linear scale and closer to fourteen in area.

Sailors needed that straight line badly enough to accept the trade. A rhumb
line is not the shortest route, but it is a route a helmsman can actually
hold without recalculating a heading every few hours, which mattered more
than area accuracy when the alternative was running aground on a coast
nobody had resurveyed since the last war.

The trouble started when the chart escaped the chart table. Wall maps,
classroom atlases, and eventually web-tile services inherited the same grid
because the math was already solved and the tiles were already square. None
of those uses need a constant compass bearing. All of them inherited the
area distortion anyway, because nobody re-derived the projection for the new
job &mdash; they just kept the one that already existed.

No flat projection preserves both shape and area at once; the trade-off is
provable, not a failure of nerve. Equal-area alternatives exist and have for
over a century, and we will get to a few of them, including
[one that solves the problem by admitting defeat](../interrupted-goode-homolosine/)
&mdash; the sphere cannot be cut open without a seam showing somewhere. The
seam is the honest part.
