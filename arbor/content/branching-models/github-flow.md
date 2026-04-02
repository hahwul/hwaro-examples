+++
title = "GitHub Flow"
weight = 3
date = "2025-06-01"
+++

## Overview

GitHub Flow is a lightweight branching model designed around a single long-lived branch (`main`) and short-lived feature branches. It was popularized by GitHub and is widely used in open-source projects and teams that deploy frequently.

## Branch Diagram

```
main       ───●───●───────●───────●───●───
               \       /       /
feature/auth    ●───●─●       /
                       \     /
feature/search          ●──●
```

## The Six Steps

1. **Create a branch** from `main`.
2. **Add commits** with focused, well-described changes.
3. **Open a pull request** to start discussion and code review.
4. **Review and discuss** the changes with your team.
5. **Merge** the pull request into `main`.
6. **Deploy** from `main`.

## Workflow

### Step 1: Create a Branch

```bash
git checkout main
git pull origin main
git checkout -b feature/user-search
```

### Step 2: Make Changes and Commit

```bash
git add src/search.py tests/test_search.py
git commit -m "Add user search endpoint with filtering"
```

### Step 3: Push and Open a Pull Request

```bash
git push -u origin feature/user-search
```

Then open a pull request on GitHub. Write a clear description of what the branch does and why.

### Step 4: Code Review

Team members review the pull request, leave comments, and request changes if needed. Address feedback with additional commits:

```bash
git add src/search.py
git commit -m "Handle empty search query gracefully"
git push
```

### Step 5: Merge

Once approved and CI passes, merge the pull request. GitHub offers three merge strategies:

| Strategy | Result |
|----------|--------|
| Merge commit | Preserves all branch commits with a merge commit |
| Squash and merge | Combines all branch commits into a single commit |
| Rebase and merge | Replays branch commits on top of `main` |

### Step 6: Deploy

After merging, deploy from `main`. In many setups this happens automatically via CI/CD.

```bash
git checkout main
git pull origin main
# CI/CD deploys automatically, or:
./deploy.sh
```

## Comparison with GitFlow

| Aspect | GitHub Flow | GitFlow |
|--------|-------------|---------|
| Long-lived branches | `main` only | `main` and `develop` |
| Release process | Deploy from `main` | Dedicated release branches |
| Complexity | Low | High |
| Best for | Continuous deployment | Scheduled releases |
| Hotfix process | Same as any feature branch | Dedicated hotfix branches |

## When to Use GitHub Flow

GitHub Flow works best when:

- You deploy to production frequently.
- Your team follows a review-before-merge discipline.
- You do not need to maintain multiple release versions.
- Simplicity is a priority.

## When to Avoid GitHub Flow

GitHub Flow may not be sufficient when:

- You need explicit release stabilization periods.
- Multiple versions of your software are actively maintained.
- Your deployment pipeline is slow and releases are batched.

> GitHub Flow is the branching model with the least ceremony. Its simplicity is its strength -- there are fewer rules to learn, fewer branches to manage, and fewer opportunities for process mistakes.
