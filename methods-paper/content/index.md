+++
title = "Abstract"
description = "A validated protocol for automated cell counting in fluorescence microscopy images, presenting a step-by-step image analysis pipeline with decision criteria and quality metrics."
tags = ["paper", "light", "methods", "protocol", "technical"]
template = "page"
+++

<header class="paper-header">
  <p class="paper-eyebrow">Methodology Paper &middot; Validated Protocol &middot; Open Access</p>
  <h1 class="paper-title">ACAP: A Validated Protocol for Automated Cell Counting in Fluorescence Microscopy Images</h1>
  <p class="paper-authors">
    <span class="author-corresponding">Adaeze Okonkwo</span><sup>1</sup>,
    Kenji Fujimoto<sup>2</sup>,
    Sigrid Lindgren<sup>1,3</sup>,
    Diego Ramirez-Torres<sup>4</sup>,
    Thanh-Hoa Nguyen<sup>2</sup>
  </p>
  <p class="paper-affiliations">
    <sup>1</sup>Department of Biomedical Engineering, ETH Zurich &middot;
    <sup>2</sup>Laboratory of Computational Microscopy, University of Tokyo &middot;
    <sup>3</sup>Swedish National Microscopy Infrastructure, Uppsala University &middot;
    <sup>4</sup>Center for Quantitative Biology, Universidad Nacional Autonoma de Mexico
  </p>
  <p class="paper-doi"><strong>DOI:</strong> <a href="#">10.41093/jmm.2026.38.04.112</a> &middot; <strong>Submitted:</strong> 22 Jan 2026 &middot; <strong>Accepted:</strong> 08 Apr 2026</p>

  <div class="badge-row">
    <span class="badge badge-protocol">
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="1" width="12" height="4" fill="none" stroke="#2a7a4a" stroke-width="1.2"/>
        <line x1="8" y1="5" x2="8" y2="8" stroke="#2a7a4a" stroke-width="1"/>
        <rect x="2" y="8" width="12" height="4" fill="none" stroke="#2a7a4a" stroke-width="1.2"/>
        <line x1="8" y1="12" x2="8" y2="15" stroke="#2a7a4a" stroke-width="1"/>
      </svg>
      PROTOCOL
    </span>
    <span class="badge badge-validated">
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="8" cy="8" r="7" fill="none" stroke="#2a5a8a" stroke-width="1.2"/>
        <path d="M 4.5 8 L 7 10.5 L 11.5 5.5" fill="none" stroke="#2a5a8a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      VALIDATED
    </span>
  </div>
</header>

<section class="abstract-box">
  <h2>Abstract</h2>
  <dl>
    <dt>Background</dt>
    <dd>Manual cell counting in fluorescence microscopy is time-intensive and prone to inter-observer variability, yet many published automated methods lack standardized reporting of their processing pipeline, parameter selection rationale, and validation metrics.</dd>
    <dt>Objectives</dt>
    <dd>To present ACAP, a fully specified and validated protocol for automated cell counting that can be reproduced using open-source tools, with explicit decision criteria at each stage of the image analysis pipeline.</dd>
    <dt>Methods</dt>
    <dd>The protocol comprises five stages: sample preparation standardization, image acquisition with controlled exposure parameters, preprocessing (flat-field correction, background subtraction, denoising), adaptive threshold segmentation with watershed separation, and validation against manual ground truth. Each stage includes quantitative quality gates and decision nodes for troubleshooting.</dd>
    <dt>Results</dt>
    <dd>Validation on a dataset of 480 fluorescence micrographs (DAPI-stained HeLa cells, 3 cell densities, 4 microscope platforms) yielded a mean F1 score of 0.946 (95% CI: 0.938-0.954), with inter-platform coefficient of variation below 3.2%. Processing time averaged 1.8 seconds per 2048x2048 image on standard hardware.</dd>
    <dt>Conclusions</dt>
    <dd>ACAP provides a reproducible, platform-independent methodology for automated cell counting with documented decision criteria at every stage. The protocol is freely available as an open-source ImageJ/FIJI macro suite with accompanying validation datasets.</dd>
    <dt>Keywords</dt>
    <dd><em>cell counting; fluorescence microscopy; image analysis; segmentation; protocol; DAPI; automation; validation</em></dd>
  </dl>
</section>

## Protocol Flowchart

