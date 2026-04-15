+++
title = "Abstract"
description = "A Bayesian hierarchical model for estimating hospital-level mortality rates using informative priors derived from national registry data, with MCMC convergence diagnostics and posterior predictive checks."
tags = ["paper", "dark", "bayesian", "probabilistic", "visualization"]
template = "page"
+++

<div class="paper-header">
  <p class="paper-eyebrow">Bayesian Methods &middot; Original Research</p>
  <h1 class="paper-title">A Bayesian Hierarchical Model for Estimating Hospital-Level Mortality Rates with Informative Priors</h1>
  <p class="paper-authors">
    <span class="author-corresponding">Takeshi Nakamura</span><sup>1*</sup>,
    Kwame Osei-Bonsu<sup>2</sup>,
    Linnea Eriksson<sup>3</sup>,
    Priya Gupta<sup>4</sup>
  </p>
  <p class="paper-affiliations">
    <sup>1</sup> Department of Biostatistics, University of Tokyo, Japan;
    <sup>2</sup> School of Public Health, University of Ghana, Accra;
    <sup>3</sup> Division of Clinical Epidemiology, Karolinska Institutet, Stockholm;
    <sup>4</sup> Centre for Health Informatics, AIIMS New Delhi, India
  </p>
  <p class="paper-doi">
    doi: <a href="#">10.41093/bam.2026.12.04.201</a> &middot;
    Code: <a href="#">github.com/tnakamura/hospital-bayes</a>
  </p>
  <div class="badge-row">
    <span class="bayes-badge">BAYESIAN</span>
    <span class="bayes-badge mcmc">MCMC</span>
    <span class="bayes-badge dag">DAG MODEL</span>
  </div>
</div>

<div class="abstract-box">
  <h2>Abstract</h2>
  <dl>
    <dt>Background</dt>
    <dd>Comparing hospital mortality rates requires adjusting for case-mix differences. Frequentist standardized mortality ratios (SMRs) are unstable for low-volume hospitals and do not naturally incorporate external evidence. Bayesian hierarchical models address both limitations through partial pooling and informative prior specification.</dd>
    <dt>Objectives</dt>
    <dd>To develop a Bayesian hierarchical logistic regression model for 30-day post-surgical mortality, using informative priors derived from a national registry (N = 2.4 million admissions), and to compare its calibration and discrimination against frequentist fixed-effects and random-effects alternatives.</dd>
    <dt>Methods</dt>
    <dd>We fit a three-level hierarchical model (patients nested in surgeons nested in hospitals) to 186,422 surgical admissions across 47 hospitals. Priors for regression coefficients were derived from the Japanese national DPC registry. Inference was performed via Hamiltonian Monte Carlo (HMC) using Stan, with 4 chains of 4,000 iterations each. Convergence was assessed via R-hat, effective sample size, and trace plot inspection.</dd>
    <dt>Results</dt>
    <dd>The Bayesian hierarchical model achieved superior calibration (Brier score 0.031 vs. 0.038 frequentist) and discrimination (C-statistic 0.847 vs. 0.832). Hospital-level shrinkage was most pronounced for low-volume hospitals (median shrinkage 42% for hospitals with fewer than 200 annual cases vs. 8% for hospitals exceeding 2,000). All parameters achieved R-hat below 1.01 with effective sample sizes exceeding 3,000.</dd>
    <dt>Conclusions</dt>
    <dd>Bayesian hierarchical models with registry-derived informative priors produce more stable and better-calibrated hospital mortality estimates than frequentist alternatives, particularly for low-volume hospitals where data are sparse. The informative prior acts as a principled regularizer, borrowing strength from the national population.</dd>
    <dt>Keywords</dt>
    <dd>Bayesian hierarchical model, hospital mortality, informative prior, MCMC, Stan, partial pooling, shrinkage estimation, case-mix adjustment</dd>
  </dl>
</div>

## Prior and Posterior Distributions

