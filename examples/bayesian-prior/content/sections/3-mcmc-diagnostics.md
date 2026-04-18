+++
title = "3. MCMC Diagnostics"
weight = 3
template = "post"
description = "Trace plots, R-hat convergence statistics, and effective sample size assessment for all model parameters."
[extra]
section_number = "3"
+++

## Sampling Configuration

Inference was performed using Stan's No-U-Turn Sampler (NUTS), a variant of Hamiltonian Monte Carlo. We ran 4 independent chains, each with 2,000 warmup iterations and 2,000 sampling iterations, yielding 8,000 posterior draws in total.

## Trace Plots

<div class="figure">
  <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
    <text x="350" y="20" text-anchor="middle" font-family="STIX Two Text" font-size="13" font-weight="600" fill="#c8cad0">MCMC Trace Plot: sigma_h (4 chains, 2000 post-warmup iterations each)</text>
    <line x1="60" y1="35" x2="60" y2="200" stroke="#3a3d48" stroke-width="1"/>
    <line x1="60" y1="200" x2="660" y2="200" stroke="#3a3d48" stroke-width="1"/>
    <text x="55" y="50" text-anchor="end" font-family="JetBrains Mono" font-size="8" fill="#5a5d68">0.50</text>
    <text x="55" y="90" text-anchor="end" font-family="JetBrains Mono" font-size="8" fill="#5a5d68">0.40</text>
    <text x="55" y="130" text-anchor="end" font-family="JetBrains Mono" font-size="8" fill="#5a5d68">0.30</text>
    <text x="55" y="170" text-anchor="end" font-family="JetBrains Mono" font-size="8" fill="#5a5d68">0.20</text>
    <text x="60" y="215" font-family="JetBrains Mono" font-size="8" fill="#5a5d68">0</text>
    <text x="210" y="215" font-family="JetBrains Mono" font-size="8" fill="#5a5d68">500</text>
    <text x="360" y="215" font-family="JetBrains Mono" font-size="8" fill="#5a5d68">1000</text>
    <text x="510" y="215" font-family="JetBrains Mono" font-size="8" fill="#5a5d68">1500</text>
    <text x="647" y="215" font-family="JetBrains Mono" font-size="8" fill="#5a5d68">2000</text>
    <text x="360" y="235" text-anchor="middle" font-family="Crimson Pro" font-size="11" fill="#8a8e9a">Iteration (post-warmup)</text>
    <polyline points="60,125 90,118 120,132 150,128 180,122 210,130 240,126 270,120 300,134 330,128 360,124 390,130 420,126 450,122 480,128 510,132 540,126 570,124 600,128 630,130 660,126" fill="none" stroke="#7a9ec2" stroke-width="0.8" opacity="0.7"/>
    <polyline points="60,130 90,122 120,128 150,134 180,126 210,120 240,132 270,128 300,124 330,130 360,126 390,122 420,130 450,128 480,124 510,126 540,132 570,128 600,124 630,126 660,130" fill="none" stroke="#c2a07a" stroke-width="0.8" opacity="0.7"/>
    <polyline points="60,122 90,128 120,126 150,130 180,132 210,124 240,128 270,126 300,130 330,122 360,128 390,126 420,124 450,132 480,126 510,128 540,130 570,126 600,132 630,128 660,124" fill="none" stroke="#8ab87a" stroke-width="0.8" opacity="0.7"/>
    <polyline points="60,128 90,132 120,124 150,126 180,128 210,134 240,124 270,130 300,128 330,126 360,132 390,128 420,128 450,126 480,130 510,124 540,128 570,132 600,126 630,124 660,128" fill="none" stroke="#c28a7a" stroke-width="0.8" opacity="0.7"/>
    <rect x="490" y="36" width="10" height="2" fill="#7a9ec2"/>
    <text x="504" y="40" font-family="JetBrains Mono" font-size="8" fill="#7a9ec2">Chain 1</text>
    <rect x="550" y="36" width="10" height="2" fill="#c2a07a"/>
    <text x="564" y="40" font-family="JetBrains Mono" font-size="8" fill="#c2a07a">Chain 2</text>
    <rect x="610" y="36" width="10" height="2" fill="#8ab87a"/>
    <text x="624" y="40" font-family="JetBrains Mono" font-size="8" fill="#8ab87a">Chain 3</text>
    <rect x="490" y="48" width="10" height="2" fill="#c28a7a"/>
    <text x="504" y="52" font-family="JetBrains Mono" font-size="8" fill="#c28a7a">Chain 4</text>
    <text x="350" y="250" text-anchor="middle" font-family="Crimson Pro" font-size="11" font-style="italic" fill="#5a5d68">All four chains are well-mixed with stationary behavior -- no divergences or trending</text>
  </svg>
  <p class="caption"><span class="fig-num">Figure 4.</span> Trace plot for the hospital-level standard deviation parameter sigma_h. All four chains show excellent mixing with no visible trends, drifts, or multimodality. The chains are overlapping and stationary, consistent with convergence.</p>
</div>

## Convergence Summary

<table class="paper-table">
  <caption><span class="tab-num">Table 2.</span> MCMC convergence diagnostics for selected parameters</caption>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Posterior mean</th>
      <th>95% CrI</th>
      <th>R-hat</th>
      <th>ESS (bulk)</th>
      <th>ESS (tail)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="math-cell">mu</td>
      <td class="num">-3.42</td>
      <td class="num">(-3.58, -3.26)</td>
      <td class="num converged">1.001</td>
      <td class="num">6,842</td>
      <td class="num">5,918</td>
    </tr>
    <tr>
      <td class="math-cell">sigma_h</td>
      <td class="num">0.34</td>
      <td class="num">(0.26, 0.44)</td>
      <td class="num converged">1.003</td>
      <td class="num">3,412</td>
      <td class="num">4,128</td>
    </tr>
    <tr>
      <td class="math-cell">beta[age]</td>
      <td class="num">0.62</td>
      <td class="num">(0.54, 0.70)</td>
      <td class="num converged">1.001</td>
      <td class="num">7,204</td>
      <td class="num">6,542</td>
    </tr>
    <tr>
      <td class="math-cell">beta[ASA]</td>
      <td class="num">0.78</td>
      <td class="num">(0.68, 0.88)</td>
      <td class="num converged">1.001</td>
      <td class="num">6,918</td>
      <td class="num">6,104</td>
    </tr>
    <tr>
      <td class="math-cell">beta[emergency]</td>
      <td class="num">0.55</td>
      <td class="num">(0.42, 0.68)</td>
      <td class="num converged">1.002</td>
      <td class="num">5,628</td>
      <td class="num">5,218</td>
    </tr>
    <tr>
      <td class="math-cell">beta[albumin]</td>
      <td class="num">-0.48</td>
      <td class="num">(-0.58, -0.38)</td>
      <td class="num converged">1.001</td>
      <td class="num">7,012</td>
      <td class="num">6,328</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="6">All R-hat values are below 1.01, and all ESS values exceed 3,000, indicating satisfactory convergence. No divergent transitions were observed across 8,000 post-warmup iterations.</td>
    </tr>
  </tfoot>
</table>
