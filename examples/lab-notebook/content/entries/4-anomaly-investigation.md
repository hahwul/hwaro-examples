+++
title = "Anomaly Investigation: Current Drop Event"
description = "Post-mortem analysis of Cu7Sn3 electrode showing sudden deactivation at t=45 min. XPS and SEM investigation of surface restructuring."
weight = 4
template = "post"
tags = ["anomaly", "XPS", "deactivation", "dealloying"]
categories = ["entries"]
[extra]
entry_number = "4"
+++

<span class="timestamp">2026-04-10 / 13:00-17:30 JST</span>

## Background

During Run #3 of Cu7Sn3 at -0.9 V vs. RHE, current density dropped from -9.4 to -3.1 mA/cm2 at t = 45 min. This entry documents the investigation of that anomaly.

## Timeline of Event

| Time (min) | j (mA/cm2) | FE_CO (%) | Observation |
|-----------|-----------|-----------|-------------|
| 0         | -9.2      | --        | Normal startup |
| 15        | -9.4      | 72.1      | Stable |
| 30        | -9.3      | 70.8      | Stable |
| 45        | -3.1      | 41.2      | Sudden drop |
| 60        | -3.0      | 38.6      | No recovery |

## Post-mortem XPS Analysis

- **Before electrolysis:** Cu 2p shows Cu(0)/Cu(I) states; Sn 3d shows Sn(0) with minor Sn(II)
- **After anomaly:** Sn 3d peak shifts to higher binding energy; Sn(IV) dominant at surface
- **Depth profile (Ar+ sputtering):** First 5 nm is Sn-oxide-rich; bulk composition unchanged

<div class="observation anomaly">
<strong>Diagnosis:</strong> Local pH increase at the electrode surface during prolonged electrolysis caused selective oxidation of surface Sn to SnO2. The resulting Sn-oxide layer passivated the electrode. This is consistent with the known instability of Sn in alkaline conditions. The event was triggered by local electrolyte depletion -- convection was inadequate for this run (stirring speed had been accidentally set to 200 rpm instead of 600 rpm).
</div>

## Corrective Actions

1. Standardize stirring at 600 rpm for all future runs (added to protocol checklist)
2. Add real-time current monitoring alarm for drops > 30%
3. Run #3 excluded from mean calculation in Entry 3 data
4. Additional replicate scheduled for 2026-04-14
