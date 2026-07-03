+++
title = "Mesh"
description = "The Kyanite control-plane reference: architecture, sidecar injection, mTLS, traffic splitting, resilience, and observability."
sort_by = "weight"
template = "section"
generate_feeds = false
+++

This is the reference, not a tutorial — read it top to bottom for a full pass, or jump to the chapter you need from the tree on the left. The order follows how a workload actually moves through the mesh: architecture first, then how a pod joins, then the three things you configure once it's in (identity, routing, resilience), then how you watch it.

Every YAML example on these pages is a complete, valid resource — copy one, change the names, and it applies. Each chapter carries a status badge: `stable` resources are covered by the 1.x compatibility promise; `beta` resources may change shape before 2.0.
