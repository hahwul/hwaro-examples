+++
title = "Abstract"
description = "Dose-response characterization of MRX-7721, a selective JAK2 inhibitor, including EC50 determination, therapeutic window analysis, and combination interaction profiling."
tags = ["paper", "light", "pharmacological", "dose-response", "clinical"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Original Research &middot; Open Access</p>
  <h1 class="paper-title">Dose-Response Characterization of <span class="drug-name">MRX-7721</span>, a Selective JAK2 Inhibitor: EC50 Determination, Therapeutic Window, and Combination Interaction Profiling</h1>
  <p class="paper-authors">
    <span class="author-corresponding">Kenji Nakamura</span><sup>1</sup>,
    Luciana Ferreira<sup>2</sup>,
    Anders Strand<sup>1,3</sup>,
    Nkechi Okafor<sup>2</sup>
  </p>
  <p class="paper-affiliations">
    <sup>1</sup>Department of Clinical Pharmacology, Kinase Therapeutics Institute &middot;
    <sup>2</sup>Division of Quantitative Pharmacology, Meridian Biomedical Center &middot;
    <sup>3</sup>Nordic DMPK Consortium, Karolinska Institute
  </p>
  <p class="paper-doi"><strong>DOI:</strong> <a href="#">10.41093/jqp.2026.34.02.088</a> &middot; <strong>Received:</strong> 12 Jan 2026 &middot; <strong>Accepted:</strong> 28 Mar 2026</p>
</header>

<section class="abstract-box">
  <h2>Abstract</h2>
  <dl>
    <dt>Background</dt>
    <dd><span class="drug-name">MRX-7721</span> is a novel selective inhibitor of Janus kinase 2 (JAK2) under investigation for myeloproliferative neoplasms. Comprehensive dose-response characterization is needed to define the therapeutic window and guide Phase II dose selection.</dd>
    <dt>Methods</dt>
    <dd>Sigmoid Emax models were fitted to concentration-response data from cell-based JAK2 phosphorylation assays (n = 8 concentrations, triplicate). Therapeutic window boundaries were defined by EC90 (efficacy) and IC20 for off-target kinases (selectivity). Drug interactions with ruxolitinib were characterized using the Chou-Talalay combination index method.</dd>
    <dt>Results</dt>
    <dd>The EC50 for JAK2 inhibition was <strong>42.3 nM</strong> (95 pct CI: 36.1-49.5 nM) with a Hill coefficient of 1.38. The therapeutic window spans 28-310 nM (EC20 to IC20 for FLT3). The combination index with ruxolitinib was 0.61 at the EC50 isobole, indicating synergism.</dd>
    <dt>Conclusion</dt>
    <dd>MRX-7721 demonstrates potent, selective JAK2 inhibition with a favorable therapeutic window. Synergistic interaction with ruxolitinib supports combination dosing strategies for treatment-resistant myelofibrosis.</dd>
    <dt>Keywords</dt>
    <dd><em>dose-response; JAK2 inhibitor; EC50; therapeutic window; combination index; Chou-Talalay; sigmoid Emax; myeloproliferative neoplasm</em></dd>
  </dl>
</section>

## Dose-Response Curve

<figure class="figure">
  <svg viewBox="0 0 720 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sigmoid dose-response curve for MRX-7721 showing EC50 annotation at 42.3 nM">
    <!-- background -->
    <rect x="0" y="0" width="720" height="420" fill="#faf9f5"/>
    <!-- grid -->
    <g stroke="#ccc8ba" stroke-width="0.5">
      <line x1="80" y1="40" x2="680" y2="40"/>
      <line x1="80" y1="100" x2="680" y2="100"/>
      <line x1="80" y1="160" x2="680" y2="160"/>
      <line x1="80" y1="220" x2="680" y2="220"/>
      <line x1="80" y1="280" x2="680" y2="280"/>
      <line x1="80" y1="340" x2="680" y2="340"/>
    </g>
    <!-- axes -->
    <line x1="80" y1="40" x2="80" y2="350" stroke="#1a2337" stroke-width="1.5"/>
    <line x1="80" y1="350" x2="680" y2="350" stroke="#1a2337" stroke-width="1.5"/>
    <!-- Y-axis labels (pct inhibition) -->
    <g font-family="JetBrains Mono" font-size="10" fill="#5b6272" text-anchor="end">
      <text x="72" y="44">100</text>
      <text x="72" y="104">80</text>
      <text x="72" y="164">60</text>
      <text x="72" y="224">40</text>
      <text x="72" y="284">20</text>
      <text x="72" y="344">0</text>
    </g>
    <!-- X-axis labels (log concentration nM) -->
    <g font-family="JetBrains Mono" font-size="10" fill="#5b6272" text-anchor="middle">
      <text x="130" y="368">1</text>
      <text x="230" y="368">3</text>
      <text x="330" y="368">10</text>
      <text x="430" y="368">30</text>
      <text x="530" y="368">100</text>
      <text x="630" y="368">300</text>
    </g>
    <!-- Axis titles -->
    <text x="380" y="398" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="12" fill="#1a2337" letter-spacing="0.5">Concentration (nM, log scale)</text>
    <text x="28" y="200" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="12" fill="#1a2337" letter-spacing="0.5" transform="rotate(-90,28,200)">pct JAK2 Inhibition</text>
    <!-- Sigmoid curve -->
    <path d="M 100 338 Q 140 336 180 332 Q 220 326 260 316 Q 300 298 340 264 Q 370 232 400 190 Q 430 150 460 112 Q 490 84 520 68 Q 560 54 600 48 Q 640 44 660 42" fill="none" stroke="#2a6894" stroke-width="2.5"/>
    <!-- Data points with error bars -->
    <g fill="#2a6894" stroke="#1a2337" stroke-width="0.8">
      <circle cx="130" cy="336" r="4"/>
      <line x1="130" y1="330" x2="130" y2="342" stroke="#2a6894" stroke-width="1.5"/>
      <circle cx="230" cy="328" r="4"/>
      <line x1="230" y1="320" x2="230" y2="336" stroke="#2a6894" stroke-width="1.5"/>
      <circle cx="330" cy="302" r="4"/>
      <line x1="330" y1="290" x2="330" y2="314" stroke="#2a6894" stroke-width="1.5"/>
      <circle cx="380" cy="248" r="4"/>
      <line x1="380" y1="232" x2="380" y2="264" stroke="#2a6894" stroke-width="1.5"/>
      <circle cx="430" cy="186" r="4"/>
      <line x1="430" y1="170" x2="430" y2="202" stroke="#2a6894" stroke-width="1.5"/>
      <circle cx="480" cy="108" r="4"/>
      <line x1="480" y1="96" x2="480" y2="120" stroke="#2a6894" stroke-width="1.5"/>
      <circle cx="530" cy="68" r="4"/>
      <line x1="530" y1="58" x2="530" y2="78" stroke="#2a6894" stroke-width="1.5"/>
      <circle cx="630" cy="44" r="4"/>
      <line x1="630" y1="38" x2="630" y2="50" stroke="#2a6894" stroke-width="1.5"/>
    </g>
    <!-- EC50 annotation -->
    <line x1="420" y1="195" x2="420" y2="350" stroke="#c44a2b" stroke-width="1.5" stroke-dasharray="6 4"/>
    <line x1="80" y1="195" x2="420" y2="195" stroke="#c44a2b" stroke-width="1.5" stroke-dasharray="6 4"/>
    <circle cx="420" cy="195" r="6" fill="#c44a2b" stroke="#1a2337" stroke-width="1.5"/>
    <!-- EC50 label -->
    <rect x="440" y="170" width="140" height="40" fill="#faf9f5" stroke="#c44a2b" stroke-width="1"/>
    <text x="510" y="186" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="10" fill="#c44a2b" letter-spacing="1">EC50</text>
    <text x="510" y="202" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="12" fill="#1a2337">42.3 nM</text>
    <!-- Hill coefficient -->
    <text x="580" y="260" font-family="STIX Two Text" font-style="italic" font-size="11" fill="#5b6272">n<tspan font-size="8" dy="3">H</tspan><tspan dy="-3"> = 1.38</tspan></text>
  </svg>
  <div class="caption"><span class="fig-num">Figure 1.</span> Sigmoid dose-response curve for MRX-7721 inhibition of JAK2 phosphorylation. Data points represent mean of triplicate measurements; error bars show SEM. The fitted four-parameter logistic model yields EC50 = 42.3 nM (95 pct CI: 36.1-49.5 nM, Hill coefficient n<sub>H</sub> = 1.38).</div>
</figure>

<div class="ec50-callout">
  <span class="ec50-label">EC50 (JAK2)</span>
  <span class="ec50-value">42.3 nM<span class="unit">95 pct CI: 36.1-49.5</span></span>
  <p class="ec50-detail">Determined from 8-point concentration-response curve (1-300 nM) in HEL 92.1.7 erythroleukemia cells. Fitted by four-parameter logistic regression. Hill coefficient = 1.38; R-squared = 0.997; bottom asymptote = 2.1 pct; top asymptote = 98.4 pct.</p>
</div>

## Key Pharmacological Parameters

<table class="paper-table">
  <caption><span class="tab-num">Table 1.</span> Summary of dose-response and selectivity parameters for MRX-7721.</caption>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Target</th>
      <th>Value</th>
      <th>95 pct CI</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>EC50</td>
      <td>JAK2</td>
      <td class="num">42.3 nM</td>
      <td class="num">36.1-49.5</td>
    </tr>
    <tr>
      <td>EC20</td>
      <td>JAK2</td>
      <td class="num">18.4 nM</td>
      <td class="num">14.2-22.8</td>
    </tr>
    <tr>
      <td>EC90</td>
      <td>JAK2</td>
      <td class="num">148.2 nM</td>
      <td class="num">128.0-171.5</td>
    </tr>
    <tr>
      <td>IC50</td>
      <td>JAK1 (off-target)</td>
      <td class="num">1,240 nM</td>
      <td class="num">980-1,560</td>
    </tr>
    <tr>
      <td>IC20</td>
      <td>FLT3 (off-target)</td>
      <td class="num">310 nM</td>
      <td class="num">260-370</td>
    </tr>
    <tr>
      <td>Selectivity ratio</td>
      <td>JAK2 / JAK1</td>
      <td class="num">29.3x</td>
      <td class="num">22.1-39.4</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="4">EC = effective concentration for target inhibition; IC = inhibitory concentration for off-target kinases. CI = confidence interval from bootstrap resampling (n = 1,000).</td></tr>
  </tfoot>
</table>

## Structure of the Paper

1. **Section 1. Dose-Response Modeling** -- sigmoid Emax fitting, parameter estimation, and model diagnostics
2. **Section 2. Therapeutic Window** -- efficacy and selectivity boundaries, safety margin analysis
3. **Section 3. Drug Interactions** -- Chou-Talalay combination index with ruxolitinib
4. **Section 4. ADME Profiling** -- absorption, distribution, metabolism, and excretion characterization
5. **Section 5. Discussion** -- clinical implications and Phase II dose selection rationale
