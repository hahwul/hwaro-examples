+++
title = "Post-mortem: node-delta OOM cascade"
date = 2026-05-31
tags = ["incident", "memory", "scheduler"]
description = "Why job #9 took node-delta to 97% swap, and how the scheduler quarantined the blast radius."
+++

At 13:58:33 the console flipped node-delta from `[WARN]` to `[FAIL]`. Within ninety seconds swap usage climbed to 97% and the OOM killer reaped build job #9. This is the trace and the fix.

## What we saw

The load graph showed a clean single-node spike while the rest of the fleet stayed nominal. That ruled out a network event and pointed at one runaway process.

> The first rule of the console: if one lamp goes red and the others stay green, you have a process problem, not a fleet problem.

## Timeline

- **13:57:02** scheduler rebalanced three jobs onto node-delta.
- **13:58:01** resident set for job #9 crossed 14 GiB.
- **13:58:33** OOM killer fired; job #9 terminated with signal 9.

## The fix

We added a per-job memory ceiling so the scheduler refuses to co-locate two heavy builds on one node:

```toml
[scheduler.limits]
max_rss_gib = 12
co_locate_heavy = false
```

After the change, node-delta drained its swap and settled back to a green `[ OK ]` within four minutes. No other node was affected.
