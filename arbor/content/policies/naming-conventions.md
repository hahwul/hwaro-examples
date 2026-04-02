+++
title = "Naming Conventions"
weight = 2
date = "2025-06-01"
+++

## Overview

Consistent branch naming makes it easy to understand the purpose of a branch at a glance, automate CI/CD pipelines based on branch patterns, and keep the repository organized.

## Prefix Convention

Use a prefix followed by a forward slash and a descriptive name:

| Prefix | Purpose | Example |
|--------|---------|---------|
| `feature/` | New functionality | `feature/user-search` |
| `bugfix/` | Non-critical bug fixes | `bugfix/pagination-offset` |
| `hotfix/` | Critical production fixes | `hotfix/auth-bypass` |
| `release/` | Release preparation | `release/2.1.0` |
| `chore/` | Maintenance and tooling | `chore/update-dependencies` |
| `docs/` | Documentation changes | `docs/api-reference` |
| `test/` | Test additions or fixes | `test/integration-suite` |

## Naming Rules

1. **Use lowercase.** Branch names should be entirely lowercase.
2. **Use hyphens as separators.** Avoid underscores, camelCase, or spaces.
3. **Be descriptive but concise.** The name should convey the intent without being overly long.
4. **Include a ticket number** when your team uses an issue tracker.

### Good Names

```
feature/user-search
feature/PROJ-142-user-search
bugfix/fix-date-parsing
hotfix/patch-xss-vulnerability
release/3.0.0
```

### Poor Names

```
feature/stuff
fix
john/working-on-things
Feature/UserSearch
my-branch
```

## Ticket Number Patterns

If your team uses Jira, Linear, or GitHub Issues, include the ticket identifier:

```
feature/PROJ-142-user-search
bugfix/GH-87-pagination-offset
hotfix/LIN-301-auth-bypass
```

This allows CI tools to automatically link branches to their corresponding issues.

## Automated Enforcement

### Git Hooks

Use a pre-push hook to validate branch names:

```bash
#!/bin/sh
branch=$(git rev-parse --abbrev-ref HEAD)
pattern="^(feature|bugfix|hotfix|release|chore|docs|test)\/[a-z0-9._-]+$"

if ! echo "$branch" | grep -qE "$pattern"; then
  echo "ERROR: Branch name '$branch' does not match the required pattern."
  echo "Expected format: <prefix>/<description>"
  echo "Allowed prefixes: feature, bugfix, hotfix, release, chore, docs, test"
  exit 1
fi
```

### CI Pipeline Rules

Configure your CI system to run different workflows based on branch prefix:

```yaml
# Example: GitHub Actions
on:
  push:
    branches:
      - main
      - 'release/**'
      - 'hotfix/**'
  pull_request:
    branches:
      - main
      - develop
```

## Cleaning Up Stale Branches

Regularly delete merged branches to keep the repository clean:

```bash
# Delete local branches that have been merged
git branch --merged | grep -v "main\|develop" | xargs -r git branch -d

# Delete remote branches that have been merged
git fetch --prune
```

> A naming convention is only effective if the entire team follows it. Document it, enforce it with automation, and review it periodically to ensure it still serves your workflow.
