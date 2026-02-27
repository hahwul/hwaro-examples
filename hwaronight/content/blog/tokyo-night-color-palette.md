+++
title = "The Tokyo Night Color Palette"
date = "2025-12-10"
description = "Exploring the Tokyo Night color scheme and why it works for dark themes."
tags = ["design", "colors", "tokyo-night"]
categories = ["design"]
+++

# The Tokyo Night Color Palette

Tokyo Night is one of the most popular dark color schemes for code editors. Let's explore what makes it work.

## The Colors

The palette is built around a deep blue-gray background with carefully chosen accent colors:

- **Background** `#1a1b26` — A deep, slightly blue-tinted dark
- **Foreground** `#a9b1d6` — Soft blue-gray for comfortable reading
- **Cyan** `#7dcfff` — Bright but not harsh, used for accents
- **Orange** `#ff9e64` — Warm contrast for interactive elements
- **Green** `#9ece6a` — Natural, easy on the eyes for success states
- **Magenta** `#bb9af7` — Purple tones for emphasis

## Why It Works

The key to Tokyo Night's success is **contrast without harshness**. The background isn't pure black (`#000`), and the text isn't pure white (`#fff`). This reduces eye strain during long reading sessions.

> "Good dark themes aren't about making things dark — they're about making things comfortable."

## Using It in CSS

```css
:root {
  --bg: #1a1b26;
  --fg: #a9b1d6;
  --cyan: #7dcfff;
  --orange: #ff9e64;
  --green: #9ece6a;
}
```

The HwaroNight theme applies this palette across the entire site, from headers to code blocks to links.
