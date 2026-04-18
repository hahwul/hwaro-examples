+++
title = "Dark Mode and Performance Tips"
date = "2026-03-15"
description = "Optimize your PaperMod site for speed and user comfort."
tags = ["performance", "dark-mode", "tips"]
categories = ["blog"]
image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
+++

PaperMod is designed to be fast out of the box. Here are some tips to keep your site performing at its best.

## Dark Mode

The theme toggle stores the user's preference in `localStorage` and applies it instantly on page load — no flash of unstyled content (FOUC).

CSS variables power the entire color scheme:

```css
:root {
  --bg: #ffffff;
  --text: #1d1d1f;
  --border: #e0e0e0;
}

[data-theme="dark"] {
  --bg: #1d1d1f;
  --text: #e0e0e0;
  --border: #333333;
}
```

Changing these variables lets you customize the entire palette in seconds.

## Performance Checklist

1. **Enable lazy loading** for images in `config.toml`
2. **Minimize external requests** — PaperMod uses only Tailwind CDN
3. **Use system fonts** — no web font downloads needed
4. **Enable gzip/brotli** on your hosting provider
5. **Serve static assets** with long cache headers

## Lighthouse Scores

With these optimizations, a typical PaperMod site achieves:

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

The minimal JavaScript footprint (only theme toggle and optional search) keeps the bundle size tiny.
