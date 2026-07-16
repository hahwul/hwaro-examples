# DESIGN.md — The Quality Bar for hwaro-examples

This document defines how example sites in this repository are designed and
built. It exists so that any contributor — human or AI agent — can produce an
example that belongs in a curated collection of 200, not a pile of 1,500.

**How the pieces fit together:**

- `manifest.json` is the *assignment sheet*: every example's name, category,
  color scheme, style tags, design brief, typography, palette, layout, and
  feature set is decided there **before** any code is written. Its top-level
  `flagships` array is an ordered, maintainer-curated list of showcase
  examples pinned (with decoration) at the front of the gallery — agents must
  never add to or reorder it.
- `DESIGN.md` (this file) is the *quality bar*: the rules every example must
  meet regardless of its brief.
- `AGENTS.md` is the *tool reference*: hwaro CLI, template variables, filters,
  front matter — and the **verified template pattern library** every example's
  templates are copied from.
- `tags.json` is a *derived artifact*: generated from `manifest.json` by
  `scripts/sync-tags.sh`. Never edit it by hand.

If you are building an example, read your `manifest.json` entry first, then
this file top to bottom. Do not deviate from your manifest entry — diversity
across the collection is engineered there, not improvised per-site.

**Two meta-rules for anyone (especially AI agents) building an example:**

1. **Rules beat instinct.** Where this document gives a number, a default, or
   a named pattern, use it — even when another way seems fine. Every rule here
   exists because a generated site got it wrong. When a rule and your
   judgment conflict, the rule wins.
2. **Copy, don't invent.** Template code comes from the verified pattern
   library in `AGENTS.md`. Hwaro/Crinja accepts many idioms that *build
   green but render empty* — an idiom not in that library must be proven
   before use: build the site, then grep `public/` for the values you expect
   (§15 step 9).

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
├── AGENTS.md                 # generated: hwaro tool agents-md --remote --write --force
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

### Measurable minimums (checked in the design QA pass, §16)

- The homepage uses **at least 4 distinct steps** of the type scale; the
  largest text on the first screen is `--text-2xl` or bigger.
- The display font is visible in the first viewport (hero/masthead). Body
  prose is never set in the display font; same-font pairings (Manrope/Manrope,
  Archivo/Archivo) differentiate with weight instead — display ≥600, body 400.
- All-caps only for short labels (kickers, nav, tags) at ≤0.9rem with
  letter-spacing ≥0.06em — never headings or body text.
- When a page feels flat, fix it with scale contrast — make the biggest
  element bigger and the meta text smaller. Do **not** reach for decoration.

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
- **Accent budget.** The accent colors links, one primary CTA, and the
  signature moment. If the accent also paints headings, borders, icons, and
  backgrounds everywhere, it stops reading as an accent — move those to
  `--fg`/`--muted`/`--border`.
- **Palette values are verbatim from the manifest.** Derive any extra tints
  with `color-mix()` from existing tokens; never introduce new hex values.
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
- **Code blocks on `auto` sites:** highlight themes are single-scheme, so a
  light theme ships a white code background into dark mode. Override with
  palette tokens: `.prose pre { background: var(--surface); border: 1px solid
  var(--border); }` and `.hljs { background: transparent; }` — then verify a
  code block in dark mode. Check the *token* colors too: colors designed for
  white paper go illegible on dark surfaces; in the dark scheme, remap them
  to palette tokens (base `var(--fg)`, keywords `var(--accent)`, comments
  `var(--muted)`, strings via `color-mix`). §6 contrast applies inside code.

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
- **The homepage is composed of distinct bands**: masthead/hero, then at
  least one content band (listing, grid, spread), then footer. Adjacent bands
  are separated by `--space-6`+ or an explicit rule/background change. A hero
  that is just a heading and a paragraph floating in whitespace — with no
  real matter beneath it on the first screen — fails the QA pass.

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
  of genuine **prose** — front matter, fenced code blocks, and shortcode
  bodies do not count toward the total. Docs/book pages include working
  fenced code blocks on top of that.
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

### Generated-design tells

These are the patterns that make a site read as "AI output". Each is legal
CSS — the ban is on the cliché. The §16 QA pass checks every row; if your
draft contains one, apply the listed fix before continuing.

| Tell | Fix |
|---|---|
| Centered hero: one `h1`, one paragraph, two pill buttons | Put real matter in the hero — the latest entries, a specimen, an SVG diagram, a manifesto — per your layout and signature |
| Three-column icon feature grid ("Fast · Simple · Secure") | Cut it. Show actual content from your content plan, not claims about it |
| Every surface has `border-radius` 8–16px plus a soft box-shadow | One surface treatment per site: rules/borders (editorial, swiss), flat blocks (brutalist), or radius+shadow (playful) — never all at once |
| Accent color on headings, buttons, borders, icons, and backgrounds | Accent budget (§6): links, one CTA, the signature moment |
| Header = logo left, four links, CTA button pinned right | Right for a SaaS-landing brief; wrong default for everything else — design the header to the brief (masthead, sidebar, terminal bar…) |
| Uniform card grid where every card is identical | Differentiate the anatomy: a lead card, mixed sizes, or rich meta rows (§7 №9) |
| Multi-column footer link dump on a 7-page site | Footer proportionate to the site — one row of links plus a colophon line is usually right |
| Free-floating decoration: blobs, glows, dot grids, floating shapes | Delete. Decoration must be the signature element or directly support it |
| A 65ch prose column pinned left inside a wide container, right half permanently empty | Center the measure (`margin-inline: auto`) or fill the space with real matter (TOC, meta rail, figures) |
| `transition: all .3s` sprinkled everywhere | §9: ≤200ms, named properties only |
| Uniform 16px/1.5 text with no measure limit | §5: fluid scale, 65ch measure, real hierarchy |

