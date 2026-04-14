+++
title = "4. Sensitivity Analysis"
description = "Sobol variance decomposition and tornado diagrams quantifying the contribution of each parameter to uncertainty in the SIR-ABM model outputs."
weight = 4
template = "post"
tags = ["paper", "computational", "simulation"]
categories = ["sections"]
[extra]
section_number = "4"
+++

## 4.1 Sobol decomposition

A Sobol variance-based sensitivity analysis was conducted using a Saltelli sampling design with 16,384 base samples, yielding a total of 16,384 x (2 x 14 + 2) = 491,520 model evaluations. First-order (S1) and total-order (ST) sensitivity indices were computed for the final attack rate as the primary outcome.

<table class="paper-table">
  <caption><span class="tab-num">Table 4.</span> Sobol sensitivity indices for final attack rate. Top 7 parameters shown.</caption>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>S1 (first-order)</th>
      <th>ST (total-order)</th>
      <th>S1 rank</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>beta</code> (transmission prob.)</td>
      <td class="num">0.284</td>
      <td class="num">0.362</td>
      <td class="num">1</td>
    </tr>
    <tr>
      <td><code>k_w</code> (workplace degree)</td>
      <td class="num">0.198</td>
      <td class="num">0.274</td>
      <td class="num">2</td>
    </tr>
    <tr>
      <td><code>w_h</code> (household weight)</td>
      <td class="num">0.142</td>
      <td class="num">0.198</td>
      <td class="num">3</td>
    </tr>
    <tr>
      <td><code>theta</code> (intervention threshold)</td>
      <td class="num">0.118</td>
      <td class="num">0.176</td>
      <td class="num">4</td>
    </tr>
    <tr>
      <td><code>rho</code> (edge removal rate)</td>
      <td class="num">0.086</td>
      <td class="num">0.138</td>
      <td class="num">5</td>
    </tr>
    <tr>
      <td><code>gamma</code> (recovery rate)</td>
      <td class="num">0.062</td>
      <td class="num">0.094</td>
      <td class="num">6</td>
    </tr>
    <tr>
      <td><code>w_w</code> (workplace weight)</td>
      <td class="num">0.048</td>
      <td class="num">0.082</td>
      <td class="num">7</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="4">Sum of S1 = 0.938 (remainder from 7 minor parameters). Difference between ST and S1 indicates interaction effects.</td></tr>
  </tfoot>
</table>

## 4.2 Tornado diagram

<figure class="figure">
  <svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tornado diagram showing sensitivity of final attack rate to individual parameter perturbations">
    <!-- Title -->
    <text x="360" y="20" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="12" fill="#e2e8f0" letter-spacing="1">DETERMINISTIC SENSITIVITY: FINAL ATTACK RATE</text>
    <!-- Centre line (base case = 0.42) -->
    <line x1="360" y1="35" x2="360" y2="355" stroke="#5ba3c9" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="360" y="370" text-anchor="middle" font-family="IBM Plex Mono" font-size="10" fill="#5ba3c9">BASE CASE = 0.42</text>
    <!-- Parameter labels -->
    <g font-family="IBM Plex Mono" font-weight="700" font-size="10" fill="#e2e8f0" text-anchor="end">
      <text x="140" y="64">beta</text>
      <text x="140" y="107">k_w</text>
      <text x="140" y="150">w_h</text>
      <text x="140" y="193">theta</text>
      <text x="140" y="236">rho</text>
      <text x="140" y="279">gamma</text>
      <text x="140" y="322">w_w</text>
    </g>
    <!-- Low-end bars (left of centre = lower attack rate) -->
    <g fill="#3dbfa8">
      <rect x="190" y="48" width="170" height="24" rx="1"/>
      <rect x="218" y="91" width="142" height="24" rx="1"/>
      <rect x="248" y="134" width="112" height="24" rx="1"/>
      <rect x="262" y="177" width="98" height="24" rx="1"/>
      <rect x="284" y="220" width="76" height="24" rx="1"/>
      <rect x="304" y="263" width="56" height="24" rx="1"/>
      <rect x="316" y="306" width="44" height="24" rx="1"/>
    </g>
    <!-- High-end bars (right of centre = higher attack rate) -->
    <g fill="#d15b5b">
      <rect x="360" y="48" width="180" height="24" rx="1"/>
      <rect x="360" y="91" width="148" height="24" rx="1"/>
      <rect x="360" y="134" width="118" height="24" rx="1"/>
      <rect x="360" y="177" width="104" height="24" rx="1"/>
      <rect x="360" y="220" width="82" height="24" rx="1"/>
      <rect x="360" y="263" width="60" height="24" rx="1"/>
      <rect x="360" y="306" width="48" height="24" rx="1"/>
    </g>
    <!-- Low-end value labels -->
    <g font-family="IBM Plex Mono" font-size="9" fill="#e2e8f0" text-anchor="end">
      <text x="186" y="64">0.18</text>
      <text x="214" y="107">0.22</text>
      <text x="244" y="150">0.26</text>
      <text x="258" y="193">0.28</text>
      <text x="280" y="236">0.31</text>
      <text x="300" y="279">0.34</text>
      <text x="312" y="322">0.36</text>
    </g>
    <!-- High-end value labels -->
    <g font-family="IBM Plex Mono" font-size="9" fill="#e2e8f0">
      <text x="544" y="64">0.72</text>
      <text x="512" y="107">0.64</text>
      <text x="482" y="150">0.58</text>
      <text x="468" y="193">0.55</text>
      <text x="446" y="236">0.52</text>
      <text x="424" y="279">0.49</text>
      <text x="412" y="322">0.47</text>
    </g>
    <!-- Legend -->
    <rect x="560" y="345" width="12" height="12" fill="#3dbfa8"/>
    <text x="576" y="356" font-family="Inter" font-size="10" fill="#8b95a5">Low bound</text>
    <rect x="640" y="345" width="12" height="12" fill="#d15b5b"/>
    <text x="656" y="356" font-family="Inter" font-size="10" fill="#8b95a5">High bound</text>
  </svg>
  <figcaption class="caption"><span class="fig-num">Figure 3.</span> Tornado diagram for final attack rate. Each bar shows the range of the output when the named parameter is varied from its low to high bound (Table P1) while all other parameters are held at base case. Transmission probability (beta) and workplace degree (k_w) are the dominant drivers.</figcaption>
</figure>

## 4.3 Interaction effects

The gap between total-order and first-order indices indicates the presence of interaction effects. The largest interaction is between beta and k_w (joint interaction contributing approximately 7.8 pct of total variance), consistent with the mechanistic expectation that transmission probability and contact frequency are multiplicatively linked in determining the force of infection.

## 4.4 Scenario analyses

Three supplementary scenario analyses were conducted:

1. **No intervention** -- removing the intervention module entirely increases the base-case attack rate from 0.42 to 0.71 (69 pct relative increase)
2. **Early intervention** (theta = 0.02) -- reduces the attack rate to 0.28 (33 pct relative decrease)
3. **Aggressive intervention** (rho = 0.70) -- reduces the attack rate to 0.31 (26 pct relative decrease from base case)

These results suggest that intervention timing (theta) has a larger impact than intervention intensity (rho) in this model configuration.
