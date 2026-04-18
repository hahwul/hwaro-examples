+++
title = "Welcome to Mosstown"
date = "2026-03-20"
description = "An introduction to Mosstown, a cottagecore blog theme built for those who appreciate the slower, quieter things in life."
tags = ["hwaro", "mosstown", "getting-started"]
categories = ["guide"]
+++

Mosstown is not so much a theme as it is a feeling. It is the creak of a wooden gate, the smell of lavender drying on a windowsill, the sound of rain against old glass.

## A Place for Slow Stories

This blog was designed for writing that takes its time. Long paragraphs about sourdough starters. Observations about the way morning light falls across a garden path. Recipes passed down through generations, written on flour-dusted index cards.

The design reflects this pace:

1. **Soft card layouts** that feel like pinned notes on a kitchen corkboard
2. **Handwritten headings** that bring warmth to every page title
3. **Pastel tones** inspired by dried flowers and old linen
4. **Generous spacing** so the words can breathe, just like a well-tended herb garden

## Getting Started

To create a new site with the Mosstown theme:

```bash
# Install hwaro
brew install hahwul/tap/hwaro

# Copy this example
cp -r mosstown my-blog
cd my-blog

# Start the dev server
hwaro serve
```

Edit `config.toml` to set your site title and description, then start writing posts in the `content/posts/` directory.

## Writing Posts

Each post is a Markdown file with TOML front matter:

```toml
+++
title = "My First Post"
date = "2026-03-20"
description = "A brief summary for list pages and SEO."
tags = ["writing", "blog"]
+++

Your content here.
```

Mosstown will wrap your words in warmth. You just need to write them.
