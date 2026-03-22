+++
title = "About"
description = "About the Thesis theme for Hwaro."
+++

## Thesis

Thesis is an academic paper theme for Hwaro, a fast static site generator. It is designed for researchers, academics, and technical writers who want to publish long-form content with proper scholarly formatting.

## Features

- **Serif typography** with Noto Serif for body text and Inter for UI elements
- **Table of contents sidebar** that tracks scroll position
- **Abstract and keywords** displayed prominently for each paper
- **Author metadata** including name, affiliation, and publication date
- **Footnotes and references** styled for academic readability
- **Responsive design** that adapts to mobile screens
- **Light, classic theme** inspired by traditional academic journals

## Usage

Each paper is a markdown file in the `content/papers/` directory. Use the front matter to define academic metadata:

```toml
+++
title = "Paper Title"
date = "2026-01-15"
description = "This appears as the abstract."
tags = ["keyword-one", "keyword-two"]
template = "post"

[extra]
authors = "Author Name, Co-Author Name"
affiliation = "Department of Computer Science, University"
+++
```

## Credits

Built with [Hwaro](https://github.com/hahwul/hwaro). Typography powered by Google Fonts (Noto Serif, Inter, JetBrains Mono).
