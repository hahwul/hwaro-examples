+++
title = "no-shadowed-binding"
description = "Flags a loop or comprehension variable that reuses the name of a binding already live in an enclosing scope."
date = "2025-03-02"
weight = 2
tags = ["scoping", "readability"]
toc = true
[extra]
rule_id = "SCH014"
severity = "warn"
autofix = false
language = "Python"
+++

Shadowing is legal in every language Schist supports, which is exactly why it is worth flagging rather than trusting reviewers to catch it — the interpreter never complains, the tests often still pass, and the bug only shows up when someone reads the outer binding after the inner loop has quietly overwritten it. Schist tracks live bindings per scope and reports the inner declaration as a citation against the outer one, printing both source locations so the reviewer does not have to scroll to find the collision.

<!-- more -->

## Violation and fix

<div class="citation" role="group" aria-label="Violation and fix for SCH014, no-shadowed-binding">
<figure class="citation-pane citation-violation">
<figcaption><span>Violation</span><span>orders.py</span></figcaption>
<pre><code>def process(orders):
    total = 0
    for order in orders:
        total = compute_total(order)
        <span class="flag-bad">for total in order.line_items:</span>
            apply_discount(total)
    return total</code></pre>
</figure>
<figure class="citation-pane citation-fixed">
<figcaption><span>Fixed</span><span>orders.py</span></figcaption>
<pre><code>def process(orders):
    total = 0
    for order in orders:
        total = compute_total(order)
        <span class="flag-good">for item in order.line_items:</span>
            apply_discount(item)
    return total</code></pre>
</figure>
</div>

The inner `for total in order.line_items` rebinds `total` on every iteration, so the accumulator computed by `compute_total` is discarded before `process` ever returns it — the function silently returns the last line item instead of the running total. Renaming the loop variable is not cosmetic; it is the fix.

## Why this stays a warning, not an error

Schist does not autofix shadowing because the correct replacement name is a judgment call the tool cannot make safely — `item`, `line`, and `entry` are all reasonable here, and picking wrong just trades one confusing name for another. The rule reports the collision and leaves the rename to a human.

## Configuration

```toml
[rules.no-shadowed-binding]
severity = "warn"
autofix = false
scopes = ["function", "comprehension"]   # exclude "module" to allow top-level re-use
```

Teams that intentionally shadow at module scope — a common pattern in `__init__.py` re-exports — can drop `"module"` from `scopes` without disabling the rule everywhere else.

## Related

- [consistent-return](/rules/consistent-return/) — another readability rule that reasons about bindings across branches.
- [prefer-const-binding](/rules/prefer-const-binding/) — flags a different binding hygiene problem, over-eager mutability.
- [Rules index](/rules/) — the full catalog in evaluation order.
