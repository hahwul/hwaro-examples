+++
title = "Python dataflow and a SQL injection pack"
date = "2025-10-14"
description = "Interprocedural dataflow analysis arrives for Python, powering a new SQL injection pack that follows tainted values into query calls."
template = "release"
tags = ["python", "dataflow", "sql"]
[extra]
version = "3.6.0"
codename = "Slate"
added = 15
fixed = 37
removed = 2
total = 1225
breaking = false
+++

Slate brings interprocedural dataflow to the Python analyzer — the engine can
now follow a value from where it enters the program to where it is used, across
function calls. The first thing built on top of it is a SQL injection pack that
recognizes tainted strings reaching a database driver.

<!-- more -->

## Highlights

- **Python dataflow.** The analyzer tracks values through assignments, function
  parameters, and return values within a module and across imported modules in
  the same project. It is the foundation the security packs have been waiting for.
- **SQL injection pack.** Fifteen rules that flag untrusted input concatenated
  into a query and passed to `cursor.execute`, SQLAlchemy `text()`, or the
  standard database drivers. Parameterized queries are recognized and pass
  cleanly.
- Dataflow results participate in the incremental cache: a change to a helper
  invalidates its callers automatically.

## New rules

```
py/security/sql-string-concat        error    autofix: no
py/security/sql-fstring-query        error    autofix: no
py/correctness/tainted-open-path     warning  autofix: no
```

## Example

```python
# flagged: user_id flows into the query unparameterized
def lookup(cursor, user_id):
    cursor.execute("SELECT * FROM users WHERE id = " + user_id)

# clean: parameterized
def lookup(cursor, user_id):
    cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
```

## Fixes and changes

Thirty-seven fixes. The import resolver now handles namespace packages, and the
Go analyzer's nil-dereference check stopped firing after an early `return`. Two
redundant style rules were removed in favor of formatter defaults.

## Cache notes

Dataflow adds a per-module summary to the cache. The format is unchanged; the
first run after upgrading rebuilds summaries and will be slower than usual.
