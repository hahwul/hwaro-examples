+++
title = "C-2. ZT Figure of Merit"
description = "Major correction to thermoelectric figure-of-merit values derived from corrected thermal conductivity data."
weight = 2
template = "post"
tags = ["paper", "light", "errata", "correction", "transparent"]
categories = ["sections"]

[extra]
section_number = "C-2"
+++

<span class="severity-badge major">MAJOR</span>

## Error Description

The dimensionless thermoelectric figure of merit ZT = S^2 sigma T / kappa depends inversely on thermal conductivity. Because the corrected kappa values are higher than originally reported, the ZT values decrease proportionally.

## Corrected Values

<table class="paper-table">
  <caption><span class="tab-num">Table 3 (Corrected).</span> Thermoelectric figure of merit at 300 K.</caption>
  <thead>
    <tr>
      <th>Sample</th>
      <th>Original ZT</th>
      <th>Corrected ZT</th>
      <th>Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bulk reference</td>
      <td class="num">0.72</td>
      <td class="added-cell">0.72 (unchanged)</td>
      <td class="num">0 pct</td>
    </tr>
    <tr>
      <td>Film A (200 nm)</td>
      <td class="removed-cell">1.18</td>
      <td class="added-cell">0.96</td>
      <td class="num">-18.6 pct</td>
    </tr>
    <tr>
      <td>Film B (80 nm)</td>
      <td class="removed-cell">1.54</td>
      <td class="added-cell">1.25</td>
      <td class="num">-18.8 pct</td>
    </tr>
    <tr>
      <td>Film C (30 nm)</td>
      <td class="removed-cell">1.82</td>
      <td class="added-cell">1.48</td>
      <td class="num">-18.7 pct</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="4">Seebeck coefficient and electrical conductivity values are unchanged. ZT is recalculated using corrected kappa only.</td></tr>
  </tfoot>
</table>

## Diff Display

<div class="diff-block">
  <div class="diff-header">Section 4.2, Paragraph 3</div>
  <div class="diff-line context"><span class="diff-marker"> </span>The thermoelectric figure of merit for the thinnest film (30 nm)</div>
  <div class="diff-line removed"><span class="diff-marker">-</span>reached ZT = 1.82, representing a 153 pct enhancement over bulk.</div>
  <div class="diff-line added"><span class="diff-marker">+</span>reached ZT = 1.48, representing a 106 pct enhancement over bulk.</div>
  <div class="diff-line context"><span class="diff-marker"> </span>This enhancement is primarily attributed to the reduction in lattice</div>
  <div class="diff-line context"><span class="diff-marker"> </span>thermal conductivity through phonon-boundary scattering.</div>
</div>

## Impact Assessment

The corrected ZT values remain above unity for all nanostructured films, which is the threshold for practical thermoelectric applications. The qualitative conclusion that nanostructuring improves thermoelectric performance is preserved. However, the quantitative improvement is less dramatic than originally reported (106 pct vs. 153 pct enhancement for Film C).

<figure class="figure">
  <svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Correction impact assessment chart showing the magnitude of change for each affected quantity">
    <rect x="0" y="0" width="720" height="260" fill="#fafaf7"/>
    <text x="360" y="28" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="13" fill="#1a2030" letter-spacing="0.5">Correction Impact: Percentage Change by Quantity</text>
    <!-- Axes -->
    <line x1="200" y1="50" x2="200" y2="220" stroke="#1a2030" stroke-width="1"/>
    <line x1="200" y1="220" x2="680" y2="220" stroke="#1a2030" stroke-width="1"/>
    <!-- Zero line -->
    <line x1="400" y1="50" x2="400" y2="220" stroke="#1a2030" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="400" y="240" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#5b6272">0%</text>
    <text x="200" y="240" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#5b6272">-25%</text>
    <text x="600" y="240" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#5b6272">+25%</text>
    <!-- Labels -->
    <text x="190" y="80" text-anchor="end" font-family="IBM Plex Sans" font-weight="600" font-size="10" fill="#1a2030">kappa (films)</text>
    <text x="190" y="115" text-anchor="end" font-family="IBM Plex Sans" font-weight="600" font-size="10" fill="#1a2030">ZT (films)</text>
    <text x="190" y="150" text-anchor="end" font-family="IBM Plex Sans" font-weight="600" font-size="10" fill="#1a2030">Reduction pct</text>
    <text x="190" y="185" text-anchor="end" font-family="IBM Plex Sans" font-weight="600" font-size="10" fill="#1a2030">Callaway MFP</text>
    <!-- Bars -->
    <rect x="400" y="68" width="188" height="20" fill="#2a7a4a" opacity="0.5"/>
    <text x="594" y="82" font-family="JetBrains Mono" font-size="10" fill="#2a7a4a">+23%</text>
    <rect x="248" y="103" width="152" height="20" fill="#c44a3a" opacity="0.5"/>
    <text x="242" y="117" text-anchor="end" font-family="JetBrains Mono" font-size="10" fill="#c44a3a">-19%</text>
    <rect x="280" y="138" width="120" height="20" fill="#c44a3a" opacity="0.5"/>
    <text x="274" y="152" text-anchor="end" font-family="JetBrains Mono" font-size="10" fill="#c44a3a">-15pp</text>
    <rect x="336" y="173" width="64" height="20" fill="#c44a3a" opacity="0.5"/>
    <text x="330" y="187" text-anchor="end" font-family="JetBrains Mono" font-size="10" fill="#c44a3a">-10%</text>
  </svg>
  <div class="caption"><span class="fig-num">Figure 2.</span> Correction impact assessment. Green bars indicate quantities that increased after correction; red bars indicate decreases. kappa = thermal conductivity; ZT = figure of merit; Reduction pct = lattice kappa reduction relative to bulk; MFP = Callaway model mean free path.</div>
</figure>
