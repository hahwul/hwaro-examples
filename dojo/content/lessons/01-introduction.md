+++
title = "Introduction to Hwaro"
description = "Get started with Hwaro -- learn what it is, why it exists, and how to install it."
date = "2026-03-01"
weight = 1
template = "lesson"
tags = ["getting-started", "basics"]
difficulty = "beginner"
duration = "5 min"
step = "1"
+++

## What is Hwaro?

Hwaro is a fast, flexible static site generator written in Crystal. It transforms your Markdown content and templates into a complete static website that can be hosted anywhere.

Static site generators are tools that take your content (usually written in Markdown), apply templates to it, and produce a set of plain HTML files. Unlike dynamic websites that generate pages on every request, static sites are pre-built and served as-is.

## Why Hwaro?

There are several reasons to choose Hwaro for your next project:

- **Speed** -- Built with Crystal, Hwaro compiles your site in milliseconds
- **Simplicity** -- Minimal configuration with sensible defaults
- **Flexibility** -- Jinja2-compatible templates give you full control over output
- **Built-in features** -- Search, feeds, syntax highlighting, and more out of the box

## Installation

Install Hwaro using Homebrew:

```bash
brew install hahwul/tap/hwaro
```

Or build from source:

```bash
git clone https://github.com/hahwul/hwaro.git
cd hwaro
shards build --release
```

## Your First Site

Once installed, creating a new site takes a single command:

```bash
hwaro init my-site
cd my-site
hwaro serve
```

Open your browser to `http://localhost:3000` and you should see a default page. That is your new Hwaro site running locally.

## What is Next?

In the next lesson, we will explore the directory structure that `hwaro init` created and understand what each file does.
