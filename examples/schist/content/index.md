+++
title = "Schist"
description = "Rule catalog and pipeline guides for a multi-language lint runner"
template = "home"
+++

Schist runs the same rule set against JavaScript, TypeScript, Python, Go, Rust, and Java by parsing each into a shared representation before any rule sees it. Every citation below shows the violation and the fix side by side, states its severity plainly, and says whether the runner can apply the patch itself.

Rule sets are shareable: a `schist.toml` can extend a published base and override only what a codebase needs to differ on, so a security team's baseline propagates to every service that inherits it. Read [about the autofix pipeline](/about/) for how that propagation stays safe across a fleet of repositories.
