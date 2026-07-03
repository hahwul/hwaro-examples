+++
title = "Creep at the Turbine's Edge"
date = "2026-01-12"
description = "Inconel 718 holds a load at 650 degrees Celsius for 1,240 hours before it ruptures — the slowest and most instrumented failure the Fenwick floor has run."
tags = ["superalloy", "creep", "turbines", "heat-treatment"]
[extra]
material = "Inconel 718"
batch = "LOT 079-B"
chip = "#e0a33e"
test = "Creep-rupture at 650°C, ASTM E139"
verdict = "Ruptured at 1,240 h, 650°C"
verdict_class = "failed"
+++

Inconel 718 is a nickel-iron superalloy that owes essentially all of its high-temperature strength to a heat treatment, not to its as-cast chemistry: a two-step aging cycle that precipitates two nanometer-scale phases — gamma-double-prime and a supporting gamma-prime — through the grain interior, each one a tiny obstacle that pins dislocations in place. Get the aging schedule right and the alloy holds useful strength past 650 degrees Celsius, well into the hot section of a turbine. Get it wrong and the alloy loses most of what makes it worth the price.

<!-- more -->

This batch's aging cycle ran to spec: solution treated, then aged at two temperatures in sequence to grow the gamma-double-prime precipitate to its optimal size, small enough to stay coherent with the surrounding lattice, large enough to actually block dislocation motion. The specimen went onto a creep frame under a constant load equivalent to roughly 60 percent of its room-temperature yield strength, inside a furnace held at 650 degrees Celsius, and we let the clock run.

Creep does not look like other failures on this floor. There is no single yield event — the specimen simply elongates, continuously and slowly, through three recognizable stages: a fast initial stretch as the microstructure adjusts to load, a long steady-state stage where the elongation rate is nearly constant and dislocations climb past the precipitates one at a time, and a final tertiary stage where internal voids link up faster than the material can accommodate them and the strain rate accelerates into rupture. Stage two ran for most of the test; stage three took less than six percent of the total time. The bar parted at 1,240 hours, with 8 percent total elongation — a number that matters because a turbine blade's actual service life is governed by exactly this curve, run at the specific stress and temperature the blade sees in the hot section, extrapolated out to tens of thousands of hours no test floor can run in real time.

```text
STAGE       DURATION(h)   STRAIN RATE
primary     140           decelerating
secondary   1,027         ~4.1e-6 /h (steady)
tertiary    73            accelerating to rupture
total       1,240         8.0% elongation
```

That is the year's run, filed. Read the [full specimen archive](/issues/) from the start with [A36 steel's yield point](/issues/001-a36-steel/), or wait for the next batch — it goes onto the floor once its heat treatment clears inspection.
