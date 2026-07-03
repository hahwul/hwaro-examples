+++
title = "Cross-Document View Transitions Reach Firefox Nightly"
date = "2026-06-22"
description = "Firefox Nightly gains a flag for cross-document view transitions, WHATWG changes how popover=hint dismisses, and import attributes clear their last TC39 objection."
tags = ["css", "view-transitions", "firefox"]
[extra]
issue_number = 213
dek = "Firefox Nightly gains a flag for cross-document view transitions, WHATWG changes how popover=hint dismisses, and import attributes clear their last TC39 objection."
+++

Cross-document view transitions have shipped in Chrome since 2024, but this week is the first time a second engine has anything runnable. Firefox Nightly 130 adds the feature behind `dom.viewTransitions.crossDocument.enabled`, restricted to same-origin navigations for now.

<!-- more -->

## Shipped this week

Nothing crosses into Baseline this week — a rare quiet week on that front. The closest is `text-wrap: pretty`, which cleared the "two engines, no known interop bugs" bar in the tracker but hasn't been through a full Baseline review cycle yet.

## Behind a flag

Firefox Nightly's cross-document view transition flag covers the same CSS surface Chrome shipped: a `@view-transition` rule with `navigation: auto`, and the `view-transition-name` property carried across the navigation boundary.

```css
@view-transition {
  navigation: auto;
}

.hero-image {
  view-transition-name: hero;
  view-transition-class: media;
}
```

The addition worth noting is `view-transition-class`, which Firefox implements alongside the flag: it lets a stylesheet target a group of named transitions with one `::view-transition-group(.media)` selector instead of enumerating names one at a time.

## Spec movement

The WHATWG HTML spec changed how `popover="hint"` dismisses when a second hint popover opens. Previously, opening a new hint popover closed *all* other hint popovers; the updated text closes only hints that aren't an ancestor of the newly opened one, which matches how nested tooltip-on-tooltip UIs actually behave in the wild. Implementers say the fix ships without a flag since it's a bug-level correction to existing behavior.

TC39's import attributes proposal cleared its last open Stage 3 objection — a disagreement over whether unsupported attribute keys should throw or warn. The committee settled on throw, matching what Chrome already ships, so no engine needs a behavior change to advance the proposal to Stage 4 at the next plenary.

## Worth tracking

- The CSS Containment spec picked up an explainer for `content-visibility: hidden-matchable`, aimed at making hidden content findable by find-in-page without paying full render cost.
- Safari's WebKit blog confirmed anchor positioning and `@starting-style` are both slated for the next Technology Preview build.
- A W3C Interop 2027 proposal draft is circulating for review; nominations for tracked features close in August.
- [Two issues ago](/issues/issue-211/) we noted the Storage Access API's five-engine interop push; the shared test manifest referenced there is now the baseline every new WebView release is measured against.
