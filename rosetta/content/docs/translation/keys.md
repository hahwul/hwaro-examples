+++
title = "Translation Keys"
description = "Defining and organizing translation keys in Rosetta"
tags = ["translation", "keys"]
+++

# Translation Keys

Translation keys are the identifiers used to look up localized strings. Rosetta uses a dot-separated key path convention that maps to nested JSON structures in your locale bundles.

## Key Naming Conventions

Use descriptive, hierarchical key names that reflect the UI location or semantic purpose of the string:

```json
{
  "nav.home": "Home",
  "nav.settings": "Settings",
  "nav.logout": "Log out",
  "dashboard.title": "Dashboard",
  "dashboard.welcome": "Welcome back, {name}",
  "errors.not_found": "Page not found",
  "errors.network": "Unable to connect to the server"
}
```

Avoid generic names like `label1` or `text_a`. Keys should be self-documenting so that translators understand the context without needing screenshots.

## Key Path Resolution

Keys are resolved using dot notation. Given the following nested JSON:

```json
{
  "user": {
    "profile": {
      "name": "Name",
      "email": "Email address",
      "bio": "Biography"
    },
    "settings": {
      "language": "Language",
      "timezone": "Time zone"
    }
  }
}
```

The key `user.profile.name` resolves to `"Name"`. Both flat and nested structures are supported; Rosetta normalizes them internally to the same representation.

## Using Keys in Code

The `t()` function resolves a key to its translated value for the active locale:

```typescript
import { useI18n } from '@rosetta-i18n/react';

function Header() {
  const { t } = useI18n();

  return (
    <header>
      <h1>{t('dashboard.title')}</h1>
      <p>{t('dashboard.welcome', { name: 'Alice' })}</p>
    </header>
  );
}
```

## Namespaced Keys

When using multiple namespaces, prefix the key with the namespace name separated by a colon:

```typescript
t('errors:not_found')    // looks up "not_found" in the "errors" namespace
t('dashboard:title')     // looks up "title" in the "dashboard" namespace
t('nav.home')            // looks up "nav.home" in the default namespace
```

## Key Extraction

The Rosetta CLI extracts translation keys from your source code by scanning for `t()` calls:

```bash
rosetta extract --src ./src --out ./locales/en/extracted.json
```

This produces a JSON file containing all keys found in the codebase:

```json
{
  "nav.home": "",
  "nav.settings": "",
  "dashboard.title": "",
  "dashboard.welcome": "",
  "errors.not_found": "",
  "errors.network": ""
}
```

Use `rosetta check` to compare extracted keys against your locale bundles and identify missing or unused translations:

```bash
rosetta check --locales ./locales --base en
```

Example output:

```
Checking locales against base: en

  fr:
    missing: errors.network, dashboard.welcome
    unused: legacy.old_key

  de:
    missing: errors.network
    unused: (none)

  ar:
    missing: errors.network, nav.logout
    unused: legacy.old_key, legacy.deprecated

Summary: 3 locales checked, 5 missing keys, 3 unused keys
```

## Key Reference Table

The following table shows the standard key structure used across the example application:

| Key | Namespace | en | fr | de |
|-----|-----------|----|----|-----|
| `nav.home` | common | Home | Accueil | Startseite |
| `nav.settings` | common | Settings | Parametres | Einstellungen |
| `nav.logout` | common | Log out | Deconnexion | Abmelden |
| `dashboard.title` | dashboard | Dashboard | Tableau de bord | Instrumententafel |
| `errors.not_found` | errors | Page not found | Page non trouvee | Seite nicht gefunden |
| `errors.network` | errors | Connection failed | Connexion echouee | Verbindung fehlgeschlagen |
| `user.profile.name` | common | Name | Nom | Name |
| `user.profile.email` | common | Email address | Adresse e-mail | E-Mail-Adresse |
