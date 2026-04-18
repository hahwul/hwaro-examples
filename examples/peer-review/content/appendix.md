+++
title = "Appendix"
description = "Supplementary analyses including parallel trends tests, subgroup analyses, and robustness checks."
tags = ["appendix", "supplementary"]
+++

## A. Pre-Transition Parallel Trends

A key identifying assumption of the difference-in-differences design is that outcomes would have evolved in parallel in treatment and control groups absent the transition. We test this assumption by estimating event-study regressions with indicators for each half-year before and after the transition:

| Period (relative to transition) | Coefficient | SE |
|---|---|---|
| t-4 (2 years prior) | 0.08 | 0.14 |
| t-3 | -0.02 | 0.12 |
| t-2 | 0.04 | 0.11 |
| t-1 | 0.06 | 0.10 |
| t (transition) | -- (reference) | -- |
| t+1 | 0.34 | 0.11 |
| t+2 | 0.48 | 0.13 |
| t+3 | 0.52 | 0.14 |
| t+4 | 0.55 | 0.15 |

All pre-transition coefficients are statistically indistinguishable from zero, supporting the parallel trends assumption.

## B. Subgroup Analyses

Effects were broadly consistent across subgroups, with some variation:

| Subgroup | Report Length DiD | Citation DiD |
|---|---|---|
| Social sciences | +142.6 | +2.4 |
| Natural sciences | +178.2 | +3.1 |
| Mathematics/Statistics | +156.8 | +2.6 |
| Early-career authors (< 10 years post-PhD) | +152.4 | +2.9 |
| Established authors (>= 10 years post-PhD) | +164.8 | +2.7 |
| Single-author papers | +144.2 | +2.5 |
| Multi-author papers | +162.4 | +2.9 |

The effects are largest in natural sciences and for multi-author papers, though confidence intervals overlap across subgroups.

## C. Robustness Checks

We tested the robustness of our main findings to several alternative specifications:

| Specification | Report Length DiD | 95% CI |
|---|---|---|
| Main specification | +158.4 | [112.8, 204.0] |
| Excluding 2024 transitions | +149.6 | [101.2, 198.0] |
| Controlling for author h-index | +152.8 | [106.4, 199.2] |
| Excluding desk-rejected papers | +161.2 | [115.6, 206.8] |
| Weighted by submission volume | +164.8 | [118.4, 211.2] |

All specifications yield estimates within the 95% CI of the main specification.

## D. Falsification Tests

As placebo tests, we estimated the DiD effect for journals that did *not* transition during our sample period, using a synthetic transition date of 2022-Q1. The placebo DiD estimate is +8.2 words (SE = 18.4, p = .66), consistent with no effect and supporting the causal interpretation of our main findings.
