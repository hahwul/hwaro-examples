+++
title = "Pipelines"
weight = 2
sort_by = "weight"
+++

# Pipelines

Pipelines are the core abstraction in Conduit. Each pipeline defines a directed data flow through three stages: source, transform, and sink.

## Pipeline Flow

```
  Input Data            Processing              Output Data
  ==========    =========================    ==============

  +--------+    +-------+    +----------+    +----------+
  | Source  | -> | Stage | -> |  Stage   | -> |   Sink   |
  +--------+    +-------+    +----------+    +----------+
                     |              |
                  filter          map
                  sample        enrich
                  route       aggregate
```

## Stage Types

Every pipeline consists of exactly one source, zero or more transforms, and exactly one sink. Transforms are applied in the order they appear in the configuration file.

Explore each stage type in detail:

- [Sources](/docs/pipelines/sources/) -- Where data enters the pipeline
- [Transforms](/docs/pipelines/transforms/) -- How data is processed
- [Sinks](/docs/pipelines/sinks/) -- Where data is written