<div class="figure">
  <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
    <text x="350" y="24" text-anchor="middle" font-family="STIX Two Text" font-size="14" font-weight="600" fill="#c8cad0">Prior vs. Posterior: Hospital Random Effect (sigma_h)</text>
    <line x1="80" y1="40" x2="80" y2="260" stroke="#3a3d48" stroke-width="1"/>
    <line x1="80" y1="260" x2="650" y2="260" stroke="#3a3d48" stroke-width="1"/>
    <text x="35" y="155" text-anchor="middle" font-family="Crimson Pro" font-size="12" fill="#8a8e9a" transform="rotate(-90,35,155)">Density</text>
    <text x="365" y="295" text-anchor="middle" font-family="Crimson Pro" font-size="12" fill="#8a8e9a">sigma_h (log-odds scale)</text>
    <text x="80" y="275" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">0.0</text>
    <text x="194" y="275" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">0.2</text>
    <text x="308" y="275" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">0.4</text>
    <text x="422" y="275" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">0.6</text>
    <text x="536" y="275" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">0.8</text>
    <text x="650" y="275" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">1.0</text>
    <path d="M80,258 Q120,256 160,248 Q200,228 240,185 Q280,128 320,95 Q360,78 400,92 Q440,128 480,178 Q520,228 560,248 Q600,256 650,258" fill="none" stroke="#c2a07a" stroke-width="2" stroke-dasharray="6 3" opacity="0.8"/>
    <path d="M80,258 Q130,258 180,256 Q220,250 260,228 Q290,195 310,138 Q330,78 350,55 Q370,78 390,138 Q410,195 440,228 Q470,250 510,256 Q560,258 650,258" fill="none" stroke="#7a9ec2" stroke-width="2.5"/>
    <line x1="350" y1="55" x2="350" y2="260" stroke="#7a9ec2" stroke-width="1" stroke-dasharray="3 3" opacity="0.5"/>
    <text x="355" y="52" font-family="JetBrains Mono" font-size="9" fill="#7a9ec2">MAP = 0.34</text>
    <rect x="480" y="48" width="12" height="2" fill="#c2a07a"/>
    <text x="497" y="52" font-family="Crimson Pro" font-size="11" fill="#c2a07a">Prior: Half-Cauchy(0, 0.5)</text>
    <rect x="480" y="65" width="12" height="2" fill="#7a9ec2"/>
    <text x="497" y="69" font-family="Crimson Pro" font-size="11" fill="#7a9ec2">Posterior (N = 186,422)</text>
    <text x="365" y="310" text-anchor="middle" font-family="Crimson Pro" font-size="11" font-style="italic" fill="#5a5d68">Data concentrates the posterior away from the diffuse prior tail</text>
  </svg>
  <p class="caption"><span class="fig-num">Figure 1.</span> Prior and posterior density curves for the hospital-level random effect standard deviation (sigma_h). The prior (Half-Cauchy) is diffuse, reflecting uncertainty before seeing data. The posterior is concentrated around 0.34, indicating moderate between-hospital variation after accounting for case mix. The data have substantially updated the prior.</p>
</div>

## Model Structure (DAG)

