+++
title = "Replication Methods"
description = "Detailed methodology for the replication, including codebase corrections, hardware specification, and evaluation protocol."
tags = ["paper", "light", "replication", "comparison", "verdict"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Methods &middot; Replication Protocol</p>
  <h1 class="paper-title">Replication Methodology</h1>
</header>

## Codebase Corrections

During our initial replication attempt, we identified three bugs in the original codebase that affected reproducibility:

| Bug ID | File | Issue | Impact |
|---|---|---|---|
| B-1 | `data/loader.py` | Off-by-one in sentence boundary detection | 0.3% of sentences truncated; minor F1 impact |
| B-2 | `model/attention.py` | Incorrect mask application in multi-head attention | Sporadic NaN in gradients; training instability |
| B-3 | `eval/metrics.py` | Entity-level F1 computed as micro instead of macro | Inflated scores for frequent entity types |

Bug B-3 is the most consequential. The original paper reports "entity-level F1" but the evaluation code computes micro-averaged F1, which weights frequent entity types (PER, LOC) more heavily than rare types (MISC). We report both micro and macro F1 in our results and note that the discrepancy is largest for languages with skewed entity distributions (Yoruba, Quechua).

All bug fixes were submitted as pull requests to the original repository and have been acknowledged by the original authors.

## Hardware and Environment

| Component | Original | Replication |
|---|---|---|
| GPU | NVIDIA A100 40GB | NVIDIA A100 40GB |
| CPU | AMD EPYC 7742 | AMD EPYC 7763 |
| RAM | 512 GB | 512 GB |
| CUDA | 11.7 | 11.7 |
| PyTorch | 1.13.1 | 1.13.1 |
| Python | 3.9.16 | 3.9.16 |
| OS | Ubuntu 20.04 | Ubuntu 20.04 |
| Random seed | 42 | 42 |

We used Docker containers to ensure environment reproducibility. The container specification is available in our replication package.

## Evaluation Protocol

Each experiment was run five times with different random seeds (42, 123, 456, 789, 1024). We report the mean and standard deviation across runs. Statistical significance was assessed using paired bootstrap resampling (10,000 iterations) following the methodology of Berg-Kirkpatrick et al. (2012).

A result was considered "confirmed" if:
- The replicated mean falls within 2 percentage points of the original reported value, OR
- The 95% confidence interval of the replicated result overlaps with the original reported value

A result was considered "partially confirmed" if:
- The direction of the effect is preserved but the magnitude differs by more than 2 percentage points
- Qualitative conclusions remain valid but quantitative thresholds change

A result was considered "failed" if:
- The direction of the effect reverses, OR
- The magnitude differs so substantially that the original conclusion no longer holds
