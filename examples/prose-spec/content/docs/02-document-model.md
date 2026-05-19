+++
title = "Document Model"
description = "The tree, its blocks, and the marks that decorate them."
date = "2026-04-19"
weight = 2
tags = ["model", "parser"]
categories = ["foundations"]
+++

Every Prose Spec source file resolves, after parsing, to a single value: a
*document tree*. The tree is the unit the rest of the engine reasons about.
It has a stable shape across input formats, which is why a project can mix
Markdown chapters with S-expression chapters without the formatter knowing
or caring. Once you understand the tree, the rest of the manual becomes
a description of operations on it.

## The shape of the tree

A document is a sequence of **blocks**. A block is a self-contained
typographic unit &mdash; a paragraph, a heading, a list, a code listing, a
figure. Blocks may contain other blocks (a list contains items; a
blockquote contains paragraphs), and they may contain inline content
decorated with **marks** (emphasis, links, citations, mathematical
notation).

```json
{
  "type": "document",
  "front_matter": { "title": "An Essay on Light" },
  "children": [
    { "type": "heading", "level": 1, "children": [
      { "type": "text", "value": "On Reflection" }
    ]},
    { "type": "paragraph", "children": [
      { "type": "text", "value": "The mirror, " },
      { "type": "text", "value": "considered closely", "marks": ["em"] },
      { "type": "text", "value": ", is never quite a copy." }
    ]}
  ]
}
```

This is the canonical form. You will rarely write it by hand, but every
plugin, every formatter, and every diagnostic message in the engine refers
to nodes in exactly this shape.

## Block kinds

The set of block kinds is closed. Plugins may add *attributes* to existing
blocks, but cannot introduce new top-level kinds without a corresponding
formatter contribution. This is deliberate: it keeps the tree portable.

| Block | Children | Notes |
|-------|----------|-------|
| `paragraph` | inline | The default. Most of your document is paragraphs. |
| `heading` | inline | Levels 1&ndash;6. Level 1 is reserved for the document title. |
| `list` | `list_item` | Ordered or unordered. May nest arbitrarily. |
| `blockquote` | block | Carries an optional `cite` attribute. |
| `code_block` | text | Has a `language` attribute. Highlighting is a formatter concern. |
| `figure` | block | Wraps a `figure_body` and an optional `caption`. |
| `table` | `table_row` | First row is the header unless `headerless = true`. |
| `divider` | none | A hairline rule. Rendered to a thin line in all formatters. |

> A tree that cannot be enumerated cannot be reasoned about.
> <cite>&mdash; from the engine's design notes, on the closed block set</cite>

## Marks

Marks decorate inline text. Unlike blocks, marks compose: a single text
node may carry several marks at once, and the order of marks is preserved
through the formatter so that, for example, a link inside an emphasized
phrase is rendered correctly.

```toml
# Built-in marks
marks = ["em", "strong", "code", "link", "cite", "smallcaps", "math"]
```

A mark is always an attribute of a text node; it never wraps other blocks.
This rule is what lets the engine guarantee that emphasis inside a heading
behaves the same way as emphasis inside a paragraph &mdash; the same node
shape, the same rules.

## Walking the tree

The engine exposes a stable iterator over the document. Plugins use it to
implement linting, indexing, and cross-referencing. The iterator yields
nodes in document order with a parent pointer.

```python
# A trivial plugin: collect every figure caption.
def collect_captions(doc):
    for node in walk(doc):
        if node.type == "figure":
            cap = node.find_child("caption")
            if cap:
                yield cap.plain_text()
```

The walker is read-only. Mutations are expressed as *transforms*, which
take a tree and return a new one. This is the only way to modify a
document inside the pipeline, and it is what makes builds reproducible.

## Round-tripping

Because the model is closed, the engine can serialize any tree back to a
canonical Markdown form. This is how Prose Spec implements `prose fmt`:
it parses, applies the formatter to the source, and writes the result back
to disk. Two passes of `prose fmt` on the same document always produce
the same bytes.

```bash
prose fmt chapters/01-philosophy.md
# => normalized: 1 file, 0 substantive changes
```

The next chapter takes the tree we have built here and turns it into
artifacts: PDF, HTML, and EPUB.
