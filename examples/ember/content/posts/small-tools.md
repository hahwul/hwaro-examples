+++
title = "Small Tools"
date = "2026-03-02"
description = "An argument for software that does one thing well, stays out of the way, and does not ask for your attention."
tags = ["tools", "software", "craft"]
+++

There is a category of software that I think of as small tools. They are programs that do one thing, do it reliably, and do not attempt to do anything else. They do not send notifications. They do not have social features. They do not require accounts, subscriptions, or onboarding flows. They are, in the oldest sense of the word, tools: objects shaped for a purpose, indifferent to everything outside that purpose.

## The Unix Precedent

The philosophy is not new. The Unix tradition established it decades ago: write programs that do one thing well, write programs that work together, write programs that handle text streams. The commands that embody this philosophy -- `grep`, `sort`, `awk`, `sed` -- are still in daily use half a century later, which is as close to immortality as software gets.

What makes these tools endure is not their features. It is their constraints. Each one has a narrow scope, a predictable interface, and no ambition beyond its stated purpose. You can learn `grep` in an afternoon and use it for the rest of your career. The same cannot be said of most modern software.

```bash
# Find all lines containing "error" in log files
grep -r "error" /var/log/*.log

# Count occurrences per file
grep -c "error" /var/log/*.log | sort -t: -k2 -nr
```

## What Small Means

Small does not mean simple. A small tool can be internally sophisticated. What makes it small is the surface it presents to the user:

- **Few controls** -- the interface exposes only what is necessary
- **No state** -- the tool does not remember previous sessions or accumulate cruft
- **Composability** -- the tool works well with other tools, accepting input and producing output in standard formats
- **Silence** -- the tool does not speak unless spoken to

This last quality -- silence -- is perhaps the most important and the most neglected. Modern software is noisy. It badges, pings, suggests, recommends, and reminds. Every notification is a small interruption, and the cumulative effect of hundreds of small interruptions is a mind that never fully settles into focused work.

A small tool is quiet. It waits until you need it, does what you ask, and returns to the background.

## The Pressure Toward Largeness

Software tends to grow. This is partly economic -- a product with more features can justify a higher price -- and partly cultural: developers want to build, and building means adding. The result is that most tools, given enough time, become platforms.

The text editor becomes an IDE. The note-taking app becomes a knowledge management system. The to-do list becomes a project management suite. At each stage, the tool becomes more capable and less pleasant to use. The interface accumulates options. The documentation grows. The mental model required to operate the tool expands until it crowds out the mental model of the work itself.

## Choosing Constraints

The alternative is deliberate constraint. Not because constraints are inherently virtuous, but because they preserve the tool's original gift: the ability to disappear into the work.

The best pen does not make you think about pens. The best hammer does not make you think about hammers. And the best software does not make you think about software. It makes you think about whatever you sat down to think about.

I keep my toolkit small. A plain text editor. A terminal. A version control system. A static site generator. Each tool does one thing. Together, they do everything I need. The gaps between them are not bugs. They are the spaces where my own judgment operates, and that is exactly where I want to be.
