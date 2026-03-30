+++
title = "Cold Start"
description = "Understanding and optimizing cold start latency in Dynamo"
tags = ["cold-start", "performance", "dynamo"]
+++

# Cold Start

A cold start occurs when Dynamo must initialize a new function instance to handle an incoming event. This includes provisioning a container, loading the runtime, importing dependencies, and executing initialization code before the handler runs.

## Cold Start Phases

```
  Container      Runtime      Dependency     Init Code     Handler
  Provision      Bootstrap    Import         Execute       Execute
  ----------     ---------    ----------     ---------     -------
  ~50ms          ~30-200ms    ~10-500ms      variable      variable
```

| Phase | Duration | Controlled By |
|-------|----------|---------------|
| Container Provision | 30-80ms | Platform (not configurable) |
| Runtime Bootstrap | 30-350ms | Runtime selection |
| Dependency Import | 10-500ms+ | Package size and count |
| Init Code | Variable | Your initialization logic |
| Handler Execution | Variable | Your handler logic |

## Cold Start by Runtime

Average cold start latency measured across standard workloads:

| Runtime | Minimal Function | With Dependencies | Heavy Init |
|---------|-----------------|-------------------|-----------|
| Go 1.22 | 42ms | 48ms | 65ms |
| Rust | 35ms | 40ms | 55ms |
| Node.js 20 | 120ms | 210ms | 450ms |
| Python 3.12 | 145ms | 280ms | 620ms |
| Java 21 | 350ms | 850ms | 1800ms |

## Optimization Strategies

### 1. Choose a Compiled Runtime

Go and Rust produce statically linked binaries with no runtime bootstrap overhead. If cold start latency is critical, migrate to a compiled runtime:

```go
// Go handler - single binary, ~42ms cold start
func Handler(ctx dynamo.Context, event dynamo.Event) (dynamo.Response, error) {
    return dynamo.Response{StatusCode: 200, Body: []byte("fast")}, nil
}
```

### 2. Minimize Package Size

Reduce the deployment artifact size by excluding unnecessary files:

```yaml
# config.yaml
package:
  exclude:
    - "tests/**"
    - "docs/**"
    - "*.md"
    - ".git/**"
    - "__pycache__/**"
    - "node_modules/.cache/**"
```

Check your current package size:

```bash
dynamo package process-order --dry-run
```

```
Package analysis for process-order:
  Source files: 1.2 MB
  Dependencies: 8.4 MB
  Total artifact: 9.6 MB

  Largest dependencies:
    numpy          24.1 MB (excluded via tree-shaking)
    requests       0.8 MB
    boto3          7.2 MB
    pydantic       0.4 MB
```

### 3. Use Provisioned Concurrency

Keep a pool of warm instances ready to handle requests without cold starts:

```yaml
scaling:
  provisioned_concurrency: 5
  provisioned_schedule:
    - cron: "0 8 * * 1-5"
      concurrency: 20
    - cron: "0 18 * * 1-5"
      concurrency: 5
```

```bash
# Set provisioned concurrency via CLI
dynamo scaling set process-order --provisioned 5
```

### 4. Lazy-Load Dependencies

Defer expensive imports until they are actually needed:

```python
# Bad: imports at module level cause slow cold starts
import pandas as pd
import numpy as np

def main(event, context):
    df = pd.DataFrame(event["data"])
    return {"result": df.describe().to_dict()}

# Good: lazy import only when needed
def main(event, context):
    import pandas as pd
    df = pd.DataFrame(event["data"])
    return {"result": df.describe().to_dict()}
```

### 5. Use Init-Once Patterns

Initialize shared resources outside the handler so they persist across warm invocations:

```javascript
// Initialized once, reused across invocations
let dbPool = null;

async function getPool() {
  if (!dbPool) {
    const { Pool } = await import('pg');
    dbPool = new Pool({ connectionString: process.env.DB_URL });
  }
  return dbPool;
}

export async function main(event, context) {
  const pool = await getPool();
  const result = await pool.query('SELECT * FROM orders WHERE id = $1', [event.orderId]);
  return { statusCode: 200, body: JSON.stringify(result.rows[0]) };
}
```

### 6. Reduce Init Code

Move configuration parsing and validation to build time rather than runtime:

```bash
# Pre-compile configuration during build
dynamo deploy process-order --hook "python scripts/compile_config.py"
```

## Measuring Cold Starts

Query cold start metrics for a function:

```bash
dynamo metrics cold-starts process-order --period 24h
```

```
Cold Start Report: process-order (last 24h)
  Total invocations: 14,230
  Cold starts: 342 (2.4%)
  Avg cold start: 185ms
  P50 cold start: 160ms
  P95 cold start: 310ms
  P99 cold start: 480ms
```

> Functions with provisioned concurrency still incur cold starts when traffic exceeds the provisioned pool size. Monitor the `cold_start_overflow` metric to determine if you need to increase the provisioned count.
