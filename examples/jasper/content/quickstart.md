+++
title = "Quickstart"
description = "Install Jasper, create an index, insert vectors, and run your first query in both Rust and Python."
date = "2026-01-12"
toc = true
[extra]
tier = "start"
+++

This page takes you from an empty directory to a working query in a few minutes, using the same 768-dimensional catalog example the rest of the manual reuses. Pick your language below — the two are kept in step throughout this manual so you can compare them line by line.

## Install

```bash
# Rust
cargo add jasper-engine

# Python
pip install jasper-vec
```

Jasper has no external services to stand up first. The crate and the package both bundle the index format; the file you create with `Index::create` is the entire deployment.

## Create an index and insert vectors

```rust
use jasper::{Index, IndexOptions, DistanceMetric};

fn main() -> jasper::Result<()> {
    let opts = IndexOptions::new(768, DistanceMetric::Cosine)
        .with_m(16)
        .with_ef_construction(200);

    let mut index = Index::create("catalog.jasper", opts)?;

    index.insert(101, &embed("gray wool overcoat, size 42"))?;
    index.insert(102, &embed("charcoal wool coat, tailored"))?;
    index.insert(103, &embed("waterproof hiking boots"))?;

    index.flush()?;
    Ok(())
}
```

```python
import jasper

index = jasper.Index.create(
    "catalog.jasper",
    dim=768,
    metric="cosine",
    m=16,
    ef_construction=200,
)

index.insert(101, embed("gray wool overcoat, size 42"))
index.insert(102, embed("charcoal wool coat, tailored"))
index.insert(103, embed("waterproof hiking boots"))

index.flush()
```

`embed(...)` above stands in for whatever embedding model you already call — Jasper stores and searches vectors, it does not produce them.

## Query it

```rust
let hits = index.query(&embed("wool jacket for cold weather"))
    .limit(5)
    .execute()?;

for hit in hits {
    println!("{:>6}  distance={:.4}", hit.id, hit.distance);
}
```

```python
hits = index.query(embed("wool jacket for cold weather"), limit=5)

for hit in hits:
    print(hit.id, hit.distance)
```

With three rows inserted, the query above returns ids 101 and 102 ahead of 103 — the graph has too few vectors yet to show its real behavior, but the shape of the call is exactly what it looks like at four million rows.

{{ alert(type="note", body="catalog.jasper is created fresh by Index::create every time this script runs. Reopen an existing index with Index::open instead — calling create on a path that already holds an index returns an error rather than overwriting it.") }}

## Where to go next

Start with [Index Anatomy](/concepts/index-anatomy/) if you want to understand the file you just created, or jump straight to [Query Tuning](/concepts/query-tuning/) if latency is already the thing you're optimizing for.
