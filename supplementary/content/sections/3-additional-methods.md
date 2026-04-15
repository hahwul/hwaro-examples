+++
title = "S3. Additional Methods"
description = "Extended methodological details including DNA extraction protocol, PCR primer sequences, bioinformatics pipeline specifications, and quality control metrics."
weight = 3
template = "post"
tags = ["methods", "PCR", "bioinformatics", "QC"]
categories = ["sections"]
[extra]
section_number = "S3"
+++

## DNA Extraction Protocol

Genomic DNA was extracted from bacterial isolates using the DNeasy Blood and Tissue Kit (Qiagen, Hilden, Germany) with the following modifications for wastewater-derived samples:

1. Pre-treatment with lysozyme (10 mg/mL) at 37C for 30 min to enhance lysis of Gram-positive organisms
2. Proteinase K digestion extended to 2 hours at 56C
3. Additional ethanol wash step (500 uL, 80 pct) to remove humic acid co-precipitates
4. Elution in 100 uL nuclease-free water, repeated twice
5. DNA concentration measured by Qubit 4.0 fluorometer (dsDNA HS Assay Kit)
6. Purity assessed by NanoDrop 2000 (A260/A280 ratio 1.8-2.0 accepted)

Samples with DNA yield below 10 ng/uL or A260/A280 ratio outside 1.7-2.1 were re-extracted. Extraction blanks (n=48, one per extraction batch) were processed in parallel and screened by qPCR to monitor contamination.

## Table S4. PCR Primer Sequences and Conditions

<table class="paper-table">
  <caption><span class="tab-num">Table S4.</span> Oligonucleotide primers used for resistance gene detection by multiplex PCR and qPCR.</caption>
  <thead>
    <tr>
      <th>Gene Target</th>
      <th>Primer Name</th>
      <th>Sequence (5' to 3')</th>
      <th>Amplicon (bp)</th>
      <th>Tm (C)</th>
      <th>Reference</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>blaCTX-M (group 1)</td>
      <td>CTX-M-1F</td>
      <td><code>AAAAATCACTGCGCCAGTTC</code></td>
      <td class="num" rowspan="2">415</td>
      <td class="num">58</td>
      <td rowspan="2">Woodford et al. 2006</td>
    </tr>
    <tr>
      <td></td>
      <td>CTX-M-1R</td>
      <td><code>AGCTTATTCATCGCCACGTT</code></td>
      <td class="num">58</td>
    </tr>
    <tr>
      <td>blaKPC</td>
      <td>KPC-F</td>
      <td><code>CGTCTAGTTCTGCTGTCTTG</code></td>
      <td class="num" rowspan="2">798</td>
      <td class="num">55</td>
      <td rowspan="2">Bradford et al. 2004</td>
    </tr>
    <tr>
      <td></td>
      <td>KPC-R</td>
      <td><code>CTTGTCATCCTTGTTAGGCG</code></td>
      <td class="num">55</td>
    </tr>
    <tr>
      <td>blaNDM</td>
      <td>NDM-F</td>
      <td><code>GGTTTGGCGATCTGGTTTTC</code></td>
      <td class="num" rowspan="2">621</td>
      <td class="num">56</td>
      <td rowspan="2">Poirel et al. 2011</td>
    </tr>
    <tr>
      <td></td>
      <td>NDM-R</td>
      <td><code>CGGAATGGCTCATCACGATC</code></td>
      <td class="num">56</td>
    </tr>
    <tr>
      <td>mcr-1</td>
      <td>MCR1-F</td>
      <td><code>CGGTCAGTCCGTTTGTTC</code></td>
      <td class="num" rowspan="2">309</td>
      <td class="num">58</td>
      <td rowspan="2">Liu et al. 2016</td>
    </tr>
    <tr>
      <td></td>
      <td>MCR1-R</td>
      <td><code>CTTGGTCGGTCTGTAGGG</code></td>
      <td class="num">58</td>
    </tr>
    <tr>
      <td>vanA</td>
      <td>vanA-F</td>
      <td><code>GGGAAAACGACAATTGC</code></td>
      <td class="num" rowspan="2">732</td>
      <td class="num">54</td>
      <td rowspan="2">Dutka-Malen et al. 1995</td>
    </tr>
    <tr>
      <td></td>
      <td>vanA-R</td>
      <td><code>GTACAATGCGGCCGTTA</code></td>
      <td class="num">54</td>
    </tr>
    <tr>
      <td>qnrS</td>
      <td>qnrS-F</td>
      <td><code>ACGACATTCGTCAACTGCAA</code></td>
      <td class="num" rowspan="2">417</td>
      <td class="num">57</td>
      <td rowspan="2">Cattoir et al. 2007</td>
    </tr>
    <tr>
      <td></td>
      <td>qnrS-R</td>
      <td><code>TAAATTGGCACCCTGTAGGC</code></td>
      <td class="num">57</td>
    </tr>
    <tr>
      <td>tetM</td>
      <td>tetM-F</td>
      <td><code>ACAGAAAGCTTATTATATAAC</code></td>
      <td class="num" rowspan="2">171</td>
      <td class="num">50</td>
      <td rowspan="2">Aminov et al. 2001</td>
    </tr>
    <tr>
      <td></td>
      <td>tetM-R</td>
      <td><code>TGGCGTGTCTATGATGTTCAC</code></td>
      <td class="num">50</td>
    </tr>
    <tr>
      <td>sul1</td>
      <td>sul1-F</td>
      <td><code>CGGCGTGGGCTACCTGAACG</code></td>
      <td class="num" rowspan="2">433</td>
      <td class="num">60</td>
      <td rowspan="2">Pei et al. 2006</td>
    </tr>
    <tr>
      <td></td>
      <td>sul1-R</td>
      <td><code>GCCGATCGCGTGAAGTTCCG</code></td>
      <td class="num">60</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="6">All primers validated in silico against NCBI nr database. Specificity confirmed by Sanger sequencing of representative amplicons (n=5 per gene target). Multiplex grouping: Group 1 (blaCTX-M, blaKPC, blaNDM); Group 2 (mcr-1, vanA, qnrS); Group 3 (tetM, sul1). 16S rRNA internal control included in all reactions.</td></tr>
  </tfoot>
