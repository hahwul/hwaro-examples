+++
title = "Hypothesis Testing"
description = "Statistical hypothesis testing procedures and formulas"
tags = ["statistics", "hypothesis-testing", "inference"]
+++

# Hypothesis Testing

Procedures and formulas for conducting statistical hypothesis tests, including test statistics, confidence intervals, and decision rules.

## General Framework

A hypothesis test evaluates two competing hypotheses:

- **Null hypothesis** $H_0$: the default assumption (e.g., no effect)
- **Alternative hypothesis** $H_1$: the claim to be tested

<div class="definition" data-title="p-value">
<p>The <strong>p-value</strong> is the probability of observing a test statistic at least as extreme as the one computed, assuming $H_0$ is true. Reject $H_0$ if $p \leq \alpha$, where $\alpha$ is the significance level.</p>
</div>

## Common Test Statistics

### One-Sample z-Test

When population variance $\sigma^2$ is known:

$$z = \frac{\bar{X} - \mu_0}{\sigma / \sqrt{n}}$$

Under $H_0$: $z \sim N(0, 1)$.

### One-Sample t-Test

When population variance is unknown and estimated by $s^2$:

$$t = \frac{\bar{X} - \mu_0}{s / \sqrt{n}}$$

Under $H_0$: $t \sim t_{n-1}$ (Student's t-distribution with $n-1$ degrees of freedom).

### Two-Sample t-Test

For independent samples with equal variances:

$$t = \frac{\bar{X}_1 - \bar{X}_2}{s_p\sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}$$

where the pooled standard deviation is:

$$s_p = \sqrt{\frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}}$$

### Chi-Squared Test

For testing goodness of fit with $k$ categories:

$$\chi^2 = \sum_{i=1}^{k} \frac{(O_i - E_i)^2}{E_i}$$

Under $H_0$: $\chi^2 \sim \chi^2_{k-1}$.

## Confidence Intervals

<div class="definition" data-title="Confidence Interval">
<p>A <strong>$100(1-\alpha)\%$ confidence interval</strong> for parameter $\theta$ is a random interval $[L, U]$ such that $P(L \leq \theta \leq U) = 1 - \alpha$.</p>
</div>

| Parameter | Confidence Interval |
|-----------|-------------------|
| Mean (known $\sigma$) | $\bar{X} \pm z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$ |
| Mean (unknown $\sigma$) | $\bar{X} \pm t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}}$ |
| Proportion | $\hat{p} \pm z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$ |
| Variance | $\left[\frac{(n-1)s^2}{\chi^2_{\alpha/2}},\, \frac{(n-1)s^2}{\chi^2_{1-\alpha/2}}\right]$ |

## Type I and Type II Errors

| | $H_0$ true | $H_0$ false |
|---|-----------|-------------|
| Reject $H_0$ | Type I error ($\alpha$) | Correct (Power) |
| Fail to reject $H_0$ | Correct | Type II error ($\beta$) |

The **power** of a test is:

$$\text{Power} = 1 - \beta = P(\text{reject } H_0 \mid H_1 \text{ is true})$$

## Sample Size Determination

For estimating a mean with margin of error $E$ at confidence level $1 - \alpha$:

$$n = \left(\frac{z_{\alpha/2} \cdot \sigma}{E}\right)^2$$

For estimating a proportion:

$$n = \frac{z_{\alpha/2}^2 \cdot p(1-p)}{E^2}$$

When $p$ is unknown, use $p = 0.5$ for the most conservative estimate.
