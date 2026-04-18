+++
title = "4. Segmentation"
description = "Adaptive thresholding, watershed separation, and morphological filtering for reliable cell detection and counting."
weight = 4
template = "post"
tags = ["paper", "light", "methods", "protocol", "technical"]
categories = ["sections"]

[extra]
section_number = "4"
+++

## Overview

The segmentation stage converts preprocessed grayscale images into a labeled mask where each detected nucleus is assigned a unique integer label. The pipeline uses Otsu's adaptive thresholding to create an initial binary mask, marker-controlled watershed to separate touching nuclei, and morphological size/shape filtering to exclude debris and artifacts. The output is a cell count and a set of centroid coordinates for each detected object.

## Step 4a: Adaptive Thresholding

<div class="protocol-step">
  <span class="step-number">4a</span>
  <p class="step-title">Otsu Adaptive Threshold</p>
  <p class="step-detail">Apply Otsu's method to the preprocessed 16-bit image to automatically determine the intensity threshold separating foreground (nuclei) from background. This method minimizes intra-class variance and is robust to moderate changes in overall brightness across platforms. Convert the result to a binary mask (foreground = 255, background = 0).</p>
</div>

### Why Otsu Over Fixed Thresholds

A fixed threshold would require recalibration for every microscope platform and staining batch. Otsu's method adapts to the intensity histogram of each individual image, making it inherently platform-independent. In our validation dataset, Otsu-derived thresholds varied by less than 8% across the four platforms despite 15-22% differences in absolute intensity.

## Step 4b: Morphological Cleanup

<div class="protocol-step">
  <span class="step-number">4b</span>
  <p class="step-title">Binary Morphological Operations</p>
  <p class="step-detail">1. Apply binary opening (erosion followed by dilation) with a 3x3 disk structuring element to remove small noise pixels that survived thresholding. 2. Apply binary closing (dilation followed by erosion) with the same 3x3 disk to fill small holes within nuclear regions. 3. Fill remaining internal holes using a flood-fill operation from the image border.</p>
</div>

<div class="param-box">
  <p class="param-label">Morphological Parameters</p>
  <dl>
    <dt>Structuring element</dt>
    <dd>Disk, radius = 1 pixel (3x3 neighborhood)</dd>
    <dt>Opening iterations</dt>
    <dd>1</dd>
    <dt>Closing iterations</dt>
    <dd>1</dd>
    <dt>Hole fill</dt>
    <dd>Border-connected flood fill</dd>
  </dl>
</div>

## Step 4c: Watershed Separation

Touching or overlapping nuclei appear as merged blobs in the binary mask. The watershed algorithm separates these by treating the distance transform of the binary mask as a topographic surface and finding watershed lines between local maxima.

<div class="protocol-step step-green">
  <span class="step-number">4c</span>
  <p class="step-title">Marker-Controlled Watershed</p>
  <p class="step-detail">1. Compute the Euclidean distance transform of the binary mask. 2. Identify regional maxima of the distance map with a minimum peak distance of 8 pixels (2.6 um). This distance ensures that two adjacent nuclei with typical diameters of 10-15 um produce separate markers. 3. Label each maximum as a unique marker. 4. Apply the watershed algorithm using the negative distance transform as the surface and the markers as seeds. 5. Overlay watershed lines on the binary mask to split merged nuclei.</p>
</div>

### Pseudocode: Segmentation Pipeline

<div class="pseudocode-box">
  <p class="algo-title">Algorithm 2: Segmentation</p>
  <span class="line-num">1</span> <span class="keyword">function</span> <span class="func">segment</span>(image):<br>
  <span class="line-num">2</span> &nbsp;&nbsp;threshold = <span class="func">otsu</span>(image)<br>
  <span class="line-num">3</span> &nbsp;&nbsp;binary = image > threshold<br>
  <span class="line-num">4</span> &nbsp;&nbsp;binary = <span class="func">morpho_open</span>(binary, disk(1))<br>
  <span class="line-num">5</span> &nbsp;&nbsp;binary = <span class="func">morpho_close</span>(binary, disk(1))<br>
  <span class="line-num">6</span> &nbsp;&nbsp;binary = <span class="func">fill_holes</span>(binary)<br>
  <span class="line-num">7</span> &nbsp;&nbsp;dist = <span class="func">distance_transform</span>(binary)<br>
  <span class="line-num">8</span> &nbsp;&nbsp;markers = <span class="func">find_maxima</span>(dist, min_dist=8)<br>
  <span class="line-num">9</span> &nbsp;&nbsp;labels = <span class="func">watershed</span>(-dist, markers, mask=binary)<br>
  <span class="line-num">10</span> &nbsp;&nbsp;labels = <span class="func">filter_objects</span>(labels)<br>
  <span class="line-num">11</span> &nbsp;&nbsp;<span class="keyword">return</span> labels<br>
</div>

## Step 4d: Size and Shape Filtering

<div class="protocol-step">
  <span class="step-number">4d</span>
  <p class="step-title">Object Filtering</p>
  <p class="step-detail">For each labeled object, compute the area (in pixels) and circularity (4 * pi * area / perimeter^2). Exclude objects outside the following ranges. Objects touching the image border are also excluded to avoid counting partial nuclei.</p>
</div>

<div class="param-box">
  <p class="param-label">Size and Shape Criteria</p>
  <dl>
    <dt>Minimum area</dt>
    <dd>80 pixels (8.4 um^2)</dd>
    <dt>Maximum area</dt>
    <dd>1200 pixels (126.8 um^2)</dd>
    <dt>Minimum circularity</dt>
    <dd>0.5</dd>
    <dt>Border exclusion</dt>
    <dd>Remove objects touching any image edge</dd>
  </dl>
</div>

<div class="decision-callout">
  <p class="decision-label">Decision Point: Size Filter Calibration</p>
  <p class="decision-text">The area limits are calibrated for HeLa nuclei at 20x magnification (0.325 um/pixel). For other cell types or magnifications, recalculate the expected nuclear area range: measure 50 representative nuclei manually and set the minimum to 0.5x the smallest measured area and the maximum to 2.0x the largest. Circularity of 0.5 accommodates mild nuclear elongation seen in dividing cells; lower values indicate debris or segmentation errors.</p>
</div>

## Output

The segmentation stage produces:

1. **Labeled mask** -- a 16-bit image where each pixel value corresponds to a unique cell ID (0 = background)
2. **Cell count** -- the total number of labeled objects after filtering
3. **Centroid table** -- CSV file with columns: CellID, X_centroid, Y_centroid, Area_px, Circularity
4. **Overlay image** -- the original fluorescence image with detected cell boundaries drawn in green for visual quality control
