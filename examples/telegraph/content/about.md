+++
title = "About Telegraph Wire"
description = "About this news wire service theme"
+++

## About

**Telegraph Wire** is a breaking news and wire service theme for [Hwaro](https://github.com/hahwul/hwaro). It draws inspiration from professional news wire services like the Associated Press and Reuters, where speed, clarity, and scannability are paramount.

## Design Principles

- **Scannable list layout** — Headlines and one-line summaries arranged in a fast-scrolling feed, optimized for rapid scanning
- **Timestamp-first metadata** — Every dispatch leads with a precise timestamp, wire-service style
- **Breaking / Urgent badges** — Red and orange labels for high-priority stories, instantly visible in the feed
- **Sans-serif typography** — Inter for body text, JetBrains Mono for timestamps and metadata, chosen for maximum legibility at speed
- **Light, high-contrast palette** — White background with sharp black type and red accents, the visual language of professional newswires
- **Minimal ornamentation** — No decorative elements. Every pixel serves the content

## Customization

Mark any post as breaking news by adding `breaking = true` under `[extra]` in the front matter. For urgent dispatches, use `urgent = true`.

```toml
+++
title = "Your Headline Here"
date = "2026-03-22"
description = "A concise one-line summary."
tags = ["topic"]

[extra]
breaking = true
+++
```

## Setup

1. Run `hwaro init telegraph` to scaffold the project
2. Add dispatches under `content/posts/`
3. Run `hwaro serve` to preview locally
4. Run `hwaro build` for production output
