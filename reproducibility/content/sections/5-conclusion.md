+++
title = "5. Conclusion and Recommendations"
description = "Summary of replication outcomes and recommendations for future reproducibility practices."
weight = 5
template = "post"
tags = ["replication", "conclusion", "recommendations"]
categories = ["sections"]
[extra]
section_number = "5"
+++

## Summary of Findings

This replication study examined three principal claims from Park et al. (2024):

1. **Performance parity (CONFIRMED):** The attention-only architecture does achieve comparable F1 scores to the full transformer baseline for cross-lingual NER in low-resource settings. The average difference of 1.2 F1 points is within expected variance.

2. **Attention head importance (PARTIALLY CONFIRMED):** Some attention heads are more important than others, but the specific claims about head 3 being uniquely critical and head 7 being redundant are not robustly supported. Head importance rankings vary substantially across random seeds.

3. **Computational efficiency (FAILED):** The reported 2.1x speedup reflects only the training loop, not the full pipeline. End-to-end, the attention-only model provides no meaningful efficiency advantage.

## Recommendations for Authors

Based on this replication experience, we offer the following recommendations:

- **Report results across multiple random seeds.** At minimum, report mean and standard deviation across 3-5 seeds. Ideally, report full distributions.
- **Include all pipeline stages in efficiency comparisons.** Measure and report wall-clock time for the complete pipeline, from raw data to final evaluation.
- **Distinguish micro and macro averaging explicitly.** When reporting aggregate metrics, state the averaging method and consider reporting both.
- **Release complete environments, not just code.** Docker containers or Nix flakes enable exact reproduction of the computational environment.

## Recommendations for the Community

- **Normalise replication as valuable scholarship.** This study required significant time and resources. Replication reports should be treated as first-class contributions worthy of publication and career credit.
- **Establish standard efficiency measurement protocols.** The field needs consensus on what constitutes a fair efficiency comparison.
- **Fund independent replication.** Dedicated funding for replication studies would accelerate the identification and correction of unreliable findings.

## Data and Code Availability

Our complete replication package, including all code, data, Docker containers, and raw results, is available at Zenodo (DOI: 10.5281/zenodo.XXXXXXX) under an MIT licence. The original codebase with our bug fixes is available as a fork with tagged releases corresponding to each experiment.
