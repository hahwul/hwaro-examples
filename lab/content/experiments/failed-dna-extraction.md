+++
title = "DNA Extraction from Degraded Herbarium Specimens"
date = "2025-03-18"
tags = ["genetics", "botany", "protocols"]
categories = ["biology"]
description = "Attempting to recover amplifiable DNA from 80-year-old pressed plant specimens using a modified CTAB protocol."
experiment_id = "EXP-006"
status = "failed"
+++

## Hypothesis

A modified CTAB extraction protocol with extended proteinase K digestion (overnight at 55C) and additional silica column purification will yield sufficient DNA (>5 ng/uL) from herbarium specimens dated 1940-1945 for ITS2 barcode amplification.

## Method

### Specimens

- 8 pressed leaf samples from university herbarium collection
- Species: *Quercus robur* (4), *Fagus sylvatica* (4)
- Collection dates: 1940-1945
- Storage: standard herbarium conditions (ambient, no climate control)

### Extraction Protocol

1. Excise ~20mg leaf tissue, avoiding midrib
2. Grind in liquid nitrogen with sterile mortar
3. Add 800uL CTAB buffer (2% CTAB, 1.4M NaCl, 100mM Tris, 20mM EDTA)
4. Add 20uL proteinase K (20mg/mL), incubate at 55C for 16 hours
5. Chloroform:isoamyl alcohol (24:1) extraction, 2x
6. Silica column purification (commercial kit)
7. Elute in 50uL low-TE buffer

### Quality Assessment

- NanoDrop spectrophotometer for concentration and purity
- Gel electrophoresis (1.5% agarose)
- PCR amplification of ITS2 region (primers ITS3/ITS4)

## Results

| Sample | Species | Year | Conc. (ng/uL) | A260/280 | A260/230 | PCR |
|:---:|:---|:---:|:---:|:---:|:---:|:---:|
| H1 | Q. robur | 1942 | 1.2 | 1.41 | 0.62 | Fail |
| H2 | Q. robur | 1940 | 0.8 | 1.28 | 0.51 | Fail |
| H3 | Q. robur | 1944 | 2.1 | 1.53 | 0.74 | Fail |
| H4 | Q. robur | 1943 | 0.5 | 1.12 | 0.43 | Fail |
| H5 | F. sylvatica | 1941 | 1.8 | 1.47 | 0.68 | Fail |
| H6 | F. sylvatica | 1945 | 3.4 | 1.61 | 0.81 | Fail |
| H7 | F. sylvatica | 1943 | 1.1 | 1.35 | 0.55 | Fail |
| H8 | F. sylvatica | 1940 | 0.6 | 1.19 | 0.47 | Fail |

### Observations

- All yields were below the 5 ng/uL target. Only H6 exceeded 3 ng/uL.
- A260/280 ratios consistently below 1.8 indicate protein contamination despite the extended proteinase K step.
- A260/230 ratios were universally poor (<1.0), suggesting phenolic or polysaccharide carryover from the preservation process.
- Gel electrophoresis showed severe fragmentation -- no intact high-molecular-weight bands, only a smear below 200bp.
- All PCR reactions failed, including with diluted template (1:10, 1:100) and BSA additive.

## Conclusion

The modified CTAB protocol was insufficient for these specimens. The combination of age, preservation chemicals (likely mercuric chloride, common in 1940s herbaria), and ambient storage resulted in DNA too degraded and contaminated for standard barcode amplification.

### Recommended Next Steps

- Test with a specialized ancient DNA extraction protocol in a dedicated clean room
- Consider shorter amplicon targets (<150bp) that may survive fragmentation
- Investigate mercury chelation pre-treatment to remove preservative contamination
- Try newer specimens (post-1970) as positive controls before further protocol optimization
