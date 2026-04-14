+++
title = "Appendix"
description = "Supplementary methods, data availability statement, and CRediT author contribution roles."
tags = ["paper", "dark", "genomics", "bioinformatics", "data-intensive"]
+++

## Supplementary Methods

### Genotyping Quality Metrics

Array-level quality was assessed by examining the distribution of GenTrain scores (Illumina) and dish QC values (Affymetrix). Samples with GenTrain score below 0.67 or dish QC below 0.82 were excluded before downstream analysis. Batch effects were evaluated using principal component analysis on genotype intensities (not genotype calls), and batches showing systematic deviation on the first two intensity PCs were flagged for re-clustering.

### Imputation Accuracy Assessment

Imputation accuracy was benchmarked by masking 5 pct of directly genotyped variants and comparing imputed dosages to observed genotypes. Concordance rates exceeded 0.98 for variants with MAF above 0.05 and 0.93 for variants with MAF between 0.01 and 0.05. The R-squared threshold of 0.3 was chosen to balance variant density against imputation noise, consistent with current consortium recommendations.

### Conditional Analysis Procedure

At each genome-wide significant locus, stepwise conditional analysis was performed by including the lead variant as a covariate and re-running association testing until no additional variant reached P < 1 x 10<sup>-6</sup> within a 1 Mb window. This procedure identified secondary signals at the 9p21.3 and <em>PCSK9</em> loci, suggesting allelic heterogeneity at these regions.

## Data Availability

Summary statistics from the cross-ancestry meta-analysis are deposited in the GWAS Catalog under accession GCST90XXXXX and are freely available for download. Individual-level genotype data are available through controlled access from the contributing cohorts via the European Genome-phenome Archive (EGA). Imputation was performed against the TOPMed r3 reference panel, which is available from the NHLBI BioData Catalyst repository.

## Code Availability

Analysis scripts for the full pipeline, from raw data processing through meta-analysis and fine-mapping, are available at the following repository: [https://github.com/okonkwo-lab/cad-gwas-2026](https://github.com/okonkwo-lab/cad-gwas-2026). The repository includes Singularity container definitions, Snakemake workflow files, and R scripts for all visualisations.

## CRediT Author Contributions

- **Adaeze Okonkwo** -- Conceptualisation, Methodology, Formal analysis, Writing (original draft), Supervision, Funding acquisition
- **Haruki Yamamoto** -- Software, Formal analysis, Data curation, Visualisation
- **Sigrid Eriksson** -- Methodology, Validation, Writing (review and editing), Resources
- **Priya Bharadwaj** -- Investigation, Data curation, Writing (review and editing)

## Funding

This work was supported by the Wellcome Trust (grant 204141/Z/16/Z to A.O.), the Japan Society for the Promotion of Science (KAKENHI 22K15834 to H.Y.), the Swedish Research Council (2022-01234 to S.E.), and the Department of Biotechnology, Government of India (BT/PR40123/BID/7/908/2020 to P.B.).

## Ethics Statement

This study was approved by the institutional review boards of all contributing cohorts. All participants provided written informed consent. The study was conducted in accordance with the Declaration of Helsinki.

## Competing Interests

The authors declare no competing interests.

## References

<ol class="references-list">
  <li>Nikpay M, Goel A, Won HH, et al. A comprehensive 1,000 Genomes-based genome-wide association meta-analysis of coronary artery disease. <em>Nat Genet.</em> 2015;47(10):1121-1130.</li>
  <li>van der Harst P, Verweij N. Identification of 64 novel genetic loci provides an expanded view on the genetic architecture of coronary artery disease. <em>Circ Res.</em> 2018;122(3):433-443.</li>
  <li>Aragam KG, Jiang T, Goel A, et al. Discovery and systematic characterization of risk variants and genes for coronary artery disease in over a million participants. <em>Nat Genet.</em> 2022;54(12):1803-1815.</li>
  <li>Zhou W, Nielsen JB, Fritsche LG, et al. Efficiently controlling for case-control imbalance and sample relatedness in large-scale genetic association studies. <em>Nat Genet.</em> 2018;50(9):1335-1341.</li>
  <li>Taliun D, Harris DN, Kessler MD, et al. Sequencing of 53,831 diverse genomes from the NHLBI TOPMed program. <em>Nature.</em> 2021;590(7845):290-299.</li>
  <li>Wang G, Sarkar A, Carbonetto P, Stephens M. A simple new approach to variable selection in regression, with application to genetic fine-mapping. <em>J R Stat Soc B.</em> 2020;82(5):1273-1300.</li>
  <li>Magi R, Horikoshi M, Sofer T, et al. Trans-ethnic meta-regression of genome-wide association studies accounting for ancestry increases power for discovery and improves fine-mapping resolution. <em>Hum Mol Genet.</em> 2017;26(18):3639-3650.</li>
  <li>Delaneau O, Zagury JF, Robinson MR, Marchini JL, Dermitzakis ET. Accurate, scalable and integrative haplotype estimation. <em>Nat Commun.</em> 2019;10(1):5436.</li>
</ol>
