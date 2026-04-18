+++
title = "Configuration"
description = "Configure Git settings and branch protection rules for your workflow"
weight = 3
date = "2025-06-01"
+++

## Git Configuration for Branching

Beyond the basics covered in the Installation guide, there are several configuration options that directly affect how branching workflows operate.

## The .gitconfig File

Your global configuration lives at `~/.gitconfig`. A well-configured file for branching workflows might look like this:

```ini
[user]
    name = Your Name
    email = you@example.com

[init]
    defaultBranch = main

[pull]
    rebase = false

[fetch]
    prune = true

[merge]
    ff = false
    conflictstyle = diff3

[branch]
    autosetuprebase = never

[push]
    default = current
    autoSetupRemote = true
```

### Key Settings Explained

| Setting | Value | Effect |
|---------|-------|--------|
| `merge.ff` | `false` | Always create a merge commit, preserving branch history |
| `merge.conflictstyle` | `diff3` | Show the common ancestor in conflict markers |
| `branch.autosetuprebase` | `never` | New branches default to merge on pull, not rebase |
| `push.default` | `current` | Push the current branch to a same-named remote branch |
| `push.autoSetupRemote` | `true` | Automatically set upstream on first push |

## Branch Protection Rules

Most Git hosting platforms support branch protection. These rules enforce policies at the remote level, preventing force-pushes and requiring reviews before merge.

### GitHub Branch Protection

Configure via Settings > Branches > Branch protection rules:

- **Require pull request reviews** -- at least one approval before merging.
- **Require status checks** -- CI must pass before the merge button is enabled.
- **Require linear history** -- enforces rebase or squash merges only.
- **Restrict force pushes** -- prevent rewriting history on protected branches.

### GitLab Protected Branches

In GitLab, navigate to Settings > Repository > Protected branches:

- Set "Allowed to merge" to Maintainers.
- Set "Allowed to push" to No one (require merge requests).
- Enable "Code owner approval required" if using CODEOWNERS.

## Per-Repository Overrides

Override global settings for a specific repository:

```bash
cd my-project
git config merge.ff true
git config pull.rebase true
```

These settings are stored in `.git/config` and take precedence over `~/.gitconfig`.

## Aliases for Branching Workflows

Add aliases to speed up common branching operations:

```bash
git config --global alias.new-feature '!f() { git checkout develop && git pull && git checkout -b feature/$1; }; f'
git config --global alias.new-hotfix '!f() { git checkout main && git pull && git checkout -b hotfix/$1; }; f'
git config --global alias.cleanup '!git branch --merged | grep -v "main\\|develop" | xargs -r git branch -d'
```

Usage:

```bash
git new-feature user-auth
git new-hotfix critical-bug
git cleanup
```

> Keep aliases simple and well-documented. Complex aliases should be shell scripts in your PATH rather than Git aliases.
