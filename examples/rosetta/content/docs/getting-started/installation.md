+++
title = "Installation"
description = "Install the Rosetta i18n library in your project"
tags = ["installation", "setup"]
+++

# Installation

Rosetta is distributed as a standard package for JavaScript and TypeScript projects. Install it using your preferred package manager.

## Package Managers

```bash
# npm
npm install @rosetta-i18n/core

# yarn
yarn add @rosetta-i18n/core

# pnpm
pnpm add @rosetta-i18n/core
```

## Framework Bindings

If you are using a UI framework, install the corresponding binding package alongside the core library:

| Framework | Package | Version |
|-----------|---------|---------|
| React | `@rosetta-i18n/react` | 3.2.x |
| Vue 3 | `@rosetta-i18n/vue` | 3.2.x |
| Svelte | `@rosetta-i18n/svelte` | 3.2.x |
| Next.js | `@rosetta-i18n/next` | 3.2.x |
| Nuxt 3 | `@rosetta-i18n/nuxt` | 3.2.x |
| Node.js (SSR) | `@rosetta-i18n/server` | 3.2.x |

```bash
# Example: React project
npm install @rosetta-i18n/core @rosetta-i18n/react
```

## Build Plugin

Rosetta provides an optional build plugin that extracts translation keys from source code and validates them against your locale bundles at compile time.

```bash
npm install --save-dev @rosetta-i18n/cli
```

After installation, add the extraction command to your build pipeline:

```json
{
  "scripts": {
    "i18n:extract": "rosetta extract --src ./src --out ./locales/en/extracted.json",
    "i18n:check": "rosetta check --locales ./locales --base en",
    "i18n:stats": "rosetta stats --locales ./locales"
  }
}
```

## Peer Dependencies

Rosetta core has no runtime dependencies. The framework bindings list their respective frameworks as peer dependencies:

| Binding | Peer Dependency |
|---------|----------------|
| `@rosetta-i18n/react` | `react >= 18.0` |
| `@rosetta-i18n/vue` | `vue >= 3.3` |
| `@rosetta-i18n/svelte` | `svelte >= 4.0` |
| `@rosetta-i18n/next` | `next >= 14.0` |

## Verifying the Installation

After installation, verify that the library loads correctly:

```typescript
import { createI18n } from '@rosetta-i18n/core';

const i18n = createI18n({
  defaultLocale: 'en',
  supportedLocales: ['en', 'fr', 'de', 'ja'],
});

console.log(i18n.locale); // "en"
console.log(i18n.supportedLocales); // ["en", "fr", "de", "ja"]
```

If you see the expected output, the installation is complete. Proceed to [Configuration](../configuration/) to set up your locale bundles.
