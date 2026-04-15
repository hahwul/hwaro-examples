+++
title = "Unverifiable Raw Data"
description = "Failure of the authors to produce raw sequencing files, sample metadata, and analysis code requested by the investigation committee."
weight = 3
template = "post"
tags = ["reproducibility", "data-sharing", "verification"]
categories = ["sections"]
[extra]
section_number = "3"
+++

<div class="editor-note">
  <p class="note-label">Documentation Failure</p>
  <p>The original article's Data Availability Statement claimed that all raw sequencing data had been deposited in the European Nucleotide Archive (ENA) under accession PRJEB72XXX and that analysis code was available at a public GitHub repository. The investigation confirmed that neither resource contained usable files at the time of the investigation.</p>
</div>

## Timeline of Data Requests

| Date | Request | Outcome |
|------|---------|---------|
| 2025-03-14 | ENA accession PRJEB72XXX (as cited) | Accession does not exist |
| 2025-04-02 | Raw FASTQ files from corresponding author | No response (30 days) |
| 2025-05-15 | GitHub repo (as cited) | Repository was deleted 2025-03-20 |
| 2025-06-10 | Analysis pipeline reconstruction via institutional IT | Institution reports no backup exists |
| 2025-09-28 | Last-chance request to provide any raw data | 3 Excel files provided, contents inconsistent with supplementary tables |

## Specific Verification Failures

1. **Sequencing reads.** The paper states 127 million paired-end reads were generated across the validation cohort. No FASTQ files, BAM files, or intermediate count tables matching this volume were ever produced.

2. **Sample metadata.** The paper references clinical annotations (tumor staging, treatment history, comorbidities) for 1,247 patients. Consent forms and institutional review board approvals from the three claimed participating hospitals could not be located.

3. **Analysis code.** The data processing pipeline described in the Methods section (DADA2 --> QIIME2 --> custom R scripts) cannot be reproduced without the missing intermediate files. The 3 Excel files provided in September 2025 contain summary statistics only, not the primary data.

## What Was Invalidated

<div class="retracted-block">
<p>All empirical claims in the original article, including the cohort size, sequencing depth, predictive signature identification, and cross-center validation. Without verifiable primary data, none of the quantitative findings can be independently confirmed.</p>
</div>
