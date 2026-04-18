+++
title = "Configuration"
weight = 1
tags = ["configuration", "client", "settings"]
+++

# Configuration

The Anthology client accepts a range of configuration options to control timeouts, retries, base URLs, and HTTP behavior.

## Constructor Options

| Option         | Type      | Default                          | Description                                |
|----------------|-----------|----------------------------------|--------------------------------------------|
| `api_key`      | `string`  | `ANTHOLOGY_API_KEY` env var      | API key for authentication                 |
| `access_token` | `string`  | None                             | OAuth access token                         |
| `base_url`     | `string`  | `https://api.anthology.io/v2`   | API base URL                               |
| `timeout`      | `int`     | `30`                             | Request timeout in seconds                 |
| `max_retries`  | `int`     | `3`                              | Maximum number of retry attempts           |
| `retry_delay`  | `float`   | `1.0`                            | Initial delay between retries in seconds   |
| `verify_ssl`   | `bool`    | `true`                           | Whether to verify SSL certificates         |

## Python

```python
from anthology import Client

client = Client(
    api_key="ak_live_abc123",
    base_url="https://api.anthology.io/v2",
    timeout=60,
    max_retries=5,
    retry_delay=2.0
)
```

## JavaScript

```javascript
import { Client } from '@anthology/sdk';

const client = new Client({
  apiKey: 'ak_live_abc123',
  baseUrl: 'https://api.anthology.io/v2',
  timeout: 60000, // milliseconds
  maxRetries: 5,
  retryDelay: 2000
});
```

## Go

```go
client := anthology.NewClient(
    "ak_live_abc123",
    anthology.WithBaseURL("https://api.anthology.io/v2"),
    anthology.WithTimeout(60 * time.Second),
    anthology.WithMaxRetries(5),
    anthology.WithRetryDelay(2 * time.Second),
)
```

## Custom HTTP Client

You can provide your own HTTP client for advanced use cases such as custom TLS configuration, proxy support, or request logging.

### Python

```python
import httpx
from anthology import Client

http_client = httpx.Client(
    verify="/path/to/custom-ca-bundle.crt",
    proxies="http://proxy.internal:8080"
)

client = Client(
    api_key="ak_live_abc123",
    http_client=http_client
)
```

### JavaScript

```javascript
import { Client } from '@anthology/sdk';
import https from 'https';

const agent = new https.Agent({
  ca: fs.readFileSync('/path/to/custom-ca-bundle.crt'),
  rejectUnauthorized: true
});

const client = new Client({
  apiKey: 'ak_live_abc123',
  httpAgent: agent
});
```

### Go

```go
httpClient := &http.Client{
    Transport: &http.Transport{
        TLSClientConfig: &tls.Config{
            RootCAs: customCertPool,
        },
        Proxy: http.ProxyURL(proxyURL),
    },
}

client := anthology.NewClient(
    "ak_live_abc123",
    anthology.WithHTTPClient(httpClient),
)
```

## Request Headers

Add custom headers to every request using the `default_headers` option:

```python
client = Client(
    api_key="ak_live_abc123",
    default_headers={
        "X-Request-Source": "my-service",
        "X-Correlation-ID": correlation_id
    }
)
```

## Logging

Enable debug logging to inspect outgoing requests and incoming responses:

```python
import logging
logging.basicConfig(level=logging.DEBUG)

client = Client(api_key="ak_live_abc123")
# All HTTP requests and responses will be logged
```

Next, learn about [Error Handling]({{ base_url }}/docs/client-sdk/error-handling/) to build resilient integrations.
