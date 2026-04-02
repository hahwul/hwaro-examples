+++
title = "Home"
+++

# Meridian Docs

Welcome to the Meridian platform documentation. Meridian provides a comprehensive suite of APIs for working with timezones, scheduling recurring jobs, and managing time-sensitive operations across distributed systems.

## Documentation Sections

- [Timezone Reference](docs/timezones/) -- World timezone database, DST handling, and UTC conversion APIs
- [Scheduling](docs/scheduling/) -- Cron expressions, recurring jobs, and error handling strategies

## Quick Start

Get started with the Meridian API in minutes. Install the client library and make your first request:

```bash
npm install @meridian/sdk
```

```javascript
import { Meridian } from '@meridian/sdk';

const client = new Meridian({ apiKey: 'your-api-key' });

// Convert a timestamp between timezones
const result = await client.timezones.convert({
  timestamp: '2026-04-02T10:00:00Z',
  from: 'UTC',
  to: 'America/New_York',
});

console.log(result.converted); // "2026-04-02T06:00:00-04:00"
```

## Key Features

- **400+ Timezone Support** -- Full IANA timezone database with automatic updates
- **DST-Aware Scheduling** -- Jobs that respect daylight saving transitions
- **Cron Expression Builder** -- Human-readable cron syntax with validation
- **Retry Strategies** -- Configurable retry policies for failed scheduled tasks
- **Sub-second Precision** -- Nanosecond-level timestamp handling
