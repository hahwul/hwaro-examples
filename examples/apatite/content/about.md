+++
title = "About Apatite"
description = "Why Apatite exists, what it promises, and how to install it."
+++

Apatite is a property-based testing framework for JavaScript and
TypeScript. It grew out of a simple frustration: example-based tests only
ever check the inputs someone thought to write down, and the inputs nobody
thought to write down are exactly where bugs like to hide. Apatite generates
those inputs for you, searches for the ones that break your code, and — the
part most testing tools stop short of — reduces every failure to the
smallest, plainest case that still reproduces it.

## What it promises

A property in Apatite is a generator paired with a predicate that should
hold for everything the generator can produce. Run it, and Apatite tries
hundreds of random cases against the predicate. If one fails, the case is
shrunk automatically: lists get shorter, integers move toward zero, strings
lose characters, records shrink field by field, and command sequences lose
whatever steps were not load-bearing to the failure. Nobody writes a
shrinker by hand. Every failing run also prints a seed, so a bug that
depended on randomness — a shuffle, a sampler, a scheduler's random pick —
can be replayed exactly, not approximately, on every future run.

## Install

```bash
npm install --save-dev apatite
```

```js
import { forAll, int, list } from "apatite";

forAll("sum is commutative", int(), int(), (a, b) => a + b === b + a);
```

Run `apatite test` to execute every property in your test files, or import
`forAll` directly into an existing Jest or Vitest suite — Apatite's
assertions are ordinary boolean returns, so it does not require its own
runner. If this is your first property test, [Your First
Property](@/tutorial/first-property.md) walks through one from a plausible
implementation to its minimal counterexample.

## Where it came from

Apatite began as an internal tool at a small team building payment
infrastructure, after a rounding bug shipped to production that a single
well-placed property test would have caught in about four random cases. It
was open-sourced a year later, once the shrinker was reliable enough that
the team trusted its minimal counterexamples over their own hand-picked
edge cases. It has been maintained since by a small group of contributors —
Priya Adeyemi-Lindqvist, Tomas Vural, and a rotating cast of people who
found a bug the framework's own test suite had not thought to generate yet.

## License

Apatite is released under the MIT license. The source, the issue tracker,
and a changelog going back to the first tagged release live in the
project's repository — contributions that add a new generator combinator
are especially welcome, provided they come with a shrinker.

{{ alert(type="tip", body="Every buggy code sample in this tutorial is real — copy it, run the paired property against it, and Apatite will find the same counterexample described in the text.") }}
