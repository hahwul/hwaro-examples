+++
title = "Test Stage"
weight = 2
+++

# Test Stage

The test stage validates code correctness through unit tests, integration tests, and end-to-end tests. Pipeline supports parallel test execution, coverage reporting, and test result aggregation.

## Basic Configuration

```yaml
stages:
  - name: test
    image: node:20-alpine
    depends_on: [build]
    commands:
      - npm run test -- --coverage
    artifacts:
      - coverage/
```

## Test Types

### Unit Tests

Unit tests run in isolation and validate individual functions or modules:

```yaml
stages:
  - name: unit-test
    image: node:20-alpine
    commands:
      - npm run test:unit -- --ci --reporters=default --reporters=jest-junit
    artifacts:
      - junit.xml
    reports:
      junit: junit.xml
```

### Integration Tests

Integration tests validate interactions between components and external services. Use `services` to start dependent containers:

```yaml
stages:
  - name: integration-test
    image: node:20-alpine
    services:
      - name: postgres
        image: postgres:16-alpine
        env:
          POSTGRES_DB: testdb
          POSTGRES_USER: test
          POSTGRES_PASSWORD: test
        health_check:
          command: pg_isready -U test
          interval: 5s
          retries: 5
      - name: redis
        image: redis:7-alpine
        health_check:
          command: redis-cli ping
          interval: 3s
          retries: 5
    variables:
      DATABASE_URL: postgres://test:test@postgres:5432/testdb
      REDIS_URL: redis://redis:6379
    commands:
      - npm run test:integration
```

### End-to-End Tests

End-to-end tests validate the full application stack using a browser or HTTP client:

```yaml
stages:
  - name: e2e-test
    image: cypress/included:13.6.0
    services:
      - name: app
        image: myapp:$CI_COMMIT_SHA
        env:
          NODE_ENV: test
        ports:
          - 3000:3000
    variables:
      CYPRESS_BASE_URL: http://app:3000
    commands:
      - cypress run --record --parallel
    artifacts:
      - cypress/screenshots/
      - cypress/videos/
```

## Parallel Test Execution

Split tests across multiple containers for faster execution:

```yaml
stages:
  - name: test
    image: node:20-alpine
    parallel: 4
    commands:
      - npm run test -- --shard=$CI_NODE_INDEX/$CI_NODE_TOTAL
```

Pipeline automatically sets `CI_NODE_INDEX` (0-based) and `CI_NODE_TOTAL` for each parallel instance.

### Custom Test Splitting

For more control over how tests are distributed:

```yaml
stages:
  - name: test
    image: node:20-alpine
    parallel:
      split_by: timing
      data: test-timings.json
    commands:
      - npm run test -- --testPathPattern="$CI_SPLIT_FILES"
```

| Split Strategy | Description |
|---|---|
| `count` | Divide tests evenly by count (default) |
| `timing` | Distribute based on historical execution times |
| `file` | One test file per parallel instance |

## Coverage Reporting

Configure coverage thresholds to enforce minimum coverage:

```yaml
stages:
  - name: test
    image: node:20-alpine
    commands:
      - npm run test -- --coverage
    coverage:
      format: lcov
      file: coverage/lcov.info
      thresholds:
        statements: 80
        branches: 75
        functions: 80
        lines: 80
      fail_on_decrease: true
```

## Retry Policy

Retry flaky tests automatically:

```yaml
stages:
  - name: test
    image: node:20-alpine
    retry:
      max_attempts: 3
      delay: 5s
      on:
        - exit_code: 1
    commands:
      - npm run test:e2e
```

## Test Reports

Pipeline can parse and display test results in multiple formats:

| Format | File Pattern | Description |
|---|---|---|
| JUnit XML | `*.xml` | Standard test result format |
| TAP | `*.tap` | Test Anything Protocol |
| JSON | `*.json` | Custom JSON test results |

```yaml
stages:
  - name: test
    image: golang:1.22-alpine
    commands:
      - go test -v ./... 2>&1 | go-junit-report > report.xml
    reports:
      junit: report.xml
```

## Troubleshooting

### Tests pass locally but fail in pipeline

Common causes include:

- **Missing environment variables** -- Ensure all required variables are defined in the stage configuration
- **Timing issues** -- Services may not be ready when tests start; use `health_check` on service definitions
- **File system differences** -- Container filesystems are case-sensitive; check import paths
- **Network isolation** -- Use service names as hostnames, not `localhost`

### Parallel tests have uneven execution times

Switch to timing-based splitting and provide historical timing data:

```bash
pipeline test --export-timings > test-timings.json
```

Then reference the file in your parallel configuration.
