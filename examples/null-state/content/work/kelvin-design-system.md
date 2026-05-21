+++
title = "Kelvin Design System"
date = "2026-04-12"
description = "Token-first design system shipped as a Crystal-generated CSS bundle. 1.4kb gzipped runtime."
tags = ["systems", "typography", "tooling"]
+++

## Project

Kelvin is the internal design system for a logistics company managing 40,000 active deliveries per day. They had outgrown their original component library — built in React three years earlier — and needed a system that could survive a planned migration from React to a server-rendered architecture without rewriting the visual language.

We were brought in for a four-month engagement to design the system from first principles, ship the tokens, and document the path forward.

## What we shipped

- A **token system** of 142 named primitives, sourced from a single TOML file at the root of the repo.
- A **CSS generator** written in Crystal that compiles the tokens into a 1.4kb gzipped runtime stylesheet. The generator runs as part of the build, not at runtime — no JavaScript required to load styles.
- A **reference site** demonstrating every component in three states: light, dark, and high-contrast. Each component lives as a single HTML file, viewable directly without a build step.
- A **48-page written brief** documenting every consequential decision and the alternatives we considered. The brief is published in their internal docs and is part of onboarding.

## Outcome

The system replaced a 380kb component bundle. The reference site went from a 4.2 second time-to-interactive to 180 milliseconds on the same target hardware. The migration from React to server-rendered HTML was completed three months ahead of schedule because the visual language did not need to be touched.

## Tools

Crystal · Hwaro · TOML · CSS custom properties · no JS framework
