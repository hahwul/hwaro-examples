+++
title = "Designing on-call rotations that do not eat your team"
date = "2026-04-19"
description = "Six rules I have collected over a decade of being on-call, designing rotations, and getting them wrong."
tags = ["on-call", "ops"]
+++

I have been on-call for some part of every year since 2014. I have also designed rotations for three different teams, all of which I broke at least once. Here is what I now believe.

## Rules

1. **One person at a time.** Two primaries is two secondaries.
2. **Hand off in writing.** Verbal handoffs are a tradition, not a process.
3. **Pay for the night.** If your company will not, change the company or change the system that is paging at night.
4. **Burn down the alert backlog every quarter.** Old alerts are debt.
5. **Run a postmortem after every page, even the false ones.** False pages are alert design bugs.
6. **The runbook lives in the alert.** If you have to leave the page to find the runbook, the page is incomplete.

> "A good rotation is one where nobody dreads the calendar invite."

That is the test. Everything else is detail.
