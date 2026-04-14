+++
title = "Appendix"
description = "Supplementary materials including DAG specification, data availability, author contributions, and conflict-of-interest disclosures."
tags = ["cohort", "appendix", "DAG"]
+++

<header class="paper-section-header">
  <p class="paper-section-eyebrow">SUPPLEMENTARY</p>
  <h1 class="paper-section-title">Appendix</h1>
</header>

## A. Directed Acyclic Graph (DAG)

<figure class="figure">
  <svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Directed acyclic graph showing causal relationships between benzene exposure, confounders, and haematological malignancy">
    <!-- Exposure -->
    <rect x="40" y="80" width="140" height="45" fill="none" stroke="#2a5c8a" stroke-width="2"/>
    <text x="110" y="100" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="10" fill="#2a5c8a">BENZENE</text>
    <text x="110" y="115" text-anchor="middle" font-family="IBM Plex Sans" font-size="9" fill="#1a2030">Cumulative ppm-yr</text>
    <!-- Outcome -->
    <rect x="520" y="80" width="160" height="45" fill="none" stroke="#b85c2a" stroke-width="2"/>
    <text x="600" y="100" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="10" fill="#b85c2a">HAEM. MALIGNANCY</text>
    <text x="600" y="115" text-anchor="middle" font-family="IBM Plex Sans" font-size="9" fill="#1a2030">ICD-10 C81-C96</text>
    <!-- Causal arrow -->
    <line x1="180" y1="102" x2="520" y2="102" stroke="#1a2030" stroke-width="2" marker-end="url(#arrowC)"/>
    <!-- Confounders -->
    <rect x="260" y="10" width="100" height="35" fill="none" stroke="#667080" stroke-width="1.5"/>
    <text x="310" y="32" text-anchor="middle" font-family="IBM Plex Sans" font-size="9" fill="#667080">Age, Sex</text>
    <rect x="400" y="10" width="100" height="35" fill="none" stroke="#667080" stroke-width="1.5"/>
    <text x="450" y="32" text-anchor="middle" font-family="IBM Plex Sans" font-size="9" fill="#667080">Smoking</text>
    <rect x="260" y="170" width="120" height="35" fill="none" stroke="#667080" stroke-width="1.5"/>
    <text x="320" y="192" text-anchor="middle" font-family="IBM Plex Sans" font-size="9" fill="#667080">Toluene/Xylene</text>
    <!-- Confounder arrows -->
    <line x1="310" y1="45" x2="150" y2="80" stroke="#667080" stroke-width="1" marker-end="url(#arrowC)"/>
    <line x1="310" y1="45" x2="560" y2="80" stroke="#667080" stroke-width="1" marker-end="url(#arrowC)"/>
    <line x1="450" y1="45" x2="580" y2="80" stroke="#667080" stroke-width="1" marker-end="url(#arrowC)"/>
    <line x1="320" y1="170" x2="150" y2="125" stroke="#667080" stroke-width="1" marker-end="url(#arrowC)"/>
    <line x1="320" y1="170" x2="560" y2="125" stroke="#667080" stroke-width="1" marker-end="url(#arrowC)"/>
    <defs>
      <marker id="arrowC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#667080"/>
      </marker>
    </defs>
  </svg>
  <figcaption class="caption"><span class="fig-num">Figure A1.</span> Directed acyclic graph (DAG) for the association between cumulative benzene exposure and haematological malignancy. Age, sex, smoking, and co-exposure to toluene/xylene are identified as confounders requiring adjustment. The DAG was constructed using DAGitty and reviewed by two epidemiologists.</figcaption>
</figure>

## B. Software

All analyses were conducted in R version 4.3.2 using the survival (version 3.5-7), survminer (version 0.4.9), and timereg (version 2.0.5) packages. DAG analysis was performed in DAGitty version 3.0. Reproducible analysis scripts are archived at Zenodo (doi: 10.5281/zenodo.example.2026.cohort).

## C. Data Availability

Individual-level data cannot be shared publicly due to occupational health confidentiality agreements. Aggregate data tables and analysis scripts are available from the corresponding author upon reasonable request. A synthetic dataset preserving distributional properties is provided in the Zenodo archive.

## D. CRediT Author Contributions

- **Chioma Okafor:** Conceptualisation, Methodology, Formal Analysis, Writing - Original Draft
- **Erik Lindstrom:** Exposure Assessment, Data Curation, Writing - Review and Editing
- **Rashida Patel:** Methodology, Supervision, Writing - Review and Editing
- **Hideo Nakamura:** Formal Analysis, Visualisation
- **Felipe da Silva:** Investigation, Data Curation

## E. Conflict of Interest

The authors declare no competing interests.

## F. Funding

This work was supported by UK Research and Innovation (UKRI grant MR/S024654/1), the Swedish Research Council for Health, Working Life and Welfare (FORTE 2020-00123), and the Japan Society for the Promotion of Science (KAKENHI 22K10462).
