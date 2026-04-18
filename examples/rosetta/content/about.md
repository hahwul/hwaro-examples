+++
title = "About Rosetta"
description = "About the Rosetta internationalization framework and project"
tags = ["about", "rosetta"]
+++

# About Rosetta

Rosetta is an open-source internationalization framework designed for development teams building applications that serve users across languages, scripts, and regions. The project was created to provide a single, consistent API for all aspects of localization -- from string translation to date formatting to bidirectional layout.

## Design Principles

Rosetta is built around four principles:

- **Standards Compliance** -- Rosetta implements the Unicode CLDR specification for plural rules, date/time patterns, and number formatting. ICU MessageFormat is the default string syntax.
- **Bundle Efficiency** -- Locale data is loaded on demand. Only the active locale and its fallback chain are held in memory. Bundles can be split by namespace for granular loading.
- **Framework Agnostic** -- The core library has no framework dependencies. Bindings are available for React, Vue, Svelte, and server-side rendering environments.
- **Type Safety** -- Translation keys are statically analyzed at build time. Missing keys, unused keys, and type mismatches in interpolation variables produce compile-time warnings.

## Project History

Rosetta started as an internal utility for managing translations across a multi-tenant SaaS platform that served users in 18 languages. The initial version was a thin wrapper around ICU4J with a JSON bundle loader. Over time, the project expanded to include plural rule compilation, bidirectional text support, and a build-time key extraction pipeline.

The project is maintained by a team of engineers and linguists who specialize in internationalization tooling. Contributions are accepted through standard pull request workflows.

## License

Rosetta is released under the MIT license. Commercial support and consulting for large-scale localization projects are available through separate agreements.

## Contact

- **Source** -- [github.com/rosetta-i18n/rosetta](https://github.com/rosetta-i18n/rosetta)
- **Issues** -- Use the GitHub issue tracker for bug reports and feature requests
- **Discussion** -- Join the community forum for questions and design discussions

## Documentation

This documentation site is built with [Hwaro](https://github.com/hahwul/hwaro), a fast static site generator.
