+++
title = "B. Intellectual Merit"
description = "Statement of the intellectual merit and scientific contributions of the proposed research."
weight = 2
template = "post"
tags = ["proposal", "innovation", "contributions"]
categories = ["sections"]
[extra]
section_number = "B"
+++

## Advancing the State of the Art

The proposed research makes three primary intellectual contributions that advance the frontier of climate-resilient infrastructure science.

### Contribution 1: ML-Enhanced Hydraulic-Climate Coupling

Existing approaches to climate impact assessment for water infrastructure treat hydraulic modelling and climate projection as sequential, loosely coupled processes. Climate projections are generated independently, then fed as boundary conditions into hydraulic models without feedback or uncertainty propagation. This approach systematically underestimates compound risks -- scenarios where multiple climate stressors interact with infrastructure vulnerabilities in non-linear ways.

Our framework introduces a tightly coupled architecture in which hydraulic model responses inform the selection and weighting of climate scenarios, creating a feedback loop that concentrates computational resources on the most decision-relevant climate futures. This "importance-weighted ensemble" approach reduces the scenario space from thousands of equally-weighted projections to a manageable set of high-consequence pathways, without sacrificing robustness.

### Contribution 2: Equity-Constrained Robust Optimization

Multi-objective optimization for infrastructure planning is well-established, but existing formulations rarely incorporate distributional equity as an explicit objective. Our framework introduces equity constraints derived from environmental justice literature, ensuring that optimization solutions cannot improve aggregate system performance at the expense of underserved communities.

The mathematical formulation treats equity not as a soft preference to be traded off against cost and reliability, but as a hard constraint that must be satisfied before a solution enters the Pareto frontier. This approach is novel in the infrastructure optimization literature and addresses a critical gap identified by the National Academies in their 2024 report on equitable infrastructure investment.

### Contribution 3: Participatory Scenario Analysis

The decision support component bridges a persistent gap between computational modelling and real-world infrastructure decision-making. While sophisticated models can generate optimal solutions, these solutions are rarely adopted without modification because they fail to account for political, institutional, and community factors that cannot be easily quantified.

Our participatory scenario analysis methodology allows stakeholders to define the objectives, constraints, and scenarios that the optimization framework explores. This "stakeholder-in-the-loop" approach ensures that computational results reflect community priorities from the outset, rather than presenting optimized solutions that must be retroactively justified to skeptical audiences.

## Relation to Prior NSF-Funded Work

This proposal builds on two prior NSF awards to members of the research team:

- **NSF-CBET-2019-07234** (PI: Chen, $450K, 2019-2022): Developed the hydraulic network modelling methodology that forms the basis of WP2. Published 8 peer-reviewed papers and trained 3 PhD students.
- **NSF-EAR-2021-11456** (PI: Al-Rashidi, $380K, 2021-2024): Developed the statistical downscaling methodology used in WP3. Produced a validated 1km precipitation product for the Texas Gulf Coast.

The proposed work extends both foundations by coupling them into an integrated framework and adding the optimization and decision support layers that neither prior project addressed.
