# DESIGN.md — The Quality Bar for hwaro-examples

This document defines how example sites in this repository are designed and
built. It exists so that any contributor — human or AI agent — can produce an
example that belongs in a curated collection of 200, not a pile of 1,500.

**How the pieces fit together:**

- `manifest.json` is the *assignment sheet*: every example's name, category,
  color scheme, style tags, design brief, typography, palette, layout, and
  feature set is decided there **before** any code is written.
- `DESIGN.md` (this file) is the *quality bar*: the rules every example must
  meet regardless of its brief.
- `AGENTS.md` is the *tool reference*: hwaro CLI, template variables, filters,
  front matter.
- `tags.json` is a *derived artifact*: generated from `manifest.json` by
  `scripts/sync-tags.sh`. Never edit it by hand.

If you are building an example, read your `manifest.json` entry first, then
this file top to bottom. Do not deviate from your manifest entry — diversity
across the collection is engineered there, not improvised per-site.

---

## 1. Design principles

1. **One signature idea, fully executed.** Every example has a `signature`
   field in the manifest — a single distinctive design move (an oversized
   vertical date label, a terminal frame, a broadsheet rule system). Build the
   whole site around it. A site with one committed idea beats a site with five
   half-ideas.
2. **Typography does the heavy lifting.** Most of what reads as "beautiful"
   in a content site is type: scale contrast, measure, rhythm, and restraint.
   Get the type system right before touching decoration.
3. **Restraint over decoration.** Shadows, gradients, blurs, and animations
   are seasoning. If removing an effect doesn't hurt the design, remove it.
4. **Real content or nothing.** Placeholder copy is grounds for rejection.
   Write plausible, specific, useful fictional content (see §12).
5. **Design for two viewports.** The gallery screenshot is 1280×720 of the
   homepage — the first screen must establish the design. But the site must
   also hold up scrolled, on interior pages, and at 360px wide.
6. **Every example is a teaching artifact.** Someone will scaffold their real
   site from it (`hwaro init my-site --scaffold <url>`). Prefer clear,
   idiomatic templates and CSS over clever tricks.

## 2. The diversity matrix

Distinctness across 200 examples comes from orthogonal, pre-assigned axes in
`manifest.json`:

| Axis | Source | Guardrail |
|---|---|---|
| Category | `category` | 13 values, fixed distribution |
| Color scheme | `scheme` | `light` / `dark` / `auto` |
| Aesthetic | `styles` + `brief` | 12 style tags, 1–2 per site |
| Typography | `typography` | each pairing used ≤5× collection-wide |
| Palette | `palette` | accent hues spread within each category+scheme bucket |
| Layout | `layout` | 14 named patterns (§6) |
| Signature | `signature` | unique per site |
| Content theme | `content.theme` | unique subject matter per site |

Two sites may share a layout, or a font pairing, or a style tag — but never
all three. If your build starts resembling another example, the signature
element is what must differentiate it. Never "recolor" an existing design.

## 3. Standard skeleton

Every example is born from `hwaro init` and lives at `examples/<name>/`:

```
examples/<name>/
├── config.toml               # baseline in §4
├── AGENTS.md                 # generated: hwaro tool agents-md --remote --write
├── content/
│   ├── index.md              # homepage; front matter: template = "home"
│   ├── about.md              # or category-appropriate standalone page(s)
│   ├── search.md             # only when features.search_ui = "page"
│   └── <section>/            # section name from manifest (not generic "posts"
│       ├── _index.md         #   unless the brief calls for it)
│       └── *.md              # 4–8 pages
├── templates/
│   ├── header.html           # <head> + site header; opens <body> and layout
│   ├── footer.html           # site footer; closes layout, loads site JS
│   ├── home.html             # homepage layout
│   ├── page.html             # default page
│   ├── section.html          # section listing
│   ├── search.html           # only for search_ui = "page"
│   ├── taxonomy.html         # required when [[taxonomies]] configured
│   ├── taxonomy_term.html    # required when [[taxonomies]] configured
│   ├── 404.html
│   └── shortcodes/           # optional; if present, use them in content
└── static/
    ├── css/style.css         # always external, never inline <style> blocks
    └── js/                   # search.js, theme.js (auto scheme) as needed
```

Cleanup after `hwaro init`: the scaffold bundles Charis SIL font files under
`static/fonts/`. Delete them (and their `@font-face` rules) when the manifest
assigns Google Fonts — never ship unused assets. Replace the scaffold favicon
with a simple site-specific SVG mark if the design calls for one.

