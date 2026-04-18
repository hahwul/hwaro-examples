+++
title = "Widgets"
description = "Dashboard widget types and configuration"
tags = ["dashboards", "widgets", "visualization"]
+++

# Widgets

Widgets are the building blocks of Sentinel dashboards. Each widget type renders metric data in a specific format.

## Widget Types

| Type | Description | Best For |
|------|-------------|----------|
| `timeseries` | Line or area chart over time | Trends, patterns, capacity planning |
| `gauge` | Radial gauge with thresholds | Current utilization, health scores |
| `stat` | Single numeric value with sparkline | Key metrics at a glance |
| `table` | Tabular data with sorting | Top-N lists, instance comparison |
| `heatmap` | Color-coded matrix | Distribution analysis, latency buckets |
| `alert_list` | Active alerts with status | Incident awareness |
| `text` | Markdown-formatted text block | Annotations, runbook links |

## Timeseries Widget

The timeseries widget displays metric data as line charts, area charts, or bar charts:

```yaml
widgets:
  - type: "timeseries"
    title: "CPU Usage by Host"
    position: { x: 0, y: 0, w: 6, h: 4 }
    queries:
      - metric: "system.cpu.usage_percent"
        group_by: ["host"]
        aggregation: "avg"
    options:
      chart_type: "line"
      y_axis:
        min: 0
        max: 100
        unit: "percent"
      legend:
        position: "bottom"
        max_items: 10
      time_range: "1h"
```

## Gauge Widget

Displays a single metric as a radial gauge with colored threshold zones:

```yaml
widgets:
  - type: "gauge"
    title: "Memory Usage"
    position: { x: 6, y: 0, w: 3, h: 4 }
    queries:
      - metric: "system.memory.usage_percent"
        aggregation: "avg"
    options:
      min: 0
      max: 100
      unit: "percent"
      thresholds:
        - value: 70
          color: "#3fb950"
        - value: 85
          color: "#d29922"
        - value: 95
          color: "#f85149"
```

## Stat Widget

Shows a single value with an optional trend sparkline:

```yaml
widgets:
  - type: "stat"
    title: "Active Connections"
    position: { x: 9, y: 0, w: 3, h: 2 }
    queries:
      - metric: "app.connections.active"
        aggregation: "last"
    options:
      sparkline: true
      color_mode: "value"
      thresholds:
        - value: 0
          color: "#3fb950"
        - value: 500
          color: "#d29922"
        - value: 1000
          color: "#f85149"
```

## Table Widget

Renders query results as a sortable table:

```yaml
widgets:
  - type: "table"
    title: "Top Hosts by CPU"
    position: { x: 0, y: 4, w: 6, h: 4 }
    queries:
      - metric: "system.cpu.usage_percent"
        group_by: ["host"]
        aggregation: "avg"
        sort: "desc"
        limit: 20
    options:
      columns:
        - field: "host"
          label: "Host"
        - field: "value"
          label: "CPU %"
          format: "percent"
```

## Alert List Widget

Displays currently active alerts filtered by labels:

```yaml
widgets:
  - type: "alert_list"
    title: "Active Alerts"
    position: { x: 6, y: 4, w: 6, h: 4 }
    options:
      filter:
        severity: ["critical", "warning"]
        env: "production"
      columns: ["severity", "name", "host", "fired_at", "duration"]
      sort_by: "severity"
      max_items: 50
```

## Query Options

All widgets that accept queries support these common parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `metric` | string | Metric name with optional label selectors |
| `aggregation` | string | Aggregation function (avg, sum, max, min, last, rate) |
| `group_by` | list | Labels to group results by |
| `sort` | string | Sort direction: `asc` or `desc` |
| `limit` | int | Maximum number of series to return |
| `time_range` | duration | Override the dashboard-level time range |

## Refresh Intervals

Each widget inherits the dashboard refresh interval by default. Override per widget:

```yaml
widgets:
  - type: "stat"
    title: "Request Rate"
    refresh_interval: "5s"
    # ... rest of configuration
```
