+++
title = "Code Review"
description = "Code review policies including required approvals, CI checks, and CODEOWNERS"
weight = 3
date = "2025-06-01"
+++

## Overview

Code review is a critical gate in any branching workflow. It ensures that changes are correct, maintainable, and aligned with project standards before they reach a shared branch.

## Review Requirements

Define clear requirements for your team:

| Requirement | Recommended Setting |
|-------------|-------------------|
| Minimum approvals | 1-2 depending on team size |
| CI status checks | Must pass before merge |
| Stale review dismissal | Dismiss approvals when new commits are pushed |
| Self-approval | Not allowed |
| Draft pull requests | Allowed for work-in-progress |

## Setting Up Required Reviews

### GitHub

Navigate to Settings > Branches > Branch protection rules for your target branch:

1. Enable "Require a pull request before merging."
2. Set "Required number of approvals" to at least 1.
3. Enable "Dismiss stale pull request approvals when new commits are pushed."
4. Enable "Require review from Code Owners" if using CODEOWNERS.

### GitLab

Navigate to Settings > Merge requests:

1. Set "Merge method" to your preferred strategy (merge commit, squash, etc.).
2. Under Approval rules, add a rule requiring at least one approval.
3. Enable "Remove all approvals when commits are added."

## CODEOWNERS

A `CODEOWNERS` file assigns ownership of specific paths to team members or groups. When a pull request modifies files in an owned path, the owners are automatically requested for review.

### Example CODEOWNERS File

```
# Default owner for all files
*                       @org/engineering

# Frontend team owns client code
/src/client/            @org/frontend-team
/src/components/        @org/frontend-team

# Backend team owns server code
/src/server/            @org/backend-team
/src/api/               @org/backend-team

# DevOps owns infrastructure
/infra/                 @org/devops
/.github/               @org/devops
Dockerfile              @org/devops

# Security team must review auth changes
/src/auth/              @org/security-team
```

Place this file in the repository root or in the `.github/` directory.

## CI Status Checks

Require the following checks to pass before merging:

```yaml
# .github/workflows/ci.yml
name: CI
on:
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run tests
        run: make test

  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run linter
        run: make lint

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build
        run: make build
```

Then mark `test`, `lint`, and `build` as required status checks in your branch protection settings.

## Review Checklist

Provide reviewers with a standard checklist:

- Does the code accomplish what the pull request description claims?
- Are there adequate tests for the changes?
- Does the code follow the project's style guidelines?
- Are there any security concerns (SQL injection, XSS, auth bypass)?
- Is the commit history clean and well-organized?
- Are there any performance implications?
- Is the documentation updated if needed?

## Review Etiquette

Guidelines for constructive code review:

1. **Be specific.** Point to the exact line and explain what should change and why.
2. **Ask questions** rather than making demands. "What happens if this value is null?" is more productive than "Handle the null case."
3. **Separate blocking from non-blocking feedback.** Use labels like "nit:" for minor suggestions that should not block the merge.
4. **Respond promptly.** Review turnaround directly affects team velocity.
5. **Acknowledge good work.** A brief "Clean approach" or "Nice refactor" goes a long way.

## Measuring Review Health

Track these metrics to ensure your review process is healthy:

| Metric | Target |
|--------|--------|
| Time to first review | Under 4 hours |
| Time to merge after approval | Under 1 hour |
| Average review iterations | 1-2 rounds |
| Pull request size | Under 400 lines changed |

> Small, frequent pull requests are easier to review, faster to merge, and less likely to introduce regressions. Aim for pull requests that can be reviewed in under 30 minutes.
