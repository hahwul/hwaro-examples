+++
title = "Getting Started with Hwaro"
date = "2026-02-20"
description = "A quick guide to building your first static site with Hwaro"
tags = ["hwaro", "tutorial", "getting-started"]
categories = ["tutorials"]
+++

## Introduction

[Hwaro](https://github.com/hahwul/hwaro) is a fast and lightweight static site generator written in Crystal. In this post, we'll walk through the basics of setting up your first Hwaro site.

## Installation

You can install Hwaro via Homebrew:

```bash
brew tap hahwul/hwaro
brew install hwaro
```

Or build from source:

```bash
git clone https://github.com/hahwul/hwaro.git
cd hwaro
shards install
shards build --release
```

## Creating a New Site

Initialize a new site with a single command:

```bash
hwaro init my-site
cd my-site
```

This creates the standard directory structure:

```
my-site/
├── config.toml
├── content/
│   ├── index.md
│   └── about.md
├── templates/
│   ├── header.html
│   ├── footer.html
│   ├── page.html
│   └── section.html
└── static/
```

## Development Server

Start the development server with live reload:

```bash
hwaro serve
```

Your site will be available at `http://localhost:3000`. Any changes to content or templates will automatically trigger a rebuild.

## Building for Production

When you're ready to deploy:

```bash
hwaro build
```

The generated site will be in the `public/` directory, ready to be deployed to any static hosting service.

---

*Happy building!*
