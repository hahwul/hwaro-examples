+++
title = "Good docs are thorough."
description = "They do not stop at the first paragraph. They cover the edge case the reader will hit at 02:00."
date = "2026-02-02"
weight = 5
template = "doc"
toc = true
[extra]
number = 5
+++

Thorough is not the same as long. A thorough page is one that has been examined for every reasonable reader-question and either answers it or names where the answer lives. Length is the side effect, not the goal.

## What thorough means

A thorough page has been *read* by people other than the writer. Specifically: someone who knows the system well enough to catch errors, and someone who does not know the system at all and reads the page from scratch. Both reviews matter. Skipping the second is the most common cause of documentation that *feels* thorough but isn't.

```
review 1: domain expert  → catches inaccuracies
review 2: fresh reader   → catches confusions
```

The two reviews surface different kinds of failure. The expert finds *wrong*. The fresh reader finds *unclear*. Both should pass before a page is considered thorough.

## Edge cases

Edge cases earn their own section, not their own scattered notes. A page that handles edge cases inline becomes harder to scan for the common case. A page that names a *Failure modes* or *Edge cases* section keeps the common path clean and gives the rare path a home.

- Common path stays at the top.
- Edge cases stay in their own section near the bottom.
- The reader can choose where to invest their attention.

## The 02:00 test

The most demanding reader of any documentation page is the person who reaches it at 02:00 because their system is broken. That reader does not have time to read four paragraphs of background. They need the relevant fact, fast.

A thorough page passes the 02:00 test when the relevant fact is findable in under thirty seconds — and the surrounding context is still there for the reader who arrives at 14:00 with time to read.

> Thoroughness without findability is just length.
