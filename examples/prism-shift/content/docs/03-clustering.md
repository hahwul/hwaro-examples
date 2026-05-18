+++
title = "Clustering"
description = "Peer discovery, the consensus protocol, and partition handling."
date = "2026-02-08"
weight = 3
tags = ["distributed", "reference"]
+++

## Three-node consensus

A cluster of three identically-provisioned nodes is the smallest production
configuration. The cluster elects a leader through a single-round protocol;
the two followers maintain a synchronous replica of the leader's journal.

```
        ┌─────────┐
        │ leader  │
        └────┬────┘
       ┌─────┴─────┐
   ┌───┴───┐   ┌───┴───┐
   │ peer1 │   │ peer2 │
   └───────┘   └───────┘
```

Writes succeed once two of three nodes have durably accepted them. A single
node failure does not block writes; two simultaneous failures do.

## Joining a cluster

```bash
# on the new node
prism join --leader node-01.prism.local:8400 \
           --token $(cat /etc/prism/join.token)
```

The leader streams its current journal to the joining node, then transitions
the new node into the active replica set. The procedure is hands-off and
typically completes inside ten seconds on a quiet cluster.

## Partition handling

If the cluster splits, the side containing a majority of nodes continues
serving writes; the minority side becomes read-only until the partition
heals. The runtime never serves stale writes — a read against a partitioned
follower returns `STALE` rather than an outdated value.

> **Note** — partition recovery is automatic but not instantaneous. Plan
> for up to thirty seconds of write unavailability following a partition
> event.