<figure class="figure">
  <svg viewBox="0 0 720 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ACAP protocol flowchart showing the six-stage image analysis pipeline with decision nodes">
    <rect x="0" y="0" width="720" height="520" fill="#fafaf7"/>
    <!-- Title -->
    <text x="360" y="28" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="13" fill="#1a2030" letter-spacing="0.5">ACAP Protocol Flowchart: Automated Cell Counting Pipeline</text>
    <!-- Stage 1: Sample Preparation -->
    <rect x="260" y="46" width="200" height="40" fill="#eaf0f7" stroke="#2a5a8a" stroke-width="1.5"/>
    <text x="360" y="62" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="10" fill="#2a5a8a" letter-spacing="0.5">STEP 1</text>
    <text x="360" y="77" text-anchor="middle" font-family="Crimson Pro, serif" font-size="11" fill="#1a2030">Sample Preparation</text>
    <!-- Arrow down -->
    <line x1="360" y1="86" x2="360" y2="106" stroke="#1a2030" stroke-width="1.2"/>
    <polygon points="360,112 355,106 365,106" fill="#1a2030"/>
    <!-- Stage 2: Image Acquisition -->
    <rect x="260" y="112" width="200" height="40" fill="#eaf0f7" stroke="#2a5a8a" stroke-width="1.5"/>
    <text x="360" y="128" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="10" fill="#2a5a8a" letter-spacing="0.5">STEP 2</text>
    <text x="360" y="143" text-anchor="middle" font-family="Crimson Pro, serif" font-size="11" fill="#1a2030">Image Acquisition</text>
    <!-- Arrow down -->
    <line x1="360" y1="152" x2="360" y2="172" stroke="#1a2030" stroke-width="1.2"/>
    <polygon points="360,178 355,172 365,172" fill="#1a2030"/>
    <!-- Stage 3: Preprocessing -->
    <rect x="260" y="178" width="200" height="40" fill="#eaf0f7" stroke="#2a5a8a" stroke-width="1.5"/>
    <text x="360" y="194" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="10" fill="#2a5a8a" letter-spacing="0.5">STEP 3</text>
    <text x="360" y="209" text-anchor="middle" font-family="Crimson Pro, serif" font-size="11" fill="#1a2030">Preprocessing</text>
    <!-- Arrow down -->
    <line x1="360" y1="218" x2="360" y2="238" stroke="#1a2030" stroke-width="1.2"/>
    <polygon points="360,244 355,238 365,238" fill="#1a2030"/>
    <!-- Decision diamond: Quality check -->
    <polygon points="360,244 410,274 360,304 310,274" fill="#faf3e6" stroke="#7a5a2a" stroke-width="1.5"/>
    <text x="360" y="271" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#7a5a2a">SNR</text>
    <text x="360" y="282" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#7a5a2a">CHECK</text>
    <!-- FAIL branch (left) -->
    <line x1="310" y1="274" x2="220" y2="274" stroke="#7a5a2a" stroke-width="1.2"/>
    <text x="265" y="266" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#7a5a2a">FAIL</text>
    <rect x="140" y="258" width="80" height="32" fill="#faf3e6" stroke="#7a5a2a" stroke-width="1.2"/>
    <text x="180" y="278" text-anchor="middle" font-family="Crimson Pro, serif" font-size="10" fill="#7a5a2a">Re-acquire</text>
    <!-- Arrow from re-acquire back up to Step 2 -->
    <line x1="140" y1="274" x2="120" y2="274" stroke="#7a5a2a" stroke-width="1" stroke-dasharray="4 3"/>
    <line x1="120" y1="274" x2="120" y2="132" stroke="#7a5a2a" stroke-width="1" stroke-dasharray="4 3"/>
    <line x1="120" y1="132" x2="260" y2="132" stroke="#7a5a2a" stroke-width="1" stroke-dasharray="4 3"/>
    <polygon points="260,132 254,127 254,137" fill="#7a5a2a"/>
    <!-- PASS branch (down) -->
    <line x1="360" y1="304" x2="360" y2="324" stroke="#1a2030" stroke-width="1.2"/>
    <text x="375" y="318" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#2a7a4a">PASS</text>
    <polygon points="360,330 355,324 365,324" fill="#1a2030"/>
    <!-- Stage 4: Segmentation -->
    <rect x="260" y="330" width="200" height="40" fill="#e8f5ee" stroke="#2a7a4a" stroke-width="1.5"/>
    <text x="360" y="346" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="10" fill="#2a7a4a" letter-spacing="0.5">STEP 4</text>
    <text x="360" y="361" text-anchor="middle" font-family="Crimson Pro, serif" font-size="11" fill="#1a2030">Segmentation + Counting</text>
    <!-- Arrow down -->
    <line x1="360" y1="370" x2="360" y2="390" stroke="#1a2030" stroke-width="1.2"/>
    <polygon points="360,396 355,390 365,390" fill="#1a2030"/>
    <!-- Decision diamond: Size filter -->
    <polygon points="360,396 410,426 360,456 310,426" fill="#faf3e6" stroke="#7a5a2a" stroke-width="1.5"/>
    <text x="360" y="423" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#7a5a2a">SIZE</text>
    <text x="360" y="434" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#7a5a2a">FILTER</text>
    <!-- REJECT branch (right) -->
    <line x1="410" y1="426" x2="500" y2="426" stroke="#7a5a2a" stroke-width="1.2"/>
    <text x="455" y="418" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#7a5a2a">REJECT</text>
    <rect x="500" y="410" width="100" height="32" fill="#faf3e6" stroke="#7a5a2a" stroke-width="1.2"/>
    <text x="550" y="430" text-anchor="middle" font-family="Crimson Pro, serif" font-size="10" fill="#7a5a2a">Discard artifact</text>
    <!-- ACCEPT branch (down) -->
    <line x1="360" y1="456" x2="360" y2="476" stroke="#1a2030" stroke-width="1.2"/>
    <text x="375" y="470" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="9" fill="#2a7a4a">ACCEPT</text>
    <polygon points="360,482 355,476 365,476" fill="#1a2030"/>
    <!-- Stage 5: Validation -->
    <rect x="260" y="482" width="200" height="32" fill="#e8f5ee" stroke="#2a7a4a" stroke-width="2"/>
    <text x="360" y="502" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-weight="700" font-size="11" fill="#2a7a4a" letter-spacing="0.5">STEP 5: VALIDATION</text>
  </svg>
  <div class="caption"><span class="fig-num">Figure 1.</span> ACAP protocol flowchart. Rectangles represent processing stages; diamonds represent quality-control decision nodes. The SNR check gate ensures image quality before segmentation. The size filter gate removes debris and clustered artifacts from the final cell count. Dashed lines indicate feedback loops for failed quality gates.</div>
