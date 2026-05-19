+++
title = "Overview"
description = "What Lattice is, what it isn't, and the constraints that shaped it."
date = "2026-05-02"
weight = 1
tags = ["intro", "architecture"]
+++

## What Lattice is

Lattice is a property-graph engine for read-heavy workloads where latency
matters more than write throughput. The query layer is decoupled from
storage so that planners can target either the embedded RocksDB backend or
a cluster-mode shard set without changes to the user-facing API.

A typical deployment looks like this:

```text
   ┌────────────┐    ┌────────────┐    ┌────────────┐
   │  Gateway   ├───▶│  Planner   ├───▶│  Executor  │
   └────────────┘    └────────────┘    └─────┬──────┘
                                             ▼
                                     ┌───────────────┐
                                     │ Storage Shard │
                                     └───────────────┘
```

## What Lattice is not

Lattice does not attempt to be a general-purpose graph database. There is
no ACID transaction guarantee across shards, no support for online schema
migration, and no plan to add either. If you need those, use a different
tool.

## Design constraints

| Constraint        | Value                            |
|-------------------|----------------------------------|
| p99 read latency  | ≤ 5 ms at 100k QPS               |
| Max graph size    | 50B edges per cluster            |
| Replication       | Asynchronous, log-shipped        |
| Index types       | Property, edge-type, full-text   |

The numbers above are not aspirational. They are the contract the engine
holds. If a release misses them, the release is reverted.

## Reading order

1. **Graph Model** — the type system the planner depends on.
2. **Query API** — how to express traversals.
3. **Deployment** — how to run a cluster without paging at 3 a.m.