## 14. Crinja / hwaro pitfalls

Verified against hwaro 0.16.0 (2026-07). Two classes: **build-breakers**
(the build fails, so you notice) and — far more dangerous — **silent
failures** (the build exits 0 and the page renders wrong or empty; CI does
not catch these). §15 step 9 exists to catch the second class.

### Build-breakers

1. `in` does not accept array literals: `{% if x in [1, 2, 3] %}` **fails to
   parse**. Use `{% if x == 1 or x == 2 or x == 3 %}`.
2. JS/CSS braces inside templates collide with Jinja delimiters — put JS/CSS
   in external files or inside `{% raw %} … {% endraw %}` blocks (§11).
3. Declaring `[[taxonomies]]` without `taxonomy.html` + `taxonomy_term.html`
   breaks taxonomy pages.
4. Unguarded filters on missing values fail: standalone pages have no date,
   so always `{% if page.date %}…{% endif %}` before formatting it.

### Silent failures (build exits 0, page is wrong)

5. **`p.permalink` renders empty.** Always link with
   `href="{{ base_url }}{{ p.url }}"`.
6. **A third filter chained after `selectattr | sort` returns empty stubs.**
   `site.pages | selectattr("date") | sort(...) | slice(6)` builds green and
   renders every item blank — same for a trailing `rejectattr`. Limit inside
   the loop instead: `{% if loop.index0 < 6 %}`.
7. **The markdown indent trap.** In markdown content containing hand-written
   HTML, a blank line followed by a line indented ≥4 spaces that starts with
   `<` opens an indented *code block* — that chunk renders as escaped source
   inside `<pre><code>`. Keep raw-HTML blocks contiguous (no blank lines
   inside them) or keep continuation indents under 4 spaces.
   Detect after build: `grep -rn '&lt;div' public/` (see §15 step 9).
8. `{{ page.content }}` does not exist and renders empty — the rendered body
   is the global `{{ content }}`, always written as `{{ content | safe }}`.
9. Custom front matter reads as `page.extra.field` — `page.params.field`
   renders empty.
10. `[feeds] sections` must name real `content/` section directories; a stale
    `["posts"]` on a site whose section is `notes/` breaks the feed.
11. Every asset/link href goes through `{{ base_url }}`:
    `href="{{ base_url }}/css/style.css"`, `href="{{ base_url }}{{ p.url }}"`.
    Sites deploy under `/{name}/` — bare absolute paths 404 in production
    while looking fine locally.
12. Homepage template selection: `content/index.md` sets `template = "home"`
    in front matter to use `templates/home.html`.

Use only the filters, functions, and idioms documented in `AGENTS.md`
(`date(fmt)`, `truncate_words`, `slugify`, `strip_html`, `where`, `sort_by`,
`group_by`, `join`, `default`, `safe`, `upper`, `lower`, `length`, `first`,
`last`, `replace`, `jsonify`, `markdownify`, `absolute_url`, `relative_url`
are safe). Anything else — however plausible it looks — is unverified: prove
it renders (build, then grep the output) before shipping it.

## 15. Adding example #201 (the full process)

Work in this exact order — tokens before markup, markup before content,
verification before PR. Each step has a checkpoint; do not skip ahead.

1. **Pick a name**: lowercase single word, not in `manifest.json`, not in
   `scripts/retired-names.txt`, not a hwaro CLI/scaffold term (`simple`,
   `bare`, `blog`, `docs`, `book`, `init`, `build`, `serve`, `new`, `doctor`,
   `tool`, `deploy`), and not an infrastructure word (`index`, `search`,
   `static`, `templates`, `content`, `public`, `screenshots`, `examples`).
2. **Write the manifest entry first** — every field, including brief,
   typography, palette, layout, and signature. Check it against the collection:
   is the pairing under its 5-use cap? Is the accent hue distinct within its
   category+scheme bucket? Is the signature unique? Then run
   `scripts/validate-manifest.py` — it must pass.
3. **Scaffold**: `cd examples && hwaro init <name>` — always start from the
   scaffold. Delete `static/fonts/` and its `@font-face` rules; trim the
   commented "optional features" tail from config.toml; set the config to the
   §4 baseline with `title`/`description` verbatim from the manifest.
4. **Tokens before markup.** Write the top of `static/css/style.css` first:
   the palette custom properties (verbatim from the manifest — both palettes
   for `auto` sites), the fluid type scale (§5), and the spacing scale (§8).
   Every rule you write afterwards uses these tokens.
