# Meridian Docs

A timezone and scheduling API documentation site built with Hwaro.

## Theme

Light theme using a blue/white/gold color palette. Solid colors only, no gradients. Fonts: IBM Plex Sans (body) and IBM Plex Mono (code).

## Colors

- Primary blue: #2563eb
- Gold accent: #b8860b / #d4a017
- White backgrounds with slate/gray text
- Blue-50 for hover and active states

## Structure

```
meridian-docs/
  config.toml              # Site configuration
  AGENTS.md                # This file
  content/
    index.md               # Homepage
    about.md               # About page
    docs/
      timezones/
        _index.md          # Section index (sort_by weight, page_template doc)
        timezone-database.md   # World timezone mapping table
        dst-handling.md        # DST processing and edge cases
        utc-conversion.md      # UTC conversion API reference
      scheduling/
        _index.md          # Section index
        cron-expressions.md    # Cron expression syntax guide
        recurring-jobs.md      # Recurring job management
        error-handling.md      # Error handling and retry strategies
  templates/
    header.html            # Sticky nav, Tailwind config, search input
    footer.html            # Footer with Hwaro attribution
    doc.html               # Sidebar + content + TOC layout
    page.html              # Simple centered content layout
    section.html           # Card grid for section pages
    taxonomy.html          # Taxonomy listing
    taxonomy_term.html     # Taxonomy term listing
    404.html               # Error page
    shortcodes/
      alert.html           # Alert box shortcode (info, warning, error, tip)
  static/
    js/
      mobile-menu.js       # Mobile menu toggle script
```

## Features

- Sticky top navigation with search input
- Sidebar navigation for doc pages with active state
- Breadcrumb navigation
- Table of contents in right sidebar
- Previous/Next page navigation
- Mobile-responsive sidebar via details/summary
- Card grid section listings
- Alert shortcode with info, warning, error, and tip variants
- Syntax highlighting via Hwaro highlight plugin
- Fuse.js search index generation
