+++
title = "Reporting Checklist"
description = "EQUATOR-style methodology reporting checklist for the ACAP automated cell counting protocol."
tags = ["paper", "light", "methods", "protocol", "technical"]
template = "page"
+++

<header class="paper-section-header">
  <p class="paper-section-eyebrow">REPORTING STANDARDS</p>
  <h1 class="paper-section-title">Methodology Reporting Checklist</h1>
  <p class="paper-lede">Adapted from the EQUATOR Network guidelines for reporting image analysis methodology papers. Each item indicates whether the criterion is addressed in the ACAP protocol.</p>
</header>

## MIQE-Adapted Checklist for Image Analysis Protocols

<table class="checklist-table">
  <thead>
    <tr>
      <th>Item</th>
      <th>Criterion</th>
      <th>Reported</th>
      <th>Section</th>
    </tr>
  </thead>
  <tbody>
    <tr class="section-row"><td colspan="4">Sample Preparation</td></tr>
    <tr>
      <td>1</td>
      <td>Cell line and passage number specified</td>
      <td class="check-yes">Yes</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Staining reagent, concentration, and incubation time</td>
      <td class="check-yes">Yes</td>
      <td>1</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Fixation protocol documented</td>
      <td class="check-yes">Yes</td>
      <td>1</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Mounting medium specified</td>
      <td class="check-yes">Yes</td>
      <td>1</td>
    </tr>
    <tr class="section-row"><td colspan="4">Image Acquisition</td></tr>
    <tr>
      <td>5</td>
      <td>Microscope make and model</td>
      <td class="check-yes">Yes</td>
      <td>2</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Objective lens specification (magnification, NA)</td>
      <td class="check-yes">Yes</td>
      <td>2</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Excitation/emission wavelengths</td>
      <td class="check-yes">Yes</td>
      <td>2</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Exposure time and gain settings</td>
      <td class="check-yes">Yes</td>
      <td>2</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Pixel size and bit depth</td>
      <td class="check-yes">Yes</td>
      <td>2</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Number of fields of view per condition</td>
      <td class="check-yes">Yes</td>
      <td>2</td>
    </tr>
    <tr class="section-row"><td colspan="4">Preprocessing</td></tr>
    <tr>
      <td>11</td>
      <td>Flat-field correction method</td>
      <td class="check-yes">Yes</td>
      <td>3</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Background subtraction algorithm and parameters</td>
      <td class="check-yes">Yes</td>
      <td>3</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Noise reduction method and kernel size</td>
      <td class="check-yes">Yes</td>
      <td>3</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Signal-to-noise ratio quality gate</td>
      <td class="check-yes">Yes</td>
      <td>3</td>
    </tr>
    <tr class="section-row"><td colspan="4">Segmentation</td></tr>
    <tr>
      <td>15</td>
      <td>Thresholding algorithm specified</td>
      <td class="check-yes">Yes</td>
      <td>4</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Watershed separation method</td>
      <td class="check-yes">Yes</td>
      <td>4</td>
    </tr>
    <tr>
      <td>17</td>
      <td>Morphological operations documented</td>
      <td class="check-yes">Yes</td>
      <td>4</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Size and circularity exclusion criteria</td>
      <td class="check-yes">Yes</td>
      <td>4</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Edge-touching object handling</td>
      <td class="check-yes">Yes</td>
      <td>4</td>
    </tr>
    <tr class="section-row"><td colspan="4">Validation</td></tr>
    <tr>
      <td>20</td>
      <td>Ground-truth annotation protocol</td>
      <td class="check-yes">Yes</td>
      <td>5</td>
    </tr>
    <tr>
      <td>21</td>
      <td>Number of annotators and agreement metric</td>
      <td class="check-yes">Yes</td>
      <td>5</td>
    </tr>
    <tr>
      <td>22</td>
      <td>Matching tolerance for detection (pixels)</td>
      <td class="check-yes">Yes</td>
      <td>5</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Precision, recall, and F1 reported</td>
      <td class="check-yes">Yes</td>
      <td>5</td>
    </tr>
    <tr>
      <td>24</td>
      <td>Cross-platform reproducibility assessed</td>
      <td class="check-yes">Yes</td>
      <td>5</td>
    </tr>
    <tr>
      <td>25</td>
      <td>Performance across cell density ranges</td>
      <td class="check-yes">Yes</td>
      <td>5</td>
    </tr>
    <tr class="section-row"><td colspan="4">Reproducibility</td></tr>
    <tr>
      <td>26</td>
      <td>Software name and version</td>
      <td class="check-yes">Yes</td>
      <td>Appendix</td>
    </tr>
    <tr>
      <td>27</td>
      <td>Source code publicly available</td>
      <td class="check-yes">Yes</td>
      <td>Appendix</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Validation dataset publicly available</td>
      <td class="check-yes">Yes</td>
      <td>Appendix</td>
    </tr>
    <tr>
      <td>29</td>
      <td>Hardware requirements specified</td>
      <td class="check-yes">Yes</td>
      <td>Appendix</td>
    </tr>
    <tr>
      <td>30</td>
      <td>Processing time benchmarked</td>
      <td class="check-yes">Yes</td>
      <td>5</td>
    </tr>
  </tbody>
</table>

All 30 reporting criteria are addressed in the ACAP protocol. This checklist follows the spirit of EQUATOR Network reporting guidelines (CONSORT, STROBE, STARD) adapted for image analysis methodology papers, ensuring that the protocol contains sufficient detail for independent reproduction.
