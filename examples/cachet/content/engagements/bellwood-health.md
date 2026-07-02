+++
title = "Bellwood Health Systems"
date = "2025-11-03"
description = "A bus-factor-of-one release script, replaced with an auditable canary pipeline."

[extra]
client = "Bellwood Health Systems"
status = "active"
duration = "Ongoing quarterly retainer"
industry = "Healthcare"
outcome = "Bus-factor-of-one release script closed inside one quarter"
+++

Bellwood runs patient-scheduling software under real compliance constraints, which meant the audit came before any migration work: every change needed a paper trail showing who approved it, what it touched, and how it was verified. Their existing release process was a nine-hundred-line bash script maintained by one senior engineer, who was, not coincidentally, the only person who could safely run it.

<!-- more -->

The script did real work — health checks, staged rollout, a rollback path — but it lived entirely in one person's head and one file, with no record of individual deploys beyond a Slack message if someone remembered to post one. That is a compliance problem as much as an operational one: the auditors wanted to know that a release could be reconstructed after the fact, not just that it had probably gone fine.

The rebuild kept the same staged-rollout logic but expressed it as a GitLab CI pipeline with Ansible for the host-level work, with every stage logging a signed record:

```yaml
canary:
  script:
    - ansible-playbook deploy.yml --limit canary --tags release
    - ./scripts/verify-slo.sh --window 15m
    - ./scripts/record-release.sh --stage canary --signed
```

The retainer continues quarterly: a short audit before each major release window, and an annual review of the pipeline's failure modes. Bellwood's compliance team now gets a signed, queryable release history instead of a Slack message that might exist.
