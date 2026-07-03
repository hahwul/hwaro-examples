+++
title = "Commands"
description = "The full beryl surface: two commands to detect and reconcile drift, one to watch continuously, and two guardrails to control what gets touched."
sort_by = "weight"
template = "section"
+++

Five commands cover the whole workflow. `plan` and `apply` are the core
loop &mdash; detect, then reconcile. `watch` runs the same detection on a
schedule instead of on demand. `lock` and `apply` interact directly:
locking a resource tells `apply` to leave it alone even when `plan` still
reports it as drifted. `ignore` operates one layer earlier, at the field
level, so expected divergence never gets reported as drift in the first
place.
