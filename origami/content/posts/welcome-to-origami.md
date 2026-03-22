+++
title = "Welcome to Origami"
date = "2026-03-22"
description = "An introduction to the Origami theme -- material design meets paper fold aesthetics for a clean, elevated reading experience."
tags = ["hwaro", "origami", "getting-started"]
categories = ["guide"]
+++

Origami is a theme that brings Material Design principles to your Hwaro-powered blog. It combines card-based layouts with subtle paper fold details to create something that feels both modern and tactile.

## What Makes Origami Different

Material Design is built around the metaphor of paper and ink. Origami takes that metaphor literally:

1. **Cards everywhere** -- Every piece of content lives on its own elevated surface
2. **Folded corners** -- A subtle fold detail on cards reinforces the paper theme
3. **Elevation hierarchy** -- Shadows communicate which elements sit above others
4. **Deliberate color** -- A restrained palette based on Material Design guidelines

## Getting Started

To create a new site with the Origami theme:

```bash
# Install hwaro
brew install hahwul/tap/hwaro

# Copy this example
cp -r origami my-blog
cd my-blog

# Start the dev server
hwaro serve
```

Edit `config.toml` to set your site title, then start writing posts in `content/posts/`.

## Writing Posts

Each post uses Markdown with TOML front matter:

```toml
+++
title = "My First Post"
date = "2026-03-22"
description = "A brief summary for card previews and SEO."
tags = ["writing", "blog"]
+++

Your content here.
```

The card grid will display your post with its title, date, and description. The folded corner invites readers to peek inside.
