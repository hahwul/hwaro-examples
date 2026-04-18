+++
title = "Runtime"
description = "Runtime environments and handler conventions for Dynamo functions"
tags = ["runtime", "languages", "dynamo"]
+++

# Runtime

Dynamo supports multiple language runtimes for function execution. Each runtime provides a pre-configured container image with the language toolchain, standard library, and Dynamo SDK pre-installed.

## Supported Runtimes

| Runtime ID | Language | Version | Init Time | Image Size |
|-----------|----------|---------|-----------|------------|
| `nodejs20` | Node.js | 20.x LTS | ~120ms | 84 MB |
| `nodejs22` | Node.js | 22.x LTS | ~130ms | 91 MB |
| `python311` | Python | 3.11 | ~150ms | 72 MB |
| `python312` | Python | 3.12 | ~145ms | 75 MB |
| `go121` | Go | 1.21 | ~45ms | 28 MB |
| `go122` | Go | 1.22 | ~42ms | 30 MB |
| `rust` | Rust | stable | ~35ms | 22 MB |
| `java21` | Java | 21 LTS | ~350ms | 168 MB |

## Handler Conventions

### Node.js

The handler exports an async function that receives `event` and `context`:

```javascript
export async function main(event, context) {
  console.log(`Request ID: ${context.requestId}`);
  console.log(`Remaining time: ${context.getRemainingTimeMs()}ms`);

  const payload = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "processed", id: payload.id })
  };
}
```

### Python

The handler is a function that receives `event` and `context` dictionaries:

```python
import json
import logging

logger = logging.getLogger()

def main(event, context):
    logger.info(f"Request ID: {context['request_id']}")
    logger.info(f"Memory limit: {context['memory_mb']}MB")

    payload = json.loads(event["body"])

    return {
        "statusCode": 200,
        "body": json.dumps({"message": "processed", "id": payload["id"]})
    }
```

### Go

The handler implements the `dynamo.Handler` interface:

```go
package main

import (
    "encoding/json"
    "github.com/dynamo-faas/sdk-go/dynamo"
)

func Handler(ctx dynamo.Context, event dynamo.Event) (dynamo.Response, error) {
    var payload map[string]interface{}
    if err := json.Unmarshal(event.Body, &payload); err != nil {
        return dynamo.Response{StatusCode: 400}, err
    }

    body, _ := json.Marshal(map[string]string{
        "message": "processed",
    })

    return dynamo.Response{
        StatusCode: 200,
        Body:       body,
    }, nil
}

func main() {
    dynamo.Start(Handler)
}
```

## Context Object

The context object provides runtime metadata for each invocation:

| Property | Type | Description |
|---------|------|-------------|
| `request_id` | string | Unique identifier for this invocation |
| `function_name` | string | Name of the executing function |
| `function_version` | string | Deployed version identifier |
| `memory_mb` | integer | Allocated memory in megabytes |
| `timeout_seconds` | integer | Maximum execution time |
| `region` | string | Deployment region |
| `getRemainingTimeMs()` | function | Milliseconds before timeout |

## Dependency Management

Each runtime uses its native package manager for dependencies:

```bash
# Node.js - package.json in function directory
cd functions/my-function && npm install

# Python - requirements.txt in function directory
cd functions/my-function && pip install -r requirements.txt -t ./vendor

# Go - go.mod in function directory
cd functions/my-function && go mod tidy
```

## Shared Layers

Layers allow sharing common dependencies across multiple functions without bundling them in each deployment package:

```bash
# Create a layer from a directory
dynamo layers create shared-utils ./layers/utils --runtime nodejs20

# List available layers
dynamo layers list

# Attach a layer to a function via config.yaml
```

```yaml
layers:
  - shared-utils:v3
  - db-drivers:v1
```

## Custom Runtimes

For languages not included in the built-in list, Dynamo supports custom runtimes through a bootstrap interface:

```yaml
function:
  name: my-custom-function
  runtime: custom
  handler: bootstrap
```

The custom runtime must provide a `bootstrap` executable that implements the Dynamo Runtime API:

```bash
#!/bin/sh
while true; do
  EVENT=$(curl -s "http://localhost:9001/next")
  RESULT=$(./my-handler "$EVENT")
  curl -s -X POST "http://localhost:9001/response" -d "$RESULT"
done
```

> Go and Rust runtimes produce statically compiled binaries, resulting in the fastest cold start times. Consider these runtimes for latency-sensitive functions that receive sporadic traffic.
