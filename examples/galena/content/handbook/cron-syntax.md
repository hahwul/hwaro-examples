+++
title = "Cron expressions"
description = "The five-field grammar Galena parses, plus the ranges, steps, and lists it accepts."
date = "2025-10-02"
weight = 2
toc = true
[extra]
chapter = 2
cron_fields = ["*/15", "*", "*", "*", "*"]
cron_note = "every 15 minutes — a step in the minute field"
+++

Galena schedules are standard five-field cron expressions. The fields, left to right, are **minute**, **hour**, **day of month**, **month**, and **day of week**. There is no seconds field; the smallest resolution is one minute, matching the tick loop.

<!-- more -->

## Field ranges

| Field | Values | Notes |
|---|---|---|
| minute | `0–59` | |
| hour | `0–23` | 24-hour clock |
| day of month | `1–31` | |
| month | `1–12` | or `jan`–`dec` |
| day of week | `0–6` | `0` is Sunday; `sun`–`sat` accepted |

## Operators

Four operators combine to describe almost any cadence:

- `*` — every value in the field.
- `a-b` — an inclusive range, e.g. `9-17` in the hour field.
- `*/n` — a step: every `n`th value starting at the field's minimum.
- `a,b,c` — a list of specific values.

```text
30 9 * * 1-5      09:30, Monday through Friday
0 */2 * * *       midnight, 02:00, 04:00, ... every two hours
0 0 1,15 * *      midnight on the 1st and 15th
15 3 * * 0        03:15 every Sunday
```

## Day-of-month and day-of-week together

When **both** the day-of-month and day-of-week fields are restricted (neither is `*`), Galena fires when *either* matches — the traditional Vixie-cron behavior. `0 0 13 * 5` therefore means "midnight on the 13th, and also every Friday," not "Friday the 13th only." Validate anything surprising with the CLI before you rely on it:

```bash
galena explain "0 0 13 * 5"
# next 3 fires: 2026-01-13, 2026-01-16, 2026-01-23
```
