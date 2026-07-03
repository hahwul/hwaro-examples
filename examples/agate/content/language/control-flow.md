+++
title = "Control Flow"
description = "if/elif/else, for loops with an empty-case else, and with — the three block statements, and how a bare else attaches to the block above it."
date = "2025-04-06"
weight = 4
toc = true
template = "chapter"
[extra]
chapter = "04"
+++

Agate has three block statements: `if`, `for`, and `with`. Because blocks close by dedenting rather than by a matching end tag, a clause like `else` has to attach to something — the rule is that a bare clause tag must sit at the exact indentation of the block it modifies, immediately after that block's body ends.

<!-- more -->

## if / elif / else

```
{% if status == "paid" %}
  Thanks — your receipt is attached.
{% elif status == "pending" %}
  We're waiting on your bank.
{% else %}
  This invoice was never charged.
```

`elif` and `else` sit at column zero, the same level as `if`, not indented under it. That alignment is what tells the compiler they belong to this conditional and not to some unrelated statement that happens to follow it.

## for, and its else

`for` iterates a list or a map's values, binding a loop variable and exposing `loop.index`, `loop.first`, and `loop.last` inside the body. An immediately following `else` at the same indentation runs when the collection is empty — no separate `if items.length == 0` needed:

```
{% for item in cart.items %}
  {{ loop.index }}. {{ item.name }} — {{ item.price | money }}
{% else %}
  Your cart is empty.
```

Iterating a map binds two variables, key first: `{% for key, value in settings %}`.

## with

`with` introduces a scoped alias — useful when an expression is long enough that repeating it hurts readability, or when a nested field needs a short name for the rest of the block:

```
{% with shipping = order.addresses.shipping %}
  {{ shipping.city }}, {{ shipping.region }}
  {{ shipping.postal_code }}
```

The alias is only visible inside the block; it does not leak into sibling statements at the same level, and it cannot shadow a name already bound by an enclosing `for` or `def`.

## No arbitrary nesting depth, but a practical one

Blocks can nest as deep as your indentation goes, but the compiler warns past six levels — not an error, because there are legitimate deeply-nested reports, but a strong signal that a `def` extracted from the inner block would read better than the indentation ladder currently does.
