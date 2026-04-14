+++
title = "3. Association Results"
description = "Genome-wide association results, Manhattan plot analysis, locus-by-locus description of significant findings, and conditional analyses at multi-signal loci."
weight = 3
template = "post"
tags = ["paper", "dark", "genomics", "bioinformatics", "data-intensive"]
categories = ["sections"]
[extra]
section_number = "3"
+++

## 3.1 Genome-wide results overview

The cross-ancestry meta-analysis tested approximately 24.8 million variants that passed quality filters in at least two ancestry groups. The genomic inflation factor (lambda-GC) was 1.06 in the combined analysis, consistent with polygenicity rather than systematic confounding. The LD score regression intercept was 1.02 (SE = 0.01), confirming that the modest inflation is attributable to true polygenic signal.

Eight loci reached genome-wide significance (P < 5 x 10<sup>-8</sup>). An additional 14 loci reached suggestive significance (P < 1 x 10<sup>-5</sup>) and are reported in Supplementary Table S3.

## 3.2 Chromosome ideogram of significant loci

<figure class="figure">
  <svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chromosome ideogram showing the genomic positions of the eight significant loci identified in this study">
    <!-- Chromosome 1 -->
    <rect x="30" y="40" width="18" height="180" rx="9" fill="none" stroke="#4a9aca" stroke-width="1.2"/>
    <rect x="30" y="92" width="18" height="4" fill="#2a2f40"/>
    <!-- Centromere -->
    <text x="39" y="32" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7a7870" font-weight="700">1</text>
    <!-- PCSK9 marker at 1p32.3 -->
    <rect x="24" y="62" width="30" height="4" rx="1" fill="#c44a4a"/>
    <line x1="54" y1="64" x2="72" y2="64" stroke="#c44a4a" stroke-width="0.8"/>
    <text x="74" y="67" font-family="JetBrains Mono" font-size="7" fill="#c44a4a" font-weight="700" font-style="italic">PCSK9</text>
    <!-- Banding pattern -->
    <rect x="32" y="48" width="14" height="8" fill="#2a2f40" opacity="0.3"/>
    <rect x="32" y="110" width="14" height="12" fill="#2a2f40" opacity="0.2"/>
    <rect x="32" y="150" width="14" height="8" fill="#2a2f40" opacity="0.3"/>
    <rect x="32" y="180" width="14" height="10" fill="#2a2f40" opacity="0.2"/>
    <!-- Chromosome 2 -->
    <rect x="130" y="40" width="18" height="170" rx="9" fill="none" stroke="#6aaa6a" stroke-width="1.2"/>
    <rect x="130" y="100" width="18" height="4" fill="#2a2f40"/>
    <text x="139" y="32" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7a7870" font-weight="700">2</text>
    <!-- WDR12 marker at 2q33.1 -->
    <rect x="124" y="155" width="30" height="4" rx="1" fill="#c44a4a"/>
    <line x1="154" y1="157" x2="172" y2="157" stroke="#c44a4a" stroke-width="0.8"/>
    <text x="174" y="160" font-family="JetBrains Mono" font-size="7" fill="#c44a4a" font-weight="700" font-style="italic">WDR12</text>
    <rect x="132" y="55" width="14" height="10" fill="#2a2f40" opacity="0.3"/>
    <rect x="132" y="120" width="14" height="8" fill="#2a2f40" opacity="0.2"/>
    <rect x="132" y="170" width="14" height="10" fill="#2a2f40" opacity="0.3"/>
    <!-- Chromosome 6 -->
    <rect x="230" y="40" width="18" height="140" rx="9" fill="none" stroke="#4a9aca" stroke-width="1.2"/>
    <rect x="230" y="85" width="18" height="4" fill="#2a2f40"/>
    <text x="239" y="32" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7a7870" font-weight="700">6</text>
    <!-- PHACTR1 marker at 6p24.1 -->
    <rect x="224" y="54" width="30" height="4" rx="1" fill="#c44a4a"/>
    <line x1="254" y1="56" x2="272" y2="56" stroke="#c44a4a" stroke-width="0.8"/>
    <text x="274" y="59" font-family="JetBrains Mono" font-size="7" fill="#c44a4a" font-weight="700" font-style="italic">PHACTR1</text>
    <rect x="232" y="65" width="14" height="8" fill="#2a2f40" opacity="0.2"/>
    <rect x="232" y="110" width="14" height="10" fill="#2a2f40" opacity="0.3"/>
    <rect x="232" y="145" width="14" height="8" fill="#2a2f40" opacity="0.2"/>
    <!-- Chromosome 9 -->
    <rect x="330" y="40" width="18" height="120" rx="9" fill="none" stroke="#6aaa6a" stroke-width="1.2"/>
    <rect x="330" y="78" width="18" height="4" fill="#2a2f40"/>
    <text x="339" y="32" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7a7870" font-weight="700">9</text>
    <!-- CDKN2B-AS1 marker at 9p21.3 (lead signal) -->
    <rect x="324" y="58" width="30" height="6" rx="1" fill="#c44a4a"/>
    <line x1="354" y1="61" x2="372" y2="61" stroke="#c44a4a" stroke-width="0.8"/>
    <text x="374" y="64" font-family="JetBrains Mono" font-size="7" fill="#c44a4a" font-weight="700" font-style="italic">CDKN2B-AS1</text>
    <rect x="332" y="48" width="14" height="6" fill="#2a2f40" opacity="0.3"/>
    <rect x="332" y="95" width="14" height="8" fill="#2a2f40" opacity="0.2"/>
    <rect x="332" y="130" width="14" height="8" fill="#2a2f40" opacity="0.3"/>
    <!-- Chromosome 10 -->
    <rect x="430" y="40" width="18" height="122" rx="9" fill="none" stroke="#4a9aca" stroke-width="1.2"/>
    <rect x="430" y="80" width="18" height="4" fill="#2a2f40"/>
    <text x="439" y="32" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7a7870" font-weight="700">10</text>
    <!-- CXCL12 marker at 10q11.21 -->
    <rect x="424" y="90" width="30" height="4" rx="1" fill="#c44a4a"/>
    <line x1="454" y1="92" x2="472" y2="92" stroke="#c44a4a" stroke-width="0.8"/>
    <text x="474" y="95" font-family="JetBrains Mono" font-size="7" fill="#c44a4a" font-weight="700" font-style="italic">CXCL12</text>
    <rect x="432" y="50" width="14" height="8" fill="#2a2f40" opacity="0.2"/>
    <rect x="432" y="110" width="14" height="10" fill="#2a2f40" opacity="0.3"/>
    <rect x="432" y="135" width="14" height="8" fill="#2a2f40" opacity="0.2"/>
    <!-- Chromosome 15 -->
    <rect x="530" y="40" width="18" height="100" rx="9" fill="none" stroke="#6aaa6a" stroke-width="1.2"/>
    <rect x="530" y="70" width="18" height="4" fill="#2a2f40"/>
    <text x="539" y="32" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7a7870" font-weight="700">15</text>
    <!-- ADAMTS7 marker at 15q25.1 -->
    <rect x="524" y="112" width="30" height="4" rx="1" fill="#c44a4a"/>
    <line x1="554" y1="114" x2="572" y2="114" stroke="#c44a4a" stroke-width="0.8"/>
    <text x="574" y="117" font-family="JetBrains Mono" font-size="7" fill="#c44a4a" font-weight="700" font-style="italic">ADAMTS7</text>
    <rect x="532" y="48" width="14" height="6" fill="#2a2f40" opacity="0.3"/>
    <rect x="532" y="82" width="14" height="8" fill="#2a2f40" opacity="0.2"/>
    <!-- Chromosome 19 -->
    <rect x="630" y="40" width="18" height="80" rx="9" fill="none" stroke="#4a9aca" stroke-width="1.2"/>
    <rect x="630" y="62" width="18" height="4" fill="#2a2f40"/>
    <text x="639" y="32" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7a7870" font-weight="700">19</text>
    <!-- LDLR marker at 19p13.2 -->
    <rect x="624" y="50" width="30" height="4" rx="1" fill="#c44a4a"/>
    <line x1="654" y1="52" x2="672" y2="52" stroke="#c44a4a" stroke-width="0.8"/>
    <text x="674" y="55" font-family="JetBrains Mono" font-size="7" fill="#c44a4a" font-weight="700" font-style="italic">LDLR</text>
    <rect x="632" y="72" width="14" height="8" fill="#2a2f40" opacity="0.2"/>
    <rect x="632" y="95" width="14" height="8" fill="#2a2f40" opacity="0.3"/>
    <!-- Legend -->
    <rect x="30" y="240" width="12" height="4" rx="1" fill="#c44a4a"/>
    <text x="48" y="246" font-family="STIX Two Text" font-size="9" fill="#7a7870">Genome-wide significant locus</text>
    <rect x="200" y="240" width="12" height="4" rx="1" fill="none" stroke="#4a9aca" stroke-width="1"/>
    <text x="218" y="246" font-family="STIX Two Text" font-size="9" fill="#7a7870">Odd chromosomes</text>
    <rect x="340" y="240" width="12" height="4" rx="1" fill="none" stroke="#6aaa6a" stroke-width="1"/>
    <text x="358" y="246" font-family="STIX Two Text" font-size="9" fill="#7a7870">Even chromosomes</text>
  </svg>
  <figcaption class="caption"><span class="fig-num">Figure 3.</span> Chromosome ideogram showing the genomic positions of the eight genome-wide significant loci. Red bars indicate the cytogenetic band of each locus, with gene annotations. Chromosomes are drawn to approximate relative scale. Not all 22 autosomes are shown; only those harbouring significant loci are depicted.</figcaption>
