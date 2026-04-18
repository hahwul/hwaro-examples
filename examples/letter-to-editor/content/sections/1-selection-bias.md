+++
title = "1. Selection Bias in the Study Population"
description = "Concerns about non-random exclusion of patients from the validation cohort and its impact on reported performance."
weight = 1
template = "post"
tags = ["correspondence", "methodology", "selection-bias"]
categories = ["sections"]
[extra]
section_number = "1"
+++

<span class="urgency-badge high">High Urgency</span>

The study excluded 2,847 patients (16.7% of the initial cohort) who left before triage completion, were transferred from other facilities, or presented with trauma activation criteria. This exclusion is problematic for two reasons.

First, patients who leave before triage completion are disproportionately those with conditions that present ambiguously -- precisely the patients for whom AI-assisted triage would be most clinically valuable. Their exclusion inflates the apparent accuracy of the system by removing the most diagnostically challenging cases.

Second, trauma activations represent a significant proportion of high-acuity presentations. Excluding these patients from a validation study and then reporting a high AUROC for acuity prediction creates a misleading picture of the system's performance in the clinical context where accurate triage is most consequential.

<div class="concern-block critical">
  <h4>Impact Assessment</h4>
  <p>We estimate that inclusion of the excluded population would reduce the reported AUROC from 0.91 to approximately 0.83-0.86, based on sensitivity analysis using the demographic characteristics of excluded patients reported in the study's supplementary Table S2.</p>
</div>
