+++
title = "Strength Bought on Credit"
date = "2025-04-07"
description = "7075-T6 aluminum posts aerospace-grade strength and then, held under sustained load in salt fog, quietly cracks along its own grain boundaries."
tags = ["aluminum", "aerospace", "stress-corrosion"]
[extra]
material = "7075-T6 Aluminum"
batch = "LOT 033-B"
chip = "#b9b0a6"
test = "Constant-load stress corrosion cracking, ASTM G49"
verdict = "Failed at 940 h — SCC confirmed"
verdict_class = "failed"
+++

7075-T6 is the aluminum alloy that made the modern airframe possible: zinc and magnesium as the primary hardeners, copper for extra strength, artificially aged into a precipitate structure that pushes tensile strength past 570 MPa — close to some structural steels, at a third of the density. It is also an alloy with a known weakness that does not show up on a tensile test at all, so this issue's specimen never got pulled to failure. It sat, loaded, in a salt fog chamber for as long as it took.

<!-- more -->

Stress corrosion cracking needs three things at once: a susceptible microstructure, a sustained tensile stress, and a corrosive environment — and 7075-T6 loaded across its short-transverse grain direction, the orientation across the thinnest run of grains in a rolled plate, supplies the first condition just by existing. We clamped a short-transverse coupon at 75 percent of its yield stress and left it in a 5 percent NaCl fog per ASTM G49, checking it every 48 hours without touching it.

Nothing happened for the better part of a month. Then, between the 936-hour and 940-hour checks, the coupon parted with no visible necking — a flat, intergranular fracture surface where the crack had run along grain boundaries decorated with anodic precipitates, exactly the failure mode the short-transverse orientation is known for. The alloy's strength was never in question; what failed was the combination of a stress direction the original design should have avoided and forty days near a coastline. Later tempers — 7075-T73, most notably — trade some of that peak strength for resistance to exactly this mechanism, which is why modern wing structures increasingly specify the T73 temper for any part that will see both sustained load and moisture.

Up next: [a bulk metallic glass](/issues/004-metallic-glass/), tested with a drop weight instead of a slow pull, because the question this time is not how much it bends — it is whether "bend" even applies.