</figure>

## 3.3 Locus-by-locus results

### 9p21.3 -- <em>CDKN2B-AS1</em>

The lead signal at 9p21.3 (rs4977574, P = 2.4 x 10<sup>-12</sup>, OR = 1.29) represents the strongest novel association in this study. The variant maps to an intron of the long non-coding RNA <em>CDKN2B-AS1</em> (also known as <em>ANRIL</em>), which regulates expression of the neighbouring cyclin-dependent kinase inhibitors <em>CDKN2A</em> and <em>CDKN2B</em>. Conditional analysis identified no independent secondary signals within 1 Mb of the lead variant.

### 1p32.3 -- <em>PCSK9</em>

The <em>PCSK9</em> locus (rs11591147, P = 8.7 x 10<sup>-11</sup>, OR = 1.22) replicates a well-established CAD risk locus. <em>PCSK9</em> encodes proprotein convertase subtilisin/kexin type 9, a key regulator of LDL receptor degradation and a validated drug target for cholesterol lowering. Conditional analysis revealed a secondary signal 340 kb downstream (rs2479409, conditional P = 4.1 x 10<sup>-7</sup>), suggesting allelic heterogeneity.

### 6p24.1 -- <em>PHACTR1</em>

The <em>PHACTR1</em> locus (rs9349379, P = 3.1 x 10<sup>-10</sup>, OR = 1.18) has been previously reported in European GWAS. The variant is an eQTL for <em>PHACTR1</em> in coronary artery tissue. Our multi-ethnic analysis confirms the association with consistent effect direction across all four ancestry groups.

### 10q11.21 -- <em>CXCL12</em>

The <em>CXCL12</em> locus (rs501120, P = 6.2 x 10<sup>-9</sup>, OR = 1.16) replicates a previously reported signal. <em>CXCL12</em> encodes stromal cell-derived factor 1, a chemokine involved in inflammatory cell recruitment to atherosclerotic plaques.

### Other significant loci

The remaining four loci -- <em>ADAMTS7</em> (15q25.1), <em>WDR12</em> (2q33.1), <em>KCNE2</em> (21q22.11), and <em>LDLR</em> (19p13.2) -- are described in detail in the Results summary page with effect sizes tabulated in Table 1.

## 3.4 Conditional and joint analysis

Stepwise conditional analysis using GCTA-COJO was performed at each of the eight loci. Secondary signals (conditional P < 1 x 10<sup>-6</sup>) were identified at two loci:

- **1p32.3** (<em>PCSK9</em>): one secondary signal (rs2479409, conditional P = 4.1 x 10<sup>-7</sup>)
- **9p21.3** (<em>CDKN2B-AS1</em>): no secondary signals detected despite the strong primary signal

The absence of secondary signals at 9p21.3 is consistent with a single causal variant (or a small set of variants in tight LD) driving the entire association at this locus.
