+++
title = "Query Tuning"
description = "The ef_search, oversampling, and filter knobs that trade recall against latency at query time."
weight = 5
date = "2025-08-21"
toc = true
[extra]
tier = "tuning"
+++

## The one query-time dial

Everything covered so far — `M`, `ef_construction`, the quantization tier — is fixed once the graph is built. `ef_search` is the one parameter you tune per query, and it's the one most worth understanding well, because it is the direct dial between recall and latency.

`ef_search` sets how many candidates the base-layer search keeps under consideration before returning the top results. A small value visits fewer vectors and answers faster but risks missing true neighbors that a wider search would have found; a large value gets closer to exact results at the cost of touching more of the graph. Because this is a query-time parameter, you can raise it for queries where correctness matters more than speed and lower it for high-volume, latency-sensitive paths, all against the same index.

<!-- more -->

## Tuning it per query

```rust
use jasper::QueryOptions;

// Fast path: lower ef_search for a typeahead endpoint.
let quick = index.query(&embedding)
    .options(QueryOptions::new().ef_search(40))
    .limit(10)
    .execute()?;

// Slow path: wider search for a nightly recall report.
let thorough = index.query(&embedding)
    .options(QueryOptions::new().ef_search(400))
    .limit(10)
    .execute()?;
```

```python
# Fast path: lower ef_search for a typeahead endpoint.
quick = index.query(embedding, ef_search=40, limit=10)

# Slow path: wider search for a nightly recall report.
thorough = index.query(embedding, ef_search=400, limit=10)
```

{{ alert(type="tip", body="Start every new collection at ef_search=100 and measure recall against a labeled sample before touching it. Guessing a value from first principles almost always under- or over-shoots — the right number depends on how clustered your embeddings are, which no formula captures.") }}

## Filters change the picture

Filters interact with `ef_search` in a way that's easy to miss. A post-filter — search first, then discard results that don't match a predicate — can silently starve a query of results if the predicate is selective, because the candidates `ef_search` gathered might all get filtered out. Jasper's pre-filter mode instead restricts graph traversal to matching vectors as it walks, which costs more per step but guarantees the result count you asked for whenever enough matching vectors exist. For predicates that exclude more than roughly 90% of the collection, prefer pre-filtering and raise `ef_search` to compensate for the narrower graph the walk is now confined to.
