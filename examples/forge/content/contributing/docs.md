+++
title = "Contributing Docs"
weight = 3
template = "doc"
description = "How to write and update documentation that ships with Forge."
tags = ["docs", "writing"]
[extra]
category = "Documentation"
+++

## Where Docs Live

| Path | Purpose |
|------|---------|
| `docs/getting-started/` | Onboarding guides for new users |
| `docs/reference/` | API and CLI reference, generated from source |
| `docs/contributing/` | Process documentation for maintainers |
| `docs/cookbook/` | Task-oriented recipes and examples |
| `CHANGELOG.md` | Release notes, one entry per version |

## Setup

```bash
git clone https://github.com/forge-oss/forge.git
cd forge/docs
forge docs serve
```

The docs server reloads on change at `http://localhost:4040`.

## Writing Style

- Write in second person ("you run", "you configure")
- Keep sentences under 25 words where possible
- Lead with the task, not the background
- Use code blocks for every command, with the expected output below

## Heading Levels

| Level | Usage |
|-------|-------|
| `#` | Page title (set in front matter, do not repeat) |
| `##` | Major sections of the page |
| `###` | Subsections within a major section |
| `####` | Reserved for reference tables only |

## Code Samples

Every code sample must be runnable as written. If a sample depends on prior setup, link to that setup in the same page.

```bash
forge docs lint
```

The linter checks for:

- Broken internal links
- Missing language tags on fenced code blocks
- Headings that skip a level
- Trailing whitespace and tabs

## Pull Request Flow

1. Branch from `main` using `docs/short-description`
2. Run `forge docs build` and verify the rendered output
3. Open a pull request, tag the `documentation` label
4. A maintainer reviews within five working days

## Translations

Translations live under `docs/i18n/<locale>/`. Each translated page must include the `translated_from` front matter field pointing at the source path.
