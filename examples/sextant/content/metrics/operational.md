+++
title = "Operational Metrics"
description = "Infrastructure and process metrics reflecting system health."
weight = 3
+++

## Request Latency (p50 / p95 / p99)

<div class="metric-card">
<h4>Request Latency</h4>
<dl>
<dt>Formula</dt>
<dd><code>PERCENTILE_CONT(0.95) WITHIN GROUP (ORDER BY response_ms)</code></dd>
<dt>Data Source</dt>
<dd><code>monitoring.http_requests</code></dd>
<dt>Owner</dt>
<dd>Platform Engineering</dd>
<dt>Status</dt>
<dd><span class="status-badge status-badge--active">Active</span></dd>
</dl>
</div>

Latency is measured at the load balancer. The primary reporting percentile is p95; p50 and p99 are tracked for context. Measurements exclude health-check endpoints and internal service-to-service calls.

| Percentile | Target | Alert |
|-----------|--------|-------|
| p50 | Below 120ms | Above 200ms |
| p95 | Below 500ms | Above 800ms |
| p99 | Below 1500ms | Above 2500ms |

---

## Error Rate

<div class="metric-card">
<h4>Error Rate</h4>
<dl>
<dt>Formula</dt>
<dd><code>COUNT(status >= 500) / COUNT(*) * 100</code></dd>
<dt>Data Source</dt>
<dd><code>monitoring.http_requests</code></dd>
<dt>Owner</dt>
<dd>Platform Engineering</dd>
<dt>Status</dt>
<dd><span class="status-badge status-badge--active">Active</span></dd>
</dl>
</div>

The error rate captures server-side failures as a percentage of total requests. Client errors (4xx) are tracked separately. A sustained error rate above 1% triggers an automatic incident via PagerDuty.

---

## Deployment Frequency

<div class="metric-card">
<h4>Deployment Frequency</h4>
<dl>
<dt>Formula</dt>
<dd><code>COUNT(deployments) per calendar week</code></dd>
<dt>Data Source</dt>
<dd><code>cicd.deployments</code></dd>
<dt>Owner</dt>
<dd>Developer Experience</dd>
<dt>Status</dt>
<dd><span class="status-badge status-badge--active">Active</span></dd>
</dl>
</div>

Counts successful production deployments per week. Rollbacks are counted as separate deployments. This is one of the four DORA metrics tracked by the engineering organization.

### DORA Metrics Summary

| Metric | Current | Target | Elite Benchmark |
|--------|---------|--------|----------------|
| Deployment Frequency | 12/week | 15/week | On-demand |
| Lead Time for Changes | 2.1 days | 1 day | Less than 1 hour |
| Change Failure Rate | 8% | 5% | 0--15% |
| Time to Restore | 45 min | 30 min | Less than 1 hour |

---

## Queue Depth

<div class="metric-card">
<h4>Queue Depth</h4>
<dl>
<dt>Formula</dt>
<dd><code>COUNT(messages) WHERE state = 'pending'</code></dd>
<dt>Data Source</dt>
<dd><code>monitoring.message_queues</code></dd>
<dt>Owner</dt>
<dd>Platform Engineering</dd>
<dt>Status</dt>
<dd><span class="status-badge status-badge--draft">Draft</span></dd>
</dl>
</div>

Measures the number of unprocessed messages across all production queues. A rising queue depth with flat consumer throughput indicates a capacity bottleneck. This metric is in draft status while the team standardizes queue naming conventions across services.
