+++
title = "Mosaic Data Export"
date = "2026-05-06"
description = "Bulk data export pipeline for Mosaic — blocked on the warehouse migration."
[extra]
eyebrow = "BLOCKED"
owner = "O. Anwar"
metric_label = "RECORDS / RUN"
metric = "2.1M"
metric_note = "Blocked on warehouse migration"
tag = "Blocked"
+++

Mosaic Data Export is the bulk download pipeline for Mosaic customers who want their full
history out in a single archive. Standing build is healthy; we're waiting on the warehouse team.

## What's blocking us

The warehouse migration was supposed to land week of May 4 but slipped to "early June." We
can't promote the new exporter without it because the schema reads on the new tables.

## Workaround

For the two large customers asking this week, we're running the legacy exporter on a manual
schedule. It's slow but it works. Owen owns the on-call rotation.
