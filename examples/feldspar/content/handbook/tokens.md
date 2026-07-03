+++
title = "The Token Model"
description = "How base, semantic, and component tokens layer so one change ripples predictably through every utility."
weight = 20
date = "2026-04-18"
toc = true
[extra]
stage = "concepts"
+++

Everything Feldspar emits derives from tokens, and tokens are arranged in three
layers. Understanding the layering is the difference between a system that bends
gracefully and one that fights you.

<!-- more -->

## Three layers, one direction

Tokens resolve in one direction only: **base → semantic → component**. A base
token is a raw value. A semantic token gives that value a role. A component
token binds a role to a specific piece of interface. Higher layers may
reference lower ones; the reverse is forbidden, which is what keeps the graph
acyclic and the output predictable.

```toml
# base — raw values, no meaning yet
[scale.color]
magenta-600 = "#a21caf"
plum-050    = "#f5eef6"

# semantic — values acquire a role
[color]
accent  = "{color.magenta-600}"
surface = "{color.plum-050}"

# component — a role bound to one place
[component.button]
bg = "{accent}"
```

Change `magenta-600` once and the accent, the surface, the button, and every
utility downstream recompiles against the new value. Nothing is duplicated, so
nothing can drift out of sync.

## Overriding a layer

Because resolution flows in one direction, a theme is just a partial override
of a layer. Swap the semantic layer and the base palette stays put while every
role points somewhere new:

```toml
[theme.dusk.color]
accent  = "{color.magenta-600}"
surface = "{color.slate-900}"
```

Feldspar compiles one sheet per theme and scopes it under a data attribute, so
the whole cascade is a matter of a class on `<html>`.

## Tokens become utilities

Each numbered entry in a scale becomes the suffix of a utility. The
`scale.space` entry `3` produces `.p-3`, `.m-3`, `.gap-3`, and the rest of the
spacing family. Here is one of them, compiled from the token you saw on the
previous page. The specimen bar shows the magnitude of the space value itself.

<div class="util">
<h3 class="util-h" id="gap-3"><code>.gap-3</code> <span class="spec"><span class="spec-bar"><i class="s-3"></i></span></span></h3>
<p class="util-note">One step of gap between flex or grid children, resolved from <code>scale.space.3</code>.</p>
<div class="util-demo">
<pre class="util-code"><code>.gap-3 {
  gap: 1rem;
}</code></pre>
<div class="util-result"><div class="row gap-3"><span class="demo-dot"></span><span class="demo-dot"></span><span class="demo-dot"></span></div></div>
</div>
</div>

Because the utility is generated, not authored, it can never disagree with its
token. That guarantee is the whole point of the layered model: the scale is the
single place a value is ever written down.
