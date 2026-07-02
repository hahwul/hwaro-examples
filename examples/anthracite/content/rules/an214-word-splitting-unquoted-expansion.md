+++
title = "Word Splitting on an Unquoted Array Expansion"
description = "$@ and an unquoted array expansion both flatten on IFS, which drops empty positional arguments and re-splits any element that contains whitespace."
date = "2025-05-20"
weight = 30
toc = true
[extra]
code = "AN214"
severity = "warning"
category = "expansions"
+++

`$@` is the one expansion most scripts get right inside a function
signature and wrong everywhere else. Left unquoted, it behaves like any
other unquoted expansion: every positional parameter is re-split on
`IFS`, and any parameter that was empty to begin with disappears from the
result entirely. Anthracite raises AN214 for `$@`, `$*`, and unquoted
`"${array[@]}"`-style expansions used without their surrounding quotes.

<!-- more -->

## What it flags

```sh
log_all() {
  for f in $@; do
    process "$f"
  done
}
```

Call `log_all "release notes.txt" ""` and two things go wrong at once: the
first argument splits into `release` and `notes.txt` because the embedded
space is treated as a field separator, and the second, empty argument
vanishes from the loop rather than being processed as an empty string.
Both are silent — the function runs without error, it just runs on the
wrong data.

## The fix

```sh
log_all() {
  for f in "$@"; do
    process "$f"
  done
}
```

Quoting `"$@"` is special-cased by POSIX shells to re-expand into the
original positional parameters exactly, one word per parameter, including
empty ones — it is the only quoted expansion that behaves like a list
instead of a single string. `"$*"` does not get this treatment; it always
joins into one string on the first character of `IFS`, so reach for `"$@"`
whenever the goal is "each argument, unchanged."

## Suppressing a finding

```sh
set -- $@  # anthracite: disable=AN214 -- rebuilding $IFS-joined args on purpose
```

## See also

- [Unquoted Variable Expansion](/rules/an101-unquoted-variable-expansion/) — the general rule this specializes.
- [Expansion of a Possibly-Unset Variable](/rules/an228-expansion-of-unset-variable/) — often found next to loops over `$@`.
