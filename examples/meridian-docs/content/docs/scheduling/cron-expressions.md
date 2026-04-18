+++
title = "Cron Expressions"
weight = 1
description = "Cron expression syntax reference and builder guide"
[taxonomies]
tags = ["scheduling", "cron"]
+++

## Overview

Meridian uses extended cron expressions to define schedules for recurring jobs. Our syntax supports the standard five-field format plus an optional seconds field for sub-minute precision.

## Expression Format

```
┌──────────── second (0-59, optional)
│ ┌────────── minute (0-59)
│ │ ┌──────── hour (0-23)
│ │ │ ┌────── day of month (1-31)
│ │ │ │ ┌──── month (1-12 or JAN-DEC)
│ │ │ │ │ ┌── day of week (0-7 or SUN-SAT, 0 and 7 are Sunday)
│ │ │ │ │ │
* * * * * *
```

## Syntax Reference

| Symbol | Meaning              | Example        | Description                         |
|--------|----------------------|----------------|-------------------------------------|
| `*`    | Any value            | `* * * * *`    | Every minute                        |
| `,`    | Value list separator | `1,15 * * * *` | At minute 1 and 15                  |
| `-`    | Range of values      | `1-5 * * * *`  | Every minute from 1 through 5       |
| `/`    | Step values          | `*/15 * * * *` | Every 15 minutes                    |
| `L`    | Last                 | `* * * L * *`  | Last day of the month               |
| `W`    | Nearest weekday      | `* * * 15W * *`| Nearest weekday to the 15th         |
| `#`    | Nth day of week      | `* * * * * 5#3`| Third Friday of the month           |

## Common Patterns

The table below shows frequently used cron patterns and their schedules.

| Expression              | Schedule                          |
|-------------------------|-----------------------------------|
| `* * * * *`             | Every minute                      |
| `0 * * * *`             | Every hour, on the hour           |
| `0 0 * * *`             | Every day at midnight             |
| `0 9 * * 1-5`           | Every weekday at 9:00 AM          |
| `0 0 1 * *`             | First day of every month          |
| `0 0 * * 0`             | Every Sunday at midnight          |
| `*/15 * * * *`          | Every 15 minutes                  |
| `0 9,17 * * 1-5`        | 9:00 AM and 5:00 PM on weekdays   |
| `30 2 * * *`            | Every day at 2:30 AM              |
| `0 0 1 1 *`             | January 1st at midnight (yearly)  |
| `0 0 L * *`             | Last day of every month           |
| `0 10 * * 1#1`          | First Monday of every month at 10 AM |

## Timezone-Aware Cron

All Meridian cron expressions are evaluated in a specified timezone. This is critical for schedules that need to fire at local wall-clock time:

```bash
curl -X POST -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "daily-report",
    "expression": "0 9 * * 1-5",
    "timezone": "America/New_York",
    "callback_url": "https://app.example.com/hooks/daily-report"
  }' \
  https://api.meridian.dev/v3/schedules
```

This job fires at 9:00 AM Eastern time every weekday. During DST transitions, the UTC execution time shifts automatically to maintain the 9:00 AM local time.

## Expression Validation

Validate a cron expression without creating a schedule:

```bash
curl -X POST -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "expression": "0 9 * * 1-5",
    "timezone": "Europe/London"
  }' \
  https://api.meridian.dev/v3/schedules/validate
```

```json
{
  "valid": true,
  "description": "At 09:00, Monday through Friday",
  "next_5_runs": [
    "2026-04-03T09:00:00+01:00",
    "2026-04-06T09:00:00+01:00",
    "2026-04-07T09:00:00+01:00",
    "2026-04-08T09:00:00+01:00",
    "2026-04-09T09:00:00+01:00"
  ]
}
```

## SDK Example

```python
from meridian import Client

client = Client(api_key="your-api-key")

# Validate and preview a cron expression
preview = client.schedules.validate(
    expression="*/30 9-17 * * 1-5",
    timezone="Asia/Tokyo",
)

print(preview.description)
# "Every 30 minutes, between 09:00 and 17:59, Monday through Friday"

for run in preview.next_5_runs:
    print(run)
```
