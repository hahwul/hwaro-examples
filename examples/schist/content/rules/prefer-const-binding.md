+++
title = "prefer-const-binding"
description = "Suggests const for a binding that is declared with let but never reassigned after initialization."
date = "2025-04-18"
weight = 3
tags = ["style", "autofix", "bindings"]
toc = true
[extra]
rule_id = "SCH022"
severity = "hint"
autofix = true
language = "TypeScript"
+++

`let` is a promise to the reader that a binding will change. When it never does, the promise is false advertising — the next person to touch the function has to trace every branch to confirm the variable really is stable before they can reason about it safely. Schist scans each binding's reference list for a write after its initializer; if none exists, the declaration is a hint, not a warning, because a mutable binding that happens not to mutate yet is not a bug, just an opportunity.

<!-- more -->

## Violation and fix

<div class="citation" role="group" aria-label="Violation and fix for SCH022, prefer-const-binding">
<figure class="citation-pane citation-violation">
<figcaption><span>Violation</span><span>listener.ts</span></figcaption>
<pre><code><span class="flag-bad">let config = loadConfig();
let handler = (event: Event) => {</span>
  config.count += 1;
};</code></pre>
</figure>
<figure class="citation-pane citation-fixed">
<figcaption><span>Fixed</span><span>listener.ts</span></figcaption>
<pre><code><span class="flag-good">const config = loadConfig();
const handler = (event: Event) => {</span>
  config.count += 1;
};</code></pre>
</figure>
</div>

Note that `config.count += 1` mutates a property on the object `config` points at, not the `config` binding itself — the reference never changes, so `const` is correct even though the object it holds is mutable. Schist's binding analysis distinguishes property mutation from reassignment; a rule that conflated the two would produce false positives on nearly every object-holding binding in a typical codebase.

## Autofix

Rewriting `let` to `const` is mechanical and behavior-preserving by construction — if a later write existed, the rule would not have fired — so Schist applies this fix in the same pass as `no-unused-import` when both are enabled.

## Configuration

```toml
[rules.prefer-const-binding]
severity = "hint"
autofix = true
```

There is no `ignore` list for this rule; if a binding is ever reassigned, the analysis simply does not flag it, so exemptions are rarely necessary.

## Related

- [no-unused-import](/rules/no-unused-import/) — the other rule Schist autofixes in the same binding-hygiene pass.
- [no-shadowed-binding](/rules/no-shadowed-binding/) — a scoping problem the mutability check does not catch.
- [Rules index](/rules/) — the full catalog in evaluation order.
