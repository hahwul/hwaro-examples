+++
title = "5. Discussion"
description = "Interpretation of novel findings, comparison to prior genome-wide association studies of coronary artery disease, limitations, and clinical implications."
weight = 5
template = "post"
tags = ["paper", "dark", "genomics", "bioinformatics", "data-intensive"]
categories = ["sections"]
[extra]
section_number = "5"
+++

## 5.1 Summary of novel findings

This multi-ethnic GWAS meta-analysis of coronary artery disease identified eight genome-wide significant loci, three of which are novel. The lead finding at 9p21.3 near <em>CDKN2B-AS1</em> achieved the strongest statistical significance (P = 2.4 x 10<sup>-12</sup>) and implicates a long non-coding RNA with established roles in cell cycle regulation and vascular smooth muscle cell biology. The novel associations at <em>ADAMTS7</em> and <em>KCNE2</em> expand the catalogue of CAD risk genes into metalloproteinase and ion channel pathways, respectively.

## 5.2 Comparison to prior GWAS

Previous large-scale GWAS for CAD, including the CARDIoGRAMplusC4D consortium meta-analyses and the recent UK Biobank and FinnGen studies, have collectively identified over 160 risk loci. Our study extends this catalogue by three novel loci while replicating five previously reported associations. The consistency of replication across ancestry groups provides strong evidence that these loci reflect genuine biological effects rather than population-specific confounding.

Several factors contributed to our ability to detect novel signals:

1. **Multi-ethnic design** -- by combining data from four ancestry groups, we increased effective sample size and leveraged different LD patterns to improve resolution
2. **TOPMed reference panel** -- use of the most comprehensive imputation reference panel available increased variant density, particularly for low-frequency variants
3. **SAIGE association testing** -- the saddle-point approximation in SAIGE provides better calibration of test statistics at low minor allele counts compared to traditional logistic regression

## 5.3 Biological insights

The pathway analysis results converge on three principal biological themes:

### Vascular smooth muscle cell biology

The 9p21.3 locus (<em>CDKN2B-AS1</em>) and the eQTL evidence at <em>PHACTR1</em> both point to regulation of vascular smooth muscle cell (VSMC) phenotype. <em>CDKN2B-AS1</em> modulates expression of <em>CDKN2A</em> and <em>CDKN2B</em>, which control cell cycle progression in VSMCs. Dysregulation of VSMC proliferation is a key process in atherosclerotic plaque formation and stability.

### Lipid metabolism

The <em>PCSK9</em> and <em>LDLR</em> loci are central nodes in the LDL cholesterol pathway. The co-identification of these loci in our multi-ethnic analysis, with consistent effect directions, reinforces the causal role of LDL cholesterol in CAD risk across populations. This finding has direct clinical relevance given the availability of PCSK9 inhibitor therapies.

### Extracellular matrix remodelling

The novel <em>ADAMTS7</em> locus encodes a metalloproteinase that cleaves cartilage oligomeric matrix protein (COMP) and has been shown to promote VSMC migration through the extracellular matrix. Loss-of-function variants in <em>ADAMTS7</em> are associated with reduced CAD risk in preclinical studies, suggesting that therapeutic inhibition of ADAMTS7 activity could be protective.

## 5.4 Clinical implications

The findings have several translational implications:

- **Risk prediction** -- the addition of three novel loci to existing polygenic risk scores improves CAD risk prediction by approximately 0.6 percentage points of variance explained (from 7.8 to 8.4 pct on the liability scale). While this increment is modest, it compounds with ongoing discovery efforts.

- **Drug target prioritisation** -- <em>ADAMTS7</em> emerges as a high-priority therapeutic target. The directional evidence (loss-of-function is protective), the pathway biology (ECM remodelling in atherosclerosis), and the genome-wide significant association in a large multi-ethnic cohort collectively support further investment in ADAMTS7 inhibitor development.

- **Ancestry-inclusive genomics** -- the inclusion of non-European populations was essential for discovering the <em>KCNE2</em> locus at 21q22.11, where the effect allele frequency differs substantially between ancestries (EUR 0.08, EAS 0.15, AFR 0.22). This locus would have been underpowered in a European-only GWAS.

## 5.5 Limitations

Several limitations should be considered when interpreting these results:

1. **Phenotype heterogeneity** -- CAD was defined using ICD-10 codes, which may capture a spectrum of disease severity from stable angina to acute myocardial infarction. More granular phenotyping could reveal locus-specific effects on disease subtypes.

2. **Imputation accuracy for rare variants** -- although the TOPMed reference panel is the most comprehensive available, imputation accuracy for variants with MAF below 0.01 remains limited, particularly in African-ancestry samples. Whole-genome sequencing in large cohorts is needed to fully capture rare variant contributions.

3. **Fine-mapping resolution** -- fine-mapping was performed in the European-ancestry subsample due to larger sample size. Cross-ancestry fine-mapping using methods such as SuSiEx could further narrow credible sets by leveraging LD differences across populations.

4. **Functional validation** -- the causal variants and mechanisms at the novel loci remain to be established through experimental validation. The eQTL colocalisation and chromatin annotation results provide hypotheses but do not constitute proof of causality.

## 5.6 Future directions

Several lines of investigation are warranted:

- Whole-genome sequencing GWAS in African-ancestry populations, which have the shortest LD blocks and therefore the greatest fine-mapping resolution
- CRISPR-based functional studies at the 9p21.3, <em>ADAMTS7</em>, and <em>KCNE2</em> loci to validate causal variants and elucidate mechanisms
- Integration with single-cell RNA sequencing of atherosclerotic plaques to identify the cell types mediating the effects of GWAS variants
- Development of ancestry-calibrated polygenic risk scores that incorporate the novel loci identified here

## 5.7 Conclusion

This study demonstrates the continued value of expanding GWAS to diverse populations and leveraging improved imputation reference panels. The three novel CAD risk loci identified here provide new biological insights into coronary artery disease pathogenesis and offer potential targets for therapeutic development. The 9p21.3 locus near <em>CDKN2B-AS1</em> and the <em>ADAMTS7</em> locus are particularly promising candidates for functional follow-up.
