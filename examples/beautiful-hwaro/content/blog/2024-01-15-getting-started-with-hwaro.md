+++
title = "Getting Started with Hwaro"
date = "2024-01-15"
description = "A beginner's guide to building static sites with Hwaro"
tags = ["hwaro", "tutorial", "getting-started"]
categories = ["tutorials"]
authors = ["Beautiful Hwaro"]
+++

Hwaro is a fast, lightweight static site generator written in Crystal. In this post, we'll walk through the basics of setting up your first Hwaro site.

## Installation

The easiest way to install Hwaro is via Homebrew:

```bash
brew tap hahwul/hwaro
brew install hwaro
```

## Creating a New Site

Once installed, creating a new site is simple:

```bash
hwaro init my-site
cd my-site
hwaro serve
```

This will start a development server at `http://localhost:3000` with live reload.

## Project Structure

A typical Hwaro project looks like this:

```
my-site/
├── config.toml       # Site configuration
├── content/          # Markdown content
├── templates/        # Jinja2 templates
└── static/           # Static assets
```

## Writing Content

Content is written in Markdown with TOML front matter:

```markdown
+++
title = "My First Post"
date = "2024-01-15"
tags = ["hello"]
+++

Your content goes here!
```

## What's Next?

In upcoming posts, we'll explore:

- Customizing templates with Jinja2
- Adding taxonomies (tags and categories)
- Deploying your site

Happy building!
