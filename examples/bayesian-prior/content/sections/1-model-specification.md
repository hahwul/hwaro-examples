+++
title = "1. Model Specification"
weight = 1
template = "post"
description = "The three-level Bayesian hierarchical logistic regression model for hospital mortality estimation."
[extra]
section_number = "1"
+++

## Overview

We model 30-day post-surgical mortality as a binary outcome using a three-level Bayesian hierarchical logistic regression. The three levels are: patients (level 1), surgeons (level 2, absorbed into hospital for parsimony in the primary analysis), and hospitals (level 3).

## Likelihood

For patient i in hospital j, the outcome y_ij (0 = survived, 1 = died within 30 days) follows:

y_ij ~ Bernoulli(p_ij)

where the mortality probability is linked to a linear predictor via the logit function:

logit(p_ij) = mu + alpha_j + X_ij * beta

## Hierarchical Structure

The hospital-level random effects alpha_j are drawn from a common distribution:

alpha_j ~ Normal(0, sigma_h)

This induces partial pooling: hospitals with sparse data are shrunk toward the grand mean, while data-rich hospitals retain more of their individual estimate.

## Prior Specification

The key innovation of this work is the use of informative priors derived from external registry data:

- **Grand mean mu:** Normal(-3.5, 0.5), centered on the national registry log-odds mortality rate
- **Hospital SD sigma_h:** Half-Cauchy(0, 0.5), weakly informative for the between-hospital variation
- **Regression coefficients beta:** Normal(beta_registry, 0.2), centered on registry-derived point estimates with moderate uncertainty

The informative priors on beta are justified by the large national registry (N = 2.4 million), which provides precise estimates of covariate-outcome associations that should generalize to the study population.

## Covariates

Twelve patient-level covariates were included:

1. Age (standardized)
2. Sex (0/1)
3. ASA physical status (I-V, treated as continuous)
4. Charlson comorbidity index
5. Emergency admission (0/1)
6. Surgical complexity score
7. Anesthesia duration (log-transformed)
8. Body mass index (standardized)
9. Preoperative albumin (standardized)
10. Preoperative hemoglobin (standardized)
11. Diabetes (0/1)
12. Chronic kidney disease stage (0-5)
