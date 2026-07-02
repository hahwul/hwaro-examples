+++
title = "API reference"
description = "The complete public C API: handles, values, reads, writes, transactions, snapshots, and error codes."
date = "2025-07-08"
weight = 5
toc = true
[extra]
section_label = "Library Functions Manual"
+++

Every public symbol is prefixed `gb_`. Functions return `int` status codes unless
noted; `GB_OK` is `0`. Handles are opaque and must be released with their matching
close call. This chapter is the synopsis you keep open in the other pane.

<!-- more -->

## types

```c
typedef struct gb_db gb_db;             /* an open database */
typedef struct gb_txn gb_txn;           /* a read or write transaction */
typedef struct gb_snapshot gb_snapshot; /* a point-in-time view */
typedef struct gb_cursor gb_cursor;     /* an ordered iterator */

typedef struct {
    const void *data;
    size_t      len;
} gb_val;

gb_val gb_str(const char *s);           /* wrap a NUL-terminated string */
```

## database lifecycle

```c
int  gb_open(const char *path, int flags, gb_db **out);
void gb_close(gb_db *db);
int  gb_config(gb_db *db, int key, long value);
int  gb_checkpoint(gb_db *db);
int  gb_compact(gb_db *db, int flags);
```

`flags` for `gb_open()` is a bitwise OR of `GB_CREATE`, `GB_RDONLY`, and
`GB_NOSYNC`. `gb_config()` keys include `GB_WAL_LIMIT` and `GB_PAGE_CACHE`.

## point reads and writes

```c
int gb_get(gb_db *db, gb_val key, gb_val *out);
int gb_put(gb_db *db, gb_val key, gb_val val);
int gb_del(gb_db *db, gb_val key);
```

These are auto-committing shortcuts. Use transactions to group several writes.

## transactions

```c
int  gb_txn_begin(gb_db *db, int flags, gb_txn **out);
int  gb_txn_get(gb_txn *txn, gb_val key, gb_val *out);
int  gb_txn_put(gb_txn *txn, gb_val key, gb_val val);
int  gb_txn_del(gb_txn *txn, gb_val key);
int  gb_txn_commit(gb_txn *txn);
void gb_txn_abort(gb_txn *txn);
```

## snapshots and cursors

```c
int  gb_snapshot_open(gb_db *db, gb_snapshot **out);
int  gb_snapshot_get(gb_snapshot *snap, gb_val key, gb_val *out);
void gb_snapshot_close(gb_snapshot *snap);

int  gb_cursor_open(void *snap_or_txn, gb_cursor **out);
int  gb_cursor_seek(gb_cursor *cur, gb_val key);
int  gb_cursor_next(gb_cursor *cur, gb_val *key, gb_val *val);
int  gb_cursor_prev(gb_cursor *cur, gb_val *key, gb_val *val);
void gb_cursor_close(gb_cursor *cur);
```

## error codes

| Code            | Value | Meaning                                  |
|-----------------|-------|------------------------------------------|
| `GB_OK`         | `0`   | success                                  |
| `GB_ERR`        | `-1`  | unclassified failure                     |
| `GB_NOMEM`      | `-2`  | allocation failed                        |
| `GB_NOTFOUND`   | `-3`  | key not present in this view             |
| `GB_CORRUPT`    | `-4`  | checksum or structural check failed      |
| `GB_READONLY`   | `-5`  | write attempted on a read-only handle    |
| `GB_BUSY`       | `-6`  | write slot held; retry or block          |

`const char *gb_strerror(int rc)` returns a static, human-readable string for any
code above. It never returns `NULL`.
