+++
title = "Initialization"
weight = 1
date = "2025-08-18"
description = "SDK initialization patterns and lifecycle management"
+++

# Initialization

Proper initialization ensures the Beacon client is ready before your application evaluates flags. This page covers initialization patterns for TypeScript and Python.

## TypeScript

The recommended pattern uses async/await to block until the client is ready:

```typescript
import { BeaconClient } from '@beacon/sdk';

const client = new BeaconClient({
  sdkKey: process.env.BEACON_SDK_KEY,
  environment: 'production',
});

async function bootstrap() {
  await client.initialize();
  console.log('Beacon client ready');

  // Application startup logic
  startServer();
}

bootstrap().catch((err) => {
  console.error('Failed to initialize Beacon:', err);
  process.exit(1);
});
```

### Event-based initialization

For applications that cannot block on startup, use the event-based approach:

```typescript
client.on('ready', () => {
  console.log('Flags loaded, client is ready');
});

client.on('error', (err) => {
  console.error('Initialization error:', err);
});

client.initialize();
```

## Python

```python
from beacon_sdk import BeaconClient
import os

client = BeaconClient(
    sdk_key=os.environ["BEACON_SDK_KEY"],
    environment="production",
)

try:
    client.initialize()
    print("Beacon client ready")
except Exception as e:
    print(f"Failed to initialize Beacon: {e}")
    raise SystemExit(1)
```

### Context manager

The Python SDK supports a context manager for automatic cleanup:

```python
with BeaconClient(sdk_key=os.environ["BEACON_SDK_KEY"]) as client:
    client.initialize()
    value = client.boolean_flag("my-flag", user, False)
    # Client is automatically closed when exiting the block
```

## Initialization states

| State | Description | Flag evaluations return |
|---|---|---|
| Uninitialized | Client created but `initialize()` not called | Default values |
| Initializing | Fetching flag configuration from server | Default values |
| Ready | Flag configuration loaded successfully | Evaluated values |
| Error | Failed to fetch configuration | Default values (cached if available) |

> Always handle the error state gracefully. Your application should function correctly using default flag values when the Beacon server is unreachable.
