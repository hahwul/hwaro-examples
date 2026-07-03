+++
title = "Java pack expansion and inline suppressions"
date = "2025-02-03"
description = "The Java rule pack grows, and inline suppression comments let developers silence a single finding with an auditable reason."
template = "release"
tags = ["java", "suppressions", "ci"]
[extra]
version = "3.3.0"
codename = "Flint"
added = 9
fixed = 18
removed = 0
total = 1184
breaking = false
+++

Flint is the oldest release tracked in this ledger. It expands the Java pack with
nine correctness rules and introduces inline suppression comments — a way to
silence a specific finding on a specific line, with a required reason that shows
up in review.

<!-- more -->

## Highlights

- **Java pack expansion.** Nine rules covering resource leaks (`InputStream` not
  closed on all paths), `equals`/`hashCode` contract violations, and switch
  statements that fall through without an annotation.
- **Inline suppressions.** A `strata-disable-next-line` comment silences one
  rule on the following line and requires a reason after a colon. The reason is
  stored with the suppression so a reviewer — and a later audit — can see why.

## New rules

```
java/correctness/resource-leak         error    autofix: no
java/correctness/equals-hashcode       warning  autofix: no
java/correctness/switch-fallthrough    warning  autofix: yes
```

## Suppressing a finding

```java
// strata-disable-next-line java/correctness/resource-leak: closed by the caller
InputStream in = open(path);
```

An unexplained suppression (no reason after the colon) is itself a finding under
`meta/suppression/missing-reason`, so silencing is always deliberate.

## Fixes and changes

Eighteen fixes, mostly parser edge cases in the TypeScript and Go front ends —
generic type parameters with defaults, and Go generics introduced the prior year.
No rules were removed in this release.

## CI notes

Suppressions are counted and printed in the run summary, so `strata analyze
--report json` now includes a `suppressions` block for tracking how many
findings a project is carrying and why.
