+++
title = "A. Project Description"
description = "Technical description of the proposed research, including background, objectives, and methodology."
weight = 1
template = "post"
tags = ["proposal", "methodology", "research-design"]
categories = ["sections"]
[extra]
section_number = "A"
+++

## Background and Motivation

Urban water infrastructure in the United States faces a convergence of challenges that demands urgent research attention. The American Society of Civil Engineers estimates that the nation's drinking water infrastructure requires $625 billion in investment over the next 20 years, while simultaneously confronting climate-driven shifts in precipitation patterns, temperature extremes, and sea-level rise that existing systems were never designed to handle.

Current approaches to water infrastructure planning rely on historical climate data -- the "stationarity assumption" -- that is increasingly recognized as unreliable under anthropogenic climate change. Milly et al. (2008) declared that "stationarity is dead," yet most municipal water systems continue to plan expansions and upgrades based on historical return periods that no longer reflect future conditions.

## Research Objectives

This project addresses three interconnected research questions:

1. **How can physics-based hydraulic network models be effectively coupled with machine-learning-enhanced climate projections** to produce reliable estimates of infrastructure stress under multiple climate scenarios?

2. **What multi-objective optimization strategies can identify infrastructure investments** that are robust across a wide range of plausible climate futures, while balancing cost, reliability, and equity objectives?

3. **How can computational modelling results be effectively translated into stakeholder-accessible decision support** that incorporates community priorities alongside technical criteria?

## Methodology Overview

The proposed framework integrates four computational components:

**Component 1: Hydraulic Network Modelling (WP2).** We will develop high-resolution hydraulic models of the water distribution networks in three partner municipalities using EPANET as the simulation engine, enhanced with machine-learning surrogate models for computational efficiency. The models will capture pipe aging, demand variation, and pressure-dependent leakage.

**Component 2: Climate Downscaling (WP3).** Statistical downscaling of CMIP6 projections to the municipal scale using a hybrid approach combining dynamical downscaling (WRF) with ML-based bias correction (convolutional neural networks trained on gridded observations). We target 1km spatial resolution for precipitation and temperature fields.

**Component 3: Multi-Objective Optimization (WP4).** A novel stochastic multi-objective optimization framework that identifies Pareto-optimal infrastructure investment portfolios under deep uncertainty. The framework will use scenario-based robust optimization with equity constraints ensuring that disadvantaged communities receive proportional service improvements.

**Component 4: Decision Support (WP5-6).** An interactive web-based decision support tool that allows water utility managers and community stakeholders to explore trade-offs between investment options, visualize infrastructure performance under different climate scenarios, and evaluate the distributional equity of proposed interventions.
