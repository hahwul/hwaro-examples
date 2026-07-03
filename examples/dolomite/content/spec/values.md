+++
title = "Values and bindings"
description = "Scalars, bindings, and the fact that every document is already a record."
date = "2025-02-11"
weight = 1
toc = true
+++

A Dolomite document is a set of bindings. Each binding gives a name a value with
`name = value`, and the document as a whole compiles to a JSON object whose keys
are those names. There is no top-level array, no bare scalar, and no wrapper you
have to remember — the file *is* the object.

<!-- more -->

## Scalars

Dolomite has five scalar kinds, and each maps to the JSON value you would
expect: strings, integers, floats, booleans, and null. Integers and floats are
distinct while you author, which lets a schema demand one or the other, but both
land in JSON as numbers.

<div class="twopane" role="group" aria-label="Scalar bindings and their compiled JSON">
<figure class="pane pane-source">
<figcaption class="pane-cap"><span class="pane-ext">.dolo</span> scalars.dolo</figcaption>
<pre><code><span class="tok-key">name</span>    = <span class="tok-s">"checkout"</span>
<span class="tok-key">port</span>    = <span class="tok-n">8080</span>
<span class="tok-key">timeout</span> = <span class="tok-n">2.5</span>
<span class="tok-key">debug</span>   = <span class="tok-n">false</span>
<span class="tok-key">notes</span>   = <span class="tok-n">null</span></code></pre>
</figure>
<div class="pane-join" aria-hidden="true"><span>compiles to</span></div>
<figure class="pane pane-json">
<figcaption class="pane-cap"><span class="pane-ext">.json</span> scalars.json</figcaption>
<pre><code>{
  <span class="tok-jkey">"name"</span>: <span class="tok-s">"checkout"</span>,
  <span class="tok-jkey">"port"</span>: <span class="tok-n">8080</span>,
  <span class="tok-jkey">"timeout"</span>: <span class="tok-n">2.5</span>,
  <span class="tok-jkey">"debug"</span>: <span class="tok-n">false</span>,
  <span class="tok-jkey">"notes"</span>: <span class="tok-n">null</span>
}</code></pre>
</figure>
</div>

Whitespace around `=` is insignificant, so aligning values into a column is a
matter of taste. The compiler never depends on it.

## Comments

Comments begin with `#` and run to the end of the line. They are stripped during
compilation; JSON has no place to keep them. If a value needs to carry a note
into the output, make the note a field.

## Strings

Ordinary strings are double-quoted. A string may interpolate other bindings with
`${...}`, which is resolved before the value is written — the JSON contains the
finished text, never the template.

<div class="twopane" role="group" aria-label="String interpolation and its compiled JSON">
<figure class="pane pane-source">
<figcaption class="pane-cap"><span class="pane-ext">.dolo</span> strings.dolo</figcaption>
<pre><code><span class="tok-key">env</span>    = <span class="tok-s">"prod"</span>
<span class="tok-key">bucket</span> = <span class="tok-s">"assets-${env}"</span>
<span class="tok-key">motd</span>   = <span class="tok-s">"""
  Welcome to the ${env} cluster.
  Reads are cached; writes are not.
"""</span></code></pre>
</figure>
<div class="pane-join" aria-hidden="true"><span>compiles to</span></div>
<figure class="pane pane-json">
<figcaption class="pane-cap"><span class="pane-ext">.json</span> strings.json</figcaption>
<pre><code>{
  <span class="tok-jkey">"env"</span>: <span class="tok-s">"prod"</span>,
  <span class="tok-jkey">"bucket"</span>: <span class="tok-s">"assets-prod"</span>,
  <span class="tok-jkey">"motd"</span>: <span class="tok-s">"Welcome to the prod cluster.\nReads are cached; writes are not."</span>
}</code></pre>
</figure>
</div>

Triple-quoted strings span lines and have their common leading indentation
removed, so a block of text can sit at the indent level of its binding and still
compile to a clean value. Interpolation works the same in both forms.

## Bindings are unique

A name may be bound once per record. Rebinding the same name in the same scope is
a compile error rather than a silent last-writer-wins, because configuration that
quietly overwrites itself is the exact failure Dolomite exists to prevent. To
change an inherited value, use the merge operator described in
[Imports and merging](@/spec/imports.md); to choose between values, make the choice
explicit with a binding.
