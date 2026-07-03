+++
title = "How Shrinking Works"
description = "Two phases, one algorithm: shrink the shape first, then shrink the values."
weight = 2
date = "2025-02-03"
toc = true
tags = ["shrinking"]
[extra]
minutes = 7
+++

Every counterexample Apatite prints has already been through the shrinker.
This lesson opens that process up, using a bug that is small enough to trace
by hand: an off-by-one loop bound in a hand-rolled sort.

<!-- more -->

## The property

<div class="property-card">
  <p class="property-kicker">Property under test</p>
  <p class="property-law"><code>bubbleSort(xs)</code> always returns a sorted list.</p>
</div>

## The naive implementation

```js
function bubbleSort(xs) {
  const out = xs.slice();
  const n = out.length;
  for (let pass = 0; pass < n - 2; pass++) {   // should be n - 1
    for (let i = 0; i < n - 1 - pass; i++) {
      if (out[i] > out[i + 1]) {
        [out[i], out[i + 1]] = [out[i + 1], out[i]];
      }
    }
  }
  return out;
}
```

The outer loop is supposed to run one pass for every element except the
last. It runs one pass too few. For any list of three or more elements this
usually goes unnoticed, because most lists get fully sorted a pass or two
before the loop would have stopped anyway. For a two-element list, the bug
is total: `n - 2` is `0`, so the loop body never runs at all, and an
out-of-order pair sails through untouched.

## Running it

```js
import { forAll, list, int } from "apatite";

forAll("bubbleSort(xs) is sorted", list(int()), (xs) => {
  const out = bubbleSort(xs);
  return out.every((v, i) => i === 0 || out[i - 1] <= v);
});
```

<pre class="run-plate"><code class="nohighlight">$ apatite test
✕ bubbleSort(xs) is sorted
  FAIL after 8 cases (seed 0x11d4a276)
  counterexample  [58, -12, 91, 3, -47, 6, 2]
  shrinking…</code></pre>

## Phase one: shrink the shape

The shrinker's first move is almost never to touch a number. It tries
deleting chunks of the list — first halves, then smaller and smaller
slices, then single elements — and keeps whichever deletion still fails the
property. A seven-element list has a lot of structure to remove, and most of
it turns out to be irrelevant to the bug:

<div class="shrink" role="group" aria-label="Shrink trace, shape phase">
  <p class="shrink-label"><span class="shrink-dot" aria-hidden="true"></span>shape phase</p>
  <div class="shrink-row">
    <span class="shrink-chip"><code>[58, -12, 91, 3, -47, 6, 2]</code></span>
    <span class="shrink-arrow" aria-hidden="true">→</span>
    <span class="shrink-chip chip-2"><code>[91, 3, -47]</code></span>
    <span class="shrink-arrow" aria-hidden="true">→</span>
    <span class="shrink-chip chip-3"><code>[58, -12]</code></span>
  </div>
</div>

It stops at two elements because one element can never be out of order with
itself — the property is vacuously true for lists shorter than two, so the
shrinker cannot delete any further without losing the failure entirely.

## Phase two: shrink the values

With the shape fixed at two elements, the shrinker switches to binary
search on each integer, always moving toward zero, always checking that the
property still fails after every move. `58` collapses almost immediately;
`-12` takes a few more steps because it has to cross zero and land on the
smallest value that is still less than the first element:

<div class="shrink" role="group" aria-label="Shrink trace, value phase, ending at the minimal counterexample">
  <p class="shrink-label"><span class="shrink-dot" aria-hidden="true"></span>value phase — minimal counterexample</p>
  <div class="shrink-row">
    <span class="shrink-chip"><code>[58, -12]</code></span>
    <span class="shrink-arrow" aria-hidden="true">→</span>
    <span class="shrink-chip chip-2"><code>[9, -3]</code></span>
    <span class="shrink-arrow" aria-hidden="true">→</span>
    <span class="shrink-chip chip-3 is-minimal"><code>[1, 0]</code><span class="minimal-tag">minimal</span></span>
  </div>
</div>

`[1, 0]` is as small as an out-of-order pair can get: two adjacent integers,
the larger one first. Every shrink candidate the algorithm tried and
rejected along the way either sorted correctly (no longer a counterexample)
or was not actually smaller by Apatite's ordering — shorter lists first,
then smaller magnitudes.

## The fix

```js
for (let pass = 0; pass < n - 1; pass++) {
```

One character. The property now survives its full test budget, including
two-element lists — which, notably, an example-based suite would only catch
if someone had thought to write `expect(bubbleSort([1, 0])).toEqual([0, 1])`
by hand.

{{ alert(type="tip", body="Shrinking always terminates: shape edits strictly reduce a list's length, and value edits strictly reduce an integer's distance from zero, so there is no infinite descent to worry about.") }}
