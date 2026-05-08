+++
title = "Figure Captioning Conventions in Reproducible Research"
date = 2024-09-04
description = "A review of caption structure, numbering schemes, and accessibility metadata in five disciplinary archives."
[extra]
author = "Dr. S. Han"
+++
## 1. Introduction

The caption is the primary surface through which a figure communicates its claims to a reader who has not yet engaged the surrounding prose. Despite this, captioning conventions vary considerably across disciplines, and the structural metadata that supports machine indexing is inconsistently applied.

This article surveys captioning practice in five open archives spanning physics, biology, statistics, geoscience, and computer science. The aim is descriptive rather than prescriptive.

## 2. Corpus

A sample of 1,200 figures was drawn proportionally from the five archives, restricted to articles published between 2020 and 2024. Captions were segmented into four functional zones: identifier, summary, methods reference, and panel labels. Each zone was scored for presence and length.

## 3. Observations

Identifier conventions remain stable within disciplines but differ across them. Physics archives prefer numeric labels with period separators, while biology favors alphanumeric panel labels nested inside a numeric figure label.

Summary lengths vary from a median of fourteen words in computer science to a median of forty-one words in geoscience. The longer summaries in geoscience consistently include the data source and the spatial extent of the figure, suggesting a domain-specific norm rather than authorial verbosity.

Methods references appear in 62 percent of biology captions, 39 percent of geoscience captions, and below 20 percent in the remaining archives. The omission correlates with cases where the figure restates a result already detailed in the body.

## 4. Implications

Inconsistent caption structure imposes a load on automated extraction. Tools that attempt to align figures with their methods sections must currently rely on heuristics tuned per discipline. A modest convention, requiring an explicit reference to the data source within the caption, would resolve the majority of alignment failures observed in the corpus.

The full annotated dataset is available in the supplementary archive.
