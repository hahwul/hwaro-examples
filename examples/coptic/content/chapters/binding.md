+++
title = "The Name Before the Thing"
date = "2025-11-20"
description = "A closure captures a variable, not the value the variable held when the closure was written."
weight = 6
toc = true
[extra]
n = "06"
lang = "javascript"
question = "The closures all remembered the name. Which number did you mean?"
+++

You built three functions in a loop, each meant to return its own index: zero, one, two. You called them afterward and every one of them returned three.

<!-- more -->

```js
const fns = [];
for (var i = 0; i < 3; i++) {
  fns.push(function () { return i; });
}

console.log(fns.map(f => f()));   // [3, 3, 3]
```

## What happens

`var i` declares one binding, shared by the whole loop and by every closure created inside it. The functions do not capture the *number* `i` had when they were built; they capture the *variable* `i` itself. By the time you call them, the loop has finished and left `i` sitting at `3` — the value that ended the loop. All three functions read the same box, and the box now holds three.

Give each iteration its own binding and each closure captures a different box:

```js
for (let i = 0; i < 3; i++) {
  fns.push(function () { return i; });
}
console.log(fns.map(f => f()));   // [0, 1, 2]
```

## The turn

A closure is a promise to look the name up later, not a photograph of the value now. You wrote `i` three times and read it as three different numbers, because you were thinking of the numbers. The language wrote `i` three times and stored one address, because it was thinking of the name. The gap between them is the whole distance between what a variable *is* and what it currently *holds*.
