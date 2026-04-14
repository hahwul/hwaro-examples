+++
title = "Introduction"
description = "Clinical background of rheumatoid arthritis treatment, rationale for network meta-analysis, and study objectives."
weight = 1
template = "post"
tags = ["paper", "dark", "network", "meta-analysis", "comparative"]
[extra]
section_number = "1"
+++

## Clinical Background

Rheumatoid arthritis (RA) is a chronic systemic autoimmune disease affecting approximately 0.5 to 1% of the global adult population. Characterized by persistent synovial inflammation, progressive joint destruction, and functional disability, RA imposes substantial morbidity and economic burden. The past two decades have witnessed a transformation in RA management through the introduction of biologic disease-modifying antirheumatic drugs (bDMARDs) and, more recently, targeted synthetic DMARDs (tsDMARDs).

For patients with moderate-to-severe RA who respond inadequately to conventional synthetic DMARDs (csDMARDs) such as methotrexate, clinical guidelines recommend escalation to biologic or targeted synthetic therapy. The available agents target distinct molecular pathways:

- **Adalimumab** (anti-TNF monoclonal antibody)
- **Etanercept** (soluble TNF receptor fusion protein)
- **Infliximab** (chimeric anti-TNF monoclonal antibody)
- **Tocilizumab** (anti-IL-6 receptor monoclonal antibody)
- **Tofacitinib** (JAK inhibitor, targeted synthetic DMARD)

### The Evidence Gap

While each of these agents has demonstrated superiority over placebo in pivotal randomized controlled trials, the evidence base for choosing among them is fragmented. Head-to-head trials comparing two active treatments directly are expensive and logistically difficult, resulting in a sparse landscape of direct comparisons. Clinicians and patients face the practical question of which agent to select first, but the available evidence rarely provides direct comparative answers.

## Rationale for Network Meta-Analysis

Network meta-analysis (NMA) addresses this evidence gap by synthesizing direct and indirect evidence within a connected network of randomized comparisons. If treatment A has been compared to placebo and treatment B has also been compared to placebo, NMA allows an indirect comparison of A versus B through the common comparator, while preserving the randomization of the original trials.

The Bayesian framework is particularly well suited to NMA because it naturally incorporates uncertainty in all parameters, provides posterior probability distributions for treatment effects, and enables probabilistic ranking of treatments. The SUCRA (surface under the cumulative ranking curve) statistic summarizes ranking probabilities into a single interpretable value.

<div class="result-box">
  <p class="result-label">Study Objective</p>
  <p class="result-text">To compare the relative efficacy of five biologic and targeted synthetic DMARDs for ACR50 response in adults with moderate-to-severe rheumatoid arthritis using Bayesian network meta-analysis.</p>
  <p class="result-detail">Pre-specified secondary objectives included treatment ranking via SUCRA, assessment of network heterogeneity and inconsistency, and evaluation of small-study effects through comparison-adjusted funnel plots.</p>
</div>

## Scope and Eligibility

### Inclusion Criteria

- **Population**: Adults (aged 18 years or older) with moderate-to-severe RA as defined by the ACR/EULAR 2010 classification criteria or the ACR 1987 revised criteria, with inadequate response to at least one csDMARD
- **Interventions**: Adalimumab, etanercept, infliximab, tocilizumab, or tofacitinib at approved doses, alone or in combination with csDMARDs
- **Comparator**: Placebo (with or without background csDMARD) or any of the listed active interventions
- **Outcome**: ACR50 response at 24 weeks (primary), ACR20 and ACR70 at 24 weeks (secondary)
- **Design**: Randomized controlled trials with parallel-group design and at least 24 weeks of follow-up

### Exclusion Criteria

- Trials exclusively enrolling biologic-experienced patients
- Trials using non-approved doses without an approved-dose arm
- Crossover designs without adequate washout
- Trials reporting fewer than 10 patients per arm
