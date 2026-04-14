+++
title = "Resilience Assessment"
description = "Damage state probabilities, restoration modeling, and network-level connectivity analysis results."
weight = 4
template = "post"
[extra]
section_number = "4"
+++

## 4.1 Damage State Probabilities

Under the CSZ Mw 9.0 full-rupture scenario (S6-CSZ-F), the inventory damage distribution is: 37 pct None/Slight, 39 pct Moderate, 18 pct Extensive, 6 pct Complete. The spatial distribution of damage is not uniform; bridges in the coastal zone and Willamette Valley alluvial deposits experience systematically higher damage due to site amplification and liquefaction effects.

## 4.2 Restoration Modeling

Restoration timelines were estimated using the NIRL Bridge Repair Model (BRM v3.2), which accounts for: damage state-dependent repair activities, resource mobilization delays, construction sequencing constraints, and workforce availability. Two scenarios were modeled:

- **Baseline**: Normal resource mobilization with current contractor capacity. Median corridor restoration to 75 pct connectivity: 180 days.
- **Accelerated**: Federal emergency declaration enabling rapid resource deployment. Median corridor restoration to 75 pct connectivity: 90 days.

## 4.3 Network Connectivity Analysis

Network connectivity was assessed using a graph-theoretic model of the Pacific Northwest highway network with 142 bridge nodes and 318 road-segment edges. The connectivity index measures the fraction of origin-destination pairs (drawn from the 20 largest population centers in the corridor) that remain connected through the highway network.

<figure class="figure">
  <svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Network connectivity recovery curve showing baseline and accelerated repair scenarios">
    <rect x="0" y="0" width="720" height="300" fill="#f8f7f3"/>
    <!-- Grid -->
    <g stroke="#c8c4b8" stroke-width="0.5">
      <line x1="80" y1="30" x2="680" y2="30"/>
      <line x1="80" y1="84" x2="680" y2="84"/>
      <line x1="80" y1="138" x2="680" y2="138"/>
      <line x1="80" y1="192" x2="680" y2="192"/>
      <line x1="80" y1="246" x2="680" y2="246"/>
    </g>
    <!-- Axes -->
    <line x1="80" y1="30" x2="80" y2="250" stroke="#1a2337" stroke-width="1.5"/>
    <line x1="80" y1="250" x2="680" y2="250" stroke="#1a2337" stroke-width="1.5"/>
    <!-- Y-axis labels -->
    <text x="72" y="34" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#5b6272">1.0</text>
    <text x="72" y="88" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#5b6272">0.8</text>
    <text x="72" y="142" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#5b6272">0.6</text>
    <text x="72" y="196" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#5b6272">0.4</text>
    <text x="72" y="250" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#5b6272">0.2</text>
    <!-- X-axis labels -->
    <text x="80" y="270" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#5b6272">0</text>
    <text x="200" y="270" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#5b6272">90</text>
    <text x="320" y="270" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#5b6272">180</text>
    <text x="440" y="270" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#5b6272">360</text>
    <text x="560" y="270" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#5b6272">540</text>
    <text x="680" y="270" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#5b6272">720</text>
    <!-- Axis titles -->
    <text x="380" y="292" text-anchor="middle" font-family="Source Sans 3" font-weight="700" font-size="11" fill="#1a2337" letter-spacing="1">DAYS POST-EVENT</text>
    <text x="28" y="140" text-anchor="middle" font-family="Source Sans 3" font-weight="700" font-size="11" fill="#1a2337" letter-spacing="1" transform="rotate(-90,28,140)">CONNECTIVITY INDEX</text>
    <!-- Pre-event level -->
    <line x1="80" y1="30" x2="100" y2="30" stroke="#1a2337" stroke-width="1.5"/>
    <!-- Drop to 0.38 -->
    <line x1="100" y1="30" x2="100" y2="186" stroke="#1a2337" stroke-width="1.5" stroke-dasharray="4 3"/>
    <!-- Baseline recovery curve -->
    <polyline points="100,186 140,178 180,166 220,148 260,134 300,118 340,104 380,92 420,78 460,68 500,56 540,48 580,42 620,36 660,33 680,31" fill="none" stroke="#1a2337" stroke-width="2"/>
    <!-- Accelerated recovery curve -->
    <polyline points="100,186 140,164 180,138 220,108 260,86 300,68 340,54 380,44 420,38 460,34 500,32 540,31 580,30 620,30 660,30 680,30" fill="none" stroke="#2a6b3f" stroke-width="2"/>
    <!-- 0.75 threshold line -->
    <line x1="80" y1="84" x2="680" y2="84" stroke="#b8372a" stroke-width="1" stroke-dasharray="6 4"/>
    <text x="685" y="88" font-family="Source Sans 3" font-weight="700" font-size="9" fill="#b8372a">0.75 target</text>
    <!-- 0.38 annotation -->
    <circle cx="100" cy="186" r="4" fill="#b8372a" stroke="#1a2337" stroke-width="1"/>
    <text x="114" y="190" font-family="JetBrains Mono" font-size="9" fill="#b8372a">CI = 0.38</text>
    <!-- Legend -->
    <line x1="200" y1="16" x2="230" y2="16" stroke="#1a2337" stroke-width="2"/>
    <text x="236" y="20" font-family="Source Sans 3" font-size="9" fill="#5b6272">Baseline repair</text>
    <line x1="340" y1="16" x2="370" y2="16" stroke="#2a6b3f" stroke-width="2"/>
    <text x="376" y="20" font-family="Source Sans 3" font-size="9" fill="#5b6272">Accelerated repair</text>
  </svg>
  <div class="caption"><span class="fig-num">Figure 3.</span> Network connectivity recovery curves for the CSZ Mw 9.0 scenario. The connectivity index drops to 0.38 immediately post-event. Under baseline repair assumptions (black), the 0.75 target is reached at approximately 180 days; under accelerated repair (green), at approximately 90 days.</div>
</figure>

## 4.4 Bottleneck Identification

The 12 bottleneck bridges were identified through sequential bridge-removal analysis. Removing any one of these 12 bridges from the post-event network reduces the connectivity index by at least 0.05 -- more than four times the average per-bridge impact. These bridges are concentrated at major river crossings on Interstate 5 and Interstate 84 where no alternative crossing exists within 50 km.
