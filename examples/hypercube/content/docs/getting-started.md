+++
title = "Getting Started"
description = "Installation, setup, and your first steps into the Hypercube framework"
date = "2026-03-10"
weight = 1
tags = ["guide", "basics"]
+++

# Getting Started

This guide walks you through the initial setup of the Hypercube documentation framework, from installation to rendering your first page.

## Prerequisites

Before proceeding, ensure your environment meets the following requirements:

- A POSIX-compatible operating system (Linux, macOS, BSD)
- A terminal emulator with UTF-8 support
- Git 2.30 or later
- A text editor with TOML syntax support

## Installation

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/example/hypercube.git
cd hypercube
```

Install the static site generator:

```bash
brew tap hahwul/hwaro
brew install hwaro
```

Verify the installation:

```bash
hwaro --version
```

## Project Structure

A Hypercube documentation site follows a strict directory layout:

```
hypercube/
  config.toml        # Site configuration
  content/
    index.md         # Landing page
    docs/
      _index.md      # Section root
      page-one.md    # Documentation page
  templates/         # HTML templates
  static/
    css/style.css    # Stylesheet
```

Each content file uses TOML front matter between `+++` delimiters, followed by Markdown body text.

## Configuration

The `config.toml` file defines global site parameters:

```toml
title = "My Documentation"
description = "Technical reference for the project"
base_url = "http://localhost:3000"

[plugins]
processors = ["markdown"]

[highlight]
enabled = true
theme = "monokai"
use_cdn = true
```

## Creating Your First Page

Create a new documentation page:

```bash
hwaro new content/docs/my-first-page.md -t "My First Page"
```

Edit the generated file, add your content below the front matter, then preview:

```bash
hwaro serve --open
```

The development server starts at `http://localhost:3000` with live reload enabled.

## Dimensional Navigation

Content in Hypercube is organized along multiple axes. Use the `weight` field in front matter to control ordering within a section, and `tags` to create cross-cutting navigation paths.

```toml
+++
title = "Page Title"
weight = 3
tags = ["api", "reference"]
+++
```

## Next Steps

With the basics in place, proceed to [Dimensional Theory](/docs/dimensional-theory/) to understand the architectural principles, or jump directly to the [API Reference](/docs/api-reference/) for interface documentation.
