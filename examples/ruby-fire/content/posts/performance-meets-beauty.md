+++
title = "Performance Meets Beauty"
date = "2026-03-30"
tags = ["performance", "web", "optimization"]
categories = ["tech"]
description = "You don't have to choose between a stunning site and a fast one."
+++

There's a persistent myth in web development: beautiful sites are slow, and fast sites are plain. Ruby Fire proves that wrong.

## CSS Is Your Friend

Every visual effect in this theme — the glows, gradients, animations, and transitions — is pure CSS. No heavy JavaScript libraries, no canvas rendering, no WebGL overhead.

```css
/* GPU-accelerated glow transition */
.card {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  will-change: transform;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(230, 57, 70, 0.2);
}
```

The browser's compositor handles these properties efficiently on the GPU.

## Static Sites Win

Static site generators like Hwaro eliminate server-side latency entirely:

- **Zero database queries** — Content is pre-rendered HTML
- **CDN-native** — Static files distribute globally with ease
- **No cold starts** — Every request is a cache hit
- **Minimal JavaScript** — The theme works without JS entirely

## Measuring What Matters

Core Web Vitals for a well-built static site:

| Metric | Target | Static Site Reality |
|--------|--------|-------------------|
| LCP | < 2.5s | < 0.5s |
| FID | < 100ms | < 10ms |
| CLS | < 0.1 | 0 |

## Font Loading Strategy

Custom fonts can block rendering. This theme uses `font-display: swap` and preconnects to Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

This ensures text is visible immediately with a fallback font, then swaps to the custom font once loaded.

## The Bottom Line

Beauty and performance aren't opposing forces — they're complementary. A well-crafted CSS-only theme on a static site is both the fastest and most visually striking option available.
