+++
title = "Recipes"
description = "Composing the utility families into the components you actually ship — badges, buttons, cards, and callouts, no bespoke CSS required."
weight = 60
date = "2026-06-09"
toc = true
[extra]
stage = "recipes"
+++

A utility on its own is a single decision. A component is a handful of them
stacked together. None of the patterns below adds a new rule to your
stylesheet — each is nothing but classes from the families in this handbook,
which is exactly the point. The result panel shows the compiled component; the
code shows the markup that produced it.

<!-- more -->

## Pill badge

Fill, text colour, a full radius, and a little inline padding. That is the whole
recipe.

<div class="util">
<h3 class="util-h" id="recipe-badge"><code>badge</code></h3>
<p class="util-note"><code>.bg-soft</code> + <code>.text-accent</code> + <code>.rounded-full</code> + <code>.px-3</code></p>
<div class="util-demo">
<pre class="util-code"><code>&lt;span class="bg-soft text-accent
  rounded-full px-3 py-2"&gt;
  New in v3.2
&lt;/span&gt;</code></pre>
<div class="util-result"><span class="bg-soft text-accent rounded-full px-3 py-2" style="font-weight:700;font-size:.8rem;font-family:var(--font-mono)">New in v3.2</span></div>
</div>
</div>

## Primary button

The same fill you saw in the colour chapter, a comfortable radius, and inline-axis
padding for a confident hit target.

<div class="util">
<h3 class="util-h" id="recipe-button"><code>button</code></h3>
<p class="util-note"><code>.bg-accent</code> + <code>.rounded-3</code> + <code>.px-4</code> + <code>.py-3</code></p>
<div class="util-demo">
<pre class="util-code"><code>&lt;button class="bg-accent rounded-3
  px-4 py-3 font-bold"&gt;
  Compile
&lt;/button&gt;</code></pre>
<div class="util-result"><span class="bg-accent rounded-3 px-4 py-3" style="font-weight:800;display:inline-block;font-family:var(--font-display)">Compile</span></div>
</div>
</div>

## Elevated card

A tinted surface, a generous radius, a soft shadow, and a stack for internal
rhythm. This is the card the specimen strip on the front page is made of.

<div class="util">
<h3 class="util-h" id="recipe-card"><code>card</code></h3>
<p class="util-note"><code>.surface</code> + <code>.rounded-4</code> + <code>.shadow-1</code> + <code>.p-4</code> + <code>.stack</code></p>
<div class="util-demo">
<pre class="util-code"><code>&lt;article class="surface rounded-4
  shadow-1 p-4 stack"&gt;
  &lt;h3 class="font-bold"&gt;Incremental&lt;/h3&gt;
  &lt;p class="text-muted"&gt;Recompiles
     only what changed.&lt;/p&gt;
&lt;/article&gt;</code></pre>
<div class="util-result"><article class="surface rounded-4 shadow-1 p-4 stack" style="width:100%;text-align:left"><h3 class="font-bold text-lg m-0">Incremental</h3><p class="text-muted m-0" style="font-size:.86rem">Recompiles only the utilities your last edit touched.</p></article></div>
</div>
</div>

## Callout

An accent ring around a soft fill draws the eye without shouting. Add padding
and a radius and the recipe is complete.

<div class="util">
<h3 class="util-h" id="recipe-callout"><code>callout</code></h3>
<p class="util-note"><code>.bg-soft</code> + <code>.ring-accent</code> + <code>.rounded-3</code> + <code>.p-3</code></p>
<div class="util-demo">
<pre class="util-code"><code>&lt;aside class="bg-soft ring-accent
  rounded-3 p-3"&gt;
  Tokens are the single source
  of truth.
&lt;/aside&gt;</code></pre>
<div class="util-result"><aside class="bg-soft ring-accent rounded-3 p-3" style="width:100%;text-align:left;font-size:.88rem">Tokens are the single source of truth — edit one, and every recipe on this page recompiles.</aside></div>
</div>
</div>

## Where to go next

You now have the whole vocabulary: tokens in the [token model](@/handbook/tokens.md),
[spacing](@/handbook/spacing.md) for rhythm, [surfaces](@/handbook/surfaces.md) for geometry, and
[colour and type](@/handbook/color-type.md) for voice. Every component you build is a
recombination of those four families, and every one of them stays exactly as
large as the markup that uses it. Delete a recipe and its utilities leave the
build with it — the stylesheet never remembers what you stopped shipping.
