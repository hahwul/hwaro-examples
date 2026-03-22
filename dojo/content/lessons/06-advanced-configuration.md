+++
title = "Advanced Configuration"
description = "Fine-tune your Hwaro site with search, feeds, syntax highlighting, and build hooks."
date = "2026-03-06"
weight = 6
template = "lesson"
tags = ["configuration", "advanced"]
difficulty = "advanced"
duration = "25 min"
step = "6"
+++

## Search

Hwaro generates a JSON search index that works with client-side search libraries like Fuse.js.

```toml
[search]
enabled = true
format = "fuse_json"
fields = ["title", "content"]
filename = "search.json"
exclude = ["private/**"]
```

To implement search, add Fuse.js to your template and query `search.json`:

```html
<script src="https://cdn.jsdelivr.net/npm/fuse.js/dist/fuse.min.js"></script>
<script>
  fetch('/search.json')
    .then(r => r.json())
    .then(data => {
      const fuse = new Fuse(data, {
        keys: ['title', 'content'],
        threshold: 0.3
      });
      // Use fuse.search(query) to get results
    });
</script>
```

## Syntax Highlighting

Code blocks are highlighted automatically when you specify a language:

```toml
[highlight]
enabled = true
theme = "github"
use_cdn = true
```

Available themes include `github`, `monokai`, `atom-one-dark`, and `vs2015`. The `use_cdn` option loads Highlight.js from a CDN. Set it to `false` if you want to bundle the library locally.

## RSS and Atom Feeds

Configure content syndication:

```toml
[feeds]
enabled = true
type = "rss"
limit = 10
sections = ["posts"]
```

Set `type = "atom"` for Atom feeds. The `sections` array limits which content appears in the feed. Leave it empty to include everything.

## Sitemap and Robots

These are enabled by default for SEO:

```toml
[sitemap]
enabled = true
filename = "sitemap.xml"
changefreq = "weekly"

[robots]
enabled = true
rules = [
  { user_agent = "*", disallow = [] }
]
```

## OpenGraph and Social Sharing

Control how your pages appear when shared on social media:

```toml
[og]
default_image = "/images/og-default.png"
type = "article"
twitter_card = "summary_large_image"
```

Include `{{ og_all_tags }}` in your `<head>` to output the meta tags. Individual pages can override the default image with `image = "/path/to/image.png"` in front matter.

## Pagination

Enable pagination for section listing pages:

```toml
[pagination]
enabled = true
per_page = 10
```

Override per section in `_index.md`:

```toml
+++
title = "Blog"
paginate = 5
+++
```

In your section template, use `{{ pagination }}` to render the navigation controls.

## Build Hooks

Run custom commands before or after the build:

```toml
[build]
hooks.pre = ["npm install", "python scripts/preprocess.py"]
hooks.post = ["npm run minify"]
```

Pre-hooks run before Hwaro processes any content. Post-hooks run after the site is built into `public/`.

## Permalinks

Customize URL patterns for sections:

```toml
[permalinks]
posts = "/blog/:year/:month/:slug/"
```

Available placeholders: `:year`, `:month`, `:day`, `:title`, `:slug`, `:section`.

## Series

Group related posts into ordered series:

```toml
[series]
enabled = true
```

Then in content:

```toml
+++
title = "Part 1: Getting Started"
series = "Building a Blog"
series_weight = 1
+++
```

## Deployment

Configure deploy targets for `hwaro deploy`:

```toml
[[deployment.targets]]
name = "prod"
url = "file://./out"

[[deployment.targets]]
name = "s3"
url = "s3://my-bucket"
command = "aws s3 sync {source}/ {url} --delete"
```

## Key Takeaways

- Search generates a JSON index for client-side libraries
- Syntax highlighting supports multiple themes via Highlight.js
- Feeds, sitemaps, and robots.txt are built-in
- Build hooks let you integrate external tools
- Permalinks give you full control over URL structure
- Deploy targets simplify your publishing workflow