## 4. config.toml baseline

Start from the `hwaro init` output, then shape it to this baseline. `title`
and `description` come **verbatim** from the manifest entry (the gallery reads
them from config.toml).

```toml
title = "<manifest.title>"
description = "<manifest.description>"
base_url = "http://localhost:3000"   # CI overrides with --base-url; never hardcode production URLs

[plugins]
processors = ["markdown"]

[content.files]
allow_extensions = ["svg"]           # no binary raster assets — see §13

[highlight]
enabled = true
theme = "github"                     # light sites: github · dark sites: atom-one-dark, monokai, vs2015
use_cdn = true

[search]
enabled = true                       # always on, even when there is no search UI
format = "fuse_json"
fields = ["title", "content"]
filename = "search.json"

[pagination]
enabled = true                       # only when a section paginates
per_page = <manifest.features.pagination>

[[taxonomies]]
name = "tags"
feed = true
# add categories/authors taxonomies only when the manifest calls for them —
# every declared taxonomy REQUIRES taxonomy.html + taxonomy_term.html

[sitemap]
enabled = true

[robots]
enabled = true

[feeds]
enabled = true
type = "rss"
sections = ["<real section names only>"]   # must match content/ directories exactly

[og]
type = "article"
twitter_card = "summary_large_image"
# no default_image unless you actually ship that file

[markdown]
safe = false
lazy_loading = true
```

Trim the commented "optional features" tail the scaffold appends — configs
should read as deliberate, not generated. Run `hwaro doctor` before finishing.

## 5. Typography

### Pairings

Choose is the wrong word — your pairing is assigned in `manifest.json`. The
collection draws from this pool (display / text, all on Google Fonts), each
pairing used at most 5 times collection-wide:

- **Editorial serif** — Fraunces/Source Serif 4 · Newsreader/Inter ·
  Playfair Display/Source Sans 3 · Libre Caslon Text/Work Sans · Lora/Karla ·
  Literata/PT Sans · Spectral/IBM Plex Sans · Cormorant Garamond/Mulish
- **Classic book** — EB Garamond/Libre Franklin · Crimson Pro/Figtree ·
  Source Serif 4/Source Sans 3 · Vollkorn/Assistant · Gentium Book Plus/Lato
- **Geometric modern** — Space Grotesk/Inter · Sora/Inter · Outfit/Source Sans 3 ·
  Manrope/Manrope · Syne/Inter · Archivo/Archivo · Instrument Sans/Instrument Sans ·
  Bricolage Grotesque/Nunito Sans · Schibsted Grotesk/Inter
- **Swiss grotesque** — Inter Tight/Inter · IBM Plex Sans/IBM Plex Serif ·
  Public Sans/Public Sans · Familjen Grotesk/Inter · Hanken Grotesk/Hanken Grotesk ·
  Barlow Condensed/Barlow · Big Shoulders/Inter
- **Terminal / mono** — JetBrains Mono/Inter · IBM Plex Mono/IBM Plex Sans ·
  Space Mono/Work Sans · Fragment Mono/Inter · DM Mono/DM Sans · Fira Code/Fira Sans
- **Display / retro** — DM Serif Display/DM Sans · Abril Fatface/Poppins ·
  Bebas Neue/Inter · Young Serif/Inter · Instrument Serif/Instrument Sans ·
  Zilla Slab/Inter · Bitter/Rubik · Rozha One/Work Sans
- **Playful** — Baloo 2/Nunito Sans · Fredoka/Inter · Nunito/Nunito ·
  Gochi Hand (accents only)/Quicksand

