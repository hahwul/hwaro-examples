+++
title = "S5. Raw Data Summary"
description = "Data availability statement, data dictionary, file format descriptions, and repository access information for all supplementary datasets."
weight = 5
template = "post"
tags = ["data", "raw-data", "repository", "dictionary"]
categories = ["sections"]
[extra]
section_number = "S5"
+++

## Data Availability

All raw data and processed datasets generated during this study have been deposited in publicly accessible repositories:

- **Sequence reads:** NCBI Sequence Read Archive (SRA), BioProject PRJNA987654, 120 accessions (SRR28000001-SRR28000120)
- **Assembled genomes:** NCBI GenBank, accessions CP150001-CP150120
- **Isolate metadata and ARG profiles:** Figshare, doi:10.6084/m9.figshare.24681234
- **Analysis code:** GitHub, https://github.com/chen-lab/hospital-resistome-2026

Data access is unrestricted. All files are released under CC BY 4.0.

## Table S10. Data Dictionary

<table class="paper-table">
  <caption><span class="tab-num">Table S10.</span> Data dictionary for the primary supplementary dataset (S1_isolates.csv).</caption>
  <thead>
    <tr>
      <th>Column</th>
      <th>Type</th>
      <th>Description</th>
      <th>Values / Range</th>
      <th>Missing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>isolate_id</code></td>
      <td>String</td>
      <td>Unique isolate identifier</td>
      <td>WW-001 to WW-847</td>
      <td class="num">0</td>
    </tr>
    <tr>
      <td><code>site_code</code></td>
      <td>String</td>
      <td>Sampling site code</td>
      <td>ICU-A, ICU-B, Surg-1, Surg-2, Gen-A, Gen-B, Gen-C, Outpt-1, Outpt-2, WWTP-In, WWTP-Eff, River</td>
      <td class="num">0</td>
    </tr>
    <tr>
      <td><code>site_type</code></td>
      <td>String</td>
      <td>Ward type classification</td>
      <td>ICU, Surgical, General, Outpatient, WWTP, Environment</td>
      <td class="num">0</td>
    </tr>
    <tr>
      <td><code>month</code></td>
      <td>Integer</td>
      <td>Month of surveillance (1-24)</td>
      <td>1-24</td>
      <td class="num">0</td>
    </tr>
    <tr>
      <td><code>date_collected</code></td>
      <td>Date</td>
      <td>Sampling date (ISO 8601)</td>
      <td>2024-01-15 to 2025-12-18</td>
      <td class="num">0</td>
    </tr>
    <tr>
      <td><code>species</code></td>
      <td>String</td>
      <td>Bacterial species (MALDI-TOF)</td>
      <td>E. coli, K. pneumoniae, P. aeruginosa, A. baumannii, E. faecium, other</td>
      <td class="num">42 (5.0%)</td>
    </tr>
    <tr>
      <td><code>blaCTX_M</code></td>
      <td>Binary</td>
      <td>blaCTX-M gene detection</td>
      <td>0 = negative, 1 = positive</td>
      <td class="num">0</td>
    </tr>
    <tr>
      <td><code>blaKPC</code></td>
      <td>Binary</td>
      <td>blaKPC gene detection</td>
      <td>0 = negative, 1 = positive</td>
      <td class="num">0</td>
    </tr>
    <tr>
      <td><code>blaNDM</code></td>
      <td>Binary</td>
      <td>blaNDM gene detection</td>
      <td>0 = negative, 1 = positive</td>
      <td class="num">0</td>
    </tr>
    <tr>
      <td><code>mcr_1</code></td>
      <td>Binary</td>
      <td>mcr-1 gene detection</td>
      <td>0 = negative, 1 = positive</td>
      <td class="num">0</td>
    </tr>
    <tr>
      <td><code>vanA</code></td>
      <td>Binary</td>
      <td>vanA gene detection</td>
      <td>0 = negative, 1 = positive</td>
      <td class="num">0</td>
    </tr>
    <tr>
      <td><code>qnrS</code></td>
      <td>Binary</td>
      <td>qnrS gene detection</td>
      <td>0 = negative, 1 = positive</td>
      <td class="num">0</td>
    </tr>
    <tr>
      <td><code>tetM</code></td>
      <td>Binary</td>
      <td>tetM gene detection</td>
      <td>0 = negative, 1 = positive</td>
      <td class="num">0</td>
    </tr>
    <tr>
      <td><code>sul1</code></td>
      <td>Binary</td>
      <td>sul1 gene detection</td>
      <td>0 = negative, 1 = positive</td>
      <td class="num">0</td>
    </tr>
    <tr>
      <td><code>arg_count</code></td>
      <td>Integer</td>
      <td>Total ARGs detected (0-8)</td>
      <td>0-8</td>
      <td class="num">0</td>
    </tr>
    <tr>
      <td><code>mdr</code></td>
      <td>Binary</td>
      <td>Multidrug resistant (3+ classes)</td>
      <td>0 = no, 1 = yes</td>
      <td class="num">0</td>
    </tr>
    <tr>
      <td><code>wgs_available</code></td>
      <td>Binary</td>
      <td>Whole-genome sequence available</td>
      <td>0 = no, 1 = yes</td>
      <td class="num">0</td>
    </tr>
    <tr>
      <td><code>sra_accession</code></td>
      <td>String</td>
      <td>SRA accession (if WGS)</td>
      <td>SRR28000001-SRR28000120</td>
      <td class="num">727 (85.8%)</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">Missing values for species reflect isolates that failed MALDI-TOF identification (score &lt; 2.0). SRA accession is NA for isolates without whole-genome sequencing. All binary gene detection fields have zero missing values.</td></tr>
  </tfoot>
