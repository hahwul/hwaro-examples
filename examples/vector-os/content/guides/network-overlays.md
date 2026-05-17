+++
title = "02.03 — Network overlays"
description = "Configure WireGuard mesh between nodes in different networks."
weight = 3

[extra]
section_label = "02 · Guides"
section_number = "02.03"
+++

Vector OS ships with an optional overlay network for clusters that span more
than one L2 domain. The overlay uses WireGuard under the hood and exchanges
peer keys through the control plane.

## When to use the overlay

You need the overlay if any of the following is true:

- Nodes are in different VPCs, regions, or providers.
- Workers are behind NAT and cannot accept inbound connections directly.
- Pod-to-pod traffic must be encrypted in transit.

You do not need the overlay if all nodes share an L2 segment and you already
encrypt traffic at a lower layer.

## Enable on the control plane

Add the overlay block to the control plane config and restart:

```toml
[overlay]
enabled = true
cidr = "10.66.0.0/16"
mtu = 1380
keepalive = "25s"
```

The control plane allocates an overlay address per node out of the CIDR and
distributes peer public keys.

## Enroll a worker

The worker enrolls automatically on next reconnect. Confirm the overlay is up
on the worker:

```shell
vector-os overlay status
# device:   vector0
# address:  10.66.0.14/16
# peers:    9 (9 active)
# rx:       1.4 GiB
# tx:       820 MiB
```

The `peers` count should match the total number of nodes minus one. If a peer
is listed but inactive, run `vector-os overlay diagnose <peer>` to see the last
handshake time and the most recent error.
