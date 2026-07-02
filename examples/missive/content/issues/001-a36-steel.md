+++
title = "The Workhorse's Yield Point"
date = "2025-01-13"
description = "A36 hot-rolled structural steel, pulled to failure to find the number every mill certificate rounds off."
tags = ["steel", "structural", "tensile-testing"]
[extra]
material = "A36 Steel"
batch = "LOT 014-C"
chip = "#8a8f92"
test = "Tensile pull to failure, ASTM A370"
verdict = "Pulled to failure at 410 MPa UTS"
verdict_class = "nominal"
+++

A36 is the steel nobody writes home about — beams, plate, the angle iron holding up a mezzanine somewhere near you — and that is exactly why the first issue on the floor this year was a coupon of it, milled to spec and pulled until it necked and parted. The mill certificate says 250 MPa minimum yield. We wanted to see the actual curve, not the guaranteed minimum on the paper.

<!-- more -->

The extensometer stayed linear to 261 MPa before the curve rolled over into a visible yield plateau — a flat stretch where the specimen elongated under almost no additional load, the hallmark of a low-carbon steel's dislocations breaking loose all at once. Past the plateau, strain hardening took back over and the load climbed again, slower, until the coupon necked visibly at the gauge center and separated at 410 MPa ultimate tensile strength, 27 percent elongation over a two-inch gauge length.

None of this is surprising. A36 is boring on purpose — a chemistry loose enough to weld without preheat, ductile enough to bend around a failure instead of shattering into one. What the pull confirms is the margin: an eleven percent cushion over the certified minimum yield, on a steel that gets specified into structures precisely because that cushion is supposed to always be there. The test log below is the raw extensometer readout at five key points on the curve.

```text
STRAIN(%)   STRESS(MPa)   EVENT
0.00        0             load applied
0.12        261           upper yield point
0.90        255           lower yield plateau
6.40        398           strain hardening peak
27.00       410           necking, rupture
```

Next on the floor: [a yttria-stabilized zirconia coupon](/issues/002-zirconia/), tested for the opposite property — not how much it bends before it breaks, but whether it bends at all.
