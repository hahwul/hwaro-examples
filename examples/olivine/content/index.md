+++
title = "Olivine"
description = "Build streaming ETL pipelines with backpressure that just works"
template = "home"
+++

Most stream processors treat backpressure as an afterthought — a queue that
silently grows until a pod is killed and a page fires at 3am. Olivine treats it
as the first thing. Demand flows upstream from the sink, credit by credit, so a
slow database or a rate-limited API gently throttles the source instead of
drowning it. Nothing buffers without a reader. Nothing spills to disk you did
not ask for.

Because flow control is built in, the rest of the framework can stay small. A
pipeline is three kinds of stage — a **source** that reads, one or more
**transforms** that reshape, and a **sink** that commits — wired together and
handed to the runtime. Checkpoint barriers ride the same channels as your data,
so every sink can offer exactly-once delivery without a bolt-on transaction
manager. You describe the shape of the flow; Olivine keeps it alive, in order,
and honest about how fast it can go.
