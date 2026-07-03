+++
title = "Licensing"
description = "Desktop, webfont, and app licenses for the Ascent catalog, priced by seat and traffic, not bundled or subscription-gated."
template = "page"
+++

Every typeface in the catalog is sold under one of four license types. Prices on the [catalog](/typefaces/) page are for a single desktop license at the smallest seat count; webfont and app pricing scales from there. Write to [licensing@ascent.example](mailto:licensing@ascent.example) for a quote on anything larger than what is listed below.

<!-- more -->

## License tiers

| License | Covers | Starts at |
|---|---|---|
| Desktop | Installed use in design, print, and office software, one seat | Catalog price |
| Webfont | `@font-face` embedding, priced by monthly pageviews | 1.6x desktop price |
| App | Embedding in a shipped application or game, one product | 3x desktop price |
| Custom | Broadcast, signage, or unlimited-seat use | By quote |

Additional desktop seats are 60% of the base price each. Webfont tiers step up at 50,000, 500,000, and 5,000,000 monthly pageviews; the license auto-adjusts to the next tier rather than requiring a renegotiation.

{{ alert(type="note", body="Webfont licenses cover self-hosted files only. If you serve Ascent typefaces through a third-party font host, confirm with us first — most host contracts require a separate agreement on our end.") }}

## What every license includes

- The full character set for the weights you buy, including small caps and old-style figures where the source lettering supports them.
- A PDF of the original signage photograph the typeface was traced from.
- One year of updates: kerning fixes, added glyphs, occasionally a new weight, at no extra charge.
- Email support from the person who actually drew the typeface, not a ticketing queue.

## What no license permits

- Redistributing the font files themselves, modified or not, inside a template, theme, or asset pack.
- Sublicensing to a client without a corresponding client-side license — client work needs its own webfont or app license in the client's name.
- Using a desktop license to serve a typeface as a webfont. The two do different things to a font file and we price them differently for a reason.

## A webfont example

Webfont licenses ship as static WOFF2 files with a starter stylesheet. A typical embed looks like this:

```css
@font-face {
  font-family: "Cornice";
  src: url("/fonts/cornice-regular.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "Cornice";
  src: url("/fonts/cornice-bold.woff2") format("woff2");
  font-weight: 700;
  font-display: swap;
}

h1, h2, .signage {
  font-family: "Cornice", Georgia, serif;
}
```

Files are watermark-free and subset to the character set you license — Latin, Latin Extended, or the full set including the diacritics a handful of typefaces support.

## Renewals and audits

Licenses do not expire and there is no phone-home activation. We do run an annual, informal check of webfont pageview tiers for accounts over the first threshold — if traffic has grown past the license, we will email an upgrade quote rather than cut anything off.
