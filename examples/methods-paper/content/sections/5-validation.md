+++
title = "5. Validation"
description = "Ground-truth annotation protocol, statistical metrics, and cross-platform reproducibility assessment for the ACAP pipeline."
weight = 5
template = "post"
tags = ["paper", "light", "methods", "protocol", "technical"]
categories = ["sections"]

[extra]
section_number = "5"
+++

## Overview

Validation quantifies the accuracy and reproducibility of the ACAP pipeline against expert manual annotations. This section describes the ground-truth annotation protocol, the statistical metrics used for evaluation, cross-platform reproducibility analysis, and performance stratified by cell density.

## Ground-Truth Annotation Protocol

<div class="protocol-step">
  <span class="step-number">5a</span>
  <p class="step-title">Manual Annotation</p>
  <p class="step-detail">Three trained annotators independently marked the centroid of each visible nucleus in the validation set of 480 images using the Cell Counter plugin in FIJI. Annotators were blinded to the automated results. A nucleus was included in the ground truth if at least 2 of 3 annotators marked it (majority vote consensus).</p>
</div>

<div class="param-box">
  <p class="param-label">Annotation Parameters</p>
  <dl>
    <dt>Annotators</dt>
    <dd>3 trained microscopists (2+ years experience)</dd>
    <dt>Software</dt>
    <dd>FIJI Cell Counter plugin</dd>
    <dt>Consensus rule</dt>
    <dd>Majority vote (2 of 3 annotators agree)</dd>
    <dt>Merging tolerance</dt>
    <dd>Annotations within 5 pixels merged as same cell</dd>
    <dt>Images annotated</dt>
    <dd>480 (120 per platform, 40 per density level)</dd>
  </dl>
</div>

### Inter-Annotator Agreement

<table class="paper-table">
  <caption><span class="tab-num">Table 3.</span> Inter-annotator agreement measured by Fleiss' kappa and mean pairwise F1.</caption>
  <thead>
    <tr>
      <th>Metric</th>
      <th>All densities</th>
      <th>Low</th>
      <th>Medium</th>
      <th>High</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fleiss' kappa</td>
      <td class="num">0.961</td>
      <td class="num">0.982</td>
      <td class="num">0.965</td>
      <td class="num">0.936</td>
    </tr>
    <tr>
      <td>Mean pairwise F1</td>
      <td class="num">0.978</td>
      <td class="num">0.991</td>
      <td class="num">0.980</td>
      <td class="num">0.963</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">Kappa and F1 computed on per-cell detection basis with 5-pixel matching tolerance. Lower agreement at high density reflects genuine ambiguity in overlapping nuclei.</td></tr>
  </tfoot>
</table>

## Evaluation Metrics

Automated detections are matched to ground-truth annotations using a 5-pixel (1.625 um) Euclidean distance threshold. Each ground-truth cell is matched to at most one detection (nearest-neighbor assignment), and each detection is matched to at most one ground-truth cell.

<div class="pseudocode-box">
  <p class="algo-title">Algorithm 3: Detection Matching</p>
  <span class="line-num">1</span> <span class="keyword">function</span> <span class="func">match_detections</span>(gt, det, tol=5):<br>
  <span class="line-num">2</span> &nbsp;&nbsp;D = <span class="func">cdist</span>(gt, det) <span class="comment">// pairwise distance matrix</span><br>
  <span class="line-num">3</span> &nbsp;&nbsp;matches = <span class="func">linear_assignment</span>(D)<br>
  <span class="line-num">4</span> &nbsp;&nbsp;TP = 0; FP = 0; FN = 0<br>
  <span class="line-num">5</span> &nbsp;&nbsp;<span class="keyword">for</span> (i, j) <span class="keyword">in</span> matches:<br>
  <span class="line-num">6</span> &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span> D[i,j] <= tol:<br>
  <span class="line-num">7</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TP += 1<br>
  <span class="line-num">8</span> &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">else</span>:<br>
  <span class="line-num">9</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FP += 1; FN += 1<br>
  <span class="line-num">10</span> &nbsp;&nbsp;FP += len(det) - len(matches)<br>
  <span class="line-num">11</span> &nbsp;&nbsp;FN += len(gt) - TP<br>
  <span class="line-num">12</span> &nbsp;&nbsp;precision = TP / (TP + FP)<br>
  <span class="line-num">13</span> &nbsp;&nbsp;recall = TP / (TP + FN)<br>
  <span class="line-num">14</span> &nbsp;&nbsp;F1 = 2 * precision * recall / (precision + recall)<br>
  <span class="line-num">15</span> &nbsp;&nbsp;<span class="keyword">return</span> precision, recall, F1<br>
