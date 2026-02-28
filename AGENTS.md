# AGENTS.md - AI Agent Instructions for hwaro-examples

This repository is a collection of example sites built with [Hwaro](https://hwaro.hahwul.com), a fast static site generator written in Crystal. Each subdirectory is an independent Hwaro site that gets deployed together to [examples.hwaro.hahwul.com](https://examples.hwaro.hahwul.com).

## Repository Structure

```
hwaro-examples/
├── .github/workflows/deploy.yml   # Builds all sites and deploys to GitHub Pages
├── blog1/                          # Blog example
├── blog2/                          # Blog + docs example
├── docs1/                          # Documentation site
├── event1/                         # Event listing site
├── folio/                          # Portfolio site
├── hermit/                         # Dark blog theme
├── landing1/                       # SaaS landing page
├── resume1/                        # Resume/CV site
├── ...                             # More examples
└── AGENTS.md                       # This file
```

Each subdirectory with a `config.toml` is automatically detected, built, and deployed by the CI workflow.

## Creating a New Sample Site

### Step 1: Create the directory structure

```
new-site/
├── config.toml
├── content/
│   ├── index.md              # Homepage (front matter + markdown)
│   └── posts/                # Section (optional)
│       ├── _index.md         # Section listing page
│       └── my-post.md        # Individual page
├── templates/
│   ├── header.html           # Site header partial
│   ├── footer.html           # Site footer partial
│   ├── page.html             # Default page template
│   ├── section.html          # Section listing template
│   ├── taxonomy.html         # Taxonomy listing (e.g., /tags/)
│   ├── taxonomy_term.html    # Taxonomy term page (e.g., /tags/crystal/)
│   ├── 404.html              # Not found page
│   └── shortcodes/           # Shortcode templates (optional)
│       └── alert.html
└── static/                   # Static assets copied as-is (optional)
    ├── css/
    ├── js/
    └── images/
```

### Step 2: Write `config.toml`

```toml
title = "Site Title"
description = "Short description for index page and SEO"
base_url = "http://localhost:3000"

[plugins]
processors = ["markdown"]

[content.files]
allow_extensions = ["jpg", "jpeg", "png", "gif", "svg", "webp"]

[highlight]
enabled = true
theme = "github"          # github | monokai | atom-one-dark | vs2015
use_cdn = true

[pagination]
enabled = true
per_page = 5

[[taxonomies]]
name = "tags"
feed = true

[[taxonomies]]
name = "categories"

[sitemap]
enabled = true

[robots]
enabled = true

[feeds]
enabled = true
type = "rss"              # rss | atom
limit = 10
sections = ["posts"]

[markdown]
safe = false
lazy_loading = true
```

`base_url` is overridden at build time by CI (`--base-url`), so `http://localhost:3000` is fine for local development.

### Step 3: Write content files

**Front Matter (TOML between `+++`):**

```toml
+++
title = "Page Title"                      # Required
date = "2025-01-15"                       # YYYY-MM-DD
draft = false                             # Excluded from production if true
description = "SEO description"
tags = ["tag1", "tag2"]
categories = ["guides"]
template = "custom_template"              # Omit to use default (page)
weight = 1                                # Sort order (lower = first)
slug = "custom-url-slug"
image = "/images/featured.jpg"            # Social sharing image
aliases = ["/old-url/"]                   # Redirects
toc = true                                # Show table of contents
authors = ["Author Name"]
[extra]
custom_field = "accessible via page.extra.custom_field"
+++

Markdown content here. Use `<!-- more -->` for summary break.
```

**Section `_index.md`:**

```toml
+++
title = "Blog Posts"
sort_by = "date"          # date | weight | title
reverse = false
paginate = 10
template = "section"
generate_feeds = true
transparent = false       # If true, pages merge into parent section
+++
```

### Step 4: Write templates (Jinja2/Crinja)

#### Template Variables

| Object | Key Properties |
|--------|---------------|
| `site` | `title`, `description`, `base_url`, `pages`, `sections`, `taxonomies`, `data` |
| `page` | `title`, `content`, `date`, `url`, `permalink`, `section`, `summary`, `word_count`, `reading_time`, `extra`, `toc`, `lower`, `higher`, `ancestors`, `assets` |
| `section` | `title`, `description`, `pages`, `pages_count`, `subsections`, `assets` |
| Global | `current_year`, `current_date`, `base_url`, `og_tags`, `twitter_tags`, `highlight_css`, `highlight_js`, `toc` |
| Taxonomy | `taxonomy_name`, `taxonomy_term`, `taxonomy_terms`, `taxonomy_pages` |

Flat aliases: `site_title`, `site_description`, `page_title`, `page_url`, `page_section`, `page_date`, `page_image`, `content` (rendered HTML).

#### Syntax Quick Reference

```jinja
{# Output #}
{{ page.title }}
{{ page.date | date("%Y-%m-%d") }}

{# Conditionals #}
{% if page.summary %}...{% endif %}

{# Loops #}
{% for post in section.pages %}
  <a href="{{ post.url }}">{{ post.title }}</a>
{% endfor %}

{# Includes #}
{% include "header.html" %}

{# Inheritance #}
{% extends "base.html" %}
{% block content %}...{% endblock %}

{# Whitespace control #}
{%- if condition -%}trimmed{%- endif -%}
```

#### Available Filters

| Filter | Example |
|--------|---------|
| `date(fmt)` | `{{ page.date \| date("%B %d, %Y") }}` |
| `truncate_words(n)` | `{{ page.summary \| strip_html \| truncate_words(30) }}` |
| `slugify` | `{{ title \| slugify }}` |
| `absolute_url` | `{{ page.url \| absolute_url }}` |
| `relative_url` | `{{ "/css/style.css" \| relative_url }}` |
| `strip_html` | `{{ content \| strip_html }}` |
| `markdownify` | `{{ text \| markdownify }}` |
| `safe` | `{{ og_tags \| safe }}` |
| `upper` / `lower` | `{{ title \| upper }}` |
| `replace(old, new)` | `{{ text \| replace("a", "b") }}` |
| `default(val)` | `{{ description \| default("No description") }}` |
| `jsonify` | `{{ data \| jsonify }}` |
| `where(attr, val)` | `{{ pages \| where("draft", false) }}` |
| `sort_by(attr)` | `{{ pages \| sort_by("date", reverse=true) }}` |
| `group_by(attr)` | `{{ pages \| group_by("section") }}` |
| `join(sep)` | `{{ tags \| join(", ") }}` |
| `first` / `last` | `{{ items \| first }}` |
| `length` | `{{ items \| length }}` |

#### Shortcodes

Shortcodes live in `templates/shortcodes/`. Use in markdown:

```markdown
{{ alert(type="warning", message="Be careful!") }}
{{ youtube(id="dQw4w9WgXcQ") }}
{{ figure(src="/images/photo.jpg", alt="Photo", caption="A caption") }}
```

Shortcode templates have access to all passed arguments plus `site` and `page` objects.

## Hwaro CLI Reference

| Command | Description |
|---------|-------------|
| `hwaro init <dir>` | Create new site (`--scaffold simple\|blog\|docs`) |
| `hwaro new <path>` | Create content file with front matter (`-t "Title"`, `-a archetype`) |
| `hwaro build` | Build to `public/` (`--minify`, `--drafts`, `--base-url URL`, `--cache`) |
| `hwaro serve` | Dev server with live reload (`-p PORT`, `--open`, `--drafts`) |
| `hwaro deploy` | Deploy to configured targets (`--dry-run`, `--confirm`) |
| `hwaro tool list all\|drafts\|published` | List content files |
| `hwaro tool check` | Check for dead external links |
| `hwaro tool convert toTOML\|toYAML` | Convert front matter format |

### Installation

```bash
# Homebrew
brew tap hahwul/hwaro
brew install hwaro

# Docker (used in CI)
docker run --rm -v "$(pwd):/src" -v "$(pwd)/public:/output" \
  ghcr.io/hahwul/hwaro build -i /src -o /output

# From source
git clone https://github.com/hahwul/hwaro.git && cd hwaro
shards install && shards build --release --no-debug --production
```

## CI/CD Pipeline

The deploy workflow (`.github/workflows/deploy.yml`):
1. Iterates all directories containing `config.toml`
2. Builds each with Docker: `ghcr.io/hahwul/hwaro build --base-url "https://.../<dir_name>"`
3. Generates an index page at `_site/index.html` (extracts `title`/`description` from each `config.toml`)
4. Deploys to GitHub Pages at `examples.hwaro.hahwul.com`

Adding a new subdirectory with a valid `config.toml` is all that's needed to include it in the deployment.

## Rules for AI Agents

1. **One directory = one site.** Each sample site is fully self-contained. Never share files across subdirectories.
2. **`config.toml` is required.** This is the only file the CI uses to detect a buildable site.
3. **`base_url` stays `http://localhost:3000`.** CI overrides it at build time. Do not hardcode production URLs.
4. **Use `{{ base_url }}` in templates** for all asset/link references (e.g., `{{ base_url }}/css/style.css`). Never use absolute paths without the prefix.
5. **Preserve TOML front matter.** Always keep `+++` delimiters and valid TOML syntax when editing content files.
6. **Templates use Jinja2 (Crinja).** Use `{% include %}`, `{% extends %}`, `{% block %}`, `{{ var | filter }}` syntax.
7. **`public/` is build output.** It is gitignored. Never commit or edit files in `public/`.
8. **Keep sites minimal and focused.** Each example should demonstrate a specific use case or design pattern clearly.
9. **Use `hwaro serve` for local preview.** Default port is 3000. Use `-p` to change.
10. **Title and description matter.** They appear on the index page at `examples.hwaro.hahwul.com`.
