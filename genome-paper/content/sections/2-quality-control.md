+++
title = "2. Quality Control and Imputation"
description = "Sample and variant quality control pipeline, genotype imputation against the TOPMed r3 reference panel, and post-imputation filtering criteria."
weight = 2
template = "post"
tags = ["paper", "dark", "genomics", "bioinformatics", "data-intensive"]
categories = ["sections"]
[extra]
section_number = "2"
+++

## 2.1 Sample quality control

Sample-level QC was performed independently within each cohort before merging. The following sequential filters were applied:

1. **Call rate** -- samples with genotype call rate below 0.97 were excluded
2. **Sex check** -- X-chromosome F-statistic was computed; samples with ambiguous sex determination (0.2 < F < 0.8) or sex discordant with clinical records were removed
3. **Heterozygosity** -- samples with autosomal heterozygosity rate deviating by more than 3 standard deviations from the cohort mean were flagged as potential contamination or consanguinity
4. **Relatedness** -- pairwise kinship coefficients were estimated using KING v2.3.2; from each pair with kinship above 0.0884 (second-degree or closer), the sample with the lower call rate was removed
5. **Population outliers** -- principal component analysis with the 1000 Genomes reference identified and excluded samples that did not cluster with their declared ancestry group

A total of 14,291 samples (2.4 pct) were removed across all cohorts at this stage.

## 2.2 Variant quality control

Variant-level QC was performed within each ancestry group:

- **Call rate** -- variants with call rate below 0.98 were excluded
- **Hardy-Weinberg equilibrium** -- variants with HWE P < 1 x 10<sup>-6</sup> in controls were removed; this threshold is lenient enough to retain true association signals while excluding genotyping artefacts
- **Minor allele frequency** -- variants with MAF below 0.005 within the ancestry group were excluded, as imputation accuracy is low for very rare variants on array platforms
- **Duplicate and monomorphic variants** -- removed prior to imputation

After variant QC, 587,431 directly genotyped variants remained for imputation scaffolding.

## 2.3 Pre-phasing

Pre-phasing was performed using SHAPEIT4 v4.2.2 with default parameters. Each chromosome was phased independently, using the genetic map from the HapMap Phase II recombination rate estimates lifted to GRCh38 coordinates. Phasing was run per-cohort to avoid batch effects from joint phasing.

## 2.4 Imputation

Genotype imputation was performed using Minimac4 v4.1 against the Trans-Omics for Precision Medicine (TOPMed) r3 reference panel, which contains 97,256 deeply sequenced genomes and over 308 million variants. Imputation was run on the TOPMed Imputation Server with the following settings:

- Reference panel: TOPMed r3
- Phasing: Eagle v2.4 (server default)
- Population: mixed (all ancestries combined in a single run per cohort)
- Output format: VCF with dosage fields

## 2.5 Post-imputation filtering

Imputed variants were filtered using two criteria:

1. **Imputation quality** -- variants with Minimac R-squared below 0.3 were excluded
2. **Minor allele frequency** -- variants with MAF below 0.001 in the combined sample were excluded

After imputation and filtering, approximately 28.4 million variants were available for association testing. The mean imputation R-squared was 0.86 across all retained variants.

<table class="paper-table">
  <caption><span class="tab-num">Table 3.</span> Imputation quality metrics by ancestry group.</caption>
  <thead>
    <tr>
      <th>Ancestry</th>
      <th>Variants input</th>
      <th>Variants after imputation</th>
      <th>Mean R-sq</th>
      <th>Variants R-sq &gt; 0.8</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>European</td>
      <td class="num">587,431</td>
      <td class="num">29.1M</td>
      <td class="num">0.89</td>
      <td class="num">22.4M</td>
    </tr>
    <tr>
      <td>East Asian</td>
      <td class="num">587,431</td>
      <td class="num">27.8M</td>
      <td class="num">0.87</td>
      <td class="num">20.6M</td>
    </tr>
    <tr>
      <td>South Asian</td>
      <td class="num">587,431</td>
      <td class="num">28.2M</td>
      <td class="num">0.85</td>
      <td class="num">19.8M</td>
    </tr>
    <tr>
      <td>African</td>
      <td class="num">587,431</td>
      <td class="num">32.6M</td>
      <td class="num">0.82</td>
      <td class="num">18.1M</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">Higher variant counts in African ancestry reflect greater genetic diversity. Lower mean R-sq in African ancestry reflects shorter LD blocks and less dense reference coverage.</td></tr>
  </tfoot>
</table>
