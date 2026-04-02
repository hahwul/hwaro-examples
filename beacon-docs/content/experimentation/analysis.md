+++
title = "Analysis"
weight = 3
date = "2025-08-23"
description = "Statistical analysis of experiment results"
+++

# Analysis

After an experiment collects enough data, Beacon provides statistical analysis to help you make informed decisions. This page covers the key concepts: confidence intervals, p-values, and sample size calculations.

## Reading experiment results

Beacon displays results for each metric in a summary table:

| Metric | Control | Variant | Difference | Confidence |
|---|---|---|---|---|
| Conversion rate | 3.2% | 3.8% | +0.6pp | 94.2% |
| Revenue per user | $12.40 | $13.10 | +$0.70 | 87.5% |
| Pages per session | 4.1 | 4.3 | +0.2 | 72.1% |

## Confidence intervals

A confidence interval gives a range of plausible values for the true difference between variations. Beacon reports 95% confidence intervals by default.

```
Conversion rate difference: +0.6pp
95% CI: [+0.1pp, +1.1pp]
```

If the confidence interval does not contain zero, the result is statistically significant at the 95% level.

| CI contains zero? | Interpretation |
|---|---|
| No | Statistically significant difference detected |
| Yes | Cannot conclude a meaningful difference exists |

## P-values

The p-value represents the probability of observing the measured difference (or larger) if there were no true difference between variations. Beacon uses a two-sided test.

| P-value | Interpretation |
|---|---|
| Less than 0.01 | Very strong evidence of a difference |
| 0.01 to 0.05 | Strong evidence of a difference |
| 0.05 to 0.10 | Weak evidence; consider extending the experiment |
| Greater than 0.10 | Insufficient evidence to conclude a difference |

> A p-value below 0.05 is the conventional threshold for statistical significance. However, context matters -- for high-impact changes, you may want stricter thresholds.

## Sample size

Running an experiment with too few users produces unreliable results. Beacon calculates the required sample size based on:

- **Baseline rate** -- The current metric value (e.g., 3.2% conversion rate)
- **Minimum detectable effect** -- The smallest improvement worth detecting (e.g., 0.5 percentage points)
- **Statistical power** -- The probability of detecting a true effect (typically 80%)
- **Significance level** -- The threshold for declaring significance (typically 5%)

### Sample size estimates

| Baseline Rate | Min Detectable Effect | Required Sample (per variation) |
|---|---|---|
| 1% | 0.5pp | ~31,000 |
| 3% | 0.5pp | ~28,000 |
| 5% | 1.0pp | ~9,500 |
| 10% | 1.0pp | ~8,600 |
| 20% | 2.0pp | ~3,800 |

## Making a decision

After the experiment reaches the required sample size and duration:

1. Check if the primary metric shows a statistically significant improvement
2. Verify that guardrail metrics have not degraded
3. Review secondary metrics for any unexpected patterns
4. Document the decision with the supporting data

If the result is inconclusive, consider whether the minimum detectable effect was too small, the experiment duration too short, or the audience too narrow.

## Common pitfalls

- **Peeking** -- Checking results repeatedly before the experiment ends inflates false positive rates
- **Stopping early** -- Ending an experiment as soon as significance is reached leads to overestimation of the effect
- **Multiple comparisons** -- Testing many metrics without correction increases the chance of false positives
- **Selection bias** -- Ensure the experiment audience is representative of your target users