</figure>

## Key Validation Metrics

<table class="paper-table">
  <caption><span class="tab-num">Table 1.</span> Summary of ACAP validation results across four microscope platforms and three cell densities (N = 480 images).</caption>
  <thead>
    <tr>
      <th>Metric</th>
      <th>Value</th>
      <th>95% CI</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>F1 score (overall)</td>
      <td class="num">0.946</td>
      <td class="num">0.938 - 0.954</td>
    </tr>
    <tr>
      <td>Precision</td>
      <td class="num">0.952</td>
      <td class="num">0.943 - 0.961</td>
    </tr>
    <tr>
      <td>Recall (sensitivity)</td>
      <td class="num">0.940</td>
      <td class="num">0.930 - 0.950</td>
    </tr>
    <tr>
      <td>Inter-platform CV</td>
      <td class="num">3.1%</td>
      <td class="num">2.4% - 3.8%</td>
    </tr>
    <tr>
      <td>Processing time per image</td>
      <td class="num">1.8 s</td>
      <td class="num">1.5 - 2.1 s</td>
    </tr>
    <tr>
      <td>Low-density F1 (50-150 cells)</td>
      <td class="num">0.968</td>
      <td class="num">0.958 - 0.978</td>
    </tr>
    <tr>
      <td>Medium-density F1 (150-400 cells)</td>
      <td class="num">0.951</td>
      <td class="num">0.940 - 0.962</td>
    </tr>
    <tr>
      <td>High-density F1 (400-800 cells)</td>
      <td class="num">0.919</td>
      <td class="num">0.904 - 0.934</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="3">CV = coefficient of variation. F1 computed on a per-cell detection basis with 5-pixel matching tolerance. Processing time measured on Intel i7-12700, 32 GB RAM, no GPU acceleration.</td></tr>
  </tfoot>
</table>

## Structure of the Paper

1. **Section 1. Sample Preparation** -- standardization of cell culture, staining protocol, and mounting procedures to ensure consistent fluorescence signal
2. **Section 2. Image Acquisition** -- microscope configuration, exposure settings, and multi-platform calibration procedures
3. **Section 3. Preprocessing** -- flat-field correction, background subtraction, and noise reduction with quantitative quality gates
4. **Section 4. Segmentation** -- adaptive thresholding, watershed separation, and morphological filtering for cell detection
5. **Section 5. Validation** -- ground-truth annotation protocol, statistical metrics, and cross-platform reproducibility assessment
