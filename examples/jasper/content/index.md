+++
title = "Jasper"
description = "An embedded vector search engine explained from index anatomy to query tuning"
template = "home"
+++

Jasper ships as a linkable library, not a service. You open an index file the way you'd open a database file, insert vectors as your application produces them, and query it in the same process — no network hop, no separate deployment to keep patched and paged for.

Under the surface it is a hierarchical navigable small world graph over your vectors, with an optional inverted index sitting beside it for exact keyword terms. The manual below walks both halves: how the graph is built and searched, how vectors are compressed into cheaper tiers without losing what makes them useful, and how a query blends keyword and vector signal into one ranked list.
