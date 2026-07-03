+++
title = "Index Anatomy"
description = "What a .jasper file actually contains: manifest, vector store, graph store, and write-ahead log."
weight = 1
date = "2025-02-10"
toc = true
[extra]
tier = "core"
+++

A Jasper index is a single directory, usually opened through one path like `catalog.jasper`, but it is not one file underneath. Four pieces live inside it, and understanding what each one holds explains most of the engine's behavior.

## Four files, one directory

The **manifest** is a small TOML document recording the dimension, distance metric, quantization tier, and the current segment list. It is the only file Jasper rewrites atomically on every commit — everything else is append-only or immutable once written, which is what makes crash recovery tractable.

The **vector store** holds the actual embeddings, laid out as fixed-width rows so any vector can be read with a single seek. Depending on the collection's quantization tier this is raw float32, scalar int8, or product-quantized codes — see the quantization chapter for how that choice gets made.

The **graph store** holds the HNSW adjacency lists: for every vector, its neighbor list at each layer it participates in. This is stored separately from the vectors themselves so that graph traversal — which touches ids and offsets far more than raw vector bytes — stays cache-friendly.

The **write-ahead log** records inserts and deletes before they are reflected in the graph. On a clean shutdown it is empty; on a crash, replaying it is what makes the index consistent again on the next open.

<!-- more -->

## Compacting segments

Segments accumulate as you insert. Jasper compacts them in the background once the WAL crosses a size threshold, merging small segments into the vector and graph stores and truncating the log. You can also compact manually, which is worth doing after a large bulk load:

```rust
use jasper::{Index, IndexOptions, DistanceMetric};

let opts = IndexOptions::new(768, DistanceMetric::Cosine)
    .with_m(16)
    .with_ef_construction(200);

let mut index = Index::open("catalog.jasper", opts)?;

for (id, embedding) in rows {
    index.insert(id, &embedding)?;
}

// Fold the WAL into the segment stores and reclaim tombstoned ids.
index.compact()?;
index.flush()?;
```

```python
import jasper

index = jasper.Index.open(
    "catalog.jasper",
    dim=768,
    metric="cosine",
    m=16,
    ef_construction=200,
)

for id, embedding in rows:
    index.insert(id, embedding)

# Same compaction step from the Python bindings.
index.compact()
index.flush()
```

`flush()` is cheap to call often — it fsyncs the WAL, not the whole index — so most applications call it after every batch rather than waiting for a natural compaction point.
