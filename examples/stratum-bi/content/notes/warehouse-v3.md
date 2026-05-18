+++
title = "Warehouse v3 — feed switched"
date = "2026-05-06"
description = "The terminal's feed is now warehouse.v3. Read once if you wrote a saved query; everything else is automatic."
tags = ["infra", "warehouse"]
desks = ["data"]
+++

The terminal's data feed is now `warehouse.v3`. The cut-over happened on Tuesday morning and the heartbeat on the terminal has been steady since.

## What changed

- The fact table for ARR moved from `arr.fact_day` to `arr.fact_week`. The terminal calls the week table now; the daily table is read-only and archived.
- The seat-band definitions are read from a CRD instead of a CSV. The desk owns the CRD; pull requests go to `revenue-ops/seat-bands`.
- Refresh time moved from 06:15 to **06:05** New York.

## What did not change

The numbers on the terminal. Every published number on this site is the same number it would have been against the old feed, to two decimal places. The desk re-ran the last twelve weeks against both feeds before we cut over.

## Who needs to read this

You only need to read this note if **you wrote a saved query** that the terminal references. The terminal's stock layout is automatic. Saved queries that reference `arr.fact_day` need to be ported by the end of the month.

> If the heartbeat at the bottom of the terminal stops being green, page the on-call data engineer. Do not page the desk.
