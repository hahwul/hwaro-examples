+++
title = "Quick Start"
weight = 2
template = "doc"
description = "Create your first project with Forge in under 5 minutes."
tags = ["tutorial"]
[extra]
category = "Tutorial"
version = "v2.0"
+++

## Initialize a Project

```bash
forge new my-project
cd my-project
```

This scaffolds the project:

```
my-project/
  forge.toml          # Project configuration
  src/
    main.go           # Entry point
  tests/
    main_test.go      # Test file
  .github/
    ISSUE_TEMPLATE/
      bug_report.md
      feature_request.md
    PULL_REQUEST_TEMPLATE.md
  LICENSE
  README.md
```

## Build

```bash
forge build
```

## Run Tests

```bash
forge test
```

```
Running tests...
  PASS  TestMain (0.02s)
  PASS  TestConfig (0.01s)
All tests passed. 2/2
```

## Run Locally

```bash
forge run
```

```
Server listening on http://localhost:8080
```

## Next Steps

Read the [Contributing Guide](../../contributing/) to learn how to submit changes.
