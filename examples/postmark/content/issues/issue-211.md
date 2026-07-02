+++
title = "Storage Access API Interop Push, Customizable Select Renames a Part"
date = "2026-06-08"
description = "A five-engine interop push targets the Storage Access API, Chrome renames a customizable-select pseudo-element after developer feedback, and the CSSWG punts on carousel scroll-marker groups for another cycle."
tags = ["javascript", "html", "interop"]
[extra]
issue_number = 211
dek = "A five-engine interop push targets the Storage Access API, Chrome renames a customizable-select pseudo-element after developer feedback, and the CSSWG punts on carousel scroll-marker groups for another cycle."
+++

Interop pushes are usually quiet news — a shared test suite, a shared spreadsheet of pass rates — but this week's Storage Access API push is unusual because all five actively developed engines, including the two mobile WebViews tracked separately, joined at once.

<!-- more -->

## Shipped this week

Nothing new reaches Baseline this week. The tracker shows the Storage Access API sitting at "Newly Available, 4 of 5," pending the last mobile WebView engine's next release train, expected within the month.

## Behind a flag

Chrome's customizable `<select>` work — which lets a `<select>` render fully custom option markup via `appearance: base-select` — renames one exposed part after developer feedback during the origin trial. `::picker-icon` becomes `::picker(select)` to match the naming pattern used by the rest of the picker pseudo-elements, and the old name is aliased for one more release before removal.

```css
select {
  appearance: base-select;
}

select::picker(select) {
  border-radius: 0.5rem;
  border: 1px solid var(--border);
}
```

The flag remains `chrome://flags/#customizable-select`; the origin trial token format is unaffected by the rename.

## Spec movement

The CSSWG discussed carousel scroll-marker groups — the dots-and-arrows UI for a scroll-snap carousel — for the third meeting running and again failed to resolve the open question of whether markers should be an explicit HTML list or a CSS-generated pseudo-tree. The item rolls to next cycle's agenda without a resolution.

The Storage Access API's five-engine interop push published a shared test manifest of 340 cases, up from 190 last quarter. Pass rates: 91% Chromium, 88% Firefox, 79% Safari, with the two WebView variants trailing at 60–65% pending the release trains mentioned above.

## Worth tracking

- The Popover API's `beforetoggle` event gains a `source` property identifying which invoker triggered the toggle, closing a long-standing accessibility complaint about ambiguous multi-invoker popovers.
- Firefox shipped a devtools-only preview of container query debugging in the Inspector's Layout panel, one release ahead of its stable rollout.
- A W3C horizontal review flagged the `<selectedcontent>` element, part of customizable `<select>`, for an internationalization concern around how it mirrors option text across right-to-left locales; the fix is drafted but not yet merged.
- The scroll-state container query flag from [last week's issue](/issues/issue-210/) picked up its first origin trial sign-ups, mostly from teams building sticky-header libraries.
