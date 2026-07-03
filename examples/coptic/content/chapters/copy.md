+++
title = "The Copy That Wasn't"
date = "2025-03-19"
description = "You asked for three rows and were given one row, three times."
weight = 2
toc = true
[extra]
n = "02"
lang = "python"
question = "When you changed one row, how many rows did you change?"
+++

You needed a three-by-three grid of zeros. You wrote the shortest thing that looked right, set one cell, and printed it. A whole column lit up instead of a single square.

<!-- more -->

```python
grid = [[0] * 3] * 3
grid[0][0] = 1
print(grid)   # [[1, 0, 0], [1, 0, 0], [1, 0, 0]]
```

## What happens

The inner `[0] * 3` builds one list. The outer `* 3` does not copy that list three times; it stores the same reference three times. `grid` is three names for a single row. Mutating `grid[0]` mutates the object that `grid[1]` and `grid[2]` also point at, because there is only one object to mutate. The repetition operator repeated the pointer, not the thing.

To get three independent rows, build three lists:

```python
grid = [[0] * 3 for _ in range(3)]
grid[0][0] = 1
print(grid)   # [[1, 0, 0], [0, 0, 0], [0, 0, 0]]
```

## The turn

Multiplication promised you more. What it delivered was more names, and names are cheap precisely because they cost nothing to duplicate. The identity of a value and the count of its labels are different quantities, and the language will never conflate them on your behalf. You counted three rows because you counted three positions. The machine counted one row, because it counts objects.
