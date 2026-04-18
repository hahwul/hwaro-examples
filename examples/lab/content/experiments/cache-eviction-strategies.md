+++
title = "Comparing Cache Eviction Strategies Under Varied Access Patterns"
date = "2025-06-10"
tags = ["performance", "caching", "benchmarks"]
categories = ["systems"]
description = "Benchmarking LRU, LFU, and ARC eviction policies across zipfian, uniform, and sequential workloads."
experiment_id = "EXP-001"
status = "completed"
+++

## Hypothesis

Adaptive Replacement Cache (ARC) will outperform both LRU and LFU in mixed workloads where the access pattern shifts over time, while LRU will remain competitive for purely zipfian distributions.

## Method

Three cache implementations were tested against synthetic workloads:

1. **LRU** (Least Recently Used) -- doubly linked list + hash map
2. **LFU** (Least Frequently Used) -- min-heap with frequency counts
3. **ARC** (Adaptive Replacement Cache) -- two LRU lists with adaptive partitioning

### Parameters

| Parameter | Value |
|-----------|-------|
| Cache size | 1024 entries |
| Key space | 10,000 unique keys |
| Requests per trial | 1,000,000 |
| Trials | 5 |
| Warmup requests | 50,000 |

### Workloads

- **Zipfian**: 80/20 distribution (skew = 1.0)
- **Uniform**: Equal probability across all keys
- **Sequential scan**: Linear traversal with periodic resets
- **Mixed**: Alternating between zipfian and sequential every 100,000 requests

## Results

| Policy | Zipfian Hit % | Uniform Hit % | Sequential Hit % | Mixed Hit % |
|--------|:---:|:---:|:---:|:---:|
| LRU | 72.4 | 10.1 | 10.2 | 38.6 |
| LFU | 74.1 | 10.2 | 8.9 | 35.2 |
| ARC | 73.8 | 10.3 | 14.7 | 52.1 |

### Observations

- LFU marginally outperformed LRU under pure zipfian workloads but suffered significantly under sequential scans due to frequency accumulation from the warmup phase.
- ARC showed the clearest advantage in mixed workloads (+13.5 percentage points over LRU), confirming its adaptive partitioning responds effectively to distribution shifts.
- Under uniform access, all three policies converged near the theoretical optimum of ~10.2% (cache size / key space).

## Conclusion

ARC is the recommended default for workloads with unpredictable or shifting access patterns. For known-zipfian workloads, LRU remains a simpler choice with negligible performance loss. LFU should be avoided in environments with phase changes unless combined with a decay mechanism.

> Next: Investigate whether adding a frequency decay window to LFU (W-TinyLFU) closes the gap with ARC on mixed workloads.
