+++
title = "Quick Start"
weight = 2
description = "Create your first project in under five minutes"
tags = ["setup", "tutorial"]
categories = ["getting-started"]
+++

# Quick Start

Get up and running with your first project in minutes.

## Create a New Project

Initialize a new project in the current directory:

```bash
acme init my-project
cd my-project
```

This creates the following structure:

```
my-project/
  config.toml       # Project configuration
  content/           # Your content files
  templates/         # HTML templates
  static/            # Static assets (CSS, JS, images)
```

## Add Content

Create your first article:

```bash
acme new docs/hello-world.md
```

Open the file and add some content:

```markdown
+++
title = "Hello World"
description = "My first article"
+++

# Hello World

This is my first article on the platform.
```

## Preview Locally

Start the development server:

```bash
acme serve
```

Open your browser and navigate to `http://localhost:3000`. You should see your new content rendered on the site.

## Build for Production

Generate the static output:

```bash
acme build
```

The compiled site will be in the `public/` directory, ready to deploy to any static hosting provider.

## Project Configuration

Open `config.toml` to customize your site:

```toml
title = "My Knowledge Base"
description = "Internal documentation for the team"
base_url = "https://wiki.example.com"
```

See the [Configuration](../configuration/) page for all available options.
