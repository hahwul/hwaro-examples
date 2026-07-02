+++
title = "Quantization Tiers"
description = "Trading precision for memory with scalar and product quantization, and reranking to get it back."
weight = 3
date = "2025-04-18"
toc = true
[extra]
tier = "storage"
+++

## Scalar and product quantization

Full-precision float32 vectors are the easiest tier to reason about and the most expensive to keep in memory: a 768-dimensional collection costs just over 3 KB per row before the graph is even accounted for. Jasper offers two cheaper tiers for collections where that adds up.

**Scalar quantization** maps each float32 dimension to an int8 value using a per-collection min/max range, cutting storage to a quarter of the original size. Distance computations run directly on the quantized bytes, so search stays fast — accuracy loss is small and fairly uniform across most embedding models.

**Product quantization** splits each vector into subvectors and replaces each subvector with the id of its nearest entry in a learned codebook, typically shrinking a 768-dimension float32 vector to 96 bytes or less. This is a much bigger compression ratio, but it needs a training pass over a representative sample before it can quantize anything, and it loses more precision than scalar quantization does.

<!-- more -->

## Reranking against the cold store

Both tiers pair naturally with **reranking**: search the compressed index for a wide candidate list, then recompute exact distances against the handful of candidates using their full-precision vectors, which Jasper keeps in a separate cold store for exactly this purpose.

```rust
use jasper::{Index, IndexOptions, DistanceMetric, Quantization};

let opts = IndexOptions::new(768, DistanceMetric::Cosine)
    .with_quantization(Quantization::Product { subvectors: 96, bits: 8 })
    .with_rerank_candidates(200);

let mut index = Index::create("catalog.jasper", opts)?;

// Product quantization needs a training pass before the first insert.
index.train_quantizer(&sample_vectors)?;
index.insert_batch(&rows)?;
```

```python
import jasper

index = jasper.Index.create(
    "catalog.jasper",
    dim=768,
    metric="cosine",
    quantization="product",
    subvectors=96,
    rerank_candidates=200,
)

index.train_quantizer(sample_vectors)
index.insert_batch(rows)
```

A rule of thumb: reach for scalar quantization first, since it needs no training step and the accuracy cost is easy to predict. Move to product quantization only once memory is the binding constraint and you've confirmed the recall drop is acceptable for your query mix — measure it against a labeled sample rather than assuming.
