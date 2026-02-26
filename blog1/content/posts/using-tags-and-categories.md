+++
title = "Organizing Content with Tags and Categories"
date = "2025-03-05"
tags = ["hwaro", "tutorial", "taxonomy"]
categories = ["guides"]
description = "How to use taxonomies to organize your content"
+++

Tags and categories help readers find related content. Hwaro makes it easy to set up taxonomies.

<!-- more -->

## Adding Tags

Simply add a `tags` array in your front matter:

```toml
+++
title = "My Post"
tags = ["crystal", "web"]
+++
```

Each tag automatically gets its own listing page at `/tags/<tag-name>/`.

## Categories

Categories work the same way:

```toml
categories = ["tutorials"]
```

Browse all categories at [/categories/](/categories/).

## Custom Taxonomies

You can define any taxonomy in `config.toml`:

```toml
[[taxonomies]]
name = "authors"
```

Then use `authors = ["Alice"]` in your front matter.

{{< alert type="info" message="Taxonomy feeds can be enabled per-taxonomy with <code>feed = true</code>." >}}
