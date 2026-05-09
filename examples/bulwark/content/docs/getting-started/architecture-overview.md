+++
title = "Architecture Overview"
weight = 3
tags = ["architecture", "overview", "topology"]
+++

# Architecture Overview

A high-level reference diagram of how Bulwark components interact across primary and secondary regions.

## Components

| Component | Role | Deployment |
|---|---|---|
| Controller | Orchestrates failover decisions and quorum | 3-node cluster, active-passive |
| Agent | Reports host and service health to the controller | One per monitored host |
| Replica Bus | Streams write-ahead logs to the secondary region | Always-on, dedicated link |
| DNS Switchboard | Updates traffic-routing records during failover | Managed via API |
| Audit Sink | Append-only ledger of every recovery action | Object storage with retention lock |

## Failure Domains

Bulwark assumes that any single region, availability zone, or rack can fail without warning. The control plane enforces a strict quorum across at least two regions to prevent split-brain promotions.

## Data Flow

1. Agents emit health checks every ten seconds.
2. The controller cross-references checks against threshold rules.
3. When a critical check fails, the controller drafts a failover plan.
4. The plan is dry-run, then approved by the on-call operator.
5. On approval, the DNS switchboard and replica bus execute in lock-step.

## Next Steps

Continue to [Setup and Prerequisites](../installation/) for installation, or jump to the [Business Impact Assessment](../assessment/) to define recovery targets.

---

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2025-09-01 | Initial publication |
