+++
title = "Beacon Docs"
template = "home"
date = "2025-08-15"
description = "Feature flag and experimentation platform documentation"
+++

## Why Beacon?

Beacon is a feature flag and experimentation platform that gives engineering teams precise control over feature rollouts. Ship code when it is ready, decouple deployment from release, and run data-driven experiments without redeploying.

> Beacon lets you separate what you deploy from what your users see. Toggle features instantly, target specific segments, and measure impact with built-in experimentation.

### Key capabilities

- **Feature flags** -- Boolean, string, number, and JSON flag types with instant toggling
- **Targeting rules** -- Deliver features to specific users, segments, or percentage-based cohorts
- **A/B testing** -- Built-in experimentation with statistical analysis and metric tracking
- **Multi-environment** -- Manage flags across development, staging, and production
- **Audit log** -- Full history of every flag change with timestamps and authors

| Flag State | Description | Use Case |
|---|---|---|
| On | Flag is enabled for all matched users | General availability |
| Off | Flag is disabled globally | Kill switch or unreleased feature |
| Percentage | Flag is enabled for a percentage of users | Gradual rollout |

### Getting started

Head to the [Installation](/getting-started/installation/) guide to add the Beacon SDK to your project, then follow the [Quick Start](/getting-started/quick-start/) to evaluate your first flag.