Load via Google Fonts CDN with preconnect and `display=swap`, requesting only
the weights you use:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Source+Serif+4:wght@400;600&display=swap" rel="stylesheet">
```

### Scale and rhythm

- Use a fluid type scale built on `clamp()`. Suggested anatomy:

  ```css
  :root {
    --text-sm: clamp(0.83rem, 0.8rem + 0.15vw, 0.9rem);
    --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
    --text-lg: clamp(1.2rem, 1.1rem + 0.5vw, 1.5rem);
    --text-xl: clamp(1.5rem, 1.3rem + 1vw, 2.25rem);
    --text-2xl: clamp(2rem, 1.6rem + 2vw, 3.5rem);
    --text-hero: clamp(2.5rem, 1.8rem + 3.5vw, 5rem);
  }
  ```

  Ratios around 1.2 on mobile widening to ~1.333 on desktop. Big scale-contrast
  between display and body is what makes a design feel intentional.
- Body measure 60–75 characters (`max-width: 65ch` on prose containers).
- Body line-height 1.6–1.8; headings 1.1–1.25; letter-spacing slightly
  negative on large display sizes (`-0.02em`), slightly positive on all-caps
  labels (`0.08em`).
- One `h1` per page. Heading levels never skip.

## 6. Color

### Palette anatomy

Every site defines its palette as CSS custom properties — values come from
`manifest.json`:

```css
:root {
  --bg: #faf6ef;        /* page background */
  --surface: #f2ead9;   /* cards, insets, code blocks */
  --fg: #241f18;        /* body text */
  --muted: #6f6555;     /* secondary text, captions, meta */
  --accent: #b4451f;    /* links, buttons, the one brand color */
  --accent-fg: #ffffff; /* text on accent */
  --border: color-mix(in srgb, var(--fg) 14%, transparent);
}
```

### Rules

- **Contrast is non-negotiable:** `--fg` on `--bg` ≥ 4.5:1 (WCAG AA);
  `--muted` on `--bg` ≥ 4.5:1 where it sets body-size text; large text and UI
  glyphs ≥ 3:1; `--accent-fg` on `--accent` ≥ 4.5:1 for button labels.
- **Dark schemes:** never pure `#000` background or pure `#fff` text — lift the
  background (`#0f1115`-ish, or tinted toward the accent) and soften text
  (`#e6e4df`-ish). Desaturate accents that were designed for light backgrounds.
  Elevation = slightly lighter surfaces, not black drop shadows.
- **One accent.** A second accent is allowed only when the brief demands it
  (e.g. duotone designs). Neutral ramps do the rest.
- **`auto` scheme sites** define both palettes and honor the system:

  ```css
  :root { /* light values */ }
  :root[data-theme="dark"] { /* dark values */ }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) { /* dark values */ }
  }
  ```

  with a toggle (`static/js/theme.js`) that sets `data-theme` on `<html>` and
  persists to `localStorage`, defaulting to the system preference. Set
  `color-scheme: light dark` so form controls and scrollbars follow.

## 7. Layout catalog

`manifest.layout` names one of 14 patterns. The pattern is a starting
skeleton, not a cage — the brief and signature element shape the rest.

1. **centered-column** — single reading column (65–72ch), generous top
   whitespace, nav and footer aligned to the column.
2. **sidebar-docs** — fixed/sticky left sidebar (240–300px) with nav tree,
   main content column, optional right-hand on-page TOC; collapses to a
   drawer or top bar on mobile.
3. **split-hero** — homepage hero split into two asymmetric halves (text vs
   visual/list); interior pages fall back to a simpler column.
4. **bento-grid** — dashboard-like grid of unequal card tiles on the
   homepage; useful for landings and portfolios.
5. **masonry** — CSS `columns` or grid-auto-flow dense card wall; galleries
   and image-free "card" collections.
6. **timeline** — vertical spine with entries alternating or hanging off one
   side; changelogs, event schedules, histories.
7. **magazine-multicol** — front page with a lead story plus multi-column
   story wells, strong rule lines and kickers.
8. **full-bleed-alternating** — landing pattern: alternating full-width bands
   (text/visual), each band its own background.
9. **card-grid** — uniform responsive card grid with a header band; the
   workhorse for listing-heavy sites — differentiate via card anatomy.
10. **terminal-frame** — the whole viewport framed as a terminal/OS window;
    monospace-first, prompt affordances.
11. **broadsheet** — dense newspaper front: masthead, column rules,
    small caps section labels, justified text.
12. **spread** — book/editorial two-page-spread feel: wide margins, folios,
    chapter openers with drop caps or ornaments.
13. **dashboard-panels** — app-shell with a topbar and panel regions (status
    boards, changelogs); data-dense, restrained chrome.
14. **zine-collage** — deliberately irregular: rotated blocks, clipped
    shapes, raw borders; for brutalist/maximalist briefs only.

## 8. Spacing and structure

- Space on a 4/8px scale, tokenized:

  ```css
  :root { --space-1: .25rem; --space-2: .5rem; --space-3: 1rem;
          --space-4: 1.5rem; --space-5: 2.5rem; --space-6: 4rem; --space-7: 6rem; }
  ```
- Consistent vertical rhythm: pick one prose spacing (`* + *` margin-top or
  stack utilities) and use it everywhere.
- Container widths: prose ~65ch; wide layouts 1100–1280px; full-bleed bands
  use an inner container.
