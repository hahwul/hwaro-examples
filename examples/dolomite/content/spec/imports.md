+++
title = "Imports and merging"
description = "Splitting configuration across files and layering it with merge."
date = "2025-05-06"
weight = 4
toc = true
+++

Configuration grows. A single file becomes a directory of environments that
share most of their values and differ in a handful. Dolomite keeps that
manageable with two features that work together: `import`, which loads another
document as a value, and `&`, which merges one record onto another.

<!-- more -->

## Importing a file

`import` reads another `.dolo` file, compiles it, and returns the result as an
ordinary value. Bind it with `let` to give it a name that is visible in the rest
of the file but is *not* emitted — `let` bindings are compile-time only.

<div class="twopane" role="group" aria-label="An import bound with let and its compiled JSON">
<figure class="pane pane-source">
<figcaption class="pane-cap"><span class="pane-ext">.dolo</span> app.dolo</figcaption>
<pre><code><span class="tok-k">let</span> <span class="tok-key">secrets</span> = <span class="tok-k">import</span> <span class="tok-s">"./secrets.dolo"</span>

<span class="tok-key">database</span> = {
  <span class="tok-key">host</span> = <span class="tok-s">"db.internal"</span>
  <span class="tok-key">password</span> = <span class="tok-key">secrets</span>.<span class="tok-key">db_password</span>
}</code></pre>
</figure>
<div class="pane-join" aria-hidden="true"><span>compiles to</span></div>
<figure class="pane pane-json">
<figcaption class="pane-cap"><span class="pane-ext">.json</span> app.json</figcaption>
<pre><code>{
  <span class="tok-jkey">"database"</span>: {
    <span class="tok-jkey">"host"</span>: <span class="tok-s">"db.internal"</span>,
    <span class="tok-jkey">"password"</span>: <span class="tok-s">"s3cr-et-ref"</span>
  }
}</code></pre>
</figure>
</div>

The `secrets` binding never appears in the output; only the field that referenced
it does. Imports are resolved relative to the importing file, and a cycle between
files is a compile error rather than a hang.

## Merging with &

The `&` operator combines two records. The right-hand record wins on any field
they both define, and the merge is deep: nested records are merged recursively
rather than replaced wholesale. This is how a base layer and an overlay become
one configuration.

<div class="twopane" role="group" aria-label="A deep merge and its compiled JSON">
<figure class="pane pane-source">
<figcaption class="pane-cap"><span class="pane-ext">.dolo</span> prod.dolo</figcaption>
<pre><code><span class="tok-k">let</span> <span class="tok-key">base</span> = <span class="tok-k">import</span> <span class="tok-s">"./base.dolo"</span>

<span class="tok-c"># base.service = { name = "api",</span>
<span class="tok-c">#   port = 8080, log = { level = "info" } }</span>
<span class="tok-key">service</span> = <span class="tok-key">base</span>.<span class="tok-key">service</span> <span class="tok-p">&</span> {
  <span class="tok-key">port</span> = <span class="tok-n">443</span>
  <span class="tok-key">log</span>.<span class="tok-key">level</span> = <span class="tok-s">"warn"</span>
}</code></pre>
</figure>
<div class="pane-join" aria-hidden="true"><span>compiles to</span></div>
<figure class="pane pane-json">
<figcaption class="pane-cap"><span class="pane-ext">.json</span> prod.json</figcaption>
<pre><code>{
  <span class="tok-jkey">"service"</span>: {
    <span class="tok-jkey">"name"</span>: <span class="tok-s">"api"</span>,
    <span class="tok-jkey">"port"</span>: <span class="tok-n">443</span>,
    <span class="tok-jkey">"log"</span>: { <span class="tok-jkey">"level"</span>: <span class="tok-s">"warn"</span> }
  }
}</code></pre>
</figure>
</div>

`name` was inherited untouched, `port` was overridden, and `log.level` was
overridden inside a nested record that neither side spelled out in full. Because
merge is deep, the overlay only names what changes.

## Merge and schemas together

A merge result can still be annotated with a schema, and it is checked *after*
merging. That ordering matters: you can lay overlays freely, and the compiler
validates the final, resolved record — so an overlay can never quietly push a
value out of the shape its schema allows.

> A useful convention is one `base.dolo` per service and one small overlay per
> environment. Each overlay is short enough to read at a glance, and the schema
> guarantees the composed result is complete and well-typed before any JSON is
> written.
