+++
title = "3. Results"
description = "Base-case ICER, probabilistic sensitivity analysis results, and the cost-effectiveness acceptability curve across willingness-to-pay thresholds."
weight = 3
template = "post"
tags = ["paper", "economics", "cost-effectiveness"]
categories = ["sections"]
[extra]
section_number = "3"
+++

## 3.1 Base-case cost-effectiveness

The screening strategy was more costly and more effective than usual care. Incremental costs were $4,310 per person, and incremental QALYs were 0.18 per person, yielding a base-case ICER of $23,944 per QALY gained.

<section class="icer-callout">
  <span class="icer-label">Base-case ICER</span>
  <span class="icer-value">$23,944<span class="unit">per QALY gained</span></span>
  <p class="icer-detail">95 pct PSA credible interval: $14,220 &ndash; $41,880. At the $50,000 per QALY threshold, 92.4 pct of iterations were cost-effective.</p>
</section>

## 3.2 Cost-effectiveness acceptability curve

The probability that the screening strategy is cost-effective increased monotonically with the willingness-to-pay threshold. At $25,000 per QALY, probability of cost-effectiveness was 52.1 pct; at $50,000 per QALY, 92.4 pct; at $100,000 per QALY, 99.1 pct.

<figure class="figure">
  <svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Willingness-to-pay acceptability curve">
    <rect x="60" y="30" width="620" height="280" fill="#fbfaf6"/>
    <!-- gridlines -->
    <g stroke="#d8d4c5" stroke-width="0.5">
      <line x1="60" y1="80" x2="680" y2="80"/>
      <line x1="60" y1="130" x2="680" y2="130"/>
      <line x1="60" y1="180" x2="680" y2="180"/>
      <line x1="60" y1="230" x2="680" y2="230"/>
      <line x1="60" y1="280" x2="680" y2="280"/>
      <line x1="185" y1="30" x2="185" y2="310"/>
      <line x1="310" y1="30" x2="310" y2="310"/>
      <line x1="435" y1="30" x2="435" y2="310"/>
      <line x1="560" y1="30" x2="560" y2="310"/>
    </g>
    <!-- axes -->
    <line x1="60" y1="310" x2="680" y2="310" stroke="#15202d" stroke-width="1"/>
    <line x1="60" y1="30" x2="60" y2="310" stroke="#15202d" stroke-width="1"/>
    <!-- Acceptability curve for screening program -->
    <path d="M60,306 L110,300 L140,290 L165,275 L185,250 L210,220 L230,190 L255,160 L280,130 L310,100 L340,82 L370,68 L400,58 L435,52 L470,48 L510,46 L560,44 L610,43 L680,42" fill="none" stroke="#1a4fa3" stroke-width="2.5"/>
    <!-- Threshold line at $50k -->
    <line x1="310" y1="30" x2="310" y2="310" stroke="#c43a2b" stroke-width="1.4" stroke-dasharray="6 4"/>
    <text x="315" y="48" font-family="IBM Plex Sans" font-weight="700" font-size="10" fill="#c43a2b" letter-spacing="1">&lambda; = $50K</text>
    <!-- Probability annotation at threshold -->
    <circle cx="310" cy="100" r="4" fill="#c43a2b" stroke="#15202d" stroke-width="1"/>
    <text x="320" y="96" font-family="JetBrains Mono" font-size="10" font-weight="700" fill="#15202d">0.924</text>
    <!-- Usual care curve -->
    <path d="M60,42 L110,44 L140,46 L165,50 L185,60 L210,85 L230,115 L255,145 L280,175 L310,205 L340,228 L370,245 L400,258 L435,268 L470,275 L510,280 L560,284 L610,287 L680,288" fill="none" stroke="#147a7a" stroke-width="2" stroke-dasharray="4 3"/>
    <!-- Legend -->
    <g font-family="IBM Plex Sans" font-size="11" fill="#15202d">
      <line x1="500" y1="180" x2="540" y2="180" stroke="#1a4fa3" stroke-width="2.5"/>
      <text x="548" y="184" font-weight="600">Screening program</text>
      <line x1="500" y1="200" x2="540" y2="200" stroke="#147a7a" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="548" y="204" font-weight="600">Usual care</text>
    </g>
    <!-- Axes labels -->
    <text x="370" y="342" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="12" fill="#15202d" letter-spacing="0.5">WILLINGNESS-TO-PAY (&lambda;) per QALY</text>
    <text x="15" y="170" transform="rotate(-90 15 170)" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="12" fill="#15202d" letter-spacing="0.5">P(COST-EFFECTIVE)</text>
    <!-- tick labels -->
    <g font-family="JetBrains Mono" font-size="10" fill="#5b6472">
      <text x="60" y="325" text-anchor="middle">$0</text>
      <text x="185" y="325" text-anchor="middle">$25K</text>
      <text x="310" y="325" text-anchor="middle">$50K</text>
      <text x="435" y="325" text-anchor="middle">$75K</text>
      <text x="560" y="325" text-anchor="middle">$100K</text>
      <text x="680" y="325" text-anchor="middle">$150K</text>
      <text x="55" y="314" text-anchor="end">0.0</text>
      <text x="55" y="234" text-anchor="end">0.25</text>
      <text x="55" y="184" text-anchor="end">0.50</text>
      <text x="55" y="134" text-anchor="end">0.75</text>
      <text x="55" y="54" text-anchor="end">1.0</text>
    </g>
  </svg>
  <figcaption class="caption"><span class="fig-num">Figure 3.</span> Cost-effectiveness acceptability curve. The probability that each strategy is cost-effective is plotted as a function of the decision-maker's willingness-to-pay (&lambda;) per QALY. At &lambda; = $50,000 per QALY (annotated), the screening program has a 0.924 probability of being cost-effective.</figcaption>
</figure>

## 3.3 Subgroup results

Subgroup results by age at first screen are presented in Table 3. Earlier initiation (age 45) produced lower ICERs than later initiation (age 55), reflecting longer follow-up over which incremental effects accrue.

<table class="paper-table">
  <caption><span class="tab-num">Table 3.</span> Subgroup ICERs by age at first screen.</caption>
  <thead>
    <tr>
      <th>Age at first screen</th>
      <th>&Delta; Cost (USD)</th>
      <th>&Delta; QALY</th>
      <th>ICER (USD / QALY)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>45</td><td class="num">$4,310</td><td class="num">0.18</td><td class="num">$23,944</td></tr>
    <tr><td>50</td><td class="num">$4,820</td><td class="num">0.17</td><td class="num">$28,353</td></tr>
    <tr><td>55</td><td class="num">$4,940</td><td class="num">0.14</td><td class="num">$35,286</td></tr>
    <tr><td>60</td><td class="num">$4,710</td><td class="num">0.10</td><td class="num">$47,100</td></tr>
    <tr><td>65</td><td class="num">$4,230</td><td class="num">0.07</td><td class="num">$60,429</td></tr>
  </tbody>
</table>
