+++
title = "Methodology"
description = "Detailed analytical framework including latent growth curve specifications, missing data handling, and model comparison strategy."
tags = ["longitudinal", "methodology", "SEM"]
+++

<header class="paper-section-header">
  <p class="paper-section-eyebrow">SUPPLEMENTARY</p>
  <h1 class="paper-section-title">Detailed Methodology</h1>
</header>

## Analytical framework

The analytical strategy proceeded in three stages. First, unconditional linear growth models were fitted to each cognitive domain separately. Second, quadratic extensions were tested where linear fit was inadequate. Third, conditional models incorporated time-invariant predictors to explain individual differences in intercept and slope.

## Model estimation

All models were estimated in Mplus 8.9 using maximum likelihood with robust standard errors (MLR). Full-information maximum likelihood (FIML) was used to incorporate all available data, including participants who dropped out before T5. FIML produces unbiased estimates under the missing-at-random (MAR) assumption.

## Fit indices

Model fit was evaluated using:

- **CFI** (Comparative Fit Index): values above 0.95 indicate good fit
- **RMSEA** (Root Mean Square Error of Approximation): values below 0.06 indicate good fit
- **SRMR** (Standardised Root Mean Square Residual): values below 0.08 indicate acceptable fit
- **Chi-square difference test** (scaled for MLR): for nested model comparisons

## Measurement invariance

Before fitting growth models, longitudinal measurement invariance was established for each cognitive measure. Configural, metric, and scalar invariance models were tested sequentially. All three domains achieved at least scalar invariance (delta-CFI < 0.01 for each step), confirming that the measures assessed the same constructs comparably across waves.

## Effect sizes

Slope parameters are expressed in baseline standard deviation units per 3-year interval. To convert to per-decade rates, slopes are multiplied by 10/3 = 3.33. Cohen's d was computed for covariate effects on slope by dividing the unstandardised slope difference by the pooled slope standard deviation.
