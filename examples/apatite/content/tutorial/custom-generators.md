+++
title = "Custom Generators"
description = "Compose a generator for your own record type, and watch Apatite shrink it field by field."
weight = 3
date = "2025-03-11"
toc = true
tags = ["generators"]
[extra]
minutes = 8
+++

Apatite ships generators for the primitives — `int`, `string`, `bool`,
`list`, `oneOf` — but real bugs usually live in domain types built out of
several of them. This lesson builds a generator for a small money type and
uses it to catch a rounding bug that only shows up on negative amounts.

<!-- more -->

## The type

A `Money` value is a currency code and an integer number of cents, so
arithmetic never touches floating point:

```js
import { forAll, record, intBetween, oneOf } from "apatite";

const money = () =>
  record({
    cents: intBetween(-999_999, 999_999),
    currency: oneOf("USD", "EUR", "JPY"),
  });
```

`record` composes named generators into a generator of objects. Each field
shrinks with its own generator's rules — `cents` toward zero, `currency`
toward whichever alternative was listed first in `oneOf` — and Apatite
coordinates the search across all of them so the object you see in a
counterexample is always something the generator could have produced
directly.

## The property

<div class="property-card">
  <p class="property-kicker">Property under test</p>
  <p class="property-law">Formatting a <code>Money</code> value and parsing it back returns the same value.</p>
</div>

```js
function formatMoney({ cents, currency }) {
  const dollars = Math.floor(cents / 100);
  const remainder = cents % 100;
  return `${currency} ${dollars}.${String(remainder).padStart(2, "0")}`;
}

function parseMoney(text) {
  const [cur, amount] = text.split(" ");
  const [whole, frac] = amount.split(".");
  return { cents: Number(whole) * 100 + Number(frac), currency: cur };
}

forAll("formatMoney round-trips through parseMoney", money(), (m) => {
  const parsed = parseMoney(formatMoney(m));
  return parsed.cents === m.cents && parsed.currency === m.currency;
});
```

`Math.floor` rounds toward negative infinity, and JavaScript's `%` keeps the
sign of its left operand — the two disagree with each other for negative
input, and `formatMoney` never reconciles them.

## Running it

<pre class="run-plate"><code class="nohighlight">$ apatite test
✕ formatMoney round-trips through parseMoney
  FAIL after 31 cases (seed 0x9a441ecb)
  counterexample  { cents: -284117, currency: "EUR" }
  shrinking…</code></pre>

## Shrinking a record

Apatite shrinks each field independently, keeping the others fixed while it
searches, then tries all fields together once each has settled. The
`currency` field shrinks toward whichever alternative was listed first in
`oneOf` that still reproduces the failure — here, every currency triggers
the bug equally, so it settles on `"USD"` immediately. The `cents` field
shrinks toward zero, but can never reach it, because the bug only exists
for negative input:

<div class="shrink" role="group" aria-label="Shrink trace from the first failing record to the minimal counterexample">
  <p class="shrink-label"><span class="shrink-dot" aria-hidden="true"></span>shrink trace — 2 steps to minimal</p>
  <div class="shrink-row">
    <span class="shrink-chip"><code>{cents: -284117, currency: "EUR"}</code></span>
    <span class="shrink-arrow" aria-hidden="true">→</span>
    <span class="shrink-chip chip-2"><code>{cents: -53, currency: "USD"}</code></span>
    <span class="shrink-arrow" aria-hidden="true">→</span>
    <span class="shrink-chip chip-3 is-minimal"><code>{cents: -1, currency: "USD"}</code><span class="minimal-tag">minimal</span></span>
  </div>
</div>

`{ cents: -1, currency: "USD" }` is one cent, in the red. `formatMoney`
computes `dollars = Math.floor(-0.01) = -1` and `remainder = -1 % 100 = -1`,
producing the string `"USD -1.-1"` — which `parseMoney` reads back as
`-101` cents, not `-1`. There is no smaller negative integer than `-1`, so
the shrinker cannot do better than this.

## The fix

```js
function formatMoney({ cents, currency }) {
  const sign = cents < 0 ? "-" : "";
  const abs = Math.abs(cents);
  const dollars = Math.floor(abs / 100);
  const remainder = abs % 100;
  return `${currency} ${sign}${dollars}.${String(remainder).padStart(2, "0")}`;
}
```

Working in absolute value and attaching the sign once, up front, sidesteps
the disagreement between `Math.floor` and `%` entirely — the fixed version
survives the full test budget across the whole range of `intBetween`.

{{ alert(type="tip", body="Generators built from map and oneOf shrink cleanly because every candidate the shrinker tries is still something the generator could have produced. A generator built from filter does not get that guarantee for free — see Filters, Maps, and Sizing for that trade-off.") }}

See [Filters, Maps, and Sizing](@/tutorial/generators-map-filter.md) for what changes once `filter` enters the picture.
