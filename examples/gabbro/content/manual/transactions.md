+++
title = "Transactions"
description = "Grouping writes into atomic, durable commits with the single-writer transaction API."
date = "2025-05-19"
weight = 3
toc = true
[extra]
section_label = "Library Functions Manual"
+++

Every `gb_put()` and `gb_del()` you saw earlier is a one-statement transaction that
commits before it returns. When you need several changes to land together — or none
of them to land at all — open an explicit transaction and commit it once.

<!-- more -->

## the single-writer rule

Gabbro allows any number of concurrent readers but exactly one writer at a time.
`gb_txn_begin()` with `GB_WRITE` acquires the write slot; if another writer holds
it, the call blocks until that transaction commits or aborts. This design keeps the
engine lock-free on the read path and removes write-write conflicts entirely: there
is nothing to retry, because there is only ever one writer building the next
version.

```c
gb_txn *txn;
if (gb_txn_begin(db, GB_WRITE, &txn) != GB_OK)
    return -1;

gb_txn_put(txn, gb_str("acct:a"), gb_str("90"));
gb_txn_put(txn, gb_str("acct:b"), gb_str("60"));

if (gb_txn_commit(txn) != GB_OK) {
    /* commit failed: nothing was published */
    gb_txn_abort(txn);
    return -1;
}
```

## atomicity and rollback

A transaction accumulates its copied pages privately and only splices them into the
tree at commit. If you call `gb_txn_abort()`, or the process dies before commit, the
published root never moves and the partial work is simply garbage collected on the
next open. Readers cannot observe any of a transaction's writes until commit
succeeds.

## read-only transactions and durability

A `GB_RDONLY` transaction is the same as a snapshot with a cursor attached; use it
when you want consistent reads and iteration without pinning the write slot. On the
durability side, `gb_txn_commit()` appends the new root to the write-ahead log and,
by default, `fsync`s before returning. Pass `GB_NOSYNC` at open time to batch
commits and sync on your own schedule when throughput matters more than
per-commit durability.

```c
/* consistent multi-key read without taking the write slot */
gb_txn *rt;
gb_txn_begin(db, GB_RDONLY, &rt);
gb_val a, b;
gb_txn_get(rt, gb_str("acct:a"), &a);
gb_txn_get(rt, gb_str("acct:b"), &b);
gb_txn_abort(rt);   /* read-only txns are released with abort */
```

Continue to the [storage engine](../../manual/storage-engine/) to see what a commit writes to
disk and how recovery replays it.
