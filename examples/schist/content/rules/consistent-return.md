+++
title = "consistent-return"
description = "Flags a function that mixes explicit return statements with implicit tail-expression returns across its branches."
date = "2025-08-21"
weight = 5
tags = ["control-flow", "readability"]
toc = true
[extra]
rule_id = "SCH041"
severity = "warn"
autofix = false
language = "Rust"
+++

Rust lets every block end in a tail expression instead of a `return`, which is idiomatic right up until a function mixes the two styles within the same set of branches — at that point the explicit `return` reads as a signal ("something unusual happens here") that the author did not intend. Schist counts the return style used by each terminal branch of a function and flags the function once more than one style is present, citing the branch that breaks the majority.

<!-- more -->

## Violation and fix

<div class="citation" role="group" aria-label="Violation and fix for SCH041, consistent-return">
<figure class="citation-pane citation-violation">
<figcaption><span>Violation</span><span>flags.rs</span></figcaption>
<pre><code>fn parse_flag(raw: &amp;str) -&gt; Option&lt;bool&gt; {
    if raw == "true" {
        <span class="flag-bad">return Some(true);</span>
    }
    if raw == "false" {
        Some(false)
    } else {
        None
    }
}</code></pre>
</figure>
<figure class="citation-pane citation-fixed">
<figcaption><span>Fixed</span><span>flags.rs</span></figcaption>
<pre><code>fn parse_flag(raw: &amp;str) -&gt; Option&lt;bool&gt; {
    if raw == "true" {
        <span class="flag-good">Some(true)</span>
    } else if raw == "false" {
        Some(false)
    } else {
        None
    }
}</code></pre>
</figure>
</div>

Two branches already used implicit tail expressions, so the fix folds the early `return` into the same `if`/`else if`/`else` chain rather than the other direction — Schist always proposes the majority style as the citation, since rewriting the minority branch is a smaller, more reviewable diff than rewriting the rest of the function.

## Why this stays a warning

A lone `return` is sometimes deliberate — an early exit buried inside a loop or a match arm genuinely needs the keyword's early-exit semantics, and Schist cannot always distinguish "early exit for control flow" from "stylistic inconsistency" from static analysis alone. The rule reports the branch and lets the author confirm which case it is.

## Configuration

```toml
[rules.consistent-return]
severity = "warn"
autofix = false
min_branches = 2   # functions with a single terminal branch are exempt
```

Raise `min_branches` on codebases with many small dispatch functions if the rule fires too often on trivial two-arm matches that the team does not consider worth normalizing.

## Related

- [no-shadowed-binding](/rules/no-shadowed-binding/) — another warn-severity rule that reasons about a function's structure rather than a single line.
- [no-empty-catch](/rules/no-empty-catch/) — the other control-flow rule Schist leaves for a human to fix.
- [Rules index](/rules/) — the full catalog in evaluation order.
