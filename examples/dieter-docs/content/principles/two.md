+++
title = "Good docs are honest."
description = "They do not overstate capability. They do not hide failure modes."
date = "2026-01-12"
weight = 2
template = "doc"
toc = true
[extra]
number = 2
+++

Honest documentation describes the system as it is, not as the engineer wishes it were. This is harder than it sounds, because the engineer wrote both the system and the documentation, and the writing happens while the wishing is still warm.

## Overstating capability

The temptation to overstate is real. A feature ships at 80%; the documentation describes the 100% the engineer intends to reach next quarter. The reader trusts the documentation. The reader hits the 80% reality. The trust is gone.

The discipline is to write what is *true today*. Not what was true last week. Not what will be true next quarter. Today.

| Phase | Document |
|-------|----------|
| Planned | Nothing yet |
| Shipped at 80% | The 80% that works |
| Shipped at 100% | The 100% |
| Deprecated | The deprecation |

## Hiding failure modes

Every system fails. Honest documentation names the failure modes the reader is likely to encounter. The temptation here is the inverse of overstating: to omit the failures because they look bad. The reader will hit them anyway. The documentation should warn them first.

> A failure mode the reader discovers alone is twice as expensive as a failure mode the manual named.

## What about marketing?

Marketing has its own honesty discipline. The manual is not marketing. The two should be reviewed by different people, written under different incentives, and never substituted for each other.
