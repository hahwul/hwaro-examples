+++
title = "Includes, Blocks, and Inheritance"
description = "import for reusable fragments, and extends/block for layout inheritance — both resolved at compile time, not render time."
date = "2025-06-02"
weight = 6
toc = true
template = "chapter"
[extra]
chapter = "06"
+++

Two mechanisms let one `.agate` file reuse another: `import`, for a fragment you call like a function, and `extends`, for a layout you fill in. Both are resolved when the project compiles, so a broken reference is a build failure, never a blank patch of missing markup in production.

<!-- more -->

## import

`import` brings a file's `def`s into scope under a named alias:

```
{% import "partials/nav.agate" as nav %}
{% def render_page(user) %}
  {{ nav.render_primary(user) }}
  <main>
    Welcome back, {{ user.name }}.
```

`nav.render_primary` is a normal function call by the time this compiles — there is no template-engine indirection left at render time, just one generated function calling another.

## extends and block

`extends` names a parent template; `block` marks a region the parent leaves open for children to fill. A block's body is delimited the same way every other block is — by indentation — and a child overrides it by re-declaring a block of the same name at column zero:

```
{% extends "layouts/base.agate" %}

{% block title %}
  Quarterly Report — {{ report.period }}

{% block content %}
  {% for section in report.sections %}
    {{ section.heading }}
    {{ section.body }}
```

The parent supplies everything outside its named blocks — the `<head>`, the navigation, the footer — and the child supplies only what's different about this one page. A parent block with no matching override in the child renders the parent's own body, so a layout can ship sensible defaults for `title` while still requiring `content`.

## Compile-time resolution

Because both `import` and `extends` are resolved during compilation, a chain of three or four layouts costs nothing at render time — the compiler flattens the inheritance into one function per leaf template before it ever runs. Renaming a block that no child overrides, or that no parent declares, is caught the same way a typo in a variable name is: before the build finishes, not the first time a user hits that code path.
