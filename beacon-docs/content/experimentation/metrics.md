+++
title = "Metrics"
weight = 2
date = "2025-08-22"
description = "Defining and tracking experiment metrics"
+++

# Metrics

Metrics measure the impact of your experiment. Beacon supports three metric categories: conversion, revenue, and engagement. Define metrics before starting an experiment to avoid post-hoc analysis bias.

## Metric types

| Type | Measures | Example | Aggregation |
|---|---|---|---|
| Conversion | Binary outcome | Completed purchase | Rate (%) |
| Revenue | Monetary value | Order total | Mean per user |
| Engagement | User activity | Pages viewed, time on site | Mean per session |

## Defining a conversion metric

A conversion metric tracks whether a user performed a specific action.

```json
{
  "name": "checkout-conversion",
  "type": "conversion",
  "event": "purchase_completed",
  "window": "7d",
  "description": "User completes at least one purchase within 7 days of exposure"
}
```

The `window` field defines how long after flag exposure an event counts as a conversion. Events outside this window are not attributed to the experiment.

## Defining a revenue metric

Revenue metrics track the monetary value associated with user actions.

```json
{
  "name": "revenue-per-user",
  "type": "revenue",
  "event": "purchase_completed",
  "valueField": "order_total",
  "window": "14d",
  "description": "Total revenue per user within 14 days of exposure"
}
```

## Defining an engagement metric

Engagement metrics track user activity levels.

```json
{
  "name": "session-depth",
  "type": "engagement",
  "event": "page_view",
  "aggregation": "count",
  "window": "7d",
  "description": "Average page views per session within 7 days"
}
```

## Sending metric events

Use the SDK to record metric events from your application code:

```typescript
client.track('purchase_completed', user, {
  order_total: 89.99,
  currency: 'USD',
  items: 3,
});
```

```python
client.track("purchase_completed", user, {
    "order_total": 89.99,
    "currency": "USD",
    "items": 3,
})
```

> Always include the user context when tracking events. Beacon uses the user ID to attribute events to the correct experiment variation.

## Primary vs secondary metrics

Each experiment should have one primary metric that drives the decision. Secondary metrics provide additional insight but should not override the primary metric result.

| Role | Count | Purpose |
|---|---|---|
| Primary | Exactly 1 | The metric that determines the experiment outcome |
| Secondary | 0 or more | Additional signals for context and monitoring |
| Guardrail | 0 or more | Metrics that must not degrade (e.g., error rate, latency) |
