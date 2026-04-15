+++
title = "Abstract"
description = "Urgent preprint on temporal graph transformers for real-time epidemic forecasting, featuring PREPRINT watermark overlays, version badge stamps, and draft status indicators."
tags = ["paper", "light", "preprint", "urgent", "draft"]
+++

<div class="draft-banner">
  <p>THIS IS A PREPRINT -- NOT PEER REVIEWED. Posted to medRxiv on 2026-04-12. Do not use to guide clinical practice.</p>
</div>

<header class="paper-header">
  <p class="paper-eyebrow">Preprint &middot; Epidemiology &middot; Posted 2026-04-12</p>

  <!-- Version badge stamp SVG -->
  <svg viewBox="0 0 280 32" xmlns="http://www.w3.org/2000/svg" aria-label="Version v3 badge" style="display:block;margin:0 0 0.8rem;">
    <rect x="0" y="2" width="55" height="28" rx="3" fill="#e63946"/>
    <text x="27" y="21" text-anchor="middle" font-family="'Inter','Roboto',sans-serif" font-size="11" font-weight="700" fill="#ffffff" letter-spacing="0.05em">v3</text>
    <rect x="57" y="2" width="220" height="28" rx="3" fill="none" stroke="#e63946" stroke-width="1.2"/>
    <text x="167" y="21" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="10" fill="#e63946">2026-04-12 | Rev. 3 of 3</text>
  </svg>

  <h1 class="paper-title">Temporal Graph Transformers for Real-Time Epidemic Forecasting: A Multi-Pathogen Framework Validated on Respiratory Surveillance Networks</h1>
  <p class="paper-authors">
    <strong>Amara Osei-Mensah</strong><sup>1,*</sup>, Lukas Brenner<sup>2</sup>, Priya Venkatesh<sup>3</sup>, Carlos Medina-Rios<sup>4</sup>, Hana Kobayashi<sup>5</sup>
  </p>
  <p class="paper-affiliations">
    <sup>1</sup> London School of Hygiene and Tropical Medicine, UK;
    <sup>2</sup> Helmholtz Centre for Infection Research, Germany;
    <sup>3</sup> Indian Institute of Technology Madras, India;
    <sup>4</sup> National Institute of Public Health, Mexico;
    <sup>5</sup> National Institute of Infectious Diseases, Japan.
    <sup>*</sup> Corresponding author.
  </p>
  <div class="paper-meta">
    <strong>doi:</strong> 10.1101/2026.04.12.648302 &middot;
    <strong>Posted:</strong> 2026-04-12 &middot;
    <strong>Version:</strong> 3 (major revision) &middot;
    <strong>License:</strong> CC BY 4.0
  </div>
</header>

<div class="abstract-box">
  <p class="abstract-label">Abstract</p>
  <p>Real-time epidemic forecasting remains a critical challenge for public health response. We present TG-EpiForecast, a temporal graph transformer architecture that jointly models pathogen spread across heterogeneous surveillance networks. Our framework integrates wastewater surveillance, syndromic emergency department visits, and laboratory-confirmed case counts into a unified spatiotemporal graph, where nodes represent geographic regions and edges encode mobility-weighted transmission links.</p>
  <p>Evaluated on retrospective data from 2022--2025 covering influenza, RSV, and COVID-19 across 47 countries, TG-EpiForecast achieves a mean absolute error (MAE) improvement of 23% over the current WHO Ensemble baseline at 1-week horizon and 31% at 4-week horizon. Critically, the model provides calibrated uncertainty intervals (empirical coverage 89--94% at 95% nominal level) and identifies emerging outbreak signals a median of 11 days before traditional threshold-based alerts.</p>
  <p><strong>Keywords:</strong> <em>epidemic forecasting; temporal graph networks; transformers; respiratory surveillance; wastewater epidemiology; real-time prediction</em></p>
</div>

## Revision History

