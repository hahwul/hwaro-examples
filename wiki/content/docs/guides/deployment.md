+++
title = "Deployment"
weight = 3
description = "Deploy your wiki to production hosting"
tags = ["deployment", "hosting"]
categories = ["guides"]
+++

# Deployment

The wiki builds to static HTML files that can be hosted anywhere. This guide covers several common deployment targets.

## Build for Production

```bash
acme build --base-url "https://wiki.example.com"
```

The output goes to the `public/` directory.

## GitHub Pages

Add a GitHub Actions workflow to deploy automatically on push:

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
      - name: Build
        run: acme build --base-url "https://user.github.io/repo"
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

## Netlify

Create a `netlify.toml` in the project root:

```toml
[build]
  command = "acme build"
  publish = "public"

[build.environment]
  ACME_BASE_URL = "https://wiki.example.com"
```

Connect the repository to Netlify and it will build and deploy on every push.

## Cloudflare Pages

1. Connect your repository in the Cloudflare dashboard
2. Set the build command to `acme build`
3. Set the output directory to `public`
4. Add the `ACME_BASE_URL` environment variable

## Docker

Serve the built site with any static file server:

```dockerfile
FROM nginx:alpine
COPY public/ /usr/share/nginx/html/
```

Build and run:

```bash
acme build
docker build -t wiki .
docker run -p 8080:80 wiki
```

## Custom Domain

After deploying, configure your DNS to point to the hosting provider. Most providers support automatic HTTPS via Let's Encrypt.

| Provider | DNS Record |
|----------|-----------|
| GitHub Pages | CNAME to `user.github.io` |
| Netlify | CNAME to `site.netlify.app` |
| Cloudflare | Managed automatically |
