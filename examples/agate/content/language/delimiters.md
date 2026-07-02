+++
title = "Delimiters and Tags"
description = "The three delimiter pairs Agate recognizes, and the anatomy of a minimal template file."
date = "2025-01-14"
weight = 1
toc = true
template = "chapter"
[extra]
chapter = "01"
+++

An Agate file is plain text until the compiler meets one of three delimiter pairs. Everything outside them is copied to the output byte for byte; everything inside is grammar. There is no fourth kind, and none of the three can be redefined per project — a `.agate` file looks the same in every codebase that has one.

<!-- more -->

## The three delimiters

`{{ expr }}` is an **expression**. It evaluates `expr` and writes the result to the output, HTML-escaped by default. `{% tag %}` is a **statement** — control flow, variable binding, or a structural directive like `import` and `extends`. `{# comment #}` is dropped entirely at compile time; it never reaches the generated function and costs nothing at render time.

```
{{ user.name }}
{% if user.active %}
  {{ user.name }} is signed in.
{# TODO: show last-login once the audit log ships #}
```

## A minimal file

A complete, compilable Agate template can be four lines long. This one renders a product card:

```
{% def render_card(product) %}
  <article class="card">
    <h2>{{ product.name }}</h2>
    <p>{{ product.price | money }}</p>
```

`def` opens a block the same way `if` and `for` do — by indentation, covered fully in [Whitespace and Indentation](/language/whitespace/). The function this compiles to is named `render_card`, takes one argument, and is callable from your host language exactly like any other function; see [Compiling to Render Functions](/language/compiling/) for what the generated code actually looks like.

## Escaping

`{{ }}` escapes by default because most expressions end up in HTML and most authors forget to ask for escaping when they need it. To opt out — for a trusted fragment of markup, say — pipe the expression through the `raw` filter: `{{ snippet | raw }}`. Filters are their own chapter; what matters here is that escaping is a property of the expression delimiter, not something you configure per project.
