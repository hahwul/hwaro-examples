+++
title = "Abstract"
description = "A genome-wide association study identifying eight novel risk loci for coronary artery disease through large-scale genotyping and imputation across multi-ethnic cohorts."
tags = ["paper", "dark", "genomics", "bioinformatics", "data-intensive"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Original Research &middot; Open Access</p>
  <h1 class="paper-title">Genome-Wide Association Study of Coronary Artery Disease: Identification of Novel Risk Loci in Multi-Ethnic Cohorts</h1>
  <p class="paper-authors">
    <span class="author-corresponding">Adaeze Okonkwo</span><sup>1</sup>,
    Haruki Yamamoto<sup>2</sup>,
    Sigrid Eriksson<sup>1,3</sup>,
    Priya Bharadwaj<sup>4</sup>
  </p>
  <p class="paper-affiliations">
    <sup>1</sup>Centre for Genomic Medicine, University of Lagos &middot;
    <sup>2</sup>Department of Statistical Genetics, Kyoto University &middot;
    <sup>3</sup>Broad Institute of MIT and Harvard &middot;
    <sup>4</sup>National Centre for Biological Sciences, Bangalore
  </p>
  <p class="paper-doi"><strong>DOI:</strong> <a href="#">10.48127/ghg.2026.28.03.187</a> &middot; <strong>Received:</strong> 14 Sep 2025 &middot; <strong>Accepted:</strong> 22 Feb 2026</p>
</header>

<section class="abstract-box">
  <h2>Abstract</h2>
  <dl>
    <dt>Background</dt>
    <dd>Coronary artery disease (CAD) remains the leading cause of mortality worldwide. Prior genome-wide association studies have identified over 160 risk loci, yet a substantial portion of heritability remains unexplained, particularly in non-European populations.</dd>
    <dt>Methods</dt>
    <dd>We conducted a multi-ethnic GWAS meta-analysis comprising 184,726 CAD cases and 412,338 controls across four ancestry groups (European, East Asian, South Asian, and African). Genotyping was performed on Illumina Global Screening Array and Affymetrix Axiom platforms. Imputation used the TOPMed r3 reference panel. Association testing was performed with SAIGE, followed by cross-ancestry meta-analysis using MR-MEGA.</dd>
    <dt>Results</dt>
    <dd>We identified eight novel genome-wide significant loci (P &lt; 5 x 10<sup>-8</sup>), including variants near <em>ADAMTS7</em>, <em>PHACTR1</em>, <em>CXCL12</em>, and a previously unreported intergenic region on 9p21.3 (lead SNP rs4977574, OR = 1.29, P = 2.4 x 10<sup>-12</sup>). Fine-mapping with SuSiE identified 23 credible sets containing likely causal variants. Pathway enrichment analysis implicated vascular smooth muscle cell differentiation and lipid metabolism.</dd>
    <dt>Conclusion</dt>
    <dd>This multi-ethnic GWAS expands the catalogue of CAD risk loci and highlights the value of diverse cohorts for genetic discovery. The novel loci provide new targets for functional follow-up and potential therapeutic intervention.</dd>
    <dt>Keywords</dt>
    <dd><em>genome-wide association study; coronary artery disease; multi-ethnic; fine-mapping; risk loci; GWAS meta-analysis</em></dd>
  </dl>
</section>

## Manhattan Plot

<figure class="figure">
  <svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Manhattan plot showing genome-wide association results across 22 chromosomes with significant peaks above the genome-wide significance threshold">
    <!-- Background -->
    <rect x="60" y="20" width="640" height="280" fill="#0a0c12" stroke="#2a2f40" stroke-width="1"/>
    <!-- Y-axis label -->
    <text x="18" y="160" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#7a7870" letter-spacing="0.5" transform="rotate(-90 18 160)">-log10(P)</text>
    <!-- Y-axis ticks -->
    <g font-family="JetBrains Mono" font-size="9" fill="#7a7870" text-anchor="end">
      <text x="55" y="296">0</text>
      <text x="55" y="268">1</text>
      <text x="55" y="240">2</text>
      <text x="55" y="212">3</text>
      <text x="55" y="184">4</text>
      <text x="55" y="156">5</text>
      <text x="55" y="128">6</text>
      <text x="55" y="100">7</text>
      <text x="55" y="72">8</text>
      <text x="55" y="44">9</text>
      <text x="55" y="26">10</text>
    </g>
    <!-- Y-axis grid lines -->
    <g stroke="#2a2f40" stroke-width="0.5" opacity="0.4">
      <line x1="60" y1="268" x2="700" y2="268"/>
      <line x1="60" y1="240" x2="700" y2="240"/>
      <line x1="60" y1="212" x2="700" y2="212"/>
      <line x1="60" y1="184" x2="700" y2="184"/>
      <line x1="60" y1="156" x2="700" y2="156"/>
      <line x1="60" y1="128" x2="700" y2="128"/>
      <line x1="60" y1="100" x2="700" y2="100"/>
      <line x1="60" y1="72" x2="700" y2="72"/>
    </g>
    <!-- Genome-wide significance line at -log10(5e-8) = 7.3 -->
    <line x1="60" y1="96" x2="700" y2="96" stroke="#c44a4a" stroke-width="1.5" stroke-dasharray="6 3"/>
    <text x="706" y="99" font-family="JetBrains Mono" font-size="8" fill="#c44a4a" font-weight="700">P = 5e-8</text>
    <!-- Suggestive significance line at -log10(1e-5) = 5 -->
    <line x1="60" y1="156" x2="700" y2="156" stroke="#4e4d48" stroke-width="0.8" stroke-dasharray="3 4"/>
    <!-- Chromosome labels -->
    <g font-family="JetBrains Mono" font-size="8" fill="#7a7870" text-anchor="middle">
      <text x="80" y="310">1</text>
      <text x="108" y="310">2</text>
      <text x="136" y="310">3</text>
      <text x="160" y="310">4</text>
      <text x="182" y="310">5</text>
      <text x="204" y="310">6</text>
      <text x="224" y="310">7</text>
      <text x="244" y="310">8</text>
      <text x="262" y="310">9</text>
      <text x="282" y="310">10</text>
      <text x="302" y="310">11</text>
      <text x="322" y="310">12</text>
      <text x="340" y="310">13</text>
      <text x="358" y="310">14</text>
      <text x="376" y="310">15</text>
      <text x="394" y="310">16</text>
      <text x="412" y="310">17</text>
      <text x="430" y="310">18</text>
      <text x="448" y="310">19</text>
      <text x="468" y="310">20</text>
      <text x="488" y="310">21</text>
      <text x="508" y="310">22</text>
    </g>
    <text x="380" y="330" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#7a7870" letter-spacing="1">CHROMOSOME</text>
    <!-- Chr 1 dots (blue) - scattered baseline -->
    <g fill="#4a9aca" opacity="0.6">
      <circle cx="70" cy="278" r="1.5"/><circle cx="74" cy="262" r="1.5"/><circle cx="78" cy="284" r="1.5"/>
      <circle cx="82" cy="270" r="1.5"/><circle cx="86" cy="258" r="1.5"/><circle cx="90" cy="276" r="1.5"/>
      <circle cx="73" cy="248" r="1.5"/><circle cx="77" cy="272" r="1.5"/><circle cx="85" cy="266" r="1.5"/>
      <circle cx="69" cy="286" r="1.5"/><circle cx="91" cy="254" r="1.5"/><circle cx="81" cy="240" r="1.5"/>
      <circle cx="87" cy="232" r="1.8"/><circle cx="76" cy="244" r="1.5"/>
    </g>
    <!-- Chr 1 peak - PCSK9 locus -->
    <g fill="#4a9aca">
      <circle cx="84" cy="200" r="2"/><circle cx="86" cy="178" r="2"/><circle cx="85" cy="148" r="2.2"/>
      <circle cx="84" cy="120" r="2.5"/><circle cx="85" cy="88" r="3"/>
      <circle cx="83" cy="106" r="2.2"/><circle cx="87" cy="134" r="2"/>
    </g>
    <!-- Chr 2 dots (green) -->
    <g fill="#6aaa6a" opacity="0.6">
      <circle cx="100" cy="280" r="1.5"/><circle cx="104" cy="266" r="1.5"/><circle cx="108" cy="274" r="1.5"/>
      <circle cx="112" cy="256" r="1.5"/><circle cx="116" cy="270" r="1.5"/><circle cx="102" cy="250" r="1.5"/>
      <circle cx="110" cy="262" r="1.5"/><circle cx="106" cy="244" r="1.5"/>
    </g>
    <!-- Chr 3 dots (blue) -->
    <g fill="#4a9aca" opacity="0.6">
      <circle cx="126" cy="276" r="1.5"/><circle cx="130" cy="260" r="1.5"/><circle cx="134" cy="272" r="1.5"/>
      <circle cx="138" cy="254" r="1.5"/><circle cx="142" cy="268" r="1.5"/><circle cx="128" cy="248" r="1.5"/>
      <circle cx="136" cy="264" r="1.5"/>
    </g>
    <!-- Chr 4 dots (green) -->
    <g fill="#6aaa6a" opacity="0.6">
      <circle cx="150" cy="278" r="1.5"/><circle cx="154" cy="264" r="1.5"/><circle cx="158" cy="270" r="1.5"/>
      <circle cx="162" cy="256" r="1.5"/><circle cx="166" cy="274" r="1.5"/><circle cx="152" cy="246" r="1.5"/>
    </g>
    <!-- Chr 5 dots (blue) -->
    <g fill="#4a9aca" opacity="0.6">
      <circle cx="174" cy="276" r="1.5"/><circle cx="178" cy="262" r="1.5"/><circle cx="182" cy="272" r="1.5"/>
      <circle cx="186" cy="258" r="1.5"/><circle cx="190" cy="268" r="1.5"/><circle cx="176" cy="248" r="1.5"/>
    </g>
    <!-- Chr 6 dots (green) with PHACTR1 peak -->
    <g fill="#6aaa6a" opacity="0.6">
      <circle cx="196" cy="278" r="1.5"/><circle cx="200" cy="264" r="1.5"/><circle cx="204" cy="272" r="1.5"/>
      <circle cx="208" cy="256" r="1.5"/><circle cx="212" cy="268" r="1.5"/>
    </g>
    <g fill="#6aaa6a">
      <circle cx="205" cy="210" r="2"/><circle cx="207" cy="180" r="2"/><circle cx="206" cy="152" r="2.2"/>
      <circle cx="205" cy="126" r="2.5"/><circle cx="206" cy="80" r="3"/>
      <circle cx="204" cy="108" r="2.2"/><circle cx="208" cy="140" r="2"/>
    </g>
    <!-- Chr 7 dots (blue) -->
    <g fill="#4a9aca" opacity="0.6">
      <circle cx="218" cy="276" r="1.5"/><circle cx="222" cy="260" r="1.5"/><circle cx="226" cy="272" r="1.5"/>
      <circle cx="230" cy="254" r="1.5"/><circle cx="220" cy="248" r="1.5"/>
    </g>
    <!-- Chr 8 dots (green) -->
    <g fill="#6aaa6a" opacity="0.6">
      <circle cx="236" cy="278" r="1.5"/><circle cx="240" cy="264" r="1.5"/><circle cx="244" cy="272" r="1.5"/>
      <circle cx="248" cy="256" r="1.5"/><circle cx="252" cy="268" r="1.5"/>
    </g>
    <!-- Chr 9 dots (blue) with 9p21.3 peak - LEAD SIGNAL -->
    <g fill="#4a9aca" opacity="0.6">
      <circle cx="256" cy="276" r="1.5"/><circle cx="260" cy="262" r="1.5"/><circle cx="264" cy="270" r="1.5"/>
      <circle cx="268" cy="258" r="1.5"/>
    </g>
    <g fill="#4a9aca">
      <circle cx="260" cy="218" r="2"/><circle cx="262" cy="190" r="2"/><circle cx="261" cy="160" r="2.2"/>
      <circle cx="260" cy="130" r="2.5"/><circle cx="261" cy="100" r="2.8"/>
      <circle cx="262" cy="60" r="3.5"/><circle cx="259" cy="46" r="3.8"/>
      <circle cx="263" cy="114" r="2.2"/><circle cx="258" cy="144" r="2"/>
    </g>
    <!-- Chr 10 dots (green) with CXCL12 peak -->
    <g fill="#6aaa6a" opacity="0.6">
      <circle cx="274" cy="278" r="1.5"/><circle cx="278" cy="264" r="1.5"/><circle cx="282" cy="272" r="1.5"/>
      <circle cx="286" cy="256" r="1.5"/><circle cx="290" cy="268" r="1.5"/>
    </g>
    <g fill="#6aaa6a">
      <circle cx="283" cy="210" r="2"/><circle cx="285" cy="184" r="2"/><circle cx="284" cy="156" r="2.2"/>
      <circle cx="283" cy="128" r="2.5"/><circle cx="284" cy="74" r="3"/>
      <circle cx="282" cy="110" r="2.2"/><circle cx="286" cy="142" r="2"/>
    </g>
    <!-- Chr 11 dots (blue) -->
    <g fill="#4a9aca" opacity="0.6">
      <circle cx="296" cy="276" r="1.5"/><circle cx="300" cy="262" r="1.5"/><circle cx="304" cy="272" r="1.5"/>
      <circle cx="308" cy="254" r="1.5"/><circle cx="298" cy="246" r="1.5"/>
    </g>
    <!-- Chr 12 dots (green) -->
    <g fill="#6aaa6a" opacity="0.6">
      <circle cx="314" cy="278" r="1.5"/><circle cx="318" cy="264" r="1.5"/><circle cx="322" cy="272" r="1.5"/>
      <circle cx="326" cy="256" r="1.5"/><circle cx="330" cy="268" r="1.5"/>
    </g>
    <!-- Chr 13 dots (blue) -->
    <g fill="#4a9aca" opacity="0.6">
      <circle cx="334" cy="276" r="1.5"/><circle cx="338" cy="262" r="1.5"/><circle cx="342" cy="270" r="1.5"/>
      <circle cx="346" cy="258" r="1.5"/>
    </g>
    <!-- Chr 14 dots (green) -->
    <g fill="#6aaa6a" opacity="0.6">
      <circle cx="352" cy="278" r="1.5"/><circle cx="356" cy="264" r="1.5"/><circle cx="360" cy="272" r="1.5"/>
      <circle cx="364" cy="256" r="1.5"/>
    </g>
    <!-- Chr 15 dots (blue) -->
    <g fill="#4a9aca" opacity="0.6">
      <circle cx="370" cy="276" r="1.5"/><circle cx="374" cy="262" r="1.5"/><circle cx="378" cy="270" r="1.5"/>
      <circle cx="382" cy="258" r="1.5"/>
    </g>
    <!-- Chr 16 dots (green) -->
    <g fill="#6aaa6a" opacity="0.6">
      <circle cx="388" cy="278" r="1.5"/><circle cx="392" cy="264" r="1.5"/><circle cx="396" cy="272" r="1.5"/>
      <circle cx="400" cy="256" r="1.5"/>
    </g>
    <!-- Chr 17 dots (blue) -->
    <g fill="#4a9aca" opacity="0.6">
      <circle cx="406" cy="276" r="1.5"/><circle cx="410" cy="262" r="1.5"/><circle cx="414" cy="270" r="1.5"/>
      <circle cx="418" cy="254" r="1.5"/>
    </g>
    <!-- Chr 18 dots (green) -->
    <g fill="#6aaa6a" opacity="0.6">
      <circle cx="424" cy="278" r="1.5"/><circle cx="428" cy="264" r="1.5"/><circle cx="432" cy="272" r="1.5"/>
      <circle cx="436" cy="256" r="1.5"/>
    </g>
    <!-- Chr 19 dots (blue) -->
    <g fill="#4a9aca" opacity="0.6">
      <circle cx="442" cy="276" r="1.5"/><circle cx="446" cy="262" r="1.5"/><circle cx="450" cy="270" r="1.5"/>
      <circle cx="454" cy="248" r="1.5"/>
    </g>
    <!-- Chr 20 dots (green) -->
    <g fill="#6aaa6a" opacity="0.6">
      <circle cx="462" cy="278" r="1.5"/><circle cx="466" cy="264" r="1.5"/><circle cx="470" cy="272" r="1.5"/>
      <circle cx="474" cy="256" r="1.5"/>
    </g>
    <!-- Chr 21 dots (blue) -->
    <g fill="#4a9aca" opacity="0.6">
      <circle cx="482" cy="276" r="1.5"/><circle cx="486" cy="262" r="1.5"/><circle cx="490" cy="272" r="1.5"/>
      <circle cx="494" cy="258" r="1.5"/>
    </g>
    <!-- Chr 22 dots (green) -->
    <g fill="#6aaa6a" opacity="0.6">
      <circle cx="500" cy="278" r="1.5"/><circle cx="504" cy="264" r="1.5"/><circle cx="508" cy="272" r="1.5"/>
      <circle cx="512" cy="256" r="1.5"/>
    </g>
    <!-- Gene annotations for significant peaks -->
    <g font-family="JetBrains Mono" font-size="9" font-weight="700">
      <!-- PCSK9 on chr1 -->
      <line x1="85" y1="86" x2="85" y2="50" stroke="#4a9aca" stroke-width="0.8"/>
      <text x="85" y="44" text-anchor="middle" fill="#4a9aca" font-style="italic">PCSK9</text>
      <!-- PHACTR1 on chr6 -->
      <line x1="206" y1="78" x2="206" y2="42" stroke="#6aaa6a" stroke-width="0.8"/>
      <text x="206" y="36" text-anchor="middle" fill="#6aaa6a" font-style="italic">PHACTR1</text>
      <!-- 9p21.3 / CDKN2B-AS1 on chr9 -->
      <line x1="260" y1="44" x2="260" y2="30" stroke="#4a9aca" stroke-width="0.8"/>
      <text x="260" y="26" text-anchor="middle" fill="#c44a4a" font-style="italic">CDKN2B-AS1</text>
      <!-- CXCL12 on chr10 -->
      <line x1="284" y1="72" x2="284" y2="42" stroke="#6aaa6a" stroke-width="0.8"/>
      <text x="284" y="36" text-anchor="middle" fill="#6aaa6a" font-style="italic">CXCL12</text>
    </g>
  </svg>
  <figcaption class="caption"><span class="fig-num">Figure 1.</span> Manhattan plot of the multi-ethnic GWAS meta-analysis for coronary artery disease. Each point represents a genotyped or imputed variant. Chromosomes are shown in alternating colours along the x-axis. The red dashed line indicates the genome-wide significance threshold (P = 5 x 10<sup>-8</sup>). Four loci with prominent peaks are annotated: <em>PCSK9</em> (chr1), <em>PHACTR1</em> (chr6), <em>CDKN2B-AS1</em> at 9p21.3 (chr9), and <em>CXCL12</em> (chr10).</figcaption>
</figure>

<section class="locus-callout">
  <span class="callout-label">Lead Finding -- Novel Locus at 9p21.3</span>
  <span class="callout-value">rs4977574<span class="unit">P = 2.4 x 10<sup>-12</sup></span></span>
  <p class="callout-detail">Near <em>CDKN2B-AS1</em>. Odds ratio 1.29 (95 pct CI: 1.21 to 1.38). Effect allele frequency 0.48 in European, 0.52 in East Asian, 0.41 in African cohorts. SuSiE fine-mapping identified a single credible set of 3 variants spanning 12 kb. The lead variant overlaps a vascular smooth muscle cell enhancer annotated by ENCODE.</p>
</section>

## Summary of Genome-Wide Significant Loci

<table class="paper-table">
  <caption><span class="tab-num">Table 1.</span> Genome-wide significant loci associated with coronary artery disease (P &lt; 5 x 10<sup>-8</sup>).</caption>
  <thead>
    <tr>
      <th>Locus</th>
      <th>Chr</th>
      <th>Lead SNP</th>
      <th>Gene</th>
      <th>OR (95 pct CI)</th>
      <th>P-value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9p21.3</td>
      <td class="num">9</td>
      <td>rs4977574</td>
      <td><em>CDKN2B-AS1</em></td>
      <td class="num">1.29 (1.21-1.38)</td>
      <td class="num">2.4 x 10<sup>-12</sup></td>
    </tr>
    <tr>
      <td>1p32.3</td>
      <td class="num">1</td>
      <td>rs11591147</td>
      <td><em>PCSK9</em></td>
      <td class="num">1.22 (1.15-1.29)</td>
      <td class="num">8.7 x 10<sup>-11</sup></td>
    </tr>
    <tr>
      <td>6p24.1</td>
      <td class="num">6</td>
      <td>rs9349379</td>
      <td><em>PHACTR1</em></td>
      <td class="num">1.18 (1.12-1.24)</td>
      <td class="num">3.1 x 10<sup>-10</sup></td>
    </tr>
    <tr>
      <td>10q11.21</td>
      <td class="num">10</td>
      <td>rs501120</td>
      <td><em>CXCL12</em></td>
      <td class="num">1.16 (1.10-1.22)</td>
      <td class="num">6.2 x 10<sup>-9</sup></td>
    </tr>
    <tr>
      <td>15q25.1</td>
      <td class="num">15</td>
      <td>rs3825807</td>
      <td><em>ADAMTS7</em></td>
      <td class="num">1.14 (1.09-1.19)</td>
      <td class="num">1.8 x 10<sup>-9</sup></td>
    </tr>
    <tr>
      <td>2q33.1</td>
      <td class="num">2</td>
      <td>rs6725887</td>
      <td><em>WDR12</em></td>
      <td class="num">1.12 (1.08-1.17)</td>
      <td class="num">4.5 x 10<sup>-9</sup></td>
    </tr>
    <tr>
      <td>21q22.11</td>
      <td class="num">21</td>
      <td>rs28451064</td>
      <td><em>KCNE2</em></td>
      <td class="num">1.11 (1.07-1.15)</td>
      <td class="num">7.3 x 10<sup>-9</sup></td>
    </tr>
    <tr>
      <td>19p13.2</td>
      <td class="num">19</td>
      <td>rs1122608</td>
      <td><em>LDLR</em></td>
      <td class="num">1.15 (1.10-1.20)</td>
      <td class="num">2.9 x 10<sup>-8</sup></td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="6">OR = odds ratio; CI = confidence interval. All P-values are from the cross-ancestry fixed-effects meta-analysis. Gene annotations reflect the nearest gene or the gene with strongest eQTL evidence.</td></tr>
  </tfoot>
</table>

## Structure of the Paper

Navigate the paper through the section index. The full manuscript contains the following numbered sections.

1. **Section 1. Study Design** -- cohort description, genotyping platforms, and ancestry composition
2. **Section 2. Quality Control and Imputation** -- QC pipeline, imputation with TOPMed, and post-imputation filters
3. **Section 3. Association Results** -- Manhattan plot analysis, locus-by-locus results, and conditional analyses
4. **Section 4. Functional Annotation** -- pathway analysis, eQTL colocalisation, and chromatin state enrichment
5. **Section 5. Discussion** -- novel findings, comparison to prior GWAS, and clinical implications
