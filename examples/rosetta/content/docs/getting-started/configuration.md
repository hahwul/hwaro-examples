+++
title = "Configuration"
description = "Configure locales, fallback chains, and bundle loading for Rosetta"
tags = ["configuration", "setup"]
+++

# Configuration

Rosetta is configured through a single initialization object that defines your supported locales, fallback behavior, and bundle loading strategy.

## Basic Configuration

```typescript
import { createI18n } from '@rosetta-i18n/core';
import en from './locales/en/common.json';

const i18n = createI18n({
  defaultLocale: 'en',
  supportedLocales: ['en', 'fr', 'de', 'ar', 'ja', 'ko'],
  fallbackLocale: 'en',
  bundles: {
    en: { common: en },
  },
});
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `defaultLocale` | `string` | -- | The locale used when no user preference is detected |
| `supportedLocales` | `string[]` | -- | List of all locales your application supports |
| `fallbackLocale` | `string` | `defaultLocale` | Locale used when a key is missing in the active locale |
| `fallbackChain` | `Record<string, string[]>` | -- | Per-locale fallback chains for regional variants |
| `bundles` | `Record<string, Record<string, object>>` | `{}` | Pre-loaded translation bundles organized by locale and namespace |
| `loadBundle` | `(locale, ns) => Promise<object>` | -- | Async function for lazy-loading translation bundles |
| `missingKeyHandler` | `(key, locale) => string` | -- | Callback invoked when a translation key is not found |
| `escapeHtml` | `boolean` | `true` | Whether to escape HTML entities in interpolated values |

## Fallback Chains

For regional locale variants, define explicit fallback chains so that missing translations resolve to a parent locale before falling back to the default:

```typescript
const i18n = createI18n({
  defaultLocale: 'en',
  supportedLocales: ['en', 'en-GB', 'en-AU', 'pt', 'pt-BR', 'zh-Hans', 'zh-Hant'],
  fallbackChain: {
    'en-GB': ['en'],
    'en-AU': ['en-GB', 'en'],
    'pt-BR': ['pt'],
    'zh-Hant': ['zh-Hans'],
  },
});
```

With this configuration, a missing key in `en-AU` will first be looked up in `en-GB`, then `en`, before triggering the missing key handler.

## Lazy Loading

For applications with many locales or large translation bundles, use the `loadBundle` option to fetch bundles on demand:

```typescript
const i18n = createI18n({
  defaultLocale: 'en',
  supportedLocales: ['en', 'fr', 'de', 'ar', 'ja'],
  loadBundle: async (locale, namespace) => {
    const module = await import(`./locales/${locale}/${namespace}.json`);
    return module.default;
  },
});
```

Bundles are cached after the first load. Subsequent requests for the same locale and namespace return the cached version without another network request.

## Namespace Configuration

Rosetta organizes translations into namespaces. Each namespace corresponds to a separate JSON file in the locale directory. Configure the default namespace and available namespaces:

```typescript
const i18n = createI18n({
  defaultLocale: 'en',
  supportedLocales: ['en', 'fr'],
  defaultNamespace: 'common',
  namespaces: ['common', 'errors', 'dashboard', 'settings'],
  loadBundle: async (locale, namespace) => {
    const res = await fetch(`/locales/${locale}/${namespace}.json`);
    return res.json();
  },
});
```

## Missing Key Handling

By default, missing keys return the key path itself. Override this behavior with a custom handler:

```typescript
const i18n = createI18n({
  defaultLocale: 'en',
  supportedLocales: ['en', 'fr'],
  missingKeyHandler: (key, locale) => {
    console.warn(`Missing translation: ${key} [${locale}]`);
    return `[${key}]`;
  },
});
```

In development, you can configure the handler to throw an error so that missing translations are caught early:

```typescript
missingKeyHandler: (key, locale) => {
  if (process.env.NODE_ENV === 'development') {
    throw new Error(`Missing translation: ${key} [${locale}]`);
  }
  return key;
},
```

## Environment-Specific Settings

| Setting | Development | Production |
|---------|-------------|------------|
| `missingKeyHandler` | Throw error or console warning | Return key path silently |
| `escapeHtml` | `true` | `true` |
| Bundle loading | Inline imports for fast HMR | Dynamic imports with CDN caching |
| Key validation | `rosetta check` in CI | `rosetta check` as build gate |
