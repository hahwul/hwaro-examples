+++
title = "Settlement Relay: exactly-once payouts to merchants"
date = "2025-05-19"
description = "An outbox-pattern relay that guarantees each merchant payout webhook is delivered exactly once, even across retries, restarts, and downstream timeouts."

[extra]
stack = ["Go", "Kafka", "Debezium", "Redis"]
+++

Every merchant payout has to trigger exactly one webhook to their system, no matter how many times our own services retry, restart, or time out along the way. Before Settlement Relay, that guarantee lived in application code that wrote a payout row and called a webhook client in the same request handler — which meant a crash between those two steps could silently drop a payout, and a crash after a slow webhook response could double-send it.

<!-- more -->

The fix was the transactional outbox pattern: a service never calls an external webhook directly. It writes the payout and an `outbox_events` row in the same Postgres transaction, so the two either both commit or neither does. Debezium then streams the outbox table's write-ahead log into Kafka as change events — no dual-write problem, because the outbox table and the database transaction are the only source of truth.

A separate relay worker consumes those Kafka events and performs the actual HTTP delivery, deduplicating against Redis before every send:

```go
func (r *Relay) Deliver(ctx context.Context, evt OutboxEvent) error {
	key := "delivered:" + evt.ID
	// SETNX with a TTL well past our longest possible retry window —
	// a second delivery attempt for the same event is a no-op, not
	// a race, because this check happens before any HTTP call.
	ok, err := r.redis.SetNX(ctx, key, "1", 72*time.Hour).Result()
	if err != nil {
		return fmt.Errorf("dedupe check: %w", err)
	}
	if !ok {
		return nil // already delivered
	}
	return r.send(ctx, evt) // signed webhook, exponential backoff on failure
}
```

Webhooks are signed with a per-merchant HMAC secret and include the same idempotency key merchants can use to deduplicate on their own end, in case a message somehow gets through twice despite the Redis check — belt and suspenders, since Redis itself is not the system of record. In the year since launch, the relay has processed several million payout events with zero confirmed duplicate deliveries and zero confirmed drops, verified against a monthly reconciliation between the outbox table and merchant-reported receipt logs.
