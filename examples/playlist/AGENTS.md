# AGENTS.md - AI Agent Instructions for Playlist

## Project Overview

A music collection / playlist showcase built with [Hwaro](https://github.com/hahwul/hwaro). Dark theme with Spotify/Apple Music aesthetic. Each post represents a curated playlist with album art, track listings, and listening notes.

## Directory Structure

```
playlist/
├── config.toml
├── content/
│   ├── index.md              # Homepage (template: home)
│   ├── about.md              # About page
│   └── playlists/            # Playlist entries
│       ├── _index.md         # Section listing
│       └── *.md              # Individual playlists
├── templates/
│   ├── header.html           # Site header with equalizer logo
│   ├── footer.html           # Footer with soundwave decoration
│   ├── home.html             # Album grid homepage
│   ├── page.html             # Default page template
│   ├── playlist.html         # Individual playlist detail view
│   ├── section.html          # Collection listing with album grid
│   ├── 404.html
│   ├── taxonomy.html
│   ├── taxonomy_term.html
│   └── shortcodes/
│       └── alert.html
└── static/
    └── css/
        └── style.css
```

## Content Conventions

### Playlist Front Matter

```toml
+++
title = "Playlist Name"
date = "2026-03-18"
description = "Short description of the playlist"
tags = ["genre1", "genre2", "mood"]
categories = ["curated"]
image = "https://example.com/cover.jpg"
template = "playlist"
artist = "Various Artists"
genre = "Genre / Subgenre"
release_date = "Month Year"
tracks = 10
duration = "48 min"
+++
```

### Track Listing Format

Use markdown tables for track listings:

```markdown
| # | Title | Artist | Duration |
|---|-------|--------|----------|
| 1 | Song Name | Artist Name | 4:32 |
```

## Design Notes

- Dark theme (#0a0a0c background, #1db954 accent)
- Space Grotesk for headings, DM Sans for body
- Equalizer/soundwave decorative elements in header and footer
- Album art displayed as 1:1 square aspect ratio in grid cards
- No gradients, no emojis

## Full Reference

- [Hwaro Documentation](https://hwaro.hahwul.com)
- [Configuration Guide](https://hwaro.hahwul.com/start/config/)
- [Full LLM Reference](https://hwaro.hahwul.com/llms-full.txt)
