+++
title = "About Sentinel"
description = "About the Sentinel monitoring platform and project"
tags = ["about", "sentinel"]
+++

# About Sentinel

Sentinel is an open-source monitoring and alerting platform designed for teams that operate distributed infrastructure. The project was started to address the gap between heavyweight observability platforms and lightweight metric collectors.

## Design Principles

Sentinel is built around four principles:

- **Minimal Dependencies** -- Sentinel ships as a single binary with an embedded time-series store. No external databases are required for development or small deployments.
- **Declarative Configuration** -- All alert rules, escalation policies, and dashboard layouts are defined in YAML files that can be version-controlled alongside infrastructure code.
- **Predictable Evaluation** -- The rule engine uses fixed evaluation intervals and deterministic windowing. Alert state transitions follow explicit criteria, not heuristic scoring.
- **Composable Outputs** -- Notification channels are pluggable. Built-in support includes Slack, PagerDuty, email, and generic webhooks.

## Project History

Sentinel began as an internal tool for managing alerting across a fleet of microservices. The initial version supported basic threshold alerts over Prometheus-compatible metrics. Over time, the project expanded to include multi-window evaluation, escalation routing, and dashboard rendering.

The project is maintained by a small team of infrastructure engineers and accepts contributions through standard pull request workflows.

## License

Sentinel is released under the Apache 2.0 license. Commercial support and managed hosting are available through separate agreements.

## Contact

- **Source** -- [github.com/sentinel-monitoring/sentinel](https://github.com/sentinel-monitoring/sentinel)
- **Issues** -- Use the GitHub issue tracker for bug reports and feature requests
- **Discussion** -- Join the community forum for questions and design discussions

## Documentation

This documentation site is built with [Hwaro](https://github.com/hahwul/hwaro), a fast static site generator.
