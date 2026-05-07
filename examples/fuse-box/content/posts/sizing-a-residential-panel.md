+++
title = "Sizing a Residential Panel"
date = "2025-03-12"
description = "Calculating service capacity for a single-family dwelling without overcommitting amperage."
tags = ["panels", "sizing", "residential"]
categories = ["log"]
+++

Sizing a residential service panel begins with a load calculation defined by the local electrical code. In North America that calculation follows Article 220 of the National Electrical Code. The procedure is mechanical, but the inputs require care.

<!-- more -->

### General Lighting Load

The first input is the general lighting and receptacle load, computed at three volt-amperes per square foot of habitable space. A two thousand square foot dwelling therefore starts with a six thousand volt-ampere baseline. Habitable space excludes garages, unfinished basements, and attics, even when those areas contain receptacles.

### Fixed Appliances

Each fixed appliance contributes its nameplate rating. A typical electric range adds eight thousand volt-amperes after demand factors are applied. A clothes dryer adds five thousand. A water heater adds its full nameplate, usually four thousand five hundred. Heating and cooling loads are added separately, with only the larger of the two counted because the systems do not run simultaneously.

### Demand Factors

Once the loads are summed, demand factors reduce the total to reflect realistic peak usage. The first ten thousand volt-amperes are taken at one hundred percent. Everything above that is taken at forty percent. The reduced sum, divided by the service voltage, yields the minimum amperage rating for the panel.

### Headroom

Sizing exactly to the calculated minimum is poor practice. A two hundred ampere panel is the common default for new construction even when the calculated load suggests one fifty would suffice. The additional capacity covers future circuits for electric vehicle charging, induction cooking, and heat pump conversion. Replacing a panel later is expensive. Oversizing the bus at construction time is not.
