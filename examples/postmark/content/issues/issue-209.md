+++
title = "Interop 2026 Focus Areas Finalized, Declarative Shadow DOM Gets a Fix"
date = "2026-05-25"
description = "The Interop 2026 focus-area list is finalized at nineteen entries, declarative shadow DOM's serialization roundtrip gets a correctness fix, and the CSSWG resolves a scope proximity tie-break."
tags = ["html", "interop", "webcomponents"]
[extra]
issue_number = 209
dek = "The Interop 2026 focus-area list is finalized at nineteen entries, declarative shadow DOM's serialization roundtrip gets a correctness fix, and the CSSWG resolves a scope proximity tie-break."
+++

The Interop project's yearly focus-area list — the roughly twenty features browser vendors jointly commit engineering time to closing gaps on — is finalized for 2026 at nineteen entries, down from twenty-six last year. The steering committee says the smaller list reflects fewer remaining big-gap features, not reduced ambition.

<!-- more -->

## Shipped this week

`URL.parse()`, the non-throwing alternative to the `URL` constructor added to this year's Interop focus list, reaches Baseline Newly Available across all engines simultaneously — the first feature on the 2026 list to clear the bar.

```js
const parsed = URL.parse(userInput);
if (parsed === null) {
  showInvalidUrlError();
} else {
  navigateTo(parsed);
}
```

## Behind a flag

Nothing new lands behind a flag this week; two items expected to ship — scroll-state queries and the CSS `if()` function — both slipped to next week's Canary channel promotion.

## Spec movement

The DOM standard fixes a round-trip correctness bug in declarative shadow DOM: serializing a shadow root with `getHTML({ serializableShadowRoots: true })` and re-parsing the result previously dropped `slot` assignments made via the imperative `slot` property rather than the `slot` attribute. The fix requires serializers to emit an explicit `slot` attribute when the two diverge.

The CSSWG resolved a `@scope` proximity question: when two `@scope` blocks of equal specificity and equal DOM proximity both match an element, the one declared later in source order now wins, matching ordinary cascade tie-breaking instead of the "first declared wins" rule the initial draft specified. Implementers said the change avoids a second tie-breaking system existing alongside the one authors already know.

## Worth tracking

- The finalized Interop 2026 list adds Temporal, CSS anchor positioning, and customizable `<select>` as new focus areas; it drops CSS Nesting and Container Queries, both graduating for having closed their gaps in 2025.
- Firefox's platform status page moves cross-document view transitions from "under consideration" to "in development," the step that typically precedes a Nightly flag.
- WebKit's blog posted a retrospective on shipping `:has()` from proposal to Baseline, citing four years end to end.

Baseline status calls in this issue follow the same method described on [the about page](/about/): a clean profile, the channel named in the copy, and the flag string recorded verbatim.
