+++
title = "3. Heterogeneity Investigation"
description = "Sources of between-trial heterogeneity, meta-regression analyses, and subgroup interaction tests."
weight = 3
template = "post"
tags = ["heterogeneity", "meta-regression", "I-squared"]
categories = ["sections"]
[extra]
section_number = "3"
+++

## 3.1 Heterogeneity Quantification

The primary analysis showed moderate heterogeneity (I-sq = 32%, 95% CI 8--51%). Visual inspection of the forest plot suggested that most of this heterogeneity came from a small number of trials with unusually large or small effect sizes, rather than from systematic differences across the main body of evidence.

## 3.2 Meta-Regression

We performed meta-regression to identify trial-level characteristics associated with differences in effect size:

| Covariate | Beta (log RR) | 95% CI | p-value |
|-----------|---------------|--------|---------|
| Baseline CV mortality (%) | -0.012 | (-0.023 to -0.001) | 0.032 |
| Mean age (years) | +0.004 | (-0.001 to +0.009) | 0.18 |
| Proportion female (%) | +0.002 | (-0.003 to +0.007) | 0.44 |
| Mean baseline LDL-C (mg/dL) | -0.003 | (-0.006 to +0.000) | 0.07 |
| Publication year | +0.001 | (-0.004 to +0.006) | 0.72 |
| Industry funding (binary) | +0.018 | (-0.025 to +0.061) | 0.41 |
| High-intensity statin (binary) | -0.089 | (-0.172 to -0.006) | 0.036 |

**Interpretations:**

- Trials enrolling higher-risk populations (higher baseline CV mortality) showed slightly larger relative risk reductions -- consistent with absolute benefit scaling with baseline risk.
- High-intensity statin regimens achieved modestly larger effect sizes, consistent with the subgroup analysis in Section 2.4.
- Industry funding was not associated with effect size, counter to the hypothesis of publication or outcome reporting bias favoring industry-funded trials.

## 3.3 Influence Analysis

Leave-one-out sensitivity analysis recomputed the pooled estimate 42 times, each time excluding one trial. The pooled RR ranged from 0.78 to 0.80 across these iterations, indicating that no single trial drove the overall finding. The most influential trial (HPS) had the highest weight (8.3%) but excluding it changed the pooled estimate from RR 0.79 to RR 0.78.

## 3.4 Prediction Interval

While the confidence interval for the pooled estimate (0.75--0.83) reflects uncertainty in the average true effect, the **95% prediction interval** is more relevant for clinical application, reflecting the plausible range of true effects in a new trial similar to those included:

**95% Prediction Interval: RR 0.63 to 0.99**

This suggests that in a typical new trial, the true effect is likely to fall between a 37% relative risk reduction and essentially no effect. Most plausible effects are favorable, but the upper bound approaches null, particularly for populations at low baseline risk.

## 3.5 Certainty of Evidence (GRADE)

The overall certainty of evidence for the primary outcome (cardiovascular mortality) is rated **HIGH** using the GRADE framework:

- Risk of bias: not downgraded (most trials at low risk of bias)
- Inconsistency: not downgraded (I-sq = 32%, most effects favor treatment)
- Indirectness: not downgraded (PICO well-matched)
- Imprecision: not downgraded (narrow CI, effect estimate clinically meaningful)
- Publication bias: not downgraded (symmetric funnel, non-significant Egger's test)

No factors supported upgrading certainty (not applicable for randomized evidence with adequate design).
