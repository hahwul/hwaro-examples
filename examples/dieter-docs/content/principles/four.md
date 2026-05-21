+++
title = "Good docs are long-lasting."
description = "They are written to age well. They survive a rewrite of the underlying system."
date = "2026-01-26"
weight = 4
template = "doc"
toc = true
[extra]
number = 4
+++

Documentation written for the next six months is documentation that will need to be rewritten in six months. Write for two years. Write so that the page is still useful when the codebase underneath has been refactored twice.

## What ages well

Concepts age better than code. A page that explains *why* a feature exists ages better than a page that explains *how* to call it. The how can be regenerated from the source code. The why has to be written by a human who remembers the original decision.

| Layer | Half-life |
|-------|-----------|
| Why (motivation) | Years |
| What (concepts) | Years |
| How (API surface) | Months |
| Examples | Weeks |

Write the long half-life material yourself. Generate the short half-life material from the source.

## How to test for staleness

Once a quarter, read every page in the manual. If a page describes something that no longer exists or works differently than described, mark it for revision. If a page describes something that has not changed, leave it alone.

The discipline is to *not edit* what does not need editing. A page that survives three quarters untouched has earned its place.

> Stable documentation is the highest compliment a system can pay its documentation.

## When to deprecate

Deprecate a page when the system it describes has been retired, not when the system has been improved. Improvement updates the page. Retirement deprecates it. Confusing the two is how manuals turn into archives.
