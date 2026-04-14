+++
title = "4. Outcomes and Analysis Plan"
description = "Primary and secondary endpoint definitions, statistical models, multiplicity adjustment, and pre-specified sensitivity analyses."
weight = 4
template = "post"
tags = ["paper", "light", "protocol", "pre-registration", "rigorous"]
categories = ["sections"]

[extra]
section_number = "4"
+++

## Primary Outcome

**End-of-semester cumulative exam score.** A 120-item standardized exam administered in week 14, covering all 12 course modules. Items are multiple-choice (4 options) with a single correct answer. The exam was developed using the same item bank as the intervention materials but with no item overlap (non-overlapping items reserved exclusively for the outcome assessment).

Psychometric properties from pilot testing (N = 120):
- Cronbach alpha: 0.89
- Mean difficulty: 0.62 (SD = 0.18)
- Mean discrimination: 0.41 (SD = 0.12)
- Test-retest reliability (2-week interval): r = 0.84

## Secondary Outcomes

1. **Transfer task score** (week 14): 20-item assessment requiring application of course concepts to novel scenarios not covered in any testing or re-study session. Scored 0-40 (partial credit).

2. **Cognitive load measure** (weeks 4, 8, 12): Dual-task reaction time paradigm administered during testing/re-study sessions. Secondary task response time (ms) serves as an index of cognitive load.

3. **Delayed retention** (week 18, 4 weeks post-exam): Subset of 40 items from the primary exam, re-administered to assess long-term retention.

4. **Self-reported study habits** (weeks 1, 7, 14): Validated Study Process Questionnaire (SPQ-R, 20 items) measuring deep and surface learning approaches.

## Statistical Analysis Plan

### Primary analysis

The primary analysis uses intention-to-treat (ITT) with all randomized participants included regardless of attendance.

**Model specification:**

Score_ij = beta_0 + beta_1(Arm_A) + beta_2(Arm_B) + beta_3(GPA_quartile) + u_j + epsilon_ij

Where:
- Score_ij = exam score for participant i at site j
- Arm_A, Arm_B = indicator variables (reference: Arm C)
- GPA_quartile = stratification factor (ordinal, 1-4)
- u_j = random intercept for site j, u_j ~ N(0, sigma_u^2)
- epsilon_ij = residual error, epsilon_ij ~ N(0, sigma_e^2)

**Primary contrasts (Bonferroni-corrected alpha = 0.025 each):**
1. beta_1: Arm A (weekly) vs. Arm C (control)
2. beta_2: Arm B (biweekly) vs. Arm C (control)

**Secondary contrast (alpha = 0.05):**
3. beta_1 - beta_2: Arm A vs. Arm B (dose-response)

### Effect size reporting

All effects will be reported as standardized mean differences (Cohen's d) with 95 pct confidence intervals, using the pooled within-group standard deviation as the denominator.

## Multiplicity Adjustment

<table class="paper-table">
  <caption><span class="tab-num">Table 4.</span> Multiplicity adjustment strategy for primary and secondary outcomes.</caption>
  <thead>
    <tr>
      <th>Family</th>
      <th>Outcomes</th>
      <th>Method</th>
      <th>Alpha</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Primary</td>
      <td>Exam score (A vs C, B vs C)</td>
      <td>Bonferroni</td>
      <td class="num">0.025</td>
    </tr>
    <tr>
      <td>Secondary</td>
      <td>Transfer, cognitive load, retention, SPQ-R</td>
      <td>Hochberg step-up</td>
      <td class="num">0.05</td>
    </tr>
    <tr>
      <td>Exploratory</td>
      <td>Subgroup, moderation</td>
      <td>None (descriptive)</td>
      <td class="num">--</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="4">Primary family is tested first. Secondary family is tested only if at least one primary comparison is significant (gatekeeping).</td></tr>
  </tfoot>
</table>

## Missing Data Strategy

The primary analysis uses all available data under a missing-at-random (MAR) assumption, which is accommodated by the mixed-effects model via maximum likelihood estimation.

**Sensitivity analyses for missing data:**

1. **Multiple imputation (MICE):** 50 imputed datasets using predictive mean matching, with arm, site, GPA, and attendance as predictors.
2. **Tipping point analysis:** Systematically degrade imputed values for the active arms to determine how large a departure from MAR would be needed to nullify the primary finding.
3. **Complete-case analysis:** Restricted to participants with non-missing primary outcome.

## Pre-specified Subgroup Analyses

The following subgroup analyses are pre-specified and will be reported regardless of significance. Interaction terms (arm x subgroup) will be added to the primary model:

- Prior GPA quartile (Q1/Q2 vs. Q3/Q4)
- Site (Uppsala, Toronto, Tokyo, Cape Town)
- Baseline working memory span (median split on operation span task administered at enrollment)
- Sex (male vs. female)

All subgroup analyses are exploratory. No alpha adjustment is applied, but all interaction p-values and effect sizes will be reported to inform future targeted trials.
