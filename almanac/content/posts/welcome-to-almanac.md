+++
title = "Welcome to Almanac"
date = "2026-03-22"
description = "Introducing Almanac, a calendar-style theme that organizes content by date and season."
tags = ["hwaro", "almanac", "getting-started"]
categories = ["guide"]
+++

Almanac is a theme that puts time at the center of your content. Every post has a place on the calendar, and the design shifts with the seasons.

## How It Works

The homepage shows a calendar grid for the current month. Each day cell can display events or link to posts published on that date. You can switch between grid view and list view using the toggle in the top right.

## Seasonal Colors

The theme automatically detects the current season and adjusts its color palette:

- **Spring** (March--May) -- soft pinks and warm tones
- **Summer** (June--August) -- deep greens and earthy hues
- **Autumn** (September--November) -- burnt orange and amber
- **Winter** (December--February) -- cool blues and slate

No configuration needed. The colors follow the calendar.

## Getting Started

```bash
brew install hahwul/tap/hwaro

cp -r almanac my-blog
cd my-blog
hwaro serve
```

Edit `config.toml` to set your title, then add posts in `content/posts/`. Each post's `date` field determines where it appears on the calendar.
