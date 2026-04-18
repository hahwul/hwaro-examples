+++
title = "Getting Started with PaperMod"
date = "2026-03-01"
description = "A quick guide to setting up your PaperMod-powered blog with Hwaro."
tags = ["hwaro", "tutorial", "getting-started"]
categories = ["guide"]
image = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800"
+++

Welcome to PaperMod! This theme brings the beloved Hugo PaperMod design to Hwaro — clean typography, fast loading, and a profile-first homepage.

## Installation

Install Hwaro via Homebrew:

```bash
brew install hahwul/hwaro/hwaro
```

Or build from source:

```bash
git clone https://github.com/hahwul/hwaro.git
cd hwaro && make build
```

## Creating Your Site

Start by copying this example directory and customizing `config.toml`:

```toml
title = "My Blog"
description = "Personal thoughts and tutorials"
```

## Profile Mode

The homepage features a centered profile section with your name, bio, and social links. Edit the `home.html` template to customize your profile information.

## Dark / Light Toggle

PaperMod includes a theme toggle button in the header. It respects the user's system preference by default and saves their choice in `localStorage`.

## What's Next

- Add your first post in `content/posts/`
- Customize colors via CSS variables in `header.html`
- Enable search in `config.toml`
- Deploy with your favorite hosting provider
