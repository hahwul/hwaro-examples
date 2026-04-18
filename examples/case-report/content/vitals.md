+++
title = "Vital Signs and Laboratory Data"
description = "Complete vital sign trends and laboratory data throughout the clinical course."
tags = ["paper", "light", "clinical", "case-study", "medical"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Clinical Data &middot; Vital Signs</p>
  <h1 class="paper-title">Vital Signs and Laboratory Monitoring</h1>
</header>

## Serum Sodium Correction Curve

<!-- Na+ correction chart with safe correction zone -->
<figure>
<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" aria-label="Serum sodium correction curve over 72 hours" style="width:100%;max-width:700px;display:block;margin:1rem auto;">
  <text x="350" y="16" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="12" font-weight="700" fill="#1a1e24">SERUM SODIUM CORRECTION (72 HOURS)</text>
  <!-- Axes -->
  <line x1="70" y1="30" x2="70" y2="220" stroke="#1a1e24" stroke-width="1"/>
  <line x1="70" y1="220" x2="660" y2="220" stroke="#1a1e24" stroke-width="1"/>
  <!-- Y axis: Na+ 110-145 mmol/L, mapped: 110=210, 145=35 -->
  <text x="20" y="125" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6270" transform="rotate(-90 20 125)">Na+ (mmol/L)</text>
  <text x="65" y="38" text-anchor="end" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6270">145</text>
  <text x="65" y="88" text-anchor="end" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6270">135</text>
  <text x="65" y="138" text-anchor="end" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6270">125</text>
  <text x="65" y="188" text-anchor="end" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6270">115</text>
  <text x="65" y="215" text-anchor="end" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6270">110</text>
  <!-- Normal Na+ band (135-145) -->
  <rect x="70" y="35" width="590" height="50" fill="#2a7a4a" opacity="0.08"/>
  <text x="664" y="60" font-family="'IBM Plex Sans',sans-serif" font-size="7" fill="#2a7a4a" opacity="0.6">Normal</text>
  <!-- Danger zone (below 120) -->
  <rect x="70" y="175" width="590" height="45" fill="#c44a2a" opacity="0.06"/>
  <text x="664" y="195" font-family="'IBM Plex Sans',sans-serif" font-size="7" fill="#c44a2a" opacity="0.6">Severe</text>
  <!-- Safe correction rate line (max 10 mmol/24h from nadir of 114) -->
  <line x1="150" y1="195" x2="350" y2="145" stroke="#b87a00" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="250" y="160" font-family="'IBM Plex Sans',sans-serif" font-size="7" fill="#b87a00">Max safe rate</text>
  <!-- X axis: hours 0-72 -->
  <text x="100" y="236" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6270">H0</text>
  <text x="180" y="236" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6270">H8</text>
  <text x="260" y="236" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6270">H16</text>
  <text x="350" y="236" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6270">H24</text>
  <text x="445" y="236" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6270">H36</text>
  <text x="540" y="236" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6270">H48</text>
  <text x="630" y="236" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6270">H72</text>
  <!-- Na+ data line -->
  <polyline points="100,55 150,185 180,195 220,190 260,175 310,155 350,138 445,105 540,88 630,55" fill="none" stroke="#1a6b8a" stroke-width="2.5"/>
  <!-- Data points -->
  <circle cx="100" cy="55" r="4" fill="#1a6b8a"/>
  <text x="100" y="49" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" font-weight="600" fill="#1a6b8a">140</text>
  <circle cx="150" cy="185" r="4" fill="#c44a2a"/>
  <text x="150" y="179" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" font-weight="600" fill="#c44a2a">118</text>
  <circle cx="180" cy="195" r="4" fill="#c44a2a"/>
  <text x="180" y="207" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" font-weight="600" fill="#c44a2a">114</text>
  <circle cx="220" cy="190" r="4" fill="#c44a2a"/>
  <text x="220" y="184" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" font-weight="600" fill="#b87a00">116</text>
  <circle cx="260" cy="175" r="4" fill="#b87a00"/>
  <text x="260" y="169" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" font-weight="600" fill="#b87a00">119</text>
  <circle cx="350" cy="138" r="4" fill="#b87a00"/>
  <text x="350" y="132" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" font-weight="600" fill="#b87a00">124</text>
  <circle cx="445" cy="105" r="4" fill="#2a7a4a"/>
  <text x="445" y="99" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" font-weight="600" fill="#1a6b8a">130</text>
  <circle cx="540" cy="88" r="4" fill="#2a7a4a"/>
  <text x="540" y="82" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" font-weight="600" fill="#2a7a4a">133</text>
  <circle cx="630" cy="55" r="4" fill="#2a7a4a"/>
  <text x="630" y="49" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" font-weight="600" fill="#2a7a4a">140</text>
  <!-- Legend -->
  <line x1="90" y1="250" x2="110" y2="250" stroke="#1a6b8a" stroke-width="2.5"/>
  <text x="115" y="253" font-family="'IBM Plex Sans',sans-serif" font-size="9" fill="#1a6b8a">Serum Na+</text>
  <line x1="210" y1="250" x2="230" y2="250" stroke="#b87a00" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="235" y="253" font-family="'IBM Plex Sans',sans-serif" font-size="9" fill="#b87a00">Max safe correction rate</text>
</svg>
<figcaption style="text-align:center;font-size:0.82rem;color:#5a6270;font-style:italic;">Fig. 3. Serum sodium correction curve. Dashed line shows the maximum safe correction rate (10 mmol/L per 24 hours) to avoid osmotic demyelination syndrome.</figcaption>
</figure>

## Complete Laboratory Panel

| Parameter | Reference | H0 | H8 | H10 | H14 | H24 | H48 | H72 | D7 |
|---|---|---|---|---|---|---|---|---|---|
| Na+ (mmol/L) | 135-145 | 140 | 118 | 114 | 119 | 124 | 133 | 140 | 141 |
| K+ (mmol/L) | 3.5-5.0 | 4.2 | 3.1 | 2.8 | 3.6 | 4.0 | 4.1 | 4.1 | 4.3 |
| Cl- (mmol/L) | 96-106 | 102 | 82 | 78 | 84 | 90 | 98 | 102 | 103 |
| Glucose (mg/dL) | 70-100 | 88 | 62 | 58 | 95 | 102 | 92 | 88 | 85 |
| BUN (mg/dL) | 7-20 | 15 | 8 | 6 | 10 | 14 | 16 | 15 | 14 |
| Creatinine (mg/dL) | 0.7-1.3 | 1.0 | 1.4 | 1.6 | 1.3 | 1.1 | 1.0 | 0.9 | 0.9 |
| Osmolality (mOsm/kg) | 275-295 | 285 | 242 | 236 | 248 | 260 | 276 | 288 | 290 |
| CK (U/L) | 22-198 | -- | 1,240 | 2,850 | 4,200 | 3,100 | 1,800 | 680 | 195 |
| Lactate (mmol/L) | 0.5-2.0 | -- | 6.8 | 4.2 | 2.1 | 1.4 | 1.0 | 0.8 | 0.7 |

Values outside reference range are clinically significant and guided management decisions throughout the admission.
