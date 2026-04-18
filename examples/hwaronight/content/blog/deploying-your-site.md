+++
title = "Deploying Your Hwaro Site"
date = "2026-01-15"
description = "Options for deploying your Hwaro static site to production."
tags = ["hwaro", "deployment", "devops"]
categories = ["guides"]
+++

# Deploying Your Hwaro Site

Once your site is built, you need to deploy it. Here are your options.

## Build First

Always start with a clean build:

```bash
hwaro build
```

This generates your site in the `public/` directory.

## GitHub Pages

Push your `public/` directory to a `gh-pages` branch:

```bash
# Using GitHub Actions (recommended)
# Add .github/workflows/deploy.yml to your repo
```

Example workflow:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install Hwaro
        run: |
          curl -sL https://github.com/hahwul/hwaro/releases/latest/download/hwaro-linux-amd64 -o hwaro
          chmod +x hwaro
      - name: Build
        run: ./hwaro build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

## Netlify

Netlify can build and deploy automatically:

1. Connect your repository
2. Set build command: `hwaro build`
3. Set publish directory: `public`

## Cloudflare Pages

Similar to Netlify:

1. Connect your repository
2. Build command: `hwaro build`
3. Build output: `public`

## Self-Hosting

Copy the `public/` directory to your server:

```bash
rsync -avz public/ user@server:/var/www/mysite/
```

All of these options work well with Hwaro's static output.
