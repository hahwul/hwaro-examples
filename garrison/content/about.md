+++
title = "About Garrison"
description = "About the Garrison firewall management platform and project"
tags = ["about", "garrison"]
+++

# About Garrison

Garrison is an open-source firewall management platform built for teams that maintain complex network perimeters. The project was created to provide a unified policy layer that abstracts over heterogeneous firewall implementations while preserving full audit trails.

## Design Principles

Garrison is built around four principles:

- **Policy as Code** -- All firewall rules and zone definitions are stored as declarative configuration files. Changes are tracked through version control, reviewed through standard code review workflows, and deployed through automated pipelines.
- **Zone Isolation** -- Network segments are organized into named zones with explicit trust levels. Traffic between zones requires explicit allow rules. No implicit trust relationships exist between zones.
- **Rule Determinism** -- The rule compiler evaluates policies in strict order. Shadowed rules are flagged during compilation. Conflicting rules produce errors rather than undefined behavior.
- **Audit First** -- Every policy change, deployment, and enforcement action is recorded in an append-only audit log. Logs include the identity of the operator, the timestamp, the affected rules, and the deployment target.

## Project History

Garrison started as an internal tool for managing iptables rules across a fleet of Linux-based firewalls. The initial version supported basic allow/deny rules with logging. Over time, the project expanded to include zone-based policy management, NAT translation, stateful connection tracking, and multi-vendor firewall support.

The project is maintained by a team of network security engineers and accepts contributions through standard pull request workflows.

## License

Garrison is released under the Apache 2.0 license. Commercial support and enterprise features are available through separate agreements.

## Contact

- **Source** -- [github.com/garrison-fw/garrison](https://github.com/garrison-fw/garrison)
- **Issues** -- Use the GitHub issue tracker for bug reports and feature requests
- **Discussion** -- Join the community forum for questions and architecture discussions

## Documentation

This documentation site is built with [Hwaro](https://github.com/hahwul/hwaro), a fast static site generator.
