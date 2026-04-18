+++
title = "Operators"
description = "Reactive stream operators for transforming, filtering, and combining data"
tags = ["operators", "reactor"]
+++

Operators are the building blocks of reactive pipelines. Each operator subscribes to an upstream source, applies a transformation, and publishes results downstream. Operators are stateless by default and can be freely composed into chains of arbitrary length.

Reactor organizes operators into three categories:

- **Transforming** -- Change the shape or value of emitted items (map, flatMap, scan, buffer)
- **Filtering** -- Selectively emit items based on predicates or timing (filter, distinct, debounce, take)
- **Combining** -- Merge, zip, or switch between multiple source streams (merge, zip, combineLatest, concat)
