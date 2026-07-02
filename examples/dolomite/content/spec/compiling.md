+++
title = "Compiling to JSON"
description = "What dolo build does, what it guarantees, and how types disappear."
date = "2025-06-03"
weight = 5
toc = true
+++

Authoring is only half of Dolomite; the other half is the compiler, `dolo`. It
takes one or more `.dolo` files and produces JSON. This chapter describes what
that process guarantees, because those guarantees are what let you trust the
output in a pipeline.

<!-- more -->

## The build command

`dolo build` compiles a file to JSON on standard output. Point it at a file, or
pipe a document in and take the result out — it is designed to sit inside a
shell pipeline without temporary files.

```bash
# compile a file to stdout
dolo build service.dolo

# write the result next to the source
dolo build service.dolo -o service.json

# compile from stdin, useful in a pipeline
cat service.dolo | dolo build - > service.json
```

If a document fails to type-check, `dolo build` writes nothing to standard
output, prints a diagnostic to standard error, and exits non-zero. A build step
that succeeds therefore always produced valid, schema-checked JSON.

## Types erase

Everything you declared for the compiler's benefit — annotations, `schema`
blocks, `let` bindings, imports — is gone from the output. What remains is data.
This is deliberate: the consumer of a Dolomite build is any JSON reader, and it
should not need to know Dolomite existed.

<div class="twopane" role="group" aria-label="A full document and its erased JSON output">
<figure class="pane pane-source">
<figcaption class="pane-cap"><span class="pane-ext">.dolo</span> full.dolo</figcaption>
<pre><code><span class="tok-k">schema</span> <span class="tok-t">Cache</span> { <span class="tok-key">ttl</span>: <span class="tok-t">Int</span> = <span class="tok-n">60</span> }
<span class="tok-k">let</span> <span class="tok-key">region</span> = <span class="tok-s">"iad"</span>

<span class="tok-key">cache</span>: <span class="tok-t">Cache</span> = { <span class="tok-key">ttl</span> = <span class="tok-n">300</span> }
<span class="tok-key">home</span> = <span class="tok-s">"assets-${region}"</span></code></pre>
</figure>
<div class="pane-join" aria-hidden="true"><span>compiles to</span></div>
<figure class="pane pane-json">
<figcaption class="pane-cap"><span class="pane-ext">.json</span> full.json</figcaption>
<pre><code>{
  <span class="tok-jkey">"cache"</span>: { <span class="tok-jkey">"ttl"</span>: <span class="tok-n">300</span> },
  <span class="tok-jkey">"home"</span>: <span class="tok-s">"assets-iad"</span>
}</code></pre>
</figure>
</div>

## Determinism

The compiler is deterministic. Object keys are emitted in the order they were
first bound, numbers keep their written precision, and the same input always
produces byte-identical output. That makes a compiled file safe to commit: a
diff on `service.json` reflects a real change to `service.dolo`, never a
reshuffle.

By default the output is pretty-printed with two-space indentation. Pass
`--compact` for a single dense line when the destination is a machine rather than
a reviewer.

```bash
# stable, reviewable output for version control
dolo build service.dolo -o service.json

# minified output for shipping
dolo build service.dolo --compact -o service.min.json
```

## Checking without building

In continuous integration you often want the checks without the output. `dolo
check` type-checks every document it is given and reports problems, but writes no
JSON — a fast gate that fails a pull request before a bad config can merge.

```bash
# validate every document in the repo
dolo check config/**/*.dolo
```

Between `build` and `check`, the compiler covers both halves of the job: produce
trustworthy JSON for the machines that consume it, and catch mistakes for the
people who write it.
