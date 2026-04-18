+++
title = "Terminal Workflows for the Modern Developer"
date = "2026-02-05"
tags = ["terminal", "productivity", "tools"]
categories = ["tech"]
description = "Essential terminal tools and workflows for efficient development."
+++

The terminal is the developer's cockpit. Here are the tools and workflows that keep me productive.

## Shell Setup

A good shell setup is the foundation. I use `zsh` with a minimal prompt:

```bash
# .zshrc essentials
export EDITOR="vim"
alias ll="ls -la"
alias gs="git status"
alias gc="git commit"
alias gp="git push"
```

## Multiplexing with tmux

`tmux` lets you split your terminal into panes and manage sessions:

```bash
# New session
tmux new -s project

# Split panes
Ctrl-b %   # vertical split
Ctrl-b "   # horizontal split

# Navigate
Ctrl-b o   # next pane
Ctrl-b z   # zoom current pane
```

## Searching with ripgrep

`ripgrep` is faster than `grep` for code search:

```bash
# Search for a pattern
rg "func.*Handler" --type go

# Search with context
rg -C 3 "TODO" src/
```

## File Navigation with fzf

Fuzzy finding changes everything:

```bash
# Find and open a file
vim $(fzf)

# Search git history
git log --oneline | fzf | awk '{print $1}' | xargs git show
```

## Key Takeaway

Invest time in your terminal setup. The returns compound with every session.
