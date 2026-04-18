+++
title = "2. Image Acquisition"
description = "Microscope configuration, exposure settings, and multi-platform calibration procedures for consistent image quality."
weight = 2
template = "post"
tags = ["paper", "light", "methods", "protocol", "technical"]
categories = ["sections"]

[extra]
section_number = "2"
+++

## Overview

Standardized image acquisition minimizes inter-platform variability and ensures that images entering the preprocessing pipeline have consistent dynamic range and spatial resolution. This section specifies acquisition parameters validated across four widefield fluorescence microscope platforms.

## Microscope Platforms

<table class="paper-table">
  <caption><span class="tab-num">Table 2.</span> Microscope platforms used for cross-platform validation of the ACAP protocol.</caption>
  <thead>
    <tr>
      <th>Platform</th>
      <th>Microscope</th>
      <th>Camera</th>
      <th>Site</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Platform A</td>
      <td>Zeiss Axio Observer 7</td>
      <td>Hamamatsu ORCA-Flash4.0 V3</td>
      <td>ETH Zurich</td>
    </tr>
    <tr>
      <td>Platform B</td>
      <td>Nikon Eclipse Ti2</td>
      <td>Andor Zyla 4.2 PLUS</td>
      <td>Univ. of Tokyo</td>
    </tr>
    <tr>
      <td>Platform C</td>
      <td>Leica DMi8</td>
      <td>Hamamatsu ORCA-Flash4.0 LT+</td>
      <td>Uppsala Univ.</td>
    </tr>
    <tr>
      <td>Platform D</td>
      <td>Olympus IX83</td>
      <td>Photometrics Prime 95B</td>
      <td>UNAM</td>
    </tr>
  </tbody>
</table>

## Acquisition Parameters

<div class="param-box">
  <p class="param-label">Standard Acquisition Settings</p>
  <dl>
    <dt>Objective</dt>
    <dd>20x, NA 0.75, Plan Apochromat (air)</dd>
    <dt>Filter set</dt>
    <dd>DAPI: excitation 350/50 nm, emission 460/50 nm</dd>
    <dt>Bit depth</dt>
    <dd>16-bit (65,536 gray levels)</dd>
    <dt>Image size</dt>
    <dd>2048 x 2048 pixels</dd>
    <dt>Pixel size</dt>
    <dd>0.325 um/pixel (at 20x with standard camera pixel pitch)</dd>
    <dt>Exposure time</dt>
    <dd>Auto-calibrated per platform (see calibration procedure below)</dd>
    <dt>Gain</dt>
    <dd>1x (no analog gain amplification)</dd>
    <dt>Binning</dt>
    <dd>1x1 (no binning)</dd>
  </dl>
</div>

### Exposure Calibration Procedure

The exposure time is calibrated per platform to achieve a target mean nuclear intensity of 2000 AU (arbitrary units) on a reference slide:

<div class="protocol-step">
  <span class="step-number">2a</span>
  <p class="step-title">Exposure Calibration</p>
  <p class="step-detail">1. Prepare a reference slide with medium-density DAPI-stained HeLa cells using the standard protocol (Section 1). 2. Set gain to 1x, binning to 1x1, and bit depth to 16-bit. 3. Begin with 50 ms exposure time. 4. Acquire a single frame and measure mean intensity within manually selected nuclear ROIs (n = 20 nuclei). 5. Adjust exposure time proportionally until the mean nuclear intensity is 2000 +/- 200 AU. 6. Record the calibrated exposure time for all subsequent acquisitions on this platform.</p>
</div>

<div class="decision-callout">
  <p class="decision-label">Decision Point: Exposure Range</p>
  <p class="decision-text">Acceptable exposure times range from 20 ms to 500 ms. If the calibrated exposure falls below 20 ms, the DAPI concentration may be too high (see Section 1). If above 500 ms, check lamp intensity, filter condition, and DAPI staining quality. Exposures above 500 ms introduce unacceptable noise levels for reliable segmentation.</p>
</div>

## Flat-Field Reference Acquisition

Flat-field correction requires a reference image acquired under identical optical conditions but with a uniform fluorescent sample:

<div class="protocol-step step-green">
  <span class="step-number">2b</span>
  <p class="step-title">Flat-Field Reference</p>
  <p class="step-detail">Prepare a thin, uniform layer of fluorescent solution (10 uM fluorescein in PBS) between a slide and coverslip. Acquire 10 frames at the calibrated exposure time. Average the 10 frames to produce the flat-field reference image. Store as a 32-bit TIFF. This reference must be re-acquired if any optical component is changed.</p>
</div>

## Field-of-View Sampling

<div class="param-box">
  <p class="param-label">Sampling Strategy</p>
  <dl>
    <dt>Fields per condition</dt>
    <dd>Minimum 10, recommended 20</dd>
    <dt>Selection method</dt>
    <dd>Systematic random (grid with random offset)</dd>
    <dt>Exclusion zone</dt>
    <dd>Reject fields within 500 um of coverslip edge</dd>
    <dt>Focus criterion</dt>
    <dd>Software autofocus on DAPI channel</dd>
    <dt>File format</dt>
    <dd>16-bit TIFF, uncompressed</dd>
  </dl>
</div>

### Naming Convention

Files should follow the naming convention: `ACAP_{platform}_{density}_{field}_{date}.tif`

Example: `ACAP_A_medium_007_20260215.tif` indicates Platform A, medium density, field 7, acquired 15 February 2026.
