+++
title = "The Interrupted Goode Homolosine"
date = "2026-05-11"
description = "An orange-peel map that admits the sphere cannot be flattened without a seam, and puts the seam in the ocean on purpose."
tags = ["projections", "interrupted-maps", "distortion"]
[extra]
dispatch = "No. 07"
coord = "0°00'00\" N, 0°00'00\" W"
+++

Filed, appropriately, from Null Island &mdash; the point at zero latitude
and zero longitude where cartographers have long parked placeholder data
that never got a real location, sitting in open ocean where no one will
mind. It felt like the right desk to write from for a projection that solves
its distortion problem by admitting defeat gracefully instead of hiding it.

<!-- more -->

Every other projection in this letter, [starting with the one everyone
already has an opinion about](../mercator-problem/), has tried to
preserve some property &mdash; angle, area, distance &mdash; by accepting
distortion elsewhere on the map, usually pushed toward the edges where a
reader is least likely to look closely. The interrupted homolosine takes a different position: rather
than smear the distortion thin across the whole sheet, it cuts the sheet
into lobes along ocean meridians where the seam does the least damage to
landmasses, and lets each lobe carry its own low-distortion sinusoidal or
Mollweide-style projection independently.

The construction is a stitched hybrid, which is exactly what the name
promises. Between roughly 40°N and 40°S it uses a sinusoidal projection,
where meridians are drawn as smooth curves and area is preserved exactly at
the cost of shape near the outer lobes. Above and below that band it
switches to a Mollweide-style elliptical projection, which handles the
higher latitudes with less shape distortion than the sinusoidal curves would
produce. The two pieces are matched to have identical scale along the seam
latitude, so the join is continuous even though the underlying math changes
completely on either side of it.

```text
if abs(latitude) <= 40.0:
    x = longitude * cos(latitude)          # sinusoidal lobe
    y = latitude
else:
    x, y = mollweide_projection(latitude, longitude)  # polar lobes
```

The honesty is in the cut. A reader looking at an interrupted homolosine
sees immediately that Antarctica has been sliced into pieces and the oceans
have gaps where a seamless map would paper over the compromise. That
visible seam is the projection telling the truth about a fact every flat
map is quietly managing: a sphere cannot be laid flat without cutting it
somewhere, and pretending otherwise is just a distortion you have chosen not
to disclose.