5. **Templates from the pattern library.** Copy the skeletons from
   `AGENTS.md` § "Template pattern library" — header/footer, home, page,
   section, the taxonomy pair, 404, and your search variant — then restyle
   them to the design. Never write template logic from scratch.
6. **Build the signature element next**, into the homepage's first screen,
   before any other styling. The gallery screenshot is 1280×720 of the
   homepage: if the signature isn't visible there, the site reads as generic.
7. **Write the content** (§12): 6–10 pages of real fictional prose with real
   dates, tags, descriptions, and `<!-- more -->` markers on listable pages.
8. **Interior pages and states**: section listing, page template, taxonomy
   pages, 404, search; hover and `:focus-visible` treatments on every
   interactive element; the reduced-motion guard (§9).
9. **Build and verify the rendered output.** This is what catches the §14
   silent failures — CI does not:

   ```sh
   cd examples/<name>
   hwaro build && hwaro doctor        # build must exit 0 with no warnings

   # Escaped-HTML leak (§14.7-8) — expect NO matches outside intentional
   # code samples (a docs site showing HTML snippets is fine):
   grep -rn '&lt;div\|&lt;section\|&lt;article' public/ --include='*.html'

   # Unrendered template syntax — expect NO matches outside code samples:
   grep -rn '{{\|{%' public/ --include='*.html'

   # Empty links from the permalink trap (§14.5) — expect NO matches:
   grep -rn 'href=""' public/ --include='*.html'

   # Exactly one h1 on the homepage (§10) — expect exactly 1:
   grep -c '<h1' public/index.html
   ```

   Then open `public/index.html` and confirm the home listing actually shows
   entry titles, dates, and working `/<name>/…`-style links — an empty
   listing builds green (§14.6). Do the same for one section page and one
   taxonomy term page.
10. **Design QA pass** (§16) — every line, honestly.
11. **Gate**: `scripts/check-site.sh <name>` must print `PASS: <name>`
    (zero lint errors **and** zero warnings).
12. **Finish**: `scripts/sync-tags.sh` regenerates `tags.json`; generate the
    per-site doc with `hwaro tool agents-md --remote --write --force` inside the
    example directory; sanity-check `scripts/preview-index.sh`; open a PR.
    CI trial-builds the new example, lints it, and requires the tags.json
    entry.

## 16. The design QA pass

Run this after the site builds clean (§15 step 9), before the final gate.
Every item is a yes/no check against the source or the rendered `public/`
output. Fix and re-check until every box is a genuine yes — do not
rationalize a "no".

**First screen** (the gallery shot is 1280×720 of the homepage)

Verify these against an **actual rendering** at 1280×720 — `hwaro serve` and
look, or a headless screenshot (`chrome --headless=new --screenshot=shot.png
--window-size=1280,720 <url>`). Reasoning from source alone is not evidence:
a rule existing in style.css says nothing about where it lands on screen. If
you cannot render, budget heights explicitly (topbar + each band, in px) and
show the arithmetic that puts the signature above 720px.

- [ ] The homepage has exactly one `<h1>`, and it is on the first screen.
- [ ] The manifest's signature element is visible without scrolling.
- [ ] The display font is visible without scrolling.
- [ ] The largest text on the first screen is `--text-2xl` or larger.
- [ ] The first screen contains real matter beyond a heading and a paragraph:
      a listing, grid, specimen, SVG mark, or the signature itself (§8).
- [ ] At thumbnail size, this screenshot would be distinguishable from every
      other example in its category. If it reads as "generic \<category\>",
      push the signature harder — bigger, stranger, more committed.

**Typography and color**

- [ ] ≥4 distinct type-scale steps used on the homepage; prose measure ≤75ch.
- [ ] Palette values match the manifest verbatim; extra tints only via
      `color-mix()` (§6).
- [ ] Accent budget holds: accent = links + one CTA + the signature moment,
      nothing more (§6).
- [ ] Dark palette (if any): background is not `#000`, text is not `#fff`,
      the accent is desaturated relative to the light variant (§6).

**Structure and states**

- [ ] Zero survivors from the §13 generated-design tells table.
- [ ] One surface treatment (borders/rules, flat blocks, or radius+shadow),
      used consistently across cards, insets, and code blocks.
- [ ] Every link and card has a designed hover state; every interactive
      element has a `:focus-visible` ring; the reduced-motion guard exists.
- [ ] At 360px: no horizontal scroll — no fixed/min widths >360px outside
      media queries, multi-column grids stack to one column, long mono
      strings wrap, and decorative offsets (shadows, skews) don't add layout
      width. Nav usable, touch targets ≥40px.
- [ ] Interior pages (section, page, taxonomy, 404, search) carry the same
      design system — not unstyled defaults with the home's header bolted on.

**Content and output**

- [ ] Every §12 content rule holds — no placeholders, real dates and tags,
      ≥150 words of genuine prose per page.
- [ ] All §15 step 9 rendered-output greps pass.
- [ ] Every §10 accessibility box is checked.
