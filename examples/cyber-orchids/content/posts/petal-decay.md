+++
title = "Petal Decay and Garbage Collection"
date = "2023-12-04T09:00:00Z"
description = "Notes on how the cyber orchid sheds spent data structures."
[taxonomies]
tags = ["maintenance", "memory", "lifecycle"]
+++

Every petal in the cyber orchid follows a fixed lifecycle. It allocates from the data pool when the bloom forms, holds an active reference for as long as the bloom is observed, and releases its allocation when the observation channel closes. The release is not immediate. A short retention window keeps the petal addressable in case the channel reopens within a few seconds.

The retention window introduces a problem familiar from any garbage-collected system. If observations close and reopen frequently, the pool fills with petals that are technically retained but never actually read. The bloom continues to allocate new petals because the pool reports occupancy, and the system enters a slow degradation that is hard to attribute to any specific event.

The resolution adopted in the current release uses a generational approach. Petals that survive three retention cycles without a reopen are demoted to a colder tier. The colder tier compresses the structure and surrenders most of the pool space the petal occupied. Reopens against demoted petals incur a small decompression cost, measured at roughly two milliseconds per petal on the reference hardware. The cost is acceptable because demoted petals are, by construction, the ones least likely to be reopened.

A diagnostic counter tracks the demotion rate. When the rate exceeds a threshold, the bloom emits a maintenance signal that operators can investigate. In practice the signal fires only when an upstream observer is misbehaving, opening and closing channels in a pattern that defeats the retention heuristic.

```css
.petal[data-tier="cold"] {
  opacity: 0.6;
  transition: opacity 200ms ease-out;
}
```

The visual cue above is used in operator dashboards. It carries no functional meaning for the bloom itself.
