+++
title = "Client SDK"
weight = 2
sort_by = "weight"
+++

# Client SDK

The Anthology client is the central object through which all API interactions occur. This section covers how to configure the client, handle errors, and customize behavior for your application.

## Architecture

The client uses a modular design where each API domain (resources, webhooks, etc.) is exposed as a namespaced property:

```python
client = Client(api_key="ak_live_...")
client.resources    # ResourceService
client.webhooks     # WebhookService
client.account      # AccountService
```

All methods return typed response objects and raise typed exceptions, making it straightforward to integrate with your application's error handling.

## In This Section

- **Configuration** -- Timeouts, retries, base URL, and HTTP settings
- **Error Handling** -- Exception types, retry logic, and best practices