<!-- SVG version timeline stamps -->
<figure>
<svg viewBox="0 0 740 140" xmlns="http://www.w3.org/2000/svg" aria-label="Version history timeline" style="width:100%;max-width:740px;display:block;margin:1rem auto;">
  <rect x="0" y="0" width="740" height="140" fill="#fafafa"/>
  <!-- Timeline axis -->
  <line x1="60" y1="70" x2="700" y2="70" stroke="#c8c8c0" stroke-width="1.5"/>
  <!-- v1 -->
  <circle cx="120" cy="70" r="8" fill="none" stroke="#8a8e98" stroke-width="1.5"/>
  <text x="120" y="74" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" font-weight="700" fill="#8a8e98">v1</text>
  <text x="120" y="48" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">2026-03-28</text>
  <text x="120" y="100" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" fill="#5a6070">Initial submission</text>
  <text x="120" y="112" text-anchor="middle" font-family="'Inter',sans-serif" font-size="7" fill="#8a8e98">3 pathogens, 12 countries</text>
  <!-- v2 -->
  <circle cx="380" cy="70" r="8" fill="none" stroke="#c07020" stroke-width="1.5"/>
  <text x="380" y="74" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" font-weight="700" fill="#c07020">v2</text>
  <text x="380" y="48" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">2026-04-05</text>
  <text x="380" y="100" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" fill="#5a6070">Extended to 47 countries</text>
  <text x="380" y="112" text-anchor="middle" font-family="'Inter',sans-serif" font-size="7" fill="#8a8e98">Added wastewater data layer</text>
  <!-- v3 (current) -->
  <circle cx="620" cy="70" r="10" fill="#e63946" stroke="#e63946" stroke-width="2"/>
  <text x="620" y="74" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" font-weight="700" fill="#ffffff">v3</text>
  <text x="620" y="44" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="8" font-weight="700" fill="#e63946">2026-04-12</text>
  <text x="620" y="100" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" font-weight="600" fill="#e63946">Major revision (current)</text>
  <text x="620" y="112" text-anchor="middle" font-family="'Inter',sans-serif" font-size="7" fill="#e63946">Uncertainty calibration + ablation</text>
  <!-- Arrows between versions -->
  <line x1="130" y1="70" x2="370" y2="70" stroke="#c8c8c0" stroke-width="1.5"/>
  <line x1="390" y1="70" x2="608" y2="70" stroke="#c8c8c0" stroke-width="1.5"/>
</svg>
<figcaption style="text-align:center;font-size:0.78rem;color:#5a6070;font-style:italic;">Fig. 1. Preprint revision history showing three versions posted over a 15-day period.</figcaption>
</figure>

## Key Results at a Glance

| Metric | TG-EpiForecast v3 | WHO Ensemble | Improvement |
|--------|--------------------|-------------|-------------|
| MAE (1-week) | 0.142 | 0.184 | -23% |
| MAE (2-week) | 0.198 | 0.271 | -27% |
| MAE (4-week) | 0.284 | 0.412 | -31% |
| 95% PI Coverage | 91.2% | 78.4% | +12.8pp |
| Early Warning Lead | 11 days (median) | 0 days (threshold) | +11 days |
| Countries Evaluated | 47 | 47 | -- |

## Model Architecture Overview

