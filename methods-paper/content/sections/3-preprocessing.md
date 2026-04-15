+++
title = "3. Preprocessing"
description = "Flat-field correction, background subtraction, and noise reduction with quantitative quality gates for image quality assurance."
weight = 3
template = "post"
tags = ["paper", "light", "methods", "protocol", "technical"]
categories = ["sections"]

[extra]
section_number = "3"
+++

## Overview

Preprocessing transforms raw fluorescence micrographs into clean, normalized images suitable for segmentation. The pipeline applies three sequential operations -- flat-field correction, rolling-ball background subtraction, and Gaussian denoising -- followed by a signal-to-noise ratio (SNR) quality gate that determines whether an image proceeds to segmentation or is flagged for re-acquisition.

## Preprocessing Pipeline

<figure class="figure">
  <svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Preprocessing pipeline showing three operations in sequence with SNR quality gate">
    <rect x="0" y="0" width="720" height="200" fill="#fafaf7"/>
    <!-- Raw image box -->
    <rect x="20" y="70" width="110" height="50" fill="#eaf0f7" stroke="#2a5a8a" stroke-width="1.5"/>
    <text x="75" y="92" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#2a5a8a">RAW IMAGE</text>
    <text x="75" y="108" text-anchor="middle" font-family="Crimson Pro, serif" font-size="10" fill="#1a2030">16-bit TIFF</text>
    <!-- Arrow -->
    <line x1="130" y1="95" x2="158" y2="95" stroke="#1a2030" stroke-width="1.2"/>
    <polygon points="164,95 158,90 158,100" fill="#1a2030"/>
    <!-- Flat-field box -->
    <rect x="164" y="70" width="110" height="50" fill="#eaf0f7" stroke="#2a5a8a" stroke-width="1.5"/>
    <text x="219" y="88" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#2a5a8a">STEP 3a</text>
    <text x="219" y="108" text-anchor="middle" font-family="Crimson Pro, serif" font-size="10" fill="#1a2030">Flat-field corr.</text>
    <!-- Arrow -->
    <line x1="274" y1="95" x2="302" y2="95" stroke="#1a2030" stroke-width="1.2"/>
    <polygon points="308,95 302,90 302,100" fill="#1a2030"/>
    <!-- Background sub box -->
    <rect x="308" y="70" width="110" height="50" fill="#eaf0f7" stroke="#2a5a8a" stroke-width="1.5"/>
    <text x="363" y="88" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#2a5a8a">STEP 3b</text>
    <text x="363" y="108" text-anchor="middle" font-family="Crimson Pro, serif" font-size="10" fill="#1a2030">Background sub.</text>
    <!-- Arrow -->
    <line x1="418" y1="95" x2="446" y2="95" stroke="#1a2030" stroke-width="1.2"/>
    <polygon points="452,95 446,90 446,100" fill="#1a2030"/>
    <!-- Denoise box -->
    <rect x="452" y="70" width="110" height="50" fill="#eaf0f7" stroke="#2a5a8a" stroke-width="1.5"/>
    <text x="507" y="88" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#2a5a8a">STEP 3c</text>
    <text x="507" y="108" text-anchor="middle" font-family="Crimson Pro, serif" font-size="10" fill="#1a2030">Gaussian denoise</text>
    <!-- Arrow -->
    <line x1="562" y1="95" x2="590" y2="95" stroke="#1a2030" stroke-width="1.2"/>
    <polygon points="596,95 590,90 590,100" fill="#1a2030"/>
    <!-- SNR decision diamond -->
    <polygon points="640,65 680,95 640,125 600,95" fill="#faf3e6" stroke="#7a5a2a" stroke-width="1.5"/>
    <text x="640" y="93" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#7a5a2a">SNR</text>
    <text x="640" y="103" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="8" fill="#7a5a2a">>=8?</text>
    <!-- Pass label -->
    <text x="640" y="145" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#2a7a4a">PASS</text>
    <text x="640" y="160" text-anchor="middle" font-family="Crimson Pro, serif" font-size="10" fill="#1a2030">to Step 4</text>
    <!-- Fail label -->
    <text x="700" y="82" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#7a5a2a">FAIL</text>
    <line x1="680" y1="88" x2="700" y2="88" stroke="#7a5a2a" stroke-width="1"/>
    <text x="700" y="100" font-family="Crimson Pro, serif" font-size="9" fill="#7a5a2a">re-acquire</text>
  </svg>
  <div class="caption"><span class="fig-num">Figure 2.</span> Preprocessing pipeline. Each raw image undergoes flat-field correction, rolling-ball background subtraction, and Gaussian denoising. The SNR quality gate (diamond) determines whether the preprocessed image proceeds to segmentation or is flagged for re-acquisition.</div>
</figure>

## Step 3a: Flat-Field Correction

