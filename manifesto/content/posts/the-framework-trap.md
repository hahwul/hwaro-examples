+++
title = "The Framework Trap"
date = "2026-03-15"
description = "We keep choosing complexity because simplicity feels like falling behind. It is not."
tags = ["opinion", "frameworks", "simplicity"]
categories = ["technology"]
+++

There is a disease in software engineering, and it spreads through conference talks and Twitter threads. It tells you that your stack is not enough. That you need another layer of abstraction. That the tool you shipped with last year is now legacy.

**It is lying to you.**

<!-- more -->

## The Cycle

Every eighteen months, the industry produces a new framework that promises to solve the problems created by the last framework. React replaced jQuery. Then we needed state management, so Redux appeared. Redux was too verbose, so we got MobX, Zustand, Jotai, Recoil. Each one simpler than the last, each one adding another entry to your dependency tree.

The pattern is always the same:

1. A real problem exists
2. Someone builds a solution
3. The solution becomes popular
4. The solution creates new problems
5. Someone builds a solution to those problems
6. Return to step 3

This is not progress. This is a treadmill.

## What We Lost

There was a time when a web developer needed to know three things: HTML, CSS, and enough JavaScript to validate a form. A page loaded in milliseconds because it was *just a page*. The browser was the platform, and it was remarkably capable.

> The best code is no code at all. The second best code is code that someone else maintains. The third best is code you wrote once and never touched again.

We traded that simplicity for component trees, virtual DOMs, hydration strategies, and bundle optimization. We built tools to solve problems that only exist because of other tools we built.

## The Way Out

The answer is not to reject all frameworks. Some problems genuinely require sophisticated tooling. A real-time collaborative editor is not the same as a blog.

The answer is to **ask the right question first**: what does this project actually need?

Not what does it *might* need in eighteen months. Not what would be *interesting* to build with. Not what looks best on a resume. What does it need *right now*, to serve the people who will use it?

Nine times out of ten, the answer is simpler than you think. A static site generator. A server-rendered page with a sprinkle of JavaScript. A database query that returns HTML.

## The Uncomfortable Truth

Choosing simple technology is a career risk in an industry that rewards complexity. Nobody gets promoted for shipping a PHP monolith that works. Nobody gives a conference talk about the jQuery plugin that has run without issues for six years.

But the users do not care about your architecture. They care about whether the page loads. Whether the button works. Whether their data is safe.

Build for them, not for your next job interview.
