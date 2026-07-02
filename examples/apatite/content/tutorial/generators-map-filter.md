+++
title = "Filters, Maps, and Sizing"
description = "map and filter both narrow a generator's output — only one of them keeps shrinking honest."
weight = 6
date = "2025-06-18"
toc = true
tags = ["generators", "shrinking"]
[extra]
minutes = 7
+++

`map` and `filter` both let you narrow a generator down to the values you
actually want to test. They are not interchangeable. This closing lesson
uses a parenthesis checker to show why — and catches a real bug on the way.

<!-- more -->

## The property

<div class="property-card">
  <p class="property-kicker">Property under test</p>
  <p class="property-law"><code>isBalanced(s)</code> agrees with a trusted, stack-based reference checker on every string.</p>
</div>

## The naive implementation

```js
function isBalanced(s) {
  let depth = 0;
  for (const ch of s) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
  }
  return depth === 0;   // never checks that depth stays >= 0
}

function referenceBalanced(s) {
  const stack = [];
  for (const ch of s) {
    if (ch === "(") stack.push(ch);
    else if (ch === ")" && !stack.pop()) return false;
  }
  return stack.length === 0;
}
```

The fast version only checks that opens and closes balance out *by the
end*. It never notices a close paren showing up before its matching open —
`depth` can go negative and climb back to zero without the loop caring.

## Building the generator with map

A generator of parenthesis strings is a generator of characters, mapped
into a joined string:

```js
import { forAll, list, oneOf } from "apatite";

const parens = (n) =>
  list(oneOf("(", ")"), { length: n }).map((chars) => chars.join(""));

forAll("isBalanced agrees with the reference checker", parens(12), (s) => {
  return isBalanced(s) === referenceBalanced(s);
});
```

Because `.map` only transforms the *output* of the underlying list
generator, Apatite still shrinks the list of characters using its ordinary
rules — delete characters, keep the failure — and rebuilds the string from
whatever survives. Every candidate the shrinker proposes is guaranteed to be
something `parens(12)` could have generated directly.

## Running it

<pre class="run-plate"><code class="nohighlight">$ apatite test
✕ isBalanced agrees with the reference checker
  FAIL after 17 cases (seed 0x4b8e2a01)
  counterexample  "()(()))()(("
  shrinking…</code></pre>

<div class="shrink" role="group" aria-label="Shrink trace from the first failing string to the minimal counterexample">
  <p class="shrink-label"><span class="shrink-dot" aria-hidden="true"></span>shrink trace — 2 steps to minimal</p>
  <div class="shrink-row">
    <span class="shrink-chip"><code>"()(()))()(("</code></span>
    <span class="shrink-arrow" aria-hidden="true">→</span>
    <span class="shrink-chip chip-2"><code>"))(("</code></span>
    <span class="shrink-arrow" aria-hidden="true">→</span>
    <span class="shrink-chip chip-3 is-minimal"><code>")("</code><span class="minimal-tag">minimal</span></span>
  </div>
</div>

`")("` is a close paren immediately followed by an open one. `depth` dips
to `-1` on the first character and climbs back to `0` on the second, so the
naive checker reports it as balanced. The reference checker correctly
rejects it the moment it tries to pop an empty stack. There is no
one-character string that can fail this property, so two is minimal.

## Where filter changes the picture

Roughly half of all random bit-strings have an odd length and can never be
balanced. A tempting optimization is to generate freely and discard the
odd ones with `.filter`:

```js
const parensFiltered = (n) =>
  list(oneOf("(", ")"), { length: n }).filter((cs) => cs.length % 2 === 0);
```

`filter` re-checks the predicate after *every* shrink step, not just at
generation time. Delete one character from a length-12 candidate during
shrinking and the result has length 11 — the predicate rejects it, and that
entire shrink direction is discarded, even if a shorter *even-length*
counterexample was one more deletion away. The shrinker has to find its way
around the gaps the filter leaves behind, one narrower path at a time,
instead of walking directly toward the minimal case.

{{ alert(type="warning", body="Prefer generating the shape you want directly — an even-length generator built from two paired characters at a time — over generating broadly and filtering. Filtering is fine for rare, cheap-to-check conditions; it gets expensive and can blur shrinking whenever it rejects a large fraction of candidates.") }}

That closes the tutorial. Six properties, six bugs, six minimal
counterexamples — and in every case, the shrinker did the tedious part. See
[About Apatite](@/about.md) for installation, or start back at [Your First
Property](@/tutorial/first-property.md) with a codebase of your own.
