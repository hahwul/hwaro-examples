+++
title = "Dolomite"
description = "The typed configuration language that compiles to plain JSON"
template = "home"
[extra]
tagline = "Configuration you can type-check, compiled to plain JSON."
+++

Dolomite is a small language for writing configuration. You get types, schemas,
defaults, and imports while you author — and an ordinary JSON file when you
build. Nothing in the output is Dolomite-specific: every service, CI step, and
tool that already reads JSON reads a compiled Dolomite document without a plugin
or a parser change.

The idea is narrow on purpose. Dolomite does not run programs, reach the
network, or grow a standard library. It describes data, checks that the data
matches a shape you declared, and prints JSON. When something is wrong, it is
wrong at build time, with a message that points at the line — not at three in
the morning when the service reloads its config.

<div class="twopane" role="group" aria-label="A Dolomite overlay and the JSON it compiles to">
<figure class="pane pane-source">
<figcaption class="pane-cap"><span class="pane-ext">.dolo</span> deploy.dolo</figcaption>
<pre><code><span class="tok-c"># base.dolo sets replicas = 2 and</span>
<span class="tok-c"># env = { LOG_LEVEL = "info", REGION = "iad" }</span>
<span class="tok-k">let</span> <span class="tok-key">base</span> = <span class="tok-k">import</span> <span class="tok-s">"./base.dolo"</span>

<span class="tok-key">deploy</span> = <span class="tok-key">base</span> <span class="tok-p">&</span> {
  <span class="tok-key">replicas</span> = <span class="tok-n">6</span>
  <span class="tok-key">env</span>.<span class="tok-key">LOG_LEVEL</span> = <span class="tok-s">"warn"</span>
}</code></pre>
</figure>
<div class="pane-join" aria-hidden="true"><span>compiles to</span></div>
<figure class="pane pane-json">
<figcaption class="pane-cap"><span class="pane-ext">.json</span> deploy.json</figcaption>
<pre><code>{
  <span class="tok-jkey">"deploy"</span>: {
    <span class="tok-jkey">"replicas"</span>: <span class="tok-n">6</span>,
    <span class="tok-jkey">"env"</span>: {
      <span class="tok-jkey">"LOG_LEVEL"</span>: <span class="tok-s">"warn"</span>,
      <span class="tok-jkey">"REGION"</span>: <span class="tok-s">"iad"</span>
    }
  }
}</code></pre>
</figure>
</div>

The overlay above merges a production layer onto shared defaults with the `&`
operator. Fields you name win; fields you leave alone are inherited. The
compiler resolves the whole thing to flat JSON, so the running service never
learns that layering happened.
