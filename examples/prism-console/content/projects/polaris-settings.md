+++
title = "Polaris Settings"
date = "2026-04-28"
description = "Per-workspace settings surface, opening up the parts of the console that used to live in code."
[extra]
eyebrow = "DRAFTING"
owner = "C. Doan"
metric_label = "DRAFT"
metric = "v0.3"
metric_note = "Spec review Jun 18"
tag = "Drafting"
+++

Polaris is the settings surface. The console has been growing knobs in code for two years and
they're starting to need a home. v0.3 is the first draft that maps everything to a single page.

## Why now

Support has been carrying a quiet load of "can you flip this for me" tickets. The shape of the
fix is to put the knobs where the user can find them, not to add a new admin escalation path.

## Open design questions

- Should workspace-level and project-level settings live on the same page with a toggle, or
  on two separate pages?
- Per-seat preferences (notification cadence, default views) — are those settings, or are they
  the user profile?
