+++
title = "Configuration"
description = "Configure the Crucible test runner for your project"
tags = ["configuration", "setup"]
+++

# Configuration

Crucible is configured through a `crucible.config.yaml` file in your project root. This file controls test discovery, execution, reporting, and CI behavior.

## Minimal Configuration

```yaml
# crucible.config.yaml
project:
  name: "my-project"
  root: "."

discovery:
  patterns:
    - "tests/**/*.test.js"
    - "tests/**/*.spec.js"
  exclude:
    - "node_modules/**"
    - "dist/**"

execution:
  parallel: true
  workers: 4
  timeout: 30000    # 30 seconds per test
  retries: 0
  bail: false       # Stop on first failure

reporting:
  formats:
    - terminal
    - junit
  output_dir: "test-results"
```

## Configuration Reference

### Project Section

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `name` | string | directory name | Project identifier used in reports |
| `root` | string | `"."` | Root directory for relative path resolution |
| `env_file` | string | `null` | Path to `.env` file loaded before tests |

### Discovery Section

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `patterns` | list | `["**/*.test.*"]` | Glob patterns for test file discovery |
| `exclude` | list | `["node_modules/**"]` | Glob patterns to exclude |
| `tags` | list | `[]` | Only run tests matching these tags |
| `sort` | string | `"alpha"` | Test ordering: `alpha`, `random`, `defined` |

### Execution Section

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `parallel` | bool | `true` | Run tests in parallel |
| `workers` | int | CPU count | Number of parallel workers |
| `timeout` | int | `30000` | Per-test timeout in milliseconds |
| `retries` | int | `0` | Retry count for flaky tests |
| `bail` | bool | `false` | Stop execution on first failure |
| `setup_file` | string | `null` | Global setup script run before all tests |
| `teardown_file` | string | `null` | Global teardown script run after all tests |

### Reporting Section

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `formats` | list | `["terminal"]` | Output formats: `terminal`, `junit`, `json`, `html` |
| `output_dir` | string | `"test-results"` | Directory for report files |
| `verbose` | bool | `false` | Show detailed output for passing tests |
| `coverage.enabled` | bool | `false` | Enable code coverage collection |
| `coverage.threshold` | float | `0.0` | Minimum coverage percentage to pass |
| `coverage.exclude` | list | `[]` | Patterns to exclude from coverage |

## Environment-Specific Overrides

Use environment-specific configuration files that merge with the base config:

```yaml
# crucible.config.ci.yaml
execution:
  parallel: true
  workers: 2
  retries: 2
  bail: true

reporting:
  formats:
    - terminal
    - junit
    - json
  verbose: false
  coverage:
    enabled: true
    threshold: 80.0
```

Apply the override:

```bash
crucible run --config crucible.config.ci.yaml
```

## Tag-Based Filtering

Tags let you run subsets of your test suite. Define tags in your test files:

```javascript
// tests/unit/auth.test.js
describe('Authentication', { tags: ['auth', 'critical'] }, () => {
  it('validates JWT tokens', () => {
    // ...
  });
});
```

Run only tests with specific tags:

```bash
# Run all tests tagged "critical"
crucible run --tags critical

# Run tests tagged "auth" but not "slow"
crucible run --tags "auth,!slow"
```

## Fixture Configuration

Configure shared fixtures that are available across test files:

```yaml
fixtures:
  database:
    type: "postgres"
    setup: "fixtures/db-setup.sql"
    teardown: "fixtures/db-teardown.sql"
  api:
    type: "http"
    base_url: "http://localhost:3001"
    health_check: "/healthz"
    startup_timeout: 10000
```

Access fixtures in tests:

```javascript
describe('User API', () => {
  it('creates a user', async ({ fixtures }) => {
    const db = await fixtures.database;
    const api = await fixtures.api;

    const response = await api.post('/users', {
      name: 'Alice',
      email: 'alice@example.com',
    });

    expect(response.status).toBe(201);

    const row = await db.query('SELECT * FROM users WHERE email = $1', ['alice@example.com']);
    expect(row).toBeDefined();
  });
});
```

## Next Steps

Now that your project is configured, learn about the different [Test Types](../../test-types/) supported by Crucible.
