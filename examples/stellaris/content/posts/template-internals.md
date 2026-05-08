+++
title = "Template Internals"
date = "2025-09-15"
tags = ["templates", "internals"]
categories = ["docs"]
description = "How the Stellaris template assembles a page from partials."
+++

Every page in Stellaris is built from three files: `header.html`, the layout that matches the page kind, and `footer.html`. The header and footer are included with Tera's `include` tag, which means they share the surrounding template's context. Variables defined in `config.toml` are available everywhere; per-page variables come from the markdown front matter.

The `page.html` layout handles single pages. It exposes the rendered markdown body through `{{ content }}`, the front matter as `{{ page.title }}`, `{{ page.description }}`, and so on, and the taxonomy lists as `{{ page.tags }}` and `{{ page.categories }}`. The layout escapes the title with `| e` to prevent broken markup when titles contain HTML characters.

The `section.html` layout renders index pages for directories. It receives a `section` object with a `pages` array sorted by date descending. The default template iterates the array and prints a link for each entry. A custom section template can sort by title, group by year, or filter by tag, all with standard Tera syntax.

The `taxonomy.html` and `taxonomy_term.html` files cover the tag and category listings. The first lists every term in a taxonomy; the second lists every page assigned to a specific term. Both follow the same pattern: a heading, a list, and a return link.

The `404.html` page is rendered to `public/404.html` and served by most static hosts when no other page matches the request URL. The return link uses `{{ base_url }}` so it works under any deployment prefix.
