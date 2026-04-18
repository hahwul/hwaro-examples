+++
title = "Guidance and Navigation"
date = "2026-02-16"
weight = 2
template = "post"
description = "Inertial navigation and autonomous guidance system documentation"
tags = ["guidance", "navigation"]
[extra]
system_status = "GO"
+++

## System Overview

The guidance, navigation, and control (GNC) system provides autonomous flight management from liftoff through orbit insertion. Triple-redundant inertial measurement units feed the flight computer with position, velocity, and attitude data at 400 Hz.

## Navigation Architecture

- Primary: Ring laser gyroscope IMU (3-axis)
- Secondary: Fiber optic gyroscope IMU (3-axis)
- Tertiary: MEMS-based backup IMU
- GPS receiver for post-tower-clear trajectory refinement

## Guidance Algorithms

The flight computer runs a powered explicit guidance (PEG) algorithm that continuously optimizes the remaining trajectory in real time. Key features:

- Autonomous trajectory reshaping for engine-out scenarios
- Real-time wind compensation using upper-atmosphere models
- Propellant-optimal steering with structural load constraints
- Automatic day-of-launch trajectory update capability
