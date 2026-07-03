+++
title = "Building the HNSW Graph"
description = "Layers, M, and ef_construction: how vectors join a hierarchical navigable small world graph."
weight = 2
date = "2025-03-04"
toc = true
[extra]
tier = "graph"
+++

## Layers and greedy descent

Hierarchical navigable small world graphs give Jasper approximate nearest-neighbor search that scales sub-linearly with collection size, at the cost of never being perfectly exact. In exchange for a small, tunable amount of recall, queries touch a tiny fraction of the index instead of every row.

Every inserted vector is assigned a maximum layer at random, drawn from an exponentially decaying distribution — most vectors land only on the base layer, a few climb several layers up. The top layers are sparse long-range shortcuts; the base layer is dense and holds every vector in the collection. A query starts at the single entry point on the topmost layer, greedily walks toward the target on each layer, and drops down a layer each time it can't improve further, until it runs the final, most thorough search on the base layer.

## The two build-time knobs

Two parameters shape the graph at build time. `M` is the maximum number of neighbors each vector keeps per layer — larger graphs give better recall but cost more memory and slower inserts. `ef_construction` controls how wide the candidate list is while the graph decides which neighbors to keep for a new vector — larger values build a better-connected graph at the cost of slower inserts.

<!-- more -->

## Setting them in code

```rust
use jasper::{Index, IndexOptions, DistanceMetric};

// M=16 and ef_construction=200 is a reasonable default for
// 768-dimensional embeddings up to a few tens of millions of rows.
let opts = IndexOptions::new(768, DistanceMetric::Cosine)
    .with_m(16)
    .with_ef_construction(200)
    .with_max_layers(6);

let index = Index::create("catalog.jasper", opts)?;
println!("entry point layer: {}", index.stats().top_layer);
```

```python
import jasper

index = jasper.Index.create(
    "catalog.jasper",
    dim=768,
    metric="cosine",
    m=16,
    ef_construction=200,
    max_layers=6,
)

stats = index.stats()
print("entry point layer:", stats.top_layer)
```

Raising `M` from 16 to 32 roughly doubles the graph's memory footprint and typically buys one to two additional points of recall at a fixed `ef_search` — worth it for collections where every query matters, rarely worth it once you're already above 98% recall. The query-tuning chapter covers the matching search-time parameter, `ef_search`, which you can change per query without rebuilding anything.
