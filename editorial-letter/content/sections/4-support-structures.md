+++
title = "IV. Support Structures"
description = "Resources and infrastructure the journal is providing to help authors meet the new reproducibility requirements."
weight = 4
template = "post"
tags = ["editorial", "infrastructure", "support"]
categories = ["sections"]
[extra]
section_number = "IV"
+++

## Recognising the Burden

We are acutely aware that these requirements impose significant additional work on authors. Preparing code for public release is not the same as writing code for personal use. Documenting a computational environment requires technical skills that many researchers have not been trained in. Depositing data in certified archives involves navigating institutional policies, ethics approvals, and archival workflows.

We do not believe it is sufficient to announce new requirements and then leave authors to navigate these challenges alone. The journal is committing resources to the following support structures.

## Reproducibility Editors

Beginning with Volume 60, we will appoint a dedicated panel of Reproducibility Editors (REs) distinct from the traditional editorial board. REs will be recruited from the research software engineering community and will bring expertise in containerisation, version control, data management, and automated testing.

Each submission undergoing Track B review will be assigned to an RE who will:

- Attempt to build and run the deposited code
- Verify that at least two key results can be reproduced
- Provide constructive feedback to authors on documentation quality
- Certify the reproducibility status of the accepted paper

REs will be compensated at a rate commensurate with the technical expertise and time required.

## Template Repositories

We are preparing template repositories for the five most common computational frameworks used by our authors:

| Framework | Language | Template Contents |
|---|---|---|
| Numerical simulation | Python / NumPy | Dockerfile, Makefile, test harness, CI config |
| Machine learning | Python / PyTorch | Environment lockfile, data loader template, training script template |
| Finite element analysis | C++ / deal.II | CMake build system, container spec, validation suite |
| Statistical analysis | R / tidyverse | renv lockfile, Makefile, knitr template |
| Climate modelling | Fortran / MPI | Singularity container, batch script templates, model comparison tools |

These templates will be published as open-source repositories under the journal's GitHub organisation, with detailed guides and worked examples.

## Reproducibility Helpdesk

A dedicated helpdesk, staffed by research software engineers, will be available to authors during the submission process. The helpdesk will provide:

- Guidance on choosing appropriate repositories for code and data
- Technical assistance with containerisation
- Review of reproducibility checklists prior to submission
- Advice on data anonymisation and controlled-access arrangements

The helpdesk will operate during standard business hours (GMT) and will respond to queries within 48 hours.

## Fee Waivers and Institutional Support

We recognise that archival costs, container registry fees, and the time required to prepare reproducibility materials represent a financial burden that falls disproportionately on researchers in low-income institutions. The journal will offer:

- Full fee waivers for archival costs incurred by authors from institutions classified as low-income by the World Bank
- Partial fee waivers for authors from lower-middle-income institutions
- Letters of support for researchers seeking reproducibility-related funding from their institutions or funders

## Training Programme

In partnership with the Software Sustainability Institute and The Carpentries, we will offer a series of online workshops covering:

- Git and version control for researchers
- Docker and Singularity for computational reproducibility
- Data management plans and FAIR principles
- Writing reproducibility documentation

These workshops will be free for authors who have submitted or plan to submit to the journal.
