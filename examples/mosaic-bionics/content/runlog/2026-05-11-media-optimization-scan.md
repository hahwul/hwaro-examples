+++
title = "Media optimization: 96-well scan of the magnesium and trace-metal axes"
date = "2026-05-11"
description = "A factorial scan across magnesium sulfate and the trace-metal mix on the 96-well screening deck. Two clear hits, one suspected plate effect."
tags = ["screening", "media", "doe"]
[extra]
batch_id = "scan-2026-018"
strain = "BX-2191.1"
reactor = "96-well deck"
status = "on-spec"
+++

## Summary

A two-factor screening DOE on **BX-2191.1**, varying **MgSO4** concentration (six
levels, 0.4 to 2.4 g/L) and the **trace-metal mix TM-4** dosage (eight levels, 0.5×
to 4.0× nominal). The full 6 × 8 grid plus 48 reference wells ran on the 96-well
screening deck for 36 hours under the standard exponential-phase protocol. Endpoint
fluorescence was read at 36 h; the heatmap mosaic in the front of the console is
this scan.

## Hits

Two cells in the high bin that survive replication:

- **Column 7, Row B** (MgSO4 1.6 g/L, TM-4 2.0×): endpoint fluorescence 1.42× over
  the 1.0 g/L Mg, 1.0× TM reference. Reproduced in two of two replicate wells on the
  same plate.
- **Column 9, Row C** (MgSO4 2.0 g/L, TM-4 2.5×): endpoint fluorescence 1.31× over
  reference. One replicate, one well at the next-bin-down. Worth chasing.

The MgSO4 effect is the dominant axis. The TM-4 axis matters much less than we
expected — the response above 1.0× is flat within noise except where it interacts
with the magnesium step.

## Suspected plate effect

Row A on columns 1 through 4 read uniformly high. This is the corner of the plate
nearest the heater block and we have seen this pattern before — almost certainly an
evaporation-driven concentration effect, not a real signal. Those wells are excluded
from the response surface fit.

## Next steps

- Confirm the column-7 hit in a 1 L bioreactor scale-down run, planned for next week.
- Re-fit the response surface excluding the Row A corner and use it to set the
  starting point for a tighter scan around MgSO4 1.4 to 1.8 g/L.
- The 96-well deck is booked through Friday for the antifoam comparison scan, so
  the follow-up DOE pushes to the week of May 18th.

Raw fluorescence data is in `data/scans/scan-2026-018.csv`. Plate map and well
assignments are pinned to the lab board.
