+++
title = "Multi-language"
weight = 1
tags = ["i18n"]
+++

# Multi-language Support

Hwaro supports multilingual sites out of the box. Each language variant is created by adding a language suffix to the filename.

## Configuration

Define available languages in `config.toml`:

```toml
default_language = "en"

[languages.en]
language_name = "English"
weight = 1

[languages.ko]
language_name = "한국어"
weight = 2
```

## Content Structure

Add translated files alongside the original:

```
content/
├── docs/
│   ├── getting-started/
│   │   ├── _index.md        # English (default)
│   │   ├── _index.ko.md     # Korean
│   │   ├── installation.md
│   │   └── installation.ko.md
```

The language suffix (`.ko`) determines which language the content belongs to. Pages without a suffix use the default language.

{{ hint(type="info", message="Translated pages share the same URL structure, just under a language prefix: /ko/docs/getting-started/") }}

## Language Switcher

Use template variables to build a language switcher in your header:

```html
{% for lang in site.languages %}
  <a href="/{{ lang.code }}/">{{ lang.name }}</a>
{% endfor %}
```
