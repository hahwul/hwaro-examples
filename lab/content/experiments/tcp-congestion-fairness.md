+++
title = "TCP Congestion Control Fairness Between BBR and CUBIC Flows"
date = "2025-05-15"
tags = ["networking", "tcp", "congestion-control"]
categories = ["systems"]
description = "Testing whether BBRv2 flows achieve fair bandwidth sharing when competing with CUBIC flows on a shared bottleneck."
experiment_id = "EXP-003"
status = "in-progress"
+++

## Hypothesis

BBRv2 will achieve more equitable bandwidth sharing with CUBIC than BBRv1, reducing the starvation effect observed in prior studies where BBR consumed disproportionate bandwidth.

## Method

### Testbed Configuration

| Component | Specification |
|-----------|--------------|
| Bottleneck link | 100 Mbps, 20ms RTT |
| Buffer size | 1x BDP (250 KB) |
| Duration | 120 seconds per trial |
| Trials | 10 per configuration |
| Emulator | tc-netem on Linux 6.1 |

### Flow Configurations

1. **Baseline**: 2 CUBIC vs 2 CUBIC
2. **Test A**: 2 BBRv1 vs 2 CUBIC
3. **Test B**: 2 BBRv2 vs 2 CUBIC
4. **Test C**: 1 BBRv2 vs 3 CUBIC

Throughput and RTT are sampled every 100ms via `ss` and `tcpdump`.

## Preliminary Results

| Configuration | Avg CUBIC Share | Avg BBR Share | Jain Index |
|:---|:---:|:---:|:---:|
| Baseline (CUBIC only) | 50.1% | -- | 0.998 |
| BBRv1 vs CUBIC | 22.4% | 77.6% | 0.712 |
| BBRv2 vs CUBIC | 41.8% | 58.2% | 0.957 |
| 1 BBRv2 vs 3 CUBIC | 23.1% (each) | 30.7% | 0.982 |

### Observations So Far

- BBRv2 shows substantial improvement over BBRv1 in fairness (Jain index 0.957 vs 0.712).
- CUBIC flows still receive slightly less than their fair share when competing with BBRv2, but the gap is within acceptable bounds.
- RTT variance is higher in mixed BBR/CUBIC scenarios compared to CUBIC-only baseline.

## Next Steps

- Complete remaining trials for statistical confidence
- Test with asymmetric RTTs (10ms vs 50ms)
- Measure retransmission rates to assess loss-based impact
- Test with buffer sizes at 0.5x and 2x BDP
