+++
title = "4. Results"
description = "Descriptive statistics, demographic bar charts, city-level comparisons, and multivariable regression results."
weight = 4
template = "post"
tags = ["paper", "light", "cross-sectional", "snapshot", "population"]
categories = ["sections"]

[extra]
section_number = "4"
+++

## DCS-OA Scores by City

<figure class="figure">
  <svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart showing mean DCS-OA scores by city">
    <rect x="0" y="0" width="720" height="300" fill="#fafaf7"/>
    <text x="360" y="24" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="13" fill="#1a2030">Mean DCS-OA Score by City</text>
    <!-- Axes -->
    <line x1="100" y1="40" x2="100" y2="240" stroke="#1a2030" stroke-width="1.5"/>
    <line x1="100" y1="240" x2="660" y2="240" stroke="#1a2030" stroke-width="1.5"/>
    <!-- Y labels -->
    <g font-family="JetBrains Mono" font-size="9" fill="#5b6272" text-anchor="end">
      <text x="92" y="50">80</text><text x="92" y="100">60</text><text x="92" y="150">40</text><text x="92" y="200">20</text><text x="92" y="240">0</text>
    </g>
    <text x="40" y="145" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="10" fill="#1a2030" transform="rotate(-90,40,145)">DCS-OA Score (0-96)</text>
    <!-- Grid -->
    <g stroke="#ccc8ba" stroke-width="0.5" stroke-dasharray="3 3">
      <line x1="100" y1="50" x2="660" y2="50"/><line x1="100" y1="100" x2="660" y2="100"/>
      <line x1="100" y1="150" x2="660" y2="150"/><line x1="100" y1="200" x2="660" y2="200"/>
    </g>
    <!-- Bars -->
    <rect x="130" y="108" width="60" height="132" fill="#2a5a8a" opacity="0.6"/>
    <text x="160" y="102" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#2a5a8a">52.8</text>
    <rect x="220" y="130" width="60" height="110" fill="#2a5a8a" opacity="0.6"/>
    <text x="250" y="124" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#2a5a8a">44.2</text>
    <rect x="310" y="123" width="60" height="117" fill="#2a5a8a" opacity="0.6"/>
    <text x="340" y="117" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#2a5a8a">46.8</text>
    <rect x="400" y="100" width="60" height="140" fill="#2a5a8a" opacity="0.6"/>
    <text x="430" y="94" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#2a5a8a">56.2</text>
    <rect x="490" y="94" width="60" height="146" fill="#2a5a8a" opacity="0.6"/>
    <text x="520" y="88" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#2a5a8a">58.4</text>
    <rect x="580" y="144" width="60" height="96" fill="#2a5a8a" opacity="0.6"/>
    <text x="610" y="138" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#2a5a8a">38.6</text>
    <!-- City labels -->
    <g font-family="IBM Plex Sans, sans-serif" font-weight="600" font-size="10" fill="#1a2030" text-anchor="middle">
      <text x="160" y="258">Geneva</text><text x="250" y="258">Warsaw</text><text x="340" y="258">Barcelona</text>
      <text x="430" y="258">Amsterdam</text><text x="520" y="258">Helsinki</text><text x="610" y="258">Lisbon</text>
    </g>
    <!-- Overall mean line -->
    <line x1="100" y1="120" x2="660" y2="120" stroke="#7a2a5a" stroke-width="1.5" stroke-dasharray="6 4"/>
    <text x="666" y="116" font-family="JetBrains Mono" font-size="9" fill="#7a2a5a">Mean: 48.2</text>
  </svg>
  <div class="caption"><span class="fig-num">Figure 3.</span> Mean DCS-OA scores by city. Dashed line indicates the overall sample mean (48.2). Helsinki scored highest (58.4) and Lisbon lowest (38.6), a gap of 19.8 points on the 96-point scale. Error bars omitted for clarity; city-level standard deviations range from 20.2 (Helsinki) to 24.8 (Lisbon).</div>
</figure>

## Multivariable Regression

<table class="paper-table">
  <caption><span class="tab-num">Table 3.</span> Multivariable linear regression: predictors of DCS-OA score (N = 4,218).</caption>
  <thead>
    <tr><th>Predictor</th><th>beta</th><th>95 pct CI</th><th>p-value</th></tr>
  </thead>
  <tbody>
    <tr><td>Age (per 5-year increase)</td><td class="num">-1.8</td><td class="num">[-2.4, -1.2]</td><td class="num">&lt; 0.001</td></tr>
    <tr><td>Female (ref: male)</td><td class="num">-3.2</td><td class="num">[-5.4, -1.0]</td><td class="num">0.004</td></tr>
    <tr><td>Education: secondary (ref: primary)</td><td class="num">6.8</td><td class="num">[4.2, 9.4]</td><td class="num">&lt; 0.001</td></tr>
    <tr><td>Education: tertiary (ref: primary)</td><td class="num">12.4</td><td class="num">[9.6, 15.2]</td><td class="num">&lt; 0.001</td></tr>
    <tr><td>Living alone (ref: cohabiting)</td><td class="num">-4.8</td><td class="num">[-7.8, -1.8]</td><td class="num">0.002</td></tr>
    <tr><td>City: Helsinki (ref: Lisbon)</td><td class="num">14.2</td><td class="num">[10.8, 17.6]</td><td class="num">&lt; 0.001</td></tr>
    <tr><td>City: Amsterdam (ref: Lisbon)</td><td class="num">12.8</td><td class="num">[9.4, 16.2]</td><td class="num">&lt; 0.001</td></tr>
    <tr><td>City: Geneva (ref: Lisbon)</td><td class="num">9.4</td><td class="num">[6.0, 12.8]</td><td class="num">&lt; 0.001</td></tr>
    <tr><td>City: Barcelona (ref: Lisbon)</td><td class="num">5.6</td><td class="num">[2.2, 9.0]</td><td class="num">0.001</td></tr>
    <tr><td>City: Warsaw (ref: Lisbon)</td><td class="num">3.8</td><td class="num">[0.4, 7.2]</td><td class="num">0.028</td></tr>
  </tbody>
  <tfoot>
    <tr><td colspan="4">Adjusted R-squared = 0.34. Model also adjusted for self-rated health and number of chronic conditions (not shown). beta = unstandardized regression coefficient. CI = confidence interval.</td></tr>
  </tfoot>
</table>
