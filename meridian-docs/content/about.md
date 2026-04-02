+++
title = "About Meridian"
description = "Learn about the Meridian platform and its mission"
+++

# About Meridian

Meridian is a timezone and scheduling infrastructure platform designed for teams building globally distributed applications. We handle the complexity of time so you can focus on your product.

## Why Meridian

Working with time is deceptively difficult. Daylight saving transitions, political timezone changes, leap seconds, and ambiguous local times create subtle bugs that are hard to detect and harder to fix. Meridian abstracts these challenges behind a clean, well-tested API.

## Architecture

Meridian runs on a globally distributed network of nodes, each maintaining a synchronized copy of the IANA timezone database. When you make an API call, your request is routed to the nearest node, ensuring low-latency responses regardless of your location.

### Core Components

- **Timezone Engine** -- Parses and applies IANA timezone rules, including historical data back to 1970
- **Scheduler Service** -- Manages cron-based and interval-based recurring jobs with DST awareness
- **Conversion API** -- Handles timestamp conversion between any pair of timezones
- **Notification System** -- Delivers webhook callbacks when scheduled jobs execute or fail

## Data Sources

Meridian uses the IANA Time Zone Database (often called the Olson database) as its primary data source. The database is updated multiple times per year to reflect political decisions about timezone boundaries and DST rules. Meridian syncs these updates within 24 hours of release.

## API Versioning

All Meridian APIs follow semantic versioning. Breaking changes are only introduced in major versions, and previous major versions are supported for at least 18 months after a new major version is released.

| Version | Status     | End of Support |
|---------|------------|----------------|
| v3      | Current    | --             |
| v2      | Maintained | March 2027     |
| v1      | Deprecated | June 2026      |

## Contact

For support, reach out at support@meridian.dev or visit the community forum at community.meridian.dev.
