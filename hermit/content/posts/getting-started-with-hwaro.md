+++
title = "Getting Started with Hwaro"
date = "2026-02-10"
tags = ["hwaro", "tutorial", "getting-started"]
categories = ["tutorial"]
description = "Learn how to set up and build your first site with Hwaro."
+++

Getting started with Hwaro is straightforward. Here's a quick guide.

## Installation

Install via Homebrew:

```bash
brew tap hahwul/hwaro
brew install hwaro
```

Or build from source:

```bash
git clone https://github.com/hahwul/hwaro.git
cd hwaro
shards install
shards build --release --no-debug --production
```

## Create a New Site

```bash
hwaro init my-blog
cd my-blog
```

This generates a basic project structure:

```
my-blog/
├── config.toml
├── content/
│   └── index.md
├── templates/
│   ├── header.html
│   ├── footer.html
│   ├── page.html
│   └── section.html
└── static/
```

## Add Content

Create new pages by adding `.md` files to the `content/` directory:

```markdown
+++
title = "My First Post"
date = "2026-02-10"
tags = ["hello"]
+++

Your content here.
```

## Build and Preview

Start the development server:

```bash
hwaro serve
```

Your site will be available at `http://localhost:3000` with live reload.

When ready to deploy, build the static files:

```bash
hwaro build
```

The output is generated in the `public/` directory.

## Customization

Edit `config.toml` to customize your site title, description, and various plugins. Modify the templates in `templates/` to change the look and feel.

Hwaro supports:

- **Syntax highlighting** via Highlight.js
- **RSS/Atom feeds** for content syndication
- **Taxonomies** for tags and categories
- **Pagination** for section listing pages
- **SEO features** including sitemaps and OpenGraph tags

Happy blogging!
