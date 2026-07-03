+++
title = "Two Names for One River"
date = "2025-09-08"
description = "Assignment binds a new name to an existing object; it does not make a second object."
weight = 5
toc = true
[extra]
n = "05"
lang = "javascript"
question = "You renamed the river. Why did the water change?"
+++

You had a config object and wanted a backup before editing it. You assigned it to a second variable, changed the backup, and checked the original. The original had changed too.

<!-- more -->

```js
const config = { retries: 3 };
const backup = config;

backup.retries = 0;
console.log(config.retries);   // 0
```

## What happens

`const backup = config` does not copy the object. It copies the *reference* — the arrow that points at the object — and now two arrows point at one object. `const` freezes the arrow, not the thing it points to: you may not reassign `backup`, but you may freely mutate what it names. Editing `backup.retries` reaches the single object that `config` also names, so `config` sees the edit. You made a second name and mistook it for a second thing.

A real copy needs its own object:

```js
const backup = { ...config };
backup.retries = 0;
console.log(config.retries);   // 3
```

## The turn

A name is not a container; it is a direction. When you say "back up the config," you picture duplicating a substance, the way you would photocopy a page. But the assignment only wrote down where the page already lives. Two names for one river do not make two rivers. Step into either name and you are standing in the same water.
