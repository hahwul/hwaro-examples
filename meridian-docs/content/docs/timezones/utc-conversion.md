+++
title = "UTC Conversion"
weight = 3
description = "API reference for converting timestamps between UTC and local timezones"
[taxonomies]
tags = ["timezones", "api"]
+++

## Overview

The UTC Conversion API allows you to convert timestamps between any pair of timezones, or between UTC and a local timezone. All conversions account for daylight saving time rules automatically.

## Convert Between Timezones

The primary conversion endpoint accepts a source timestamp with its timezone and a target timezone:

```bash
curl -X POST -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "timestamp": "2026-04-02T14:30:00",
    "from": "America/New_York",
    "to": "Asia/Tokyo"
  }' \
  https://api.meridian.dev/v3/convert
```

```json
{
  "input": "2026-04-02T14:30:00-04:00",
  "output": "2026-04-03T03:30:00+09:00",
  "utc": "2026-04-02T18:30:00Z",
  "offset_diff": "+13:00"
}
```

## Request Parameters

| Parameter    | Type   | Required | Description                                        |
|-------------|--------|----------|----------------------------------------------------|
| `timestamp` | string | Yes      | ISO 8601 timestamp to convert                      |
| `from`      | string | Yes      | Source IANA timezone identifier                     |
| `to`        | string | Yes      | Target IANA timezone identifier                     |
| `format`    | string | No       | Output format: `iso8601` (default), `unix`, `rfc2822` |

## Batch Conversion

Convert a single timestamp to multiple timezones in one request:

```bash
curl -X POST -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "timestamp": "2026-04-02T09:00:00Z",
    "targets": [
      "America/New_York",
      "Europe/London",
      "Asia/Tokyo",
      "Australia/Sydney"
    ]
  }' \
  https://api.meridian.dev/v3/convert/batch
```

```json
{
  "source_utc": "2026-04-02T09:00:00Z",
  "results": [
    {
      "timezone": "America/New_York",
      "local": "2026-04-02T05:00:00-04:00",
      "abbreviation": "EDT"
    },
    {
      "timezone": "Europe/London",
      "local": "2026-04-02T10:00:00+01:00",
      "abbreviation": "BST"
    },
    {
      "timezone": "Asia/Tokyo",
      "local": "2026-04-02T18:00:00+09:00",
      "abbreviation": "JST"
    },
    {
      "timezone": "Australia/Sydney",
      "local": "2026-04-02T20:00:00+11:00",
      "abbreviation": "AEDT"
    }
  ]
}
```

## SDK Usage

### JavaScript / TypeScript

```javascript
import { Meridian } from '@meridian/sdk';

const client = new Meridian({ apiKey: process.env.MERIDIAN_API_KEY });

// Single conversion
const result = await client.convert({
  timestamp: '2026-04-02T14:30:00',
  from: 'America/New_York',
  to: 'Europe/Berlin',
});

console.log(result.output); // "2026-04-02T20:30:00+02:00"
```

### Python

```python
from meridian import Client

client = Client(api_key="your-api-key")

result = client.convert(
    timestamp="2026-04-02T14:30:00",
    from_tz="America/New_York",
    to_tz="Europe/Berlin",
)

print(result.output)  # "2026-04-02T20:30:00+02:00"
```

### Go

```go
package main

import (
    "fmt"
    "github.com/meridian/meridian-go"
)

func main() {
    client := meridian.NewClient("your-api-key")

    result, err := client.Convert(meridian.ConvertRequest{
        Timestamp: "2026-04-02T14:30:00",
        From:      "America/New_York",
        To:        "Europe/Berlin",
    })
    if err != nil {
        panic(err)
    }

    fmt.Println(result.Output) // "2026-04-02T20:30:00+02:00"
}
```

## Unix Timestamp Conversion

When working with Unix timestamps, set the `format` parameter to `unix`:

```bash
curl -X POST -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "timestamp": "1775312400",
    "from": "UTC",
    "to": "America/Los_Angeles",
    "format": "unix"
  }' \
  https://api.meridian.dev/v3/convert
```

```json
{
  "input_unix": 1775312400,
  "output": "2026-04-02T02:00:00-07:00",
  "output_unix": 1775312400,
  "note": "Unix timestamps are timezone-independent; the output_unix matches input"
}
```

## Error Codes

| Code | Status | Description                                  |
|------|--------|----------------------------------------------|
| `INVALID_TIMEZONE`   | 400 | The provided timezone identifier is not valid |
| `INVALID_TIMESTAMP`  | 400 | The timestamp could not be parsed             |
| `GAP_TIME`           | 422 | Timestamp falls in a DST gap                  |
| `AMBIGUOUS_TIME`     | 422 | Timestamp is ambiguous due to DST overlap     |
| `RATE_LIMIT`         | 429 | Request rate limit exceeded                   |