<!-- SVG architecture diagram with PREPRINT watermark overlay -->
<figure>
<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" aria-label="TG-EpiForecast model architecture" style="width:100%;max-width:740px;display:block;margin:1rem auto;">
  <rect x="0" y="0" width="740" height="280" fill="#fafafa"/>
  <!-- PREPRINT watermark across figure -->
  <text x="370" y="165" text-anchor="middle" font-family="'Inter','Roboto',sans-serif" font-size="52" font-weight="800" fill="#e63946" opacity="0.05" transform="rotate(-20,370,165)" letter-spacing="0.2em">PREPRINT</text>
  <!-- Title -->
  <text x="370" y="20" text-anchor="middle" font-family="'Inter',sans-serif" font-size="12" font-weight="700" fill="#1a2332">TG-EpiForecast Architecture</text>
  <!-- Input layer boxes -->
  <rect x="20" y="40" width="120" height="50" rx="3" fill="none" stroke="#1a5276" stroke-width="1.5"/>
  <text x="80" y="60" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" font-weight="600" fill="#1a5276">Wastewater</text>
  <text x="80" y="73" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" fill="#5a6070">Viral load signals</text>
  <rect x="160" y="40" width="120" height="50" rx="3" fill="none" stroke="#1a5276" stroke-width="1.5"/>
  <text x="220" y="60" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" font-weight="600" fill="#1a5276">Syndromic ED</text>
  <text x="220" y="73" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" fill="#5a6070">ILI visit rates</text>
  <rect x="300" y="40" width="120" height="50" rx="3" fill="none" stroke="#1a5276" stroke-width="1.5"/>
  <text x="360" y="60" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" font-weight="600" fill="#1a5276">Lab-Confirmed</text>
  <text x="360" y="73" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" fill="#5a6070">PCR/antigen counts</text>
  <rect x="440" y="40" width="120" height="50" rx="3" fill="none" stroke="#1a5276" stroke-width="1.5"/>
  <text x="500" y="60" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" font-weight="600" fill="#1a5276">Mobility</text>
  <text x="500" y="73" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" fill="#5a6070">OD flow matrices</text>
  <!-- Arrows down to graph encoder -->
  <line x1="80" y1="90" x2="80" y2="115" stroke="#c8c8c0" stroke-width="1"/>
  <line x1="220" y1="90" x2="220" y2="115" stroke="#c8c8c0" stroke-width="1"/>
  <line x1="360" y1="90" x2="360" y2="115" stroke="#c8c8c0" stroke-width="1"/>
  <line x1="500" y1="90" x2="500" y2="115" stroke="#c8c8c0" stroke-width="1"/>
  <!-- Graph Construction -->
  <rect x="60" y="115" width="460" height="40" rx="3" fill="none" stroke="#2a6496" stroke-width="2"/>
  <text x="290" y="133" text-anchor="middle" font-family="'Inter',sans-serif" font-size="10" font-weight="700" fill="#2a6496">Spatiotemporal Graph Construction</text>
  <text x="290" y="147" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" fill="#5a6070">Nodes = regions | Edges = mobility-weighted links | Temporal snapshots</text>
  <!-- Arrow down -->
  <line x1="290" y1="155" x2="290" y2="172" stroke="#c8c8c0" stroke-width="1"/>
  <!-- Transformer block -->
  <rect x="140" y="172" width="300" height="40" rx="3" fill="#1a5276" stroke="#1a5276" stroke-width="1.5"/>
  <text x="290" y="190" text-anchor="middle" font-family="'Inter',sans-serif" font-size="10" font-weight="700" fill="#ffffff">Temporal Graph Transformer (6 layers)</text>
  <text x="290" y="203" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" fill="#d4e6f1">Self-attention + Graph message passing</text>
  <!-- Arrow down -->
  <line x1="290" y1="212" x2="290" y2="230" stroke="#c8c8c0" stroke-width="1"/>
  <!-- Output heads -->
  <rect x="100" y="230" width="140" height="35" rx="3" fill="none" stroke="#e63946" stroke-width="1.5"/>
  <text x="170" y="248" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" font-weight="600" fill="#e63946">Point Forecast</text>
  <text x="170" y="259" text-anchor="middle" font-family="'Inter',sans-serif" font-size="7" fill="#5a6070">1/2/4-week ahead</text>
  <rect x="260" y="230" width="140" height="35" rx="3" fill="none" stroke="#e63946" stroke-width="1.5"/>
  <text x="330" y="248" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" font-weight="600" fill="#e63946">Uncertainty</text>
  <text x="330" y="259" text-anchor="middle" font-family="'Inter',sans-serif" font-size="7" fill="#5a6070">Calibrated 95% PI</text>
  <rect x="420" y="230" width="140" height="35" rx="3" fill="none" stroke="#e63946" stroke-width="1.5"/>
  <text x="490" y="248" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" font-weight="600" fill="#e63946">Early Warning</text>
  <text x="490" y="259" text-anchor="middle" font-family="'Inter',sans-serif" font-size="7" fill="#5a6070">Anomaly score &gt; threshold</text>
  <!-- Connecting lines to outputs -->
  <line x1="290" y1="230" x2="170" y2="230" stroke="#c8c8c0" stroke-width="0.8"/>
  <line x1="290" y1="230" x2="330" y2="230" stroke="#c8c8c0" stroke-width="0.8"/>
  <line x1="290" y1="230" x2="490" y2="230" stroke="#c8c8c0" stroke-width="0.8"/>
</svg>
<figcaption style="text-align:center;font-size:0.78rem;color:#5a6070;font-style:italic;">Fig. 2. TG-EpiForecast architecture. Multi-source surveillance data is encoded into a spatiotemporal graph processed by a temporal graph transformer with three output heads.</figcaption>
</figure>
