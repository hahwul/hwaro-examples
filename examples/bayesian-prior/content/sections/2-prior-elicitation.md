+++
title = "2. Prior Elicitation"
weight = 2
template = "post"
description = "Derivation of informative priors from the Japanese DPC national registry database."
[extra]
section_number = "2"
+++

## Registry Data Source

The Japanese Diagnosis Procedure Combination (DPC) national registry captures administrative and clinical data for all acute-care hospital admissions in Japan. We used 2.4 million surgical admissions from fiscal years 2020-2024 to derive informative priors for model parameters.

## Prior Derivation Process

For each regression coefficient beta_k, we fit a standard logistic regression to the full registry dataset and used the resulting point estimates as prior means:

beta_k ~ Normal(beta_hat_registry_k, 0.2)

The prior standard deviation of 0.2 was chosen to be approximately twice the typical standard error from the registry fit, reflecting our belief that the study population may differ somewhat from the national population while remaining broadly similar.

## Prior-Data Conflict Assessment

<div class="figure">
  <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
    <text x="350" y="24" text-anchor="middle" font-family="STIX Two Text" font-size="14" font-weight="600" fill="#c8cad0">Prior-Data Conflict: Registry Prior vs. Study Likelihood for Key Covariates</text>
    <line x1="100" y1="40" x2="100" y2="250" stroke="#3a3d48" stroke-width="1"/>
    <line x1="100" y1="250" x2="640" y2="250" stroke="#3a3d48" stroke-width="1"/>
    <text x="100" y="270" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">-1.0</text>
    <text x="235" y="270" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">-0.5</text>
    <text x="370" y="270" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">0.0</text>
    <text x="505" y="270" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">0.5</text>
    <text x="640" y="270" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">1.0</text>
    <text x="370" y="290" text-anchor="middle" font-family="Crimson Pro" font-size="12" fill="#8a8e9a">Coefficient (log-odds)</text>
    <text x="95" y="75" text-anchor="end" font-family="Crimson Pro" font-size="11" fill="#8a8e9a">Age</text>
    <text x="95" y="115" text-anchor="end" font-family="Crimson Pro" font-size="11" fill="#8a8e9a">ASA status</text>
    <text x="95" y="155" text-anchor="end" font-family="Crimson Pro" font-size="11" fill="#8a8e9a">Emergency</text>
    <text x="95" y="195" text-anchor="end" font-family="Crimson Pro" font-size="11" fill="#8a8e9a">CCI</text>
    <text x="95" y="235" text-anchor="end" font-family="Crimson Pro" font-size="11" fill="#8a8e9a">Albumin</text>
    <line x1="430" y1="75" x2="510" y2="75" stroke="#c2a07a" stroke-width="2" stroke-dasharray="4 2"/>
    <circle cx="470" cy="75" r="4" fill="#c2a07a"/>
    <line x1="440" y1="75" x2="500" y2="75" stroke="#7a9ec2" stroke-width="2.5"/>
    <circle cx="478" cy="75" r="4" fill="#7a9ec2" stroke="#1a1c24" stroke-width="1"/>
    <line x1="450" y1="115" x2="550" y2="115" stroke="#c2a07a" stroke-width="2" stroke-dasharray="4 2"/>
    <circle cx="500" cy="115" r="4" fill="#c2a07a"/>
    <line x1="460" y1="115" x2="540" y2="115" stroke="#7a9ec2" stroke-width="2.5"/>
    <circle cx="505" cy="115" r="4" fill="#7a9ec2" stroke="#1a1c24" stroke-width="1"/>
    <line x1="390" y1="155" x2="490" y2="155" stroke="#c2a07a" stroke-width="2" stroke-dasharray="4 2"/>
    <circle cx="440" cy="155" r="4" fill="#c2a07a"/>
    <line x1="410" y1="155" x2="500" y2="155" stroke="#7a9ec2" stroke-width="2.5"/>
    <circle cx="460" cy="155" r="4" fill="#7a9ec2" stroke="#1a1c24" stroke-width="1"/>
    <line x1="395" y1="195" x2="460" y2="195" stroke="#c2a07a" stroke-width="2" stroke-dasharray="4 2"/>
    <circle cx="425" cy="195" r="4" fill="#c2a07a"/>
    <line x1="400" y1="195" x2="450" y2="195" stroke="#7a9ec2" stroke-width="2.5"/>
    <circle cx="430" cy="195" r="4" fill="#7a9ec2" stroke="#1a1c24" stroke-width="1"/>
    <line x1="200" y1="235" x2="300" y2="235" stroke="#c2a07a" stroke-width="2" stroke-dasharray="4 2"/>
    <circle cx="250" cy="235" r="4" fill="#c2a07a"/>
    <line x1="210" y1="235" x2="290" y2="235" stroke="#7a9ec2" stroke-width="2.5"/>
    <circle cx="245" cy="235" r="4" fill="#7a9ec2" stroke="#1a1c24" stroke-width="1"/>
    <rect x="480" y="42" width="12" height="2" fill="#c2a07a"/>
    <text x="497" y="46" font-family="Crimson Pro" font-size="10" fill="#c2a07a">Prior (registry)</text>
    <rect x="560" y="42" width="12" height="2" fill="#7a9ec2"/>
    <text x="577" y="46" font-family="Crimson Pro" font-size="10" fill="#7a9ec2">Posterior</text>
  </svg>
  <p class="caption"><span class="fig-num">Figure 3.</span> Comparison of registry-derived prior intervals (gold, dashed) and posterior credible intervals (blue, solid) for five key covariates. Prior and posterior intervals overlap substantially for all coefficients, indicating no prior-data conflict. The posteriors are narrower, reflecting information gain from the study data.</p>
</div>

## No Prior-Data Conflict

For all twelve covariates, the posterior 95% credible interval overlapped with the prior 95% interval. Formal prior-data conflict checks using the prior predictive p-value (Box, 1980) yielded no p-values below 0.05, confirming compatibility between the registry-derived priors and the study data.
