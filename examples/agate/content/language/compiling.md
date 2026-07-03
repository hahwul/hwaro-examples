+++
title = "Compiling to Render Functions"
description = "How the indentation tree becomes an AST, and the AST becomes a plain function in your host language — the whole reason the earlier chapters can be this strict."
date = "2025-07-22"
weight = 7
toc = true
template = "chapter"
[extra]
chapter = "07"
+++

Every earlier chapter has been building toward this one. Agate is not interpreted; a `.agate` file is compiled, once, into a native function that your program calls like any other function. This chapter is about why the whitespace rules exist: they are what makes that compilation step unambiguous.

<!-- more -->

## The pipeline

`agate build` runs three passes. First, the indenter walks the source and produces a block tree directly from indentation — no bracket matching, no lookahead for a closing tag, because dedentation is the only signal a block needs. Second, the tree becomes an AST: each `if` becomes a native conditional node, each `for` a native loop node, each filter pipeline a single resolved call expression. Third, the AST is emitted as source code in your host language — a plain function, one per `def`, that takes a context argument and writes to an output buffer.

```sh
agate build templates/ -o gen/
# gen/render_card.* — one generated function per `def`,
# ready to import and call directly
```

## What "native" means here

The generated `render_card` function is not a wrapper around an interpreter — it contains an actual conditional where your template had `{% if %}`, an actual loop where it had `{% for %}`, and a direct function call where it had a filter pipeline. There is no tag name to look up at render time, no context object walked by string key, no template cache to warm. Calling the compiled function costs exactly what calling any other function in your program costs.

```
{% def render_card(product) %}
  <article class="card">
    <h2>{{ product.name }}</h2>
{% if product.on_sale %}
    <p class="sale">{{ product.price | money }}</p>
{% else %}
    <p>{{ product.price | money }}</p>
```

compiles to a function with the shape of:

```
fn render_card(product, out):
    out.write("<article class=\"card\"><h2>")
    out.write_escaped(product.name)
    out.write("</h2>")
    if product.on_sale:
        out.write("<p class=\"sale\">")
        out.write(format_money(product.price))
        out.write("</p>")
    else:
        out.write("<p>")
        out.write(format_money(product.price))
        out.write("</p>")
    out.write("</article>")
```

## Why the strictness was a prerequisite

None of this works if the compiler has to guess where a block ends. A parser that tolerates ambiguous nesting has to either reject the ambiguous cases at compile time anyway — which is what Agate does, just earlier and more consistently — or defer the decision to render time, at which point you no longer have a compiled function, you have an interpreter with extra steps. The whitespace rules in [Chapter 2](/language/whitespace/) are not a style preference layered on top of the compiler; they are the reason a compiler is possible at all.
