+++
title = "Bulk Electrolysis and Product Analysis"
description = "Controlled-potential electrolysis at -0.9 V vs. RHE for all compositions. Gas chromatography and HPLC product quantification."
weight = 3
template = "post"
tags = ["electrolysis", "GC", "HPLC", "faradaic-efficiency"]
categories = ["entries"]
[extra]
entry_number = "3"
+++

<span class="timestamp">2026-04-09 / 08:45-18:30 JST</span>

## Objective

Perform controlled-potential electrolysis at -0.9 V vs. RHE on all five electrode compositions. Quantify gaseous products by online GC and liquid products by post-electrolysis HPLC.

## Conditions

- Electrolyte: CO2-saturated 0.1 M KHCO3 (pH 6.8)
- Applied potential: -0.9 V vs. RHE (iR-corrected)
- Duration: 60 min per run, 3 replicates per electrode
- GC sampling: every 15 min (automated injection via 6-port valve)
- HPLC: post-electrolysis catholyte sample, 20 uL injection

## Complete Product Distribution

| Electrode | FE_CO (%) | FE_HCOO (%) | FE_H2 (%) | FE_CH4 (%) | FE_C2H4 (%) | FE_Tot (%) |
|-----------|-----------|-------------|-----------|------------|-------------|-----------|
| Pure Cu   | 28.2+/-4.1 | 8.1+/-1.8  | 58.4+/-3.2 | 3.2+/-0.8 | 1.2+/-0.4  | 99.1      |
| Cu9Sn1    | 52.1+/-5.3 | 17.8+/-2.6 | 24.6+/-3.8 | 0.4+/-0.2 | 0.0        | 94.9      |
| Cu7Sn3    | 71.3+/-2.8 | 12.2+/-1.9 | 13.1+/-2.1 | 0.0       | 0.0        | 96.6      |
| Cu1Sn1    | 58.4+/-6.2 | 21.5+/-3.5 | 16.8+/-2.4 | 0.0       | 0.0        | 96.7      |
| Cu3Sn7    | 34.1+/-4.8 | 38.2+/-5.1 | 22.4+/-3.0 | 0.0       | 0.0        | 94.7      |

<div class="observation">
<strong>Observations:</strong> As Sn content increases, hydrocarbon products (CH4, C2H4) are completely suppressed. The Cu7Sn3 composition gives the best CO selectivity while maintaining reasonable current density (-9.4 mA/cm2). Higher Sn content shifts selectivity toward formate production.
</div>

## ECSA-Normalized Partial Current Densities

When normalized by ECSA (from Entry 2), Cu7Sn3 still shows enhanced CO selectivity beyond the surface area effect:

| Electrode | j_CO / ECSA (mA/cm2_real) | j_HCOO / ECSA (mA/cm2_real) |
|-----------|--------------------------|----------------------------|
| Pure Cu   | -1.69                    | -0.49                      |
| Cu7Sn3    | -0.87                    | -0.15                      |

<div class="observation note">
<strong>Interpretation:</strong> Intrinsic j_CO per real cm2 is lower for Cu7Sn3 than pure Cu, but intrinsic j_H2 drops by 10x. The Sn alloying effect primarily suppresses HER rather than enhancing CO2RR. This is consistent with weakened H-binding on Sn-modified Cu sites (see Kortlever et al., 2015).
</div>
