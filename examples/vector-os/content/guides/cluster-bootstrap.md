+++
title = "02.02 — Cluster bootstrap"
description = "Bring up a three-node control plane from scratch."
weight = 2

[extra]
section_label = "02 · Guides"
section_number = "02.02"
+++

This guide brings up a three-node control plane from scratch on a fresh
network. The same procedure works for five nodes; substitute the count where
indicated.

## Plan the topology

Pick three machines in the same region but in different failure domains. For
each, decide on a stable hostname or IP and open TCP 7700 between them. The
control plane talks Raft over this port; do not put a load balancer between
the peers.

| Role       | Hostname                   | Address       |
|------------|----------------------------|---------------|
| Bootstrap  | control-01.vector.internal | 10.0.0.11     |
| Peer       | control-02.vector.internal | 10.0.0.12     |
| Peer       | control-03.vector.internal | 10.0.0.13     |

## Bootstrap the first node

On `control-01`, run the bootstrap command. This initializes the Raft cluster
with the local node as the sole voter.

```shell
vector-os control bootstrap \
  --listen 0.0.0.0:7700 \
  --advertise 10.0.0.11:7700 \
  --data-dir /var/lib/vector-os
```

The command prints a join command for the remaining peers. Copy it.

## Join the remaining peers

On `control-02` and `control-03`, run the join command produced above. Each
peer downloads the current snapshot, replays the log, and is promoted to voter
once it has caught up.

```shell
vector-os control join \
  --upstream https://control-01.vector.internal:7700 \
  --token vct_…
```

## Verify quorum

From any of the three nodes:

```shell
vector-os control status
# leader:   control-01.vector.internal
# term:     4
# peers:
#   - control-01.vector.internal  voter  in-sync
#   - control-02.vector.internal  voter  in-sync
#   - control-03.vector.internal  voter  in-sync
```

You now have a working cluster. Add workers using the deploying-a-node guide.
