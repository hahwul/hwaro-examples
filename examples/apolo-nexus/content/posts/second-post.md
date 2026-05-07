+++
title = "Wiring the Nexus"
description = "How the apolo-nexus theme threads navigation, content, and taxonomy together."
date = 2024-02-14
tags = ["architecture", "navigation"]
+++

Apolo Nexus is built around a single idea: every entry point on the page should resolve to something meaningful. No dead links, no placeholder cards, no nav items that lead to empty taxonomy pages.

## Three Wiring Rules

1. The header links match the sections that actually exist in `content/`.
2. Tag chips appear only when the tag has at least two members.
3. The footer surfaces the most recent three posts so the home page is never the only landing.

These rules are conservative on purpose. The cost of a missing link is the user losing trust in the navigation; the cost of suppressing a tag with one entry is invisible.