</table>

## File Manifest

<table class="paper-table compact">
  <caption><span class="tab-num">Table S11.</span> Complete list of supplementary data files deposited on Figshare.</caption>
  <thead>
    <tr>
      <th>Filename</th>
      <th>Format</th>
      <th>Size</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>S1_isolates.csv</code></td>
      <td>CSV (UTF-8)</td>
      <td class="num">142 KB</td>
      <td>Complete isolate-level data (847 rows, 18 columns)</td>
    </tr>
    <tr>
      <td><code>S2_mic_data.csv</code></td>
      <td>CSV (UTF-8)</td>
      <td class="num">86 KB</td>
      <td>MIC values for ESBL-producing E. coli (312 rows, 12 columns)</td>
    </tr>
    <tr>
      <td><code>S3_prevalence_matrix.csv</code></td>
      <td>CSV (UTF-8)</td>
      <td class="num">4 KB</td>
      <td>Gene-by-site prevalence matrix (12 x 8)</td>
    </tr>
    <tr>
      <td><code>S4_temporal_data.csv</code></td>
      <td>CSV (UTF-8)</td>
      <td class="num">18 KB</td>
      <td>Monthly prevalence time series (24 months x 8 genes x 12 sites)</td>
    </tr>
    <tr>
      <td><code>S5_environment.yml</code></td>
      <td>YAML</td>
      <td class="num">2 KB</td>
      <td>Conda environment specification for reproducibility</td>
    </tr>
    <tr>
      <td><code>S6_analysis_code.R</code></td>
      <td>R script</td>
      <td class="num">24 KB</td>
      <td>Complete statistical analysis code (R 4.3.2)</td>
    </tr>
    <tr>
      <td><code>S7_snakefile</code></td>
      <td>Snakemake</td>
      <td class="num">8 KB</td>
      <td>Bioinformatics pipeline workflow definition</td>
    </tr>
    <tr>
      <td><code>S8_phylogeny.nwk</code></td>
      <td>Newick</td>
      <td class="num">12 KB</td>
      <td>Maximum-likelihood phylogenetic tree (120 isolates)</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="4">All files use UTF-8 encoding with Unix line endings. CSV files use comma delimiter with double-quote text qualifier. Missing values represented as NA. Column headers in first row.</td></tr>
  </tfoot>
</table>

## Checksums

File integrity can be verified using SHA-256 checksums provided in the accompanying `checksums.sha256` file deposited alongside the data files on Figshare.
