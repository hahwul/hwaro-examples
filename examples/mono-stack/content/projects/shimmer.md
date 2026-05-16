+++
title = "shimmer"
date = "2026-03-02"
description = "A single-binary online schema migration runner for Postgres. Reads explicit contracts, refuses to do anything surprising."
tags = ["Go", "Postgres"]
+++

`shimmer` is a small tool I built to run schema changes against busy Postgres clusters without locking myself out of the database at the worst possible moment.

## design choices

- Migrations are written as **plans**, not scripts. Each plan declares what it will lock, for how long, and at what cost.
- The runner refuses to execute a plan if the actual lock would exceed the declared budget.
- All migrations are online by default. Offline migrations require a flag named `--i-am-okay-with-downtime`.

## status

Stable, used in production by three companies I know about and an unknown number I do not. v0.6 ships in summer.
