+++
title = "Reconciliation Engine: matching the ledger against network files"
date = "2025-09-08"
description = "A streaming reconciliation pipeline that catches ledger discrepancies against card network settlement files within minutes instead of a day."

[extra]
stack = ["Go", "Kafka Streams", "PostgreSQL", "S3"]
+++

Card networks settle in batches: once a day, a settlement file lands describing every transaction they've cleared, and it has to match what our own ledger recorded for the same transactions. The old process ran this comparison as a nightly cron job — which meant a discrepancy discovered at 2am had already been wrong for up to twenty-four hours before anyone could act on it.

<!-- more -->

Reconciliation Engine turns the same comparison into a streaming pipeline. Settlement files still land in S3 on the network's schedule — we don't control that part — but the moment a file arrives, an S3 event triggers ingestion into Kafka as individual settlement records, and a Kafka Streams job joins them against the ledger's own settlement events in near real time instead of waiting for a batch window.

The matching itself is the genuinely hard part. Card networks split, combine, and reorder transactions in ways our ledger doesn't always mirror one-to-one, so exact-key matching misses a meaningful fraction of legitimate settlements:

```sql
-- discrepancies flagged for manual review: amount matches within
-- network rounding tolerance but transaction counts on either side
-- of the window don't reconcile — usually a split settlement
select network_batch_id, ledger_total_cents, network_total_cents,
       abs(ledger_total_cents - network_total_cents) as delta_cents
from settlement_window_totals
where abs(ledger_total_cents - network_total_cents) > tolerance_cents
  and window_closed_at < now() - interval '15 minutes';
```

Multi-key fuzzy matching — amount, merchant, and a time window rather than a single settlement ID — closed most of the gap; the remainder gets routed to a manual review queue with the candidate matches pre-ranked by confidence. Mean time to detect a real discrepancy dropped from roughly eighteen hours to under six minutes, and the manual review queue, which used to run to hundreds of items after a network's schema change, now stays in the single digits on a normal day.
