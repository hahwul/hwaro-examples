+++
title = "Deploying to a CDN"
description = "Application note G3 — output stage. Ship the static build to GitHub Pages, Cloudflare Pages, or any plain file host."
weight = 3
date = "2026-05-11"
+++

A built Hwaro site is just static files. Any host that can serve them will do.

## GitHub Pages

```yaml
- name: Build
  run: hwaro build --minify --base-url "${{ env.PAGES_URL }}"
- name: Upload
  uses: actions/upload-pages-artifact@v3
  with:
    path: public
- name: Deploy
  uses: actions/deploy-pages@v4
```

## Cloudflare Pages

In the Pages project settings, set the build command to `hwaro build --minify` and the output directory to `public`. Set `BASE_URL` as an environment variable and pass `--base-url $BASE_URL`.

## A small Bash script

```sh
hwaro build --minify --base-url https://example.com
rsync -a --delete public/ user@host:/var/www/example/
```

There is no special deployment mode. There is no required runtime. The output of `hwaro build` is exactly what gets served.
