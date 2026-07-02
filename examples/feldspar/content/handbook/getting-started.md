+++
title = "Getting Started"
description = "Install the compiler, declare a handful of tokens, and emit your first utility sheet."
weight = 10
date = "2026-04-02"
toc = true
[extra]
stage = "start here"
+++

Feldspar is a single binary. It reads a token file and your templates, then
writes a stylesheet containing exactly the utilities your markup references.
There is no runtime and no client-side step — the output is plain CSS you can
serve from anywhere.

<!-- more -->

## Install

The compiler ships as a self-contained executable for macOS, Linux, and
Windows. Grab it from your package manager of choice, or drop the binary on
your `PATH`:

```bash
# homebrew
brew install orthoclase/tap/feldspar

# or with the install script
curl -fsSL https://get.feldspar.style | sh

feldspar --version
# feldspar 3.2.0
```

## Declare your tokens

Every Feldspar project begins with a `feldspar.toml`. Tokens are grouped into
scales; each entry becomes the tail of a utility class. The smallest useful
config is a spacing scale, a radius scale, and one colour:

```toml
[scale.space]
1 = "0.25rem"
2 = "0.5rem"
3 = "1rem"
4 = "1.5rem"

[scale.radius]
2 = "0.5rem"
3 = "0.875rem"

[color]
accent = "#a21caf"
surface = "#f5eef6"
```

## Compile

Point the compiler at your templates and an output file. Feldspar scans the
markup, keeps the utilities it finds, and drops everything else:

```bash
feldspar build --content "src/**/*.html" --out public/utilities.css
```

Add `--watch` during development and the sheet recompiles on every save,
usually in under ten milliseconds. The result is deterministic: the same
tokens and the same markup always produce byte-identical output, which makes
the file a friend to caching and to code review alike.

## Your first utility

Reference a class in your markup and it appears in the output. Here is the very
first one most people reach for — a rounded surface. The chip beside the
heading is that utility, compiled and rendered right here in the docs.

<div class="util">
<h3 class="util-h" id="rounded-3"><code>.rounded-3</code> <span class="spec"><span class="spec-tile bg-accent rounded-3"></span></span></h3>
<p class="util-note">A medium corner radius, pulled straight from <code>scale.radius.3</code>.</p>
<div class="util-demo">
<pre class="util-code"><code>.rounded-3 {
  border-radius: 0.875rem;
}</code></pre>
<div class="util-result"><div class="demo-box rounded-3"></div></div>
</div>
</div>

That is the entire loop: add a token, reference a class, compile. The rest of
this handbook is a tour of the families Feldspar knows how to emit, and how to
combine them.
