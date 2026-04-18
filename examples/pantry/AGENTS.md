# Pantry

A package manager and registry documentation site built with Hwaro.

## Theme

Light theme with a green/white/light green color palette. Uses solid colors only (no gradients). Designed to feel like a professional package registry portal.

## Color Palette

- Primary green: #16a34a / #15803d
- Light green accents: #dcfce7 / #bbf7d0
- Background: #ffffff
- Surface: #f8fafc
- Text: #1e293b
- Muted text: #64748b
- Border: #e2e8f0

## Fonts

- Body: Source Sans 3 (Google Fonts)
- Code: Source Code Pro (Google Fonts)

## Structure

```
pantry/
  config.toml
  AGENTS.md
  content/
    index.md                          Homepage
    about.md                          About page
    docs/
      getting-started/
        _index.md                     Section index
        installation.md               CLI installation guide
        search-and-install.md         Package search and install
        configuration.md              pantry.toml reference
      publishing/
        _index.md                     Section index
        versioning.md                 Semver and dependency resolution
        publish-workflow.md           Publishing workflow
        deprecation.md                Deprecation and unpublish policies
  templates/
    header.html                       Shared header with nav and search
    footer.html                       Shared footer
    doc.html                          Documentation page with sidebar and TOC
    page.html                         Standalone page layout
    section.html                      Section listing with card grid
    taxonomy.html                     Taxonomy listing
    taxonomy_term.html                Taxonomy term page
    404.html                          Not found page
    shortcodes/
      alert.html                      Alert box shortcode
  static/
    js/
      mobile-menu.js                  Mobile menu toggle
```

## Features

- Syntax highlighting with GitHub theme (CDN)
- Search enabled (Fuse.js JSON format)
- Taxonomy support (tags)
- Sitemap and robots.txt generation
- Responsive design with mobile sidebar toggle
- Table of contents in right sidebar on doc pages
- Breadcrumb navigation
- Previous/Next page navigation
- Card grid section listings
