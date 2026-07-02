+++
title = "Turnkey Grain Cooperative"
date = "2025-01-14"
description = "A six-stage manual FTP release ritual, replaced with a single reviewable pipeline."

[extra]
client = "Turnkey Grain Cooperative"
status = "resolved"
duration = "6 weeks"
industry = "Agriculture"
outcome = "Six manual FTP stages became one pipeline run"
+++

Turnkey's grain-pricing platform shipped through a process that had not been written down anywhere: the operations lead would FTP build artifacts to four regional servers in a specific order, restart services by hand, and watch a shared spreadsheet for confirmation from each site. It worked, mostly, as long as she was available and remembered the order.

<!-- more -->

The order mattered because of a schema migration step buried in stage three that nobody could explain except "it breaks otherwise." I spent the first week just tracing what stage three actually did — it turned out to be a database index rebuild that the other three stages implicitly depended on finishing first. Once that dependency was explicit, the rest of the "ritual" collapsed into ordinary infrastructure-as-code.

The rebuilt pipeline runs as a single Terraform-and-Actions job, with the index rebuild expressed as a proper migration step with a health check gating everything after it:

```yaml
jobs:
  release:
    steps:
      - uses: actions/checkout@v4
      - run: terraform apply -auto-approve -target=module.db_migration
      - run: ./scripts/wait-for-index-rebuild.sh --timeout 300
      - run: terraform apply -auto-approve
```

No one at Turnkey has needed to FTP anything since. Releases now happen on a schedule rather than whenever the operations lead has a free afternoon, and any engineer on the four-person team can run one.
