+++
title = "Cover Images and Card Layouts"
date = "2026-03-10"
description = "How to use cover images and card-style layouts in PaperMod."
tags = ["design", "images", "tutorial"]
categories = ["guide"]
image = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800"
+++

One of PaperMod's signature features is its cover image support. Every post can have a hero image that appears at the top of the article and in post listings.

## Adding a Cover Image

Add an `image` field to your post's front matter:

```toml
+++
title = "My Post"
image = "https://example.com/my-image.jpg"
+++
```

The image is displayed as a full-width banner at the top of the post page and as a thumbnail in list views.

## Card-Style Archive

The archive page renders all posts as cards with cover images, dates, and descriptions. This gives readers a visual way to browse your content.

## Image Best Practices

- Use images with a **16:9 aspect ratio** for consistent card layouts
- Optimize images for web — aim for under **200KB** per image
- Add descriptive `alt` text for accessibility
- Consider using **WebP** format for smaller file sizes

## Lazy Loading

Hwaro supports native lazy loading for images. Enable it in `config.toml`:

```toml
[markdown]
lazy_loading = true
```

This improves initial page load times by deferring off-screen images.
