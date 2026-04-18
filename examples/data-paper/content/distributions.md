+++
title = "Data Distributions"
description = "Visualizations of data distributions including temperature histograms and variable summary statistics."
tags = ["paper", "light", "dataset", "schema", "minimal-text"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Data Quality &middot; Distributions</p>
  <h1 class="paper-title">Data Distribution Analysis</h1>
</header>

## Temperature Distribution (All Cities)

<!-- Histogram SVG -->
<figure>
<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" aria-label="Temperature distribution histogram across all cities" style="width:100%;max-width:720px;display:block;margin:1rem auto;">
  <text x="360" y="18" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="12" font-weight="700" fill="#1a1c22">TEMPERATURE DISTRIBUTION (ALL CITIES, N = 2.8B)</text>
  <!-- Axes -->
  <line x1="60" y1="30" x2="60" y2="210" stroke="#1a1c22" stroke-width="1"/>
  <line x1="60" y1="210" x2="700" y2="210" stroke="#1a1c22" stroke-width="1"/>
  <!-- Y axis label -->
  <text x="15" y="120" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="9" fill="#5a6070" transform="rotate(-90 15 120)">Frequency (millions)</text>
  <!-- Y axis ticks -->
  <text x="55" y="214" text-anchor="end" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6070">0</text>
  <text x="55" y="174" text-anchor="end" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6070">100M</text>
  <text x="55" y="134" text-anchor="end" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6070">200M</text>
  <text x="55" y="94" text-anchor="end" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6070">300M</text>
  <text x="55" y="54" text-anchor="end" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6070">400M</text>
  <!-- Grid -->
  <line x1="60" y1="170" x2="700" y2="170" stroke="#e2e5ea" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="60" y1="130" x2="700" y2="130" stroke="#e2e5ea" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="60" y1="90" x2="700" y2="90" stroke="#e2e5ea" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="60" y1="50" x2="700" y2="50" stroke="#e2e5ea" stroke-width="0.5" stroke-dasharray="3,3"/>
  <!-- Histogram bars (temperature bins from -10 to 45C in 5C increments) -->
  <!-- -10 to -5: 18M -->
  <rect x="72" y="203" width="48" height="7" fill="#0a5e8a" opacity="0.8"/>
  <!-- -5 to 0: 62M -->
  <rect x="125" y="185" width="48" height="25" fill="#0a5e8a" opacity="0.8"/>
  <!-- 0 to 5: 142M -->
  <rect x="178" y="153" width="48" height="57" fill="#0a5e8a" opacity="0.8"/>
  <!-- 5 to 10: 248M -->
  <rect x="231" y="111" width="48" height="99" fill="#0a5e8a" opacity="0.8"/>
  <!-- 10 to 15: 362M -->
  <rect x="284" y="65" width="48" height="145" fill="#0a5e8a" opacity="0.8"/>
  <!-- 15 to 20: 410M (peak) -->
  <rect x="337" y="46" width="48" height="164" fill="#0a5e8a" opacity="0.9"/>
  <!-- 20 to 25: 488M (highest) -->
  <rect x="390" y="15" width="48" height="195" fill="#0a5e8a"/>
  <!-- 25 to 30: 445M -->
  <rect x="443" y="32" width="48" height="178" fill="#0a5e8a" opacity="0.9"/>
  <!-- 30 to 35: 382M -->
  <rect x="496" y="57" width="48" height="153" fill="#0a5e8a" opacity="0.8"/>
  <!-- 35 to 40: 198M -->
  <rect x="549" y="131" width="48" height="79" fill="#0a5e8a" opacity="0.8"/>
  <!-- 40 to 45: 93M -->
  <rect x="602" y="173" width="48" height="37" fill="#0a5e8a" opacity="0.8"/>
  <!-- X axis labels -->
  <text x="96" y="226" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6070">-10</text>
  <text x="149" y="226" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6070">-5</text>
  <text x="202" y="226" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6070">0</text>
  <text x="255" y="226" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6070">5</text>
  <text x="308" y="226" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6070">10</text>
  <text x="361" y="226" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6070">15</text>
  <text x="414" y="226" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6070">20</text>
  <text x="467" y="226" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6070">25</text>
  <text x="520" y="226" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6070">30</text>
  <text x="573" y="226" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6070">35</text>
  <text x="626" y="226" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="8" fill="#5a6070">40</text>
  <text x="380" y="248" text-anchor="middle" font-family="'IBM Plex Sans',sans-serif" font-size="9" fill="#1a1c22">Temperature (C)</text>
</svg>
<figcaption style="text-align:center;font-size:0.82rem;color:#5a6070;font-style:italic;">Fig. 2. Distribution of temperature readings across all cities. Bin width = 5C. Mode at 20-25C reflecting tropical and subtropical cities.</figcaption>
</figure>

## Variable Summary Statistics

| Variable | Unit | Min | P5 | P25 | Median | P75 | P95 | Max | Missing (%) |
|---|---|---|---|---|---|---|---|---|---|
| `temp_c` | C | -18.4 | -2.1 | 12.8 | 22.4 | 30.1 | 38.2 | 52.1 | 0.12 |
| `humidity_pct` | % | 0.0 | 18.2 | 42.6 | 62.8 | 80.4 | 95.1 | 100.0 | 0.15 |
| `wind_speed_ms` | m/s | 0.0 | 0.2 | 0.8 | 1.6 | 3.2 | 7.8 | 34.2 | 0.31 |
| `solar_wm2` | W/m2 | 0.0 | 0.0 | 0.0 | 142.0 | 580.0 | 920.0 | 1,248.0 | 0.18 |
| `pm25_ugm3` | ug/m3 | 0.0 | 2.1 | 8.4 | 18.6 | 42.8 | 112.4 | 892.0 | 2.84 |

## Completeness by Year

| Year | Expected Readings | Actual Readings | Completeness (%) |
|---|---|---|---|
| 2019 | 284,256,000 | 271,842,518 | 95.6 |
| 2020 | 312,681,600 | 298,124,832 | 95.3 |
| 2021 | 398,448,000 | 384,682,104 | 96.5 |
| 2022 | 468,921,600 | 456,318,240 | 97.3 |
| 2023 | 524,736,000 | 514,128,960 | 98.0 |
| 2024 | 572,409,600 | 562,891,200 | 98.3 |
| 2025 | 398,448,000 | 359,304,250 | 90.2 |

The lower completeness in 2019-2020 reflects the phased sensor deployment across cities. The 2025 drop (90.2%) is due to the ongoing Lagos and Nairobi deployments, which experienced intermittent connectivity issues.
