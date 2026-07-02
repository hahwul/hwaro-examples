+++
title = "Getting started"
description = "Install the single-file library, open a database, and run your first put/get."
date = "2025-03-11"
weight = 1
toc = true
[extra]
section_label = "Library Functions Manual"
+++

Gabbro is distributed as two files: `gabbro.c` and `gabbro.h`. There is nothing to
build separately and no external dependency beyond a C11 compiler and the standard
library. Drop both files into your tree and compile `gabbro.c` alongside your own
sources, or build it once into a static archive.

<!-- more -->

## installing

The amalgamation is the recommended path. Vendoring it keeps your build
reproducible and pins the exact version you tested against.

```sh
# vendor the two files
cp gabbro.c gabbro.h src/vendor/

# compile straight in
cc -O2 -std=c11 src/*.c src/vendor/gabbro.c -o app

# or build a static library once
cc -O2 -std=c11 -c gabbro.c -o gabbro.o
ar rcs libgabbro.a gabbro.o
```

The compiled object is about 400&nbsp;KB with optimizations on. There are no
threads spawned behind your back and no global state: everything hangs off the
`gb_db` handle you open.

## opening a database

`gb_open()` takes a path, a flags word, and the address of a handle to fill. Pass
`GB_CREATE` to make the file if it is missing. Every call returns an `int` status;
`GB_OK` is zero, so the idiomatic check is `!= GB_OK`.

```c
#include "gabbro.h"
#include <stdio.h>

int main(void) {
    gb_db *db;
    int rc = gb_open("./notes.gb", GB_CREATE, &db);
    if (rc != GB_OK) {
        fprintf(stderr, "open: %s\n", gb_strerror(rc));
        return 1;
    }

    gb_put(db, gb_str("greeting"), gb_str("hello, gabbro"));

    gb_val v;
    if (gb_get(db, gb_str("greeting"), &v) == GB_OK)
        printf("%.*s\n", (int)v.len, (const char *)v.data);

    gb_close(db);
    return 0;
}
```

## keys and values

Keys and values are opaque byte spans described by `gb_val`, a `{ data, len }`
pair. The `gb_str()` helper wraps a NUL-terminated string for convenience, but
nothing in the store assumes text — store protobufs, msgpack, or raw structs. The
memory returned by `gb_get()` points into the current snapshot and stays valid
until you write again on the same handle or close the database; copy it out if you
need it longer.

From here, read [snapshots](/manual/snapshots/) to understand how reads stay consistent
under concurrent writes.
