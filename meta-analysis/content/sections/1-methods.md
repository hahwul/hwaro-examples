+++
title = "1. Methods"
description = "Protocol, eligibility criteria, search strategy, data extraction, risk-of-bias assessment, and statistical methods."
weight = 1
template = "post"
tags = ["methods", "protocol", "PRISMA"]
categories = ["sections"]
[extra]
section_number = "1"
+++

## 1.1 Protocol Registration

This systematic review was registered prospectively on PROSPERO (CRD42024418293) on 2024-04-18 and conducted in accordance with the Cochrane Handbook for Systematic Reviews of Interventions (version 6.4). Reporting follows the PRISMA 2020 guidelines.

## 1.2 Eligibility Criteria

**Inclusion criteria:**

- Randomized controlled trials comparing any HMG-CoA reductase inhibitor (statin) against placebo or active comparator
- Adults aged 18 years or older
- Minimum follow-up of 12 months
- Reports cardiovascular mortality as a primary or secondary endpoint
- Published in a peer-reviewed journal OR registered in a major trial registry with public results

**Exclusion criteria:**

- Non-randomized designs, quasi-experimental studies, or cross-over trials
- Studies exclusively in pediatric populations
- Head-to-head statin comparisons without a placebo arm (analyzed separately in sensitivity analyses)
- Studies with less than 100 participants per arm

## 1.3 Search Strategy

We searched the following databases from inception to 2025-12-31:

- MEDLINE (PubMed): 3,842 records
- Embase (Elsevier): 4,217 records
- Cochrane CENTRAL: 1,195 records
- clinicaltrials.gov: 874 trial registrations
- WHO ICTRP: 312 trial registrations

Search strings used controlled vocabulary (MeSH terms, Emtree) and free-text keywords. No language restrictions were applied. Reference lists of included studies and prior meta-analyses were manually searched.

## 1.4 Study Selection and Data Extraction

Two reviewers independently screened titles and abstracts against the eligibility criteria, resolving disagreements by consensus with a third reviewer. Full-text review followed the same dual-reviewer process.

Data were extracted using a piloted electronic form capturing:

- Trial characteristics (design, sample size, follow-up, intervention details)
- Population (age, sex, baseline LDL-C, comorbidities, primary vs. secondary prevention)
- Outcomes (cardiovascular mortality, all-cause mortality, myocardial infarction, stroke)
- Risk-of-bias domains (Cochrane RoB 2 tool)

## 1.5 Statistical Analysis

Pooled risk ratios with 95% confidence intervals were calculated using the DerSimonian-Laird random-effects model. Heterogeneity was quantified using the I-squared statistic and tau-squared. Subgroup analyses were planned a priori for:

- Primary vs. secondary prevention
- Age (< 65 vs. >= 65 years)
- Sex
- Baseline LDL-C (< 130 vs. >= 130 mg/dL)
- Statin intensity (low/moderate vs. high)

Publication bias was assessed visually via funnel plot and statistically via Egger's regression test. Sensitivity analyses excluded high risk-of-bias trials, industry-funded trials (in isolation), and applied trim-and-fill methods.

All analyses were performed in R 4.4.1 using the `metafor` and `meta` packages.
