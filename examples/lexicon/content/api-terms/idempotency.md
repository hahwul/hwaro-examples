+++
title = "Idempotency"
template = "doc"
description = "A property of operations where repeated requests produce the same result as a single request."
tags = ["api", "reliability"]
[extra]
full_name = "Idempotency"
category = "Reliability"
+++

## Definition

An operation is idempotent when applying it multiple times produces the same observable state as applying it once. Idempotency is a fundamental property in distributed systems where messages may be retried due to network failures, timeouts, or client-side error recovery.

## Idempotent HTTP Methods

| Method | Idempotent | Notes |
|--------|------------|-------|
| GET | Yes | Reads do not modify state |
| HEAD | Yes | Same semantics as GET without body |
| PUT | Yes | Replaces resource with provided representation |
| DELETE | Yes | Removes the resource if present |
| POST | No | Each call typically creates a new resource |
| PATCH | No | Partial updates may depend on prior state |

## Idempotency Keys

Many APIs allow clients to attach a unique key to a request so the server can detect retries. The server stores the result of the original request keyed by that identifier and returns the cached response on subsequent calls with the same key.

```
POST /api/v1/payments HTTP/1.1
Idempotency-Key: 7f8e2d4a-1c9b-4e6f-9a0b-2c3d4e5f6a7b
Content-Type: application/json
```

## Implementation Considerations

- The window during which keys are honored should be documented and bounded.
- Storage of request fingerprints prevents replay of unrelated payloads under the same key.
- Side effects in downstream systems must also be guarded against duplicate execution.

## Related Terms

- Retry
- At-Least-Once Delivery
- Exactly-Once Semantics
- Distributed Transaction
