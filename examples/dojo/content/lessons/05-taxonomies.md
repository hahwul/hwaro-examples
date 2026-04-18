+++
title = "Taxonomies and Organization"
description = "Organize your content with tags, categories, and custom taxonomies."
date = "2026-03-05"
weight = 5
template = "lesson"
tags = ["taxonomies", "organization"]
difficulty = "intermediate"
duration = "15 min"
step = "5"
+++

## What are Taxonomies?

Taxonomies are classification systems for your content. The most common examples are tags and categories, but Hwaro lets you define any taxonomy you need.

Think of taxonomies as labels you attach to content. Hwaro then automatically generates listing pages for each label.

## Defining Taxonomies

Define taxonomies in `config.toml`:

```toml
[[taxonomies]]
name = "tags"
feed = true

[[taxonomies]]
name = "categories"
paginate_by = 5

[[taxonomies]]
name = "authors"
```

Each taxonomy gets:

- A listing page at `/<taxonomy>/` showing all terms
- Individual term pages at `/<taxonomy>/<term>/` showing matching content

## Using Taxonomies in Content

Assign taxonomy terms in front matter:

```toml
+++
title = "Building a Blog with Hwaro"
tags = ["tutorial", "blog", "getting-started"]
categories = ["guides"]
authors = ["Jane Doe"]
+++
```

## Taxonomy Templates

Two templates control how taxonomies are displayed:

### taxonomy.html

Lists all terms in a taxonomy (e.g., all tags):

```html
<h1>{{ page.title }}</h1>
<ul>
  {% for term in taxonomy.terms %}
    <li>
      <a href="{{ term.url }}">{{ term.name }}</a>
      <span>({{ term.pages | length }})</span>
    </li>
  {% endfor %}
</ul>
```

### taxonomy_term.html

Lists all pages for a specific term (e.g., all posts tagged "tutorial"):

```html
<h1>{{ page.title }}</h1>
{% for post in taxonomy_term.pages %}
  <article>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <time>{{ post.date }}</time>
  </article>
{% endfor %}
```

## Taxonomy Feeds

Enable feeds per taxonomy to generate RSS or Atom feeds for each term:

```toml
[[taxonomies]]
name = "tags"
feed = true
```

This creates feeds like `/tags/tutorial/rss.xml` so readers can subscribe to specific topics.

## Practical Example

Here is a complete setup for a blog with tags and categories:

**config.toml:**

```toml
[[taxonomies]]
name = "tags"
feed = true

[[taxonomies]]
name = "categories"
```

**content/posts/my-post.md:**

```toml
+++
title = "Getting Started with Hwaro"
tags = ["hwaro", "tutorial"]
categories = ["guides"]
+++
```

**Generated pages:**

- `/tags/` -- list of all tags
- `/tags/hwaro/` -- all posts tagged "hwaro"
- `/tags/tutorial/` -- all posts tagged "tutorial"
- `/categories/` -- list of all categories
- `/categories/guides/` -- all posts in "guides"

## Key Takeaways

- Define taxonomies in `config.toml` with `[[taxonomies]]`
- Assign terms in content front matter as arrays
- Hwaro generates listing pages automatically
- Use `taxonomy.html` and `taxonomy_term.html` templates
- Enable `feed = true` for per-term RSS feeds
