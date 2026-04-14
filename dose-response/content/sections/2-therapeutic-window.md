+++
title = "Therapeutic Window"
description = "Definition of the therapeutic window boundaries based on efficacy and off-target selectivity thresholds."
weight = 2
template = "post"
[extra]
section_number = "2"
+++

## Window Definition

The therapeutic window for MRX-7721 is defined by two boundaries:

- **Lower bound (efficacy threshold)**: EC20 for JAK2 inhibition = 18.4 nM. Below this concentration, JAK2 inhibition is insufficient for clinical benefit.
- **Upper bound (selectivity limit)**: IC20 for FLT3 inhibition = 310 nM. Above this concentration, off-target kinase inhibition begins to contribute adverse effects (cytopenia risk).

The resulting therapeutic window spans **18.4-310 nM**, representing a 16.8-fold range. This compares favorably to ruxolitinib (therapeutic index approximately 5-fold) and suggests a wider margin for dose optimization.

<figure class="figure">
  <svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Therapeutic window diagram showing efficacy and toxicity boundaries for MRX-7721">
    <rect x="0" y="0" width="720" height="240" fill="#faf9f5"/>
    <!-- Concentration axis -->
    <line x1="60" y1="140" x2="680" y2="140" stroke="#1a2337" stroke-width="1.5"/>
    <!-- Tick marks -->
    <g stroke="#1a2337" stroke-width="1">
      <line x1="120" y1="135" x2="120" y2="145"/>
      <line x1="230" y1="135" x2="230" y2="145"/>
      <line x1="340" y1="135" x2="340" y2="145"/>
      <line x1="450" y1="135" x2="450" y2="145"/>
      <line x1="560" y1="135" x2="560" y2="145"/>
      <line x1="660" y1="135" x2="660" y2="145"/>
    </g>
    <!-- Concentration labels -->
    <g font-family="JetBrains Mono" font-size="10" fill="#5b6272" text-anchor="middle">
      <text x="120" y="162">1 nM</text>
      <text x="230" y="162">10 nM</text>
      <text x="340" y="162">42 nM</text>
      <text x="450" y="162">100 nM</text>
      <text x="560" y="162">310 nM</text>
      <text x="660" y="162">1000 nM</text>
    </g>
    <text x="370" y="186" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="11" fill="#1a2337" letter-spacing="0.5">Concentration (nM, log scale)</text>
    <!-- Sub-therapeutic zone -->
    <rect x="60" y="80" width="170" height="50" fill="#ccc8ba" opacity="0.3"/>
    <text x="145" y="72" text-anchor="middle" font-family="IBM Plex Sans" font-size="9" fill="#5b6272" letter-spacing="0.5">SUB-THERAPEUTIC</text>
    <!-- Therapeutic window (green zone) -->
    <rect x="230" y="80" width="330" height="50" fill="#2a8a5a" opacity="0.15"/>
    <rect x="230" y="80" width="330" height="50" fill="none" stroke="#2a8a5a" stroke-width="2"/>
    <text x="395" y="100" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="12" fill="#2a8a5a" letter-spacing="1">THERAPEUTIC WINDOW</text>
    <text x="395" y="118" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#2a8a5a">18.4 - 310 nM (16.8x range)</text>
    <!-- Toxic zone -->
    <rect x="560" y="80" width="120" height="50" fill="#b8372a" opacity="0.1"/>
    <text x="620" y="72" text-anchor="middle" font-family="IBM Plex Sans" font-size="9" fill="#b8372a" letter-spacing="0.5">OFF-TARGET RISK</text>
    <!-- EC50 marker -->
    <line x1="340" y1="80" x2="340" y2="130" stroke="#c44a2b" stroke-width="2"/>
    <circle cx="340" cy="140" r="4" fill="#c44a2b"/>
    <text x="340" y="210" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="10" fill="#c44a2b">EC50 = 42.3 nM</text>
    <!-- EC20 marker -->
    <line x1="230" y1="130" x2="230" y2="140" stroke="#2a8a5a" stroke-width="2"/>
    <text x="230" y="210" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#2a8a5a">EC20</text>
    <!-- IC20 FLT3 marker -->
    <line x1="560" y1="130" x2="560" y2="140" stroke="#b8372a" stroke-width="2"/>
    <text x="560" y="210" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#b8372a">IC20 FLT3</text>
  </svg>
  <div class="caption"><span class="fig-num">Figure 2.</span> Therapeutic window diagram for MRX-7721. The green zone indicates the concentration range between the efficacy threshold (EC20 for JAK2, 18.4 nM) and the selectivity limit (IC20 for FLT3, 310 nM). The EC50 (42.3 nM) falls well within the therapeutic window.</div>
</figure>

### Clinical Dose Implications

Based on the therapeutic window boundaries and the pharmacokinetic profile (oral bioavailability 72 pct, half-life 8.4 hours), population PK modeling predicts that a dose of 25 mg twice daily will maintain plasma trough concentrations above the EC20 (18.4 nM) and peak concentrations below the IC20 for FLT3 (310 nM) in greater than 90 pct of patients. This dose is recommended for Phase II evaluation.
