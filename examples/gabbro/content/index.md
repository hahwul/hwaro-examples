+++
title = "Gabbro"
description = "Manual for an embedded key-value store with MVCC snapshots"
template = "home"
+++

Gabbro is an embedded key-value store you link straight into your program. No
server, no daemon, no socket: one `open()` call maps a single file and hands you
back consistent, multi-version reads. It ships as a single 400&nbsp;KB library
with a small C API, and it gives every reader a stable MVCC snapshot so long scans
never block a writer and never see a half-finished commit.

```c
#include "gabbro.h"

int main(void) {
    gb_db *db;
    if (gb_open("./users.gb", GB_CREATE, &db) != GB_OK)
        return 1;

    gb_put(db, gb_str("alice"), gb_str("{\"plan\":\"pro\"}"));

    gb_val v;
    if (gb_get(db, gb_str("alice"), &v) == GB_OK)
        printf("%.*s\n", (int)v.len, (char *)v.data);

    gb_close(db);
    return 0;
}
```

## why gabbro

Most embedded stores make you choose between speed and consistency. Gabbro keeps
both by versioning pages instead of overwriting them: a write publishes a new root,
old roots stay readable until the last snapshot that needs them is closed. The
result reads like a well-kept man page below — start with `getting-started`, then
work down through snapshots, transactions, and the on-disk format.
