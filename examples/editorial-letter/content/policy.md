+++
title = "Editorial Policy"
description = "New editorial policy on reproducibility requirements, effective Volume 60 (January 2027)."
tags = ["paper", "light", "editorial", "authority", "statement"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Policy Statement &middot; Effective January 2027</p>
  <h1 class="paper-title">Reproducibility Policy for Research Articles</h1>
  <p class="paper-subtitle">Approved by the Editorial Board, 28 March 2026. Effective for all submissions to Volume 60 onwards.</p>
</header>

<!-- Policy document header rule -->
<svg viewBox="0 0 740 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width:100%;height:20px;display:block;margin:0 auto 2rem;">
  <line x1="0" y1="4" x2="740" y2="4" stroke="#1a1612" stroke-width="1.5"/>
  <line x1="0" y1="8" x2="740" y2="8" stroke="#1a1612" stroke-width="0.5"/>
  <line x1="0" y1="16" x2="740" y2="16" stroke="#c8c0b0" stroke-width="0.5"/>
</svg>

## 1. Scope

This policy applies to all original research articles, review articles with computational components, and methods papers submitted to the Journal of Computational Sciences beginning with Volume 60, Issue 1 (January 2027). Editorials, letters, and purely theoretical contributions are exempt.

## 2. Code Availability

All source code necessary to reproduce the computational results reported in a manuscript must be deposited in a publicly accessible, persistent repository with a digital object identifier (DOI) prior to acceptance. Acceptable repositories include Zenodo, Figshare, institutional repositories with DOI minting capability, and language-specific archives (e.g., CRAN, PyPI) when accompanied by a version-pinned DOI.

Code must be accompanied by:

- A README describing the purpose, dependencies, and execution instructions
- A licence file (open-source licences strongly preferred)
- A test suite demonstrating expected outputs

## 3. Data Availability

Raw data and processed datasets necessary for reproduction must be deposited in a domain-appropriate certified repository. Where data cannot be shared due to ethical, legal, or proprietary constraints, authors must provide:

- A data availability statement explaining the restriction
- Synthetic or simulated datasets that enable methodological reproduction
- Contact information for data access requests
- Ethics board documentation authorising the data sharing arrangement chosen

## 4. Computational Environment

Authors must specify the computational environment used to generate results. Acceptable approaches include, in order of preference:

1. **Container images** (Docker, Singularity) deposited with the code repository
2. **Environment lockfiles** (conda environment.yml, pip requirements.txt with pinned versions, Nix flake.lock)
3. **Virtual machine images** for hardware-specific computations
4. **Detailed environment documentation** as a last resort, including OS version, compiler versions, library versions, and hardware specifications

## 5. Reproducibility Checklist

All submissions must include a completed Reproducibility Checklist (available on the journal website) covering 22 items across five categories:

| Category | Items | Description |
|---|---|---|
| Code completeness | 5 | All scripts, build files, and dependencies documented |
| Data provenance | 4 | Data sources, processing steps, and access methods |
| Environment specification | 4 | Hardware, software, and configuration details |
| Results verification | 5 | Expected outputs, tolerance thresholds, and test cases |
| Documentation quality | 4 | README, comments, method description alignment |

## 6. Review Process

Manuscripts will undergo a two-track review process:

**Track A (Scientific Merit):** Traditional peer review evaluating the contribution, methodology, and conclusions.

**Track B (Reproducibility):** Independent assessment by a dedicated Reproducibility Editor who will:

- Verify that code executes without errors in the specified environment
- Confirm that deposited data matches the descriptions in the manuscript
- Spot-check at least two key computational results
- Evaluate the completeness and clarity of documentation

Both tracks must pass for acceptance. Track B reviewers will receive explicit credit and compensation through the journal's reviewer recognition programme.

## 7. Transition Period

To support the transition, the journal will offer:

- Template repositories for common languages and frameworks
- A reproducibility helpdesk staffed by editorial assistants
- Formative feedback (without rejection) during the first two issues (Vol. 60, Issues 1-2)
- Fee waivers for archival costs incurred by authors from low-income institutions

## 8. Enforcement

Non-compliance discovered after publication will be addressed through the following escalation:

1. Author notification and 90-day remediation period
2. Editorial expression of concern
3. Formal correction or retraction if remediation is not completed

This policy will be reviewed annually by the Editorial Board.

<!-- Policy signature block -->
<div class="editor-signature">
  <svg viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg" aria-label="Editor signature" style="width:280px;height:80px;display:block;margin-left:auto;">
    <path d="M20,55 C25,20 35,18 40,35 C45,52 50,58 55,40 C60,22 65,20 70,38" fill="none" stroke="#1a1612" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M75,42 C80,30 90,25 100,32 C105,35 108,42 105,48" fill="none" stroke="#1a1612" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M108,28 L108,52" fill="none" stroke="#1a1612" stroke-width="1" stroke-linecap="round"/>
    <path d="M115,35 C120,25 135,22 145,30 C150,33 148,42 140,45 C132,48 120,44 118,38" fill="none" stroke="#1a1612" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M150,30 C155,25 160,28 162,35 L165,50" fill="none" stroke="#1a1612" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M170,32 C172,28 178,26 185,30 C190,33 192,40 188,45 C184,50 175,48 172,42" fill="none" stroke="#1a1612" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M195,28 C198,22 205,20 210,25 C215,30 218,40 220,50" fill="none" stroke="#1a1612" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M225,38 C228,32 235,30 240,34 C245,38 248,45 250,50" fill="none" stroke="#1a1612" stroke-width="1" stroke-linecap="round"/>
    <path d="M20,62 C80,60 180,58 260,62" fill="none" stroke="#1a1612" stroke-width="0.5" stroke-linecap="round"/>
  </svg>
  <p class="sig-name">Prof. Eleanor Whitfield, FRS</p>
  <p class="sig-title">Editor-in-Chief</p>
  <p class="sig-title">On behalf of the Editorial Board</p>
</div>
