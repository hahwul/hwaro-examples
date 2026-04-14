+++
title = "4. Catalyst Characterisation"
description = "XRD, TEM, and XPS analysis across the EXP-01, EXP-02, and EXP-03 catalysts, revealing alloy structure and electronic effects."
weight = 4
template = "post"
tags = ["paper", "dark", "experimental", "characterisation", "XRD", "TEM", "XPS"]
categories = ["sections"]
[extra]
section_number = "4"
+++

## 4.1 X-ray Diffraction (XRD)

XRD measurements were performed on all three catalyst batches (fresh, after calcination and reduction, before catalytic testing) using a PANalytical X'Pert Pro diffractometer (Cu K-alpha radiation, lambda = 1.5406 A, 2-theta range 20-80 degrees, step size 0.02 degrees, 2 s per step).

### Key findings

- **EXP-01 (Pd:Cu 3:1):** Diffraction peaks at 2-theta = 40.1, 46.7, and 68.1 degrees correspond to fcc Pd(111), Pd(200), and Pd(220) reflections. Peak positions show a slight shift to higher angles relative to pure Pd (40.0 degrees), indicating limited Cu incorporation into the Pd lattice. Scherrer crystallite size: 8.2 nm.

- **EXP-02/EXP-03 (Pd:Cu 2:1):** The Pd(111) reflection shifts further to 40.3 degrees, consistent with greater Cu substitution and lattice contraction (Cu atomic radius: 1.28 A vs. Pd: 1.37 A). Scherrer crystallite size: 7.6 nm. No separate Cu or CuO phases are detected, confirming full alloying.

<figure class="figure">
  <svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic XRD pattern showing peak positions for EXP-01 and EXP-02/03 catalysts">
    <!-- Axes -->
    <line x1="80" y1="240" x2="600" y2="240" stroke="#2a3342" stroke-width="1"/>
    <line x1="80" y1="30" x2="80" y2="240" stroke="#2a3342" stroke-width="1"/>
    <!-- X-axis label -->
    <text x="340" y="272" text-anchor="middle" font-family="IBM Plex Mono" font-size="10" fill="#8b95a5">2-theta (degrees)</text>
    <!-- Y-axis label -->
    <text x="30" y="135" text-anchor="middle" font-family="IBM Plex Mono" font-size="10" fill="#8b95a5" transform="rotate(-90 30 135)">Intensity (a.u.)</text>
    <!-- X-axis ticks -->
    <text x="120" y="256" text-anchor="middle" font-family="IBM Plex Mono" font-size="8" fill="#8b95a5">25</text>
    <text x="220" y="256" text-anchor="middle" font-family="IBM Plex Mono" font-size="8" fill="#8b95a5">35</text>
    <text x="320" y="256" text-anchor="middle" font-family="IBM Plex Mono" font-size="8" fill="#8b95a5">45</text>
    <text x="420" y="256" text-anchor="middle" font-family="IBM Plex Mono" font-size="8" fill="#8b95a5">55</text>
    <text x="520" y="256" text-anchor="middle" font-family="IBM Plex Mono" font-size="8" fill="#8b95a5">65</text>
    <!-- EXP-01 pattern (offset upward) -->
    <!-- Baseline -->
    <polyline points="100,140 240,140 248,138 252,80 256,138 260,140 320,140 326,134 330,108 334,134 338,140 500,140 506,136 510,120 514,136 518,140 580,140" fill="none" stroke="#c9a84b" stroke-width="1.5" opacity="0.7"/>
    <text x="590" y="144" font-family="IBM Plex Mono" font-weight="700" font-size="8" fill="#c9a84b">EXP-01</text>
    <!-- Peak annotations for EXP-01 -->
    <text x="252" y="72" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="#c9a84b">40.1</text>
    <text x="330" y="100" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="#c9a84b">46.7</text>
    <!-- EXP-02/03 pattern (offset downward) -->
    <polyline points="100,200 240,200 250,198 256,120 260,198 264,200 322,200 328,192 334,168 338,192 342,200 502,200 508,194 514,178 518,194 522,200 580,200" fill="none" stroke="#5cba7d" stroke-width="1.5"/>
    <text x="590" y="204" font-family="IBM Plex Mono" font-weight="700" font-size="8" fill="#5cba7d">EXP-02/03</text>
    <!-- Peak annotations for EXP-02/03 -->
    <text x="256" y="112" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="#5cba7d">40.3</text>
    <!-- Shift annotation -->
    <line x1="252" y1="84" x2="256" y2="84" stroke="#8b95a5" stroke-width="0.5"/>
    <text x="280" y="88" font-family="IBM Plex Mono" font-size="6" fill="#8b95a5">+0.2 deg shift</text>
  </svg>
  <figcaption class="caption"><span class="fig-num">Figure 4.1.</span> Schematic XRD patterns for EXP-01 (amber) and EXP-02/03 (green) catalysts. The Pd(111) peak shifts from 40.1 to 40.3 degrees with increased Cu content, confirming greater Cu incorporation into the Pd lattice. No separate Cu/CuO phases are observed.</figcaption>
