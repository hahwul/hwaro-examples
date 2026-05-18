+++
title = "Deployment"
description = "Provisioning, packaging, and the upgrade path."
date = "2026-05-12"
weight = 4
tags = ["ops"]
+++

## A reference deployment

A reference deployment of Stratum is three nodes of identical shape,
each provisioned with eight cores, 32 GiB of memory, and a dedicated
NVMe-class data volume. The three nodes elect a leader; the two
followers replicate the leader's journal.

```
┌────────────┐    ┌────────────┐    ┌────────────┐
│  node-01   │    │  node-02   │    │  node-03   │
│  leader    │ ←→ │  follower  │ ←→ │  follower  │
└────────────┘    └────────────┘    └────────────┘
```

A single-node deployment is supported for development, but the runtime
will print a warning at startup and the warning cannot be silenced.

## Packaging

The runtime is distributed as a single statically linked binary. The
binary has no runtime dependencies other than the platform's C library.
A container image is also published, built `FROM scratch` and weighing
less than 32 MiB.

## Upgrade path

Upgrades are performed rolling, one node at a time, followers first.
The runtime guarantees that a journal written by version N is readable
by version N+1; the inverse is not guaranteed. To downgrade, restore
from a snapshot taken under the older version.

| From    | To      | Method                                          |
|---------|---------|-------------------------------------------------|
| 1.0     | 1.1     | Rolling, no downtime.                           |
| 1.0     | 1.2     | Rolling, no downtime.                           |
| 1.x     | 2.0     | Snapshot + restore. Read the upgrade notes.     |
