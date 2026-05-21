+++
title = "Operations"
description = "The blue line. Day-to-day commands, runs, and diagnostics."
date = "2026-02-08"
weight = 2
template = "doc"
[extra]
line = "B"
line_name = "Blue Line"
color = "#1d4ed8"
station = "01"
transfers = [
  { line = "R", color = "#e63946" },
  { line = "G", color = "#138a36" },
  { line = "O", color = "#ed7d2b" }
]
+++

The blue line runs express. It carries operators who already know the system and need to do something with it, today. Three stops, all the basics, no detours.

## Station B01 · The control panel

Every operations session starts in the same place — the control panel. From there you can start a job, observe a running one, and stop a misbehaving one. The three primary verbs are *run*, *watch*, and *halt*. Memorize them as a unit; they are how the rest of this line refers back to the basics.

```
$ codex run    [job-id]
$ codex watch  [job-id]
$ codex halt   [job-id]
```

The control panel is a transfer point with [Foundations](/routes/foundations/) — the vocabulary you need is already on that platform.

## Station B02 · Authentication

This station is a transfer to the green line. Authentication is an operations concern (who can run what?) and a signals concern (who is running what right now?). Read this page if you came in on Blue; cross to Green if you came in for the audit trail.

| Mode | Use for |
|------|---------|
| Token | Programmatic agents, CI runs |
| Session | Interactive operators |
| Mutual TLS | Service-to-service inside the cluster |

The default is a session token bound to the operator's identity. Tokens for agents are minted on demand and expire on idle.

## Station B03 · Diagnostics

When something goes wrong, ride directly to this station. The diagnostic flow is always:

1. Pull the last 200 lines of the operator log.
2. Read the most recent state transition.
3. Replay the failing job in dry-run mode.

A failing job that survives dry-run replay is a bug in the system, not in your operation. Transfer to the [Orange line](/routes/maintenance/) and file a ticket from there.
