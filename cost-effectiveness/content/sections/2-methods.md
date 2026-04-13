+++
title = "2. Methods"
description = "Markov microsimulation model structure, parameter sources, cost inputs, utility weights, and analytic framework."
weight = 2
template = "post"
tags = ["paper", "economics", "cost-effectiveness"]
categories = ["sections"]
[extra]
section_number = "2"
+++

## 2.1 Model structure

We developed a six-state Markov microsimulation with a one-year cycle length. States were: *Healthy*, *Early-stage (asymptomatic)*, *Early-stage (diagnosed)*, *Late-stage*, *Post-treatment*, and *Death*. All-cause mortality was incorporated into every non-death state using age-specific life tables.

<figure class="figure">
  <svg viewBox="0 0 820 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Markov state transition diagram with six states">
    <!-- states -->
    <g font-family="IBM Plex Sans" font-weight="700" font-size="12" fill="#15202d" letter-spacing="0.5">
      <g>
        <rect x="30" y="150" width="140" height="70" fill="#fbfaf6" stroke="#15202d" stroke-width="1.5"/>
        <text x="100" y="188" text-anchor="middle">HEALTHY</text>
        <text x="100" y="206" text-anchor="middle" font-weight="400" font-size="10" fill="#5b6472">S1</text>
      </g>
      <g>
        <rect x="230" y="60" width="160" height="70" fill="#fbfaf6" stroke="#15202d" stroke-width="1.5"/>
        <text x="310" y="92" text-anchor="middle">EARLY-STAGE</text>
        <text x="310" y="108" text-anchor="middle" font-weight="400" font-size="10" fill="#5b6472">(asymptomatic) &middot; S2</text>
      </g>
      <g>
        <rect x="230" y="240" width="160" height="70" fill="#fbfaf6" stroke="#15202d" stroke-width="1.5"/>
        <text x="310" y="272" text-anchor="middle">EARLY-STAGE</text>
        <text x="310" y="288" text-anchor="middle" font-weight="400" font-size="10" fill="#5b6472">(diagnosed) &middot; S3</text>
      </g>
      <g>
        <rect x="450" y="60" width="160" height="70" fill="#fbfaf6" stroke="#15202d" stroke-width="1.5"/>
        <text x="530" y="92" text-anchor="middle">LATE-STAGE</text>
        <text x="530" y="108" text-anchor="middle" font-weight="400" font-size="10" fill="#5b6472">S4</text>
      </g>
      <g>
        <rect x="450" y="240" width="160" height="70" fill="#fbfaf6" stroke="#15202d" stroke-width="1.5"/>
        <text x="530" y="272" text-anchor="middle">POST-TREATMENT</text>
        <text x="530" y="288" text-anchor="middle" font-weight="400" font-size="10" fill="#5b6472">S5</text>
      </g>
      <g>
        <rect x="670" y="150" width="140" height="70" fill="#f3f1ea" stroke="#15202d" stroke-width="2"/>
        <text x="740" y="188" text-anchor="middle">DEATH</text>
        <text x="740" y="206" text-anchor="middle" font-weight="400" font-size="10" fill="#5b6472">S6 (absorbing)</text>
      </g>
    </g>
    <!-- transitions -->
    <g fill="none" stroke="#1a4fa3" stroke-width="1.3">
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#1a4fa3"/>
        </marker>
      </defs>
      <path d="M170,170 C200,130 220,110 230,95" marker-end="url(#arr)"/>
      <path d="M390,95 L450,95" marker-end="url(#arr)"/>
      <path d="M310,130 C310,160 310,200 310,240" marker-end="url(#arr)"/>
      <path d="M390,275 L450,275" marker-end="url(#arr)"/>
      <path d="M530,130 C530,180 530,220 530,240" marker-end="url(#arr)"/>
      <path d="M170,190 C360,380 560,380 670,195" marker-end="url(#arr)"/>
      <path d="M610,95 C640,130 650,150 670,170" marker-end="url(#arr)"/>
      <path d="M610,275 C640,240 650,220 670,200" marker-end="url(#arr)"/>
    </g>
    <!-- self-loops -->
    <g fill="none" stroke="#8a92a0" stroke-width="1" stroke-dasharray="3 2">
      <path d="M100,150 C70,100 140,100 120,150" marker-end="url(#arr)"/>
      <path d="M310,60 C290,20 330,20 320,60" marker-end="url(#arr)"/>
      <path d="M530,60 C510,20 550,20 540,60" marker-end="url(#arr)"/>
      <path d="M310,310 C290,350 330,350 320,310" marker-end="url(#arr)"/>
      <path d="M530,310 C510,350 550,350 540,310" marker-end="url(#arr)"/>
    </g>
    <!-- transition labels -->
    <g font-family="JetBrains Mono" font-size="9" fill="#c43a2b" font-weight="700" letter-spacing="0.3">
      <text x="198" y="110">p_inc</text>
      <text x="410" y="88">p_prog</text>
      <text x="318" y="200">p_detect</text>
      <text x="410" y="268">p_treat</text>
      <text x="540" y="200">p_relapse</text>
      <text x="650" y="133">p_mort_late</text>
      <text x="640" y="253">p_mort_post</text>
    </g>
  </svg>
  <figcaption class="caption"><span class="fig-num">Figure 2.</span> Markov state-transition diagram. Solid arrows represent between-state transitions; dashed self-loops represent probability of remaining in the same state for the current cycle. The Death state is absorbing. Transition probabilities p_inc, p_prog, p_detect, and p_treat are derived from observational cohort data (see Table 2).</figcaption>
