+++
title = "4. Functional Annotation"
description = "Pathway enrichment analysis, eQTL colocalisation, chromatin state annotation, and linkage disequilibrium structure at significant loci."
weight = 4
template = "post"
tags = ["paper", "dark", "genomics", "bioinformatics", "data-intensive"]
categories = ["sections"]
[extra]
section_number = "4"
+++

## 4.1 Pathway analysis

Gene set enrichment analysis was performed using FUMA v1.5.6, mapping lead variants and variants in LD (r-squared > 0.6) to genes within 10 kb. The following Gene Ontology biological process terms were significantly enriched after Bonferroni correction (adjusted P < 0.05):

- **Vascular smooth muscle cell differentiation** (GO:0035886) -- P = 3.2 x 10<sup>-6</sup>
- **Lipid metabolic process** (GO:0006629) -- P = 8.4 x 10<sup>-6</sup>
- **Regulation of blood coagulation** (GO:0030193) -- P = 2.1 x 10<sup>-5</sup>
- **Inflammatory response** (GO:0006954) -- P = 4.7 x 10<sup>-5</sup>
- **Extracellular matrix organisation** (GO:0030198) -- P = 6.8 x 10<sup>-5</sup>

The enrichment of vascular smooth muscle cell differentiation is consistent with the known biology of the 9p21.3 locus, where <em>CDKN2B-AS1</em> regulates proliferation of smooth muscle cells in the vascular wall.

## 4.2 eQTL colocalisation

Colocalisation analysis was performed between GWAS signals and eQTL data from GTEx v8 (coronary artery, aorta, whole blood, and liver tissues) using the coloc R package. Evidence of colocalisation (posterior probability H4 > 0.8) was found at five of the eight loci:

<table class="paper-table">
  <caption><span class="tab-num">Table 4.</span> eQTL colocalisation results at genome-wide significant loci.</caption>
  <thead>
    <tr>
      <th>Locus</th>
      <th>Gene</th>
      <th>Tissue</th>
      <th>PP.H4</th>
      <th>eQTL direction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9p21.3</td>
      <td><em>CDKN2B-AS1</em></td>
      <td>Coronary artery</td>
      <td class="num">0.94</td>
      <td>Risk allele decreases expression</td>
    </tr>
    <tr>
      <td>1p32.3</td>
      <td><em>PCSK9</em></td>
      <td>Liver</td>
      <td class="num">0.91</td>
      <td>Risk allele increases expression</td>
    </tr>
    <tr>
      <td>6p24.1</td>
      <td><em>PHACTR1</em></td>
      <td>Coronary artery</td>
      <td class="num">0.88</td>
      <td>Risk allele decreases expression</td>
    </tr>
    <tr>
      <td>10q11.21</td>
      <td><em>CXCL12</em></td>
      <td>Whole blood</td>
      <td class="num">0.85</td>
      <td>Risk allele increases expression</td>
    </tr>
    <tr>
      <td>19p13.2</td>
      <td><em>LDLR</em></td>
      <td>Liver</td>
      <td class="num">0.83</td>
      <td>Risk allele decreases expression</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">PP.H4 = posterior probability of hypothesis 4 (shared causal variant between GWAS and eQTL). Colocalisation was performed using the coloc R package v5.2.2 with default priors.</td></tr>
  </tfoot>
</table>

## 4.3 Chromatin state enrichment

Enrichment of GWAS variants in chromatin states annotated by the Roadmap Epigenomics Project was assessed using LDSC-SEG. The strongest enrichment was observed in:

1. **Active enhancers** in coronary artery smooth muscle cells (enrichment = 8.4, P = 1.2 x 10<sup>-4</sup>)
2. **Active promoters** in aorta tissue (enrichment = 6.2, P = 3.8 x 10<sup>-4</sup>)
3. **Flanking active TSS** in liver (enrichment = 5.1, P = 8.4 x 10<sup>-4</sup>)

These results suggest that CAD-associated variants preferentially act through regulatory elements in vascular and hepatic tissues.

## 4.4 LD structure at the 9p21.3 locus

