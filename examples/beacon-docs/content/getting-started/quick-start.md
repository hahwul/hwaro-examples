+++
title = "Quick Start"
weight = 2
date = "2025-08-16"
description = "Evaluate your first feature flag in under five minutes"
+++

# Quick Start

This guide walks you through initializing the Beacon client and evaluating a feature flag. You will have a working flag evaluation in under five minutes.

## Step 1: Initialize the client

Create a Beacon client instance with your SDK key. The client connects to the Beacon server and fetches the latest flag configuration.

```typescript
import { BeaconClient } from '@beacon/sdk';

const client = new BeaconClient({
  sdkKey: 'sdk-your-key-here',
  environment: 'production',
});

await client.initialize();
```

In Python:

```python
from beacon_sdk import BeaconClient

client = BeaconClient(
    sdk_key="sdk-your-key-here",
    environment="production",
)
client.initialize()
```

## Step 2: Evaluate a flag

Once the client is initialized, evaluate a flag by passing its key and a user context:

```typescript
const user = {
  id: 'user-123',
  email: 'jane@example.com',
  attributes: {
    plan: 'enterprise',
    country: 'US',
  },
};

const showNewDashboard = client.booleanFlag('new-dashboard', user, false);

if (showNewDashboard) {
  renderNewDashboard();
} else {
  renderLegacyDashboard();
}
```

> The third argument is the default value returned when the flag is not found or the client is not yet initialized.

## Step 3: Clean up

When your application shuts down, close the client to flush any pending analytics events:

```typescript
await client.close();
```

## Flag evaluation flow

| Step | Action | Result |
|---|---|---|
| 1 | Client receives flag key and user context | Looks up flag configuration |
| 2 | Targeting rules are evaluated in order | First matching rule wins |
| 3 | If no rule matches, default variation is used | Returns the default value |
| 4 | Evaluation event is recorded | Sent to analytics pipeline |

Now that you have a working flag evaluation, explore [Configuration](/getting-started/configuration/) to customize the client behavior.
