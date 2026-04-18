+++
title = "Notation Guide"
description = "Mathematical notation and symbol definitions used throughout the paper."
template = "page"
+++

<div class="paper-section-header">
  <p class="paper-section-eyebrow">REFERENCE</p>
  <h1 class="paper-section-title">Notation Guide</h1>
</div>

<div class="paper-content">

## Parameters

<table class="paper-table">
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Description</th>
      <th>Prior</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="math-cell">mu</td>
      <td>Grand mean log-odds of mortality</td>
      <td class="math-cell">N(-3.5, 0.5)</td>
    </tr>
    <tr>
      <td class="math-cell">sigma_h</td>
      <td>Between-hospital SD of random effects</td>
      <td class="math-cell">Half-Cauchy(0, 0.5)</td>
    </tr>
    <tr>
      <td class="math-cell">alpha_h</td>
      <td>Hospital-specific random intercept</td>
      <td class="math-cell">N(0, sigma_h)</td>
    </tr>
    <tr>
      <td class="math-cell">beta_k</td>
      <td>Fixed-effect coefficient for covariate k</td>
      <td class="math-cell">N(beta_registry, 0.2)</td>
    </tr>
    <tr>
      <td class="math-cell">y_ij</td>
      <td>Binary outcome (0/1) for patient i in hospital j</td>
      <td class="math-cell">Bernoulli(p_ij)</td>
    </tr>
    <tr>
      <td class="math-cell">p_ij</td>
      <td>Probability of mortality for patient i in hospital j</td>
      <td class="math-cell">logit^-1(eta_ij)</td>
    </tr>
    <tr>
      <td class="math-cell">eta_ij</td>
      <td>Linear predictor on log-odds scale</td>
      <td class="math-cell">mu + alpha_h + X_ij * beta</td>
    </tr>
  </tbody>
</table>

## Indices

| Symbol | Range | Meaning |
|--------|-------|---------|
| i | 1, ..., n_j | Patient within hospital j |
| j | 1, ..., J (= 47) | Hospital |
| k | 1, ..., K (= 12) | Covariate |

## Key Metrics

| Abbreviation | Full Name |
|-------------|-----------|
| R-hat | Potential scale reduction factor (convergence diagnostic) |
| ESS | Effective sample size |
| ELPD | Expected log pointwise predictive density |
| LOO-CV | Leave-one-out cross-validation |
| WAIC | Widely applicable information criterion |
| SMR | Standardized mortality ratio |
| HMC | Hamiltonian Monte Carlo |
| NUTS | No-U-Turn Sampler |

</div>
