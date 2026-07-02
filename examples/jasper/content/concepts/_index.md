+++
title = "Concepts"
description = "Six chapters covering how a Jasper index is built, stored, compressed, and queried."
sort_by = "weight"
+++

These six chapters describe one Jasper index from the inside out. They read in order — the graph chapter assumes you know what a segment is, the scoring chapter assumes you know how the graph answers a query — but each one also stands alone if you already know the vocabulary and want a single reference.

Every chapter that touches the on-disk format or the query path includes working Rust and Python, using the same catalog example throughout: a 768-dimensional embedding collection with roughly four million rows.
