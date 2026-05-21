+++
title = "Maintenance"
description = "The orange line. Recovery, rollback, and long-tail repair."
date = "2026-02-22"
weight = 4
template = "doc"
[extra]
line = "O"
line_name = "Orange Line"
color = "#ed7d2b"
station = "01"
transfers = [
  { line = "B", color = "#1d4ed8" }
]
+++

The orange line runs weekends only — when traffic is low and the operators have time to fix the things they could not touch on a Tuesday. Two stops, both important, both unglamorous.

## Station O01 · Rollback

Every action on this system is reversible. Not undoable — *reversible*. The distinction matters. An undo erases the action. A reverse leaves the action in place and adds a corrective entry that cancels its effect.

Rollback in this system is always a *reverse*, never an *undo*. The audit trail keeps both entries — the original and the corrective — so the next operator can see what happened and why.

```
$ codex reverse  [action-id]  --reason "wrong job id"
```

A reverse without a reason is rejected at the panel. The reason becomes part of the audit chain.

## Station O02 · Long-tail repair

Most maintenance is small. A typo in a doc, an outdated example, an alert threshold that drifts a week after a release. These are the long tail — individually trivial, collectively the difference between a system that ages well and one that fossilizes.

The long-tail repair workflow is simple: file the ticket from wherever you noticed the issue (the orange line accepts tickets from every other line), pick it up in the next maintenance window, fix it in under thirty minutes, ship it.

| Tier | Window | Goal time |
|------|--------|-----------|
| Tier 1 | Same week | < 30 min |
| Tier 2 | Same month | < 2 hours |
| Tier 3 | Same quarter | Tracked in a roadmap |

Anything that does not fit Tier 1 or 2 is a [Foundations](/routes/foundations/) problem in disguise, not a maintenance problem. Transfer to the red line and re-think the underlying model.
