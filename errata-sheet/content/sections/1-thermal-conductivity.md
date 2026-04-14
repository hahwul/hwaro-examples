+++
title = "C-1. Thermal Conductivity Values"
description = "Critical correction to thermal conductivity measurements in Table 2 and Figure 3 due to incorrect 3-omega calibration factor."
weight = 1
template = "post"
tags = ["paper", "light", "errata", "correction", "transparent"]
categories = ["sections"]

[extra]
section_number = "C-1"
+++

<span class="severity-badge critical">CRITICAL</span>

## Error Description

The 3-omega measurement system used for thermal conductivity characterization of thin-film samples was calibrated using a reference standard (SRM 1453, fused silica) with an assumed thermal conductivity of 1.38 W/m-K at 298 K. Post-publication audit revealed that the reference value should have been 1.12 W/m-K at 295 K (the actual measurement temperature), yielding a systematic overestimation factor of 1.23x for all thin-film measurements.

The bulk Bi2Te3 reference samples were measured using the laser flash method (not 3-omega) and are unaffected.

## Corrected Table

<table class="paper-table">
  <caption><span class="tab-num">Table 2 (Corrected).</span> Thermal conductivity of Bi2Te3 samples at 300 K.</caption>
  <thead>
    <tr>
      <th>Sample</th>
      <th>Thickness</th>
      <th>Original kappa (W/m-K)</th>
      <th>Corrected kappa (W/m-K)</th>
      <th>Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bulk reference</td>
      <td class="num">--</td>
      <td class="num">1.95</td>
      <td class="added-cell">1.95 (unchanged)</td>
      <td class="num">0 pct</td>
    </tr>
    <tr>
      <td>Film A</td>
      <td class="num">200 nm</td>
      <td class="removed-cell">1.02</td>
      <td class="added-cell">1.26</td>
      <td class="num">+23.5 pct</td>
    </tr>
    <tr>
      <td>Film B</td>
      <td class="num">80 nm</td>
      <td class="removed-cell">0.61</td>
      <td class="added-cell">0.75</td>
      <td class="num">+23.0 pct</td>
    </tr>
    <tr>
      <td>Film C</td>
      <td class="num">30 nm</td>
      <td class="removed-cell">0.43</td>
      <td class="added-cell">0.53</td>
      <td class="num">+23.3 pct</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">Correction factor: 1.23x applied uniformly to all 3-omega derived measurements. Uncertainty bounds are rescaled proportionally.</td></tr>
  </tfoot>
</table>

## Diff Display

<div class="diff-block">
  <div class="diff-header">Table 2, Row: Film A (200 nm)</div>
  <div class="diff-line context"><span class="diff-marker"> </span>Sample: Film A, Thickness: 200 nm, Method: 3-omega</div>
  <div class="diff-line removed"><span class="diff-marker">-</span>kappa = 1.02 +/- 0.08 W/m-K (calibrated at 298 K, ref: 1.38 W/m-K)</div>
  <div class="diff-line added"><span class="diff-marker">+</span>kappa = 1.26 +/- 0.10 W/m-K (calibrated at 295 K, ref: 1.12 W/m-K)</div>
  <div class="diff-line context"><span class="diff-marker"> </span>Measurement temperature: 300 K, Atmosphere: vacuum (10e-4 Pa)</div>
</div>

<div class="diff-block">
  <div class="diff-header">Table 2, Row: Film B (80 nm)</div>
  <div class="diff-line context"><span class="diff-marker"> </span>Sample: Film B, Thickness: 80 nm, Method: 3-omega</div>
  <div class="diff-line removed"><span class="diff-marker">-</span>kappa = 0.61 +/- 0.05 W/m-K</div>
  <div class="diff-line added"><span class="diff-marker">+</span>kappa = 0.75 +/- 0.06 W/m-K</div>
  <div class="diff-line context"><span class="diff-marker"> </span>Measurement temperature: 300 K, Atmosphere: vacuum (10e-4 Pa)</div>
</div>

<div class="diff-block">
  <div class="diff-header">Table 2, Row: Film C (30 nm)</div>
  <div class="diff-line context"><span class="diff-marker"> </span>Sample: Film C, Thickness: 30 nm, Method: 3-omega</div>
  <div class="diff-line removed"><span class="diff-marker">-</span>kappa = 0.43 +/- 0.04 W/m-K</div>
  <div class="diff-line added"><span class="diff-marker">+</span>kappa = 0.53 +/- 0.05 W/m-K</div>
  <div class="diff-line context"><span class="diff-marker"> </span>Measurement temperature: 300 K, Atmosphere: vacuum (10e-4 Pa)</div>
</div>

## Impact on Figure 3

Figure 3 in the original paper (thermal conductivity versus film thickness) is replaced with corrected values. The shape of the curve is preserved, but all thin-film data points shift upward by approximately 23 pct. The fitted Callaway model parameters are updated accordingly: the grain boundary scattering mean free path changes from 42 nm to 38 nm.
