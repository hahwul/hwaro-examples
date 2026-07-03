# AGENTS.md - AI Agent Instructions for hwaro-examples

This repository is a **curated collection of 200 example sites** built with
[Hwaro](https://hwaro.hahwul.com), a fast static site generator written in
Crystal. Each subdirectory under `examples/` is an independent Hwaro site;
all of them deploy together to
[examples.hwaro.hahwul.com](https://examples.hwaro.hahwul.com).

Unlike a grab-bag theme dump, this collection is **designed as a whole**:
every example is pre-assigned a category, color scheme, style, typography,
palette, layout pattern, and a unique signature element in `manifest.json`,
and every example meets the quality bar in `DESIGN.md`.

## The four key files

| File | Role | Edit by hand? |
|---|---|---|
| `manifest.json` | The design matrix: one entry per example with its full art-direction assignment | Yes — this is where new examples start |
| `DESIGN.md` | The quality bar: typography, color, layout, a11y, content, anti-patterns | Yes (carefully) |
| `tags.json` | Gallery filter tags, `{name: [category, scheme, ...styles]}` | **No — generated** by `scripts/sync-tags.sh` |
| `AGENTS.md` | This file: hwaro reference + repo conventions | Yes |

## Repository structure

```
hwaro-examples/
├── .github/workflows/
│   ├── ci.yml                  # PR: trial-build new examples + lint + tags.json check
│   └── deploy.yml              # main: build all, screenshot, generate gallery, deploy
├── manifest.json               # design matrix for all examples (single source of truth)
├── DESIGN.md                   # the quality bar — read before touching examples/
├── tags.json                   # DERIVED from manifest.json (scripts/sync-tags.sh)
├── justfile                    # agent pipeline: just new/design/build/fix/verify/shots <name>
├── scripts/
│   ├── check-site.sh           # full per-site quality gate (build+lint+greps+links)
│   ├── lint-examples.sh        # placeholder/emoji/effect-cap lint (used by CI)
│   ├── sync-tags.sh            # manifest.json -> tags.json (+ --check drift mode)
│   ├── validate-manifest.py    # manifest schema/uniqueness/vocabulary checks
│   ├── retired-names.txt       # names of removed legacy examples — never reuse
│   ├── preview-index.sh        # local gallery preview without Docker
│   └── agent/                  # agy orchestration: prompts + verify.sh + shots.sh
└── examples/                   # all example sites (flat; one dir = one site)
    ├── sirocco/                # light editorial blog
    ├── basalt/                 # docs for a fictional build tool
    └── ...
```

A site at `examples/<name>/` is served at
`https://examples.hwaro.hahwul.com/<name>/` (no `examples/` prefix in the URL).

## Tag vocabulary (closed — do not invent tags)

Every example gets **exactly 1 category + 1 scheme + 1–2 styles** (3–4 tags),
assigned in `manifest.json` and materialized into `tags.json` by
`scripts/sync-tags.sh`:

- **Categories (13):** `blog` `docs` `landing` `portfolio` `magazine`
  `gallery` `event` `resume` `changelog` `book` `wiki` `podcast` `newsletter`
- **Schemes (3):** `light` `dark` `auto` (auto = defaults light, honors
  `prefers-color-scheme`, ships a toggle)
- **Styles (12):** `minimal` `editorial` `brutalist` `retro` `terminal`
  `elegant` `playful` `geometric` `futuristic` `organic` `classic` `maximalist`

Subject-matter variety (a recipe blog, a SaaS landing, a travel journal) is
expressed in the manifest's `content.theme`, **not** as tags.

## Creating a new example site

Follow `DESIGN.md` §15 exactly — it is the authoritative step order. Summary:

1. **Manifest entry first.** Pick a fresh single-word lowercase name (not in
   `manifest.json`, not in `scripts/retired-names.txt`, not a hwaro CLI term),
   then write the complete entry: category, scheme, styles, brief, typography,
   palette, layout, signature, content plan, features. Run
   `scripts/validate-manifest.py`.
2. **Scaffold:** `cd examples && hwaro init <name>` — always. Delete the
   bundled `static/fonts/` (Google Fonts CDN replaces them).
3. **Build the site** in DESIGN.md §15 order: design tokens first, then
   templates **copied from the pattern library below**, then the signature
   element into the homepage's first screen, then content.
4. **Verify the rendered output** — a green build is not success; several
   idioms render empty (see the broken-idioms table below):

   ```sh
   cd examples/<name> && hwaro build && hwaro doctor
   grep -rn '&lt;div\|&lt;section' public/ --include='*.html'  # escaped-HTML leak: expect none outside code samples
   grep -rn '{{\|{%' public/ --include='*.html'                # unrendered template syntax: expect none outside code samples
   grep -rn 'href=""' public/ --include='*.html'               # permalink trap: expect none
   grep -c '<h1' public/index.html                              # exactly one h1 on the homepage
   ```

   Then open `public/index.html` and confirm listings show real titles,
   dates, and links. Check one section page and one taxonomy term page too.
5. **Design QA pass:** every checkbox in DESIGN.md §16.
6. **Gate:** `scripts/check-site.sh <name>` must print `PASS`. This wraps
   `hwaro build`, output checks, lint (errors *and* warnings fatal),
   anti-pattern greps, asset policy, and internal link checks.
7. **Sync tags:** `scripts/sync-tags.sh` regenerates `tags.json`.
8. PR. CI trial-builds new examples, lints them, and requires tags.json
   entries.

### The standard skeleton

```
<name>/
├── config.toml
├── AGENTS.md                  # generated by hwaro init / hwaro tool agents-md
├── content/
│   ├── index.md               # homepage (front matter: template = "home")
│   ├── about.md               # or category-appropriate standalone pages
│   ├── search.md              # only when the search UI variant is "page"
│   └── <section>/             # named for the theme (not a reflexive "posts")
│       ├── _index.md
│       └── *.md               # 4-8 pages of real fictional content
├── templates/
│   ├── header.html, footer.html
│   ├── home.html, page.html, section.html, 404.html
│   ├── taxonomy.html, taxonomy_term.html   # required iff [[taxonomies]] configured
│   ├── search.html            # only for the "page" search variant
│   └── shortcodes/            # optional
└── static/
    ├── css/style.css          # always external
    └── js/                    # search.js / theme.js as needed
```

### config.toml requirements

- `title` / `description`: verbatim from the manifest (the gallery reads them
  from config.toml). Placeholders fail lint.
- `base_url = "http://localhost:3000"` — CI overrides at build time with
  `--base-url`. Never hardcode production URLs.
- `[search] enabled = true` in every site (the JSON index always builds, even
  when there is no search UI).
- `[feeds] sections` must name real `content/` directories.
- Every `[[taxonomies]]` entry requires `taxonomy.html` + `taxonomy_term.html`.

## Template pattern library (verified on hwaro 0.16.0)

Copy these skeletons and restyle them freely — classes, structure, and
wording are yours; the **template logic is not**. Hwaro/Crinja accepts many
plausible idioms that build green but render empty (see the broken-idioms
table). An idiom not on this page must be proven before use: build the site,
then grep `public/` for the values you expect.

### header.html — `<head>` + site header

```jinja
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="{{ page.description | default(site.description, true) | e }}">
  <title>{% if page.title is present and page.title != site.title %}{{ page.title | e }} &middot; {% endif %}{{ site.title | e }}</title>
  <link rel="icon" type="image/svg+xml" href="{{ base_url }}/favicon.svg">
  {{ og_all_tags }}
  {{ canonical_tag }}
  {{ jsonld }}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=<your-pairing>&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{{ base_url }}/css/style.css">
  {{ highlight_css }}
  {{ auto_includes_css }}
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-head">
    <a class="brand" href="{{ base_url }}/">{{ site.title | e }}</a>
    <nav class="site-nav" aria-label="Primary">
      <a href="{{ base_url }}/notes/">Notes</a>
      <a href="{{ base_url }}/about/">About</a>
    </nav>
  </header>
```

`auto`-scheme sites add this pre-paint guard inside `<head>` (before the
stylesheet) so there is no wrong-theme flash:

```jinja
<script>
  {% raw %}(function () {
    try {
      var t = localStorage.getItem('<name>-theme');
      if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    } catch (e) {}
  })();{% endraw %}
</script>
```

### footer.html — closes what header.html opened

```jinja
  <footer class="site-foot">
    <p>Fictional colophon line, {{ current_year }}.</p>
    <nav aria-label="Footer">
      <a href="{{ base_url }}/notes/rss.xml">RSS</a>
      <a href="{{ base_url }}/tags/">Tags</a>
    </nav>
  </footer>
  {{ highlight_js }}
  {{ auto_includes_js }}
  <script src="{{ base_url }}/js/theme.js"></script><!-- auto-scheme sites only -->
</body>
</html>
```

And `static/js/theme.js` for `auto` sites (pairs with the pre-paint guard —
same localStorage key):

```js
(function () {
  var KEY = '<name>-theme';
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  function effective() {
    var attr = root.getAttribute('data-theme');
    if (attr === 'light' || attr === 'dark') return attr;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  btn.addEventListener('click', function () {
    var next = effective() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
  });
})();
```

### home.html — listing a section on the homepage

```jinja
{% include "header.html" %}
<main id="main">
  <!-- hero / signature element here -->
  {{ content | safe }}

  {% set entries = get_section(path="notes").pages | sort_by("date", reverse=true) %}
  <ul class="entry-list">
    {% for p in entries %}{% if loop.index0 < 6 %}
    <li>
      <a href="{{ base_url }}{{ p.url }}">{{ p.title }}</a>
      {% if p.date %}<time datetime="{{ p.date }}">{{ p.date | date("%B %d, %Y") }}</time>{% endif %}
      {% if p.description %}<p>{{ p.description }}</p>{% endif %}
    </li>
    {% endif %}{% endfor %}
  </ul>
</main>
{% include "footer.html" %}
```

- `get_section(path="notes")` names the `content/notes/` directory.
- Listing across all sections: `{% set posts = site.pages | selectattr("date")
  | sort(attribute="date", reverse=true) %}`.
- **Never chain a third filter** (`| slice(6)`, `| rejectattr(...)`) after
  either form — items render as empty stubs. Limit with `loop.index0` as
  shown.

### section.html — respects `_index.md`'s `sort_by`/`reverse`

```jinja
{% include "header.html" %}
<main id="main">
  <h1>{{ section.title | e }}</h1>
  {{ content | safe }}
  {% for p in section.pages %}
  <article>
    <a href="{{ base_url }}{{ p.url }}">{{ p.title }}</a>
    {% if p.date %}<time datetime="{{ p.date }}">{{ p.date | date("%Y-%m-%d") }}</time>{% endif %}
    {% if p.summary %}<p>{{ p.summary | strip_html | truncate_words(30) }}</p>{% endif %}
  </article>
  {% endfor %}
</main>
{% include "footer.html" %}
```

### page.html — the default single page

```jinja
{% include "header.html" %}
<main id="main">
  <article class="prose">
    <h1>{{ page.title | e }}</h1>
    {% if page.date %}<time datetime="{{ page.date }}">{{ page.date | date("%B %d, %Y") }}</time>{% endif %}
    {{ content | safe }}
    {% if page.tags %}
    <ul class="tag-list">
      {% for t in page.tags %}<li><a href="{{ get_taxonomy_url(kind="tags", term=t) }}">{{ t }}</a></li>{% endfor %}
    </ul>
    {% endif %}
  </article>
</main>
{% include "footer.html" %}
```

`get_taxonomy_url` returns a full URL (base_url included) — do not prefix it.

### taxonomy.html + taxonomy_term.html — required iff `[[taxonomies]]` configured

```jinja
{# taxonomy.html — the /tags/ index #}
{% include "header.html" %}
<main id="main">
  <h1>{{ page.title | e }}</h1>
  {% set tax = get_taxonomy(kind="tags") %}
  <ul class="term-list">
    {% for term in tax.items | sort_by("name") %}
    <li>
      <a href="{{ get_taxonomy_url(kind="tags", term=term.name) }}">
        {{ term.name }} <span class="term-count">{{ term.pages | length }}</span>
      </a>
    </li>
    {% endfor %}
  </ul>
</main>
{% include "footer.html" %}
```

```jinja
{# taxonomy_term.html — one /tags/<term>/ page #}
{% include "header.html" %}
<main id="main">
  <h1>{{ taxonomy_term }}</h1>
  {% set tax = get_taxonomy(kind="tags") %}
  {% for term in tax.items %}{% if term.name == taxonomy_term %}
    {% for p in term.pages | sort_by("date", reverse=true) %}
    <a href="{{ base_url }}{{ p.url }}">{{ p.title }}</a>
    {% endfor %}
  {% endif %}{% endfor %}
  <p><a href="{{ base_url }}/tags/">All tags</a></p>
</main>
{% include "footer.html" %}
```

### 404.html

```jinja
{% include "header.html" %}
<main id="main">
  <h1>404</h1>
  <p>In-theme not-found copy, not "Page not found".</p>
  <p><a href="{{ base_url }}/">Back home</a></p>
</main>
{% include "footer.html" %}
```

### Search (the `page` variant; others in DESIGN.md §11)

`content/search.md` sets `template = "search"` and `in_search_index = false`.

```jinja
{# templates/search.html #}
{% include "header.html" %}
<main id="main">
  <h1>{{ page.title | e }}</h1>
  <form role="search" data-index="{{ base_url }}/search.json" onsubmit="return false;">
    <label for="search-input">Search</label>
    <input id="search-input" type="search" autocomplete="off" autofocus>
  </form>
  <p id="search-status" role="status" aria-live="polite"></p>
  <ul id="search-results"></ul>
  <script src="https://cdn.jsdelivr.net/npm/fuse.js@7.0.0"></script>
  <script src="{{ base_url }}/js/search.js"></script>
</main>
{% include "footer.html" %}
```

`static/js/search.js` reads the index URL from the `data-index` attribute
(the template stamps `{{ base_url }}` into it — a hardcoded `/search.json`
404s in production) and builds result DOM nodes instead of injecting HTML:

```js
(function () {
  var form = document.querySelector('form[data-index]');
  var input = document.getElementById('search-input');
  var list = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  if (!form || !input) return;
  var fuse = null;
  fetch(form.getAttribute('data-index'))
    .then(function (r) { return r.json(); })
    .then(function (data) { fuse = new Fuse(data, { keys: ['title', 'content'], threshold: 0.3 }); });
  input.addEventListener('input', function () {
    if (!fuse) return;
    list.textContent = '';
    var hits = fuse.search(input.value).slice(0, 10);
    status.textContent = input.value ? hits.length + ' result(s)' : '';
    hits.forEach(function (h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = h.item.url;           // build DOM nodes — never innerHTML with index data
      a.textContent = h.item.title;
      li.appendChild(a);
      list.appendChild(li);
    });
  });
})();
```

### Shortcodes

Template `templates/shortcodes/callout.html` receives its arguments plus
`{{ body }}` (raw text — pipe through `markdownify` to render markdown):

```jinja
<aside class="callout callout-{{ type | default("note") }}">{{ body | markdownify }}</aside>
```

Call from markdown — inline form, or block form closed with `{% end %}`
(**not** `{% endcallout %}`):

```markdown
{{ callout(type="tip", body="Inline form.") }}

{% callout(type="note") %}Block body with **markdown**.{% end %}
```

## Idioms that build green but render broken

Verified on hwaro 0.16.0. CI checks build success, lint, and tags.json —
**not rendered correctness** — so these ship silently unless you run the
rendered-output greps (step 4 of "Creating a new example site").

| Broken | Symptom | Working replacement |
|---|---|---|
| `{{ p.permalink }}` | empty `href=""` | `{{ base_url }}{{ p.url }}` |
| `selectattr \| sort \| slice(6)` (any 3rd filter) | every item renders blank | limit with `{% if loop.index0 < 6 %}` inside the loop |
| `{{ page.content }}` | empty body | `{{ content \| safe }}` |
| `page.params.field` | renders empty | `page.extra.field` |
| `{% if x in [1, 2] %}` | parse failure | `{% if x == 1 or x == 2 %}` |
| blank line + ≥4-space-indented `<div` in markdown | chunk escaped inside `<pre><code>` | keep raw-HTML blocks contiguous; indent <4 spaces |
| `{% endcallout %}` shortcode close | build error | `{% end %}` |
| `page.date \| date(...)` unguarded | build error on dateless pages | wrap in `{% if page.date %}` |
| bare `href="/notes/"` | 404 under `/<name>/` subpath in production | `href="{{ base_url }}/notes/"` |

## Hwaro reference

### Front matter (TOML between `+++`)

```toml
+++
title = "Page Title"                      # Required
date = "2025-06-15"                       # YYYY-MM-DD
draft = false
description = "SEO description"
tags = ["tag1", "tag2"]
categories = ["guides"]
template = "custom_template"              # Omit to use default (page)
weight = 1                                # Sort order (lower = first)
slug = "custom-url-slug"
aliases = ["/old-url/"]
toc = true
authors = ["Author Name"]
[extra]
custom_field = "accessible via page.extra.custom_field"
+++

Markdown content here. Use `<!-- more -->` for the summary break.
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
transparent = false
+++
```

### Template variables (Jinja2 / Crinja)

| Object | Key properties |
|--------|---------------|
| `site` | `title`, `description`, `base_url`, `pages`, `sections`, `taxonomies`, `data` |
| `page` | `title`, `date`, `url`, `section`, `summary`, `word_count`, `reading_time`, `extra`, `toc`, `lower`, `higher`, `ancestors`, `description`, `image` — link with `{{ base_url }}{{ page.url }}`; **`permalink` renders empty on list items, never use it** |
| `section` | `title`, `description`, `pages`, `pages_count`, `subsections` |
| Global | `current_year`, `current_date`, `base_url`, `toc`, `content` (rendered HTML) |
| SEO | `og_all_tags`, `canonical_tag`, `jsonld`, `highlight_css`, `highlight_js`, `auto_includes_css`, `auto_includes_js` |
| Taxonomy | `taxonomy_name`, `taxonomy_term`, `taxonomy_terms`, `taxonomy_pages` |
| Paginator | `paginator.pages`, `paginator.current_index`, `paginator.number_pagers`, `paginator.previous`, `paginator.next` |

Flat aliases: `site_title`, `site_description`, `page_title`, `page_url`,
`page_section`, `page_date`.

### Syntax quick reference

```jinja
{{ page.title }}
{{ page.date | date("%Y-%m-%d") }}
{% if page.summary %}...{% endif %}
{% for post in section.pages %}<a href="{{ base_url }}{{ post.url }}">{{ post.title }}</a>{% endfor %}
{% include "header.html" %}
{% extends "base.html" %}{% block content %}...{% endblock %}
{%- if condition -%}trimmed{%- endif -%}
{% raw %}{{ not-jinja }}{% endraw %}
```

### Filters

| Filter | Example |
|--------|---------|
| `date(fmt)` | `{{ page.date \| date("%B %d, %Y") }}` |
| `truncate_words(n)` | `{{ page.summary \| strip_html \| truncate_words(30) }}` |
| `slugify` | `{{ title \| slugify }}` |
| `absolute_url` / `relative_url` | `{{ page.url \| absolute_url }}` |
| `strip_html` | `{{ content \| strip_html }}` |
| `markdownify` | `{{ text \| markdownify }}` |
| `safe` | `{{ og_all_tags \| safe }}` |
| `upper` / `lower` | `{{ title \| upper }}` |
| `replace(old, new)` | `{{ text \| replace("a", "b") }}` |
| `default(val)` | `{{ description \| default("No description") }}` |
| `jsonify` | `{{ data \| jsonify }}` |
| `where(attr, val)` | `{{ pages \| where("draft", false) }}` |
| `sort_by(attr)` | `{{ pages \| sort_by("date", reverse=true) }}` |
| `group_by(attr)` | `{{ pages \| group_by("section") }}` |
| `join(sep)` / `first` / `last` / `length` | `{{ tags \| join(", ") }}` |

### Template functions

`get_page(path=...)`, `get_section(path=...)`, `get_taxonomy(kind=...)`,
`get_taxonomy_url(kind=..., term=...)`, `load_data(path=...)`,
`url_for(path=...)`, `asset(name=...)`, `now(format=...)`, `env(...)`.

### Shortcodes

Shortcode templates live in `templates/shortcodes/`; call them from markdown
in inline form (`{{ name(arg="…", body="…") }}`) or block form closed with
`{% end %}`. See the pattern library above for the verified template shape.

### CLI

| Command | Description |
|---------|-------------|
| `hwaro init <dir>` | Create new site (`--scaffold simple\|bare\|blog\|docs`, `--minimal-config`) |
| `hwaro new <path>` | Create content file with front matter |
| `hwaro build` | Build to `public/` (`--minify`, `--drafts`, `--base-url URL`) |
| `hwaro serve` | Dev server with live reload (`-p PORT`, `--open`) |
| `hwaro doctor` | Check site health, `--fix` to auto-fix config |
| `hwaro tool check-links` | Dead link check (`--internal-only`) |
| `hwaro tool agents-md` | Generate per-site AGENTS.md (`--remote`, `--local`, `--write`) |
| `hwaro tool convert toTOML\|toYAML` | Convert front matter format |

## Crinja pitfalls

The full list with explanations is DESIGN.md §14; the silent failures are in
the broken-idioms table above. The one-line summary:

1. `{% if x in [1, 2, 3] %}` **fails to parse** — Crinja's `in` does not
   accept array literals. Use `==` or-chains.
2. Rendered content is `{{ content | safe }}`, not `{{ page.content }}`.
3. Custom front matter is `page.extra.field`, not `page.params.field`.
4. Guard optional fields (`{% if page.date %}`) — standalone pages lack dates.
5. Brace-heavy inline JS/CSS belongs in `static/` or inside `{% raw %}`.
6. Every asset/link uses `{{ base_url }}` — sites deploy under a subpath.
7. Links use `p.url`, never `p.permalink` (renders empty).
8. Never chain a third filter after `selectattr | sort` (renders empty stubs).
9. In markdown with raw HTML: no blank line before a ≥4-space-indented `<tag`
   (it becomes an escaped code block).

## CI/CD pipeline

- **ci.yml** (PRs): detects newly added `examples/*/config.toml`, trial-builds
  each with Docker (`ghcr.io/hahwul/hwaro`), runs `scripts/lint-examples.sh`
  on them, and fails if any new example lacks a `tags.json` entry.
- **deploy.yml** (push to main): lints changed sites, builds every example
  with Docker, captures Playwright screenshots (content-hash cached),
  generates the gallery `index.html` (search, tag filters, cards with
  screenshot/title/description/tags/scaffold command), and deploys to GitHub
  Pages. Title/description come from each `config.toml`; tags from `tags.json`.

## Rules for AI agents

1. **Read `DESIGN.md` before touching `examples/`.** It is the quality bar;
   this file is only the reference manual.
2. **One directory = one site, under `examples/`.** Fully self-contained;
   never share files across sites.
3. **`manifest.json` leads.** No example exists without a manifest entry, and
   `tags.json` is only ever written by `scripts/sync-tags.sh`.
4. **Always start with `hwaro init`.** Never create the directory manually.
5. **`scripts/check-site.sh <name>` must PASS** before any example is
   committed — it enforces build success, lint (warnings fatal), anti-pattern
   greps, the SVG-only asset policy, and internal links.
6. **No binary assets.** SVG and CSS art only; fonts via Google Fonts CDN;
   the only allowed external origins are `fonts.googleapis.com`,
   `fonts.gstatic.com`, and `cdn.jsdelivr.net` (Fuse.js).
7. **No pictographic emoji, no placeholder copy, no lorem ipsum** — lint
   hard-fails all three. Typographic ornaments (✦ ❧ ★ ✓) are allowed.
8. **Effect caps are hard:** ≤12 gradient declarations and ≤8
   `backdrop-filter` rules per site (targets: ≤8 / ≤4; zero lint warnings).
9. **Never reuse retired names** (`scripts/retired-names.txt`) — stale
   screenshot caches and git history make recycled names confusing.
10. **`public/` is build output** — gitignored; never commit or edit it.
11. **Keep `base_url = "http://localhost:3000"`** — CI overrides it.
12. **Copy template logic from the pattern library** in this file — never
    invent idioms. If you need something the library doesn't cover, prove it
    first: build, then grep `public/` for the values you expect.
13. **A green build is not success.** CI does not check rendered correctness,
    and several idioms render empty (broken-idioms table). After every build,
    run the rendered-output greps (step 4 above) and open `public/index.html`
    to confirm listings show real titles and links.
14. **The design QA pass (DESIGN.md §16) is mandatory.** The gallery
    screenshot is the product: the signature element must be visible in the
    homepage's first 1280×720, and zero "generated-design tells"
    (DESIGN.md §13) may survive.
