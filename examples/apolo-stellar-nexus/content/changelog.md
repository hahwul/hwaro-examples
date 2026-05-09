+++
title = "Changelog"
date = "2025-12-18"
tags = ["changelog", "release"]
categories = ["pages"]
+++

# Changelog

A short log of notable changes to the Stellar Nexus example. Dates follow the build cadence rather than calendar releases, since this is a demo site rather than a shipped product.

## 2025-12 — Quiet pass

- Reduced orb count on the landing template from six to four. Performance was fine before, but the composition felt busier than intended at narrow widths.
- Tightened the line-height on body copy so dense paragraphs in `page.html` breathe a little more.
- Switched the back-to-home link in the 404 template to use `base_url`, which fixes deep-deploy cases where the site lives under a subpath.

## 2025-10 — Typography refresh

- Moved headings from a single Inter weight onto Space Grotesk, paired with Inter for body and meta lines.
- Adjusted heading sizes to a slightly smaller scale; large hero text now feels less shouty against the dark background.

## 2025-09 — Initial port

- First version of the Stellar Nexus theme, ported from a private prototype. Includes index, page, section, taxonomy, taxonomy_term, and 404 templates wired up to the standard Hwaro context variables.
- Glass panel styles consolidated into a single rule set so future themes can fork them cleanly.
