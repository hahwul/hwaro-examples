+++
title = "Halving p99 without adding capacity"
date = "2026-05-08"
description = "A short writeup of how we cut tail latency on a 12-region payments router by 61%, without adding any new hardware."
tags = ["latency", "routing"]
+++

Tail latency is mostly a routing problem. We had a generic L7 load balancer, configured with round-robin, distributing requests across regions and instances without any awareness of who was actually fast at that moment.

## The diagnosis

We sampled tracing data for a week and discovered that 31% of slow requests were sent to a busy instance while at least one idle peer was available. The load balancer did not have the information it needed to do better.

## The fix

We replaced the routing layer with a latency-aware Rust service that maintained an exponentially weighted moving average of per-instance response time. Requests over a threshold were routed away. We added eBPF probes to skip instances that were saturating CPU.

```rust
let pick = peers
    .iter()
    .filter(|p| p.cpu < 0.85)
    .min_by_key(|p| p.ewma_latency)
    .ok_or(Error::NoHealthyPeer)?;
```

## The result

- p50: 38ms → 36ms (unchanged within noise)
- p99: 410ms → 158ms
- p99.9: 1.4s → 410ms
- Hardware: unchanged

The team that owns the gateway sleeps better. The team that owns the database is unhappy with the new traffic shape. That is, broadly, working as intended.
