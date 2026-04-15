+++
title = "Appendix"
description = "Supplementary materials including Stan code, sensitivity analyses, and prior predictive checks."
template = "page"
+++

<div class="paper-section-header">
  <p class="paper-section-eyebrow">SUPPLEMENTARY MATERIALS</p>
  <h1 class="paper-section-title">Appendix</h1>
</div>

<div class="paper-content">

## A. Stan Model Code (Simplified)

```stan
data {
  int<lower=0> N;           // total patients
  int<lower=0> J;           // number of hospitals
  int<lower=0> K;           // number of covariates
  array[N] int<lower=1,upper=J> hospital;
  matrix[N, K] X;           // patient covariates
  array[N] int<lower=0,upper=1> y;
}
parameters {
  real mu;
  real<lower=0> sigma_h;
  vector[J] alpha_raw;
  vector[K] beta;
}
transformed parameters {
  vector[J] alpha = mu + sigma_h * alpha_raw;
}
model {
  // Priors (informative from registry)
  mu ~ normal(-3.5, 0.5);
  sigma_h ~ cauchy(0, 0.5);
  alpha_raw ~ std_normal();
  beta ~ normal(beta_registry, 0.2);

  // Likelihood
  y ~ bernoulli_logit(alpha[hospital] + X * beta);
}
```

## B. Prior Sensitivity Analysis

We tested three prior specifications for sigma_h to assess sensitivity:

| Prior | Posterior median sigma_h | 95% CrI | ELPD change |
|-------|-------------------------|----------|-------------|
| Half-Cauchy(0, 0.5) (primary) | 0.34 | (0.26, 0.44) | reference |
| Half-Cauchy(0, 1.0) (weakly informative) | 0.35 | (0.27, 0.46) | -2.1 |
| Half-Normal(0, 0.5) | 0.33 | (0.26, 0.42) | -0.8 |
| Exponential(2) | 0.32 | (0.25, 0.41) | -3.4 |

Results are robust to prior choice: posterior estimates change minimally across specifications. The data dominate the prior for this parameter given the large sample size.

## C. Prior Predictive Check

Before fitting the model to data, we simulated outcomes from the prior predictive distribution (1,000 draws from the joint prior). The prior predictive mortality rates ranged from 0.1% to 12%, which encompasses the clinically plausible range and confirms the priors are not inadvertently informative about implausible regions.

## D. Posterior Predictive Check

Posterior predictive p-values for key test statistics:

| Statistic | Observed | Posterior predictive mean | p-value |
|-----------|----------|--------------------------|---------|
| Overall mortality rate | 3.2% | 3.1% | 0.48 |
| Between-hospital variance | 0.118 | 0.112 | 0.42 |
| Max hospital mortality | 6.8% | 7.1% | 0.55 |
| Min hospital mortality | 0.9% | 1.0% | 0.47 |

All posterior predictive p-values are near 0.5, indicating excellent model fit with no evidence of systematic misfit.

</div>
