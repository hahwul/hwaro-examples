+++
title = "03.03 — Glossary"
description = "Terms used in this documentation."
weight = 3

[extra]
section_label = "03 · Reference"
section_number = "03.03"
+++

Terms used across the documentation. Where a term has a precise meaning inside
Vector OS that differs from common usage, the entry calls that out.

## Terms

**Catalog.** The typed inventory of resources the scheduler reasons about.
The catalog is materialized from the event log and refreshed on every write.

**Control plane.** The set of nodes running with `--role=control`. The
control plane elects a leader, accepts client writes, and schedules tasks. The
term refers to the cluster of replicas, not any single replica.

**Event log.** The append-only log of every state change in the cluster. The
log is the system's source of truth. Snapshots compact older entries.

**Fence.** To revoke a worker's leases and forbid it from accepting new
placements. Fencing is irreversible; a fenced worker must re-register from
scratch.

**Grace window.** The period during which a disconnected worker can
re-register without losing its tasks. The default is sixty seconds.

**Lease.** A time-bound claim on a resource. Tasks acquire leases on the
resources they need; the scheduler revokes leases when a task exceeds its
deadline.

**Overlay.** The optional WireGuard-based mesh network that lets nodes in
different L2 domains communicate as if local.

**Placement.** A decision by the scheduler that a task should run on a
specific node. Placements are advisory until the worker accepts them.

**Token.** A short-lived bearer credential used to join a cluster. Tokens
have a role and a TTL and are single-use.

**Zone.** A failure domain label attached to a node. The scheduler spreads
replicas across zones when a task requests anti-affinity.
