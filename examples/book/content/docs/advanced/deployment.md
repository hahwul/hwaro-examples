+++
title = "Deployment"
weight = 2
tags = ["deployment"]
+++

# Deployment

After building your site, the output in `public/` is ready to deploy to any static hosting service.

## Build

```bash
hwaro build
```

This generates the complete site in the `public/` directory.

## GitHub Pages

Create a GitHub Actions workflow to build and deploy automatically:

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

Add a `netlify.toml` to your project root:

```toml
[build]
  command = "hwaro build"
  publish = "public"
```

## Vercel

Create a `vercel.json`:

```json
{
  "buildCommand": "hwaro build",
  "outputDirectory": "public"
}
```

{{ alert(type="info", message="The base_url in config.toml stays as http://localhost:3000 during development. Override it at build time with the --base-url flag or set it in your CI environment.") }}
