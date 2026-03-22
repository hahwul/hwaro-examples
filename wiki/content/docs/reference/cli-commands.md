+++
title = "CLI Commands"
weight = 1
description = "Complete reference for all command-line interface commands"
tags = ["cli", "reference"]
categories = ["reference"]
+++

# CLI Commands

Complete reference for all available CLI commands.

## Core Commands

### `acme init`

Create a new project.

```bash
acme init <directory> [--scaffold <type>]
```

| Flag | Description |
|------|-------------|
| `--scaffold` | Template type: `simple`, `bare`, `blog`, `docs` |

### `acme build`

Build the site to static HTML.

```bash
acme build [flags]
```

| Flag | Description |
|------|-------------|
| `--base-url <url>` | Override the base URL |
| `--drafts` | Include draft content |
| `--minify` | Minify HTML, CSS, and JS output |
| `--cache` | Enable build caching |

### `acme serve`

Start a local development server with live reload.

```bash
acme serve [flags]
```

| Flag | Description |
|------|-------------|
| `-p <port>` | Port number (default: 3000) |
| `--drafts` | Include draft content |
| `--open` | Open browser automatically |

### `acme new`

Create a new content file with front matter.

```bash
acme new <path>
```

Example:

```bash
acme new docs/guides/my-article.md
```

### `acme deploy`

Deploy the built site to a configured target.

```bash
acme deploy [--target <name>]
```

## Utility Commands

### `acme doctor`

Check the project for common issues.

```bash
acme doctor [--fix]
```

The `--fix` flag automatically resolves fixable issues.

### `acme tool list`

List content files.

```bash
acme tool list <filter>
```

Filters: `all`, `drafts`, `published`.

### `acme tool check-links`

Scan for broken internal and external links.

```bash
acme tool check-links [--external]
```

### `acme tool agents-md`

Generate an `AGENTS.md` file for AI-assisted development.

```bash
acme tool agents-md --local --write
```

## Exit Codes

| Code | Meaning |
|------|---------|
| 0 | Success |
| 1 | General error |
| 2 | Configuration error |
| 3 | Build error |
