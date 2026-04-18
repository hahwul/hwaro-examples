+++
title = "CI Integration"
description = "Integrating Crucible with continuous integration pipelines"
tags = ["ci", "reporting", "automation"]
+++

# CI Integration

Crucible integrates with continuous integration systems to run tests automatically on every commit, enforce quality gates, and publish results. This page covers configuration for common CI platforms.

## GitHub Actions

```yaml
# .github/workflows/test.yaml
name: Test Suite

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:16
        ports:
          - 5432:5432
        env:
          POSTGRES_DB: crucible_test
          POSTGRES_USER: test
          POSTGRES_PASSWORD: test
        options: >-
          --health-cmd "pg_isready -U test"
          --health-interval 5s
          --health-retries 10

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - run: npm ci

      - name: Run unit tests
        run: crucible run tests/unit --coverage --format junit,json
        env:
          NODE_ENV: test

      - name: Run integration tests
        run: crucible run tests/integration --format junit
        env:
          NODE_ENV: test
          DATABASE_URL: postgres://test:test@localhost:5432/crucible_test

      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: test-results
          path: test-results/

      - name: Upload coverage
        if: success()
        uses: actions/upload-artifact@v4
        with:
          name: coverage
          path: coverage/
```

## GitLab CI

```yaml
# .gitlab-ci.yml
stages:
  - test
  - report

variables:
  POSTGRES_DB: crucible_test
  POSTGRES_USER: test
  POSTGRES_PASSWORD: test

unit-tests:
  stage: test
  image: node:20
  script:
    - npm ci
    - crucible run tests/unit --coverage --format junit,json
  artifacts:
    when: always
    reports:
      junit: test-results/junit.xml
    paths:
      - test-results/
      - coverage/

integration-tests:
  stage: test
  image: node:20
  services:
    - postgres:16
  variables:
    DATABASE_URL: postgres://test:test@postgres:5432/crucible_test
  script:
    - npm ci
    - crucible run tests/integration --format junit
  artifacts:
    when: always
    reports:
      junit: test-results/junit.xml

coverage-report:
  stage: report
  image: node:20
  needs:
    - unit-tests
  script:
    - crucible coverage-report --format html --input coverage/coverage.json
  artifacts:
    paths:
      - coverage/report.html
```

## Jenkins Pipeline

```groovy
// Jenkinsfile
pipeline {
    agent any

    tools {
        nodejs 'Node-20'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Unit Tests') {
            steps {
                sh 'crucible run tests/unit --coverage --format junit,json'
            }
            post {
                always {
                    junit 'test-results/junit.xml'
                }
            }
        }

        stage('Integration Tests') {
            steps {
                sh 'crucible run tests/integration --format junit'
            }
            post {
                always {
                    junit 'test-results/junit.xml'
                }
            }
        }

        stage('Coverage Gate') {
            steps {
                sh 'crucible coverage-check --threshold 80 --input coverage/coverage.json'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'test-results/**, coverage/**'
        }
    }
}
```

## Quality Gates

Configure Crucible to fail the build when quality criteria are not met:

```yaml
# crucible.config.ci.yaml
execution:
  bail: true
  retries: 1

reporting:
  formats:
    - terminal
    - junit
    - json
  coverage:
    enabled: true
    threshold: 80.0
    fail_on_decrease: true    # Fail if coverage drops from previous build

gates:
  max_failures: 0             # Zero tolerance for failures
  max_flaky: 5                # Allow up to 5 flaky tests
  max_skipped_percent: 5.0    # No more than 5% of tests skipped
  min_test_count: 100         # Ensure minimum test count
```

Run with the CI config:

```bash
crucible run --config crucible.config.ci.yaml
```

Exit codes:

| Code | Meaning |
|------|---------|
| 0 | All tests passed, all gates satisfied |
| 1 | One or more tests failed |
| 2 | Coverage threshold not met |
| 3 | Gate condition violated (flaky count, skip percentage) |
| 4 | Configuration error |
| 5 | Runtime error (timeout, out of memory) |

## Parallel Execution in CI

Split tests across multiple CI jobs for faster feedback:

```yaml
# GitHub Actions matrix strategy
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        shard: [1, 2, 3, 4]

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm ci
      - run: crucible run --shard ${{ matrix.shard }}/4 --format junit
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: results-shard-${{ matrix.shard }}
          path: test-results/

  merge-results:
    needs: test
    runs-on: ubuntu-latest
    if: always()
    steps:
      - uses: actions/download-artifact@v4
        with:
          pattern: results-shard-*
          merge-multiple: true
          path: all-results/
      - run: crucible merge-results all-results/ --output merged-results/
      - uses: actions/upload-artifact@v4
        with:
          name: merged-test-results
          path: merged-results/
```

## Best Practices

- **Run tests on every push and PR** -- Fast feedback prevents defects from accumulating
- **Separate unit and integration jobs** -- Unit tests should not wait for database startup
- **Cache dependencies** -- Use CI cache for `node_modules` or `pip` packages to reduce install time
- **Archive all artifacts** -- Always upload test results and coverage, even on failure
- **Use sharding for large suites** -- Split tests across workers to keep build times under 10 minutes
- **Pin service versions** -- Use explicit Docker image tags to avoid unexpected behavior from upstream updates
