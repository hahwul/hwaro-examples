+++
title = "Drug Interactions"
description = "Combination interaction profiling of MRX-7721 with ruxolitinib using the Chou-Talalay combination index method."
tags = ["paper", "dose-response", "drug-interaction"]
+++

## Combination Index Analysis

The interaction between MRX-7721 and ruxolitinib was characterized using the Chou-Talalay median-effect principle. Cells were treated with each drug alone and in combination at fixed molar ratios (MRX-7721 : ruxolitinib = 1:5, based on the ratio of their respective EC50 values).

<figure class="figure">
  <svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Combination index diagram showing synergism between MRX-7721 and ruxolitinib">
    <rect x="0" y="0" width="720" height="380" fill="#faf9f5"/>
    <!-- Grid -->
    <g stroke="#ccc8ba" stroke-width="0.5">
      <line x1="100" y1="40" x2="660" y2="40"/>
      <line x1="100" y1="110" x2="660" y2="110"/>
      <line x1="100" y1="180" x2="660" y2="180"/>
      <line x1="100" y1="250" x2="660" y2="250"/>
      <line x1="100" y1="320" x2="660" y2="320"/>
    </g>
    <!-- Axes -->
    <line x1="100" y1="40" x2="100" y2="330" stroke="#1a2337" stroke-width="1.5"/>
    <line x1="100" y1="330" x2="660" y2="330" stroke="#1a2337" stroke-width="1.5"/>
    <!-- Y-axis (CI value) -->
    <g font-family="JetBrains Mono" font-size="10" fill="#5b6272" text-anchor="end">
      <text x="92" y="44">2.0</text>
      <text x="92" y="114">1.5</text>
      <text x="92" y="184">1.0</text>
      <text x="92" y="254">0.5</text>
      <text x="92" y="324">0.0</text>
    </g>
    <!-- X-axis (Fraction affected) -->
    <g font-family="JetBrains Mono" font-size="10" fill="#5b6272" text-anchor="middle">
      <text x="156" y="348">0.1</text>
      <text x="268" y="348">0.3</text>
      <text x="380" y="348">0.5</text>
      <text x="492" y="348">0.7</text>
      <text x="604" y="348">0.9</text>
    </g>
    <!-- Axis labels -->
    <text x="380" y="372" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="11" fill="#1a2337" letter-spacing="0.5">Fraction Affected (fa)</text>
    <text x="40" y="185" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="11" fill="#1a2337" letter-spacing="0.5" transform="rotate(-90,40,185)">Combination Index (CI)</text>
    <!-- CI = 1 reference line (additivity) -->
    <line x1="100" y1="180" x2="660" y2="180" stroke="#1a2337" stroke-width="1" stroke-dasharray="6 4"/>
    <!-- Zone labels -->
    <text x="670" y="100" font-family="IBM Plex Sans" font-size="9" fill="#b8372a" letter-spacing="0.5">ANTAGONISM</text>
    <text x="670" y="200" font-family="IBM Plex Sans" font-size="9" fill="#5b6272" letter-spacing="0.5">ADDITIVITY</text>
    <text x="670" y="280" font-family="IBM Plex Sans" font-size="9" fill="#2a8a5a" letter-spacing="0.5">SYNERGISM</text>
    <!-- CI curve -->
    <polyline points="156,216 212,222 268,232 324,240 380,246 436,252 492,260 548,268 604,278" fill="none" stroke="#2a6894" stroke-width="2.5"/>
    <!-- Data points -->
    <g fill="#2a6894" stroke="#1a2337" stroke-width="0.8">
      <circle cx="156" cy="216" r="5"/>
      <circle cx="268" cy="232" r="5"/>
      <circle cx="380" cy="246" r="5"/>
      <circle cx="492" cy="260" r="5"/>
      <circle cx="604" cy="278" r="5"/>
    </g>
    <!-- EC50 annotation -->
    <circle cx="380" cy="246" r="8" fill="none" stroke="#c44a2b" stroke-width="2"/>
    <line x1="380" y1="246" x2="440" y2="210" stroke="#1a2337" stroke-width="0.8"/>
    <text x="446" y="206" font-family="IBM Plex Sans" font-weight="700" font-size="10" fill="#1a2337">CI at EC50 = 0.61</text>
    <text x="446" y="220" font-family="STIX Two Text" font-style="italic" font-size="10" fill="#2a8a5a">Synergism</text>
  </svg>
  <div class="caption"><span class="fig-num">Figure 4.</span> Combination index (CI) plot for MRX-7721 + ruxolitinib across the effect range. CI values below 1.0 (dashed line) indicate synergism; above 1.0 indicates antagonism. The CI at the EC50 isobole is 0.61, indicating moderate synergism across the clinically relevant effect range.</div>
</figure>

### Interpretation

The combination index values range from 0.72 (at fa = 0.1) to 0.46 (at fa = 0.9), indicating synergism across the entire effect range. The strongest synergism is observed at higher effect levels (fa > 0.7), suggesting that the combination is particularly advantageous when high levels of JAK2 inhibition are required. This finding supports the clinical rationale for combination therapy in patients with inadequate response to ruxolitinib monotherapy.

### Dose Reduction Index

At the EC50 isobole, the dose reduction index (DRI) for MRX-7721 is 2.1 and for ruxolitinib is 1.8. This means that in combination, each drug can be administered at approximately half of its single-agent dose to achieve the same effect, potentially reducing dose-dependent toxicities while maintaining efficacy.
