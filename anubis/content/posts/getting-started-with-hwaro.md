+++
title = "Getting Started with Hwaro"
date = "2026-03-01"
tags = ["hwaro", "tutorial", "getting-started"]
categories = ["tutorial"]
description = "Set up your first Hwaro site in minutes."
+++

Hwaro is a static site generator that compiles fast and stays simple.

## Install

```bash
brew tap hahwul/hwaro
brew install hwaro
```

Or from source:

```bash
git clone https://github.com/hahwul/hwaro.git
cd hwaro
shards install
shards build --release --no-debug --production
```

## Create a Site

```bash
hwaro init my-site
cd my-site
```

You get:

```
my-site/
├── config.toml
├── content/
│   └── index.md
├── templates/
│   ├── header.html
│   ├── footer.html
│   ├── page.html
│   └── section.html
└── static/
```

## Write Content

Add Markdown files to `content/`:

```markdown
+++
title = "My First Post"
date = "2026-03-01"
tags = ["hello"]
+++

Your words here.
```

## Build and Serve

```bash
hwaro serve
```

Open `http://localhost:3000`. Edit files — the browser reloads automatically.

When ready:

```bash
hwaro build
```

Output goes to `public/`. Deploy it anywhere that serves static files.
