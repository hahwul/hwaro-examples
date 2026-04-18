+++
title = "Customizing the Even Theme"
date = "2025-02-10"
description = "Learn how to customize the Even theme to match your personal style and preferences."
tags = ["even", "customization"]
categories = ["Even"]
+++

The Even theme is designed to be easily customizable. Here are some ways to make it your own.

## Site Configuration

Edit your `config.toml` to set basic site information:

```toml
title = "Your Blog Name"
description = "Your blog description"
base_url = "https://yourdomain.com"
```

## Navigation Menu

The navigation menu is defined in the header template. You can modify it to add or remove links:

- Home
- Categories
- Tags
- About
- Any custom pages

## Taxonomies

Even supports multiple taxonomy types out of the box:

```toml
[[taxonomies]]
name = "tags"
feed = true

[[taxonomies]]
name = "categories"
paginate_by = 5
```

## Content Organization

Organize your content in sections:

```
content/
├── posts/
│   ├── _index.md
│   ├── my-first-post.md
│   └── my-second-post.md
├── about.md
└── index.md
```

Each section can have its own sorting and pagination settings configured in `_index.md`.

## Color Scheme

The theme uses CSS custom properties that can be easily overridden. The primary color is a warm red-brown (`#bb5649`) that gives Even its distinctive character.
