+++
title = "Structural Modeling and Analysis"
description = "Finite-element model development, calibration, and nonlinear dynamic analysis procedures."
weight = 3
template = "post"
[extra]
section_number = "3"
+++

## 3.1 Model Development

Three-dimensional nonlinear finite-element models were developed for all 142 bridges using the OpenSees computational framework (v3.6.0). Bridge types in the inventory include: multi-span continuous concrete girder (52), multi-span simply-supported steel girder (34), multi-span continuous steel girder (28), single-span concrete slab (16), and other types (12).

<figure class="figure">
  <svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schematic of finite-element bridge model showing key components">
    <rect x="0" y="0" width="720" height="280" fill="#f8f7f3"/>
    <!-- Ground line -->
    <line x1="40" y1="220" x2="680" y2="220" stroke="#1a2337" stroke-width="1"/>
    <!-- Hatch marks for ground -->
    <g stroke="#5b6272" stroke-width="0.8">
      <line x1="40" y1="220" x2="30" y2="230"/>
      <line x1="80" y1="220" x2="70" y2="230"/>
      <line x1="120" y1="220" x2="110" y2="230"/>
      <line x1="160" y1="220" x2="150" y2="230"/>
      <line x1="200" y1="220" x2="190" y2="230"/>
      <line x1="520" y1="220" x2="510" y2="230"/>
      <line x1="560" y1="220" x2="550" y2="230"/>
      <line x1="600" y1="220" x2="590" y2="230"/>
      <line x1="640" y1="220" x2="630" y2="230"/>
      <line x1="680" y1="220" x2="670" y2="230"/>
    </g>
    <!-- Left abutment -->
    <rect x="80" y="140" width="30" height="80" fill="none" stroke="#1a2337" stroke-width="1.5"/>
    <text x="95" y="260" text-anchor="middle" font-family="Source Sans 3" font-size="9" fill="#5b6272">Abutment 1</text>
    <!-- Pier 1 -->
    <rect x="230" y="100" width="20" height="120" fill="none" stroke="#1a2337" stroke-width="1.5"/>
    <text x="240" y="260" text-anchor="middle" font-family="Source Sans 3" font-size="9" fill="#5b6272">Pier 1</text>
    <!-- Pier 2 -->
    <rect x="390" y="100" width="20" height="120" fill="none" stroke="#1a2337" stroke-width="1.5"/>
    <text x="400" y="260" text-anchor="middle" font-family="Source Sans 3" font-size="9" fill="#5b6272">Pier 2</text>
    <!-- Pier 3 -->
    <rect x="530" y="100" width="20" height="120" fill="none" stroke="#1a2337" stroke-width="1.5"/>
    <text x="540" y="260" text-anchor="middle" font-family="Source Sans 3" font-size="9" fill="#5b6272">Pier 3</text>
    <!-- Right abutment -->
    <rect x="610" y="140" width="30" height="80" fill="none" stroke="#1a2337" stroke-width="1.5"/>
    <text x="625" y="260" text-anchor="middle" font-family="Source Sans 3" font-size="9" fill="#5b6272">Abutment 2</text>
    <!-- Deck -->
    <rect x="80" y="130" width="560" height="14" fill="none" stroke="#1a2337" stroke-width="2"/>
    <!-- Bearing symbols -->
    <polygon points="96,140 88,152 104,152" fill="none" stroke="#2a6b3f" stroke-width="1.5"/>
    <polygon points="236,100 228,112 244,112" fill="none" stroke="#2a6b3f" stroke-width="1.5"/>
    <polygon points="396,100 388,112 404,112" fill="none" stroke="#2a6b3f" stroke-width="1.5"/>
    <polygon points="536,100 528,112 544,112" fill="none" stroke="#2a6b3f" stroke-width="1.5"/>
    <polygon points="626,140 618,152 634,152" fill="none" stroke="#2a6b3f" stroke-width="1.5"/>
    <!-- Soil springs -->
    <g stroke="#b8372a" stroke-width="1" fill="none">
      <path d="M 95 220 L 95 224 L 85 228 L 105 232 L 85 236 L 105 240 L 95 244"/>
      <path d="M 240 220 L 240 224 L 230 228 L 250 232 L 230 236 L 250 240 L 240 244"/>
      <path d="M 400 220 L 400 224 L 390 228 L 410 232 L 390 236 L 410 240 L 400 244"/>
      <path d="M 540 220 L 540 224 L 530 228 L 550 232 L 530 236 L 550 240 L 540 244"/>
      <path d="M 625 220 L 625 224 L 615 228 L 635 232 L 615 236 L 635 240 L 625 244"/>
    </g>
    <!-- Labels -->
    <text x="360" y="124" text-anchor="middle" font-family="Source Sans 3" font-weight="700" font-size="10" fill="#1a2337" letter-spacing="1">SUPERSTRUCTURE (beam-column elements)</text>
    <text x="360" y="62" text-anchor="middle" font-family="Source Sans 3" font-size="9" fill="#2a6b3f">Bearing pads (bilinear hysteretic)</text>
    <line x1="360" y1="66" x2="360" y2="100" stroke="#2a6b3f" stroke-width="0.8" stroke-dasharray="3 3"/>
    <text x="640" y="186" font-family="Source Sans 3" font-size="9" fill="#b8372a">p-y soil springs</text>
    <!-- Legend -->
    <rect x="40" y="20" width="10" height="8" fill="none" stroke="#1a2337" stroke-width="1.5"/>
    <text x="56" y="28" font-family="Source Sans 3" font-size="9" fill="#5b6272">Structural element</text>
    <polygon points="140,16 134,28 146,28" fill="none" stroke="#2a6b3f" stroke-width="1.5"/>
    <text x="152" y="28" font-family="Source Sans 3" font-size="9" fill="#5b6272">Bearing</text>
    <line x1="210" y1="24" x2="230" y2="24" stroke="#b8372a" stroke-width="1"/>
    <text x="236" y="28" font-family="Source Sans 3" font-size="9" fill="#5b6272">Soil spring</text>
  </svg>
  <div class="caption"><span class="fig-num">Figure 2.</span> Schematic of a representative multi-span bridge finite-element model showing superstructure beam-column elements, bearing pad connections (triangles), pier columns, abutments, and p-y soil springs (zigzag lines).</div>
</figure>

## 3.2 Material Constitutive Models

Concrete behavior is represented using the modified Kent-Park model with confinement effects per Mander et al. (1988). Reinforcing steel follows the Menegotto-Pinto model with isotropic strain hardening. These constitutive models have been validated against over 200 cyclic column tests in the NIRL structural testing database.

## 3.3 Nonlinear Dynamic Analysis

Each bridge model was subjected to the 30 ground motion realizations per scenario (7 scenarios x 30 realizations = 210 analyses per bridge). Analysis was performed using the Newmark-beta time integration method with adaptive time stepping. Engineering demand parameters (EDPs) recorded include: maximum column drift ratio, maximum bearing displacement, peak foundation rotation, and residual displacement.

## 3.4 Damage State Classification

Structural damage states were assigned based on EDP thresholds calibrated to observed bridge performance in past earthquakes. The four damage states follow the HAZUS-MH classification: Slight (minor cracking, no structural concern), Moderate (significant cracking, limited spalling), Extensive (major structural damage, possible partial collapse), Complete (structural failure, bridge impassable).
