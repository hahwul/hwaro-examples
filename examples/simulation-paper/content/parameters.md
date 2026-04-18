+++
title = "Parameter Reference"
description = "Complete parameter table for the SIR-ABM model, with base-case values, ranges, prior distributions, and data sources."
tags = ["paper", "computational", "simulation"]
categories = ["pages"]
+++

## Parameter Table

<table class="paper-table">
  <caption><span class="tab-num">Table P1.</span> Model parameters with base-case values, calibration priors, and sources.</caption>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Symbol</th>
      <th>Base case</th>
      <th>Range</th>
      <th>Prior</th>
      <th>Source</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Transmission probability</td>
      <td class="num">beta</td>
      <td class="num">0.034</td>
      <td class="num">0.01 -- 0.08</td>
      <td>Uniform</td>
      <td>[1]</td>
    </tr>
    <tr>
      <td>Recovery rate</td>
      <td class="num">gamma</td>
      <td class="num">0.10</td>
      <td class="num">0.06 -- 0.14</td>
      <td>Uniform</td>
      <td>[2]</td>
    </tr>
    <tr>
      <td>Household contact weight</td>
      <td class="num">w_h</td>
      <td class="num">1.00</td>
      <td class="num">0.60 -- 1.00</td>
      <td>Beta(5,2)</td>
      <td>[3]</td>
    </tr>
    <tr>
      <td>Workplace contact weight</td>
      <td class="num">w_w</td>
      <td class="num">0.42</td>
      <td class="num">0.10 -- 0.80</td>
      <td>Beta(3,4)</td>
      <td>[3]</td>
    </tr>
    <tr>
      <td>Community contact weight</td>
      <td class="num">w_c</td>
      <td class="num">0.18</td>
      <td class="num">0.05 -- 0.50</td>
      <td>Beta(2,8)</td>
      <td>[3]</td>
    </tr>
    <tr>
      <td>Mean workplace degree</td>
      <td class="num">k_w</td>
      <td class="num">12</td>
      <td class="num">6 -- 24</td>
      <td>DiscreteUnif</td>
      <td>[4]</td>
    </tr>
    <tr>
      <td>Mean community degree</td>
      <td class="num">k_c</td>
      <td class="num">4</td>
      <td class="num">2 -- 10</td>
      <td>DiscreteUnif</td>
      <td>[4]</td>
    </tr>
    <tr>
      <td>Initial seed count</td>
      <td class="num">I_0</td>
      <td class="num">10</td>
      <td class="num">1 -- 50</td>
      <td>LogNormal</td>
      <td>Assumed</td>
    </tr>
    <tr>
      <td>Intervention threshold (pct infected)</td>
      <td class="num">theta</td>
      <td class="num">0.05</td>
      <td class="num">0.01 -- 0.15</td>
      <td>Uniform</td>
      <td>[5]</td>
    </tr>
    <tr>
      <td>Intervention edge removal rate</td>
      <td class="num">rho</td>
      <td class="num">0.40</td>
      <td class="num">0.10 -- 0.80</td>
      <td>Uniform</td>
      <td>[5]</td>
    </tr>
    <tr>
      <td>Age-dependent susceptibility scalar (65+)</td>
      <td class="num">s_65</td>
      <td class="num">1.45</td>
      <td class="num">1.00 -- 2.00</td>
      <td>Normal(1.4,0.2)</td>
      <td>[6]</td>
    </tr>
    <tr>
      <td>Comorbidity susceptibility scalar</td>
      <td class="num">s_cm</td>
      <td class="num">1.30</td>
      <td class="num">1.00 -- 1.80</td>
      <td>Normal(1.3,0.15)</td>
      <td>[6]</td>
    </tr>
    <tr>
      <td>Simulation time horizon (days)</td>
      <td class="num">T_max</td>
      <td class="num">365</td>
      <td class="num">180 -- 730</td>
      <td>Fixed</td>
      <td>Protocol</td>
    </tr>
    <tr>
      <td>Population size</td>
      <td class="num">N</td>
      <td class="num">100,000</td>
      <td class="num">10,000 -- 500,000</td>
      <td>Fixed</td>
      <td>Protocol</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="6">Base-case values are posterior medians from ABC-SMC calibration. All priors are specified over the stated range. Sources: [1] Nakamura 2024; [2] WHO 2023 technical report; [3] Mossong et al. 2008; [4] Barabasi-Albert defaults; [5] Policy review panel; [6] Meta-analysis by Osei-Mensah 2025.</td></tr>
  </tfoot>
</table>

## Calibration Summary

The ABC-SMC procedure ran 8 sequential rounds with 50,000 particles per round. The acceptance threshold decreased from epsilon = 0.20 (round 1) to epsilon = 0.045 (round 8). Convergence was assessed by monitoring the effective sample size (ESS), which stabilised above 2,000 from round 5 onwards.

The posterior distributions are approximately unimodal for all parameters except the community contact weight (w_c), which exhibits mild bimodality reflecting a structural identifiability issue between w_c and k_c. This is addressed in Section 5 (Discussion).