Flat-field correction compensates for uneven illumination across the field of view. Without correction, nuclei at field edges appear dimmer and may be missed during thresholding.

<div class="protocol-step">
  <span class="step-number">3a</span>
  <p class="step-title">Flat-Field Correction</p>
  <p class="step-detail">Divide each raw image pixel-by-pixel by the flat-field reference image (acquired in Step 2b), then multiply by the mean intensity of the flat-field reference. This produces a corrected image with uniform illumination while preserving the original intensity scale. Formula: I_corrected(x,y) = I_raw(x,y) / I_flatfield(x,y) * mean(I_flatfield).</p>
</div>

<div class="param-box">
  <p class="param-label">Flat-Field Parameters</p>
  <dl>
    <dt>Reference image</dt>
    <dd>32-bit averaged flat-field (10 frames)</dd>
    <dt>Normalization</dt>
    <dd>Multiply by mean of reference after division</dd>
    <dt>Output format</dt>
    <dd>32-bit floating point (convert to 16-bit after full preprocessing)</dd>
  </dl>
</div>

## Step 3b: Background Subtraction

Rolling-ball background subtraction removes low-frequency intensity variations that remain after flat-field correction, including autofluorescence from the mounting medium and residual unbound DAPI.

<div class="protocol-step">
  <span class="step-number">3b</span>
  <p class="step-title">Rolling-Ball Background Subtraction</p>
  <p class="step-detail">Apply the rolling-ball algorithm (Sternberg 1983) with a ball radius of 50 pixels. This radius corresponds to approximately 16 um at 20x magnification, which is larger than any individual nucleus but small enough to follow local background variations. Enable the "sliding paraboloid" option for smoother estimation. Subtract the estimated background from the corrected image.</p>
</div>

<div class="param-box">
  <p class="param-label">Background Subtraction Parameters</p>
  <dl>
    <dt>Algorithm</dt>
    <dd>Rolling ball (sliding paraboloid variant)</dd>
    <dt>Ball radius</dt>
    <dd>50 pixels (16.25 um at 0.325 um/pixel)</dd>
    <dt>Light background</dt>
    <dd>Disabled (fluorescence images have dark background)</dd>
  </dl>
</div>

## Step 3c: Gaussian Denoising

A gentle Gaussian blur reduces high-frequency noise without significantly degrading nuclear edges.

<div class="protocol-step step-green">
  <span class="step-number">3c</span>
  <p class="step-title">Gaussian Blur Denoising</p>
  <p class="step-detail">Apply a 2D Gaussian filter with sigma = 1.0 pixel. This value was empirically determined to reduce noise by approximately 30% while maintaining edge sharpness sufficient for accurate segmentation. Larger sigma values risk merging closely spaced nuclei during subsequent thresholding.</p>
</div>

## SNR Quality Gate

<div class="decision-callout">
  <p class="decision-label">Decision Point: Signal-to-Noise Ratio</p>
  <p class="decision-text">After preprocessing, compute the SNR as: SNR = (mean_signal - mean_background) / std_background, where mean_signal is the mean intensity of the brightest 10% of pixels and mean_background and std_background are computed from the dimmest 30% of pixels. If SNR >= 8, the image passes to segmentation (Step 4). If SNR < 8, flag the image for visual inspection. Common causes of low SNR: photobleached sample, incorrect exposure, contaminated filter cube, or air bubble in mounting medium. Re-acquire the field of view after addressing the identified cause.</p>
</div>

### Pseudocode: Preprocessing Pipeline

<div class="pseudocode-box">
  <p class="algo-title">Algorithm 1: Preprocessing</p>
  <span class="line-num">1</span> <span class="keyword">function</span> <span class="func">preprocess</span>(raw, flatfield):<br>
  <span class="line-num">2</span> &nbsp;&nbsp;mean_ff = <span class="func">mean</span>(flatfield)<br>
  <span class="line-num">3</span> &nbsp;&nbsp;corrected = (raw / flatfield) * mean_ff<br>
  <span class="line-num">4</span> &nbsp;&nbsp;bg = <span class="func">rolling_ball</span>(corrected, radius=50)<br>
  <span class="line-num">5</span> &nbsp;&nbsp;subtracted = corrected - bg<br>
  <span class="line-num">6</span> &nbsp;&nbsp;denoised = <span class="func">gaussian</span>(subtracted, sigma=1.0)<br>
  <span class="line-num">7</span> &nbsp;&nbsp;snr = <span class="func">compute_snr</span>(denoised)<br>
  <span class="line-num">8</span> &nbsp;&nbsp;<span class="keyword">if</span> snr < 8:<br>
  <span class="line-num">9</span> &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> FLAG_REACQUIRE<br>
  <span class="line-num">10</span> &nbsp;&nbsp;<span class="keyword">return</span> <span class="func">to_16bit</span>(denoised)<br>
</div>