<figure class="figure">
  <svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Linkage disequilibrium heatmap showing r-squared values between SNPs at the 9p21.3 locus in a triangular matrix pattern">
    <!-- Title -->
    <text x="360" y="20" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="11" fill="#ccc8bc" letter-spacing="0.5">LD STRUCTURE AT 9p21.3 (r-squared)</text>
    <!-- SNP labels across top -->
    <g font-family="JetBrains Mono" font-size="8" fill="#7a7870" text-anchor="middle">
      <text x="160" y="50">rs4977574</text>
      <text x="230" y="50">rs1333049</text>
      <text x="300" y="50">rs10757278</text>
      <text x="370" y="50">rs2383206</text>
      <text x="440" y="50">rs10116277</text>
      <text x="510" y="50">rs1537370</text>
    </g>
    <!-- Vertical tick lines from labels -->
    <g stroke="#2a2f40" stroke-width="0.5">
      <line x1="160" y1="54" x2="160" y2="62"/>
      <line x1="230" y1="54" x2="230" y2="62"/>
      <line x1="300" y1="54" x2="300" y2="62"/>
      <line x1="370" y1="54" x2="370" y2="62"/>
      <line x1="440" y1="54" x2="440" y2="62"/>
      <line x1="510" y1="54" x2="510" y2="62"/>
    </g>
    <!-- Triangular LD heatmap - row 1 (rs4977574 vs others) -->
    <!-- r2 with rs1333049 = 0.95 (very high) -->
    <rect x="180" y="65" width="32" height="32" fill="#c44a4a" opacity="0.95" transform="rotate(45 196 81)"/>
    <!-- r2 with rs10757278 = 0.88 -->
    <rect x="215" y="100" width="32" height="32" fill="#c44a4a" opacity="0.88" transform="rotate(45 231 116)"/>
    <!-- r2 with rs2383206 = 0.72 -->
    <rect x="250" y="135" width="32" height="32" fill="#c44a4a" opacity="0.72" transform="rotate(45 266 151)"/>
    <!-- r2 with rs10116277 = 0.41 -->
    <rect x="285" y="170" width="32" height="32" fill="#4a9aca" opacity="0.6" transform="rotate(45 301 186)"/>
    <!-- r2 with rs1537370 = 0.18 -->
    <rect x="320" y="205" width="32" height="32" fill="#4a9aca" opacity="0.25" transform="rotate(45 336 221)"/>
    <!-- Row 2 (rs1333049 vs others) -->
    <!-- r2 with rs10757278 = 0.91 -->
    <rect x="250" y="65" width="32" height="32" fill="#c44a4a" opacity="0.91" transform="rotate(45 266 81)"/>
    <!-- r2 with rs2383206 = 0.76 -->
    <rect x="285" y="100" width="32" height="32" fill="#c44a4a" opacity="0.76" transform="rotate(45 301 116)"/>
    <!-- r2 with rs10116277 = 0.44 -->
    <rect x="320" y="135" width="32" height="32" fill="#4a9aca" opacity="0.6" transform="rotate(45 336 151)"/>
    <!-- r2 with rs1537370 = 0.22 -->
    <rect x="355" y="170" width="32" height="32" fill="#4a9aca" opacity="0.3" transform="rotate(45 371 186)"/>
    <!-- Row 3 (rs10757278 vs others) -->
    <!-- r2 with rs2383206 = 0.82 -->
    <rect x="320" y="65" width="32" height="32" fill="#c44a4a" opacity="0.82" transform="rotate(45 336 81)"/>
    <!-- r2 with rs10116277 = 0.38 -->
    <rect x="355" y="100" width="32" height="32" fill="#4a9aca" opacity="0.5" transform="rotate(45 371 116)"/>
    <!-- r2 with rs1537370 = 0.15 -->
    <rect x="390" y="135" width="32" height="32" fill="#4a9aca" opacity="0.2" transform="rotate(45 406 151)"/>
    <!-- Row 4 (rs2383206 vs others) -->
    <!-- r2 with rs10116277 = 0.52 -->
    <rect x="390" y="65" width="32" height="32" fill="#4a9aca" opacity="0.7" transform="rotate(45 406 81)"/>
    <!-- r2 with rs1537370 = 0.28 -->
    <rect x="425" y="100" width="32" height="32" fill="#4a9aca" opacity="0.35" transform="rotate(45 441 116)"/>
    <!-- Row 5 (rs10116277 vs rs1537370) -->
    <!-- r2 = 0.61 -->
    <rect x="460" y="65" width="32" height="32" fill="#6aaa6a" opacity="0.7" transform="rotate(45 476 81)"/>
    <!-- r-squared value annotations -->
    <g font-family="JetBrains Mono" font-size="7" fill="#ccc8bc" text-anchor="middle" font-weight="500">
      <text x="196" y="84">0.95</text>
      <text x="231" y="119">0.88</text>
      <text x="266" y="154">0.72</text>
      <text x="301" y="189">0.41</text>
      <text x="336" y="224">0.18</text>
      <text x="266" y="84">0.91</text>
      <text x="301" y="119">0.76</text>
      <text x="336" y="84">0.82</text>
      <text x="406" y="84">0.52</text>
      <text x="476" y="84">0.61</text>
    </g>
    <!-- Legend -->
    <text x="160" y="280" font-family="JetBrains Mono" font-size="9" fill="#7a7870" font-weight="700">r-squared scale:</text>
    <rect x="260" y="272" width="20" height="10" fill="#4a9aca" opacity="0.2"/>
    <text x="284" y="280" font-family="JetBrains Mono" font-size="8" fill="#7a7870">0.0-0.2</text>
    <rect x="320" y="272" width="20" height="10" fill="#4a9aca" opacity="0.5"/>
    <text x="344" y="280" font-family="JetBrains Mono" font-size="8" fill="#7a7870">0.2-0.5</text>
    <rect x="380" y="272" width="20" height="10" fill="#4a9aca" opacity="0.8"/>
    <text x="404" y="280" font-family="JetBrains Mono" font-size="8" fill="#7a7870">0.5-0.7</text>
    <rect x="440" y="272" width="20" height="10" fill="#c44a4a" opacity="0.8"/>
    <text x="464" y="280" font-family="JetBrains Mono" font-size="8" fill="#7a7870">0.7-0.9</text>
    <rect x="500" y="272" width="20" height="10" fill="#c44a4a" opacity="1"/>
    <text x="524" y="280" font-family="JetBrains Mono" font-size="8" fill="#7a7870">0.9-1.0</text>
    <!-- Note -->
    <text x="360" y="310" text-anchor="middle" font-family="STIX Two Text" font-size="9" fill="#7a7870">LD computed in European-ancestry subsample (N = 333,228)</text>
  </svg>
  <figcaption class="caption"><span class="fig-num">Figure 4.</span> Linkage disequilibrium heatmap at the 9p21.3 locus. Each diamond represents the pairwise r-squared between two SNPs. Red indicates high LD (r-squared > 0.7), blue indicates moderate to low LD, and green indicates intermediate values. The three lead credible set variants (rs4977574, rs1333049, rs10757278) form a tight LD block with r-squared exceeding 0.88.</figcaption>
</figure>

## 4.5 Tissue-specific gene expression

Analysis of gene expression across 54 GTEx tissues revealed that genes at the eight significant loci show preferential expression in cardiovascular tissues. <em>PCSK9</em> is most highly expressed in liver, consistent with its role in LDL receptor regulation. <em>CDKN2B-AS1</em> shows broad expression but is notably enriched in coronary artery and aorta. <em>PHACTR1</em> expression is highest in coronary artery and tibial artery.

## 4.6 Druggability assessment

Two of the eight loci harbour genes that are targets of approved or investigational therapies:

- <em>PCSK9</em> -- target of evolocumab and alirocumab (approved PCSK9 inhibitors for hypercholesterolaemia)
- <em>LDLR</em> -- indirectly targeted by statins, which upregulate LDLR expression

The remaining six loci represent potential novel drug targets. <em>ADAMTS7</em> is of particular interest given its protease activity and the directional consistency of the GWAS signal with loss-of-function protective effects observed in preclinical models.
