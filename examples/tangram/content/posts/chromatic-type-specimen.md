+++
title = "Chromatic: A Type Specimen for Variable Fonts"
date = 2026-02-10
description = "Designing an interactive type specimen that showcases the capabilities of variable font technology"
tags = ["typography", "web", "case-study"]
categories = ["typography"]
authors = ["studio"]
+++

# Chromatic: A Type Specimen for Variable Fonts

Variable font technology allows a single font file to contain an entire range of weights, widths, and other design axes. Chromatic is an interactive type specimen website designed to make this capability tangible and explorable.

## The Problem with Type Specimens

Traditional type specimens present fonts as fixed snapshots: here is the bold weight, here is the italic, here is the condensed variant. This approach fails to capture what makes variable fonts remarkable -- the fluid, continuous nature of their design space.

We needed a specimen that lets visitors experience the font as a living system rather than a collection of static samples.

## Interaction Design

The specimen's central feature is a set of axis controllers that map directly to the font's variable axes. Visitors can adjust weight, width, optical size, and custom axes using simple slider controls. Every text sample on the page responds in real time, creating an immediate connection between input and output.

Rather than presenting every possible combination, we designed a series of curated "scenes" -- preset axis configurations that highlight particularly expressive regions of the design space. Visitors can start from these presets and explore outward, maintaining a sense of guided discovery.

## Layout

The page structure follows the reading order of a traditional type specimen, progressing from display settings through text sizes to technical details. But within this familiar framework, every section includes interactive elements that invite exploration.

Character sets are presented in a filterable grid that responds to axis changes. Paragraph samples allow visitors to input their own text. The waterfall section -- traditionally a static size progression -- becomes an animated cascade that flows through the weight axis.

## Technical Execution

The specimen is built as a static site with minimal JavaScript. Font rendering is handled entirely by the browser's native variable font support. Axis values are stored in CSS custom properties, allowing a single JavaScript listener to update every text element simultaneously.

Performance was a primary concern. The variable font file is subset to include only the characters displayed on the page, reducing file size by sixty percent. Axis animations use CSS transitions rather than JavaScript frame loops, ensuring smooth rendering on lower-powered devices.

## Reception

The specimen was featured in several typography publications and became a reference example for how to present variable fonts effectively. The foundry reported that the interactive format increased trial downloads by forty percent compared to their previous static specimen pages.

More broadly, the project demonstrated that type specimens need not be passive documents. When the medium allows it, showing how a font moves and changes is far more powerful than showing how it looks at rest.
