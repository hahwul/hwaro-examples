+++
title = "Configuration"
weight = 3
date = "2025-08-17"
description = "Client configuration options and defaults"
+++

# Configuration

The Beacon client accepts a configuration object at initialization time. This page documents all available options and their defaults.

## Configuration options

| Option | Type | Default | Description |
|---|---|---|---|
| `sdkKey` | string | (required) | Your environment-specific SDK key |
| `environment` | string | `"production"` | Target environment name |
| `pollingInterval` | number | `30000` | Interval in ms to poll for flag updates |
| `connectionTimeout` | number | `5000` | Timeout in ms for initial connection |
| `enableStreaming` | boolean | `false` | Use server-sent events instead of polling |
| `enableAnalytics` | boolean | `true` | Send flag evaluation events to analytics |
| `offlineMode` | boolean | `false` | Use cached flags without network calls |
| `logger` | object | `console` | Custom logger implementation |

## Full example

```typescript
import { BeaconClient } from '@beacon/sdk';

const client = new BeaconClient({
  sdkKey: 'sdk-prod-abc123',
  environment: 'production',
  pollingInterval: 15000,
  connectionTimeout: 10000,
  enableStreaming: true,
  enableAnalytics: true,
  offlineMode: false,
  logger: customLogger,
});

await client.initialize();
```

## Environment-specific keys

Each environment in Beacon has its own SDK key. Never use a production key in development or testing.

| Environment | Key Prefix | Purpose |
|---|---|---|
| Development | `sdk-dev-` | Local development and testing |
| Staging | `sdk-stg-` | Pre-production verification |
| Production | `sdk-prod-` | Live user traffic |

> Keep SDK keys out of version control. Use environment variables or a secrets manager to inject them at runtime.

## Offline mode

When `offlineMode` is enabled, the client uses the most recently cached flag configuration and does not make network requests. This is useful for environments without reliable connectivity.

```typescript
const client = new BeaconClient({
  sdkKey: 'sdk-prod-abc123',
  offlineMode: true,
});
```

In offline mode, flag evaluations use the last known state. If no cache exists, all evaluations return the default value.

## Streaming vs polling

By default, the client polls the Beacon server at the configured interval. Enabling streaming uses server-sent events for near-instant flag updates.

| Mode | Latency | Network | Use Case |
|---|---|---|---|
| Polling | Up to `pollingInterval` ms | Periodic requests | Most server-side applications |
| Streaming | Near-instant | Persistent connection | Client-side apps needing real-time updates |
