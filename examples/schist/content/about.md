+++
title = "About Schist"
description = "What Schist is, how its autofix pipeline works, and how teams share a rule set across repositories."
date = "2025-02-11"
tags = ["about"]
toc = true
+++

Schist is a lint runner built around one premise: a finding is only useful if it reads like evidence. Every rule in the catalog states what it flags, shows the violating code next to the fix, and says plainly whether the runner can apply that fix itself or whether it needs a human to decide. Nothing in the report is hidden behind a rule code you have to look up elsewhere — the citation is the documentation.

## One engine, several front ends

Schist parses each supported language into a shared intermediate representation before any rule runs against it, so a rule like `no-shadowed-binding` is written once against scope and binding data rather than once per language grammar. Front-end adapters exist today for JavaScript, TypeScript, Python, Go, Rust, and Java; a new adapter only has to produce the shared IR correctly, not reimplement every rule.

## The autofix pipeline

Rules marked `autofix = true` run through a three-stage pipeline: detect, patch, verify. Detection finds the violation and records the exact span it touches. Patching generates a replacement for that span alone, never a broader rewrite. Verification re-parses the patched file and confirms the fix removed the original finding without introducing a new one — if verification fails, Schist discards the patch and reports the violation as if autofix were unavailable, rather than writing a change nobody asked for.

## Shareable rule sets

A rule set lives in a single `schist.toml` at the root of a repository, and that file can `extend` a published base — a security team can publish `@schist/strict-errors` once and every service repository inherits it, overriding only what a specific codebase genuinely needs to differ on. Severity, autofix, and per-rule options are all overridable per project without forking the base set itself, so an update to the shared base propagates the next time each repository runs `schist update`.

## Running it

In CI, `schist check --format=sarif` is the common entry point; locally, `schist check --fix` applies every safe autofix and leaves everything else — the errors, mostly — for the editor to point at directly. The [rule index](/rules/) in this catalog is generated from the same rule metadata the runner reads at check time, so a rule's documented severity and autofix status can never drift from what actually happens on a real run. [no-empty-catch](/rules/no-empty-catch/) is a good starting point if you want to see the citation format on an error-severity rule before browsing the rest.
