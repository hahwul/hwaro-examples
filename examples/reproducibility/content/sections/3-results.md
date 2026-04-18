+++
title = "3. Replication Results"
description = "Detailed results of the replication experiments across all three claims."
weight = 3
template = "post"
tags = ["replication", "results", "comparison"]
categories = ["sections"]
[extra]
section_number = "3"
+++

## Claim 1: Performance Parity

We trained the attention-only model five times with different random seeds and evaluated on all five target languages. The following table presents our results alongside the original:

| Language | Original F1 | Replicated F1 (mean) | Replicated F1 (sd) | Delta | 95% CI |
|---|---|---|---|---|---|
| Yoruba | 79.1 | 77.2 | 1.1 | -1.9 | [75.8, 78.6] |
| Swahili | 81.9 | 82.9 | 0.6 | +1.0 | [82.1, 83.7] |
| Quechua | 69.3 | 66.4 | 1.4 | -2.9 | [64.6, 68.2] |
| Welsh | 86.8 | 87.8 | 0.5 | +1.0 | [87.1, 88.5] |
| Tagalog | 83.9 | 80.9 | 0.9 | -3.0 | [79.7, 82.1] |
| **Average** | **80.2** | **79.0** | **0.8** | **-1.2** | **[78.0, 80.1]** |

The average F1 difference of 1.2 points is within our pre-registered confirmation threshold of 2.0 points. However, two individual languages (Quechua and Tagalog) exceed the 2-point threshold. We attribute the Quechua discrepancy primarily to bug fix B-3 (micro vs. macro F1), which disproportionately affects languages with skewed entity distributions.

**Verdict: CONFIRMED.** The overall claim of performance parity holds. Per-language deviations are within the range expected from bug corrections and random seed variation.

## Claim 2: Attention Head Analysis

The ablation study removes individual attention heads and measures the resulting performance drop. We replicated this for all 8 heads across 5 seeds:

| Head | Original Drop (F1) | Replicated Drop (mean) | Replicated Drop (sd) |
|---|---|---|---|
| Head 1 | -1.2 | -1.8 | 0.9 |
| Head 2 | -2.1 | -2.4 | 1.1 |
| **Head 3** | **-8.4** | **-4.1** | **1.2** |
| Head 4 | -0.8 | -1.5 | 0.7 |
| Head 5 | -1.5 | -2.0 | 1.0 |
| Head 6 | -3.2 | -2.8 | 1.3 |
| **Head 7** | **-0.3** | **-3.8** | **1.8** |
| Head 8 | -1.8 | -1.6 | 0.8 |

Head 3 remains the most important single head, but with roughly half the effect size (4.1 vs. 8.4). The key failure is head 7: the original paper claims it is "redundant" (0.3 F1 drop), but our replication shows a meaningful 3.8 F1 drop -- comparable to head 6 and greater than heads 1, 4, and 8.

**Verdict: PARTIALLY CONFIRMED.** The qualitative finding that some heads matter more than others is replicated. The specific quantitative claims about heads 3 and 7 are not.

## Claim 3: Computational Efficiency

Training time measurements (mean of 5 runs, single A100 GPU):

| Stage | Attention-Only | Full Transformer | Speedup |
|---|---|---|---|
| Preprocessing | 47 min | 0 min | -- |
| Training | 38 min | 82 min | 2.16x |
| Total | 85 min | 82 min | 0.96x |

The original paper's 2.1x speedup figure matches our training-only measurement (2.16x). However, the attention-only model requires a preprocessing step (`align_subwords.py`) that the transformer baseline does not. This step is not included in the original timing comparison.

**Verdict: FAILED.** End-to-end, the attention-only model is not faster than the baseline.
