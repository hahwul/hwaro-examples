+++
title = "no-empty-catch"
description = "Flags a catch block with no statements, which discards the caught exception without logging, rethrowing, or handling it."
date = "2025-06-09"
weight = 4
tags = ["error-handling", "correctness"]
toc = true
[extra]
rule_id = "SCH033"
severity = "error"
autofix = false
language = "Java"
+++

An empty catch block is the one pattern Schist treats as an error regardless of language, because the failure mode is always the same: an exceptional condition the author clearly anticipated — they wrote a catch clause for it — is swallowed with no trace left anywhere. The caller sees success. The logs show nothing. The bug report, when it eventually arrives, starts from zero evidence.

<!-- more -->

## Violation and fix

<div class="citation" role="group" aria-label="Violation and fix for SCH033, no-empty-catch">
<figure class="citation-pane citation-violation">
<figcaption><span>Violation</span><span>Checkout.java</span></figcaption>
<pre><code>try {
    inventory.reserve(sku, quantity);
<span class="flag-bad">} catch (InsufficientStockException e) {
}</span></code></pre>
</figure>
<figure class="citation-pane citation-fixed">
<figcaption><span>Fixed</span><span>Checkout.java</span></figcaption>
<pre><code>try {
    inventory.reserve(sku, quantity);
} catch (InsufficientStockException e) {
<span class="flag-good">    log.warn("reservation failed for {}: {}", sku, e.getMessage());
    throw new CheckoutBlockedException(sku, e);</span>
}</code></pre>
</figure>
</div>

The fixed version does two separate things and both matter: it logs the exception with enough context to diagnose it later, and it converts the low-level `InsufficientStockException` into a `CheckoutBlockedException` that the caller's error boundary already knows how to render. Logging alone would satisfy the rule but leave the caller's `try` block silently falling through to whatever code follows — usually a worse bug than the one being fixed.

## Why Schist will not autofix this

There is no mechanical replacement for an empty catch block, because the correct handling — retry, rethrow, degrade, log-and-continue — depends on what the surrounding code is trying to guarantee. Schist reports the location and the exception type and stops there.

## Configuration

```toml
[rules.no-empty-catch]
severity = "error"
autofix = false
allow_comment_only = false   # a catch block containing only a comment still counts as empty
```

Setting `allow_comment_only = true` is available for codebases with an established `// intentionally ignored: <reason>` convention, but Schist's default treats a bare comment the same as no comment at all — comments are not enforced, so they are not evidence of a decision.

## Related

- [consistent-return](/rules/consistent-return/) — another control-flow rule that reasons about a function's exit paths.
- [About Schist](/about/) — how the autofix pipeline decides which rules are safe to patch automatically.
- [Rules index](/rules/) — the full catalog in evaluation order.
