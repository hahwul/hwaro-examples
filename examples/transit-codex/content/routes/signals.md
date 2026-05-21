+++
title = "Signals"
description = "The green line. Telemetry, alerts, and audit."
date = "2026-02-15"
weight = 3
template = "doc"
[extra]
line = "G"
line_name = "Green Line"
color = "#138a36"
station = "01"
transfers = [
  { line = "B", color = "#1d4ed8" }
]
+++

The green line is a local. Every stop matters, and there is no express. Signals are what the system tells you about itself — and the only reliable way to know what is happening inside.

## Station G01 · Telemetry feeds

Three feeds run on this line. The *operator feed* shows what humans did. The *job feed* shows what jobs did. The *system feed* shows what the system did on its own. Read all three together; any one in isolation tells half a story.

```
operator:  who · what · when · where
job:       id  · state · runtime
system:    component · severity · message
```

A change in the system feed without a corresponding entry in the operator or job feed is an anomaly. Anomalies always merit a ticket.

## Station G02 · Audit trail (transfer)

Authentication is the transfer point with [Operations](/routes/operations/). The audit trail records every authenticated action — token issued, session opened, command executed, session closed. Each event is hashed against the previous, forming a chain you can verify after the fact.

> If the chain breaks, treat every event after the break as untrusted.

The audit trail is append-only. Edits are never permitted, only annotations.

## Station G03 · Alerts

Alerts are the loud cousins of telemetry. A signal becomes an alert when its severity crosses a threshold. The thresholds are not magic numbers — they are documented per signal in the source repo. Never silence an alert without filing an annotation explaining why.

Continue to the [Orange line](/routes/maintenance/) for the maintenance side of the system.
