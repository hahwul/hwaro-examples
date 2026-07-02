+++
title = "no-unused-import"
description = "Flags an import binding that is never referenced in the file it is declared in."
date = "2025-01-14"
weight = 1
tags = ["imports", "correctness", "autofix"]
toc = true
[extra]
rule_id = "SCH001"
severity = "error"
autofix = true
language = "JavaScript"
+++

An import that is never read is dead weight at best and a correctness bug at worst — it is evidence that a refactor removed the call site but not the wire that fed it, and the next reader has no way to tell which import was load-bearing without checking every reference by hand. Schist walks the module's binding table after parsing and flags any imported identifier with zero read references anywhere in the file, including destructured named imports.

<!-- more -->

## Violation and fix

<div class="citation" role="group" aria-label="Violation and fix for SCH001, no-unused-import">
<figure class="citation-pane citation-violation">
<figcaption><span>Violation</span><span>cart.js</span></figcaption>
<pre><code><span class="flag-bad">import { debounce, throttle } from './utils';</span>
import { formatCurrency } from './money';
export function renderTotal(cart) {
  return formatCurrency(cart.total);
}</code></pre>
</figure>
<figure class="citation-pane citation-fixed">
<figcaption><span>Fixed</span><span>cart.js</span></figcaption>
<pre><code>import { formatCurrency } from './money';
export function renderTotal(cart) {
  return formatCurrency(cart.total);
}</code></pre>
</figure>
</div>

Neither `debounce` nor `throttle` is referenced anywhere below the import line, so the whole specifier list is removed rather than trimmed to a partial list — a partial fix would still leave an unused-import diagnostic on the next pass.

## Autofix

The autofix pass is safe here because removing an unread binding cannot change runtime behavior; Schist verifies this by re-parsing the patched file and confirming the binding table has one fewer entry and the reference graph is otherwise unchanged before it writes the patch to disk.

## Configuration

```toml
[rules.no-unused-import]
severity = "error"
autofix = true
ignore = ["^_"]   # leading-underscore imports are exempt (intentional re-exports)
```

Set `ignore` when a module deliberately re-exports an import for its side effects, such as a polyfill or a CSS module — Schist otherwise has no way to distinguish that from dead weight.

## Related

- [sort-imports](/rules/sort-imports/) — the other autofixed rule that touches the import block, so both run in the same pass.
- [prefer-const-binding](/rules/prefer-const-binding/) — the other binding-hygiene rule Schist ships at hint severity.
- [Rules index](/rules/) — the full catalog in evaluation order.
