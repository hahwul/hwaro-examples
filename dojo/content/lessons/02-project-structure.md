+++
title = "Project Structure"
description = "Understand the directory layout of a Hwaro project and the role of each file."
date = "2026-03-02"
weight = 2
template = "lesson"
tags = ["getting-started", "structure"]
difficulty = "beginner"
duration = "10 min"
step = "2"
+++

## Directory Layout

After running `hwaro init`, your project has this structure:

```
my-site/
  config.toml
  content/
    index.md
    about.md
  templates/
    header.html
    footer.html
    page.html
    section.html
    404.html
    shortcodes/
  static/
    css/
    js/
    images/
```

Let us walk through each part.

## config.toml

This is the heart of your project. It defines your site title, description, base URL, and all feature toggles like search, feeds, and syntax highlighting.

```toml
title = "My Site"
description = "A personal blog"
base_url = "http://localhost:3000"

[highlight]
enabled = true
theme = "github"
```

> Keep `base_url` set to `http://localhost:3000` during development. It gets overridden at build time for production.

## content/

This directory holds all your Markdown files. Each `.md` file becomes a page on your site. Subdirectories become sections.

```
content/
  index.md          -> /
  about.md          -> /about/
  posts/
    _index.md       -> /posts/     (section listing)
    first-post.md   -> /posts/first-post/
    second-post.md  -> /posts/second-post/
```

The `_index.md` file in a subdirectory configures how that section behaves -- sorting, pagination, and which template to use for child pages.

## templates/

Templates control how your content is rendered into HTML. Hwaro uses Jinja2-compatible syntax (via Crinja).

| File | Purpose |
|---|---|
| `header.html` | Opening HTML, `<head>`, site navigation |
| `footer.html` | Closing HTML, scripts |
| `page.html` | Single content page |
| `section.html` | Section listing page |
| `home.html` | Homepage (optional) |
| `404.html` | Not found page |

## static/

Files in `static/` are copied as-is to the build output. Use this for CSS, JavaScript, images, fonts, and other assets.

Reference static files in templates using `{{ base_url }}`:

```html
<link rel="stylesheet" href="{{ base_url }}/css/style.css">
```

## Build Output

When you run `hwaro build`, the generated site goes into `public/`. This directory is gitignored and should never be committed.

## Key Takeaways

- `config.toml` is the only required file for a buildable site
- Content maps directly to URLs based on file paths
- Templates and static assets give you full control over appearance
- The `public/` directory is ephemeral build output
