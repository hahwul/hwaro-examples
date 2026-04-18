+++
title = "Language Detection"
description = "Automatic language detection strategies for multilingual applications"
tags = ["language-detection", "locale", "advanced"]
+++

# Language Detection

Language detection determines which locale to activate for a given user. Rosetta supports multiple detection strategies that can be combined in a priority chain. The first strategy that returns a supported locale wins.

## Detection Strategies

| Strategy | Source | Priority | Persistence |
|----------|--------|----------|-------------|
| URL path | `/en/docs/guide` | 1 (highest) | No |
| URL parameter | `?lang=en` | 2 | No |
| Cookie | `locale=en` | 3 | Yes |
| `Accept-Language` header | Browser preference | 4 | No |
| User profile | Database record | 5 | Yes |
| Default locale | Configuration | 6 (lowest) | N/A |

## Configuration

Configure the detection chain in the Rosetta initialization:

```typescript
import { createI18n, detectors } from '@rosetta-i18n/core';

const i18n = createI18n({
  defaultLocale: 'en',
  supportedLocales: ['en', 'fr', 'de', 'ar', 'ja'],
  detection: {
    order: ['path', 'querystring', 'cookie', 'header'],
    caches: ['cookie'],
    cookie: {
      name: 'locale',
      maxAge: 365 * 24 * 60 * 60, // 1 year
      path: '/',
      sameSite: 'lax',
    },
    path: {
      prefix: true, // expect locale as first path segment
    },
    querystring: {
      name: 'lang',
    },
  },
});
```

## URL Path Detection

The path strategy extracts the locale from the first segment of the URL path:

```
https://example.com/en/docs/guide    -> locale: en
https://example.com/fr/docs/guide    -> locale: fr
https://example.com/ar/docs/guide    -> locale: ar
https://example.com/docs/guide       -> fallback to next strategy
```

Path-based detection is the most common approach for server-rendered multilingual sites because it produces distinct, indexable URLs for each locale.

## Accept-Language Header Parsing

The header strategy parses the `Accept-Language` HTTP header and matches it against supported locales:

```
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

Resolution process:

| Step | Candidate | Supported? | Result |
|------|-----------|------------|--------|
| 1 | `fr-CH` | No | Continue |
| 2 | `fr` (fallback from `fr-CH`) | Yes | Match |

If `fr-CH` is not in the supported list, Rosetta strips the region tag and tries the base language `fr`. If no match is found, it moves to the next candidate in quality factor order.

## Locale Matching Algorithm

Rosetta implements a best-fit locale matching algorithm based on the following rules:

1. **Exact match** -- If the candidate exactly matches a supported locale, use it.
2. **Base language match** -- Strip the region tag and check for a base language match. `en-AU` matches `en`.
3. **Maximized match** -- Use CLDR likely subtags to expand the candidate. `zh` expands to `zh-Hans-CN`, which can match `zh-Hans`.
4. **Related region match** -- If `pt-PT` is not supported but `pt-BR` is, check if they share the same base language and offer `pt-BR` as a fallback.

```typescript
import { matchLocale } from '@rosetta-i18n/core';

const supported = ['en', 'fr', 'de', 'pt-BR', 'zh-Hans', 'zh-Hant'];

matchLocale('en-US', supported)    // "en"
matchLocale('fr-CA', supported)    // "fr"
matchLocale('pt-PT', supported)    // "pt-BR"
matchLocale('zh-CN', supported)    // "zh-Hans"
matchLocale('zh-TW', supported)    // "zh-Hant"
matchLocale('it', supported)       // null (no match)
```

## Server-Side Detection

For server-rendered applications, configure detection in your request handler:

```typescript
import { createI18n } from '@rosetta-i18n/server';

app.use((req, res, next) => {
  const i18n = createI18n({
    defaultLocale: 'en',
    supportedLocales: ['en', 'fr', 'de', 'ar', 'ja'],
    detection: {
      order: ['path', 'cookie', 'header'],
      request: req,
    },
  });

  req.i18n = i18n;
  res.setHeader('Content-Language', i18n.locale);
  next();
});
```

## Client-Side Detection

For single-page applications, detection runs in the browser:

```typescript
import { createI18n, detectors } from '@rosetta-i18n/core';

const i18n = createI18n({
  defaultLocale: 'en',
  supportedLocales: ['en', 'fr', 'de', 'ar', 'ja'],
  detection: {
    order: ['querystring', 'cookie', 'navigator'],
    caches: ['cookie', 'localStorage'],
  },
});
```

The `navigator` strategy reads `navigator.language` and `navigator.languages` from the browser API.

## Locale Switching

When a user explicitly changes their locale, persist the choice and reload translations:

```typescript
async function switchLocale(newLocale) {
  await i18n.setLocale(newLocale);
  // Cookie is updated automatically if 'cookie' is in caches
  // Redirect or re-render as needed
}
```

## SEO Considerations

When using path-based locale detection, add `hreflang` link elements to help search engines discover localized versions of each page:

```html
<link rel="alternate" hreflang="en" href="https://example.com/en/docs/guide" />
<link rel="alternate" hreflang="fr" href="https://example.com/fr/docs/guide" />
<link rel="alternate" hreflang="de" href="https://example.com/de/docs/guide" />
<link rel="alternate" hreflang="ar" href="https://example.com/ar/docs/guide" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en/docs/guide" />
```

Rosetta provides a helper to generate these tags:

```typescript
import { generateHreflangTags } from '@rosetta-i18n/core';

const tags = generateHreflangTags({
  path: '/docs/guide',
  baseUrl: 'https://example.com',
  locales: ['en', 'fr', 'de', 'ar'],
  defaultLocale: 'en',
});
```
