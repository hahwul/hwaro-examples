+++
title = "Error Handling"
weight = 2
tags = ["errors", "exceptions", "retry"]
+++

# Error Handling

The Anthology SDK provides a structured error hierarchy so you can handle failures precisely. All SDK errors inherit from a base exception class and include the HTTP status code, error type, and a human-readable message.

## Error Types

| Exception Class          | HTTP Status | Description                                      |
|--------------------------|-------------|--------------------------------------------------|
| `AuthenticationError`    | 401         | Invalid or expired API key / access token        |
| `PermissionError`        | 403         | Insufficient scopes or permissions               |
| `NotFoundError`          | 404         | The requested resource does not exist            |
| `ValidationError`        | 422         | Request body failed server-side validation       |
| `RateLimitError`         | 429         | Too many requests; retry after the given delay   |
| `ServerError`            | 500         | Internal server error                            |
| `ServiceUnavailableError`| 503         | The API is temporarily unavailable               |
| `TimeoutError`           | --          | The request exceeded the configured timeout      |
| `NetworkError`           | --          | A connection-level failure occurred              |

## Python

```python
from anthology import Client
from anthology.exceptions import (
    AnthologyError,
    NotFoundError,
    RateLimitError,
    ValidationError
)

client = Client()

try:
    resource = client.resources.get("res_abc123")
except NotFoundError as e:
    print(f"Resource not found: {e.message}")
except RateLimitError as e:
    print(f"Rate limited. Retry after {e.retry_after} seconds")
except ValidationError as e:
    for field_error in e.errors:
        print(f"Field '{field_error.field}': {field_error.message}")
except AnthologyError as e:
    print(f"API error {e.status_code}: {e.message}")
```

## JavaScript

```javascript
import { Client, errors } from '@anthology/sdk';

const client = new Client({ apiKey: 'ak_live_abc123' });

try {
  const resource = await client.resources.get('res_abc123');
} catch (err) {
  if (err instanceof errors.NotFoundError) {
    console.error(`Resource not found: ${err.message}`);
  } else if (err instanceof errors.RateLimitError) {
    console.error(`Rate limited. Retry after ${err.retryAfter}s`);
  } else if (err instanceof errors.ValidationError) {
    err.errors.forEach(e => console.error(`${e.field}: ${e.message}`));
  } else if (err instanceof errors.AnthologyError) {
    console.error(`API error ${err.statusCode}: ${err.message}`);
  }
}
```

## Go

```go
resource, err := client.Resources.Get("res_abc123")
if err != nil {
    var notFound *anthology.NotFoundError
    var rateLimit *anthology.RateLimitError
    var validation *anthology.ValidationError

    switch {
    case errors.As(err, &notFound):
        fmt.Printf("Resource not found: %s\n", notFound.Message)
    case errors.As(err, &rateLimit):
        fmt.Printf("Rate limited. Retry after %d seconds\n", rateLimit.RetryAfter)
    case errors.As(err, &validation):
        for _, fe := range validation.Errors {
            fmt.Printf("Field '%s': %s\n", fe.Field, fe.Message)
        }
    default:
        fmt.Printf("Unexpected error: %v\n", err)
    }
}
```

## Automatic Retries

The SDK automatically retries requests that fail with transient errors (429, 500, 503) using exponential backoff. The retry behavior is controlled by the `max_retries` and `retry_delay` configuration options.

| Attempt | Delay        |
|---------|--------------|
| 1       | 1.0 seconds  |
| 2       | 2.0 seconds  |
| 3       | 4.0 seconds  |
| 4       | 8.0 seconds  |
| 5       | 16.0 seconds |

For `RateLimitError` responses that include a `Retry-After` header, the SDK respects that value instead of the exponential backoff schedule.

## Disabling Retries

```python
client = Client(api_key="ak_live_abc123", max_retries=0)
```

## Error Response Format

All API errors return a consistent JSON body:

```json
{
  "error": {
    "type": "validation_error",
    "message": "Request validation failed",
    "code": "INVALID_PARAMS",
    "errors": [
      {
        "field": "name",
        "message": "Name is required",
        "code": "REQUIRED"
      }
    ]
  }
}
```

The SDK parses this response and populates the exception properties accordingly.

Next, explore the full [API Reference]({{ base_url }}/docs/api-reference/) to see all available methods.
