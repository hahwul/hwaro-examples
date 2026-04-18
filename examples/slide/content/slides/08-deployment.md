+++
title = "Build & Deploy"
weight = 8
description = "Building and deploying your site"
tags = ["deploy"]
[extra]
chapter = "Deployment"
+++

# Build & Deploy

Build once, deploy anywhere.

## Build

```bash
hwaro build
```

Output goes to the `public/` directory. Plain HTML, CSS, and assets.

## Local Preview

```bash
hwaro serve
```

Starts a local server with live reload at `http://localhost:3000`.

## Deploy Options

### GitHub Pages

```yaml
- name: Build
  run: hwaro build --base-url "$SITE_URL"

- name: Deploy
  uses: actions/deploy-pages@v4
```

### Netlify / Vercel

Point the build command to `hwaro build` and the publish directory to `public/`.

### Any Static Host

Upload the `public/` directory. That is the entire deployment.
