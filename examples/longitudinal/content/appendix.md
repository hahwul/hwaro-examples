+++
title = "Appendix"
description = "Supplementary materials including reproducibility details, Mplus syntax, data availability, author contributions, and conflict-of-interest disclosures."
tags = ["longitudinal", "appendix", "reproducibility"]
+++

<header class="paper-section-header">
  <p class="paper-section-eyebrow">SUPPLEMENTARY</p>
  <h1 class="paper-section-title">Appendix</h1>
</header>

## A. Reproducibility

All analyses were conducted in Mplus 8.9 (Muthen and Muthen, 2024) running on Ubuntu 22.04 LTS. Mplus input files, simulated demonstration data, and R scripts for figure generation are archived at Zenodo (doi: 10.5281/zenodo.example.2026.longitudinal). The random seed for all Monte Carlo simulations was fixed at 20140901 (study start date).

## B. Mplus syntax (linear LGCM)

```
TITLE: Processing Speed Linear Growth Model;
DATA: FILE = scac_ps.dat;
VARIABLE: NAMES = id ps_t1 ps_t2 ps_t3 ps_t4 ps_t5
          age edu apoe4 cvr;
          MISSING = ALL(-999);
          USEVARIABLES = ps_t1-ps_t5 age edu apoe4 cvr;
ANALYSIS: ESTIMATOR = MLR;
MODEL:
  i s | ps_t1@0 ps_t2@1 ps_t3@2 ps_t4@3 ps_t5@4;
  i s ON age edu apoe4 cvr;
OUTPUT: STDYX CINTERVAL;
```

## C. Data availability

The original participant-level data cannot be shared publicly due to Swedish ethical and data-protection regulations. Researchers may request access through the Karolinska Institute Data Access Committee (contact: data-access@ki.se). A fully synthetic dataset with identical distributional properties is provided in the Zenodo archive to allow replication of all reported analyses.

## D. CRediT author contributions

- **Renate Hartmann:** Conceptualisation, Methodology, Formal Analysis, Writing - Original Draft, Supervision
- **Joseph Okonkwo:** Methodology, Formal Analysis, Writing - Review and Editing
- **Anna Lindberg:** Investigation, Data Curation, Project Administration
- **Shinji Nakamura:** Formal Analysis, Visualisation, Software
- **Giulia Russo:** Investigation, Writing - Review and Editing

## E. Conflict of interest

The authors declare no competing interests.

## F. Funding

This work was supported by the Swedish Research Council (grant 2013-04815), the Karolinska Institute Strategic Research Programme in Epidemiology, and the US National Institute on Aging (grant R01 AG058302). The funders had no role in study design, data collection, analysis, or manuscript preparation.
