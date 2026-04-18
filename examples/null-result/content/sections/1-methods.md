+++
title = "1. Methods"
weight = 1
template = "post"
description = "Multi-center trial design, randomization, blinding, and pre-registered statistical analysis plan."
[extra]
section_number = "1"
+++

## Trial Design

This was a multi-center, double-blind, placebo-controlled, parallel-group randomized trial conducted at four academic medical centers: Karolinska University Hospital (Stockholm), University College Hospital Ibadan, Kyoto University Hospital, and Amsterdam University Medical Centre. The trial was registered prospectively on OSF Registries and received ethics approval from each site's institutional review board.

## Participants

Community-dwelling adults aged 65-80 years were recruited between March 2024 and September 2024. Inclusion criteria: (1) age 65-80, (2) MoCA baseline score of 22-28 (normal to mild impairment), (3) ability to attend follow-up visits. Exclusion criteria: (1) diagnosed dementia or MoCA < 22, (2) current fish oil supplementation, (3) fish allergy, (4) anticoagulant therapy, (5) major psychiatric disorder.

## Randomization and Blinding

Participants were randomized 1:1 to omega-3 or placebo using computer-generated block randomization (block size 4-8), stratified by site and baseline MoCA category (22-25 vs. 26-28). Allocation was concealed using sequentially numbered opaque sealed envelopes prepared by an independent statistician. Both participants and all study personnel were blinded to allocation throughout the trial.

## Intervention

The omega-3 group received 2.4 g/day of combined EPA and DHA (1.6 g EPA + 0.8 g DHA) as soft gel capsules. The placebo group received identical capsules containing olive oil. Capsules were dispensed every 3 months at clinic visits.

## Outcomes

**Primary outcome:** Change from baseline in MoCA score at 24 months.

**Secondary outcomes:**
- ADAS-Cog change at 24 months
- Trail Making Test Part B (TMT-B) change at 24 months
- Erythrocyte membrane Omega-3 Index at 12 and 24 months

## Statistical Analysis

The pre-registered analysis plan specified:

1. **Primary analysis:** Mixed-effects model for repeated measures (MMRM) with treatment, visit, treatment-by-visit interaction, site, baseline MoCA, age, and sex as covariates. Unstructured covariance matrix.
2. **Equivalence testing:** Two One-Sided Tests (TOST) with pre-registered equivalence margins of +/- 1.5 MoCA points (the established MCID).
3. **Bayesian analysis:** Bayesian MMRM with weakly informative priors. Pre-registered stopping rule at interim (12 months) if BF01 > 10.
4. **Multiplicity:** Secondary outcomes reported with 95% CIs without p-value adjustment, following the pre-registered hierarchy.

All analyses followed the intention-to-treat principle using all randomized participants with at least one post-baseline assessment.
