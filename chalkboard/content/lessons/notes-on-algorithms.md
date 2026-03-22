+++
title = "Notes on Algorithm Complexity"
date = 2026-03-15
description = "Understanding Big-O notation and the classification of algorithm efficiency."
tags = ["computer-science", "algorithms"]
+++

Algorithm analysis is fundamental to computer science. When we write programs, we need to understand how they scale as the input grows.

## Big-O Notation

Big-O notation describes the upper bound of an algorithm's growth rate. We say an algorithm is `O(f(n))` if its running time grows no faster than `f(n)` as `n` increases.

### Common Complexity Classes

| Class | Name | Example |
|-------|------|---------|
| O(1) | Constant | Array access |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Linear search |
| O(n log n) | Linearithmic | Merge sort |
| O(n^2) | Quadratic | Bubble sort |
| O(2^n) | Exponential | Subset enumeration |

## Analyzing a Simple Loop

```python
def find_max(arr):
    max_val = arr[0]        # O(1)
    for x in arr:            # O(n)
        if x > max_val:      # O(1)
            max_val = x      # O(1)
    return max_val           # O(1)
```

The dominant term is the loop, so this algorithm is `O(n)`.

## Key Takeaways

- Focus on the dominant term as `n` grows large
- Constants and lower-order terms are dropped
- Worst-case analysis is the standard convention
- Space complexity matters just as much as time

*Next class: divide and conquer strategies.*
