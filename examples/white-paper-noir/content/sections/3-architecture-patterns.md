+++
title = "3. Architecture Patterns"
description = "Reference architectures for resilience-first design, covering isolation zones, circuit breakers, graceful degradation strategies, and observability instrumentation."
weight = 3
template = "post"
tags = ["architecture", "circuit-breaker", "isolation-zones"]
categories = ["sections"]
[extra]
section_number = "3"
+++

## 3.1 Isolation zone design

The foundation of resilience-first architecture is the isolation zone: a bounded failure domain within which component failures are contained and cannot propagate to the broader system. Our reference architecture defines three levels of isolation:

**Process isolation** confines failure to a single operating system process. Container runtimes provide process isolation by default, but shared kernel resources (file descriptors, network sockets, memory) can leak failure across process boundaries if limits are not enforced.

**Host isolation** confines failure to a single physical or virtual machine. This prevents kernel-level failures, hardware faults, and hypervisor issues from affecting neighbouring workloads. Host isolation requires placement constraints that prevent correlated scheduling.

**Zone isolation** confines failure to a network-defined boundary (availability zone, region, or data centre). Zone isolation is the highest-cost, highest-protection tier, requiring full data replication and independent control planes in each zone.

<div class="rec-box">
<p class="rec-box-label">Architecture Principle</p>
<p>Every critical service should operate within at least two isolation zones, with no shared fate between zones. Zone boundaries must be validated through regular fault injection testing, not assumed from vendor documentation.</p>
</div>

## 3.2 Circuit breaker patterns

Circuit breakers prevent cascading failure by detecting downstream degradation and short-circuiting requests before they consume upstream resources. Our analysis identifies three circuit breaker implementations with distinct trade-off profiles:

**Threshold-based** circuit breakers open when error rates exceed a configured percentage over a sliding window. These are simple to implement but require careful tuning: thresholds set too low cause false positives during normal traffic variance; thresholds set too high allow cascading failure to propagate before the breaker trips.

**Latency-based** circuit breakers open when P99 latency exceeds a configured ceiling, regardless of error rate. These detect degradation earlier than threshold-based breakers because latency increases typically precede error rate increases by 30--90 seconds.

**Adaptive** circuit breakers use historical baseline comparison to detect anomalous behaviour without fixed thresholds. These require more sophisticated implementation but eliminate the tuning burden and adapt automatically to changing traffic patterns.

## 3.3 Graceful degradation strategies

Resilient systems maintain partial functionality during component failure rather than failing entirely. We identify four degradation strategies observed in top-performing enterprises:

1. **Feature shedding** -- Disable non-critical features (recommendations, analytics, personalisation) to preserve core transaction processing capacity.
2. **Quality reduction** -- Serve cached or approximate results instead of real-time computed results, trading freshness for availability.
3. **Rate-based admission** -- Accept a controlled subset of incoming requests at full quality rather than attempting to serve all requests at degraded quality.
4. **Regional failover** -- Redirect traffic from a degraded region to healthy regions, accepting increased latency as a trade-off for maintained availability.

## 3.4 Observability instrumentation

Resilience requires observability that goes beyond traditional metrics, logs, and traces. Our framework adds three observability dimensions specific to resilience monitoring:

**Dependency health maps** provide real-time visualisation of the service dependency graph with per-edge health indicators. These maps surface degradation patterns that are invisible in per-service dashboards.

**Blast radius projections** continuously estimate the potential blast radius of each component based on current dependency state and traffic patterns. These projections enable proactive mitigation before failures occur.

**Recovery rehearsal telemetry** captures performance data from regular failover exercises, building a statistical model of expected recovery behaviour that can be compared against actual incident recovery in real time.
