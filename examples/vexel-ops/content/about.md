+++
title = "Operating brief"
description = "How this team runs its console, in seven short rules."
tags = ["operating"]
+++

Vexel/Ops is the console for a 22-person platform engineering group. We run twelve production services and four data pipelines for a mid-sized payments company. The display you just walked away from is the working surface, not a summary deck.

## Seven rules

1. **The number is real.** If a panel can't be honest, the panel goes blank.
2. **No surprise green.** A service that has been on the warn list for ten days does not get to flip green without an explanation in the incident log.
3. **Burn beats availability.** We watch the burn-rate column first. The SLO is a thirty-day promise.
4. **Two pairs of eyes on every change.** Approvals are recorded by name, not handle.
5. **Drill on the days you ship.** Chaos drills are scheduled the same week as significant releases — the team that ships should know exactly how its work fails.
6. **The on-call rotation is sacred.** Six day cycle, handover Wednesday, no exceptions.
7. **The brief survives the team.** Anyone joining the rotation reads this page; anyone leaving the rotation updates it.

## Tools we use

- **Hwaro** for this console (static, plain HTML, no framework)
- **Loki + Tempo** for log and trace search
- **Grafana** for ad-hoc dashboards
- **PagerDuty** for paging the rotation
- **A whiteboard** for the things tools can't help with

> The console is a contract with the past version of yourself who set up the SLOs. Don't lie to that person.
