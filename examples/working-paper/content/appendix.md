+++
title = "Appendix"
description = "Supplementary materials including data availability, pre-registration, and author contributions."
tags = ["paper", "appendix", "supplementary"]
+++

<div class="draft-banner">
  <strong>DRAFT v0.3</strong> &mdash; Last updated 2026-04-10 &mdash; Not for citation
</div>

<article class="paper-article">
  <div class="paper-wrap">

<header class="paper-section-header">
  <div class="paper-section-eyebrow">Working Paper -- Supplementary Materials</div>
  <h1 class="paper-section-title">Appendix</h1>
</header>

## A. Data Availability

### Platform A

Synthetic applicant profiles and audit results for Platform A are available in the project repository. The dataset includes 4,000 profiles with controlled demographic variation across four protected classes. Raw API responses are anonymised and stored in compliance with the platform's terms of service. Access requests should be directed to the corresponding author.

### Platform B

Synthetic applicant profiles and audit results for Platform B follow the same structure as Platform A. The dataset includes 4,000 profiles. Platform B required additional anonymisation of the recommendation scores, which are provided as rank-normalised values rather than raw scores. Full documentation of the anonymisation procedure is included in the repository.

### Platform C

<div class="todo-block">
  <p><span class="todo-marker">[TODO]</span> <strong>Data availability statement for Platform C.</strong> The data access agreement with Platform C is under legal review. Once finalised, the terms will determine what data can be shared publicly. At minimum, we expect to provide aggregated audit results and the synthetic profile generation code. The raw API responses may be subject to restrictions. This section will be updated when the agreement is executed.</p>
</div>

---

## B. Pre-registration

This study was pre-registered on the Open Science Framework on 2025-12-01 (registration ID: OSF-2025-AH-FAIRHIRE). The pre-registration specifies:

- **Primary hypotheses:** That at least one of the three audited platforms would show statistically significant disparate impact (DIR < 0.80) for at least one protected class.
- **Audit protocol:** The three-stage audit framework as described in Section 2. Minor modifications were made to Stage 2 during pilot testing (see revision history, v0.2, 2026-02-10).
- **Sample size:** 4,000 synthetic profiles per platform, determined by power analysis assuming a minimum detectable effect size of DIR = 0.75 with 80% power at alpha = 0.05.
- **Analysis plan:** Disparate impact ratios calculated using the four-fifths rule, with bootstrap confidence intervals (1,000 resamples) and permutation tests for statistical significance.

Deviations from the pre-registered plan:

1. The addition of bootstrap confidence intervals (not in the original plan, added for robustness).
2. The inclusion of counterfactual testing at Stage 2b (added based on pilot results).
3. The delayed inclusion of Platform C (originally planned for v0.2, now expected in v0.4).

---

## C. CRediT Author Contributions

<table class="paper-table">
  <thead>
    <tr>
      <th>Role</th>
      <th>Contributors</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Conceptualisation</td>
      <td>Amira Hassan, David Kim</td>
    </tr>
    <tr>
      <td>Methodology</td>
      <td>Amira Hassan, Sven Mueller, David Kim</td>
    </tr>
    <tr>
      <td>Software</td>
      <td>David Kim, Lucia Fernandez</td>
    </tr>
    <tr>
      <td>Formal Analysis</td>
      <td>Sven Mueller, Lucia Fernandez</td>
    </tr>
    <tr>
      <td>Investigation</td>
      <td>David Kim, Lucia Fernandez, Amira Hassan</td>
    </tr>
    <tr>
      <td>Data Curation</td>
      <td>Lucia Fernandez, David Kim</td>
    </tr>
    <tr>
      <td>Writing -- Original Draft</td>
      <td>Amira Hassan, David Kim</td>
    </tr>
    <tr>
      <td>Writing -- Review and Editing</td>
      <td>All authors</td>
    </tr>
    <tr>
      <td>Supervision</td>
      <td>Amira Hassan, Beatrice Okonkwo</td>
    </tr>
    <tr>
      <td>Policy Analysis</td>
      <td>Beatrice Okonkwo</td>
    </tr>
    <tr>
      <td>Funding Acquisition</td>
      <td>Amira Hassan, Beatrice Okonkwo</td>
    </tr>
  </tbody>
</table>

---

## D. Funding

This work was supported by the European Research Council (ERC Starting Grant No. 2025-FAIRHIRE-101), the Natural Sciences and Engineering Research Council of Canada (NSERC Discovery Grant), and the Alexander von Humboldt Foundation. Beatrice Okonkwo acknowledges support from the University of Lagos Research Excellence Fund. The funders had no role in study design, data collection, analysis, or the decision to publish.

---

## E. Conflicts of Interest

The authors declare no conflicts of interest. None of the authors have financial relationships with the platforms audited in this study. Platform names are anonymised throughout the paper.

<div class="paper-section-footer">
  <a href="/">&larr; Back to abstract</a>
</div>

  </div>
</article>
