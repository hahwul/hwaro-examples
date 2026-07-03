+++
title = "Fraud Signal Bus: real-time scoring under 100ms"
date = "2026-01-14"
description = "A Kafka Streams feature-enrichment pipeline that scores card-present and card-not-present transactions for fraud risk in under 100 milliseconds."

[extra]
stack = ["Kafka Streams", "Go", "Redis", "gRPC"]
+++

Fraud scoring has a hard latency budget, because it sits directly in the authorization path: the scoring service has to return a risk score before the card network's own timeout, or the transaction fails open by default, which is exactly the outcome fraud scoring exists to prevent. The previous system computed most of its features with synchronous Postgres reads at request time, which was fine until transaction volume tripled and p99 latency crept past the timeout on a regular basis.

<!-- more -->

Fraud Signal Bus moves feature computation out of the request path entirely. A Kafka Streams topology consumes the raw transaction event stream and continuously maintains a set of windowed aggregates — velocity over the last hour, distinct merchant categories over the last day, geographic dispersion over the last week — in a local RocksDB-backed state store co-located with the streaming instance.

The scoring service itself, called synchronously over gRPC during authorization, does no computation of its own beyond the model inference:

```
authorize request
  → gRPC ScoreTransaction(account_id, amount, merchant, mcc)
      → local state store lookup (no network hop, <1ms)
      → feature vector assembled from precomputed aggregates
      → model inference (ONNX runtime, in-process)
  → risk score returned
```

Because the state store lookup never crosses the network, the scoring call itself typically completes in single-digit milliseconds; the remaining latency budget goes to model inference and gRPC overhead. p99 end-to-end latency, measured from authorization request to score returned, sits at 58ms in steady state — comfortably inside the 100ms budget with room for the occasional state-store rebalance during a deploy. The harder problem than latency, in the end, was correctness under rebalancing: a streaming instance losing its partition mid-request needs to fail gracefully to a slightly stale replica rather than time out, and that failover path got more engineering attention than the model itself.
