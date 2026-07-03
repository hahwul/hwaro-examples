+++
title = "Replayable Seeds"
description = "A counterexample that depends on randomness is only useful if you can make it happen again."
weight = 5
date = "2025-05-30"
toc = true
tags = ["seeds", "generators"]
[extra]
minutes = 6
+++

Some bugs only depend on the input. Others depend on the input *and* on
which random numbers the code itself drew while it ran — a shuffle, a
sampler, a load balancer's random pick. This lesson covers the case where
the function under test rolls its own dice, and why Apatite prints a seed
with every failure.

<!-- more -->

## The property

<div class="property-card">
  <p class="property-kicker">Property under test</p>
  <p class="property-law"><code>shuffle(xs)</code> always returns a permutation of <code>xs</code> — same values, same length, any order.</p>
</div>

## The naive implementation

```js
function shuffle(xs, rng) {
  const pool = xs.slice();
  const out = [];
  const n = pool.length;
  while (out.length < n) {
    const i = Math.floor(rng() * n);   // n never shrinks with pool
    out.push(pool[i]);
    pool.splice(i, 1);
  }
  return out;
}
```

Each draw is supposed to pick a random remaining element. `pool` gets
shorter every iteration, but `i` is still drawn from the *original* length
`n`. Once `pool` is shorter than `n`, `i` can land past the end of what is
left, `pool[i]` is `undefined`, and the real element that should have been
picked never leaves `pool` at all.

## Running it

```js
import { forAll, list, int } from "apatite";

forAll("shuffle(xs) is a permutation of xs", list(int()), (xs) => {
  const shuffled = shuffle(xs, Math.random);
  return (
    shuffled.length === xs.length &&
    [...shuffled].sort().join(",") === [...xs].sort().join(",")
  );
});
```

<pre class="run-plate"><code class="nohighlight">$ apatite test
✕ shuffle(xs) is a permutation of xs
  FAIL after 41 cases (seed 0x7c1af9e2)
  counterexample  xs = [7, -2, 91, 4, -58, 13]
  shrinking…</code></pre>

The bug only shows up for specific random draws inside `shuffle` itself —
most runs of `shuffle([7, -2, 91, 4, -58, 13])` happen not to trigger it.
That is exactly why the seed matters: without it, rerunning this test uses
fresh randomness and the failure may simply not recur.

## Shrinking under a fixed seed

Apatite pins the seed while it shrinks, so every candidate it tries is
compared fairly — same random source, smaller input. The list shrinks from
six elements down to two, which turns out to be the smallest size where the
stale-length bug can still cause a dropped element:

<div class="shrink" role="group" aria-label="Shrink trace from the first failing input to the minimal counterexample">
  <p class="shrink-label"><span class="shrink-dot" aria-hidden="true"></span>shrink trace — 2 steps to minimal</p>
  <div class="shrink-row">
    <span class="shrink-chip"><code>[7, -2, 91, 4, -58, 13]</code></span>
    <span class="shrink-arrow" aria-hidden="true">→</span>
    <span class="shrink-chip chip-2"><code>[7, -2, 91]</code></span>
    <span class="shrink-arrow" aria-hidden="true">→</span>
    <span class="shrink-chip chip-3 is-minimal"><code>[0, 1]</code><span class="minimal-tag">minimal</span></span>
  </div>
</div>

## Capturing the case permanently

A shrunk counterexample and its seed are enough to reproduce the exact
failure without waiting for `forAll` to stumble onto it again:

```bash
apatite test --seed 0x7c1af9e2
```

```js
import { replay } from "apatite";

test("shuffle drops an element on a two-item list", () => {
  replay(0x7c1af9e2, () => {
    const result = shuffle([0, 1], Math.random);
    expect(result).not.toContain(undefined);
  });
});
```

`replay` re-seeds Apatite's random source before the callback runs, so
`Math.random` inside `shuffle` draws the exact same sequence every time —
turning a case that was originally found by luck into a deterministic
regression test.

## The fix

```js
const i = Math.floor(rng() * pool.length);
```

Drawing against the pool's current length instead of its original length
keeps every index in range, and the property survives its full budget
regardless of which seed generates the input.

{{ alert(type="tip", body="Print the seed on every failure, not just the counterexample. A minimal input without the seed that produced its failure is only half a bug report when the function under test consumes randomness itself.") }}
