+++
title = "Engagement Metrics"
description = "User behavior metrics for tracking product adoption and retention."
weight = 2
+++

## Daily Active Users (DAU)

<div class="metric-card">
<h4>DAU</h4>
<dl>
<dt>Formula</dt>
<dd><code>COUNT(DISTINCT user_id) WHERE event_date = CURRENT_DATE</code></dd>
<dt>Data Source</dt>
<dd><code>analytics.events</code></dd>
<dt>Owner</dt>
<dd>Product Analytics</dd>
<dt>Status</dt>
<dd><span class="status-badge status-badge--active">Active</span></dd>
</dl>
</div>

A user is considered "active" if they triggered at least one qualifying event during the calendar day (UTC). Bot traffic and internal accounts are excluded via the `is_human` flag.

### DAU/MAU Ratio

The DAU/MAU ratio (also called "stickiness") measures what fraction of monthly users return on any given day. A ratio above 0.25 is considered healthy for a B2B SaaS product.

| Benchmark | Range | Interpretation |
|-----------|-------|---------------|
| Low | Below 0.10 | Users visit infrequently; investigate onboarding |
| Moderate | 0.10 -- 0.25 | Typical for workflow tools with weekly cadence |
| High | Above 0.25 | Strong daily habit formation |

---

## Retention Rate (Day N)

<div class="metric-card">
<h4>Day-N Retention</h4>
<dl>
<dt>Formula</dt>
<dd><code>COUNT(DISTINCT user_id active on day N) / COUNT(DISTINCT user_id in cohort)</code></dd>
<dt>Data Source</dt>
<dd><code>analytics.cohorts</code></dd>
<dt>Owner</dt>
<dd>Product Analytics</dd>
<dt>Status</dt>
<dd><span class="status-badge status-badge--active">Active</span></dd>
</dl>
</div>

Retention is measured at standard intervals: Day 1, Day 7, Day 14, and Day 30. Cohorts are defined by signup date. The metric is reported both as an unbounded rate (any activity on day N) and a bounded rate (activity within a 24-hour window centered on day N).

### Target Retention Curve

| Interval | Target | Alert Threshold |
|----------|--------|----------------|
| Day 1 | 60% | Below 50% |
| Day 7 | 40% | Below 30% |
| Day 14 | 30% | Below 22% |
| Day 30 | 25% | Below 18% |

---

## Feature Adoption Rate

<div class="metric-card">
<h4>Feature Adoption</h4>
<dl>
<dt>Formula</dt>
<dd><code>COUNT(DISTINCT users_using_feature) / DAU</code></dd>
<dt>Data Source</dt>
<dd><code>analytics.feature_usage</code></dd>
<dt>Owner</dt>
<dd>Product Team</dd>
<dt>Status</dt>
<dd><span class="status-badge status-badge--active">Active</span></dd>
</dl>
</div>

Tracks the percentage of daily active users who interact with a specific feature. This is computed per-feature and reported on the Feature Health dashboard. Features with adoption below 5% after 90 days post-launch are flagged for review.

---

## Session Duration

<div class="metric-card">
<h4>Median Session Duration</h4>
<dl>
<dt>Formula</dt>
<dd><code>PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY session_seconds)</code></dd>
<dt>Data Source</dt>
<dd><code>analytics.sessions</code></dd>
<dt>Owner</dt>
<dd>Product Analytics</dd>
<dt>Status</dt>
<dd><span class="status-badge status-badge--deprecated">Deprecated</span></dd>
</dl>
</div>

> This metric has been deprecated in favor of Task Completion Rate, which better captures whether users are achieving their goals. Session duration is still computed for backward compatibility but is no longer included in executive reporting.
