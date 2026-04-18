+++
title = "4. Attrition Analysis"
description = "Patterns of participant dropout, predictors of attrition, and sensitivity analyses assessing the impact of non-random missingness on growth curve estimates."
weight = 4
template = "post"
tags = ["longitudinal", "attrition", "missing-data"]
categories = ["sections"]
[extra]
section_number = "4"
+++

## 4.1 Attrition patterns

Of the 1,842 participants who completed T1, 1,315 (71.4 pct) remained at T5. Attrition was approximately constant across intervals: 8.0 pct from T1 to T2, 7.8 pct from T2 to T3, 9.2 pct from T3 to T4, and 7.3 pct from T4 to T5.

Dropout reasons were categorised as: relocation (38 pct), refusal to continue (28 pct), health-related withdrawal (16 pct), death (10 pct), and unable to contact (8 pct). The proportion of health-related withdrawals increased from 11 pct at T2 to 22 pct at T5, consistent with age-related morbidity.

## 4.2 Predictors of attrition

Logistic regression predicting any dropout (0 = completed all waves, 1 = missed at least one) identified two significant predictors:

- **Lower baseline processing speed** (OR = 1.34 per SD decrease, 95 pct CI: 1.18 to 1.52, p < 0.001)
- **Older age at baseline** (OR = 1.22 per decade, 95 pct CI: 1.08 to 1.38, p = 0.002)

Sex, education, and APOE-e4 status were not significant predictors after controlling for age and baseline performance (all p > 0.10). These results indicate that attrition was not completely at random (MCAR) but is plausibly MAR conditional on observed scores, supporting the use of FIML estimation.

## 4.3 Sensitivity analyses

Three sensitivity approaches were used to assess robustness of growth curve estimates to non-random missingness:

1. **Pattern-mixture models** grouped participants by dropout wave and estimated separate growth models per group. Slope estimates varied by group (dropouts showed steeper decline) but pooled estimates were within 0.06 SD per decade of the primary FIML estimates.

2. **Selection models** (Diggle-Kenward) jointly modelled the outcome trajectory and a probit dropout indicator as a function of current (possibly unobserved) cognitive score. The estimated selection parameter was small (psi = -0.14) and did not substantially alter slope estimates.

3. **Multiple imputation** (50 datasets, predictive mean matching) yielded slope estimates within the 95 pct confidence intervals of the primary analysis for all three domains.

## 4.4 Implications

Attrition bias in this cohort is mild. The most vulnerable participants (lower baseline scores, older age) were more likely to drop out, which would bias naive complete-case analyses toward underestimating decline. FIML and the sensitivity analyses suggest that the MAR assumption is reasonable and that primary estimates are robust.
