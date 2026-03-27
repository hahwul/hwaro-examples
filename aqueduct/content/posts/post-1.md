+++
title = "Designing a Rate Limiter: From Token Bucket to Sliding Window"
date = "2026-03-15"
description = "A step-by-step walkthrough of rate limiting algorithms, their trade-offs, and how to choose the right one for your API gateway."
tags = ["system-design", "algorithms", "api"]
categories = ["system-design"]
+++

# Designing a Rate Limiter: From Token Bucket to Sliding Window

Rate limiting is one of those components that seems trivial until it is not. A naive implementation can either block legitimate traffic or fail to stop abuse. Getting it right requires understanding the algorithms available, their memory footprint, and how they behave under bursty traffic.

## Why Rate Limiting Matters

Every public-facing API needs a throttle. Without one, a single misbehaving client -- or a coordinated attack -- can exhaust your backend resources and degrade service for everyone else.

The goals are straightforward:

- Protect backend services from overload
- Enforce fair usage across clients
- Provide predictable behavior under burst conditions
- Return clear feedback to clients when limits are exceeded

## Step 1: The Fixed Window Counter

The simplest approach divides time into fixed intervals and counts requests per window.

```
Window: [00:00 - 01:00]  ->  Count: 47/100
Window: [01:00 - 02:00]  ->  Count: 12/100
```

**Pros:** Minimal memory (one counter per client per window). Easy to implement with Redis `INCR` and `EXPIRE`.

**Cons:** Boundary spikes. A client can send 100 requests at 00:59 and another 100 at 01:01, effectively doubling the rate within a two-second span.

## Step 2: The Sliding Window Log

Instead of fixed buckets, store a timestamp for every request. To check the limit, count timestamps within the trailing window.

```
Timestamps: [00:42, 00:43, 00:58, 00:59, 01:01, 01:02]
Window (last 60s from 01:02): [00:03 ... 01:02] -> 6 requests
```

**Pros:** Precise rate enforcement. No boundary spike problem.

**Cons:** High memory usage. Storing every timestamp per client is expensive at scale.

## Step 3: The Sliding Window Counter

A hybrid approach: maintain counters for the current and previous window, then weight them proportionally.

```
Previous window (00:00-01:00): 84 requests
Current window  (01:00-02:00): 36 requests
Position in current window: 25%

Effective count = 84 * 0.75 + 36 = 99
```

**Pros:** Low memory (two counters per client). Smooth enforcement without boundary spikes.

**Cons:** Approximate, not exact. Acceptable for most use cases.

## Step 4: The Token Bucket

Tokens are added to a bucket at a fixed rate. Each request consumes one token. If the bucket is empty, the request is rejected.

```
Bucket capacity: 10
Refill rate: 2 tokens/second

t=0: tokens=10  (request -> 9)
t=1: tokens=11  (capped at 10, request -> 9)
t=5: tokens=10  (burst of 10 -> 0)
t=6: tokens=2   (refilled)
```

**Pros:** Allows controlled bursts. Intuitive parameters (capacity and refill rate). Used by AWS, Stripe, and most major API providers.

**Cons:** Slightly more state per client (token count + last refill timestamp).

## Comparison Table

| Algorithm | Memory per Client | Burst Handling | Precision |
|-----------|------------------|----------------|-----------|
| Fixed Window | Very Low | Poor (boundary spikes) | Low |
| Sliding Log | High | Excellent | Exact |
| Sliding Window Counter | Low | Good | Approximate |
| Token Bucket | Low | Good (controlled) | Good |

## Step 5: Choosing the Right Algorithm

The decision depends on your constraints:

- **High precision required, low traffic:** Sliding Window Log
- **High traffic, memory-sensitive:** Sliding Window Counter or Token Bucket
- **Need controlled bursts:** Token Bucket
- **Simplest possible implementation:** Fixed Window Counter

For most API gateways, the **token bucket** provides the best balance of simplicity, memory efficiency, and burst tolerance. It is the algorithm behind rate limiting in NGINX, Envoy, and most cloud provider API gateways.

## Implementation Notes

When deploying rate limiting in a distributed system, consider:

1. **Centralized vs. local state.** Redis is the standard choice for shared state across multiple gateway instances.
2. **Race conditions.** Use Lua scripts or Redis transactions to make check-and-decrement atomic.
3. **Response headers.** Always return `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `Retry-After` headers.
4. **Graceful degradation.** If your rate limiter datastore goes down, decide whether to fail open (allow all) or fail closed (reject all).

Rate limiting is infrastructure that earns its keep quietly. When it works, nobody notices. When it fails, everyone does.
