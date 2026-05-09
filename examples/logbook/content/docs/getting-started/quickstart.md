+++
title = "Quickstart"
weight = 3
+++

## Quickstart Guide

This quickstart guide provides a rapid path to integrating our audit logging system into your application. We will cover the basic steps required to initialize the client and send your first audit event.

### Initialization

First, ensure you have completed the installation process and have your API key ready. You will need to import the core library and initialize the client with your credentials.

```javascript
import { AuditClient } from '@example/audit-logger';

const client = new AuditClient({
  apiKey: process.env.AUDIT_API_KEY,
  environment: 'production'
});
```

### Sending an Event

Once initialized, you can begin sending events. The `log` method requires, at minimum, an event type and a description. We highly recommend including a user identifier to properly attribute the action.

```javascript
await client.log({
  type: 'user.login',
  description: 'User successfully authenticated via SSO.',
  actor: {
    id: 'user_123',
    email: 'user@example.com'
  }
});
```

Verify that the event appears in your dashboard. If you encounter any issues, please review the configuration documentation or contact our support team. The dashboard provides real-time visibility into incoming events, allowing you to quickly confirm that your integration is working correctly.
