+++
title = "DST Handling"
weight = 2
description = "Daylight saving time processing, edge cases, and transition rules"
[taxonomies]
tags = ["timezones", "dst"]
+++

## Overview

Daylight saving time (DST) introduces two critical edge cases: the "spring forward" gap (where local times are skipped) and the "fall back" overlap (where local times are repeated). Meridian provides explicit APIs and configuration options to handle both scenarios correctly.

## DST Transition Detection

Use the transitions endpoint to find upcoming DST changes for a timezone:

```bash
curl -H "Authorization: Bearer $API_KEY" \
  "https://api.meridian.dev/v3/timezones/America/New_York/transitions?year=2026"
```

```json
{
  "timezone": "America/New_York",
  "transitions": [
    {
      "type": "spring_forward",
      "at": "2026-03-08T02:00:00-05:00",
      "offset_before": "-05:00",
      "offset_after": "-04:00",
      "gap_minutes": 60
    },
    {
      "type": "fall_back",
      "at": "2026-11-01T02:00:00-04:00",
      "offset_before": "-04:00",
      "offset_after": "-05:00",
      "overlap_minutes": 60
    }
  ]
}
```

## Spring Forward (Gap Times)

During a spring-forward transition, an hour of local time does not exist. For example, in `America/New_York` on March 8, 2026, the time jumps from 01:59:59 EST directly to 03:00:00 EDT. Any timestamp between 02:00:00 and 02:59:59 is invalid.

### Handling Gap Times

When you submit a timestamp that falls within a gap, Meridian's behavior depends on the `gap_strategy` parameter:

| Strategy   | Behavior                                                    |
|------------|-------------------------------------------------------------|
| `reject`   | Returns a 422 error with details about the gap              |
| `forward`  | Moves the time forward to the end of the gap (default)      |
| `backward` | Moves the time backward to the start of the gap             |

Example using the `reject` strategy:

```bash
curl -X POST -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "timestamp": "2026-03-08T02:30:00",
    "timezone": "America/New_York",
    "gap_strategy": "reject"
  }' \
  https://api.meridian.dev/v3/timezones/validate
```

```json
{
  "valid": false,
  "error": "gap_time",
  "message": "The time 02:30:00 does not exist in America/New_York on 2026-03-08",
  "gap_start": "2026-03-08T02:00:00",
  "gap_end": "2026-03-08T03:00:00"
}
```

## Fall Back (Ambiguous Times)

During a fall-back transition, an hour of local time occurs twice. For example, in `America/New_York` on November 1, 2026, the time 01:30:00 happens once at EDT (UTC-04:00) and again at EST (UTC-05:00).

### Resolving Ambiguous Times

When you submit an ambiguous timestamp, Meridian resolves it based on the `ambiguity_strategy` parameter:

| Strategy     | Behavior                                                          |
|-------------|-------------------------------------------------------------------|
| `earlier`   | Selects the first occurrence (before the transition)               |
| `later`     | Selects the second occurrence (after the transition, default)      |
| `reject`    | Returns a 422 error indicating ambiguity                           |

```javascript
import { Meridian } from '@meridian/sdk';

const client = new Meridian({ apiKey: 'your-api-key' });

// Resolve an ambiguous time to the earlier occurrence
const result = await client.timezones.resolve({
  timestamp: '2026-11-01T01:30:00',
  timezone: 'America/New_York',
  ambiguity_strategy: 'earlier',
});

console.log(result.resolved);
// "2026-11-01T01:30:00-04:00" (EDT, first occurrence)
```

## DST-Aware Date Arithmetic

When adding or subtracting time across DST boundaries, use the `duration` endpoint with DST awareness enabled:

```bash
curl -X POST -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "start": "2026-03-08T01:00:00-05:00",
    "add": "PT2H",
    "timezone": "America/New_York",
    "dst_aware": true
  }' \
  https://api.meridian.dev/v3/timezones/duration
```

```json
{
  "start": "2026-03-08T01:00:00-05:00",
  "end": "2026-03-08T04:00:00-04:00",
  "wall_clock_hours": 2,
  "elapsed_seconds": 7200,
  "dst_transition_crossed": true
}
```

Note that the wall clock shows a 3-hour jump (01:00 to 04:00), but only 2 hours of real time elapsed. The `elapsed_seconds` field always reflects actual elapsed time.

## Regions Without DST

Several major regions do not observe DST. When querying transitions for these zones, an empty array is returned:

- `Asia/Tokyo` (Japan)
- `Asia/Shanghai` (China)
- `Asia/Kolkata` (India)
- `Asia/Dubai` (UAE)
- `Africa/Johannesburg` (South Africa)
- `Pacific/Honolulu` (US Hawaii)
- `America/Phoenix` (US Arizona, except Navajo Nation)
