+++
title = "Hybrid Keyword Scoring"
description = "Fusing an inverted-index keyword score with vector similarity into one ranked list."
weight = 4
date = "2025-06-02"
toc = true
[extra]
tier = "scoring"
+++

## Two searches, one ranked list

Vector search finds semantic neighbors even when they share no vocabulary with the query. That is exactly the case where it struggles most with proper nouns, part numbers, and exact phrases, where a plain keyword match is the more trustworthy signal. Jasper keeps a small inverted index of the text alongside the graph so a single query can draw on both.

A hybrid query runs two searches in parallel: the HNSW graph returns its usual ranked candidates by vector distance, and a BM25 search over the inverted index returns its own ranked candidates by term relevance. Jasper then fuses the two ranked lists with reciprocal rank fusion — each candidate's score is the sum of `1 / (k + rank)` across the lists it appears in, where `k` is a small constant that discounts the effect of exact rank position. Fusing on rank rather than raw score sidesteps the problem that BM25 and cosine distance live on completely different scales.

<!-- more -->

## Running a hybrid query

```rust
use jasper::{Index, HybridQuery};

let results = index
    .hybrid_query(&query_embedding)
    .keywords("model RS-40 replacement gasket")
    .rrf_k(60)
    .limit(20)
    .execute()?;

for hit in results {
    println!("{:>6}  fused={:.4}  vector={:.4}  keyword={:.4}",
        hit.id, hit.fused_score, hit.vector_score, hit.keyword_score);
}
```

```python
import jasper

results = index.hybrid_query(
    query_embedding,
    keywords="model RS-40 replacement gasket",
    rrf_k=60,
    limit=20,
)

for hit in results:
    print(hit.id, hit.fused_score, hit.vector_score, hit.keyword_score)
```

The keyword side is optional per query — a plain `index.query(embedding)` skips the inverted index entirely and costs nothing extra. It's worth reaching for hybrid scoring specifically on catalogs where users search by identifiers your embedding model was never trained to represent well: SKUs, model numbers, error codes. Pure vector search tends to bury those under looser semantic matches; fusion pulls the exact hit back to the top without abandoning the semantic ones.
