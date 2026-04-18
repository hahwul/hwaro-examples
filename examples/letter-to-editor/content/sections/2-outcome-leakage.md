+++
title = "2. Temporal Outcome Leakage"
description = "Evidence that the model's input features may have contained information derived from the outcome being predicted."
weight = 2
template = "post"
tags = ["correspondence", "methodology", "data-leakage"]
categories = ["sections"]
[extra]
section_number = "2"
+++

<span class="urgency-badge high">High Urgency</span>

The feature set described in the study's Methods section includes "initial vital signs, chief complaint text, and nursing documentation at the time of triage." However, the supplementary materials reveal that "nursing documentation" includes fields that were populated *after* the initial triage decision was made -- specifically, the reassessment notes added during the first 30 minutes of the emergency department stay.

This constitutes temporal outcome leakage: the model's inputs contain information that is causally downstream of, and correlated with, the outcome variable (final acuity classification). A model that has access to post-triage nursing observations will appear to predict acuity more accurately than a model restricted to information available at the point of triage, because the nursing observations already reflect the clinician's evolving assessment of patient acuity.

We note that the original authors acknowledged this feature set in their Methods section but did not discuss the temporal relationship between feature collection and outcome determination. The distinction is clinically critical: a triage tool must predict acuity using only information available *before* the triage decision, not information that accumulates *after* it.

<div class="concern-block critical">
  <h4>Impact Assessment</h4>
  <p>Temporal leakage through post-triage nursing documentation could account for a substantial portion of the model's apparent predictive power. Without an ablation study removing these features, the true prospective performance of the system at the point of triage remains unknown.</p>
</div>
