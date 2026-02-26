+++
title = "DevMetrics"
description = "CLI dashboard for tracking developer productivity metrics from Git history"
weight = 3
tags = ["cli", "developer-tools", "analytics"]
skills = ["Rust", "SQLite"]
template = "project"
year = 2023
status = "Maintained"
github_url = "https://github.com/janedoe/devmetrics"
tech_stack = "Rust, SQLite"
+++

## Overview

DevMetrics is a terminal-based dashboard that analyzes Git history to surface productivity insights: commit frequency, review turnaround time, code churn, and more. Designed for individual developers and team leads.

## Key Features

- **Git log analysis** with intelligent commit categorization
- **TUI dashboard** with charts rendered in the terminal
- **Weekly reports** exported as Markdown
- **Team mode** aggregating metrics across contributors
- **SQLite cache** for fast incremental updates

## Usage

```bash
# Analyze current repository
devmetrics analyze

# Generate weekly report
devmetrics report --format markdown --period weekly

# Launch interactive dashboard
devmetrics dashboard
```

## Impact

- 800+ GitHub stars
- Adopted by 2 engineering teams for sprint retrospectives
- Featured in "Awesome Rust CLI" list