</table>

### PCR Cycling Conditions

- Initial denaturation: 95C for 5 min
- 30 cycles of: 95C for 30 sec, annealing (see Tm above) for 30 sec, 72C for 45 sec
- Final extension: 72C for 7 min
- Multiplex reactions: HotStarTaq Multiplex PCR Kit (Qiagen), 25 uL total volume, 2 uL template DNA (10-50 ng)

## Bioinformatics Pipeline

Whole-genome sequencing was performed on a subset of 120 isolates (selected for MDR phenotype) using Illumina NovaSeq 6000 (2x150 bp paired-end reads). The bioinformatics pipeline comprised:

### Table S5. Software and Databases

<table class="paper-table compact">
  <caption><span class="tab-num">Table S5.</span> Software tools and database versions used in the bioinformatics analysis pipeline.</caption>
  <thead>
    <tr>
      <th>Step</th>
      <th>Software</th>
      <th>Version</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Read QC</td>
      <td>FastQC</td>
      <td>0.12.1</td>
      <td>Default</td>
    </tr>
    <tr>
      <td>Adapter trimming</td>
      <td>Trimmomatic</td>
      <td>0.39</td>
      <td>ILLUMINACLIP:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 MINLEN:36</td>
    </tr>
    <tr>
      <td>Assembly</td>
      <td>SPAdes</td>
      <td>3.15.5</td>
      <td>--careful --cov-cutoff auto</td>
    </tr>
    <tr>
      <td>Assembly QC</td>
      <td>QUAST</td>
      <td>5.2.0</td>
      <td>Default</td>
    </tr>
    <tr>
      <td>ARG detection</td>
      <td>ABRicate</td>
      <td>1.0.1</td>
      <td>--minid 80 --mincov 60 --db resfinder</td>
    </tr>
    <tr>
      <td>ARG database</td>
      <td>ResFinder</td>
      <td>4.4.2</td>
      <td>Updated 2025-11-01</td>
    </tr>
    <tr>
      <td>Plasmid typing</td>
      <td>PlasmidFinder</td>
      <td>2.1</td>
      <td>--threshold 0.95</td>
    </tr>
    <tr>
      <td>MLST</td>
      <td>mlst</td>
      <td>2.23.0</td>
      <td>Default (PubMLST)</td>
    </tr>
    <tr>
      <td>Phylogenetics</td>
      <td>IQ-TREE</td>
      <td>2.2.6</td>
      <td>-m GTR+G4 -bb 1000</td>
    </tr>
    <tr>
      <td>Visualization</td>
      <td>iTOL</td>
      <td>v6</td>
      <td>Web interface</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="4">Pipeline orchestrated with Snakemake v7.32.4. All software installed via Bioconda. Reproducible environment specification available in supplementary file S5_environment.yml.</td></tr>
  </tfoot>
