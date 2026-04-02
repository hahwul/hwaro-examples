+++
title = "GitFlow"
description = "A structured branching model with main, develop, feature, release, and hotfix branches"
weight = 1
date = "2025-06-01"
+++

## Overview

GitFlow is a branching model introduced by Vincent Driessen in 2010. It defines a strict structure around project releases and is well suited for teams with scheduled release cycles.

## Branch Structure

GitFlow uses five types of branches:

| Branch | Lifetime | Base | Merges Into |
|--------|----------|------|-------------|
| `main` | Permanent | -- | -- |
| `develop` | Permanent | `main` | -- |
| `feature/*` | Temporary | `develop` | `develop` |
| `release/*` | Temporary | `develop` | `main` and `develop` |
| `hotfix/*` | Temporary | `main` | `main` and `develop` |

## Branch Diagram

```
main     ─────●────────────────────●──────●─────
               \                  / \    /
develop  ───────●───●───●───●───●    \  /
                 \     / \       \    \/
feature/auth      ●──●   \       \   hotfix/fix-login
                           \       \
release/1.0                 ●───●───●
```

## Workflow

### Creating a Feature Branch

```bash
git checkout develop
git pull origin develop
git checkout -b feature/user-auth
```

Work on the feature, commit changes, then merge back:

```bash
git checkout develop
git merge --no-ff feature/user-auth
git push origin develop
git branch -d feature/user-auth
```

The `--no-ff` flag ensures a merge commit is created, preserving the branch history.

### Creating a Release Branch

When `develop` has enough features for a release:

```bash
git checkout develop
git checkout -b release/1.0.0
```

On the release branch, only bug fixes and metadata updates are allowed. When ready:

```bash
git checkout main
git merge --no-ff release/1.0.0
git tag -a v1.0.0 -m "Release 1.0.0"
git checkout develop
git merge --no-ff release/1.0.0
git branch -d release/1.0.0
```

### Creating a Hotfix Branch

For urgent fixes to production:

```bash
git checkout main
git checkout -b hotfix/fix-login
```

After the fix:

```bash
git checkout main
git merge --no-ff hotfix/fix-login
git tag -a v1.0.1 -m "Hotfix 1.0.1"
git checkout develop
git merge --no-ff hotfix/fix-login
git branch -d hotfix/fix-login
```

## When to Use GitFlow

GitFlow works best when:

- Your project has scheduled, versioned releases.
- Multiple features are developed in parallel by different teams.
- You need to maintain multiple release versions simultaneously.
- There is a clear distinction between "in development" and "in production" code.

## When to Avoid GitFlow

GitFlow adds overhead that may not be justified when:

- You deploy continuously (multiple times per day).
- Your team is small (one to three developers).
- You do not maintain multiple active release versions.

> GitFlow's strength is its clarity. Every branch has a defined purpose and lifecycle. The trade-off is the ceremony required to follow the model correctly.
