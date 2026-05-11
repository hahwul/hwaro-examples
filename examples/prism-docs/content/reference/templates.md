+++
title = "Templates Reference"
+++

Reference for creating and utilizing Liquid-style HTML templates in Hwaro.

## Core Templates

Every Hwaro project relies on a standard set of templates located in the `templates/` directory.

### `base.html`
The foundational layout for the site. Typically contains the main `<html>`, `<head>`, and `<body>` structure, including standard headers and footers. Other templates will extend this layout.

### `index.html`
The template responsible for rendering the homepage. This usually pulls in a list of recent posts or featured content.

### `page.html`
Used for rendering single content pages, such as an "About" page or a standard article. It has access to the `page` variable containing the title, content, and front matter.

## Variables and Filters

Hwaro templates expose several variables to display your content effectively:

* `{{ site.title }}`: The global title defined in `config.toml`.
* `{{ base_url }}`: The base URL of the site, which must be prepended to internal links.
* `{{ page.title }}`: The title of the current page.
* `{{ content | safe }}`: The rendered markdown content. Always pipe content through `safe` to prevent HTML escaping.

## Inclusion

To keep your templates modular, use the `include` tag for repeating elements like navigation bars and footers:

```html
{% include "header.html" %}
<!-- Main page content -->
{% include "footer.html" %}
```
