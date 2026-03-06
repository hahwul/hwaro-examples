+++
title = "Getting Started with Hwaro"
date = "2026-03-05"
tags = ["hwaro", "tutorial", "getting-started"]
categories = ["tutorial"]
+++

Hwaro is a fast and lightweight static site generator written in Crystal. Here's how to get started with your new blog.

## Installation

Install Hwaro using Homebrew:

```bash
brew tap hahwul/hwaro
brew install hwaro
```

## Create a New Site

```bash
hwaro init my-site
cd my-site
```

## Start the Dev Server

```bash
hwaro serve
```

Open your browser to `http://localhost:3000/` and you're ready to go!

## Creating Content

Add new posts by creating `.md` files in the `content/posts/` directory:

```markdown
+++
title = "My New Post"
date = "2026-03-06"
tags = ["blog"]
+++

Your content here.
```

## Building for Production

```bash
hwaro build
```

The generated site will be in the `public/` directory, ready to deploy anywhere.
