+++
title = "3. Inadequate Subgroup Analysis"
description = "The absence of disaggregated performance metrics for clinically important subgroups undermines confidence in equitable deployment."
weight = 3
template = "post"
tags = ["correspondence", "equity", "subgroup-analysis"]
categories = ["sections"]
[extra]
section_number = "3"
+++

<span class="urgency-badge moderate">Moderate Urgency</span>

The study reports aggregate performance metrics across the full validation cohort but does not provide disaggregated performance by age group, sex, ethnicity, primary language, or presenting complaint category. This omission is particularly concerning given the growing evidence that clinical prediction models, including AI-based systems, may perform differently across demographic subgroups.

The four participating emergency departments serve populations with substantially different demographic profiles (urban academic, suburban community, rural critical access, and paediatric specialist). Aggregate metrics across these sites may mask site-level or subgroup-level performance disparities that would be clinically and ethically unacceptable.

We would urge the authors to provide, at minimum:

- AUROC stratified by age decile, sex, and self-reported ethnicity
- Sensitivity and specificity at the chosen operating threshold for each site independently
- Performance metrics for the 10 most common presenting complaint categories
- A formal assessment of differential calibration across subgroups

<div class="concern-block methodological">
  <h4>Impact Assessment</h4>
  <p>Without subgroup analysis, it is impossible to determine whether the system maintains acceptable performance across the full range of patients it would encounter in deployment. A system with excellent aggregate AUROC but poor sensitivity for elderly patients presenting with atypical symptoms could cause significant harm.</p>
</div>
