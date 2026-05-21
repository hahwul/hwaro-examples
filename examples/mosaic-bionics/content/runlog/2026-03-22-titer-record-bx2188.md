+++
title = "Titer record: BX-2188.2 closes batch 2026-058 at 41.8 g/L"
date = "2026-03-22"
description = "A new house record for the malonyl-CoA shunt strain. 41.8 g/L at hour 96 on a 30 L fed-batch with the redesigned glucose feed profile."
tags = ["record", "fed-batch", "strain-engineering"]
[extra]
batch_id = "2026-058"
strain = "BX-2188.2"
reactor = "R-030A"
status = "on-spec"
titer_g_l = 41.8
yield_pct = 64.2
+++

## Summary

Batch 2026-058 — a 30 L fed-batch of **BX-2188.2** on **R-030A** — closed at **41.8 g/L**
of the target dicarboxylic acid at hour 96, setting a new house record. The previous
best for this strain lineage was 38.4 g/L (batch 2025-244, December). The improvement
is attributable to the redesigned glucose feed profile we trialed this run, which
holds the residual glucose closer to 1.2 g/L instead of the 0.3–0.5 g/L window we used
through Q4.

## Run snapshot

- **Strain:** BX-2188.2 (lineage from BX-2104.7, two rounds of MAGE on the malonyl-CoA
  shunt regulators).
- **Media:** MB-21 defined, with the magnesium step we trialed in January.
- **Induction:** IPTG at OD 28, hour 21.
- **Specific productivity (peak):** 142 mg/g/h between hours 34 and 50.
- **Yield on glucose:** 64.2% of theoretical max.
- **Final pH:** 6.74 (target 6.70 ± 0.10).
- **DO floor:** 31% (target 30%).

## What changed

The new feed profile uses a sigmoidal ramp from hour 18 to hour 32, holding residual
glucose at **1.2 g/L** through the exponential phase before throttling back to 0.6 g/L
for the production phase. The hypothesis was that the higher residual glucose during
exponential growth would let the cells build more biomass before we redirect carbon
to the product pathway. The hypothesis held: peak OD reached 84.6, compared to 71.2
on the last record-setting run.

## What we are watching

The specific productivity curve has a noticeable dip between hours 50 and 56 that
correlates with a brief DO excursion. We are not sure yet whether this is causal or
coincidental — the next two runs will hold DO tighter to find out. If it is causal,
there may be another 2–3 g/L on the table.

The strain library entry for BX-2188.2 has been updated. The seed bank has been
expanded to ten cryovials.
