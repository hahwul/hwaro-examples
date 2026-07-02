+++
title = "Your First Property"
description = "Write one property, watch Apatite find the smallest input that breaks it."
weight = 1
date = "2025-01-14"
toc = true
tags = ["generators", "shrinking"]
[extra]
minutes = 6
+++

Example-based tests check one input at a time. A property-based test checks a
*rule* — a statement that should hold for every input a generator can
produce — and lets the framework search for the input that proves it wrong.
This lesson runs exactly one property, from a plausible-looking
implementation to the smallest case that breaks it.

<!-- more -->

## The property

Say we are testing a helper called `unique`, which is supposed to remove
duplicate values from a list of integers.

<div class="property-card">
  <p class="property-kicker">Property under test</p>
  <p class="property-law"><code>unique(xs)</code> never returns a list that contains the same value twice.</p>
</div>

## The naive implementation

Here is a first pass at `unique`. It walks the list and drops any element
that matches the one immediately before it:

```js
function unique(xs) {
  const out = [];
  for (let i = 0; i < xs.length; i++) {
    if (xs[i] !== xs[i - 1]) out.push(xs[i]);
  }
  return out;
}
```

It reads clean, and it passes every example you would probably think to
write by hand: `unique([1, 1, 2])` gives `[1, 2]`, `unique([5, 5, 5])` gives
`[5]`. The bug is that it only removes **adjacent** duplicates — the same
behavior as the Unix `uniq` command. A `4` that shows up again three
positions later is a duplicate Apatite's property cares about, but this
implementation has already forgotten it saw the first one.

## Writing the property

In Apatite, a property is a generator paired with a predicate. `list(int())`
produces lists of random integers of random length; `forAll` runs the
predicate against as many of them as it can before it either exhausts its
budget or finds a counterexample:

```js
import { forAll, list, int } from "apatite";

forAll("unique(xs) has no duplicate values", list(int()), (xs) => {
  const out = unique(xs);
  return new Set(out).size === out.length;
});
```

## Running it

<pre class="run-plate"><code class="nohighlight">$ apatite test
✕ unique(xs) has no duplicate values
  FAIL after 23 cases (seed 0x6f2c19a3)
  counterexample  [58, -3, 58, 12, -41, 12, 58, 0, -3]
  shrinking…</code></pre>

That counterexample is real, but it is not useful to stare at — nine
integers, three of them repeated. Apatite does not stop there.

<div class="shrink" role="group" aria-label="Shrink trace from the first failing input to the minimal counterexample">
  <p class="shrink-label"><span class="shrink-dot" aria-hidden="true"></span>shrink trace — 3 steps to minimal</p>
  <div class="shrink-row">
    <span class="shrink-chip"><code>[58, -3, 58, 12, -41, 12, 58, 0, -3]</code></span>
    <span class="shrink-arrow" aria-hidden="true">→</span>
    <span class="shrink-chip chip-2"><code>[58, 12, 58]</code></span>
    <span class="shrink-arrow" aria-hidden="true">→</span>
    <span class="shrink-chip chip-3"><code>[0, 12, 0]</code></span>
    <span class="shrink-arrow" aria-hidden="true">→</span>
    <span class="shrink-chip chip-4 is-minimal"><code>[0, 1, 0]</code><span class="minimal-tag">minimal</span></span>
  </div>
</div>

## Reading the trace

Each arrow is a phase of the same shrinker. First it attacks the *shape* of
the input: it keeps deleting elements from the nine-item list as long as the
property keeps failing, and lands on the shortest list that still has a
repeated, non-adjacent value — three elements, first and last equal. Then it
attacks the *values*: it drives every integer toward zero, one at a time,
as long as the failure survives. The repeated pair shrinks straight to `0`.
The middle value cannot also become `0` — then all three elements would be
equal, and the naive `unique` collapses runs of identical adjacent-ish
values correctly enough to pass — so it stops at the smallest integer that
still differs from zero: `1`. The result, `[0, 1, 0]`, is the smallest
possible list that exposes the bug: two equal values with one different
value between them.

## The fix

```js
function unique(xs) {
  return [...new Set(xs)];
}
```

A `Set` does not care about position, so it catches duplicates no matter how
far apart they are. Rerun the property against this version and Apatite
exhausts its test budget without finding a single counterexample.

{{ alert(type="tip", body="The next lesson opens up the shrinker itself — how it chooses which candidate to try next, and why it always finishes.") }}
