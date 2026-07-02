+++
title = "API"
description = "The three endpoints most integrations need: publish a version, resolve a package, and read its attestation."
sort_by = "weight"
template = "section"
+++

Zircon's registry API is small on purpose. Package managers talk to it
through their existing protocol adapters, so these three endpoints exist
mainly for CI pipelines, internal tooling, and anything that wants to
inspect provenance directly rather than through the `zircon` CLI.
