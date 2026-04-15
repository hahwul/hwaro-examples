+++
title = "Version Changelog"
description = "Detailed changelog of all preprint revisions."
tags = ["changelog", "versions", "revisions"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Revision History</p>
  <h1 class="paper-title">Changelog</h1>
</header>

## v3 -- 2026-04-12 (Current)

<span class="version-badge current">CURRENT VERSION</span>

**Major revision.** Addresses reviewer feedback from medRxiv editorial screening and community comments.

- **Added:** Full ablation study (Section 3.4) quantifying individual contribution of each data stream and architectural component
- **Added:** Conformal prediction calibration (Section 2.4) for distribution-free uncertainty quantification
- **Expanded:** Country coverage from 32 to 47 countries (added 15 countries in South America, Southeast Asia, and sub-Saharan Africa)
- **Fixed:** Corrected a data leakage bug in the temporal split for 6 countries where reporting delays caused future data to contaminate training windows (see erratum note in Section 2.1)
- **Updated:** All results tables and figures reflect the corrected dataset
- **Added:** Ethics statement and computational requirements in Data Availability

## v2 -- 2026-04-05

<span class="version-badge previous">SUPERSEDED</span>

- **Added:** Wastewater surveillance data layer (892 treatment plants)
- **Expanded:** Country coverage from 12 to 32 countries
- **Added:** RSV as third pathogen (v1 covered only influenza and COVID-19)
- **Improved:** Graph construction now uses weekly mobility data instead of static pre-pandemic estimates
- **Note:** This version contained a data leakage bug affecting 6 countries (corrected in v3)

## v1 -- 2026-03-28

<span class="version-badge previous">SUPERSEDED</span>

- **Initial submission** to medRxiv
- 12 countries (European region only)
- 2 pathogens (influenza, COVID-19)
- No wastewater data, no conformal calibration
- Static mobility graph based on 2019 census commuter flows
