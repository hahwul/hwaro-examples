+++
title = "Whitespace and Indentation"
description = "Indentation is the only block structure Agate has — there are no closing tags, and trailing whitespace is a compile error."
date = "2025-02-03"
weight = 2
toc = true
template = "chapter"
[extra]
chapter = "02"
+++

This is the chapter that makes Agate what it is. Every other rule in the language is downstream of the decision made here: indentation is not formatting, it is the block structure itself, and the compiler will refuse to run rather than guess at yours.

<!-- more -->

## The indentation unit

A block level is exactly two spaces. Tabs are a compile error (`E-WS01`) wherever they appear, including inside a string literal that happens to be indented — if you need a tab in output, write it as `\t` inside a quoted value, never as a literal keystroke. Three spaces, one space, or a mix is also an error; Agate does not infer your unit from the first line the way some formatters do.

## Blocks close by dedenting

A statement tag that opens a block — `if`, `for`, `with`, `def`, `block` — must be alone on its line, nothing trailing after `%}`. Everything indented one level deeper than that tag is its body. The block ends the instant a following line returns to the opener's indentation or shallower. There is no `{% endif %}`, no `{% endfor %}`, nothing to leave behind when you delete the last line of a loop body:

```
{% for order in orders %}
  {% if order.total > 0 %}
    {{ order.id }}: {{ order.total | money }}
  {% for line in order.lines %}
    - {{ line.sku }} × {{ line.qty }}
Order summary complete.
```

`Order summary complete.` sits back at column zero, so it closes both the `for` and the `if` above it in one dedent — no scanning forward for a matching tag, because there is nothing to match.

## Trailing whitespace is an error everywhere

Not just on tag lines — on every line, statement or plain text. A single space or tab left at the end of a line is `E-WS02`, caught before the parser even builds a block tree. This feels harsh until you have debugged a diff where the only change was an invisible trailing space that silently altered how a downstream formatter joined two lines. Agate would rather stop your build than let that ship.

{{ alert(type="note", message="Most editors can be configured to strip trailing whitespace on save. Turn that setting on before you write your first `.agate` file — the compiler will thank you on line one.") }}

## Blank lines are output, not noise

A blank line written inside a block is preserved verbatim in the compiled output. This matters for whitespace-sensitive formats — YAML fragments, plain-text emails — where a template needs to control exactly how many empty lines appear between two sections. Agate does not collapse or trim them on your behalf; if you don't want a blank line in the output, don't leave one in the source.

## Operators get exactly one space

The strictness extends into expressions, covered next: binary operators must be surrounded by exactly one space on each side. `a == b` compiles; `a==b` and `a  ==  b` both fail with `E-WS03`. One canonical spelling means two files that do the same thing are byte-identical wherever whitespace could have made them diverge.
