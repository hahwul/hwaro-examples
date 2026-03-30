+++
title = "RTL Support"
description = "Right-to-left text layout and bidirectional content handling"
tags = ["rtl", "bidi", "advanced"]
+++

# RTL Support

Right-to-left (RTL) scripts such as Arabic, Hebrew, Persian, and Urdu require mirrored layouts where text flows from right to left and UI elements are horizontally flipped. Rosetta provides utilities for detecting script direction, applying CSS logical properties, and handling bidirectional text.

## RTL Languages

The following table lists commonly supported RTL languages and their script characteristics:

| Locale | Language | Script | Direction | Notes |
|--------|----------|--------|-----------|-------|
| `ar` | Arabic | Arabic | RTL | Cursive script, context-dependent glyph shaping |
| `he` | Hebrew | Hebrew | RTL | Non-cursive, no glyph joining |
| `fa` | Persian | Arabic | RTL | Extended Arabic script with additional characters |
| `ur` | Urdu | Arabic | RTL | Nastaliq script style preferred |
| `ps` | Pashto | Arabic | RTL | Extended Arabic with additional diacritics |
| `yi` | Yiddish | Hebrew | RTL | Hebrew script with vowel points |
| `dv` | Dhivehi | Thaana | RTL | Unique Thaana script |
| `ckb` | Kurdish (Sorani) | Arabic | RTL | Arabic script variant |

## Direction Detection

Rosetta provides a utility to determine the text direction for a given locale:

```typescript
import { getDirection } from '@rosetta-i18n/core';

getDirection('en')    // "ltr"
getDirection('ar')    // "rtl"
getDirection('he')    // "rtl"
getDirection('fa')    // "rtl"
getDirection('ja')    // "ltr"
```

Apply the direction to your document root when the locale changes:

```typescript
import { useI18n } from '@rosetta-i18n/react';

function App() {
  const { locale, direction } = useI18n();

  return (
    <html lang={locale} dir={direction}>
      <body>{/* ... */}</body>
    </html>
  );
}
```

## CSS Logical Properties

To build layouts that automatically mirror for RTL, use CSS logical properties instead of physical properties:

| Physical Property | Logical Property | LTR Value | RTL Value |
|-------------------|-----------------|-----------|-----------|
| `margin-left` | `margin-inline-start` | left | right |
| `margin-right` | `margin-inline-end` | right | left |
| `padding-left` | `padding-inline-start` | left | right |
| `padding-right` | `padding-inline-end` | right | left |
| `text-align: left` | `text-align: start` | left | right |
| `text-align: right` | `text-align: end` | right | left |
| `float: left` | `float: inline-start` | left | right |
| `float: right` | `float: inline-end` | right | left |
| `border-left` | `border-inline-start` | left | right |
| `border-right` | `border-inline-end` | right | left |
| `left` | `inset-inline-start` | left | right |
| `right` | `inset-inline-end` | right | left |

### Before and After

Physical properties (breaks in RTL):

```css
.sidebar {
  margin-left: 0;
  margin-right: 2rem;
  padding-left: 1rem;
  border-left: 3px solid blue;
  text-align: left;
}
```

Logical properties (works in both directions):

```css
.sidebar {
  margin-inline-start: 0;
  margin-inline-end: 2rem;
  padding-inline-start: 1rem;
  border-inline-start: 3px solid blue;
  text-align: start;
}
```

## Bidirectional Text

When LTR and RTL text appear in the same string, use Unicode bidirectional markers to ensure correct rendering:

```typescript
import { bidi } from '@rosetta-i18n/core';

// Wrap embedded LTR text within RTL context
const label = bidi.embed('John Smith', 'ltr');
// Result includes U+202A (LRE) and U+202C (PDF) markers

// Isolate a segment to prevent directional interference
const isolated = bidi.isolate(productName, 'auto');
```

### Bidi Markers Reference

| Marker | Unicode | Name | Purpose |
|--------|---------|------|---------|
| LRM | U+200E | Left-to-Right Mark | Force LTR ordering for neutral characters |
| RLM | U+200F | Right-to-Left Mark | Force RTL ordering for neutral characters |
| LRE | U+202A | Left-to-Right Embedding | Start LTR embedded segment |
| RLE | U+202B | Right-to-Left Embedding | Start RTL embedded segment |
| PDF | U+202C | Pop Directional Formatting | End embedded segment |
| LRI | U+2066 | Left-to-Right Isolate | Isolate LTR segment (preferred) |
| RLI | U+2067 | Right-to-Left Isolate | Isolate RTL segment (preferred) |
| PDI | U+2069 | Pop Directional Isolate | End isolated segment |

## Common RTL Layout Issues

**Icons and arrows** -- Directional icons (back arrows, progress indicators) should be mirrored in RTL. Use CSS `transform: scaleX(-1)` for icon elements with the `[dir="rtl"]` selector.

**Number rendering** -- Arabic-Indic numerals are used in some Arabic locales. Rosetta formats numbers using the locale-appropriate numeral system by default.

**Mixed content** -- When a translation contains both RTL and LTR segments (for example, an Arabic sentence with an English product name), use the `bidi.isolate()` function to prevent directional interference.

**Form inputs** -- Set `dir="auto"` on text input fields so the browser detects direction based on the first strong character typed.
