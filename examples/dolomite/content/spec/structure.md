+++
title = "Records and lists"
description = "Nesting with records, sequences with lists, and dotted shorthand."
date = "2025-03-04"
weight = 2
toc = true
+++

Scalars describe single facts. Real configuration is shaped: a server has an
address and a pool of connections, a pipeline has an ordered list of steps.
Dolomite builds that shape from two constructs — records and lists — and both
compile to their obvious JSON counterparts.

<!-- more -->

## Records

A record is a brace-delimited group of bindings. Records nest to any depth, and a
nested record compiles to a nested object. Bindings inside a record are separated
by newlines; a comma is accepted but never required.

<div class="twopane" role="group" aria-label="A nested record and its compiled JSON">
<figure class="pane pane-source">
<figcaption class="pane-cap"><span class="pane-ext">.dolo</span> server.dolo</figcaption>
<pre><code><span class="tok-key">server</span> = {
  <span class="tok-key">host</span> = <span class="tok-s">"0.0.0.0"</span>
  <span class="tok-key">port</span> = <span class="tok-n">8080</span>
  <span class="tok-key">pool</span> = {
    <span class="tok-key">min</span> = <span class="tok-n">2</span>
    <span class="tok-key">max</span> = <span class="tok-n">16</span>
  }
}</code></pre>
</figure>
<div class="pane-join" aria-hidden="true"><span>compiles to</span></div>
<figure class="pane pane-json">
<figcaption class="pane-cap"><span class="pane-ext">.json</span> server.json</figcaption>
<pre><code>{
  <span class="tok-jkey">"server"</span>: {
    <span class="tok-jkey">"host"</span>: <span class="tok-s">"0.0.0.0"</span>,
    <span class="tok-jkey">"port"</span>: <span class="tok-n">8080</span>,
    <span class="tok-jkey">"pool"</span>: {
      <span class="tok-jkey">"min"</span>: <span class="tok-n">2</span>,
      <span class="tok-jkey">"max"</span>: <span class="tok-n">16</span>
    }
  }
}</code></pre>
</figure>
</div>

## Dotted keys

Deep nesting for a single value is tedious, so a binding key may use dots. A
dotted key creates the intermediate records for you, and two dotted keys that
share a prefix merge into one record. The result is identical to writing the
braces out by hand.

<div class="twopane" role="group" aria-label="Dotted keys and their compiled JSON">
<figure class="pane pane-source">
<figcaption class="pane-cap"><span class="pane-ext">.dolo</span> limits.dolo</figcaption>
<pre><code><span class="tok-key">limits</span>.<span class="tok-key">cpu</span>    = <span class="tok-s">"500m"</span>
<span class="tok-key">limits</span>.<span class="tok-key">memory</span> = <span class="tok-s">"256Mi"</span>
<span class="tok-key">probe</span>.<span class="tok-key">path</span>    = <span class="tok-s">"/healthz"</span></code></pre>
</figure>
<div class="pane-join" aria-hidden="true"><span>compiles to</span></div>
<figure class="pane pane-json">
<figcaption class="pane-cap"><span class="pane-ext">.json</span> limits.json</figcaption>
<pre><code>{
  <span class="tok-jkey">"limits"</span>: {
    <span class="tok-jkey">"cpu"</span>: <span class="tok-s">"500m"</span>,
    <span class="tok-jkey">"memory"</span>: <span class="tok-s">"256Mi"</span>
  },
  <span class="tok-jkey">"probe"</span>: { <span class="tok-jkey">"path"</span>: <span class="tok-s">"/healthz"</span> }
}</code></pre>
</figure>
</div>

## Lists

A list is a comma- or newline-separated sequence in square brackets. Lists may
hold scalars, records, or other lists, and they compile straight to JSON arrays.
Order is preserved exactly as written.

<div class="twopane" role="group" aria-label="A list of records and its compiled JSON">
<figure class="pane pane-source">
<figcaption class="pane-cap"><span class="pane-ext">.dolo</span> routes.dolo</figcaption>
<pre><code><span class="tok-key">regions</span> = [<span class="tok-s">"iad"</span>, <span class="tok-s">"sjc"</span>, <span class="tok-s">"fra"</span>]

<span class="tok-key">routes</span> = [
  { <span class="tok-key">path</span> = <span class="tok-s">"/"</span>,   <span class="tok-key">to</span> = <span class="tok-s">"web"</span> }
  { <span class="tok-key">path</span> = <span class="tok-s">"/api"</span>, <span class="tok-key">to</span> = <span class="tok-s">"api"</span> }
]</code></pre>
</figure>
<div class="pane-join" aria-hidden="true"><span>compiles to</span></div>
<figure class="pane pane-json">
<figcaption class="pane-cap"><span class="pane-ext">.json</span> routes.json</figcaption>
<pre><code>{
  <span class="tok-jkey">"regions"</span>: [<span class="tok-s">"iad"</span>, <span class="tok-s">"sjc"</span>, <span class="tok-s">"fra"</span>],
  <span class="tok-jkey">"routes"</span>: [
    { <span class="tok-jkey">"path"</span>: <span class="tok-s">"/"</span>, <span class="tok-jkey">"to"</span>: <span class="tok-s">"web"</span> },
    { <span class="tok-jkey">"path"</span>: <span class="tok-s">"/api"</span>, <span class="tok-jkey">"to"</span>: <span class="tok-s">"api"</span> }
  ]
}</code></pre>
</figure>
</div>

Trailing commas are always allowed and never emitted. You can leave one at the
end of a list while you edit and let the formatter clean up, or omit them
entirely and rely on newlines — both parse to the same array.
