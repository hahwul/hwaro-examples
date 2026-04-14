+++
title = "4. From Discrimination to Clinical Utility"
description = "The gap between discriminative performance (AUROC) and clinical utility, and why the study does not bridge it."
weight = 4
template = "post"
tags = ["correspondence", "clinical-utility", "decision-analysis"]
categories = ["sections"]
[extra]
section_number = "4"
+++

<span class="urgency-badge moderate">Moderate Urgency</span>

The study's primary outcome measure is the area under the receiver operating characteristic curve (AUROC), which measures the model's ability to discriminate between acuity levels. However, discrimination alone does not establish clinical utility -- the demonstration that using the model's predictions leads to better patient outcomes than the current standard of care.

An AUROC of 0.91 indicates good discrimination, but it does not answer the question that matters for deployment: would patients triaged with the assistance of DeepTriage v3.1 experience better outcomes (shorter time to critical intervention, lower rates of under-triage, improved mortality) than patients triaged by experienced nurses using the Emergency Severity Index alone?

The study design -- a prospective cohort with concurrent triage by both human and AI systems -- could have supported a comparison of clinical utility, but the authors chose to evaluate the model's predictions against the final clinical outcome rather than against the human triage decision. This means we know how well the model predicts acuity, but not how often it would have improved upon the human triage nurse's assessment.

We believe that future validation studies should include a formal decision-analytic framework that quantifies the net clinical benefit of AI-assisted triage, accounting for the consequences of both over-triage (unnecessary resource utilisation) and under-triage (delayed critical care).

<div class="concern-block interpretive">
  <h4>Impact Assessment</h4>
  <p>The gap between discriminative performance and clinical utility is not unique to this study, but the stakes of emergency department triage -- where under-triage can be fatal -- demand that this gap be explicitly addressed before deployment recommendations are made.</p>
</div>
