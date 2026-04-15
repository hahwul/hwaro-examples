+++
title = "1. Data Collection and Corpus Construction"
description = "Bibliographic data sources, query strategy, and deduplication pipeline for assembling the computational neuroscience corpus."
weight = 1
template = "post"
tags = ["data", "bibliometrics", "corpus"]
categories = ["sections"]
[extra]
section_number = "1"
+++

## Data Sources

We assembled our corpus from three complementary bibliographic databases:

1. **PubMed/MEDLINE** -- queried via the Entrez API for all articles tagged with MeSH terms *Computational Neuroscience*, *Neural Networks (Computer)*, and *Models, Neurological* published between 2000-01-01 and 2025-12-31.
2. **Scopus** -- queried using the TITLE-ABS-KEY field for the same date range with subject area restricted to Neuroscience and Computer Science.
3. **Semantic Scholar** -- used the Academic Graph API to retrieve papers in the *Computational Neuroscience* field of study with at least 1 citation.

## Query Strategy

Our Boolean query combined domain-specific terms with methodological descriptors:

```
("computational neuroscience" OR "neural coding" OR "spiking network"
 OR "connectomics" OR "brain network" OR "neural decoding")
AND
("model" OR "simulation" OR "algorithm" OR "network analysis")
```

This yielded 82,461 candidate records before deduplication.

## Deduplication Pipeline

We applied a three-stage deduplication procedure:

| Stage | Method | Records Removed |
|---|---|---|
| 1. Exact DOI match | DOI string normalisation | 18,204 |
| 2. Fuzzy title match | Levenshtein distance < 3 | 9,842 |
| 3. Author-year match | First author surname + year + journal | 7,197 |
| **Final corpus** | | **47,218** |

## Citation Extraction

For each paper in the final corpus, we extracted all outgoing citations that point to other papers within the corpus (closed-graph constraint). This produced 312,847 directed edges. Self-citations (same first author) account for 4.2% of edges and were retained but flagged for sensitivity analysis.
