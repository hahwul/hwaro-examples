+++
title = "CV"
description = "Full curriculum vitae for Priya Ashworth, independent devops consultant specializing in legacy deployment pipelines."
+++

## Summary

Independent devops consultant, ten years in. I specialize in the specific, recurring problem of a deployment pipeline that has grown past the understanding of the team running it — usually a mix of hand-written scripts, one overloaded Jenkins box, and tribal knowledge that left with a departed engineer. Engagements typically run six to twelve weeks and end with a documented, reproducible pipeline and a team that no longer needs me in the room to ship.

## Core competencies

`Terraform` `Kubernetes` `GitHub Actions` `GitLab CI` `Jenkins` `Ansible` `Prometheus` `Docker` `AWS` `Zero-downtime cutovers` `Incident review facilitation` `Runbook authorship`

## Experience

**Independent Consultant — Cachet Practice**
*2018 — present, remote*

Engaged by mid-size engineering teams to audit, stabilize, and rebuild deployment pipelines that have become single points of failure. Selected outcomes:

- Reduced a six-hour manual release process to an eleven-minute automated one for a payments startup, without a single rollback in the following two quarters.
- Replaced a hand-rolled FTP-based release ritual spanning six manual stages with a single Terraform-and-Actions pipeline for an agricultural cooperative.
- Ran a platform audit for a healthcare operator that surfaced a bus-factor-of-one dependency on a departing engineer, and closed it inside one quarter.
- Delivered a zero-downtime blue-green cutover for a trading firm with a two-second maximum acceptable release window.

**Senior Platform Engineer — Harrow & Vale Systems**
*2014 — 2018, on-site then remote*

Owned CI/CD tooling for a 40-engineer product organization. Introduced the company's first shared pipeline templates, cutting new-service onboarding time from two weeks to two days. Built the on-call rotation's first structured incident review process.

**Systems Administrator — Bellcourt Retail Group**
*2012 — 2014*

Managed release infrastructure for an in-house e-commerce platform; first exposure to the gap between "the deploy works" and "the deploy is understood."

## A pipeline, before and after

The shape of the work rarely changes. A representative before-and-after from a recent engagement:

```yaml
# before: deploy_FINAL_v3.sh, run by hand from someone's laptop
ssh releasebox "cd /srv/app && git pull && ./stop.sh && \
  cp -r /srv/app/* /var/www/app_new && ./start.sh"
# after: .github/workflows/release.yml
jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: terraform apply -auto-approve
      - run: ./scripts/canary-deploy.sh --wait-healthy
      - run: ./scripts/promote.sh
```

The mechanical change is small. The organizational change — that any engineer on the team can now read, run, and safely modify this — is the actual deliverable.

## Certifications

- HashiCorp Certified: Terraform Associate (2021, renewed 2024)
- Certified Kubernetes Administrator, CNCF (2022)
- AWS Certified DevOps Engineer — Professional (2020)

## Speaking

- "The Incident Review Nobody Wants to Own" — Northbrook Platform Meetup, 2023
- "Deploy Documentation as a Product" — Regional Infra Gathering, 2023
- "What a Bus-Factor-of-One Actually Costs" — Harrow & Vale Engineering Guild, 2022

## Education

B.S. Computer Science, Danforth State University, 2012

## References

Available on request once we are past the scoping call — see [engagements](/engagements/) for recent, verifiable work.
