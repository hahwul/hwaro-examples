+++
title = "Trunk-Based Development"
description = "A development model using short-lived branches and feature flags for continuous integration"
weight = 2
date = "2025-06-01"
+++

## Overview

Trunk-Based Development (TBD) is a branching model where all developers integrate their work into a single shared branch -- the trunk (usually `main`). Feature branches, if used at all, are short-lived and merged within one to two days.

## Branch Diagram

```
main  ───●───●───●───●───●───●───●───●───●───
          \  /    \  /         \  /
           ●       ●           ●
         (feature, merged     (short-lived
          same day)            branch)
```

## Core Principles

1. **One long-lived branch.** The trunk is the only permanent branch. All code flows through it.
2. **Short-lived branches.** Feature branches exist for hours or a day, not weeks.
3. **Continuous integration.** Every commit to the trunk triggers a build and test pipeline.
4. **Feature flags.** Incomplete features are hidden behind flags rather than kept on long-running branches.

## Workflow

### Working Directly on Trunk

For small changes, commit directly:

```bash
git checkout main
git pull
# make changes
git add -A
git commit -m "Add input validation to login form"
git push
```

### Using Short-Lived Branches

For changes that need review:

```bash
git checkout main
git pull
git checkout -b short/add-validation
# make changes
git add -A
git commit -m "Add input validation to login form"
git push -u origin short/add-validation
```

Open a pull request. After approval:

```bash
git checkout main
git pull
git branch -d short/add-validation
```

The branch should be merged and deleted within a day.

## Feature Flags

When a feature takes longer than a day to complete, use a feature flag to keep the code integrated without exposing it to users:

```python
if feature_flags.is_enabled("new_dashboard"):
    show_new_dashboard()
else:
    show_legacy_dashboard()
```

This allows the code to be merged into trunk while remaining invisible in production.

## Release Strategies

Trunk-Based Development supports several release approaches:

| Strategy | Description |
|----------|-------------|
| Continuous deployment | Every commit to trunk is automatically deployed |
| Release from trunk | Tag a specific commit on trunk and deploy that tag |
| Release branches | Cut a short-lived release branch for final stabilization |

### Tagging a Release

```bash
git checkout main
git pull
git tag -a v2.4.0 -m "Release 2.4.0"
git push origin v2.4.0
```

## When to Use Trunk-Based Development

TBD works best when:

- Your team practices continuous integration and has a reliable test suite.
- You deploy frequently (daily or multiple times per day).
- Developers are comfortable with feature flags and incremental delivery.
- Your team is experienced and maintains small, focused commits.

## When to Avoid Trunk-Based Development

TBD may not suit your team if:

- You lack automated testing or CI infrastructure.
- Your release cycle is infrequent and requires long stabilization periods.
- Multiple release versions must be maintained in parallel.

> Trunk-Based Development rewards discipline. The model is simple, but it requires strong testing, fast code review, and a team that commits to keeping the trunk green.
