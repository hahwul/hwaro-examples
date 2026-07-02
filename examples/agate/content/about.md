+++
title = "About"
description = "Why Agate treats indentation as the only source of truth, and how this reference is kept honest."
date = "2026-04-02"
+++

Agate started as a complaint. Its designer had spent a decade fixing bugs that were really just a `{% endfor %}` sitting under the wrong `{% if %}`, invisible in a diff, silent until a page rendered a cart total instead of a footer. Every popular template language of the era let you write structure two ways at once — the indentation you could see, and the nesting the parser actually believed — and treated the gap between them as a matter of taste. Agate closes the gap by deleting one of the two representations. Indentation is not a style guide; it is the only grammar the compiler reads.

<!-- more -->

## What the strictness buys you

The payoff is not aesthetic. Because a `.agate` file has one legal shape, the compiler never has to guess which closing tag you meant, which means it never emits a render function that is "probably" correct. Templates compile once, ahead of time, into ordinary functions in your host language — no tag lookup table walked on every request, no runtime string interpretation. The chapters in the [language reference](/language/) walk through this in order: delimiters first, then the whitespace rules that make the rest of the grammar possible, then the parts of the language whitespace exists to serve.

## How this reference is organized

Each chapter opens with its number and the two delimiters that make Agate what it is, `{% %}`, set oversized behind the heading — a small reminder that everything in this language traces back to two characters and the space between them. Chapters are meant to be read in sequence; each one leans on vocabulary from the last. If you only need one fact, the search overlay (press `/` anywhere) will get you there faster than the table of contents will.

## Reporting an error

This reference is maintained alongside the compiler and revised whenever the grammar changes. If you find a rule described here that the compiler no longer enforces, or a code sample that would fail to compile as written, treat the compiler as correct and the prose as the bug — then let the maintainers know so the next reader doesn't hit the same mismatch.
