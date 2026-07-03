+++
title = "Ledger Core: an event-sourced double-entry ledger"
date = "2025-02-11"
description = "Designing a Kafka-backed, event-sourced ledger that makes every balance change replayable and auditable, without sacrificing the double-entry invariant."

[extra]
stack = ["Go", "Kafka", "PostgreSQL", "Event sourcing"]
+++

The ledger core is the system every other payment service ultimately answers to: the single, append-only record of every balance change on the platform. Before this rebuild, balances lived in mutable Postgres rows updated in place, which meant the only record of *how* a balance reached its current value was whatever happened to be in application logs at the time.

<!-- more -->

The rebuild treats the ledger as an event log first and a queryable balance second. Every state change is an immutable `LedgerEntry` event, written to Kafka with a partition key on account ID to guarantee ordering per account. Postgres exists downstream as a projection — a materialized view rebuilt entirely from the event log, never written to directly by anything except the projector.

Two invariants made this trustworthy enough to replace the old system:

- **Double-entry at write time, not read time.** Every event carries both a debit and a credit leg, validated against each other before the event is ever published. A ledger entry that doesn't balance never enters the log, so there is no reconciliation step needed to catch an unbalanced write — it's structurally impossible.
- **Deterministic replay.** The projector can be pointed at offset zero and rebuild the entire balance table from scratch. We run this monthly against a shadow database and diff it against production as a standing correctness check, not just a disaster-recovery drill.

The check constraint that enforces the invariant at the storage layer, for the projection table:

```sql
create table ledger_entries (
    id            uuid primary key,
    account_id    uuid not null,
    amount_cents  bigint not null,
    entry_type    text not null check (entry_type in ('debit', 'credit')),
    event_offset  bigint not null unique,
    posted_at     timestamptz not null
);

-- enforced in the projector, not the database: every event_id must
-- appear exactly once as a debit and once as a credit before commit
```

Snapshotting keeps replay time bounded — accounts with long histories get a periodic balance snapshot event, so a rebuild only needs to replay events since the last snapshot rather than the account's entire lifetime. Eighteen months in, the ledger has never needed a manual balance correction; every discrepancy anyone has found was a bug in a consumer, not in the log.
