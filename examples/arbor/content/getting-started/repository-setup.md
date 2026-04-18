+++
title = "Repository Setup"
description = "Initialize a repository, configure remotes, and set up the initial branch structure"
weight = 2
date = "2025-06-01"
+++

## Creating a New Repository

Initialize a new Git repository in an empty directory:

```bash
mkdir my-project
cd my-project
git init
```

This creates a `.git` directory and a default `main` branch (assuming you configured `init.defaultBranch` as described in the Installation guide).

## Adding a Remote

Connect your local repository to a remote host:

```bash
git remote add origin git@github.com:your-org/my-project.git
```

Verify the remote:

```bash
git remote -v
```

Expected output:

```
origin  git@github.com:your-org/my-project.git (fetch)
origin  git@github.com:your-org/my-project.git (push)
```

## Initial Commit

Create an initial commit to establish the `main` branch:

```bash
echo "# my-project" > README.md
git add README.md
git commit -m "Initial commit"
```

Push the branch to the remote:

```bash
git push -u origin main
```

## Establishing a Branch Structure

If you plan to use GitFlow or a similar model, create the `develop` branch immediately:

```bash
git checkout -b develop
git push -u origin develop
```

Your repository now has two long-lived branches:

```
main ──────────────────────
  \
   develop ────────────────
```

From here, feature branches are created off `develop` and merged back when complete.

## Cloning an Existing Repository

To work on an existing project:

```bash
git clone git@github.com:your-org/my-project.git
cd my-project
```

After cloning, check which branches exist on the remote:

```bash
git branch -r
```

Switch to the `develop` branch if your project uses one:

```bash
git checkout develop
```

> Always confirm the branch structure with your team before starting work. The branching model determines where you create new branches and where you merge them back.
