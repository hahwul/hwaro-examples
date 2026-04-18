+++
title = "Abstract"
description = "An agent-based model for epidemic dynamics with heterogeneous contact networks, calibrated via approximate Bayesian computation and validated against empirical outbreak data."
tags = ["paper", "dark", "computational", "simulation", "model"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Original Research &middot; Open Access</p>
  <h1 class="paper-title">SIR-ABM: An Agent-Based Epidemic Simulation with Heterogeneous Contact Networks and Adaptive Intervention Policies</h1>
  <p class="paper-authors">
    <span class="author-corresponding">Kenji Nakamura</span><sup>1</sup>,
    Francis Osei-Mensah<sup>2</sup>,
    Elsa Lindqvist<sup>1,3</sup>,
    Amara Diallo<sup>2</sup>,
    Henrik Voss<sup>4</sup>
  </p>
  <p class="paper-affiliations">
    <sup>1</sup>Computational Epidemiology Lab, Kuroda Institute of Technology &middot;
    <sup>2</sup>Centre for Complex Systems, Accra University &middot;
    <sup>3</sup>Department of Applied Mathematics, Uppsala University &middot;
    <sup>4</sup>Digital Health Group, ETH Bern
  </p>
  <p class="paper-doi"><strong>DOI:</strong> <a href="#">10.48127/cml.2026.18.07.412</a> &middot; <strong>Received:</strong> 03 Mar 2026 &middot; <strong>Accepted:</strong> 18 Aug 2026</p>
</header>

<section class="abstract-box">
  <h2>Abstract</h2>
  <dl>
    <dt>Objective</dt>
    <dd>To develop, calibrate, and validate an agent-based SIR model (SIR-ABM) that simulates epidemic spread across heterogeneous contact networks with adaptive intervention policies.</dd>
    <dt>Methods</dt>
    <dd>The model comprises five modules: population generator, contact network constructor, disease transmission engine, intervention policy module, and output aggregator. Parameters were calibrated via approximate Bayesian computation (ABC-SMC) against three empirical outbreak datasets. Sensitivity analysis used a Sobol decomposition across 14 free parameters.</dd>
    <dt>Results</dt>
    <dd>The calibrated model reproduced empirical epidemic curves within a 4.2 pct mean absolute percentage error. Peak timing error was 2.1 days (95 pct CI: 0.8 to 3.6). Contact network heterogeneity explained 38 pct of variance in final attack rate; transmission probability and intervention timing explained an additional 29 pct and 18 pct, respectively.</dd>
    <dt>Conclusion</dt>
    <dd>SIR-ABM provides a modular, extensible platform for scenario analysis of epidemic interventions. The architecture separates concerns cleanly, enabling independent validation of each module.</dd>
    <dt>Keywords</dt>
    <dd><em>agent-based model; epidemic simulation; SIR dynamics; contact network; approximate Bayesian computation; sensitivity analysis</em></dd>
  </dl>
</section>

## Model Architecture Overview

<figure class="figure">
  <svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Block diagram showing five modules of the SIR-ABM architecture connected by data flow arrows">
    <!-- Module 1: Population Generator -->
    <rect x="20" y="30" width="130" height="60" fill="none" stroke="#5ba3c9" stroke-width="2"/>
    <text x="85" y="55" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="10" fill="#e2e8f0" letter-spacing="0.5">POPULATION</text>
    <text x="85" y="70" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="10" fill="#e2e8f0" letter-spacing="0.5">GENERATOR</text>
    <text x="85" y="108" text-anchor="middle" font-family="Inter" font-size="9" fill="#8b95a5">N agents, age,</text>
    <text x="85" y="120" text-anchor="middle" font-family="Inter" font-size="9" fill="#8b95a5">comorbidity flags</text>
    <!-- Module 2: Network Constructor -->
    <rect x="190" y="30" width="130" height="60" fill="none" stroke="#5ba3c9" stroke-width="2"/>
    <text x="255" y="55" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="10" fill="#e2e8f0" letter-spacing="0.5">CONTACT NETWORK</text>
    <text x="255" y="70" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="10" fill="#e2e8f0" letter-spacing="0.5">CONSTRUCTOR</text>
    <text x="255" y="108" text-anchor="middle" font-family="Inter" font-size="9" fill="#8b95a5">Scale-free graph,</text>
    <text x="255" y="120" text-anchor="middle" font-family="Inter" font-size="9" fill="#8b95a5">degree dist., layers</text>
    <!-- Module 3: Transmission Engine -->
    <rect x="400" y="30" width="130" height="60" fill="none" stroke="#e8a84c" stroke-width="2"/>
    <text x="465" y="55" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="10" fill="#e2e8f0" letter-spacing="0.5">TRANSMISSION</text>
    <text x="465" y="70" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="10" fill="#e2e8f0" letter-spacing="0.5">ENGINE</text>
    <text x="465" y="108" text-anchor="middle" font-family="Inter" font-size="9" fill="#8b95a5">SIR transitions,</text>
    <text x="465" y="120" text-anchor="middle" font-family="Inter" font-size="9" fill="#8b95a5">beta, gamma params</text>
    <!-- Module 4: Intervention Policy -->
    <rect x="400" y="200" width="130" height="60" fill="none" stroke="#e8a84c" stroke-width="2"/>
    <text x="465" y="225" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="10" fill="#e2e8f0" letter-spacing="0.5">INTERVENTION</text>
    <text x="465" y="240" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="10" fill="#e2e8f0" letter-spacing="0.5">POLICY MODULE</text>
    <text x="465" y="278" text-anchor="middle" font-family="Inter" font-size="9" fill="#8b95a5">Threshold triggers,</text>
    <text x="465" y="290" text-anchor="middle" font-family="Inter" font-size="9" fill="#8b95a5">edge removal rules</text>
    <!-- Module 5: Output Aggregator -->
    <rect x="590" y="115" width="110" height="60" fill="none" stroke="#5cba7d" stroke-width="2"/>
    <text x="645" y="140" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="10" fill="#e2e8f0" letter-spacing="0.5">OUTPUT</text>
    <text x="645" y="155" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="10" fill="#e2e8f0" letter-spacing="0.5">AGGREGATOR</text>
    <text x="645" y="193" text-anchor="middle" font-family="Inter" font-size="9" fill="#8b95a5">Curves, R_eff,</text>
    <text x="645" y="205" text-anchor="middle" font-family="Inter" font-size="9" fill="#8b95a5">attack rate</text>
    <!-- Arrows -->
    <line x1="150" y1="60" x2="190" y2="60" stroke="#5ba3c9" stroke-width="1.5" marker-end="url(#arrowBlue)"/>
    <line x1="320" y1="60" x2="400" y2="60" stroke="#5ba3c9" stroke-width="1.5" marker-end="url(#arrowBlue)"/>
    <line x1="530" y1="60" x2="620" y2="115" stroke="#5cba7d" stroke-width="1.5" marker-end="url(#arrowGreen)"/>
    <line x1="465" y1="90" x2="465" y2="200" stroke="#e8a84c" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#arrowOrange)"/>
    <line x1="530" y1="230" x2="620" y2="175" stroke="#5cba7d" stroke-width="1.5" marker-end="url(#arrowGreen)"/>
    <!-- Arrow markers -->
    <defs>
      <marker id="arrowBlue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#5ba3c9"/>
      </marker>
      <marker id="arrowOrange" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#e8a84c"/>
      </marker>
      <marker id="arrowGreen" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#5cba7d"/>
      </marker>
    </defs>
  </svg>
  <figcaption class="caption"><span class="fig-num">Figure 1.</span> SIR-ABM model architecture. Five loosely-coupled modules communicate via standardised data interfaces. Blue modules handle initialisation, orange modules govern runtime dynamics, and the green module collects output metrics.</figcaption>
</figure>

<section class="model-callout">
  <span class="callout-label">Mean Absolute Percentage Error</span>
  <span class="callout-value">4.2 pct<span class="unit">against empirical curves</span></span>
  <p class="callout-detail">Peak timing error: 2.1 days (95 pct CI: 0.8 to 3.6). Final attack rate error: 1.8 pct (95 pct CI: 0.4 to 3.1). Calibrated via ABC-SMC with 50,000 particle draws per round across 8 rounds.</p>
</section>

## Parameter Space Heatmap

<figure class="figure">
  <svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Heatmap showing interaction between transmission probability beta and contact network degree on final attack rate">
    <!-- Background grid -->
    <rect x="80" y="20" width="560" height="280" fill="#0e1117" stroke="#2a3342" stroke-width="1"/>
    <!-- Row labels (gamma values) -->
    <g font-family="IBM Plex Mono" font-size="10" fill="#8b95a5" text-anchor="end">
      <text x="75" y="50">beta=0.08</text>
      <text x="75" y="90">beta=0.06</text>
      <text x="75" y="130">beta=0.04</text>
      <text x="75" y="170">beta=0.03</text>
      <text x="75" y="210">beta=0.02</text>
      <text x="75" y="250">beta=0.01</text>
      <text x="75" y="290">beta=0.005</text>
    </g>
    <!-- Column labels (degree) -->
    <g font-family="IBM Plex Mono" font-size="10" fill="#8b95a5" text-anchor="middle">
      <text x="120" y="316">k=4</text>
      <text x="200" y="316">k=8</text>
      <text x="280" y="316">k=12</text>
      <text x="360" y="316">k=16</text>
      <text x="440" y="316">k=20</text>
      <text x="520" y="316">k=24</text>
      <text x="600" y="316">k=28</text>
    </g>
    <!-- Heatmap cells row 1 (beta=0.08) - high attack rates -->
    <rect x="80" y="30" width="80" height="40" fill="#d15b5b" opacity="0.7"/>
    <rect x="160" y="30" width="80" height="40" fill="#d15b5b" opacity="0.85"/>
    <rect x="240" y="30" width="80" height="40" fill="#d15b5b" opacity="0.95"/>
    <rect x="320" y="30" width="80" height="40" fill="#d15b5b"/>
    <rect x="400" y="30" width="80" height="40" fill="#d15b5b"/>
    <rect x="480" y="30" width="80" height="40" fill="#d15b5b"/>
    <rect x="560" y="30" width="80" height="40" fill="#d15b5b"/>
    <!-- Row 2 (beta=0.06) -->
    <rect x="80" y="70" width="80" height="40" fill="#e8a84c" opacity="0.5"/>
    <rect x="160" y="70" width="80" height="40" fill="#d15b5b" opacity="0.6"/>
    <rect x="240" y="70" width="80" height="40" fill="#d15b5b" opacity="0.75"/>
    <rect x="320" y="70" width="80" height="40" fill="#d15b5b" opacity="0.85"/>
    <rect x="400" y="70" width="80" height="40" fill="#d15b5b" opacity="0.9"/>
    <rect x="480" y="70" width="80" height="40" fill="#d15b5b" opacity="0.95"/>
    <rect x="560" y="70" width="80" height="40" fill="#d15b5b"/>
    <!-- Row 3 (beta=0.04) -->
    <rect x="80" y="110" width="80" height="40" fill="#e8a84c" opacity="0.3"/>
    <rect x="160" y="110" width="80" height="40" fill="#e8a84c" opacity="0.5"/>
    <rect x="240" y="110" width="80" height="40" fill="#e8a84c" opacity="0.7"/>
    <rect x="320" y="110" width="80" height="40" fill="#d15b5b" opacity="0.6"/>
    <rect x="400" y="110" width="80" height="40" fill="#d15b5b" opacity="0.7"/>
    <rect x="480" y="110" width="80" height="40" fill="#d15b5b" opacity="0.8"/>
    <rect x="560" y="110" width="80" height="40" fill="#d15b5b" opacity="0.85"/>
    <!-- Row 4 (beta=0.03) -->
    <rect x="80" y="150" width="80" height="40" fill="#3dbfa8" opacity="0.4"/>
    <rect x="160" y="150" width="80" height="40" fill="#e8a84c" opacity="0.35"/>
    <rect x="240" y="150" width="80" height="40" fill="#e8a84c" opacity="0.5"/>
    <rect x="320" y="150" width="80" height="40" fill="#e8a84c" opacity="0.65"/>
    <rect x="400" y="150" width="80" height="40" fill="#e8a84c" opacity="0.75"/>
    <rect x="480" y="150" width="80" height="40" fill="#d15b5b" opacity="0.55"/>
    <rect x="560" y="150" width="80" height="40" fill="#d15b5b" opacity="0.65"/>
    <!-- Row 5 (beta=0.02) -->
    <rect x="80" y="190" width="80" height="40" fill="#3dbfa8" opacity="0.3"/>
    <rect x="160" y="190" width="80" height="40" fill="#3dbfa8" opacity="0.4"/>
    <rect x="240" y="190" width="80" height="40" fill="#e8a84c" opacity="0.35"/>
    <rect x="320" y="190" width="80" height="40" fill="#e8a84c" opacity="0.45"/>
    <rect x="400" y="190" width="80" height="40" fill="#e8a84c" opacity="0.55"/>
    <rect x="480" y="190" width="80" height="40" fill="#e8a84c" opacity="0.65"/>
    <rect x="560" y="190" width="80" height="40" fill="#e8a84c" opacity="0.75"/>
    <!-- Row 6 (beta=0.01) -->
    <rect x="80" y="230" width="80" height="40" fill="#5ba3c9" opacity="0.3"/>
    <rect x="160" y="230" width="80" height="40" fill="#3dbfa8" opacity="0.3"/>
    <rect x="240" y="230" width="80" height="40" fill="#3dbfa8" opacity="0.35"/>
    <rect x="320" y="230" width="80" height="40" fill="#3dbfa8" opacity="0.4"/>
    <rect x="400" y="230" width="80" height="40" fill="#e8a84c" opacity="0.35"/>
    <rect x="480" y="230" width="80" height="40" fill="#e8a84c" opacity="0.45"/>
    <rect x="560" y="230" width="80" height="40" fill="#e8a84c" opacity="0.55"/>
    <!-- Row 7 (beta=0.005) -->
    <rect x="80" y="270" width="80" height="40" fill="#5ba3c9" opacity="0.2"/>
    <rect x="160" y="270" width="80" height="40" fill="#5ba3c9" opacity="0.25"/>
    <rect x="240" y="270" width="80" height="40" fill="#5ba3c9" opacity="0.3"/>
    <rect x="320" y="270" width="80" height="40" fill="#3dbfa8" opacity="0.3"/>
    <rect x="400" y="270" width="80" height="40" fill="#3dbfa8" opacity="0.35"/>
    <rect x="480" y="270" width="80" height="40" fill="#3dbfa8" opacity="0.4"/>
    <rect x="560" y="270" width="80" height="40" fill="#e8a84c" opacity="0.35"/>
    <!-- Cell values - selected cells -->
    <g font-family="IBM Plex Mono" font-size="9" fill="#e2e8f0" text-anchor="middle" font-weight="500">
      <text x="120" y="55">0.62</text>
      <text x="360" y="55">0.94</text>
      <text x="600" y="55">0.98</text>
      <text x="120" y="135">0.18</text>
      <text x="360" y="135">0.54</text>
      <text x="600" y="135">0.82</text>
      <text x="120" y="215">0.04</text>
      <text x="360" y="215">0.22</text>
      <text x="600" y="215">0.48</text>
      <text x="120" y="295">0.01</text>
      <text x="360" y="295">0.08</text>
      <text x="600" y="295">0.19</text>
    </g>
    <!-- Legend -->
    <text x="360" y="350" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="11" fill="#8b95a5" letter-spacing="1">MEAN CONTACT DEGREE (k)</text>
    <text x="28" y="170" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="11" fill="#8b95a5" letter-spacing="1" transform="rotate(-90 28 170)">TRANSMISSION PROBABILITY</text>
  </svg>
  <figcaption class="caption"><span class="fig-num">Figure 2.</span> Parameter space heatmap: final attack rate as a function of transmission probability (beta) and mean contact degree (k). Red indicates high attack rates (above 0.60); amber indicates moderate (0.20 to 0.60); teal and blue indicate low (below 0.20). Each cell represents the mean of 500 simulation runs.</figcaption>
</figure>

## Key Metrics

<table class="paper-table">
  <caption><span class="tab-num">Table 1.</span> Calibration and validation results against three empirical outbreak datasets.</caption>
  <thead>
    <tr>
      <th>Metric</th>
      <th>Dataset A</th>
      <th>Dataset B</th>
      <th>Dataset C</th>
      <th>Pooled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mean absolute percentage error</td>
      <td class="num">3.8 pct</td>
      <td class="num">4.1 pct</td>
      <td class="num">4.7 pct</td>
      <td class="num">4.2 pct</td>
    </tr>
    <tr>
      <td>Peak timing error (days)</td>
      <td class="num">1.4</td>
      <td class="num">2.6</td>
      <td class="num">2.3</td>
      <td class="num">2.1</td>
    </tr>
    <tr>
      <td>Final attack rate error</td>
      <td class="num">1.2 pct</td>
      <td class="num">2.1 pct</td>
      <td class="num">2.0 pct</td>
      <td class="num">1.8 pct</td>
    </tr>
    <tr>
      <td>R-effective at peak</td>
      <td class="num">2.14</td>
      <td class="num">1.87</td>
      <td class="num">2.41</td>
      <td class="num">2.14</td>
    </tr>
    <tr>
      <td>ABC-SMC acceptance rate (round 8)</td>
      <td class="num">0.032</td>
      <td class="num">0.028</td>
      <td class="num">0.024</td>
      <td class="num">0.028</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">All values are point estimates from the posterior median. Credible intervals are reported in Section 3.</td></tr>
  </tfoot>
</table>

## Structure of the Paper

Navigate the paper through the section index. The full manuscript contains the following numbered sections.

1. **Section 1. Model Design** -- architecture, module interfaces, and design rationale
2. **Section 2. Calibration** -- ABC-SMC procedure, prior specifications, and convergence
3. **Section 3. Validation** -- out-of-sample tests and goodness-of-fit metrics
4. **Section 4. Sensitivity Analysis** -- Sobol decomposition and tornado diagrams
5. **Section 5. Discussion** -- interpretation, limitations, and future extensions
