+++
title = "2. Replication Setup"
description = "Detailed description of the replication environment, codebase corrections, and data verification."
weight = 2
template = "post"
tags = ["replication", "methodology", "setup"]
categories = ["sections"]
[extra]
section_number = "2"
+++

## Codebase Acquisition

The original codebase was obtained from the authors' GitHub repository at the exact commit referenced in the paper (`a7f3e2d`, tagged as `acl2024-camera-ready`). We verified the commit hash and confirmed that no post-publication modifications had been made to the tagged release.

## Data Verification

All datasets were re-downloaded from the original sources. SHA-256 checksums were computed and compared against values provided in the original repository's `data/checksums.txt`:

| Dataset | Language | Sentences | Checksum Match |
|---|---|---|---|
| WikiANN-train | en | 20,000 | Verified |
| WikiANN-train | zh | 20,000 | Verified |
| WikiANN-test | yo | 1,196 | Verified |
| WikiANN-test | sw | 1,000 | Verified |
| WikiANN-test | qu | 811 | Verified |
| WikiANN-test | cy | 1,000 | Verified |
| WikiANN-test | tl | 1,000 | Verified |

## Discovered Issues

During environment setup and initial runs, we discovered three issues requiring correction before meaningful replication could proceed. These are documented in detail in the Methods page. All corrections were minimal and verifiable: two were single-line fixes, one was a two-line change to the evaluation metric.

We emphasise that these bugs do not indicate carelessness by the original authors. Code bugs in research software are common and expected; their discovery during replication is precisely the value of the replication process.

## Replication Protocol

We pre-registered our replication plan on OSF (registration DOI: 10.17605/OSF.IO/XXXXX) before beginning experiments. The pre-registration specified:

- Exact experiments to be replicated
- Confirmation thresholds for each claim
- Number of random seeds (5)
- Statistical tests to be used
- Criteria for CONFIRMED / PARTIALLY / FAILED verdicts