</table>

## Quality Control Metrics

### Table S6. Sequencing QC Summary

<table class="paper-table compact">
  <caption><span class="tab-num">Table S6.</span> Summary sequencing quality metrics for 120 whole-genome-sequenced isolates.</caption>
  <thead>
    <tr>
      <th>Metric</th>
      <th>Median</th>
      <th>IQR</th>
      <th>Min</th>
      <th>Max</th>
      <th>Threshold</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Total reads (M)</td>
      <td class="num">4.2</td>
      <td class="num">3.6-5.1</td>
      <td class="num">2.1</td>
      <td class="num">8.4</td>
      <td class="num">&gt;1.0</td>
    </tr>
    <tr>
      <td>Reads after trimming (M)</td>
      <td class="num">3.8</td>
      <td class="num">3.2-4.6</td>
      <td class="num">1.9</td>
      <td class="num">7.6</td>
      <td class="num">&gt;0.8</td>
    </tr>
    <tr>
      <td>Mean read quality (Phred)</td>
      <td class="num">35.2</td>
      <td class="num">34.1-36.0</td>
      <td class="num">30.4</td>
      <td class="num">37.8</td>
      <td class="num">&gt;30</td>
    </tr>
    <tr>
      <td>GC content (pct)</td>
      <td class="num">50.8</td>
      <td class="num">48.2-52.4</td>
      <td class="num">38.6</td>
      <td class="num">66.2</td>
      <td class="num">35-70</td>
    </tr>
    <tr>
      <td>Genome coverage (x)</td>
      <td class="num">85</td>
      <td class="num">62-118</td>
      <td class="num">32</td>
      <td class="num">210</td>
      <td class="num">&gt;30</td>
    </tr>
    <tr>
      <td>Assembly N50 (kb)</td>
      <td class="num">142</td>
      <td class="num">98-205</td>
      <td class="num">42</td>
      <td class="num">512</td>
      <td class="num">&gt;20</td>
    </tr>
    <tr>
      <td>Contigs (&gt;500 bp)</td>
      <td class="num">68</td>
      <td class="num">45-112</td>
      <td class="num">22</td>
      <td class="num">248</td>
      <td class="num">&lt;500</td>
    </tr>
    <tr>
      <td>Genome size (Mb)</td>
      <td class="num">5.12</td>
      <td class="num">4.68-5.48</td>
      <td class="num">3.82</td>
      <td class="num">6.94</td>
      <td class="num">3-8</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="6">All 120 isolates passed all QC thresholds. IQR = interquartile range. Two isolates with coverage below 40x were re-sequenced to achieve target depth. N50 values reflect short-read assembly quality only.</td></tr>
  </tfoot>
</table>
