+++
title = "Gneiss"
description = "The graph query language for streaming data, documented clause by clause"
template = "home"
+++

Gneiss treats a graph the way a stream processor treats an event log: nodes and edges are facts that arrive over time, not rows sitting still in a table. A query compiles once and keeps running, re-evaluating its pattern as new events land and re-emitting rows whenever the match set changes.

Every clause below composes into that pipeline. `MATCH` describes the shape of the graph you care about, `WHERE` narrows it, `WINDOW` decides how much of an unbounded stream counts as "now," and `EMIT` decides when a result actually leaves the query. Read the tutorial to see them work together, or jump straight to a clause in the reference — each one opens with a railroad diagram of its exact grammar.
