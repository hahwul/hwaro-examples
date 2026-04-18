+++
title = "4. Results"
weight = 4
template = "post"
description = "Posterior estimates, hospital-level shrinkage patterns, and model comparison."
[extra]
section_number = "4"
+++

## Posterior Hospital Estimates

The posterior mean mortality rates across 47 hospitals ranged from 1.1% to 5.8%, compared with raw observed rates of 0.0% to 8.4%. The Bayesian estimates show substantial shrinkage toward the overall mean, particularly for low-volume hospitals.

## Shrinkage Analysis

<div class="figure">
  <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
    <text x="350" y="24" text-anchor="middle" font-family="STIX Two Text" font-size="14" font-weight="600" fill="#c8cad0">Shrinkage: Raw vs. Bayesian Posterior Mortality Estimates</text>
    <line x1="80" y1="40" x2="80" y2="260" stroke="#3a3d48" stroke-width="1"/>
    <line x1="80" y1="260" x2="650" y2="260" stroke="#3a3d48" stroke-width="1"/>
    <text x="35" y="155" text-anchor="middle" font-family="Crimson Pro" font-size="12" fill="#8a8e9a" transform="rotate(-90,35,155)">Posterior estimate (%)</text>
    <text x="365" y="295" text-anchor="middle" font-family="Crimson Pro" font-size="12" fill="#8a8e9a">Raw observed rate (%)</text>
    <text x="80" y="275" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">0</text>
    <text x="194" y="275" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">2</text>
    <text x="308" y="275" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">4</text>
    <text x="422" y="275" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">6</text>
    <text x="536" y="275" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">8</text>
    <text x="75" y="48" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">8</text>
    <text x="75" y="103" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">6</text>
    <text x="75" y="158" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">4</text>
    <text x="75" y="213" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#5a5d68">2</text>
    <line x1="80" y1="40" x2="650" y2="260" stroke="#3a3d48" stroke-width="1" stroke-dasharray="4 2" opacity="0.4"/>
    <text x="600" y="252" font-family="Crimson Pro" font-size="9" fill="#3a3d48" transform="rotate(-35,600,252)">y = x (no shrinkage)</text>
    <circle cx="137" cy="208" r="6" fill="#7a9ec2" opacity="0.6" stroke="#7a9ec2" stroke-width="1"/>
    <circle cx="194" cy="185" r="4" fill="#7a9ec2" opacity="0.6" stroke="#7a9ec2" stroke-width="1"/>
    <circle cx="222" cy="175" r="8" fill="#7a9ec2" opacity="0.6" stroke="#7a9ec2" stroke-width="1"/>
    <circle cx="251" cy="168" r="5" fill="#7a9ec2" opacity="0.6" stroke="#7a9ec2" stroke-width="1"/>
    <circle cx="280" cy="155" r="7" fill="#7a9ec2" opacity="0.6" stroke="#7a9ec2" stroke-width="1"/>
    <circle cx="308" cy="152" r="9" fill="#7a9ec2" opacity="0.6" stroke="#7a9ec2" stroke-width="1"/>
    <circle cx="337" cy="145" r="6" fill="#7a9ec2" opacity="0.6" stroke="#7a9ec2" stroke-width="1"/>
    <circle cx="365" cy="138" r="10" fill="#7a9ec2" opacity="0.6" stroke="#7a9ec2" stroke-width="1"/>
    <circle cx="394" cy="132" r="5" fill="#7a9ec2" opacity="0.6" stroke="#7a9ec2" stroke-width="1"/>
    <circle cx="451" cy="118" r="4" fill="#c2a07a" opacity="0.7" stroke="#c2a07a" stroke-width="1"/>
    <circle cx="508" cy="112" r="3" fill="#c2a07a" opacity="0.7" stroke="#c2a07a" stroke-width="1"/>
    <circle cx="536" cy="120" r="3" fill="#c2a07a" opacity="0.7" stroke="#c2a07a" stroke-width="1"/>
    <circle cx="120" cy="195" r="3" fill="#c28a7a" opacity="0.7" stroke="#c28a7a" stroke-width="1"/>
    <circle cx="100" cy="210" r="3" fill="#c28a7a" opacity="0.7" stroke="#c28a7a" stroke-width="1"/>
    <rect x="480" y="42" width="8" height="8" rx="4" fill="#7a9ec2" opacity="0.6"/>
    <text x="494" y="50" font-family="Crimson Pro" font-size="10" fill="#8a8e9a">Large hospital (n>500)</text>
    <rect x="480" y="56" width="8" height="8" rx="4" fill="#c2a07a" opacity="0.7"/>
    <text x="494" y="64" font-family="Crimson Pro" font-size="10" fill="#8a8e9a">Medium (200-500)</text>
    <rect x="480" y="70" width="8" height="8" rx="4" fill="#c28a7a" opacity="0.7"/>
    <text x="494" y="78" font-family="Crimson Pro" font-size="10" fill="#8a8e9a">Small (n<200)</text>
  </svg>
  <p class="caption"><span class="fig-num">Figure 5.</span> Shrinkage plot comparing raw observed mortality rates (x-axis) with Bayesian posterior estimates (y-axis). Points below the diagonal have been shrunk toward the grand mean. Circle size is proportional to hospital volume. Small hospitals (red) show the most shrinkage, while large hospitals (blue) retain estimates close to their raw rates.</p>
</div>

The degree of shrinkage was strongly related to hospital volume:

| Volume category | Hospitals | Median shrinkage | Range |
|----------------|-----------|-----------------|-------|
| Low (< 200 cases/year) | 8 | 42% | 28-58% |
| Medium (200-500) | 15 | 22% | 12-35% |
| High (500-1000) | 14 | 12% | 6-18% |
| Very high (> 1000) | 10 | 8% | 4-12% |

## Model Comparison

The Bayesian hierarchical model outperformed both frequentist alternatives on discrimination (C-statistic: 0.847 vs. 0.832-0.839) and calibration (Brier score: 0.031 vs. 0.034-0.038). The ELPD from LOO-CV was -18,442, which was 234 units higher than WAIC, confirming good out-of-sample predictive performance.
