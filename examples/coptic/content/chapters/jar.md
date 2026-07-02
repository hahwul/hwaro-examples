+++
title = "The Jar That Remembers"
date = "2025-02-11"
description = "A default argument is filled once, at the moment the function is born."
weight = 1
toc = true
[extra]
n = "01"
lang = "python"
question = "If the jar was already full before you called the function, whose state were you adding to?"
+++

You wrote a function that starts with an empty jar and adds one thing to it. You called it twice, expecting two jars each holding one thing. You got one jar holding two.

<!-- more -->

```python
def collect(item, jar=[]):
    jar.append(item)
    return jar

print(collect("moth"))   # ['moth']
print(collect("stone"))  # ['moth', 'stone']
```

## What happens

The default value `[]` is not evaluated each time the function is called. It is evaluated exactly once, when the `def` statement runs and the function object is created. That one list becomes a permanent attribute of the function itself. Every call that omits `jar` reaches for the same object, and every `append` accumulates in it. The emptiness you counted on was a one-time event, already spent by the time your second caller arrived.

The usual repair is to default to `None` and build the list inside the body, where "each time" actually means each time:

```python
def collect(item, jar=None):
    if jar is None:
        jar = []
    jar.append(item)
    return jar
```

## The turn

Notice that this is not really a bug about lists. It is a bug about *when*. The word `[]` in the signature looks like an instruction — make an empty list — but it is a value, frozen at definition time. You read it as a verb; the language read it as a noun. The jar was never yours to empty, because it was filled before your program ever ran a line you cared about.
