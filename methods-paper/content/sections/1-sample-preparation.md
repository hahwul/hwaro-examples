+++
title = "1. Sample Preparation"
description = "Standardized cell culture, DAPI staining, and mounting procedures to ensure consistent fluorescence signal across experiments."
weight = 1
template = "post"
tags = ["paper", "light", "methods", "protocol", "technical"]
categories = ["sections"]

[extra]
section_number = "1"
+++

## Overview

Consistent sample preparation is the foundation of reproducible automated cell counting. Variability in fixation, staining, or mounting directly affects fluorescence intensity distributions, which in turn alter segmentation accuracy. This section specifies all preparation parameters required to achieve the signal uniformity assumed by subsequent pipeline stages.

## Cell Culture

<div class="param-box">
  <p class="param-label">Cell Culture Parameters</p>
  <dl>
    <dt>Cell line</dt>
    <dd>HeLa (ATCC CCL-2), passages 15-30</dd>
    <dt>Medium</dt>
    <dd>DMEM + 10% FBS + 1% penicillin-streptomycin</dd>
    <dt>Seeding density</dt>
    <dd>Low: 2.5 x 10^4 cells/cm^2; Medium: 7.5 x 10^4; High: 1.5 x 10^5</dd>
    <dt>Substrate</dt>
    <dd>Glass coverslips (#1.5, 170 um), 18 mm diameter</dd>
    <dt>Incubation</dt>
    <dd>37 C, 5% CO2, 24 h to reach target confluence</dd>
  </dl>
</div>

### Coverslip Preparation

1. Place coverslips in a glass Petri dish and sonicate in 1M HCl for 30 minutes
2. Rinse three times with ultrapure water (Milli-Q, resistivity 18.2 MOhm-cm)
3. Sterilize by autoclaving at 121 C for 20 minutes
4. Coat with poly-L-lysine (0.01% w/v, 30 minutes at room temperature) if needed for adherent cell types other than HeLa

## Fixation Protocol

<div class="protocol-step">
  <span class="step-number">1a</span>
  <p class="step-title">Fixation</p>
  <p class="step-detail">Remove culture medium and wash once with warm PBS (37 C). Fix cells in 4% paraformaldehyde in PBS for 15 minutes at room temperature. Wash three times with PBS, 5 minutes each wash. Cells may be stored in PBS at 4 C for up to 7 days before staining.</p>
</div>

### Critical Notes on Fixation

- **Methanol fixation is not recommended** for this protocol. Methanol can extract lipids and cause nuclear shrinkage, altering apparent nuclear size and complicating the size-based filtering in Step 4.
- Paraformaldehyde concentration must be freshly prepared or from a sealed ampule opened within 24 hours. Aged PFA solutions produce higher autofluorescence background.
- Over-fixation (>20 minutes) can reduce DAPI penetration and lower signal intensity.

## DAPI Staining

<div class="protocol-step step-green">
  <span class="step-number">1b</span>
  <p class="step-title">DAPI Staining</p>
  <p class="step-detail">Dilute DAPI stock (5 mg/mL in DMSO) to a working concentration of 300 nM in PBS. Apply 200 uL per coverslip. Incubate for 5 minutes at room temperature in the dark. Wash twice with PBS, 3 minutes each.</p>
</div>

<div class="param-box">
  <p class="param-label">Staining Parameters</p>
  <dl>
    <dt>DAPI concentration</dt>
    <dd>300 nM (working solution)</dd>
    <dt>Incubation time</dt>
    <dd>5 min at room temperature</dd>
    <dt>Volume per coverslip</dt>
    <dd>200 uL (18 mm coverslip)</dd>
    <dt>Post-stain washes</dt>
    <dd>2 x PBS, 3 min each</dd>
  </dl>
</div>

<div class="decision-callout">
  <p class="decision-label">Decision Point: Staining Intensity</p>
  <p class="decision-text">If fluorescence signal appears dim during initial acquisition (mean nuclear intensity below 500 AU at standard exposure), increase DAPI concentration to 600 nM. If signal is saturated (pixel values at 4095 in 12-bit images), reduce to 150 nM. These adjustments are preferable to modifying exposure time, which affects the signal-to-noise ratio.</p>
</div>

## Mounting

Mount coverslips cell-side-down onto glass slides using 10 uL of ProLong Gold Antifade (Thermo Fisher P36930). Avoid air bubbles by lowering the coverslip at a 45-degree angle. Seal edges with clear nail polish. Allow mounting medium to cure for 24 hours at room temperature in the dark before imaging.

### Quality Criteria for Mounted Samples

- No visible air bubbles within the imaging area
- Coverslip lies flat (no tilting visible under phase contrast)
- DAPI signal is uniform when examined at 10x magnification
- No crystalline artifacts from dried mounting medium at coverslip edges
