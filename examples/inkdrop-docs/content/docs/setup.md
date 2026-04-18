---
title: Setup
description: How to set up your project with Inkdrop.
---

# Setup Guide

Follow these steps to get your documentation site up and running with the Inkdrop aesthetic.

## 1. Installation

Initialize your project with the `inkdrop-docs` scaffold:

```bash
hwaro init my-docs --scaffold inkdrop-docs
```

## 2. Configuration

Edit your `config.toml` to customize your site:

```toml
title = "My Docs"
[extra]
accent_color = "#3a86ff"
```

## 3. Writing Content

Add your markdown files to the `content/docs` directory. Hwaro will automatically generate the documentation structure.
