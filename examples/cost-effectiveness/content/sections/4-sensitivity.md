+++
title = "4. Sensitivity Analysis"
description = "Deterministic (tornado) and probabilistic sensitivity analysis, identifying uptake rate and test sensitivity as dominant drivers of ICER uncertainty."
weight = 4
template = "post"
tags = ["paper", "economics", "cost-effectiveness"]
categories = ["sections"]
[extra]
section_number = "4"
+++

## 4.1 Deterministic one-way sensitivity

Parameters were varied across their 95 pct confidence ranges (see Table 2). The resulting ICER range is plotted as a tornado diagram. Uptake rate and test sensitivity dominate; at low uptake (0.55), the ICER rises to $34,120 per QALY; at high uptake (0.80), it falls to $17,560 per QALY.

<figure class="figure">
  <svg viewBox="0 0 760 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tornado sensitivity diagram">
    <rect x="220" y="20" width="540" height="360" fill="#fbfaf6"/>
    <!-- central line at base case -->
    <line x1="490" y1="20" x2="490" y2="380" stroke="#15202d" stroke-width="1.2"/>
    <text x="490" y="14" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#15202d">$23,944 (base)</text>
    <!-- gridlines -->
    <g stroke="#d8d4c5" stroke-width="0.5">
      <line x1="310" y1="20" x2="310" y2="380"/>
      <line x1="400" y1="20" x2="400" y2="380"/>
      <line x1="580" y1="20" x2="580" y2="380"/>
      <line x1="670" y1="20" x2="670" y2="380"/>
    </g>
    <!-- bars (widest at top = most sensitive) -->
    <g>
      <!-- Uptake rate: -0.80 to +0.55 -->
      <rect x="290" y="40" width="200" height="30" fill="#1a4fa3"/>
      <rect x="490" y="40" width="190" height="30" fill="#c43a2b" opacity="0.85"/>
      <text x="215" y="60" text-anchor="end" font-family="IBM Plex Sans" font-size="11" font-weight="600" fill="#15202d">Uptake rate (0.55 &ndash; 0.80)</text>
      <text x="280" y="60" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#f3f1ea" font-weight="700">$34,120</text>
      <text x="685" y="60" font-family="JetBrains Mono" font-size="9" fill="#f3f1ea" font-weight="700">$17,560</text>
    </g>
    <g>
      <rect x="330" y="85" width="160" height="30" fill="#1a4fa3"/>
      <rect x="490" y="85" width="160" height="30" fill="#c43a2b" opacity="0.85"/>
      <text x="215" y="105" text-anchor="end" font-family="IBM Plex Sans" font-size="11" font-weight="600" fill="#15202d">Test sensitivity (0.78 &ndash; 0.92)</text>
      <text x="320" y="105" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#f3f1ea" font-weight="700">$30,820</text>
      <text x="655" y="105" font-family="JetBrains Mono" font-size="9" fill="#f3f1ea" font-weight="700">$18,440</text>
    </g>
    <g>
      <rect x="370" y="130" width="120" height="30" fill="#1a4fa3"/>
      <rect x="490" y="130" width="130" height="30" fill="#c43a2b" opacity="0.85"/>
      <text x="215" y="150" text-anchor="end" font-family="IBM Plex Sans" font-size="11" font-weight="600" fill="#15202d">Discount rate (0.00 &ndash; 0.05)</text>
      <text x="360" y="150" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#f3f1ea" font-weight="700">$27,710</text>
      <text x="625" y="150" font-family="JetBrains Mono" font-size="9" fill="#f3f1ea" font-weight="700">$20,080</text>
    </g>
    <g>
      <rect x="395" y="175" width="95" height="30" fill="#1a4fa3"/>
      <rect x="490" y="175" width="100" height="30" fill="#c43a2b" opacity="0.85"/>
      <text x="215" y="195" text-anchor="end" font-family="IBM Plex Sans" font-size="11" font-weight="600" fill="#15202d">Late-stage tx cost</text>
      <text x="385" y="195" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#f3f1ea" font-weight="700">$26,220</text>
      <text x="595" y="195" font-family="JetBrains Mono" font-size="9" fill="#f3f1ea" font-weight="700">$21,890</text>
    </g>
    <g>
      <rect x="418" y="220" width="72" height="30" fill="#1a4fa3"/>
      <rect x="490" y="220" width="76" height="30" fill="#c43a2b" opacity="0.85"/>
      <text x="215" y="240" text-anchor="end" font-family="IBM Plex Sans" font-size="11" font-weight="600" fill="#15202d">Test specificity (0.93 &ndash; 0.98)</text>
      <text x="408" y="240" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#f3f1ea" font-weight="700">$25,180</text>
      <text x="572" y="240" font-family="JetBrains Mono" font-size="9" fill="#f3f1ea" font-weight="700">$22,760</text>
    </g>
    <g>
      <rect x="432" y="265" width="58" height="30" fill="#1a4fa3"/>
      <rect x="490" y="265" width="60" height="30" fill="#c43a2b" opacity="0.85"/>
      <text x="215" y="285" text-anchor="end" font-family="IBM Plex Sans" font-size="11" font-weight="600" fill="#15202d">Early-stage utility</text>
      <text x="422" y="285" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#f3f1ea" font-weight="700">$24,820</text>
      <text x="555" y="285" font-family="JetBrains Mono" font-size="9" fill="#f3f1ea" font-weight="700">$23,110</text>
    </g>
    <g>
      <rect x="446" y="310" width="44" height="30" fill="#1a4fa3"/>
      <rect x="490" y="310" width="48" height="30" fill="#c43a2b" opacity="0.85"/>
      <text x="215" y="330" text-anchor="end" font-family="IBM Plex Sans" font-size="11" font-weight="600" fill="#15202d">Test cost ($72 &ndash; $128)</text>
      <text x="436" y="330" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#f3f1ea" font-weight="700">$24,680</text>
      <text x="543" y="330" font-family="JetBrains Mono" font-size="9" fill="#f3f1ea" font-weight="700">$23,210</text>
    </g>
    <!-- axis label -->
    <text x="490" y="395" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="11" fill="#15202d" letter-spacing="0.5">ICER (USD / QALY)</text>
    <!-- Legend -->
    <g font-family="IBM Plex Sans" font-size="10" fill="#15202d" font-weight="600">
      <rect x="240" y="370" width="12" height="10" fill="#1a4fa3"/>
      <text x="257" y="380">Lower bound (raises ICER)</text>
      <rect x="430" y="370" width="12" height="10" fill="#c43a2b" opacity="0.85"/>
      <text x="447" y="380">Upper bound (lowers ICER)</text>
    </g>
  </svg>
  <figcaption class="caption"><span class="fig-num">Figure 4.</span> Tornado diagram showing one-way deterministic sensitivity of the ICER to individual parameter variation across 95 pct ranges from Table 2. Parameters are ordered top-to-bottom by magnitude of ICER change. Uptake rate and test sensitivity dominate.</figcaption>
</figure>

## 4.2 Probabilistic sensitivity analysis

A full probabilistic sensitivity analysis was conducted with 10,000 Monte Carlo iterations. Each parameter was drawn independently from its distribution (Table 2). The scatter plot in Figure 1 presents the PSA results in the cost-effectiveness plane.

At willingness-to-pay thresholds of $20,000, $50,000, and $100,000 per QALY, the probability that the screening program is cost-effective was 0.21, 0.92, and 0.99 respectively.

## 4.3 Scenario analysis

A societal-perspective scenario including productivity losses and out-of-pocket costs produced an ICER of $19,620 per QALY, driven primarily by avoided productivity losses associated with late-stage disease. This confirms that the healthcare-sector base case is conservative.

A scenario with triennial rather than biennial screening produced an ICER of $21,100 per QALY. While this is numerically lower than the base case, it yields fewer late-stage cases averted (21.8 per 1,000 vs. 34.2 per 1,000) and is therefore less favorable from a public-health standpoint despite the improved ICER.
