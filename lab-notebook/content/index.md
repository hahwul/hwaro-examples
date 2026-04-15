+++
title = "Notebook Cover"
description = "Laboratory notebook documenting electrochemical CO2 reduction experiments on Cu-Sn bimetallic catalysts, featuring grid paper data plots, raw measurement tables, and observational notes."
tags = ["paper", "light", "laboratory", "raw", "observational"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Laboratory Notebook &middot; Active &middot; April 2026</p>
  <h1 class="paper-title">Electrochemical CO2 Reduction on Cu-Sn Bimetallic Catalysts</h1>
  <p class="paper-subtitle">Investigating faradaic efficiency and product selectivity of electrodeposited Cu-Sn alloy thin films in CO2-saturated 0.1 M KHCO3 at varying potentials and compositions.</p>
  <div class="paper-meta">
    <strong>Researcher:</strong> Dr. Yui Hasegawa, Postdoctoral Fellow<br>
    <strong>Supervisor:</strong> Prof. Ryota Nakamura, Department of Chemistry, University of Tokyo<br>
    <strong>Project:</strong> JST-CREST Carbon Recycling &middot; <strong>Start Date:</strong> 2026-01-14 &middot; <strong>Notebook:</strong> #ECR-2026-04
  </div>
</header>

## Catalyst Composition vs. Faradaic Efficiency

<!-- SVG hand-drawn data plot with axis labels and error bars -->
<figure>
<svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg" aria-label="Data plot showing faradaic efficiency vs. Cu-Sn composition" style="width:100%;max-width:720px;display:block;margin:1rem auto;">
  <!-- Grid paper background -->
  <defs>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#d4dde4" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="720" height="380" fill="#faf9f4"/>
  <rect x="80" y="30" width="600" height="300" fill="url(#grid)"/>
  <!-- Title (handwritten style) -->
  <text x="380" y="22" text-anchor="middle" font-family="'Caveat','Architects Daughter',cursive" font-size="15" font-weight="700" fill="#1a1e28">FE for CO production vs. Cu:Sn ratio at -0.9 V vs. RHE</text>
  <!-- Y axis -->
  <line x1="80" y1="30" x2="80" y2="330" stroke="#1a1e28" stroke-width="1.5"/>
  <text x="25" y="185" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="10" fill="#1a1e28" transform="rotate(-90,25,185)">Faradaic Efficiency (%)</text>
  <!-- Y axis ticks and labels -->
  <line x1="75" y1="330" x2="80" y2="330" stroke="#1a1e28" stroke-width="1"/><text x="72" y="334" text-anchor="end" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">0</text>
  <line x1="75" y1="270" x2="80" y2="270" stroke="#1a1e28" stroke-width="1"/><text x="72" y="274" text-anchor="end" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">20</text>
  <line x1="75" y1="210" x2="80" y2="210" stroke="#1a1e28" stroke-width="1"/><text x="72" y="214" text-anchor="end" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">40</text>
  <line x1="75" y1="150" x2="80" y2="150" stroke="#1a1e28" stroke-width="1"/><text x="72" y="154" text-anchor="end" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">60</text>
  <line x1="75" y1="90" x2="80" y2="90" stroke="#1a1e28" stroke-width="1"/><text x="72" y="94" text-anchor="end" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">80</text>
  <line x1="75" y1="30" x2="80" y2="30" stroke="#1a1e28" stroke-width="1"/><text x="72" y="34" text-anchor="end" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">100</text>
  <!-- X axis -->
  <line x1="80" y1="330" x2="680" y2="330" stroke="#1a1e28" stroke-width="1.5"/>
  <text x="380" y="368" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="10" fill="#1a1e28">Cu:Sn Molar Ratio</text>
  <!-- X axis labels -->
  <text x="140" y="350" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">Pure Cu</text>
  <text x="260" y="350" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">9:1</text>
  <text x="380" y="350" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">7:3</text>
  <text x="500" y="350" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">1:1</text>
  <text x="620" y="350" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">3:7</text>
  <!-- CO data points with error bars (circles, hand-drawn connecting line) -->
  <!-- Pure Cu: FE_CO = 28 +/- 4 -->
  <line x1="140" y1="234" x2="140" y2="246" stroke="#2a5faa" stroke-width="1.2"/>
  <line x1="136" y1="234" x2="144" y2="234" stroke="#2a5faa" stroke-width="1"/>
  <line x1="136" y1="246" x2="144" y2="246" stroke="#2a5faa" stroke-width="1"/>
  <circle cx="140" cy="240" r="4" fill="#2a5faa"/>
  <!-- 9:1: FE_CO = 52 +/- 5 -->
  <line x1="260" y1="168" x2="260" y2="183" stroke="#2a5faa" stroke-width="1.2"/>
  <line x1="256" y1="168" x2="264" y2="168" stroke="#2a5faa" stroke-width="1"/>
  <line x1="256" y1="183" x2="264" y2="183" stroke="#2a5faa" stroke-width="1"/>
  <circle cx="260" cy="174" r="4" fill="#2a5faa"/>
  <!-- 7:3: FE_CO = 71 +/- 3 -->
  <line x1="380" y1="114" x2="380" y2="123" stroke="#2a5faa" stroke-width="1.2"/>
  <line x1="376" y1="114" x2="384" y2="114" stroke="#2a5faa" stroke-width="1"/>
  <line x1="376" y1="123" x2="384" y2="123" stroke="#2a5faa" stroke-width="1"/>
  <circle cx="380" cy="117" r="4" fill="#2a5faa"/>
  <!-- 1:1: FE_CO = 58 +/- 6 -->
  <line x1="500" y1="144" x2="500" y2="162" stroke="#2a5faa" stroke-width="1.2"/>
  <line x1="496" y1="144" x2="504" y2="144" stroke="#2a5faa" stroke-width="1"/>
  <line x1="496" y1="162" x2="504" y2="162" stroke="#2a5faa" stroke-width="1"/>
  <circle cx="500" cy="156" r="4" fill="#2a5faa"/>
  <!-- 3:7: FE_CO = 34 +/- 5 -->
  <line x1="620" y1="219" x2="620" y2="234" stroke="#2a5faa" stroke-width="1.2"/>
  <line x1="616" y1="219" x2="624" y2="219" stroke="#2a5faa" stroke-width="1"/>
  <line x1="616" y1="234" x2="624" y2="234" stroke="#2a5faa" stroke-width="1"/>
  <circle cx="620" cy="228" r="4" fill="#2a5faa"/>
  <!-- Hand-drawn connecting line for CO -->
  <path d="M140,240 Q200,200 260,174 Q320,140 380,117 Q440,130 500,156 Q560,190 620,228" fill="none" stroke="#2a5faa" stroke-width="1.5" stroke-dasharray="none"/>
  <!-- Formate data points (squares, dashed connecting) -->
  <!-- Pure Cu: FE_HCOO = 8 +/- 2 -->
  <rect x="137" y="303" width="6" height="6" fill="#b83220"/>
  <!-- 9:1: FE_HCOO = 18 +/- 3 -->
  <rect x="257" y="273" width="6" height="6" fill="#b83220"/>
  <!-- 7:3: FE_HCOO = 12 +/- 2 -->
  <rect x="377" y="291" width="6" height="6" fill="#b83220"/>
  <!-- 1:1: FE_HCOO = 22 +/- 4 -->
  <rect x="497" y="261" width="6" height="6" fill="#b83220"/>
  <!-- 3:7: FE_HCOO = 38 +/- 5 -->
  <rect x="617" y="213" width="6" height="6" fill="#b83220"/>
  <!-- Dashed line for formate -->
  <path d="M140,306 Q200,290 260,276 Q320,284 380,294 Q440,278 500,264 Q560,238 620,216" fill="none" stroke="#b83220" stroke-width="1.2" stroke-dasharray="6,4"/>
  <!-- Legend -->
  <circle cx="500" cy="52" r="4" fill="#2a5faa"/>
  <text x="510" y="56" font-family="'Caveat','Architects Daughter',cursive" font-size="12" fill="#2a5faa">CO (target product)</text>
  <rect x="497" y="69" width="6" height="6" fill="#b83220"/>
  <text x="510" y="76" font-family="'Caveat','Architects Daughter',cursive" font-size="12" fill="#b83220">Formate (side product)</text>
  <!-- Handwritten annotation -->
  <text x="400" y="100" font-family="'Caveat','Architects Daughter',cursive" font-size="12" font-weight="700" fill="#2c5f2d">Peak at 7:3!</text>
  <path d="M395,103 Q390,112 383,117" fill="none" stroke="#2c5f2d" stroke-width="1"/>
</svg>
<figcaption style="text-align:center;font-size:0.78rem;color:#5a6070;font-family:'IBM Plex Mono',monospace;">Fig. 1. Faradaic efficiency for CO and formate production on Cu-Sn alloy catalysts at -0.9 V vs. RHE in CO2-saturated 0.1 M KHCO3. Error bars represent 1 std. dev. from n=3 replicates.</figcaption>
</figure>

## Raw Data Summary

| Cu:Sn Ratio | FE_CO (%) | FE_HCOO (%) | FE_H2 (%) | FE_Total (%) | j_total (mA/cm2) |
|-------------|-----------|-------------|-----------|--------------|-------------------|
| Pure Cu     | 28.2      | 8.1         | 58.4      | 94.7         | -12.3             |
| 9:1         | 52.1      | 17.8        | 24.6      | 94.5         | -10.8             |
| 7:3         | 71.3      | 12.2        | 13.1      | 96.6         | -9.4              |
| 1:1         | 58.4      | 21.5        | 16.8      | 96.7         | -8.1              |
| 3:7         | 34.1      | 38.2        | 22.4      | 94.7         | -7.2              |

## Current Density vs. Applied Potential

<!-- SVG hand-drawn plot: Tafel-like curve -->
<figure>
<svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" aria-label="Polarization curve for Cu7Sn3 catalyst" style="width:100%;max-width:720px;display:block;margin:1rem auto;">
  <defs>
    <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#d4dde4" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="720" height="340" fill="#faf9f4"/>
  <rect x="80" y="30" width="580" height="260" fill="url(#grid2)"/>
  <!-- Title -->
  <text x="370" y="22" text-anchor="middle" font-family="'Caveat','Architects Daughter',cursive" font-size="15" font-weight="700" fill="#1a1e28">LSV of Cu7Sn3 in CO2-sat. 0.1M KHCO3 (5 mV/s)</text>
  <!-- Y axis -->
  <line x1="80" y1="30" x2="80" y2="290" stroke="#1a1e28" stroke-width="1.5"/>
  <text x="22" y="165" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="10" fill="#1a1e28" transform="rotate(-90,22,165)">j (mA/cm2)</text>
  <!-- Y ticks -->
  <text x="72" y="294" text-anchor="end" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">0</text>
  <text x="72" y="229" text-anchor="end" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">-5</text>
  <text x="72" y="164" text-anchor="end" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">-10</text>
  <text x="72" y="99" text-anchor="end" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">-15</text>
  <text x="72" y="34" text-anchor="end" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">-20</text>
  <!-- X axis -->
  <line x1="80" y1="290" x2="660" y2="290" stroke="#1a1e28" stroke-width="1.5"/>
  <text x="370" y="326" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="10" fill="#1a1e28">E vs. RHE (V)</text>
  <!-- X ticks -->
  <text x="80" y="308" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">-0.4</text>
  <text x="225" y="308" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">-0.6</text>
  <text x="370" y="308" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">-0.8</text>
  <text x="515" y="308" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">-1.0</text>
  <text x="660" y="308" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#5a6070">-1.2</text>
  <!-- CO2-saturated curve (hand-drawn style) -->
  <path d="M80,288 Q120,287 160,285 Q200,282 225,275 Q260,264 300,248 Q340,225 370,200 Q410,170 450,145 Q490,118 515,98 Q550,75 590,58 Q630,44 660,38" fill="none" stroke="#2a5faa" stroke-width="2"/>
  <!-- N2-saturated control (dashed) -->
  <path d="M80,288 Q160,287 225,285 Q300,282 370,276 Q440,268 515,254 Q580,238 660,218" fill="none" stroke="#8a8e98" stroke-width="1.2" stroke-dasharray="6,4"/>
  <!-- Onset potential marker -->
  <line x1="160" y1="280" x2="160" y2="40" stroke="#2c5f2d" stroke-width="0.8" stroke-dasharray="4,3"/>
  <text x="168" y="48" font-family="'Caveat','Architects Daughter',cursive" font-size="11" fill="#2c5f2d">onset ~ -0.5 V</text>
  <!-- Legend -->
  <line x1="440" y1="52" x2="470" y2="52" stroke="#2a5faa" stroke-width="2"/>
  <text x="476" y="56" font-family="'Caveat','Architects Daughter',cursive" font-size="12" fill="#2a5faa">CO2-saturated</text>
  <line x1="440" y1="70" x2="470" y2="70" stroke="#8a8e98" stroke-width="1.2" stroke-dasharray="6,4"/>
  <text x="476" y="74" font-family="'Caveat','Architects Daughter',cursive" font-size="12" fill="#8a8e98">N2-saturated (blank)</text>
</svg>
<figcaption style="text-align:center;font-size:0.78rem;color:#5a6070;font-family:'IBM Plex Mono',monospace;">Fig. 2. Linear sweep voltammetry of Cu7Sn3 electrode in CO2- and N2-saturated 0.1 M KHCO3. Scan rate 5 mV/s. Onset potential for CO2 reduction observed at approximately -0.5 V vs. RHE.</figcaption>
</figure>

## Experiment Log

<div class="observation">
<strong>2026-04-07, 09:15 JST</strong> -- Prepared fresh Cu7Sn3 electrode by co-electrodeposition from CuSO4/SnCl2 bath (50 mM Cu, 21 mM Sn, pH 1.8, -0.5 V vs. Ag/AgCl, 300 s). Film thickness measured by profilometry: 420 +/- 30 nm. XRD confirms Cu5Sn alloy phase with minor Cu peaks.
</div>

<div class="observation note">
<strong>2026-04-08, 14:22 JST</strong> -- GC calibration completed. Response factors: CO (1.00), H2 (1.12), CH4 (0.94). HPLC calibration for formate: LOD = 0.05 mM, linear range 0.1-50 mM. All calibration curves R2 > 0.999.
</div>

<div class="observation anomaly">
<strong>2026-04-10, 16:48 JST</strong> -- Anomaly: Run #3 of Cu7Sn3 at -0.9 V showed sudden current drop from -9.4 to -3.1 mA/cm2 at t = 45 min. Electrode visually unchanged. Post-mortem XPS shows Sn surface enrichment. Possible dealloying. Excluded from mean calculation -- see Entry 4 for details.
</div>

<div class="observation">
<strong>2026-04-12, 10:05 JST</strong> -- Stability test initiated. Cu7Sn3 at -0.9 V vs. RHE, continuous electrolysis. Sampling every 30 min for GC/HPLC. Target: 6 hours. See Entry 5 for time-course data.
</div>
