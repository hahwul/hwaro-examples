+++
title = "About"
description = "About this presentation theme"
+++

## Slide Theme

A presentation and slide deck theme built for **Hwaro**. Each page acts as a single slide, designed for clarity and focus.

### Features

- Dark theme optimized for readability
- Keyboard navigation with arrow keys
- Prev / Next slide controls
- Syntax highlighted code blocks
- Clean typographic hierarchy

### Navigation

Use **arrow keys** to move between slides, or click the navigation controls at the bottom of each slide.

### Usage

```toml
# Create a new slide
+++
title = "My Slide Title"
weight = 1
template = "post"
[extra]
chapter = "Section Name"
+++
```

Each slide is a markdown file in the `content/slides/` directory. Set `weight` to control the order, and use `extra.chapter` to group slides by section.