<div class="figure">
  <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
    <text x="350" y="24" text-anchor="middle" font-family="STIX Two Text" font-size="14" font-weight="600" fill="#c8cad0">Directed Acyclic Graph: Three-Level Hierarchical Model</text>
    <circle cx="350" cy="70" r="28" fill="none" stroke="#c2a07a" stroke-width="2"/>
    <text x="350" y="66" text-anchor="middle" font-family="STIX Two Text" font-size="13" fill="#c2a07a">mu</text>
    <text x="350" y="80" text-anchor="middle" font-family="STIX Two Text" font-size="10" fill="#c2a07a">sigma_h</text>
    <circle cx="180" cy="155" r="28" fill="none" stroke="#7a9ec2" stroke-width="2"/>
    <text x="180" y="159" text-anchor="middle" font-family="STIX Two Text" font-size="13" fill="#7a9ec2">alpha_h</text>
    <circle cx="350" cy="155" r="28" fill="none" stroke="#7a9ec2" stroke-width="2"/>
    <text x="350" y="159" text-anchor="middle" font-family="STIX Two Text" font-size="13" fill="#7a9ec2">alpha_h</text>
    <circle cx="520" cy="155" r="28" fill="none" stroke="#7a9ec2" stroke-width="2"/>
    <text x="520" y="159" text-anchor="middle" font-family="STIX Two Text" font-size="13" fill="#7a9ec2">alpha_h</text>
    <text x="160" y="195" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">Hospital 1</text>
    <text x="350" y="195" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">Hospital j</text>
    <text x="540" y="195" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">Hospital J</text>
    <text x="265" y="155" font-family="STIX Two Text" font-size="16" fill="#5a5d68">...</text>
    <text x="435" y="155" font-family="STIX Two Text" font-size="16" fill="#5a5d68">...</text>
    <circle cx="290" cy="245" r="22" fill="none" stroke="#8ab87a" stroke-width="2"/>
    <text x="290" y="249" text-anchor="middle" font-family="STIX Two Text" font-size="12" fill="#8ab87a">y_ij</text>
    <circle cx="410" cy="245" r="22" fill="none" stroke="#8ab87a" stroke-width="2"/>
    <text x="410" y="249" text-anchor="middle" font-family="STIX Two Text" font-size="12" fill="#8ab87a">y_ij</text>
    <text x="350" y="249" font-family="STIX Two Text" font-size="14" fill="#5a5d68">...</text>
    <text x="290" y="278" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#5a5d68">Patient i</text>
    <text x="410" y="278" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#5a5d68">Patient n</text>
    <circle cx="560" cy="245" r="22" fill="none" stroke="#c28a7a" stroke-width="2"/>
    <text x="560" y="249" text-anchor="middle" font-family="STIX Two Text" font-size="12" fill="#c28a7a">X_ij</text>
    <text x="560" y="278" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#5a5d68">Covariates</text>
    <line x1="330" y1="94" x2="200" y2="131" stroke="#c2a07a" stroke-width="1.5" marker-end="url(#arrowGold)"/>
    <line x1="350" y1="98" x2="350" y2="127" stroke="#c2a07a" stroke-width="1.5" marker-end="url(#arrowGold)"/>
    <line x1="370" y1="94" x2="500" y2="131" stroke="#c2a07a" stroke-width="1.5" marker-end="url(#arrowGold)"/>
    <line x1="340" y1="180" x2="300" y2="226" stroke="#7a9ec2" stroke-width="1.5" marker-end="url(#arrowBlue)"/>
    <line x1="360" y1="180" x2="400" y2="226" stroke="#7a9ec2" stroke-width="1.5" marker-end="url(#arrowBlue)"/>
    <line x1="545" y1="228" x2="425" y2="240" stroke="#c28a7a" stroke-width="1.5" marker-end="url(#arrowRed)"/>
    <defs>
      <marker id="arrowGold" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6" fill="none" stroke="#c2a07a" stroke-width="1"/>
      </marker>
      <marker id="arrowBlue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6" fill="none" stroke="#7a9ec2" stroke-width="1"/>
      </marker>
      <marker id="arrowRed" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6" fill="none" stroke="#c28a7a" stroke-width="1"/>
      </marker>
    </defs>
  </svg>
  <p class="caption"><span class="fig-num">Figure 2.</span> Directed acyclic graph (DAG) of the three-level Bayesian hierarchical model. Hyperparameters mu and sigma_h (gold) govern the distribution of hospital-level random effects alpha_h (blue). Patient outcomes y_ij (green) are conditionally independent given their hospital effect and patient-level covariates X_ij (red). Arrows indicate conditional dependencies.</p>
</div>

## Key Results

<table class="paper-table">
  <caption><span class="tab-num">Table 1.</span> Model comparison: Bayesian hierarchical vs. frequentist alternatives</caption>
  <thead>
    <tr>
      <th>Metric</th>
      <th>Bayesian Hierarchical</th>
      <th>Frequentist Random Effects</th>
      <th>Frequentist Fixed Effects</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>C-statistic</td>
      <td class="num best-cell">0.847</td>
      <td class="num">0.839</td>
      <td class="num">0.832</td>
    </tr>
    <tr>
      <td>Brier score</td>
      <td class="num best-cell">0.031</td>
      <td class="num">0.034</td>
      <td class="num">0.038</td>
    </tr>
    <tr>
      <td>ELPD (LOO-CV)</td>
      <td class="num best-cell">-18,442</td>
      <td class="num">--</td>
      <td class="num">--</td>
    </tr>
    <tr>
      <td>Hospital estimates unstable (CV > 0.5)</td>
      <td class="num best-cell">2 / 47</td>
      <td class="num">8 / 47</td>
      <td class="num">14 / 47</td>
    </tr>
    <tr>
      <td>Max R-hat</td>
      <td class="num">1.003</td>
      <td class="num">--</td>
      <td class="num">--</td>
    </tr>
    <tr>
      <td>Min ESS (bulk)</td>
      <td class="num">3,412</td>
      <td class="num">--</td>
      <td class="num">--</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">ELPD = expected log pointwise predictive density; LOO-CV = leave-one-out cross-validation; ESS = effective sample size. Bold cells indicate the best-performing model for each metric.</td>
    </tr>
  </tfoot>
</table>

## Structure of the Paper

1. **Model Specification** -- The three-level hierarchical model, prior elicitation, and DAG structure
2. **Prior Elicitation** -- Derivation of informative priors from the Japanese DPC national registry
3. **MCMC Diagnostics** -- Trace plots, R-hat convergence, effective sample size assessment
4. **Results** -- Posterior estimates, shrinkage analysis, and model comparison
5. **Discussion** -- Interpretation, limitations, and recommendations for hospital benchmarking
