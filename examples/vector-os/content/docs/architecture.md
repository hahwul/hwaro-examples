+++
title = "01.03 — Architecture"
description = "How the control plane, workers, and event log fit together."
weight = 3

[extra]
section_label = "01 · Docs"
section_number = "01.03"
+++

A Vector OS deployment has three moving parts: a control plane, a fleet of
workers, and an event log that connects them. Everything else — the CLI, the
HTTP gateway, the metrics endpoint — is a thin layer over those three.

```
                      +---------------------+
                      |   control plane     |
                      |  (scheduler + api)  |
                      +----------+----------+
                                 |
                  +--------------+--------------+
                  |       event log (raft)      |
                  +--------------+--------------+
                                 |
        +-----------+------------+------------+-----------+
        |           |            |            |           |
    +---+---+   +---+---+    +---+---+    +---+---+   +---+---+
    | node  |   | node  |    | node  |    | node  |   | node  |
    |  a01  |   |  a02  |    |  b01  |    |  b02  |   |  c01  |
    +-------+   +-------+    +-------+    +-------+   +-------+
```

## Control plane

The control plane is a single binary running in HA mode behind a virtual IP.
Three replicas is the standard deployment; five for regulated workloads. The
replicas elect a leader using Raft and serialize writes through the leader. All
reads are linearizable by default; clients can opt in to stale reads with a
header.

The scheduler is the core of the control plane. It consumes the resource
catalog and the pending queue, produces placements, and writes them to the
event log. Placements are advisory until a worker accepts them; workers may
refuse a placement (for example, if a local disk is full) and the scheduler
will retry on a different node.

## Workers

A worker is the `vector-os` binary running with `--role=worker`. On startup it
registers its capabilities — CPU count, memory, attached accelerators, local
storage, network zones — and opens a long-lived gRPC stream to the control
plane. Tasks arrive on that stream; status and metrics are pushed back the
same way.

Workers are stateless from the cluster's perspective. A worker that loses its
connection and re-registers within the grace window picks up where it left off.
A worker that exceeds the grace window is fenced — the control plane revokes
its leases and reschedules its tasks elsewhere.

## Event log

The event log is the system's source of truth. Every placement, every status
change, every lease grant is an entry in the log. The log is append-only and
replicated across the control plane replicas. Operators can stream the log
through the `vector-os events` command for audit and debugging.

The log is also where Vector OS earns its name: every entry is a typed vector
of fields, and the scheduler reasons about state by folding the log into a
materialized view. This makes recovery cheap — a fresh replica catches up by
replaying the log from the last snapshot.
