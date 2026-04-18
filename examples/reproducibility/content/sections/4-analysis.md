+++
title = "4. Analysis and Discussion"
description = "Interpretation of replication outcomes, sources of discrepancy, and implications for the field."
weight = 4
template = "post"
tags = ["replication", "analysis", "discussion"]
categories = ["sections"]
[extra]
section_number = "4"
+++

## Sources of Discrepancy

The discrepancies we observe have three identifiable sources:

**Bug corrections.** Fixes B-1 through B-3 account for approximately 0.5-1.0 F1 points of difference in the main results. Bug B-3 (micro vs. macro F1) has a larger impact on languages with skewed entity distributions, explaining the per-language variation.

**Random seed sensitivity.** The original paper reports results from a single random seed. Our 5-seed analysis reveals meaningful variance (standard deviations of 0.5 to 1.8 F1 across experiments). This is particularly relevant for the attention head ablation results, where the high variance for head 7 (sd = 1.8) suggests that the original finding of redundancy may have been a seed-specific artefact.

**Measurement scope.** The efficiency claim failure stems entirely from measurement scope: training-only vs. end-to-end. This is not a bug or a statistical issue but a difference in what was measured and what was reported.

## Implications

The partial confirmation of this paper has several implications for the broader field:

**Attention head interpretability is fragile.** The sensitivity of head importance rankings to random seeds suggests that claims about specific attention heads encoding specific information should be treated with caution unless validated across multiple initialisations. This echoes concerns raised by Jain and Wallace (2019) about the reliability of attention-based explanations.

**Efficiency claims need standardisation.** The community lacks a standard protocol for measuring and reporting computational efficiency. Should preprocessing be included? Data loading? Evaluation? Without standardised measurement boundaries, efficiency comparisons between methods are unreliable.

**Single-seed reporting is insufficient.** This replication reinforces the argument that NLP papers should report results across multiple random seeds. The original paper's single-seed results were not wrong, but they were not representative of the distribution of outcomes.

## Correspondence with Original Authors

We shared our findings with the original authors prior to submission. They acknowledged all three bug fixes and agreed that the efficiency measurement excluded preprocessing time. They noted that the preprocessing step was intended as a one-time cost that could be amortised across multiple training runs, a valid point that was not communicated in the original paper.

Regarding the attention head ablation discrepancy, the authors expressed surprise at the head 7 results and indicated interest in further investigation. They suggested that the discrepancy might relate to differences in the AMD EPYC CPU generation (7742 vs. 7763) affecting random number generation during data loading, though we consider this unlikely to produce effects of this magnitude.
