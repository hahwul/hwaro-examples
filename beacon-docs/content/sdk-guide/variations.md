+++
title = "Variations"
weight = 3
date = "2025-08-20"
description = "Flag variation types: boolean, string, number, and JSON"
+++

# Variations

A flag variation is the value returned when a flag is evaluated. Beacon supports four variation types, each with a dedicated evaluation method.

## Boolean flags

The simplest flag type. Returns `true` or `false`.

```typescript
const enabled = client.booleanFlag('dark-mode', user, false);
```

| Parameter | Type | Description |
|---|---|---|
| `flagKey` | string | Unique flag identifier |
| `user` | object | User context for targeting |
| `defaultValue` | boolean | Returned if flag is not found |

## String flags

Return a string value. Useful for feature variants, theme names, or copy testing.

```typescript
const variant = client.stringFlag('checkout-layout', user, 'control');

switch (variant) {
  case 'control':
    renderStandardCheckout();
    break;
  case 'streamlined':
    renderStreamlinedCheckout();
    break;
  case 'one-page':
    renderOnePageCheckout();
    break;
}
```

## Number flags

Return a numeric value. Useful for thresholds, limits, and numeric configuration.

```typescript
const maxRetries = client.numberFlag('api-max-retries', user, 3);
const rateLimit = client.numberFlag('rate-limit-rps', user, 100);
```

```python
max_retries = client.number_flag("api-max-retries", user, 3)
rate_limit = client.number_flag("rate-limit-rps", user, 100)
```

## JSON flags

Return a structured JSON object. Useful for complex configurations that change together.

```typescript
const config = client.jsonFlag('search-config', user, {
  algorithm: 'bm25',
  maxResults: 20,
  enableFuzzy: false,
});

console.log(config.algorithm);   // "semantic"
console.log(config.maxResults);  // 50
console.log(config.enableFuzzy); // true
```

> JSON flags are powerful but should be used sparingly. Prefer simpler flag types when possible to keep your flag configuration easy to understand.

## Variation type summary

| Type | Method (TS) | Method (Python) | Example values |
|---|---|---|---|
| Boolean | `booleanFlag()` | `boolean_flag()` | `true`, `false` |
| String | `stringFlag()` | `string_flag()` | `"control"`, `"variant-a"` |
| Number | `numberFlag()` | `number_flag()` | `3`, `100`, `0.5` |
| JSON | `jsonFlag()` | `json_flag()` | `{ "key": "value" }` |

## Default values

Every flag evaluation requires a default value. This value is returned when:

- The flag key does not exist in the configuration
- The client is not yet initialized
- The flag is disabled globally
- An error occurs during evaluation

Always choose a safe default that preserves existing behavior. For a new feature behind a flag, the default should keep the feature turned off.
