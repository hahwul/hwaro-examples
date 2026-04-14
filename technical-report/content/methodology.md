+++
title = "Methodology"
description = "Overview of the analytical framework, modeling approach, and validation procedures used in this technical report."
tags = ["paper", "technical-report", "methodology"]
+++

## Analytical Framework

This report employs a three-stage analytical framework: (1) seismic hazard characterization, (2) structural demand analysis, and (3) resilience quantification. Each stage uses validated models and established engineering practice standards as specified in AASHTO Guide Specifications for LRFD Seismic Bridge Design and NIRL Standard Practice for Infrastructure Resilience Assessment (NIRL-SP-2024-001).

### Seismic Hazard Inputs

Seven scenario earthquakes were selected to span the range of plausible seismic hazards in the Pacific Northwest corridor, from a moderate crustal event (Mw 6.5 on the Portland Hills Fault) to the full-rupture Cascadia Subduction Zone event (Mw 9.0-9.1). Ground motion time histories were generated using the USGS ShakeMap framework with site-specific amplification factors derived from Vs30 measurements at each bridge location.

### Structural Modeling

All 142 bridges were modeled using three-dimensional nonlinear finite-element representations in OpenSees. Models were calibrated against available experimental data from NIRL shake-table tests and field measurements from the 2001 Nisqually earthquake. Key modeling parameters include: concrete constitutive relationships (modified Kent-Park), steel reinforcement behavior (Menegotto-Pinto), soil-structure interaction (p-y curves from API RP2A), and bearing pad response (bilinear hysteretic models).

### Resilience Metrics

Resilience is quantified through three complementary metrics: (a) structural damage state probabilities for individual bridges, derived from fragility curves specific to each bridge type; (b) restoration time estimates using the NIRL Bridge Repair Model (BRM v3.2); (c) network connectivity indices measuring the fraction of origin-destination pairs that remain connected as bridges are sequentially removed from and restored to the network.