</figure>

## 4.2 Transmission Electron Microscopy (TEM)

TEM imaging was performed on a JEOL JEM-2100F (200 kV) with EDX capability. Samples were prepared by ultrasonic dispersion in ethanol and deposition onto holey carbon grids.

### Particle size distribution

- **EXP-01 (Pd:Cu 3:1):** Mean particle diameter = 8.4 +/- 2.1 nm (n = 150 particles). Distribution is approximately log-normal with a slight positive skew. Particles are predominantly spherical to hemispherical.

- **EXP-02/EXP-03 (Pd:Cu 2:1):** Mean particle diameter = 7.8 +/- 1.8 nm (n = 150 particles). Slightly smaller mean size and narrower distribution, consistent with Cu acting as a nucleation modifier during co-impregnation.

### EDX mapping

EDX elemental mapping confirms co-localisation of Pd and Cu within individual nanoparticles for both compositions. No Cu-rich or Pd-rich segregated domains were observed at the 1 nm spatial resolution of the instrument. This supports the XRD conclusion that Cu is incorporated as a substitutional alloy within the Pd lattice rather than forming separate phases.

<table class="paper-table">
  <caption><span class="tab-num">Table 4.1.</span> TEM particle size analysis.</caption>
  <thead>
    <tr>
      <th>Catalyst</th>
      <th>Mean diameter (nm)</th>
      <th>Std dev (nm)</th>
      <th>Particles counted</th>
      <th>Dispersion (pct)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="exp-id">EXP-01</span></td>
      <td class="num">8.4</td>
      <td class="num">2.1</td>
      <td class="num">150</td>
      <td class="num">13.4</td>
    </tr>
    <tr>
      <td><span class="exp-id">EXP-02</span> / <span class="exp-id exp-success">EXP-03</span></td>
      <td class="num">7.8</td>
      <td class="num">1.8</td>
      <td class="num">150</td>
      <td class="num">14.4</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">Dispersion estimated from mean particle diameter assuming hemispherical geometry.</td></tr>
  </tfoot>
</table>

## 4.3 X-ray Photoelectron Spectroscopy (XPS)

XPS measurements were acquired on a Kratos Axis Supra (Al K-alpha, 1486.6 eV) at Charles University Prague. Survey spectra and high-resolution Pd 3d and Cu 2p regions were recorded. Binding energies were referenced to adventitious C 1s at 284.8 eV.

### Pd 3d region

- **EXP-01 (Pd:Cu 3:1):** Pd 3d5/2 binding energy = 335.4 eV, consistent with metallic Pd in a lightly alloyed environment. FWHM = 1.2 eV.

- **EXP-02/EXP-03 (Pd:Cu 2:1):** Pd 3d5/2 shifts to 335.7 eV (+0.3 eV relative to EXP-01). The positive shift indicates electron donation from Pd to Cu, consistent with the Pauling electronegativity difference (Cu: 1.90, Pd: 2.20). This charge transfer raises the Pd d-band centre energy, weakening the adsorption of pi-bonded alkenes.

### Cu 2p region

Both catalysts show Cu 2p3/2 at 932.4 eV with no satellite structure, confirming that Cu is fully reduced to Cu(0) after the H2 pre-treatment. The absence of Cu2+ shake-up satellites rules out incomplete reduction as a confounding factor.

### Surface composition

<table class="paper-table">
  <caption><span class="tab-num">Table 4.2.</span> XPS surface composition analysis.</caption>
  <thead>
    <tr>
      <th>Catalyst</th>
      <th>Pd 3d5/2 (eV)</th>
      <th>Cu 2p3/2 (eV)</th>
      <th>Surface Pd:Cu ratio</th>
      <th>Bulk Pd:Cu ratio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="exp-id">EXP-01</span></td>
      <td class="num">335.4</td>
      <td class="num">932.4</td>
      <td class="num">3.4:1</td>
      <td class="num">3.0:1</td>
    </tr>
    <tr>
      <td><span class="exp-id">EXP-02</span> / <span class="exp-id exp-success">EXP-03</span></td>
      <td class="num">335.7</td>
      <td class="num">932.4</td>
      <td class="num">2.2:1</td>
      <td class="num">2.0:1</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">Surface Pd:Cu ratio slightly exceeds bulk ratio in both cases, indicating mild Pd surface enrichment typical of Pd-Cu alloys reduced below 400 C.</td></tr>
  </tfoot>
</table>

## 4.4 Summary of characterisation

The combined XRD, TEM, and XPS data confirm that:

1. Cu is fully alloyed within the Pd lattice for both compositions, with no phase segregation
2. Increasing Cu content from Pd:Cu 3:1 to 2:1 produces a measurable lattice contraction and a +0.3 eV shift in Pd 3d binding energy
3. The electronic modification (charge transfer from Pd to Cu) provides a mechanistic explanation for the improved selectivity: weakened 1-butene adsorption promotes desorption before secondary hydrogenation
4. Particle sizes are comparable between compositions (8.4 vs. 7.8 nm), ruling out dispersion effects as a confounding variable
