+++
title = "1. Study Design"
description = "Cohort assembly, genotyping platform selection, ancestry composition, and phenotype definition for the multi-ethnic GWAS of coronary artery disease."
weight = 1
template = "post"
tags = ["paper", "dark", "genomics", "bioinformatics", "data-intensive"]
categories = ["sections"]
[extra]
section_number = "1"
+++

## 1.1 Cohort description

The study combined individual-level genotype data from 12 contributing cohorts spanning four continental ancestry groups. Cohorts were selected based on the availability of genotyping array data, a minimum sample size of 2,000 cases, and consistent CAD phenotype definitions compatible with ICD-10 codes I20-I25.

<table class="paper-table">
  <caption><span class="tab-num">Table 2.</span> Contributing cohorts by ancestry group.</caption>
  <thead>
    <tr>
      <th>Ancestry</th>
      <th>Cohorts</th>
      <th>Cases</th>
      <th>Controls</th>
      <th>Platform</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>European</td>
      <td class="num">5</td>
      <td class="num">98,412</td>
      <td class="num">234,816</td>
      <td>Illumina GSA v3</td>
    </tr>
    <tr>
      <td>East Asian</td>
      <td class="num">3</td>
      <td class="num">42,187</td>
      <td class="num">89,324</td>
      <td>Illumina GSA v3</td>
    </tr>
    <tr>
      <td>South Asian</td>
      <td class="num">2</td>
      <td class="num">28,916</td>
      <td class="num">58,112</td>
      <td>Affymetrix Axiom</td>
    </tr>
    <tr>
      <td>African</td>
      <td class="num">2</td>
      <td class="num">15,211</td>
      <td class="num">30,086</td>
      <td>Illumina GSA v3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">Total: 184,726 cases and 412,338 controls across 12 cohorts.</td></tr>
  </tfoot>
</table>

## 1.2 Genotyping platforms

Two array platforms were used across the contributing cohorts. The Illumina Global Screening Array v3 (GSA-v3) contains approximately 654,000 markers with enhanced coverage of pharmacogenomic and multi-ethnic variants. The Affymetrix Axiom array contains approximately 818,000 markers with dense coverage of coding variants. Platform-specific genotype calling was performed prior to harmonisation.

## 1.3 Phenotype definition

Coronary artery disease was defined as the presence of any of the following: myocardial infarction (ICD-10 I21-I22), chronic ischaemic heart disease (I25), angina pectoris (I20), or a documented history of coronary revascularisation (percutaneous coronary intervention or coronary artery bypass grafting). Controls were defined as individuals with no recorded CAD diagnosis or revascularisation event and a minimum age of 50 years at last follow-up.

## 1.4 Ancestry assignment

Ancestry group membership was determined by projecting study samples onto the principal component space defined by the 1000 Genomes Phase 3 reference panel. Samples were assigned to an ancestry group if they fell within 6 standard deviations of the corresponding reference cluster centroid on the first four principal components. Samples that did not map to any reference cluster were excluded from the analysis (N = 1,847; 0.3 pct of total).

## 1.5 Power calculations

Pre-study power calculations indicated that the combined sample size provides greater than 80 pct power to detect a variant with MAF of 0.10 and an odds ratio of 1.10 at genome-wide significance (alpha = 5 x 10<sup>-8</sup>), and greater than 95 pct power for OR of 1.15 at the same allele frequency. Power was computed using the Genetic Power Calculator with a disease prevalence of 6 pct.
