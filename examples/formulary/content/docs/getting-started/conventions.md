+++
title = "Conventions"
description = "Formatting conventions for theorems, definitions, and proofs"
tags = ["conventions", "getting-started"]
+++

# Conventions

This page explains the formatting conventions used throughout the Formulary for presenting mathematical content.

## Theorems

Theorems state important results that have been rigorously proven. They appear in yellow-bordered boxes:

<div class="theorem" data-title="Pythagoras">
<p>In a right triangle with legs $a$ and $b$ and hypotenuse $c$:</p>
<p>$$a^2 + b^2 = c^2$$</p>
</div>

## Definitions

Definitions introduce new concepts or terms. They appear with a blue left border:

<div class="definition" data-title="Continuous Function">
<p>A function $f: \mathbb{R} \to \mathbb{R}$ is <strong>continuous</strong> at a point $c$ if:</p>
<p>$$\lim_{x \to c} f(x) = f(c)$$</p>
</div>

## Proofs

Proofs provide the logical argument supporting a theorem. They appear in italic:

<div class="proof">
<p>Let $a$ and $b$ be the legs of a right triangle. Construct a square of side $(a+b)$ containing four copies of the triangle. The inner square has side $c$, so $c^2 = (a+b)^2 - 4 \cdot \frac{1}{2}ab = a^2 + b^2$.</p>
</div>

## Display Math vs Inline Math

Inline math is used within sentences, such as $f(x) = x^2$. Display math is used for standalone formulas that deserve their own line:

$$\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}$$

## Formula Tables

When multiple related formulas are presented together, they appear in tables with the formula, name, and any conditions or notes.

| Formula | Name | Condition |
|---------|------|-----------|
| $(a+b)^2 = a^2 + 2ab + b^2$ | Square of a sum | -- |
| $(a-b)^2 = a^2 - 2ab + b^2$ | Square of a difference | -- |
| $a^2 - b^2 = (a+b)(a-b)$ | Difference of squares | -- |

## Cross-references

Formulas and results referenced from other sections are linked. Each section builds on earlier material where possible, and prerequisites are noted at the top of each page.
