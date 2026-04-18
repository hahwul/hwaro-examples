+++
title = "Timezone Database"
weight = 1
description = "World timezone mapping table and IANA database reference"
[taxonomies]
tags = ["timezones", "reference"]
+++

## Overview

Meridian maintains a complete mirror of the IANA Time Zone Database, providing access to over 400 timezone identifiers. The database is updated automatically within 24 hours of each upstream release.

## Listing Timezones

Retrieve all available timezones with the list endpoint:

```bash
curl -H "Authorization: Bearer $API_KEY" \
  https://api.meridian.dev/v3/timezones
```

Response:

```json
{
  "count": 419,
  "timezones": [
    {
      "id": "America/New_York",
      "abbreviation": "EDT",
      "utc_offset": "-04:00",
      "dst_active": true
    },
    ...
  ]
}
```

## Common Timezone Reference

The table below lists frequently used timezones with their standard abbreviations and UTC offsets.

| IANA Identifier        | Abbreviation | UTC Offset | Region              |
|------------------------|-------------|------------|---------------------|
| America/New_York       | EST / EDT   | -05:00     | US Eastern          |
| America/Chicago        | CST / CDT   | -06:00     | US Central          |
| America/Denver         | MST / MDT   | -07:00     | US Mountain         |
| America/Los_Angeles    | PST / PDT   | -08:00     | US Pacific          |
| America/Anchorage      | AKST / AKDT | -09:00     | US Alaska           |
| Pacific/Honolulu       | HST         | -10:00     | US Hawaii           |
| America/Toronto        | EST / EDT   | -05:00     | Canada Eastern      |
| America/Vancouver      | PST / PDT   | -08:00     | Canada Pacific      |
| America/Sao_Paulo      | BRT / BRST  | -03:00     | Brazil              |
| America/Argentina/Buenos_Aires | ART | -03:00     | Argentina           |
| Europe/London          | GMT / BST   | +00:00     | United Kingdom      |
| Europe/Paris           | CET / CEST  | +01:00     | France              |
| Europe/Berlin          | CET / CEST  | +01:00     | Germany             |
| Europe/Moscow          | MSK         | +03:00     | Russia (Western)    |
| Europe/Istanbul        | TRT         | +03:00     | Turkey              |
| Asia/Dubai             | GST         | +04:00     | UAE                 |
| Asia/Kolkata           | IST         | +05:30     | India               |
| Asia/Bangkok           | ICT         | +07:00     | Thailand            |
| Asia/Shanghai          | CST         | +08:00     | China               |
| Asia/Tokyo             | JST         | +09:00     | Japan               |
| Asia/Seoul             | KST         | +09:00     | South Korea         |
| Australia/Sydney       | AEST / AEDT | +10:00     | Australia Eastern   |
| Australia/Perth        | AWST        | +08:00     | Australia Western   |
| Pacific/Auckland       | NZST / NZDT | +12:00     | New Zealand         |
| Africa/Cairo           | EET / EEST  | +02:00     | Egypt               |
| Africa/Johannesburg    | SAST        | +02:00     | South Africa        |
| Africa/Lagos           | WAT         | +01:00     | Nigeria             |

## Querying a Single Timezone

Fetch details for a specific timezone by its IANA identifier:

```bash
curl -H "Authorization: Bearer $API_KEY" \
  https://api.meridian.dev/v3/timezones/America/New_York
```

```json
{
  "id": "America/New_York",
  "abbreviation": "EDT",
  "utc_offset": "-04:00",
  "dst_active": true,
  "dst_start": "2026-03-08T02:00:00-05:00",
  "dst_end": "2026-11-01T02:00:00-04:00",
  "current_time": "2026-04-02T08:30:15-04:00",
  "iana_version": "2026a"
}
```

## Timezone Metadata Fields

| Field          | Type    | Description                                          |
|----------------|---------|------------------------------------------------------|
| `id`           | string  | IANA timezone identifier                             |
| `abbreviation` | string  | Current timezone abbreviation (changes with DST)     |
| `utc_offset`   | string  | Current offset from UTC in +HH:MM format             |
| `dst_active`   | boolean | Whether daylight saving time is currently in effect   |
| `dst_start`    | string  | ISO 8601 timestamp of the next or current DST start  |
| `dst_end`      | string  | ISO 8601 timestamp of the next or current DST end    |
| `current_time` | string  | Current local time in the timezone                   |
| `iana_version` | string  | Version of the IANA database in use                  |

## Filtering by Region

You can filter timezones by region using the `region` query parameter:

```bash
curl -H "Authorization: Bearer $API_KEY" \
  "https://api.meridian.dev/v3/timezones?region=Europe"
```

Valid region values: `Africa`, `America`, `Antarctica`, `Arctic`, `Asia`, `Atlantic`, `Australia`, `Europe`, `Indian`, `Pacific`.
