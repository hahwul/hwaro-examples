+++
title = "Incident response workflows"
date = "2026-04-08"
description = "Route freshness, volume, and schema alerts to the on-call engineer with full context."
tags = ["alerting", "observability"]
+++

Alerts now carry the lineage graph, last successful run, and a suggested rollback target into your incident channel.

- PagerDuty, Opsgenie, and Slack destinations with deduplication windows
- Inline rollback to the previous green commit from the alert payload
- Snooze rules scoped by pipeline, table, or environment for planned maintenance
- New `freshness_sla` and `volume_sla` declarations in the model spec
- Postmortem template auto-generated and posted to the incident thread on resolution
