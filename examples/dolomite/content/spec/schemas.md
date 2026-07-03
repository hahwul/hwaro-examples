+++
title = "Types and schemas"
description = "Annotations, schema blocks, defaults, and the errors they catch."
date = "2025-04-08"
weight = 3
toc = true
+++

Everything so far compiles to JSON, but so does JSON. The reason to write
Dolomite is this chapter: you can declare the shape a value must have, and the
compiler refuses to produce output that violates it. A typo becomes a build
failure instead of a production incident.

<!-- more -->

## Annotations

Any binding may carry a type after a colon. The built-in types are `Str`, `Int`,
`Float`, `Bool`, `Null`, `List`, and `Record`. An annotation is checked and then
erased — types never appear in the JSON.

<div class="twopane" role="group" aria-label="A typed binding and its compiled JSON">
<figure class="pane pane-source">
<figcaption class="pane-cap"><span class="pane-ext">.dolo</span> typed.dolo</figcaption>
<pre><code><span class="tok-key">port</span>: <span class="tok-t">Int</span>  = <span class="tok-n">8080</span>
<span class="tok-key">host</span>: <span class="tok-t">Str</span>  = <span class="tok-s">"0.0.0.0"</span>
<span class="tok-key">tls</span>:  <span class="tok-t">Bool</span> = <span class="tok-n">true</span></code></pre>
</figure>
<div class="pane-join" aria-hidden="true"><span>compiles to</span></div>
<figure class="pane pane-json">
<figcaption class="pane-cap"><span class="pane-ext">.json</span> typed.json</figcaption>
<pre><code>{
  <span class="tok-jkey">"port"</span>: <span class="tok-n">8080</span>,
  <span class="tok-jkey">"host"</span>: <span class="tok-s">"0.0.0.0"</span>,
  <span class="tok-jkey">"tls"</span>: <span class="tok-n">true</span>
}</code></pre>
</figure>
</div>

## Schema blocks

A `schema` names a record shape once so it can be reused. Fields may be required
(a bare `name: Type`) or carry a default (`name: Type = value`). When a value is
annotated with a schema, the compiler fills in missing defaults and rejects
unknown or ill-typed fields.

<div class="twopane" role="group" aria-label="A schema with defaults and its compiled JSON">
<figure class="pane pane-source">
<figcaption class="pane-cap"><span class="pane-ext">.dolo</span> service.dolo</figcaption>
<pre><code><span class="tok-k">schema</span> <span class="tok-t">Service</span> {
  <span class="tok-key">name</span>:     <span class="tok-t">Str</span>
  <span class="tok-key">port</span>:     <span class="tok-t">Int</span>  = <span class="tok-n">8080</span>
  <span class="tok-key">replicas</span>: <span class="tok-t">Int</span>  = <span class="tok-n">1</span>
}

<span class="tok-key">checkout</span>: <span class="tok-t">Service</span> = {
  <span class="tok-key">name</span>     = <span class="tok-s">"checkout"</span>
  <span class="tok-key">replicas</span> = <span class="tok-n">4</span>
}</code></pre>
</figure>
<div class="pane-join" aria-hidden="true"><span>compiles to</span></div>
<figure class="pane pane-json">
<figcaption class="pane-cap"><span class="pane-ext">.json</span> service.json</figcaption>
<pre><code>{
  <span class="tok-jkey">"checkout"</span>: {
    <span class="tok-jkey">"name"</span>: <span class="tok-s">"checkout"</span>,
    <span class="tok-jkey">"port"</span>: <span class="tok-n">8080</span>,
    <span class="tok-jkey">"replicas"</span>: <span class="tok-n">4</span>
  }
}</code></pre>
</figure>
</div>

The `port` field was never written in `checkout`, so the schema default supplied
it. `replicas` was written, so the default stepped aside.

## Enums

A field can be constrained to a fixed set of strings by listing them with the
`|` union operator. Any other value fails the build, which is how a `region`
field stays inside the regions you actually run in.

<div class="twopane" role="group" aria-label="An enum field and its compiled JSON">
<figure class="pane pane-source">
<figcaption class="pane-cap"><span class="pane-ext">.dolo</span> tier.dolo</figcaption>
<pre><code><span class="tok-k">schema</span> <span class="tok-t">Plan</span> {
  <span class="tok-key">tier</span>: <span class="tok-s">"free"</span> <span class="tok-p">|</span> <span class="tok-s">"pro"</span> <span class="tok-p">|</span> <span class="tok-s">"team"</span>
  <span class="tok-key">seats</span>: <span class="tok-t">Int</span> = <span class="tok-n">1</span>
}

<span class="tok-key">plan</span>: <span class="tok-t">Plan</span> = { <span class="tok-key">tier</span> = <span class="tok-s">"pro"</span>, <span class="tok-key">seats</span> = <span class="tok-n">5</span> }</code></pre>
</figure>
<div class="pane-join" aria-hidden="true"><span>compiles to</span></div>
<figure class="pane pane-json">
<figcaption class="pane-cap"><span class="pane-ext">.json</span> tier.json</figcaption>
<pre><code>{
  <span class="tok-jkey">"plan"</span>: {
    <span class="tok-jkey">"tier"</span>: <span class="tok-s">"pro"</span>,
    <span class="tok-jkey">"seats"</span>: <span class="tok-n">5</span>
  }
}</code></pre>
</figure>
</div>

## When it does not compile

The whole point is the failure case. Given the `Plan` schema above, a typo in the
tier stops the build and prints where it happened. There is no JSON on the other
side of an error — the compiler emits a diagnostic and a non-zero exit code.

```text
error[E102]: value does not satisfy schema `Plan`
  ┌─ plan.dolo:6:26
  │
6 │ plan: Plan = { tier = "prro", seats = 5 }
  │                          ^^^^^^ expected "free" | "pro" | "team"
  │
  = note: "prro" is not one of the allowed tiers
  = help: did you mean "pro"?
```

Every diagnostic names the schema, the offending line and column, and — where it
can — a suggested fix. Because checking happens before any output is written, a
broken configuration can never reach a service that would try to run it.
