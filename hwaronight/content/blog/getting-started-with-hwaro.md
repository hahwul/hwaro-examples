+++
title = "Getting Started with Hwaro"
date = "2025-12-01"
description = "A beginner's guide to building static sites with Hwaro."
tags = ["hwaro", "tutorial", "getting-started"]
categories = ["guides"]
+++

# Getting Started with Hwaro

Hwaro is a fast, simple static site generator written in Crystal. Here's how to get started.

## Installation

Install via Homebrew:

```bash
brew install hahwul/tap/hwaro
```

Or build from source:

```bash
git clone https://github.com/hahwul/hwaro.git
cd hwaro
shards build --release
```

## Creating a New Site

```bash
hwaro init mysite
cd mysite
```

This creates the basic structure:

```
mysite/
├── config.toml
├── content/
│   ├── index.md
│   └── about.md
├── templates/
│   ├── header.html
│   ├── footer.html
│   └── page.html
└── static/
```

## Writing Content

Create markdown files in `content/` with TOML frontmatter:

```markdown
+++
title = "My First Post"
date = "2025-12-01"
tags = ["hello"]
+++

Your content here.
```

## Building and Serving

```bash
hwaro build    # Generate static files
hwaro serve    # Start dev server at localhost:3000
```

That's it! You now have a working static site.
