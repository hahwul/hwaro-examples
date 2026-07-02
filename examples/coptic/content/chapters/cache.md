+++
title = "What the Cache Remembers"
date = "2026-01-27"
description = "A cache is state, frozen at a moment, filed under a name; all three koans meet here."
weight = 7
toc = true
[extra]
n = "07"
lang = "python"
question = "The price changed at midnight. When does the name forget?"
+++

You added a cache so you would stop asking the same question twice. It worked. It worked so well that when the answer changed, your program went on giving the old one, confidently, for the rest of the day.

<!-- more -->

```python
_cache = {}

def price(sku):
    if sku not in _cache:
        _cache[sku] = fetch_price(sku)   # remembered, then never again asked
    return _cache[sku]
```

## What happens

The first call for a given `sku` fetches a fresh price and stores it. Every call after that returns the stored value and never fetches again. There is no line anywhere that says the stored value has expired, because you never wrote one. The cache does exactly what a cache does: it remembers. Remembering is not the failure. The failure is that nothing was ever taught to forget.

A cache without a forgetting policy is only half a cache:

```python
def price(sku, *, max_age=60):
    hit = _cache.get(sku)
    if hit and monotonic() - hit.stored_at < max_age:
        return hit.value
    return _refresh(sku)
```

## The turn

Look at what the cache actually is. It is **state**, like [the jar](/chapters/jar/): a value held between calls. It is a moment of **time**, like [the frozen now](/chapters/now/): the instant `fetch_price` returned, preserved past its truth. And it is a **name**, like [the river](/chapters/river/): `sku`, standing in for a thing whose price it can no longer see. The three threads of this book are not three problems. They are one problem, and its name is *invalidation* — knowing when a remembered thing has stopped being true.