- Whitespace is a design material. When in doubt, double the section spacing.

## 9. Micro-interactions and motion

- Transitions ≤ 200ms, `ease-out`, on `color`, `background-color`, `border-color`,
  `opacity`, `transform` only. No `transition: all`.
- Hover states must not shift layout (no size changes; use transform/underline).
- `:focus-visible` styles are **mandatory** on every interactive element —
  a visible ring/offset in `--accent`, never `outline: none` without replacement.
- Respect reduced motion in every stylesheet that animates:

  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: .01ms !important;
      animation-iteration-count: 1 !important; transition-duration: .01ms !important;
      scroll-behavior: auto !important; }
  }
  ```
- Scroll-driven or looping animation only when the brief demands it, and
  always inside the reduced-motion guard.

## 10. Accessibility checklist

Every example ships with all of these:

- [ ] Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`; lists are lists.
- [ ] Skip link as first focusable element (`<a class="skip-link" href="#main">Skip to content</a>`).
- [ ] Exactly one `h1` per page; logical heading order.
- [ ] `lang` attribute on `<html>`.
- [ ] Alt text on meaningful SVGs/images; `aria-hidden="true"` on decorative ones.
- [ ] All contrast ratios per §6.
- [ ] Keyboard: every interactive element reachable and operable; search UIs
      closable with `Esc`; command palettes navigable with arrows (§11).
- [ ] Touch targets ≥ 40px in nav and controls.
- [ ] `prefers-reduced-motion` guard present (§9).

## 11. Search integration

`[search]` is enabled in every config (search.json always builds). Whether a
site ships a search *UI* — and which one — is set by `manifest.features.search_ui`.
All variants load Fuse.js from the CDN and fetch the index with the
**`{{ base_url }}` prefix** (sites deploy under a subpath — a bare `/search.json`
404s in production):

```html
<script src="https://cdn.jsdelivr.net/npm/fuse.js@7.0.0"></script>
```

```js
fetch('{{ base_url }}/search.json')
  .then(function (r) { return r.json(); })
  .then(function (data) {
    fuse = new Fuse(data, { keys: ['title', 'content'], threshold: 0.3 });
  });
```

Escape result strings before injecting into HTML (build text nodes or an
`escapeHtml` helper). Restyle the UI to the site's design — these are
skeletons, not fixed chrome.

### Variants

- **`page`** — `content/search.md` (front matter `template = "search"`,
  `in_search_index = false`) + `templates/search.html` with an autofocused
  input and a results list. Link "Search" in the nav.
- **`overlay`** — a header search button plus the `/` key open a fixed
  overlay (`role="dialog"`, `aria-modal="true"`) with input + live results.
  `Esc` closes; focus returns to the trigger; background scroll locked.
- **`palette`** — ⌘K / Ctrl+K command palette: centered modal, arrow keys
  move an `aria-selected` row, `Enter` navigates, `Esc` closes. Show a
  `⌘K` hint in the header. Default for docs/wiki.
- **`inline`** — a persistent input in the sidebar/hero; typing swaps the
  page's list content for results in place, clearing restores it.
- **`none`** — no UI (small landings/portfolios/resumes); the JSON index
  still builds so users who scaffold from the example inherit working search.

Keep search JS in `static/js/search.js` when it exceeds ~30 lines. If JS with
object literals must live inside a template, wrap it in `{% raw %} … {% endraw %}`
so Crinja never sees the braces.

## 12. Content rules

- **No lorem ipsum, ever.** No "example content", no "this is a sample post".
- Write specific, plausible fiction: named tools with real-sounding changelogs,
  essays with actual arguments, recipes with real steps. 150+ words per page
  of genuine prose; docs/book pages include working fenced code blocks.
- Placeholder titles/descriptions fail lint: never "My Hwaro Site",
  "My Blog", "Hello World", "Welcome to my new Hwaro site.",
  "Welcome to my personal blog powered by Hwaro.".
- 6–10 markdown files per site (per the manifest content plan); section pages
  carry real dates (2025-01 … 2026-06), tags, and descriptions; listable pages
  use `<!-- more -->` summary markers.
- Author names, project names, and places are fictional but credible. Avoid
  real brands and real people.
- English content throughout (Korean-named sites may flavor headings with
  romanized terms where natural, e.g. a masthead subtitle).

## 13. Anti-patterns (lint-enforced and curated)

These fail `scripts/lint-examples.sh` outright:

