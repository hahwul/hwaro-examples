+++
title = "Interpolation"
description = "Variable interpolation and ICU MessageFormat syntax in Rosetta"
tags = ["translation", "interpolation", "icu"]
+++

# Interpolation

Interpolation inserts dynamic values into translation strings at runtime. Rosetta supports simple variable substitution, ICU MessageFormat expressions, and locale-aware formatting for numbers, dates, and currencies.

## Simple Variables

Use curly braces to insert named variables:

```json
{
  "greeting": "Hello, {name}!",
  "welcome_back": "Welcome back, {firstName} {lastName}.",
  "unread": "You have {count} unread notifications."
}
```

```typescript
t('greeting', { name: 'Alice' })           // "Hello, Alice!"
t('welcome_back', { firstName: 'Bob', lastName: 'Chen' })  // "Welcome back, Bob Chen."
t('unread', { count: 7 })                  // "You have 7 unread notifications."
```

## Number Formatting

Use the `number` type to format numbers according to the active locale:

```json
{
  "price": "Price: {amount, number, currency}",
  "progress": "Progress: {value, number, percent}",
  "population": "Population: {count, number}"
}
```

Number formatting varies by locale:

| Locale | `{amount, number, currency}` (1234.56) | `{value, number, percent}` (0.85) |
|--------|---------------------------------------|-----------------------------------|
| `en-US` | $1,234.56 | 85% |
| `de-DE` | 1.234,56 EUR | 85 % |
| `fr-FR` | 1 234,56 EUR | 85 % |
| `ja-JP` | 1,234.56 JPY | 85% |
| `ar-SA` | 1,234.56 SAR | 85% |

## Date Formatting

Use the `date` and `time` types to format temporal values:

```json
{
  "published": "Published: {date, date, long}",
  "updated": "Last updated: {date, date, medium}",
  "event_time": "Starts at {time, time, short}"
}
```

Available date styles:

| Style | en-US | de-DE | ja-JP | ar-SA |
|-------|-------|-------|-------|-------|
| `short` | 3/30/26 | 30.03.26 | 2026/03/30 | 30/3/2026 |
| `medium` | Mar 30, 2026 | 30.03.2026 | 2026/03/30 | 30/03/2026 |
| `long` | March 30, 2026 | 30. Marz 2026 | 2026年3月30日 | 30 مارس 2026 |
| `full` | Monday, March 30, 2026 | Montag, 30. Marz 2026 | 2026年3月30日月曜日 | الإثنين، 30 مارس 2026 |

## Select Expressions

Use `select` to choose between string variants based on a non-numeric value:

```json
{
  "invitation": "{gender, select, male {He invited you} female {She invited you} other {They invited you}} to the event.",
  "status": "Your order is {status, select, pending {being processed} shipped {on the way} delivered {complete} other {unknown}}."
}
```

```typescript
t('invitation', { gender: 'female' })  // "She invited you to the event."
t('status', { status: 'shipped' })     // "Your order is on the way."
```

## Nested Expressions

ICU MessageFormat expressions can be nested to combine plural and select logic:

```json
{
  "activity": "{gender, select, male {{count, plural, one {He wrote # comment} other {He wrote # comments}}} female {{count, plural, one {She wrote # comment} other {She wrote # comments}}} other {{count, plural, one {They wrote # comment} other {They wrote # comments}}}}"
}
```

```typescript
t('activity', { gender: 'female', count: 3 })
// "She wrote 3 comments"

t('activity', { gender: 'male', count: 1 })
// "He wrote 1 comment"
```

## HTML in Translations

By default, Rosetta escapes HTML entities in interpolated values to prevent XSS. To render HTML within translations, use the rich text API:

```json
{
  "terms": "By continuing, you agree to our <link>terms of service</link>.",
  "highlight": "Search results for <b>{query}</b>"
}
```

```typescript
// React example
t.rich('terms', {
  link: (chunks) => <a href="/terms">{chunks}</a>,
});

t.rich('highlight', {
  query: searchTerm,
  b: (chunks) => <strong>{chunks}</strong>,
});
```

## Escaping Braces

To include literal curly braces in a translation string, use single quotes to escape:

```json
{
  "code_example": "Use the syntax '{'name'}' to insert variables.",
  "json_hint": "The format is '{' \"key\": \"value\" '}'."
}
```

## Variable Reference

| Syntax | Purpose | Example |
|--------|---------|---------|
| `{name}` | Simple variable | `Hello, {name}!` |
| `{n, number}` | Locale-aware number | `{n, number}` |
| `{n, number, percent}` | Percentage | `{n, number, percent}` |
| `{n, number, currency}` | Currency | `{n, number, currency}` |
| `{d, date, short}` | Short date | `{d, date, short}` |
| `{d, date, medium}` | Medium date | `{d, date, medium}` |
| `{d, date, long}` | Long date | `{d, date, long}` |
| `{d, date, full}` | Full date | `{d, date, full}` |
| `{t, time, short}` | Short time | `{t, time, short}` |
| `{n, plural, ...}` | Plural selection | `{n, plural, one {# item} other {# items}}` |
| `{v, select, ...}` | String selection | `{v, select, a {A} b {B} other {C}}` |
| `{n, selectordinal, ...}` | Ordinal selection | `{n, selectordinal, one {#st} two {#nd} other {#th}}` |
