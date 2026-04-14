+++
title = "3. Growth Curve Models"
description = "Specification, estimation, and comparison of linear and quadratic latent growth curve models for each cognitive domain."
weight = 3
template = "post"
tags = ["longitudinal", "growth-curve", "SEM"]
categories = ["sections"]
[extra]
section_number = "3"
+++

## 3.1 Model specification

Latent growth curve models (LGCM) were fitted within a structural equation modelling framework using maximum likelihood estimation with robust standard errors (MLR). For each cognitive domain, a linear LGCM was specified with two latent factors: an intercept factor (all loadings fixed to 1) and a slope factor (loadings fixed to 0, 1, 2, 3, 4 representing waves T1 through T5).

The linear model estimates four key parameters: the mean and variance of the intercept (average initial level and individual differences therein) and the mean and variance of the slope (average rate of change and individual differences in that rate).

## 3.2 Quadratic extension

For domains where the linear model showed poor fit (RMSEA above 0.06 or significant residual patterns), a quadratic growth factor was added with loadings fixed to 0, 1, 4, 9, 16. This captures acceleration or deceleration of change over time.

Model comparison used the chi-square difference test (scaled for MLR), AIC, and BIC. The quadratic model was retained only when it significantly improved fit and the quadratic factor variance was significantly different from zero.

## 3.3 Conditional models

Time-invariant covariates were added to the conditional model to predict individual differences in intercept and slope:

- **Education** (years of formal schooling, centred at 12)
- **APOE-e4 status** (0 = non-carrier, 1 = carrier of at least one e4 allele)
- **Cardiovascular risk** (Framingham Risk Score at T1, z-transformed)

Each covariate was regressed on both the intercept and slope factors. Standardised path coefficients are reported.

## 3.4 Model fit results

Processing speed was well described by a linear model (CFI = 0.968, RMSEA = 0.042, SRMR = 0.031). Working memory also fit a linear model (CFI = 0.981, RMSEA = 0.034). Executive function required a quadratic term (linear-only CFI = 0.928; quadratic CFI = 0.955, delta-chi-square = 18.4, df = 4, p = 0.001).

The negative mean quadratic term for executive function (-0.09, SE = 0.03) indicates that decline accelerated in the later waves, consistent with age-related vulnerability of prefrontal circuits.

## 3.5 Software

All models were estimated in Mplus 8.9 using the MLR estimator. Full-information maximum likelihood (FIML) was used to handle missing data under the assumption that missingness was at random (MAR) conditional on the observed data.
