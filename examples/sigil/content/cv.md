+++
title = "CV"
description = "Full curriculum vitae for Dara Voss, backend engineer specializing in event-driven payment infrastructure."
+++

## Summary

Nine years building backend systems for payments and financial infrastructure, the last six focused specifically on event-driven architectures: Kafka-backed ledgers, exactly-once settlement pipelines, and the reconciliation tooling that catches the discrepancies asynchronous systems inevitably produce. I favor boring, well-instrumented systems over clever ones — the payments teams I respect most are the ones nobody has to page at 3am.

## Core stack

`Go` `Kafka` `Kafka Streams` `PostgreSQL` `gRPC` `Debezium` `Redis` `Kubernetes` `Terraform` `Prometheus` `Event sourcing` `Idempotency & exactly-once delivery`

## Experience

**Staff Backend Engineer — Meridian Clearing**
*2023 — present, remote*

Own the ledger core: an event-sourced, double-entry system that is the source of truth for every balance change on the platform. Selected outcomes:

- Redesigned the settlement pipeline around the transactional outbox pattern, eliminating a class of "money moved, event never published" bugs that had caused four incidents in the prior year.
- Cut ledger reconciliation discrepancies from roughly 40 basis points of transaction volume to under 2, mostly by making every downstream consumer idempotent against replay.
- Led the migration from a single Postgres primary to sharded ledger storage, executed with zero downtime and zero balance drift, verified against a full dual-write comparison run for six weeks before cutover.

**Senior Backend Engineer — Northbridge Pay**
*2020 — 2023, hybrid*

Built and ran the real-time authorization and fraud-signal pipeline, a Kafka Streams application enriching every authorization request with features computed from the account's last ninety days of activity.

- Brought p99 enrichment latency from 340ms to under 60ms by moving feature lookups from synchronous Postgres reads to a co-located local state store.
- Introduced contract testing between the authorization service and its twelve downstream consumers after a schema change silently broke a chargeback report for three weeks before anyone noticed.
- On-call lead for eighteen months; rewrote the incident runbook after a repeat class of Kafka consumer-lag pages, cutting median time-to-mitigation from forty minutes to under ten.

**Backend Engineer — Cobalt Transit**
*2018 — 2020, on-site then remote*

Modernized fare payment settlement for a regional transit agency, replacing a nightly batch reconciliation job with a streaming pipeline built on Debezium change-data-capture.

- Reduced fare-to-settlement latency from up to twenty-four hours to under five minutes.
- Designed the idempotency-key scheme that let retried card taps at faregates be deduplicated without a distributed lock.

**Software Engineer — Ashgrove Labs**
*2016 — 2018*

First production Kafka deployment on a small backend team building internal tooling. Learned the hard way what happens when nobody plans for consumer-group rebalancing under load, and turned the postmortem into the team's first structured on-call rotation.

## A settlement retry, roughly

The shape of a correctness bug in this domain is almost always the same: a step succeeds, the acknowledgment is lost, and something retries into a state it doesn't expect. The fix is almost always idempotency, applied earlier than seems necessary:

```go
func (s *SettlementWorker) Apply(ctx context.Context, evt SettlementEvent) error {
	// The idempotency key is derived from the source event, not generated
	// here — a retried delivery must produce the same key every time.
	applied, err := s.store.MarkApplied(ctx, evt.IdempotencyKey)
	if err != nil {
		return fmt.Errorf("check idempotency: %w", err)
	}
	if applied {
		return nil // already settled; a retried delivery, not a bug
	}
	return s.ledger.PostEntry(ctx, evt.ToLedgerEntry())
}
```

The interesting part is never the happy path — it's making every retry, replay, and out-of-order delivery collapse into the same safe outcome.

## Education

B.S. Computer Science, Rensler Institute of Technology, 2016

## Speaking

- "Idempotency Is Not Optional" — Payments Infra Meetup, 2025
- "What Exactly-Once Actually Means" — Northbridge Engineering Guild, 2022

## References

Available on request — see [projects](/projects/) for verifiable, in-depth write-ups of recent systems work.
