+++
title = "ADR-003: Adopt Event Sourcing for Order Domain"
weight = 3
description = "Implement event sourcing for the Order Service to provide a complete audit trail and enable temporal queries."

[extra]
status = "proposed"
adr_number = "ADR-003"
decision_date = "2025-06-10"
+++

## Context

The Order Service processes approximately 12,000 orders per day, each passing through a complex lifecycle: created, confirmed, payment authorized, fulfilled, shipped, delivered, and potentially returned or refunded. Regulatory and business requirements demand:

- **Complete audit trail** -- Every state transition must be recorded with the actor, timestamp, and reason. Current implementation uses a separate audit log table that is populated via application-level triggers, which has proven fragile and occasionally falls out of sync.
- **Temporal queries** -- Customer support needs to reconstruct the exact state of an order at any point in time to resolve disputes. The current snapshot-only model requires reverse-engineering state from log entries.
- **Event-driven integrations** -- Downstream services (Notification, Analytics, Inventory) consume order state changes. The current approach publishes events from the application layer after persisting state, creating a dual-write problem where events can be lost if the application crashes between the database commit and the message publish.

The team has evaluated two approaches:

1. **Change Data Capture (CDC)** -- Capture database changes via the write-ahead log and publish them as events. Lower implementation cost but limited to the shape of the database schema.
2. **Event Sourcing** -- Store the sequence of domain events as the primary source of truth and derive current state through projection. Higher implementation cost but provides a natural audit trail and eliminates the dual-write problem.

## Decision

We will implement event sourcing for the Order Service domain. The event store will be built on PostgreSQL (consistent with ADR-002) using an append-only events table partitioned by aggregate ID. Current state will be materialized through projections into read-optimized views.

Key design choices:

- **Event store schema** -- Events will be stored with aggregate ID, sequence number, event type, payload (JSONB), metadata (actor, correlation ID, causation ID), and timestamp.
- **Projections** -- A synchronous in-process projection will maintain the current order state for command validation. Asynchronous projections will feed read models optimized for specific query patterns.
- **Snapshots** -- For aggregates with more than 100 events, periodic snapshots will be stored to bound replay time during aggregate rehydration.
- **Event publishing** -- An outbox pattern with a polling publisher will ensure events are reliably published to the message broker without dual-write risks.

## Consequences

### Positive

- The event log becomes the single source of truth, providing a complete and tamper-evident audit trail that satisfies regulatory requirements without separate audit infrastructure.
- Temporal queries become straightforward: replay events up to the desired timestamp to reconstruct past state.
- The dual-write problem is eliminated. Events stored in the database are the same events published to downstream consumers via the outbox pattern.
- New read models can be created retroactively by replaying the full event history, enabling use cases that were not anticipated at design time.

### Negative

- Event sourcing introduces a steeper learning curve for developers accustomed to CRUD patterns. The team will need training on event modeling, aggregate design, and eventual consistency.
- Schema evolution for events requires careful versioning. Once an event is persisted, its schema is immutable. Upcasting strategies must be defined for handling schema changes.
- Debugging becomes more complex because the current state is derived rather than directly stored. Developers must trace through event sequences to understand state.
- Storage requirements will increase, as events are never deleted. Projected read models also add to the storage footprint.

### Risks

- If aggregate boundaries are drawn incorrectly, cross-aggregate transactions will require sagas, adding significant complexity. Mitigation: conduct thorough event storming workshops before implementation.
- Projection lag may cause stale reads in high-throughput scenarios. Mitigation: use synchronous projections for critical read paths and monitor projection latency.
- The team has limited production experience with event sourcing. Mitigation: engage an external consultant for the initial implementation and conduct a proof-of-concept with a simplified order flow before committing to full adoption.

## Status

Proposed on 2025-06-10. Scheduled for Architecture Board review on 2025-06-24. A proof-of-concept implementation is underway to validate performance characteristics under expected load.

## Authors

- Anika Rao, Senior Backend Engineer
- James Thornton, Order Domain Tech Lead
