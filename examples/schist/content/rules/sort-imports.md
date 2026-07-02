+++
title = "sort-imports"
description = "Flags an import block whose entries are not grouped by origin and sorted alphabetically within each group."
date = "2025-10-05"
weight = 6
tags = ["imports", "style", "autofix"]
toc = true
[extra]
rule_id = "SCH052"
severity = "hint"
autofix = true
language = "Go"
+++

An unordered import block is harmless to the compiler and mildly costly to every reviewer after the first — diffs get noisier than they need to be when a new import lands in whatever position the author's editor happened to save it, and merge conflicts multiply when two branches add imports near each other. Schist groups imports into standard library and everything else, sorts each group alphabetically, and separates the groups with a single blank line, matching the convention `goimports` already established for the ecosystem.

<!-- more -->

## Violation and fix

<div class="citation" role="group" aria-label="Violation and fix for SCH052, sort-imports">
<figure class="citation-pane citation-violation">
<figcaption><span>Violation</span><span>runner.go</span></figcaption>
<pre><code>import (
    "fmt"
    <span class="flag-bad">"schist/internal/lint"</span>
    "os"
    <span class="flag-bad">"context"</span>
)</code></pre>
</figure>
<figure class="citation-pane citation-fixed">
<figcaption><span>Fixed</span><span>runner.go</span></figcaption>
<pre><code>import (
    "context"
    "fmt"
    "os"
&#8203;
    <span class="flag-good">"schist/internal/lint"</span>
)</code></pre>
</figure>
</div>

`schist/internal/lint` is a local module import sitting in the middle of the standard-library group in the violation — Schist moves it into its own group below a blank line and re-sorts the standard-library entries around it, rather than just re-sorting in place, because a mixed group is itself the thing being flagged.

## Autofix

Import reordering never changes which symbols are visible to the file, so this is one of the rules Schist autofixes by default; the patch is a pure reordering of existing lines with no new tokens introduced.

## Configuration

```toml
[rules.sort-imports]
severity = "hint"
autofix = true
groups = ["stdlib", "local"]   # third-party imports would form a middle group if declared
```

Add a third group name to `groups` — commonly `"third_party"` — once a project vendors external modules; Schist detects module origin from the resolved import path, not from naming convention.

## Related

- [no-unused-import](/rules/no-unused-import/) — the other rule that touches the same import block, run in the same autofix pass.
- [prefer-const-binding](/rules/prefer-const-binding/) — another hint-severity rule with a mechanical, safe autofix.
- [Rules index](/rules/) — the full catalog in evaluation order.
