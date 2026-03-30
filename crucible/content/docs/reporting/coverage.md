+++
title = "Coverage"
description = "Code coverage measurement and analysis with Crucible"
tags = ["coverage", "reporting"]
+++

# Coverage

Code coverage measures the percentage of your source code that is exercised by your test suite. Crucible tracks line coverage, branch coverage, and function coverage, and can enforce minimum thresholds as quality gates.

## Enabling Coverage

Add coverage configuration to your `crucible.config.yaml`:

```yaml
reporting:
  coverage:
    enabled: true
    threshold: 80.0
    formats:
      - terminal
      - lcov
      - json
    exclude:
      - "src/generated/**"
      - "src/migrations/**"
      - "**/*.d.ts"
    output_dir: "coverage"
```

Run tests with coverage:

```bash
crucible run --coverage
```

## Coverage Report Example

Terminal output after a coverage run:

```
Coverage Report
===============

  File                        | Lines   | Branch  | Funcs   | Uncovered Lines
  ----------------------------|---------|---------|---------|------------------
  src/auth/jwt.js             | 94.2%   | 88.5%   | 100.0%  | 45, 78
  src/auth/password.js        | 100.0%  | 100.0%  | 100.0%  | --
  src/auth/session.js         | 87.3%   | 72.0%   | 90.0%   | 23-28, 54, 91
  src/models/user.js          | 91.5%   | 85.7%   | 95.0%   | 112, 145-148
  src/models/order.js         | 78.4%   | 65.2%   | 80.0%   | 34-41, 89-97, 156
  src/routes/api/users.js     | 96.8%   | 92.3%   | 100.0%  | 67
  src/routes/api/orders.js    | 82.1%   | 71.4%   | 85.7%   | 45-52, 103-110
  src/services/email.js       | 68.9%   | 55.0%   | 75.0%   | 23-38, 67-82
  src/services/payment.js     | 73.2%   | 60.8%   | 80.0%   | 89-105, 134-142
  src/utils/validation.js     | 100.0%  | 97.1%   | 100.0%  | --
  ----------------------------|---------|---------|---------|------------------
  Total                       | 84.3%   | 71.6%   | 89.2%   |

  Threshold: 80.0%
  Status: PASS (line coverage 84.3% >= 80.0%)
```

## Coverage Metrics Explained

| Metric | Definition | Target |
|--------|-----------|--------|
| Line Coverage | Percentage of executable lines run by tests | 80%+ |
| Branch Coverage | Percentage of conditional branches taken | 70%+ |
| Function Coverage | Percentage of functions called by tests | 90%+ |
| Statement Coverage | Percentage of statements executed | 80%+ |

## Tracking Coverage Over Time

Crucible generates a JSON coverage summary that can be tracked across builds:

```json
{
  "timestamp": "2026-03-28T14:32:00Z",
  "commit": "a1b2c3d",
  "summary": {
    "lines": { "total": 4521, "covered": 3811, "percentage": 84.3 },
    "branches": { "total": 1240, "covered": 888, "percentage": 71.6 },
    "functions": { "total": 612, "covered": 546, "percentage": 89.2 }
  }
}
```

Historical coverage trends help identify regressions:

```
  Coverage Trend (last 10 builds)
  ================================

  Build    Lines    Branches    Funcs
  #142     84.3%    71.6%       89.2%
  #141     84.1%    71.4%       89.2%
  #140     83.8%    71.0%       88.9%
  #139     84.0%    71.2%       89.0%
  #138     83.5%    70.8%       88.7%
  #137     82.9%    70.1%       88.5%
  #136     82.7%    69.8%       88.2%
  #135     82.4%    69.5%       88.0%
  #134     81.9%    68.9%       87.8%
  #133     81.2%    68.2%       87.5%
```

## Per-Module Coverage Thresholds

Set different thresholds for different parts of the codebase:

```yaml
reporting:
  coverage:
    enabled: true
    threshold: 80.0

    overrides:
      - pattern: "src/auth/**"
        threshold: 95.0        # Critical security code
      - pattern: "src/utils/**"
        threshold: 90.0        # Shared utilities
      - pattern: "src/generated/**"
        threshold: 0.0         # Skip generated code
```

## Best Practices

- **Track trends, not just numbers** -- A coverage drop between commits matters more than the absolute percentage
- **Set realistic thresholds** -- 80% line coverage is a practical target for most projects; 100% is rarely worth the cost
- **Exclude generated code** -- Auto-generated files inflate or deflate coverage numbers without reflecting test quality
- **Focus on branch coverage** -- Branch coverage reveals untested conditional logic that line coverage misses
- **Review uncovered lines** -- The list of uncovered lines is more actionable than the percentage itself
