+++
title = "Static Sites in the Modern Era"
date = "2026-02-15"
description = "Why static site generators are making a strong comeback"
tags = ["static-sites", "web", "performance"]
categories = ["web"]
+++

## The Return of Static

In the early days of the web, every site was static. Then came CGI scripts, PHP, databases, CMSes, and layers upon layers of complexity. Now, the pendulum is swinging back.

## Why Static?

Static sites offer compelling advantages:

- **Speed** - No server-side processing, no database queries
- **Security** - No dynamic attack surface
- **Reliability** - Simple files served by CDNs
- **Cost** - Free or near-free hosting
- **Simplicity** - Version control your entire site

## The JAMstack Evolution

The modern static site isn't your 1990s hand-coded HTML. Today's static site generators like **Hwaro**, Hugo, Zola, and Jekyll provide:

1. **Markdown content** - Write in plain text
2. **Template engines** - Reusable layouts and components
3. **Taxonomies** - Tags, categories, and custom groupings
4. **RSS feeds** - Content syndication
5. **Search** - Client-side full-text search
6. **SEO** - Sitemaps, meta tags, structured data

## Hosting Options

Static sites can be deployed almost anywhere:

```
$ hwaro build
$ # Deploy to GitHub Pages, Netlify, Vercel,
$ # Cloudflare Pages, S3, or any web server
```

## Performance Comparison

A static site typically achieves:

| Metric              | Static | Dynamic |
|---------------------|--------|---------|
| Time to First Byte  | ~50ms  | ~500ms  |
| Page Load           | <1s    | 2-5s    |
| Server Resources    | Minimal| Heavy   |
| Maintenance         | Low    | High    |

---

*Simple is better than complex.*
