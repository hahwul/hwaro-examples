+++
title = "Getting Started with Hwaro"
date = "2024-01-20"
tags = ["tutorial", "getting-started", "hwaro"]
categories = ["tutorials"]
description = "A beginner's guide to building websites with Hwaro."
+++

In this post, I'll walk you through the basics of setting up and using Hwaro.

## Installation

First, make sure you have Crystal installed. Then:

```bash
git clone https://github.com/hahwul/hwaro
cd hwaro
shards build
```

## Creating Your First Site

```bash
hwaro init my-blog --scaffold blog
cd my-blog
hwaro serve
```

That's it! Your blog is now running at `http://localhost:3000`.

## Next Steps

- Customize your templates in the `templates/` directory
- Add new posts in `content/posts/`
- Configure your site in `config.toml`