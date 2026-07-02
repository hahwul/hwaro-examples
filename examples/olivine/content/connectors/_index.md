+++
title = "Connectors"
description = "Sources and sinks that speak backpressure and honor exactly-once checkpoints out of the box."
sort_by = "weight"
template = "section"
+++

Connectors are the roots and fruit of a pipeline — where records enter and where
they finally land. Every connector in this section participates in Olivine's
credit protocol, so a slow sink throttles its source without any glue code, and
every sink listed here can commit transactionally on a checkpoint barrier. Pick
a source, pick a sink, and the runtime handles the flow between them.
