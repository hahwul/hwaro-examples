+++
title = "Beryl"
description = "Command reference for declarative infrastructure drift detection"
template = "home"
+++

Every declarative stack rots the same way: a console click during an
incident, a manual security-group patch at 2am, an autoscaling group
someone resized by hand and forgot to commit. None of it shows up in your
pull requests. Beryl closes that gap. It reads your declared configuration,
compares it against what the cloud provider actually reports, and gives you
a precise, resource-level plan for bringing the two back into agreement
&mdash; without re-applying your entire stack and without guessing which
changes were intentional.

The session above is real output, trimmed for the page. Three resources in
`prod-payments` have drifted from their declared definitions; the other
thirty-nine have not. `beryl apply` would reconcile only those three,
leaving everything else untouched.

Beryl speaks Terraform state, Pulumi stack exports, and its own native
manifest format, and it ships as a single static binary with no daemon
required for one-off runs. Read the [command reference](/commands/) for
the full surface, or start with [about](/about/) for the reasoning behind
how reconciliation is scoped.
