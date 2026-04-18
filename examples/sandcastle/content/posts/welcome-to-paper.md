+++
title = "Welcome to Paper"
date = "2026-03-20"
description = "An introduction to the Paper theme — a warm, readable blog design inspired by Hugo Paper."
tags = ["hwaro", "paper", "getting-started"]
categories = ["guide"]
+++

Paper is a theme that puts reading first. Inspired by [Hugo Paper](https://github.com/nanxiaobei/hugo-paper), it brings the warmth of a well-worn notebook to your browser.

## Design Philosophy

Paper is built on a few key principles:

1. **Readability above all** — Serif typography (Lora) for body text makes long-form reading comfortable
2. **Warm aesthetics** — Cream backgrounds and earthy accent colors reduce eye strain
3. **Minimal chrome** — No sidebars, no widgets, just your words
4. **Generous whitespace** — Content breathes, giving readers space to think

## Getting Started

To create a new site with the Paper theme:

```bash
# Install hwaro
brew install hahwul/tap/hwaro

# Copy this example
cp -r paper my-blog
cd my-blog

# Start the dev server
hwaro serve
```

Edit `config.toml` to set your site title and description, then start writing posts in the `content/posts/` directory.

## Writing Posts

Each post is a Markdown file with TOML front matter:

```toml
+++
title = "My First Post"
date = "2026-03-20"
description = "A brief summary for list pages and SEO."
tags = ["writing", "blog"]
+++

Your content here.
```

Paper handles the rest — clean typography, proper spacing, and a layout that keeps readers focused on your words.
