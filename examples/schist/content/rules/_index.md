+++
title = "Rule Index"
description = "Every rule Schist ships, cited with its severity, autofix status, and the languages it covers."
sort_by = "weight"
template = "section"
+++

Schist evaluates rules in a fixed order on every run: correctness rules first, then scoping and control-flow, then style. A run stops reporting new categories once an earlier one has failed closed, so the citations below read top to bottom the same way a report does.
