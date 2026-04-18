+++
title = "Customizing Your Hwaro Theme"
date = "2026-01-05"
description = "How to customize templates and styles in Hwaro."
tags = ["hwaro", "customization", "tutorial"]
categories = ["guides"]
+++

# Customizing Your Hwaro Theme

Hwaro's template system makes it easy to build your own theme. Here's how.

## Template Structure

Hwaro uses Jinja2-style templates:

```
templates/
├── header.html          # <head> + site header
├── footer.html          # Site footer + closing tags
├── page.html            # Single page layout
├── section.html         # Section listing (e.g., /blog/)
├── taxonomy.html        # Taxonomy index (/tags/)
├── taxonomy_term.html   # Term page (/tags/hwaro/)
├── 404.html             # Error page
└── shortcodes/
    └── alert.html       # Custom shortcode
```

## Template Variables

Key variables available in templates:

```
{{ site.title }}         # From config.toml
{{ page.title }}         # Page frontmatter
{{ page.date }}          # Publication date
{{ page.tags }}          # Tag array
{{ content }}            # Rendered markdown
{{ section.pages }}      # Pages in section
{{ base_url }}           # Site base URL
```

## CSS Customization

All styles live in `header.html`. To modify colors, update the CSS variables:

```css
:root {
  --bg: #1a1b26;      /* Change background */
  --fg: #a9b1d6;      /* Change text color */
  --cyan: #7dcfff;    /* Change accent */
  --orange: #ff9e64;  /* Change links */
}
```

## Shortcodes

Create custom shortcodes in `templates/shortcodes/`:

```html
<!-- templates/shortcodes/alert.html -->
<div class="alert alert-{{ type }}">
  <strong>{{ type | upper }}:</strong> {{ message }}
</div>
```

Use in markdown:

```
{{</* alert type="tip" message="This is a tip!" */>}}
```

That's the basics of Hwaro theme customization.
