# AGENTS.md - AI Agent Instructions for hwaro-examples

This repository is a collection of example sites built with [Hwaro](https://hwaro.hahwul.com), a fast static site generator written in Crystal. Each subdirectory is an independent Hwaro site that gets deployed together to [examples.hwaro.hahwul.com](https://examples.hwaro.hahwul.com).

## Repository Structure

```
hwaro-examples/
├── .github/workflows/deploy.yml   # Builds all sites and deploys to GitHub Pages
├── tags.json                       # Tag definitions for index page filtering
├── acme-docs/                      # Documentation site (light, docs)
├── anubis/                         # Minimal Egyptian theme (light, blog, minimal)
├── beautiful-hwaro/                # Beautiful Jekyll-inspired blog (light, blog)
├── book/                           # Book/documentation theme (light, docs)
├── cactus/                         # Dark minimal blog (dark, blog, minimal)
├── console/                        # Terminal-style theme (dark, blog, minimal)
├── devconf/                        # Conference event site (dark, event, landing)
├── devlog/                         # TIL & changelog blog (dark, blog, minimal)
├── emerald/                        # Minimal blog theme (light, blog, minimal)
├── even/                           # Clean responsive theme (light, blog)
├── flowsync/                       # SaaS landing page (dark, landing)
├── folio/                          # Portfolio site (light, portfolio)
├── garden/                         # Digital garden theme (light, blog, garden)
├── forty/                          # Gallery/portfolio theme (dark, portfolio, gallery)
├── gazette/                        # Editorial blog theme (light, blog, editorial)
├── hacker/                         # Dark hacker theme (dark, blog)
├── hermit/                         # Dark minimal blog (dark, blog, minimal)
├── hwaro.386/                      # Retro DOS theme (dark, blog, retro)
├── hwaronight/                     # Tokyo Night theme (dark, blog)
├── ledger/                         # Financial ledger theme (light, docs, finance)
├── modern-blog/                    # Modern personal blog (dark, blog)
├── neon/                           # Cyberpunk neon theme (dark, blog, cyberpunk)
├── no-style-please/                # No-CSS minimal theme (light, blog, minimal)
├── paper/                          # Clean paper-style blog (light, blog, minimal)
├── papermod/                       # PaperMod-inspired profile blog (light, blog, minimal)
├── poison/                         # Sidebar navigation blog (dark, blog, sidebar)
├── polaroid/                       # Photo gallery blog (light, blog, gallery)
├── portfolio-blog/                 # Multilingual portfolio blog (dark, blog, portfolio)
├── pulse-api/                      # API documentation (dark, docs)
├── resume/                         # Resume/CV site (light, resume)
├── studio/                         # Design studio site (dark, landing, portfolio)
├── tale/                           # Traditional blog theme (light, blog, traditional)
├── terminal/                       # Terminal dark blog (dark, blog)
└── AGENTS.md                       # This file
```

Each subdirectory with a `config.toml` is automatically detected, built, and deployed by the CI workflow.

## Creating a New Example Site

### Step 0: Scaffold with `hwaro init`

```bash
# Run from the repo root — creates a minimal skeleton (config.toml + empty dirs)
hwaro init <site-name>

# Equivalent to the above (explicit minimal skeleton)
hwaro init <site-name> --scaffold simple

# Bare scaffold — absolute minimum for advanced users
hwaro init <site-name> --scaffold bare

# With pre-built scaffold for common layouts
hwaro init <site-name> --scaffold blog
hwaro init <site-name> --scaffold docs

# Remote scaffold from an existing example
hwaro init <site-name> --scaffold https://github.com/user/repo/tree/main/some-example

# Minimal config with dark theme support
hwaro init <site-name> --minimal-config
```

**Always start with `hwaro init`**, even for custom layouts. Running without `--scaffold` (or with `--scaffold simple`) gives you a bare skeleton with `config.toml` and empty directories — just fill in your own templates and content from there.

Then work inside the generated `<site-name>/` directory. The default structure looks like this:

```
<site-name>/
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

### Step 1: Write `config.toml`

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

### Step 2: Write content files

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

### Step 3: Write templates (Jinja2/Crinja)

#### Template Variables

| Object | Key Properties |
|--------|---------------|
| `site` | `title`, `description`, `base_url`, `pages`, `sections`, `taxonomies`, `data` |
| `page` | `title`, `date`, `url`, `permalink`, `section`, `summary`, `word_count`, `reading_time`, `extra`, `toc`, `lower`, `higher`, `ancestors`, `assets`, `description`, `image` |
| `section` | `title`, `description`, `pages`, `pages_count`, `subsections`, `assets` |
| Global | `current_year`, `current_date`, `base_url`, `toc` |
| SEO | `og_all_tags`, `canonical_tag`, `jsonld`, `highlight_tags`, `auto_includes` |
| Taxonomy | `taxonomy_name`, `taxonomy_term`, `taxonomy_terms`, `taxonomy_pages` |

Rendered content is `{{ content | safe }}` (not `{{ page.content }}`). Custom metadata is `page.extra.field` (not `page.params.field`).

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
| `hwaro init <dir>` | Create new site (`--scaffold simple\|bare\|blog\|docs`, `--minimal-config`) |
| `hwaro new <path>` | Create content file with front matter (`-t "Title"`, `-a archetype`, `--date`, `--draft`, `--tags`, `--section`) |
| `hwaro build` | Build to `public/` (`--minify`, `--drafts`, `--base-url URL`, `--cache`, `--skip-og-image`, `--skip-image-processing`) |
| `hwaro serve` | Dev server with live reload (`-p PORT`, `--open`, `--drafts`, `--cache`, `--stream`, `--memory-limit`) |
| `hwaro deploy` | Deploy to configured targets (`--dry-run`, `--confirm`) |
| `hwaro doctor` | Check site health and fix common issues (`--fix`) |
| `hwaro tool list all\|drafts\|published` | List content files |
| `hwaro tool check-links` | Check for dead links (`--timeout`, `--concurrency`, `--external-only`, `--internal-only`) |
| `hwaro tool platform` | Generate CI configs (`github-pages`, `gitlab-ci`) |
| `hwaro tool convert toTOML\|toYAML` | Convert front matter format |
| `hwaro tool agents-md` | Generate AGENTS.md (`--remote`, `--local`, `--write`, `--force`) |

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

### Step 4: Add tags to `tags.json`

Add your new example's tags to `tags.json` at the repo root. Tags are used for filtering on the index page.

```json
{
  "my-new-site": ["dark", "blog", "minimal"]
}
```

Available tags: `dark`, `light`, `blog`, `docs`, `landing`, `portfolio`, `event`, `resume`, `gallery`, `minimal`, `retro`, `editorial`, `cyberpunk`, `traditional`, `sidebar`

You may add new tags if needed.

### Step 5: Validate and update config

```bash
cd <site-name>
hwaro tool doctor --fix
```

Automatically adds any missing config sections. Always run this when creating a new example.

### Step 6: Local preview

```bash
cd <site-name>
hwaro serve --open
```

Opens the site in your browser at `http://localhost:3000`.

## CI/CD Pipeline

The deploy workflow (`.github/workflows/deploy.yml`):
1. Iterates all directories containing `config.toml`
2. Reads tags from `tags.json` (via `jq`)
3. Builds each with Docker: `ghcr.io/hahwul/hwaro build --base-url "https://.../<dir_name>"`
4. Captures screenshots of each site with Playwright
5. Generates an index page at `_site/index.html` with:
   - Search bar and grid size slider
   - Tag filter buttons (from `tags.json`)
   - Card per example: screenshot, title, description, tag badges, source code link, scaffold command (copy-to-clipboard)
6. Deploys to GitHub Pages at `examples.hwaro.hahwul.com`

Adding a new subdirectory with a valid `config.toml` + `tags.json` entry is all that's needed to include it in the deployment.

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
11. **Always update `tags.json`** when adding a new example. Tags power the filter buttons on the index page.
12. **Always run `hwaro doctor --fix`** after creating or modifying a site to keep config up to date.
13. **Always start with `hwaro init`.** Use `hwaro init <name>` (no scaffold flag, `--scaffold simple`, or `--scaffold bare`) for custom layouts, or `--scaffold blog`/`docs` for pre-built ones. Never create the directory manually.
14. **Rendered content** is `{{ content | safe }}`, not `{{ page.content }}`. Custom metadata is `page.extra.field`, not `page.params.field`.
15. **Generate AGENTS.md** with `hwaro tool agents-md --local --write` for new sites. Use `--remote` for a lightweight version linking to online docs.
16. **CSS placement convention:** If a theme's CSS is under ~200 lines, inline `<style>` in `header.html` is fine. If 200 lines or more, extract to `static/css/style.css` and link with `<link rel="stylesheet" href="{{ base_url }}/css/style.css">`.
17. **Directory name = example name.** Use descriptive English names (e.g., `blog1` ✗ → `modern-blog` ✓).
