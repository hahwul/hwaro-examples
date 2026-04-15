+++
title = "Data Fabrication Findings"
description = "Evidence of fabricated sequencing counts in supplementary tables S3, S7, and S12."
weight = 1
template = "post"
tags = ["fabrication", "data-integrity", "sequencing"]
categories = ["sections"]
[extra]
section_number = "1"
+++

<div class="editor-note">
  <p class="note-label">Concern Summary</p>
  <p>Statistical forensic analysis of supplementary tables S3, S7, and S12 revealed patterns inconsistent with genuine high-throughput sequencing data. Digit-frequency tests (Benford's law), variance-to-mean ratios for Poisson-distributed counts, and terminal-digit preferences all deviate significantly from expected values.</p>
</div>

## Specific Findings

**Table S3 (Baseline cohort microbiome counts):**

- Terminal digit distribution: excess of 0s and 5s (chi-squared p < 0.0001 vs. uniform)
- Expected fraction of 0 and 5: 0.20 combined. Observed: 0.47
- Variance-to-mean ratio: 0.31 (Poisson expectation approximately 1.0, overdispersed negative binomial expectation >> 1.0)

**Table S7 (Validation cohort discovery set):**

- 23 of 247 bacterial taxa showed identical count patterns across 14 independent patient samples (probability < 10^-15 under genuine sampling)
- Read depth normalizations do not explain the pattern

**Table S12 (Model performance by center):**

- Reported AUROC values across 3 centers (Paris, Milan, Amsterdam) suspiciously identical to 3 decimal places: 0.942, 0.941, 0.943
- True independent measurements from similar-sized cohorts would be expected to vary by at least 0.02--0.03 due to sampling variability

## Authors' Response

The corresponding author (Okonkwo) provided a 42-page response on 2026-02-15 disputing these findings. The investigation committee, including two external statistical reviewers, found the response did not address the core concerns. The committee voted 7--0 to recommend retraction.

## What Was Invalidated

<div class="retracted-block">
<p>All AUROC values, sensitivity/specificity estimates, subgroup analyses, and projected clinical impact estimates derived from Tables S3, S7, and S12 are invalidated. Figures 2, 3, 4 and Table 2 of the main text all depend on these data.</p>
</div>
