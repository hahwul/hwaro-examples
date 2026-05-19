+++
title = "AMS certificate rotation, no customer impact"
date = "2026-05-12"
description = "Quarterly cert rotation across the Amsterdam ring. We rotated 412 leaf certificates without dropping a single connection."
tags = ["tls", "ams", "automation"]
regions = ["emea"]
+++

The Amsterdam ring rotated all four hundred and twelve leaf certificates between 02:00 and 02:18 UTC. Customer connections were drained per-node and rebound to a sibling before the rotation began on each node, so no in-flight connection saw the swap.

This is the third quarter where the rotation has been fully automated. The first quarter took ninety minutes, the second forty, this one eighteen. The bottleneck is now the OCSP responder.

> The boring rotations are the ones we want. Every minute we save here is a minute we get back for the next incident.

We have two more rings due this quarter — Frankfurt and Singapore. Both will use the same automation. The Frankfurt rotation is scheduled for the 23rd.