- Placeholder titles/descriptions (§12).
- Pictographic emoji (U+1F300–U+1F9FF) anywhere in `templates/` or `content/`
  — including prose. Use inline SVG icons or typographic ornaments (✦ ❧ ★ ✓).

These are warnings from lint that this collection treats as **hard caps** —
a new example must produce *zero* warnings:

- More than 12 CSS gradient declarations per site. Target ≤8. If the design
  needs painterly color, prefer SVG `<linearGradient>` art (not counted) or
  solid accent blocks.
- More than 8 `backdrop-filter` rules per site. Target ≤4. Heavy glassmorphism
  is banned as a primary aesthetic.

Curated bans:

- **No purple-gradient "AI slop"**: the violet-to-blue gradient hero with
  glowing blobs is the single most overrepresented look in generated sites.
  Reach for it never.
- **No recolored clones.** If your output would match another example after a
  hue-rotate, start over from your signature element.
- **No binary raster assets** (`.png`, `.jpg`, `.webp`, `.gif`) — vector SVG
  and CSS art only. This keeps the repo lean and every asset diffable.
- **No external hotlinked images.** Allowed external origins: Google Fonts
  and the Fuse.js CDN, nothing else.
- **No `<style>` dumps in templates.** All CSS in `static/css/style.css`.
- **No dead nav links.** Every `href` must resolve within the site.

## 14. Crinja / hwaro pitfalls (build-breakers)

1. `in` does not accept array literals: `{% if x in [1, 2, 3] %}` **fails to
   parse**. Use `{% if x == 1 or x == 2 or x == 3 %}`.
2. Rendered body is `{{ content | safe }}` — `{{ page.content }}` does not exist.
3. Custom front matter reads as `page.extra.field` — never `page.params.field`.
4. `[feeds] sections` must name real `content/` section directories; a stale
   `["posts"]` on a site whose section is `notes/` breaks the feed.
5. Declaring `[[taxonomies]]` without `taxonomy.html` + `taxonomy_term.html`
   breaks taxonomy pages.
6. Guard optional fields: `{% if page.date %}…{% endif %}` — standalone pages
   have no date; unguarded filters on missing values fail.
7. JS/CSS braces inside templates can collide with Jinja delimiters — external
   files or `{% raw %}` blocks (§11).
8. Use only filters documented in `AGENTS.md`. `date(fmt)`, `truncate_words`,
   `slugify`, `strip_html`, `where`, `sort_by`, `group_by`, `join`, `default`,
   `safe`, `upper`, `lower`, `length`, `first`, `last`, `replace`, `jsonify`,
   `markdownify`, `absolute_url`, `relative_url` are safe.
9. Every asset/link href goes through `{{ base_url }}`:
   `href="{{ base_url }}/css/style.css"`, `href="{{ base_url }}{{ p.url }}"`.
   Sites deploy under `/{name}/` — bare absolute paths 404.
10. Homepage template selection: `content/index.md` sets `template = "home"`
    in front matter to use `templates/home.html`.

## 15. Adding example #201 (the full process)

1. **Pick a name**: lowercase single word, not in `manifest.json`, not a
   hwaro CLI/scaffold term (`simple`, `bare`, `blog`, `docs`, `book`, `init`,
   `build`, `serve`, `new`, `doctor`, `tool`, `deploy`), not an infrastructure
   word (`index`, `search`, `static`, `templates`, `content`, `public`,
   `screenshots`, `examples`), and not the name of any previously deleted
   example (check `git log`-era names via `scripts/sync-tags.sh --check` output
   or the manifest history).
2. **Write the manifest entry first** — every field, including brief,
   typography, palette, layout, and signature. Check it against the collection:
   is the pairing under its 5-use cap? Is the accent hue distinct within its
   category+scheme bucket? Is the signature unique?
3. `cd examples && hwaro init <name>` — always start from the scaffold.
4. Build the site to this document's bar. Delete unused scaffold assets.
5. `hwaro build` in the site directory — must exit 0; verify `public/search.json`,
   `public/sitemap.xml`, and feeds exist. Run `hwaro doctor`.
6. `scripts/lint-examples.sh <name>` — zero errors **and zero warnings**.
7. `scripts/sync-tags.sh` — regenerates `tags.json` from the manifest.
8. Generate the per-site doc: `hwaro tool agents-md --remote --write` inside
   the example directory.
9. Sanity-check `scripts/preview-index.sh` locally; open a PR. CI will
   trial-build the new example, lint it, and require the tags.json entry.
