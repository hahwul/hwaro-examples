+++
title = "Getting Started with Hwaro"
date = "2025-01-15"
tags = ["hwaro", "tutorial"]
categories = ["guides"]
description = "A quick guide to setting up your first Hwaro site"
+++

Hwaro is a fast and lightweight static site generator written in Crystal. In this post, I'll walk you through the basics.

<!-- more -->

## Installation

You can install Hwaro via Homebrew:

```bash
brew tap hahwul/hwaro
brew install hwaro
```

## Creating Your First Site

```bash
hwaro init my-site
cd my-site
hwaro serve
```

That's it! Your site is running at `http://localhost:3000`.

## Project Structure

A Hwaro site has a simple layout:

- `config.toml` — site configuration
- `content/` — your Markdown files
- `templates/` — Jinja2 templates
- `static/` — assets copied as-is

{{< alert type="tip" message="Run <code>hwaro serve --open</code> to auto-open the browser." >}}

## What's Next?

Try creating a new post in `content/posts/` and watch it appear automatically with live reload.
