+++
title = "Theme Tokens and the Accent Resolver"
date = 2024-07-03
description = "A walkthrough of the token resolution pipeline that powers Cobalt Engine themes."
+++

# Theme Tokens and the Accent Resolver

Cobalt Engine themes are described as a flat token table. The engine resolves these tokens at build time and emits both a CSS custom property layer and a static fallback layer. This post documents the resolver, including how aliases are flattened and how circular references are reported.

## Token Definition

A token file is TOML. Each token has a value, an optional alias target, and an optional condition tied to the active color scheme.

```toml
[tokens.color]
"surface" = { value = "#0b1320" }
"surface-raised" = { alias = "color.surface", lighten = 0.06 }
"accent" = { value = "var(--user-accent, #5be3ff)" }
```

## Resolution Order

The resolver runs four passes. First, raw values are validated against their declared type. Second, aliases are dereferenced depth-first with cycle detection. Third, transforms such as `lighten` and `darken` are applied in declaration order. Fourth, the resolved table is serialized into both a CSS custom property block and a flat static map for environments that disable runtime theming.

## Cycle Reporting

When the resolver detects a cycle, it prints the full chain. The error includes the source file and line for each node, so a four-step cycle shows four pointers. This replaces the previous behavior, which silently dropped the offending tokens and left the surface visually broken.

## Runtime Overrides

A small JavaScript helper reads the `data-theme` attribute on the root element and switches between resolved layers. The helper is 1.1 KB minified and ships only when the theme defines more than one scheme. Single-scheme themes pay nothing for this feature.

## Migration Notes

Themes built against v1.0 continue to work. The new transforms are opt-in. To adopt them, declare `cobalt_version = "1.2"` in the theme manifest.
