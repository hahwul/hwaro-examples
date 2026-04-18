+++
title = "1. Summary of the Original Study"
description = "Overview of Park et al. (2024) and its principal claims about attention-based cross-lingual NER."
weight = 1
template = "post"
tags = ["replication", "original-study", "NLP"]
categories = ["sections"]
[extra]
section_number = "1"
+++

## Original Study Overview

Park et al. (2024) proposed a simplified architecture for cross-lingual named entity recognition (NER) in low-resource languages. The core contribution was demonstrating that an attention-only model -- stripped of feed-forward layers, layer normalisation, and residual connections found in standard transformers -- could match the performance of full transformer models when transferring NER capabilities from high-resource source languages (English, Chinese) to low-resource targets.

The study evaluated performance on five low-resource target languages: Yoruba, Swahili, Quechua, Welsh, and Tagalog, using the WikiANN dataset for all languages. The model was trained on English and Chinese NER data and evaluated zero-shot on the target languages.

## Principal Claims

The paper advanced three principal claims:

**Claim 1 (Performance Parity):** The attention-only model achieves F1 scores within 2 percentage points of a full mBERT-based transformer on all five target languages, with a 5-language average of 80.2 F1.

**Claim 2 (Attention Head Analysis):** Through systematic ablation, the authors identified attention head 3 as "critical" for cross-lingual transfer (removal causes 8.4 F1 drop) and head 7 as "redundant" (removal causes only 0.3 F1 drop). They interpreted this as evidence that cross-lingual transfer relies on specific, identifiable attention patterns rather than distributed representations.

**Claim 3 (Computational Efficiency):** The simplified architecture trains 2.1 times faster than the full transformer baseline, making it practical for rapid deployment in low-resource settings where computational resources are limited.

## Significance

The paper was well-received at ACL 2024, receiving an Outstanding Paper honourable mention. Its appeal lay in the combination of practical utility (faster, simpler models for low-resource NER) and scientific insight (specific attention heads encode cross-lingual structure). If the claims hold, the work has implications for both model design and our understanding of how transformers represent cross-lingual information.
