+++
title = "Recovery Plans"
weight = 2
sort_by = "weight"
+++

# Recovery Plans

This section contains detailed recovery procedures for each infrastructure layer. Every plan follows a standardized structure: pre-conditions, step-by-step recovery actions, validation checks, and rollback procedures.

## Plan Structure

Each recovery plan includes:

- **Scope** -- Which systems and services are covered
- **Prerequisites** -- Required access, credentials, and tooling
- **Recovery Steps** -- Ordered sequence of actions with expected outcomes
- **Validation** -- How to confirm the recovery was successful
- **Rollback** -- How to revert if the recovery introduces new issues

## Recovery Plans by Layer

| Layer | Plan | RTO Range | Complexity |
|---|---|---|---|
| Data | [Database Recovery](database-recovery/) | 15 min -- 4 hours | High |
| Application | [Service Failover](service-failover/) | 5 min -- 1 hour | Medium |
| Network | [Network Recovery](network-recovery/) | 10 min -- 2 hours | High |
