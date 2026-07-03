+++
title = "Breccia"
description = "Zero-downtime schema migrations, documented one blunt step at a time"
template = "home"
+++

Breccia runs every schema change as two deploys, never one. The expand phase adds new columns, tables, or indexes alongside whatever is already live and serving traffic. The contract phase removes the old shape, and only after every reader and every writer has provably moved off it. At no point is the database both broken and shipped.

A migration in Breccia is a plan, not a script you hope survives production. `breccia plan` reads your live schema and your query logs, then writes a numbered sequence of expand and contract steps into `migrations/`. You read that plan the way you would read a diff. Each step is applied on its own, and Breccia checks the database's actual measured state before it will let the next step start — no step ever runs against a database it has not just verified.

<!-- more -->

None of this is automatic in the sense of invisible. Breccia will not guess when your application has finished cutting over to a new column, and it will not drop anything on your behalf. It tells you, in a raw numbered list, exactly what step you are on and exactly what has to be true before you run the next one.
