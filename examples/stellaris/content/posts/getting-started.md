+++
title = "Getting Started with Stellaris"
date = "2025-08-22"
tags = ["guide", "setup"]
categories = ["docs"]
description = "First steps for building a Hwaro site with the Stellaris template."
+++

Stellaris is a minimal template that ships with Hwaro. It assumes a familiar layout: a content directory at the project root, a templates directory for layouts, and a config.toml file that wires the two together. The defaults are kept small on purpose so that customization happens by adding pieces rather than removing them.

A new project starts with two files in `content/`: `index.md` and `about.md`. The index page is rendered by `templates/section.html`, and any other markdown file falls through to `templates/page.html`. To create a third page, drop a markdown file with a `+++` TOML front matter block at the top. The `title` field is required; everything else is optional and will be exposed to the template through the `page` object.

Build with `hwaro build`. The output goes to `public/` by default. For local development, `hwaro serve` starts a small HTTP server on port 1313 and watches the content and template directories for changes. Changes to `config.toml` require a manual restart.

When deploying to a sub-path, set `base_url` in `config.toml` to the full URL including the prefix, for example `https://example.com/stellaris`. Templates reference `{{ base_url }}` in every internal link, so updating the config is enough to relocate the site.

The taxonomy and category pages are generated automatically from the front matter of every page. Add `tags = ["one", "two"]` to any page and the tag listing will pick it up on the next build. There is nothing else to configure.
