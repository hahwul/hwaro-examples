+++
title = "Layouts"
description = "Configure dashboard grid layouts and positioning"
tags = ["dashboards", "layouts", "configuration"]
+++

# Dashboard Layouts

Dashboards use a 12-column grid system. Widgets are placed by specifying their position (x, y) and size (w, h) in grid units.

## Grid System

The grid divides the dashboard into 12 columns horizontally. Rows are added dynamically as widgets are placed. Each grid unit corresponds to a fixed height of 80 pixels.

```
  0   1   2   3   4   5   6   7   8   9  10  11
  +---+---+---+---+---+---+---+---+---+---+---+---+
  |                                               | Row 0
  +---+---+---+---+---+---+---+---+---+---+---+---+
  |                                               | Row 1
  +---+---+---+---+---+---+---+---+---+---+---+---+
  |                                               | Row 2
  +---+---+---+---+---+---+---+---+---+---+---+---+
```

## Dashboard Definition

A complete dashboard definition with layout:

```yaml
dashboards:
  - name: "infrastructure-overview"
    title: "Infrastructure Overview"
    description: "High-level view of system health"
    refresh_interval: "30s"
    time_range: "1h"
    variables:
      - name: "env"
        type: "select"
        values: ["production", "staging", "development"]
        default: "production"
    rows:
      - height: 2
        widgets:
          - type: "stat"
            title: "Total Hosts"
            position: { x: 0, y: 0, w: 3, h: 2 }
            queries:
              - metric: "sentinel.hosts.active"
                aggregation: "last"

          - type: "stat"
            title: "Active Alerts"
            position: { x: 3, y: 0, w: 3, h: 2 }
            queries:
              - metric: "sentinel.alerts.active"
                aggregation: "last"
            options:
              color_mode: "value"
              thresholds:
                - { value: 0, color: "#3fb950" }
                - { value: 5, color: "#d29922" }
                - { value: 20, color: "#f85149" }

          - type: "stat"
            title: "Uptime"
            position: { x: 6, y: 0, w: 3, h: 2 }
            queries:
              - metric: "sentinel.uptime.percent"
                aggregation: "avg"
            options:
              unit: "percent"
              decimals: 3

          - type: "stat"
            title: "Request Rate"
            position: { x: 9, y: 0, w: 3, h: 2 }
            queries:
              - metric: "http.requests.total"
                aggregation: "rate"
            options:
              unit: "req/s"
```

## Layout Patterns

Common layout patterns for monitoring dashboards:

### Status Row Pattern

A row of stat widgets across the top providing at-a-glance health indicators:

```
+--------+--------+--------+--------+
| Hosts  | Alerts | Uptime | RPS    |
| w:3    | w:3    | w:3    | w:3    |
+--------+--------+--------+--------+
```

### Split View Pattern

A timeseries chart alongside a table for drill-down:

```
+---------------------+-----------+
| CPU Timeseries      | Top Hosts |
| w:8, h:4            | w:4, h:4  |
+---------------------+-----------+
```

### War Room Pattern

Full-width charts optimized for wall displays:

```
+---------------------------------------+
| Request Rate (full width)             |
| w:12, h:4                            |
+---------------------------------------+
| Error Rate (full width)              |
| w:12, h:4                            |
+---------------------------------------+
| Active Alerts List                    |
| w:12, h:6                            |
+---------------------------------------+
```

## Responsive Behavior

Dashboards adapt to screen size using breakpoint rules:

| Breakpoint | Columns | Behavior |
|------------|---------|----------|
| >= 1200px | 12 | Full grid layout |
| 768-1199px | 6 | Widgets wrap to half width |
| < 768px | 1 | Single column stack |

Widgets maintain their relative order when reflowed. Override responsive behavior per widget:

```yaml
widgets:
  - type: "timeseries"
    title: "CPU Usage"
    position: { x: 0, y: 0, w: 8, h: 4 }
    responsive:
      hide_below: 768
```

## Template Variables

Dashboard variables allow users to filter data dynamically. Variables appear as dropdowns in the dashboard header:

```yaml
variables:
  - name: "env"
    type: "select"
    label: "Environment"
    values: ["production", "staging", "development"]
    default: "production"

  - name: "host"
    type: "query"
    label: "Host"
    metric: "system.cpu.usage_percent"
    label_key: "host"
    include_all: true
```

Reference variables in widget queries using `$variable_name` syntax:

```yaml
queries:
  - metric: "system.cpu.usage_percent{env=\"$env\", host=\"$host\"}"
    aggregation: "avg"
```

## Exporting Dashboards

Export a dashboard definition for version control or sharing:

```bash
sentinel dashboard export --name "infrastructure-overview" > dashboard.yaml
sentinel dashboard import --file dashboard.yaml
```
