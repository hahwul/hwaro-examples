+++
title = "Rosetta"
description = "Internationalization and localization guide for building multilingual applications"
tags = ["rosetta", "i18n", "internationalization", "localization"]
+++

# Rosetta

Rosetta is a comprehensive i18n (internationalization) and l10n (localization) framework for building applications that work across languages, scripts, and regions. It provides a unified API for managing translations, plural rules, date and number formatting, and bidirectional text layout.

## Core Capabilities

- **Translation Management** -- Key-based translation system with namespace support, fallback chains, and lazy loading of locale bundles
- **Plural Rules** -- CLDR-compliant plural category resolution for all supported locales, including languages with complex plural forms
- **ICU Message Format** -- Full support for ICU MessageFormat syntax including select, plural, selectordinal, and nested expressions
- **RTL Layout** -- Automatic bidirectional text handling with logical property mapping for right-to-left scripts

## Quick Navigation

| Section | Description |
|---------|-------------|
| [Getting Started](/docs/getting-started/) | Install the library, configure locales, and render your first translated string |
| [Translation](/docs/translation/) | Work with translation keys, plural forms, and string interpolation |
| [Advanced](/docs/advanced/) | RTL layout, locale-aware date formatting, and automatic language detection |

## Supported Locales

Rosetta ships with built-in support for 42 locales. The following table lists the most commonly used locales and their plural rule categories:

| Locale | Language | Script | Plural Categories |
|--------|----------|--------|-------------------|
| `en` | English | Latin | one, other |
| `fr` | French | Latin | one, many, other |
| `de` | German | Latin | one, other |
| `es` | Spanish | Latin | one, many, other |
| `pt-BR` | Portuguese (Brazil) | Latin | one, other |
| `ar` | Arabic | Arabic | zero, one, two, few, many, other |
| `zh-Hans` | Chinese (Simplified) | Han | other |
| `zh-Hant` | Chinese (Traditional) | Han | other |
| `ja` | Japanese | Kanji/Kana | other |
| `ko` | Korean | Hangul | other |
| `ru` | Russian | Cyrillic | one, few, many, other |
| `pl` | Polish | Latin | one, few, many, other |
| `tr` | Turkish | Latin | one, other |
| `he` | Hebrew | Hebrew | one, two, other |
| `th` | Thai | Thai | other |

## Architecture Overview

Rosetta operates as a layered system where locale data flows through resolution, formatting, and rendering stages:

```
  Application Code
        |
        v
  +------------------+     +------------------+     +----------------+
  |  Locale Resolver  | --> |  Message Compiler | --> |  Renderer      |
  +------------------+     +------------------+     +----------------+
        |                         |                        |
        v                         v                        v
   Locale Config             ICU AST Cache           Formatted Output
   + Fallback Chain          + Plural Rules          + Bidi Markers
```

The Locale Resolver determines the active locale from configuration, URL parameters, cookies, or browser headers. The Message Compiler parses ICU MessageFormat strings into an AST and caches the result. The Renderer evaluates the AST against runtime variables to produce the final localized string.

## Bundle Format

Translation bundles are stored as JSON files organized by locale and namespace:

```
locales/
  en/
    common.json
    errors.json
    dashboard.json
  fr/
    common.json
    errors.json
    dashboard.json
  ar/
    common.json
    errors.json
    dashboard.json
```

Each JSON file contains a flat or nested key-value structure:

```json
{
  "greeting": "Hello, {name}!",
  "items_count": "{count, plural, one {# item} other {# items}}",
  "last_login": "Last login: {date, date, medium}"
}
```
