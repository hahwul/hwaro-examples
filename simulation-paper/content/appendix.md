+++
title = "Appendix"
description = "Reproducibility details, protocol deviations, data availability, and author contributions for the SIR-ABM simulation paper."
tags = ["paper", "computational", "simulation"]
categories = ["pages"]
+++

## A1. Reproducibility

All simulations were run in Julia 1.10.2 on a 16-core AMD EPYC 7763 workstation with 128 GB RAM. Key packages: `Agents.jl` v6.0, `LightGraphs.jl` v2.0, `ApproxBayes.jl` v0.4, `Sobol.jl` v1.5. Random seed for reproducibility: `42_000_001`. The full codebase is archived at Zenodo (DOI: 10.5281/zenodo.xxxxxxx).

## A2. Protocol Deviations

Two deviations from the pre-registered protocol:

1. **Network rewiring** -- The original protocol specified static networks. During calibration, household-layer contacts were made dynamic to reflect empirical contact survey data showing weekend effects. This change is documented in the supplementary commit log.
2. **Intervention delay** -- A 3-day implementation delay was added to the intervention module after reviewer feedback, reflecting real-world policy lag. This increased the base-case final attack rate by approximately 2.4 percentage points.

## A3. Data Availability

Empirical outbreak datasets A and B are publicly available from the WHO Global Health Observatory (GHO). Dataset C was obtained under a data-sharing agreement with the Kuroda Institute and is available upon reasonable request to the corresponding author.

## A4. CRediT Author Contributions

- **Kenji Nakamura** -- Conceptualisation, methodology, software, writing (original draft), supervision
- **Francis Osei-Mensah** -- Methodology, formal analysis, validation, writing (review and editing)
- **Elsa Lindqvist** -- Software, data curation, visualisation
- **Amara Diallo** -- Formal analysis, investigation, writing (review and editing)
- **Henrik Voss** -- Resources, funding acquisition, project administration

## A5. Conflict of Interest

The authors declare no competing interests. Funding was provided by the Kuroda Institute Research Fund (Grant KI-2025-0412) and the Swiss National Science Foundation (Grant 200021_204918).
