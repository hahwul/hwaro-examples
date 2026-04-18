+++
title = "Electrode Preparation and Characterization"
description = "Co-electrodeposition of Cu-Sn alloy thin films on glassy carbon substrates. Five compositions prepared and characterized by XRD and SEM."
weight = 1
template = "post"
tags = ["electrode", "preparation", "XRD", "SEM"]
categories = ["entries"]
[extra]
entry_number = "1"
+++

<span class="timestamp">2026-04-07 / 08:30-17:00 JST</span>

## Objective

Prepare Cu-Sn alloy electrodes with five different Cu:Sn molar ratios (pure Cu, 9:1, 7:3, 1:1, 3:7) via co-electrodeposition and characterize morphology and crystal structure.

## Materials

- Glassy carbon discs (5 mm dia., polished to 0.05 um alumina)
- CuSO4 5H2O (Wako, 99.9%), SnCl2 2H2O (Wako, 99.9%)
- H2SO4 (conc., for pH adjustment)
- Deposition bath: variable Cu/Sn ratios at pH 1.8

## Deposition Conditions

| Target Ratio | [Cu2+] (mM) | [Sn2+] (mM) | E_dep (V vs. Ag/AgCl) | Time (s) | Film (nm) |
|--------------|-------------|-------------|----------------------|----------|-----------|
| Pure Cu      | 50          | 0           | -0.40                | 300      | 380       |
| 9:1          | 50          | 8           | -0.45                | 300      | 410       |
| 7:3          | 50          | 21          | -0.50                | 300      | 420       |
| 1:1          | 50          | 50          | -0.55                | 300      | 450       |
| 3:7          | 21          | 50          | -0.60                | 300      | 440       |

## XRD Results

All films show expected alloy phases. Cu5Sn (eta-phase) dominates for Cu:Sn ratios of 7:3 and 1:1. Pure Cu and 9:1 show fcc Cu with minor Sn incorporation. The 3:7 sample shows Cu6Sn5 as the primary phase.

## SEM Observations

<!-- SVG illustrating electrode surface morphology schematic -->
<figure>
<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" aria-label="Schematic of electrode surface morphologies" style="width:100%;max-width:700px;display:block;margin:1rem auto;">
  <defs>
    <pattern id="g1" width="16" height="16" patternUnits="userSpaceOnUse">
      <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#d4dde4" stroke-width="0.4"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="700" height="200" fill="#faf9f4"/>
  <rect x="0" y="0" width="700" height="200" fill="url(#g1)"/>
  <!-- Pure Cu: smooth grains -->
  <text x="70" y="20" text-anchor="middle" font-family="'Caveat',cursive" font-size="11" font-weight="700" fill="#1a1e28">Pure Cu</text>
  <rect x="20" y="30" width="100" height="100" rx="2" fill="none" stroke="#1a1e28" stroke-width="1"/>
  <circle cx="50" cy="65" r="14" fill="none" stroke="#2a5faa" stroke-width="0.8"/>
  <circle cx="78" cy="72" r="12" fill="none" stroke="#2a5faa" stroke-width="0.8"/>
  <circle cx="62" cy="95" r="15" fill="none" stroke="#2a5faa" stroke-width="0.8"/>
  <circle cx="92" cy="100" r="10" fill="none" stroke="#2a5faa" stroke-width="0.8"/>
  <text x="70" y="148" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">smooth, ~1 um grains</text>
  <!-- 7:3: dendritic -->
  <text x="210" y="20" text-anchor="middle" font-family="'Caveat',cursive" font-size="11" font-weight="700" fill="#1a1e28">Cu7Sn3</text>
  <rect x="160" y="30" width="100" height="100" rx="2" fill="none" stroke="#1a1e28" stroke-width="1"/>
  <path d="M185,100 L190,75 L195,85 L200,55 L205,70 L210,45 L215,65 L220,50 L225,75 L230,60 L235,80" fill="none" stroke="#2c5f2d" stroke-width="1"/>
  <path d="M175,110 L180,90 L185,95 L190,75 L195,85" fill="none" stroke="#2c5f2d" stroke-width="0.8"/>
  <path d="M225,105 L230,85 L235,90 L240,70 L245,80" fill="none" stroke="#2c5f2d" stroke-width="0.8"/>
  <text x="210" y="148" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">dendritic, high SA</text>
  <!-- 1:1: cauliflower -->
  <text x="350" y="20" text-anchor="middle" font-family="'Caveat',cursive" font-size="11" font-weight="700" fill="#1a1e28">Cu1Sn1</text>
  <rect x="300" y="30" width="100" height="100" rx="2" fill="none" stroke="#1a1e28" stroke-width="1"/>
  <path d="M320,110 Q325,90 330,85 Q335,75 340,80 Q345,70 350,65 Q355,72 360,68 Q365,78 370,82 Q375,92 380,110" fill="none" stroke="#b83220" stroke-width="1"/>
  <path d="M330,105 Q335,95 340,92 Q345,85 350,88 Q355,82 360,85 Q365,95 370,105" fill="none" stroke="#b83220" stroke-width="0.8"/>
  <text x="350" y="148" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">cauliflower clusters</text>
  <!-- 3:7: amorphous-looking -->
  <text x="490" y="20" text-anchor="middle" font-family="'Caveat',cursive" font-size="11" font-weight="700" fill="#1a1e28">Cu3Sn7</text>
  <rect x="440" y="30" width="100" height="100" rx="2" fill="none" stroke="#1a1e28" stroke-width="1"/>
  <path d="M455,100 Q460,92 467,88 Q475,84 480,90 Q485,85 492,82 Q500,86 505,92 Q510,98 520,100" fill="none" stroke="#c07020" stroke-width="0.8"/>
  <path d="M455,80 Q460,74 467,72 Q475,70 480,74 Q485,70 492,68 Q500,72 505,76 Q510,80 520,82" fill="none" stroke="#c07020" stroke-width="0.8"/>
  <path d="M455,60 Q465,56 475,58 Q485,55 495,56 Q505,60 515,62" fill="none" stroke="#c07020" stroke-width="0.8"/>
  <text x="490" y="148" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="8" fill="#5a6070">layered, compact</text>
  <!-- Scale bar -->
  <text x="630" y="20" text-anchor="middle" font-family="'Caveat',cursive" font-size="11" font-weight="700" fill="#1a1e28">Scale</text>
  <rect x="600" y="30" width="60" height="100" rx="2" fill="none" stroke="#1a1e28" stroke-width="1"/>
  <line x1="610" y1="90" x2="650" y2="90" stroke="#1a1e28" stroke-width="1.5"/>
  <line x1="610" y1="86" x2="610" y2="94" stroke="#1a1e28" stroke-width="1"/>
  <line x1="650" y1="86" x2="650" y2="94" stroke="#1a1e28" stroke-width="1"/>
  <text x="630" y="84" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="9" fill="#1a1e28">2 um</text>
</svg>
<figcaption style="text-align:center;font-size:0.78rem;color:#5a6070;font-family:'IBM Plex Mono',monospace;">Fig. 3. Schematic representation of SEM-observed surface morphologies for different Cu:Sn compositions.</figcaption>
</figure>

<div class="observation note">
<strong>Note:</strong> The Cu7Sn3 sample shows the highest surface roughness by the dendritic morphology. This likely contributes to the enhanced catalytic activity observed in later electrolysis experiments. ECSA measurements planned for Entry 2.
</div>
