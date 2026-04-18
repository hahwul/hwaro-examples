+++
title = "Results"
description = "Understanding and working with test result reports"
tags = ["results", "reporting"]
+++

# Results

Crucible generates test result reports in multiple formats. This page explains the output formats, how to interpret results, and how to configure reporting for your needs.

## Output Formats

| Format | File | Use Case |
|--------|------|----------|
| Terminal | stdout | Local development feedback |
| JUnit XML | `test-results/junit.xml` | CI system integration |
| JSON | `test-results/results.json` | Custom tooling and dashboards |
| HTML | `test-results/report.html` | Human-readable shareable report |

### Terminal Output

The default terminal reporter shows a summary after each run:

```
  Auth Module
    [PASS] validates JWT token signature (3ms)
    [PASS] rejects expired tokens (2ms)
    [FAIL] handles malformed token header (4ms)
           Expected: throws TokenError
           Received: throws TypeError
    [PASS] refreshes token before expiry (5ms)
    [SKIP] validates RSA-signed tokens (requires OpenSSL)

  Order Module
    [PASS] calculates order total (1ms)
    [PASS] applies discount codes (2ms)
    [PASS] enforces minimum order amount (1ms)
    [PASS] handles concurrent order updates (12ms)

  -------------------------------------------
  Suites:  2 passed, 0 failed
  Tests:   7 passed, 1 failed, 1 skipped
  Time:    0.34s
```

### JUnit XML

JUnit XML is the standard format for CI systems. Crucible generates compliant output:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<testsuites tests="9" failures="1" errors="0" skipped="1" time="0.34">
  <testsuite name="Auth Module" tests="5" failures="1" skipped="1" time="0.14">
    <testcase name="validates JWT token signature" classname="Auth Module" time="0.003"/>
    <testcase name="rejects expired tokens" classname="Auth Module" time="0.002"/>
    <testcase name="handles malformed token header" classname="Auth Module" time="0.004">
      <failure message="Expected: throws TokenError, Received: throws TypeError">
        at AuthService.parseToken (src/auth/jwt.js:45:12)
        at Context.it (tests/unit/auth.test.js:23:5)
      </failure>
    </testcase>
    <testcase name="refreshes token before expiry" classname="Auth Module" time="0.005"/>
    <testcase name="validates RSA-signed tokens" classname="Auth Module" time="0.000">
      <skipped message="requires OpenSSL"/>
    </testcase>
  </testsuite>
  <testsuite name="Order Module" tests="4" failures="0" skipped="0" time="0.016">
    <testcase name="calculates order total" classname="Order Module" time="0.001"/>
    <testcase name="applies discount codes" classname="Order Module" time="0.002"/>
    <testcase name="enforces minimum order amount" classname="Order Module" time="0.001"/>
    <testcase name="handles concurrent order updates" classname="Order Module" time="0.012"/>
  </testsuite>
</testsuites>
```

### JSON Report

The JSON format provides structured data for custom processing:

```json
{
  "summary": {
    "total": 9,
    "passed": 7,
    "failed": 1,
    "skipped": 1,
    "duration_ms": 340
  },
  "suites": [
    {
      "name": "Auth Module",
      "tests": [
        {
          "name": "validates JWT token signature",
          "status": "passed",
          "duration_ms": 3
        },
        {
          "name": "handles malformed token header",
          "status": "failed",
          "duration_ms": 4,
          "error": {
            "message": "Expected: throws TokenError, Received: throws TypeError",
            "stack": "at AuthService.parseToken (src/auth/jwt.js:45:12)"
          }
        }
      ]
    }
  ]
}
```

## Interpreting Results

### Status Definitions

| Status | Meaning | Action Required |
|--------|---------|-----------------|
| PASS | Test assertion succeeded | None |
| FAIL | Test assertion did not match expected value | Fix the code or update the test |
| SKIP | Test was deliberately excluded | Review whether the skip is still needed |
| ERROR | Test could not execute (setup failure, timeout) | Fix infrastructure or test setup |
| FLAKY | Test passed after retry | Investigate root cause of instability |

### Failure Analysis

When a test fails, Crucible provides:

1. **Expected vs. Received** -- The assertion values that did not match
2. **Stack trace** -- The call stack leading to the failure point
3. **Source context** -- The relevant source code lines around the failure
4. **Diff** -- For object comparisons, a structured diff highlighting differences

## Configuring Report Output

```yaml
reporting:
  formats:
    - terminal
    - junit
    - json
    - html
  output_dir: "test-results"
  verbose: true            # Show details for passing tests
  fail_fast_output: true   # Print failures immediately, not just at the end
  timestamps: true         # Include timestamps in reports
```

## Best Practices

- **Always generate JUnit XML in CI** -- Most CI platforms parse JUnit natively for result visualization
- **Archive HTML reports** -- Store HTML reports as build artifacts for team review
- **Use JSON for custom dashboards** -- Feed JSON results into monitoring or quality tracking systems
- **Enable verbose mode selectively** -- Verbose output is useful for debugging but noisy in CI logs
