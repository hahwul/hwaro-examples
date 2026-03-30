+++
title = "Installation"
description = "Install the Crucible test runner and dependencies"
tags = ["installation", "setup"]
+++

# Installation

Crucible can be installed as a standalone binary or as a project dependency. Choose the method that fits your workflow.

## System Requirements

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| OS | Linux, macOS, Windows | Linux or macOS |
| Runtime | Node.js 18+ or Python 3.10+ | Node.js 20+ or Python 3.12+ |
| Memory | 512 MB | 2 GB |
| Disk | 50 MB | 200 MB |

## Install via Package Manager

For Node.js projects:

```bash
npm install --save-dev crucible-runner
```

For Python projects:

```bash
pip install crucible-runner
```

For system-wide installation:

```bash
# macOS
brew install crucible

# Linux (Debian/Ubuntu)
curl -fsSL https://get.crucible.dev | sudo bash

# Windows
choco install crucible
```

## Verify Installation

After installation, verify that the CLI is available:

```bash
crucible --version
```

Expected output:

```
crucible 2.4.1 (build 20260315)
```

## Project Initialization

Initialize a new Crucible configuration in your project root:

```bash
crucible init
```

This creates the following files:

```
your-project/
  crucible.config.yaml    # Test runner configuration
  tests/
    fixtures/             # Shared test fixtures
    helpers/              # Test utility functions
    unit/                 # Unit test directory
    integration/          # Integration test directory
    e2e/                  # End-to-end test directory
```

## Running Your First Test

Create a simple test file to verify the setup:

```javascript
// tests/unit/math.test.js
const { describe, it, expect } = require('crucible-runner');

describe('Math operations', () => {
  it('adds two numbers correctly', () => {
    expect(1 + 2).toBe(3);
  });

  it('multiplies two numbers correctly', () => {
    expect(3 * 4).toBe(12);
  });

  it('handles division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
});
```

Run the test:

```bash
crucible run tests/unit/math.test.js
```

Expected output:

```
  Math operations
    [PASS] adds two numbers correctly (2ms)
    [PASS] multiplies two numbers correctly (1ms)
    [PASS] handles division by zero (3ms)

  3 passed, 0 failed, 0 skipped
  Completed in 0.12s
```

## Next Steps

Proceed to [Configuration](/docs/getting-started/configuration/) to customize the test runner for your project.
