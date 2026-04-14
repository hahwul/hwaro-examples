+++
title = "Methodology"
description = "Research methodology, data collection procedures, and analytical framework used in this white paper."
tags = ["methodology", "research-design", "data-collection"]
+++

<header class="paper-section-header">
<p class="paper-section-eyebrow">RESEARCH METHODOLOGY</p>
<h1 class="paper-section-title">Methodology</h1>
</header>

<div class="paper-content">

## Data collection

This white paper draws on three primary data sources collected between January 2023 and December 2025:

1. **Enterprise survey** (n=142). Structured questionnaire administered to infrastructure leadership at enterprises across financial services (n=38), healthcare (n=34), logistics (n=41), and critical infrastructure (n=29). Survey covered infrastructure topology, incident history, resilience practices, and investment levels.

2. **Post-incident reports** (n=847). De-identified incident reports contributed by survey participants, covering all severity-1 and severity-2 incidents during the study period. Reports were coded for failure domain, blast radius, recovery time, and root cause.

3. **Architecture reviews** (n=56). In-depth architectural assessments conducted by the authoring team for a subset of survey participants. Reviews included dependency graph mapping, fault injection testing, and resilience scoring.

## Analytical framework

Quantitative analysis used standard statistical methods:

- Descriptive statistics (median, interquartile range) for cost and recovery time distributions.
- Pearson correlation for blast radius score vs. incident frequency.
- Cox proportional hazards for recovery time modelling.
- Bootstrap confidence intervals (10,000 resamples) for all reported effect sizes.

Qualitative analysis of post-incident reports followed a structured coding framework with two independent coders and inter-rater reliability assessment (Cohen's kappa = 0.84).

## Limitations

- **Selection bias.** Survey participants were recruited through industry conferences and professional networks, which may over-represent organisations with above-average infrastructure maturity.
- **Survivor bias.** Post-incident reports were contributed voluntarily, potentially under-representing the most severe incidents at organisations with less mature incident documentation practices.
- **Sector coverage.** Retail, media, and government sectors are not represented in the current dataset.
- **Geographic scope.** 78% of participants are headquartered in North America or Western Europe. Results may not generalise to other regulatory and infrastructure environments.

## Ethics and data handling

All survey responses and incident reports were de-identified before analysis. Participating organisations signed data sharing agreements permitting aggregated, anonymised reporting only. Raw data is not available for redistribution. Summary statistics and analytical code are available upon request from the corresponding author.

</div>
