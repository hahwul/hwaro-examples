+++
title = "Getting Started with Hwaro"
date = "2026-03-05"
tags = ["hwaro", "tutorial"]
categories = ["tutorial"]
+++

Hwaro is a fast and lightweight static site generator written in Crystal. Here's how to get up and running.

## Installation

Install Hwaro using Homebrew:

```bash
brew tap hahwul/hwaro
brew install hwaro
```

Or build from source:

```bash
git clone https://github.com/hahwul/hwaro.git
cd hwaro
shards install
shards build --release --no-debug --production
```

## Create a New Site

```bash
hwaro init my-blog
cd my-blog
```

## Start the Dev Server

```bash
hwaro serve
```

Your site will be available at `http://localhost:3000/` with live reload enabled.

## Create Content

Add a new post by creating a Markdown file in `content/posts/`:

```markdown
+++
title = "My First Post"
date = "2026-03-01"
tags = ["hello"]
+++

Your content here.
```

## Build for Production

```bash
hwaro build
```

The generated site will be in the `public/` directory, ready to deploy anywhere that serves static files.
