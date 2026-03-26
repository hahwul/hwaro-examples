+++
title = "On Writing Readable Code"
date = "2026-03-20"
description = "Readability is not a luxury. It is the most important property your code can have, because code is read far more often than it is written."
tags = ["code", "craft", "engineering"]
categories = ["engineering"]
template = "post"
+++

There is a persistent myth in software that clever code is good code. It is not. Clever code is a liability. It impresses the author at the time of writing and burdens every reader who follows.

Readable code, by contrast, is an act of generosity. It says: I have done the hard work of thinking clearly so that you do not have to.

## What Readability Means

Readable code is not about comments. Comments are often a sign that the code itself failed to communicate. Truly readable code needs few comments because its structure, naming, and flow tell the story directly.

Consider naming. A variable called `d` tells you nothing. A variable called `elapsed_days` tells you everything. The cost of a longer name is a few extra keystrokes. The cost of a cryptic name is every future reader pausing, scrolling, and guessing.

```python
# Hard to read
d = (e - s).days

# Clear
elapsed_days = (end_date - start_date).days
```

## Structure as Communication

Functions should do one thing. Not because of some abstract principle, but because a function that does one thing can be named precisely, and a precise name eliminates the need to read the body.

When you extract a block of code into a well-named function, you are not just refactoring. You are writing a sentence in a paragraph that tells the reader what this program does.

## The Long Game

Every line of code you write will be read approximately ten times for every one time it is modified. This ratio is the argument for readability. The time you invest in making code clear pays compound interest across the life of a project.

Teams that prioritize readability move faster, not slower. They onboard new members more quickly. They debug more efficiently. They make fewer mistakes during code review because the intent is visible on the surface.

## Practical Steps

Start with names. Make them specific, honest, and pronounceable. Avoid abbreviations unless they are universally understood within your domain.

Keep functions short. If a function requires scrolling to read, it is doing too much. Extract, name, and compose.

Write code that reads top to bottom, like prose. Minimize the distance between a question and its answer. If a reader has to jump between files to understand a single operation, the abstraction is wrong.

Readability is not a phase you add after the logic works. It is the standard by which the logic should be judged from the start.