</div>

## Cross-Platform Results

<table class="paper-table">
  <caption><span class="tab-num">Table 4.</span> ACAP performance by microscope platform (all densities combined).</caption>
  <thead>
    <tr>
      <th>Platform</th>
      <th>Precision</th>
      <th>Recall</th>
      <th>F1</th>
      <th>Mean count error</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Platform A (Zeiss)</td>
      <td class="num">0.955</td>
      <td class="num">0.944</td>
      <td class="num">0.949</td>
      <td class="num">-1.2%</td>
    </tr>
    <tr>
      <td>Platform B (Nikon)</td>
      <td class="num">0.949</td>
      <td class="num">0.938</td>
      <td class="num">0.943</td>
      <td class="num">+0.8%</td>
    </tr>
    <tr>
      <td>Platform C (Leica)</td>
      <td class="num">0.957</td>
      <td class="num">0.941</td>
      <td class="num">0.949</td>
      <td class="num">-0.5%</td>
    </tr>
    <tr>
      <td>Platform D (Olympus)</td>
      <td class="num">0.948</td>
      <td class="num">0.937</td>
      <td class="num">0.942</td>
      <td class="num">+1.8%</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">Mean count error: (automated count - manual count) / manual count. Negative values indicate undercounting. Inter-platform CV for F1 = 3.1%.</td></tr>
  </tfoot>
</table>

## Density-Stratified Performance

<table class="paper-table">
  <caption><span class="tab-num">Table 5.</span> ACAP performance stratified by cell density (all platforms combined).</caption>
  <thead>
    <tr>
      <th>Density</th>
      <th>Cells per field</th>
      <th>F1</th>
      <th>Primary error source</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Low</td>
      <td class="num">50 - 150</td>
      <td class="num">0.968</td>
      <td>Occasional debris false positives</td>
    </tr>
    <tr>
      <td>Medium</td>
      <td class="num">150 - 400</td>
      <td class="num">0.951</td>
      <td>Missed cells at field edges</td>
    </tr>
    <tr>
      <td>High</td>
      <td class="num">400 - 800</td>
      <td class="num">0.919</td>
      <td>Under-segmentation of touching nuclei</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="4">Performance decreases at high density due to increased nuclear overlap. Watershed separation resolves most but not all touching pairs at densities above 500 cells/field.</td></tr>
  </tfoot>
</table>

## Processing Time

<div class="protocol-callout">
  <span class="callout-label">Benchmark</span>
  <span class="callout-value">1.8 s<span class="unit">per image</span></span>
  <p class="callout-detail">Mean processing time for the complete pipeline (preprocessing + segmentation) on a single 2048x2048 16-bit image. Measured on Intel Core i7-12700 (12 cores, 2.1 GHz base), 32 GB DDR5 RAM, running FIJI 1.54f on Ubuntu 22.04. No GPU acceleration required. Batch processing of 120 images completes in approximately 3.6 minutes.</p>
</div>

<div class="decision-callout">
  <p class="decision-label">Decision Point: When to Use Deep Learning Instead</p>
  <p class="decision-text">The ACAP classical pipeline is recommended when: (a) training data for deep learning is unavailable, (b) computational resources are limited, (c) full transparency of each processing step is required for regulatory or publication purposes, or (d) cell densities are below 600 cells per field. For very high-density applications (>800 cells/field) or non-nuclear markers with irregular morphology, a deep learning approach such as StarDist or Cellpose may achieve superior performance and should be considered as an alternative.</p>
</div>

## Limitations

1. **Density ceiling:** F1 drops below 0.90 at densities exceeding 800 cells per field due to extensive nuclear overlap.
2. **Marker specificity:** The protocol is validated only for DAPI-stained nuclei. Extension to other fluorescent markers (e.g., phalloidin, membrane dyes) requires recalibration of thresholding and size parameters.
3. **3D samples:** The pipeline operates on single-plane 2D images. Z-stack data must be projected (maximum intensity projection) before processing.
4. **Cell type range:** Size and circularity filters are calibrated for HeLa nuclei. Other cell types with significantly different nuclear morphology require filter adjustment as described in Section 4.
