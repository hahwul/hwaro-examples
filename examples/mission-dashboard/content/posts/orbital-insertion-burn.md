+++
title = "Orbital Insertion Burn Complete"
date = 2025-11-04
tags = ["propulsion", "gnc", "nominal"]
description = "MCC-7 completed its circularization burn on orbit 3, achieving a 402 by 412 km parking orbit within tolerance."
+++

At 00:14:22 mission elapsed time, FIDO called the orbital insertion burn as clean. The main engine fired for 138 seconds, trimming the apogee from a 220 km injection ellipse into a near-circular 402 by 412 km parking orbit. Residual velocity error came in at 0.8 m/s, well inside the 3 m/s gate.

## burn summary

- **Ignition**: T+ 00:11:46, on the nominal mark.
- **Cutoff**: T+ 00:14:04, commanded by guidance, not propellant depletion.
- **Propellant used**: 11.4% of total, leaving a 12% reserve margin.

Guidance held attitude error under 0.05 degrees through the entire burn, so reaction control wheels barely desaturated. EECOM reported bus voltage steady at 28.1 V with no transient dips during ignition.

> Flight, Guidance -- insertion is nominal, vehicle is in the box. We are go for orbit operations.

The only watch item is a recurring S-band signal drop near the southern node. INCO is tracking it as a caution, not a fault, and we expect it to clear once the high-gain antenna finishes its slew.

```
BURN   dV_target = 128.0 m/s
BURN   dV_actual = 127.2 m/s
RESID  |err|     = 0.8 m/s   [GATE 3.0]  -> PASS
```

Next major event is the first communications pass over the deep-space station on orbit 5.
