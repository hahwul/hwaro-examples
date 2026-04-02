+++
title = "Installation"
weight = 1
date = "2025-06-01"
+++

## Installing Git

Git is available on all major operating systems. Choose the method that matches your platform.

### macOS

Using Homebrew:

```bash
brew install git
```

Alternatively, install the Xcode Command Line Tools which include Git:

```bash
xcode-select --install
```

### Linux (Debian / Ubuntu)

```bash
sudo apt update
sudo apt install git
```

### Linux (Fedora)

```bash
sudo dnf install git
```

### Windows

Download the installer from [git-scm.com](https://git-scm.com/download/win) or use winget:

```powershell
winget install --id Git.Git -e --source winget
```

## Verifying the Installation

After installing, confirm that Git is available:

```bash
git --version
```

You should see output similar to:

```
git version 2.44.0
```

## Initial Configuration

Set your identity so that commits are attributed correctly:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Set a default branch name for new repositories:

```bash
git config --global init.defaultBranch main
```

> These settings are stored in `~/.gitconfig` and apply to every repository on your machine unless overridden locally.

## Recommended Defaults

A few additional settings that improve the day-to-day experience:

```bash
git config --global pull.rebase false
git config --global fetch.prune true
git config --global diff.colorMoved zebra
```

| Setting | Purpose |
|---------|---------|
| `pull.rebase false` | Use merge by default when pulling |
| `fetch.prune true` | Remove stale remote-tracking branches automatically |
| `diff.colorMoved zebra` | Highlight moved lines in diffs |
