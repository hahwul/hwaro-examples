+++
title = "Preface"
description = "What a programming koan is, why forty-nine of them, and how to read a book that is really a REPL left open past midnight."
toc = true
+++

A koan is a question you cannot answer by being clever. It is answered, if at all, by sitting with it until the shape of your confusion changes. The koans in this book are made of code, but they work the same way: each one is a snippet small enough to hold in one hand, paired with a question that the snippet refuses to settle.

None of them is a puzzle in the crossword sense. There is no gotcha waiting to make you feel foolish. Every snippet here is ordinary code — the kind that passes review, ships, and then does something quietly astonishing at three in the morning. The astonishment is the point.

## The three threads

Three confusions run through everything a program does, and they are braided so tightly that pulling one usually moves the others.

The first is **state**: a value that persists between the moments you look at it, and changes when you are not looking. The second is **time**: the difference between *when a thing is written* and *when it runs*, which is almost never zero. The third is **naming**: the quiet fact that a name is a direction to a thing, not the thing, so one thing may wear many names and answer to all of them at once.

Most bugs that survive a code review are one of these three wearing the mask of another.

## How to sit

Read one koan. Predict the output before you run it. Run it. Measure the gap between your prediction and the result, and do not close the gap immediately with the fix. The fix is provided, but it is the least interesting part. The interesting part is the exact moment your mental model and the machine's behavior disagreed, because that moment is a map of what you believed.

## On the number

Forty-nine is seven turnings of seven: state, time, naming, and the ways they fold into one another. This edition gathers seven, one opened from each turning, enough to learn the posture. When you are ready, [begin with the jar](/chapters/jar/); the rest you will meet on your own, in your own code, at your own midnight.
