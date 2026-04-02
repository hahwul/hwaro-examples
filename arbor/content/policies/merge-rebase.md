+++
title = "Merge vs Rebase"
weight = 1
date = "2025-06-01"
+++

## Overview

The choice between merge and rebase is one of the most debated topics in Git workflows. Both are valid strategies for integrating changes, and each has trade-offs that affect your commit history, conflict resolution, and team workflow.

## Comparison

| Aspect | Merge | Rebase |
|--------|-------|--------|
| History | Non-linear; preserves branch topology | Linear; branch commits replayed on target |
| Merge commit | Yes (with `--no-ff`) | No |
| Conflict resolution | Once, at merge time | Per commit during rebase |
| Traceability | Easy to see where branches diverged and joined | Harder to identify original branch boundaries |
| Safety | Does not rewrite history | Rewrites commit hashes |
| Shared branches | Safe | Dangerous -- never rebase shared branches |

## When to Merge

Use merge when:

- You want to preserve the full context of how and when a branch was integrated.
- The branch is shared with other developers.
- You are merging long-lived branches (e.g., `release` into `main`).
- Your team policy requires merge commits for auditability.

### Merge Example

```bash
git checkout develop
git merge --no-ff feature/user-auth
```

This creates a merge commit that clearly marks where the feature branch was integrated:

```
develop  ───●───●───────●───
              \       /
feature        ●───●─●
```

## When to Rebase

Use rebase when:

- You want a clean, linear commit history.
- You are updating a local feature branch with upstream changes before opening a pull request.
- The branch has not been pushed or is not shared with others.

### Rebase Example

Before opening a pull request, rebase your feature branch onto the latest `main`:

```bash
git checkout feature/user-auth
git fetch origin
git rebase origin/main
```

This replays your commits on top of the latest `main`:

```
main      ───●───●───●
                       \
feature                 ●───●───●  (rebased)
```

## Interactive Rebase for Cleanup

Before merging, use interactive rebase to clean up your commit history:

```bash
git rebase -i HEAD~3
```

This lets you squash, reword, or reorder commits. A common pattern is to squash work-in-progress commits into a single meaningful commit.

## The Golden Rule

> Never rebase commits that have been pushed to a shared branch. Rewriting shared history forces other developers to reconcile divergent histories, which causes confusion and potential data loss.

## Recommended Policy

A practical policy that balances both approaches:

1. **Rebase** local feature branches onto the target branch before opening a pull request.
2. **Merge** (with `--no-ff`) the pull request into the target branch to preserve the merge point.
3. **Never rebase** `main`, `develop`, or any branch that others are working on.

This gives you a linear history within feature branches and clear merge points on shared branches.

## Squash Merging

Some teams prefer squash merging as a middle ground:

```bash
git checkout main
git merge --squash feature/user-auth
git commit -m "Add user authentication (#142)"
```

| Approach | Commits on Target | Branch History |
|----------|-------------------|----------------|
| Merge | All branch commits + merge commit | Preserved |
| Rebase + merge | All branch commits (linear) | Preserved (linear) |
| Squash merge | Single commit | Lost |

Choose based on how much branch-level detail your team needs to retain.
