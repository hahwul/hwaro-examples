+++
title = "Building Beautiful Themes with Hwaro"
date = "2024-03-05"
description = "Learn how to create custom themes using Hwaro's Jinja2 template engine"
tags = ["hwaro", "themes", "css", "design"]
categories = ["development"]
authors = ["Beautiful Hwaro"]
+++

One of Hwaro's strengths is its flexible Jinja2-based template system. In this post, we'll explore how to build a custom theme from scratch.

## Template Basics

Hwaro uses Jinja2 (powered by Crinja) for templates. The key templates are:

- `page.html` — Default page layout
- `section.html` — Section listing pages
- `header.html` / `footer.html` — Reusable partials

## Template Variables

You have access to several global objects:

```jinja
{{ site.title }}      {# Site title from config.toml #}
{{ page.title }}      {# Current page title #}
{{ page.content }}    {# Rendered markdown content #}
{{ page.date }}       {# Publication date #}
{{ page.url }}        {# Page URL #}
{{ base_url }}        {# Site base URL #}
```

## Creating a Header

A typical header partial includes the HTML document start, CSS, and navigation:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{{ page.title }} - {{ site.title }}</title>
  <style>
    /* Your styles here */
  </style>
</head>
<body>
  <nav>
    <a href="{{ base_url }}/">{{ site.title }}</a>
  </nav>
```

## Using Includes

Break your templates into manageable pieces:

```jinja
{% include "header.html" %}
  <main>
    {{ content }}
  </main>
{% include "footer.html" %}
```

## Styling Tips

### Use CSS Custom Properties

CSS variables make theming flexible:

```css
:root {
  --primary: #0085A1;
  --text: #404040;
  --bg: #ffffff;
}

body {
  color: var(--text);
  background: var(--bg);
}

a { color: var(--primary); }
```

### Responsive Design

Always design mobile-first:

```css
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

@media (max-width: 768px) {
  .container { padding: 0 1rem; }
}
```

## Conclusion

Hwaro's template system gives you complete control over your site's appearance. Start with a simple layout and iterate from there. The Beautiful Hwaro theme you're reading this on was built using exactly these techniques!
