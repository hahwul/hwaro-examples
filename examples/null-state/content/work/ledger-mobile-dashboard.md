+++
title = "Ledger Mobile Dashboard"
date = "2025-03-02"
description = "Single-screen interface for a portfolio of 8 small businesses. Designed for the owner's commute."
tags = ["interface", "systems"]
+++

## Project

A small investor owns and operates eight independent retail businesses across Seoul. She wanted a single mobile dashboard she could check during her commute that showed, in priority order, which of the eight businesses needed her attention that day.

The constraint: the dashboard had to fit on a single screen and require no scrolling. Everything important had to fit between the status bar and the home indicator.

## What we shipped

- A **single-screen interface** with eight horizontal rows. Each row is a business. Each row carries one number and one verdict.
- A **priority sort** that pushes businesses requiring attention to the top, calibrated against her decision history over six months.
- **No notifications**, ever. The dashboard is a pull tool, not a push one.
- A **paper printout mode** for days she leaves her phone at home.

## Outcome

She has used the dashboard daily for fourteen months. Her decision-making time during the commute has compressed from twenty minutes of scrolling reports to two minutes of triage. She still occasionally prints the paper version.

## Tools

Static web app · IndexedDB for the local data store · Crystal microservice for the daily import
