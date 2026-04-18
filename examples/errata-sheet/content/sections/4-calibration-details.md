+++
title = "C-4. Calibration Reference Temperature"
description = "Minor correction to the calibration reference temperature reported in the methods section."
weight = 4
template = "post"
tags = ["paper", "light", "errata", "correction", "transparent"]
categories = ["sections"]

[extra]
section_number = "C-4"
+++

<span class="severity-badge minor">MINOR</span>

## Error Description

Section 3.1 of the original paper stated that the 3-omega calibration was performed at 298 K (25 C). The laboratory records confirm the actual calibration temperature was 295 K (22 C), consistent with the laboratory thermostat setting. This discrepancy contributed to the selection of the incorrect reference thermal conductivity value (see Correction C-1).

## Diff Display

<div class="diff-block">
  <div class="diff-header">Section 3.1, Paragraph 2</div>
  <div class="diff-line context"><span class="diff-marker"> </span>The 3-omega measurement system was calibrated using NIST SRM 1453</div>
  <div class="diff-line removed"><span class="diff-marker">-</span>(fused silica, kappa = 1.38 W/m-K) at a reference temperature of 298 K.</div>
  <div class="diff-line added"><span class="diff-marker">+</span>(fused silica, kappa = 1.12 W/m-K) at a reference temperature of 295 K.</div>
  <div class="diff-line context"><span class="diff-marker"> </span>Heater linewidths of 5 um and 30 um were used for thin-film and</div>
  <div class="diff-line context"><span class="diff-marker"> </span>substrate measurements, respectively.</div>
</div>

## Impact Assessment

This correction is classified as minor because it affects the methods description only. The scientific impact is already captured in Correction C-1 (recalculated thermal conductivity values). No additional recalculation is needed beyond what is described in C-1.
