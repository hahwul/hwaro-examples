+++
title = "Long-Term Stability Test"
description = "Six-hour continuous electrolysis of Cu7Sn3 at -0.9 V vs. RHE with periodic product sampling. Monitoring current retention and selectivity drift."
weight = 5
template = "post"
tags = ["stability", "durability", "time-course", "Cu7Sn3"]
categories = ["entries"]
[extra]
entry_number = "5"
+++

<span class="timestamp">2026-04-12 / 09:30-16:00 JST</span>

## Objective

Assess the long-term stability of the optimized Cu7Sn3 catalyst under continuous CO2 reduction conditions. Target: 6 hours at -0.9 V vs. RHE with product analysis every 30 minutes.

## Conditions

- Electrode: Cu7Sn3 (fresh deposition, same parameters as Entry 1)
- Potential: -0.9 V vs. RHE (iR-corrected), stirring 600 rpm
- GC: every 30 min automated sampling
- HPLC: catholyte sampled at t = 0, 2, 4, 6 h

## Time-Course Data

| t (h) | j (mA/cm2) | FE_CO (%) | FE_HCOO (%) | FE_H2 (%) | Notes |
|-------|-----------|-----------|-------------|-----------|-------|
| 0.5   | -9.4      | 72.8      | 11.4        | 12.6      | Stable |
| 1.0   | -9.3      | 71.5      | 12.0        | 13.2      | Stable |
| 1.5   | -9.2      | 70.1      | 12.4        | 13.8      | Slight drift |
| 2.0   | -9.0      | 68.3      | 13.1        | 14.8      | |
| 2.5   | -8.8      | 66.2      | 13.8        | 15.4      | |
| 3.0   | -8.5      | 64.8      | 14.2        | 16.1      | |
| 3.5   | -8.2      | 62.1      | 15.0        | 17.2      | |
| 4.0   | -7.8      | 59.4      | 15.8        | 18.4      | Electrolyte refreshed |
| 4.5   | -8.8      | 67.1      | 13.2        | 14.8      | Recovery after refresh |
| 5.0   | -8.6      | 65.8      | 13.6        | 15.2      | |
| 5.5   | -8.3      | 63.5      | 14.4        | 16.0      | |
| 6.0   | -8.0      | 61.2      | 15.1        | 17.0      | End |

<div class="observation">
<strong>Result:</strong> Current retention after 6 h: 85% of initial value. FE_CO decreases from 72.8% to 61.2% over 6 h (15.9% relative loss). Electrolyte refresh at t = 4 h partially restores both current and selectivity, suggesting that local pH increase and bicarbonate depletion contribute to the gradual decline. Catalyst surface restructuring likely also contributes -- post-test SEM shows some coarsening of dendritic features.
</div>

<div class="observation note">
<strong>Next steps:</strong> (1) Test with continuous electrolyte flow cell to eliminate depletion effects. (2) Add iridium oxide counter electrode to minimize Pt contamination risk. (3) Characterize post-test electrode by XRD to check for phase segregation.
</div>