</figure>

## 2.2 Parameter inputs

<table class="paper-table">
  <caption><span class="tab-num">Table 2.</span> Key input parameters with distributions used in probabilistic sensitivity analysis.</caption>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Base case</th>
      <th>95 pct range</th>
      <th>Distribution</th>
      <th>Source</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Annual incidence, healthy</td><td class="num">0.0084</td><td class="num">0.0058 &ndash; 0.0116</td><td>Beta</td><td>Registry [4]</td></tr>
    <tr><td>Progression to late-stage</td><td class="num">0.087</td><td class="num">0.062 &ndash; 0.118</td><td>Beta</td><td>Cohort [5]</td></tr>
    <tr><td>Test sensitivity</td><td class="num">0.86</td><td class="num">0.78 &ndash; 0.92</td><td>Beta</td><td>Meta-analysis [6]</td></tr>
    <tr><td>Test specificity</td><td class="num">0.96</td><td class="num">0.93 &ndash; 0.98</td><td>Beta</td><td>Meta-analysis [6]</td></tr>
    <tr><td>Biennial uptake</td><td class="num">0.68</td><td class="num">0.55 &ndash; 0.80</td><td>Beta</td><td>Program [7]</td></tr>
    <tr><td>Test cost, per screen</td><td class="num">$95</td><td class="num">$72 &ndash; $128</td><td>Gamma</td><td>Claims [8]</td></tr>
    <tr><td>Treatment cost, early stage</td><td class="num">$18,200</td><td class="num">$13,400 &ndash; $25,100</td><td>Gamma</td><td>Claims [8]</td></tr>
    <tr><td>Treatment cost, late stage</td><td class="num">$62,400</td><td class="num">$48,800 &ndash; $78,900</td><td>Gamma</td><td>Claims [8]</td></tr>
    <tr><td>Utility, early-stage diagnosed</td><td class="num">0.86</td><td class="num">0.79 &ndash; 0.92</td><td>Beta</td><td>Survey [9]</td></tr>
    <tr><td>Utility, late-stage</td><td class="num">0.62</td><td class="num">0.50 &ndash; 0.74</td><td>Beta</td><td>Survey [9]</td></tr>
    <tr><td>Discount rate</td><td class="num">0.03</td><td class="num">0.00 &ndash; 0.05</td><td>Uniform</td><td>Guideline [10]</td></tr>
  </tbody>
</table>

## 2.3 Analytic framework

All outcomes are discounted at 3.0 pct annually. Costs are reported in 2025 US dollars. The analysis was conducted from a healthcare-sector perspective; productivity losses and out-of-pocket costs were excluded but are considered in a scenario analysis (Section 4).

The primary decision rule is ICER &lt; $50,000 per QALY. We also report the cost-effectiveness acceptability frontier across willingness-to-pay values from $0 to $150,000 per QALY.
