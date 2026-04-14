+++
title = "Bioinformatics Pipeline"
description = "End-to-end computational workflow from raw genotyping array data through quality control, imputation, association testing, and meta-analysis."
tags = ["paper", "dark", "genomics", "bioinformatics", "data-intensive"]
+++

## Analysis Pipeline Overview

The bioinformatics pipeline comprises seven sequential stages, from raw array intensity data to the final cross-ancestry meta-analysis. Each stage was containerised using Singularity for reproducibility.

<figure class="figure">
  <svg viewBox="0 0 720 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow diagram of the bioinformatics pipeline from raw reads through meta-analysis">
    <defs>
      <marker id="arrowBlue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#4a9aca"/>
      </marker>
      <marker id="arrowGreen" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#6aaa6a"/>
      </marker>
    </defs>
    <!-- Stage 1: Raw Reads -->
    <rect x="20" y="20" width="140" height="50" fill="none" stroke="#4a9aca" stroke-width="2"/>
    <text x="90" y="42" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#ccc8bc" letter-spacing="0.5">RAW INTENSITY</text>
    <text x="90" y="56" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#ccc8bc" letter-spacing="0.5">DATA</text>
    <text x="90" y="86" text-anchor="middle" font-family="STIX Two Text" font-size="9" fill="#7a7870">IDAT / CEL files</text>
    <text x="90" y="98" text-anchor="middle" font-family="STIX Two Text" font-size="9" fill="#7a7870">N = 597,064 samples</text>
    <!-- Arrow 1-2 -->
    <line x1="160" y1="45" x2="200" y2="45" stroke="#4a9aca" stroke-width="1.5" marker-end="url(#arrowBlue)"/>
    <!-- Stage 2: Genotype Calling -->
    <rect x="200" y="20" width="140" height="50" fill="none" stroke="#4a9aca" stroke-width="2"/>
    <text x="270" y="42" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#ccc8bc" letter-spacing="0.5">GENOTYPE</text>
    <text x="270" y="56" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#ccc8bc" letter-spacing="0.5">CALLING</text>
    <text x="270" y="86" text-anchor="middle" font-family="STIX Two Text" font-size="9" fill="#7a7870">GenomeStudio / APT</text>
    <text x="270" y="98" text-anchor="middle" font-family="STIX Two Text" font-size="9" fill="#7a7870">GenCall / AxiomGT1</text>
    <!-- Arrow 2-3 -->
    <line x1="340" y1="45" x2="380" y2="45" stroke="#4a9aca" stroke-width="1.5" marker-end="url(#arrowBlue)"/>
    <!-- Stage 3: Sample QC -->
    <rect x="380" y="20" width="140" height="50" fill="none" stroke="#6aaa6a" stroke-width="2"/>
    <text x="450" y="42" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#ccc8bc" letter-spacing="0.5">SAMPLE QC</text>
    <text x="450" y="86" text-anchor="middle" font-family="STIX Two Text" font-size="9" fill="#7a7870">Call rate, sex check,</text>
    <text x="450" y="98" text-anchor="middle" font-family="STIX Two Text" font-size="9" fill="#7a7870">relatedness, PCA</text>
    <!-- Arrow 3-4 -->
    <line x1="520" y1="45" x2="560" y2="45" stroke="#6aaa6a" stroke-width="1.5" marker-end="url(#arrowGreen)"/>
    <!-- Stage 4: Variant QC -->
    <rect x="560" y="20" width="140" height="50" fill="none" stroke="#6aaa6a" stroke-width="2"/>
    <text x="630" y="42" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#ccc8bc" letter-spacing="0.5">VARIANT QC</text>
    <text x="630" y="86" text-anchor="middle" font-family="STIX Two Text" font-size="9" fill="#7a7870">MAF, HWE, missingness,</text>
    <text x="630" y="98" text-anchor="middle" font-family="STIX Two Text" font-size="9" fill="#7a7870">strand alignment</text>
    <!-- Arrow 4-5 (down then left) -->
    <line x1="630" y1="70" x2="630" y2="150" stroke="#4a9aca" stroke-width="1.5" marker-end="url(#arrowBlue)"/>
    <!-- Stage 5: Imputation -->
    <rect x="470" y="150" width="160" height="50" fill="none" stroke="#4a9aca" stroke-width="2"/>
    <text x="550" y="172" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#ccc8bc" letter-spacing="0.5">IMPUTATION</text>
    <text x="550" y="216" text-anchor="middle" font-family="STIX Two Text" font-size="9" fill="#7a7870">TOPMed r3 reference panel</text>
    <text x="550" y="228" text-anchor="middle" font-family="STIX Two Text" font-size="9" fill="#7a7870">Minimac4, R-sq &gt; 0.3</text>
    <!-- Arrow 5-6 -->
    <line x1="470" y1="175" x2="430" y2="175" stroke="#4a9aca" stroke-width="1.5" marker-end="url(#arrowBlue)"/>
    <!-- Stage 6: Association Testing -->
    <rect x="200" y="150" width="230" height="50" fill="none" stroke="#c44a4a" stroke-width="2"/>
    <text x="315" y="172" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#ccc8bc" letter-spacing="0.5">ASSOCIATION TESTING</text>
    <text x="315" y="216" text-anchor="middle" font-family="STIX Two Text" font-size="9" fill="#7a7870">SAIGE (mixed model)</text>
    <text x="315" y="228" text-anchor="middle" font-family="STIX Two Text" font-size="9" fill="#7a7870">Per-ancestry, additive model</text>
    <!-- Arrow 6-7 -->
    <line x1="315" y1="200" x2="315" y2="280" stroke="#c44a4a" stroke-width="1.5" marker-end="url(#arrowBlue)"/>
    <!-- Stage 7: Meta-Analysis -->
    <rect x="200" y="280" width="230" height="50" fill="none" stroke="#c44a4a" stroke-width="2"/>
    <text x="315" y="302" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="10" fill="#ccc8bc" letter-spacing="0.5">CROSS-ANCESTRY META-ANALYSIS</text>
    <text x="315" y="346" text-anchor="middle" font-family="STIX Two Text" font-size="9" fill="#7a7870">MR-MEGA, random effects</text>
    <text x="315" y="358" text-anchor="middle" font-family="STIX Two Text" font-size="9" fill="#7a7870">Heterogeneity filtering</text>
    <!-- Output arrow -->
    <line x1="315" y1="330" x2="315" y2="390" stroke="#4a9aca" stroke-width="1.5" marker-end="url(#arrowBlue)"/>
    <text x="315" y="408" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="11" fill="#4a9aca" letter-spacing="1">SUMMARY STATISTICS</text>
    <!-- Side annotation: sample counts -->
    <rect x="20" y="150" width="140" height="50" fill="none" stroke="#2a2f40" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="90" y="170" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7a7870">POST-QC</text>
    <text x="90" y="184" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#4a9aca">184,726 cases</text>
    <text x="90" y="196" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#6aaa6a">412,338 controls</text>
    <line x1="160" y1="175" x2="200" y2="175" stroke="#2a2f40" stroke-width="1" stroke-dasharray="3 3"/>
  </svg>
  <figcaption class="caption"><span class="fig-num">Figure 2.</span> Bioinformatics pipeline for the GWAS of coronary artery disease. Blue boxes indicate data processing steps, green boxes indicate quality control, and red boxes indicate statistical analysis. Dashed box shows post-QC sample counts. All steps were containerised with Singularity v3.11 for reproducibility.</figcaption>
</figure>

## Pipeline Stage Details

<div class="pipeline-box">
  <span class="pipeline-label">Stage 1 -- Genotype Calling</span>
  <span class="step">Platform A (Illumina GSA):</span> <span class="tool">GenomeStudio v2.0.5 with GenCall algorithm</span><br>
  <span class="step">Platform B (Affymetrix Axiom):</span> <span class="tool">Axiom Analysis Suite v5.2 with AxiomGT1</span><br>
  <span class="note">Both platforms aligned to GRCh38 coordinate system before merging</span>
</div>

<div class="pipeline-box">
  <span class="pipeline-label">Stage 2 -- Sample Quality Control</span>
  <span class="step">Call rate filter:</span> <span class="tool">&gt; 0.97 per sample (PLINK v2.0)</span><br>
  <span class="step">Sex check:</span> <span class="tool">F-statistic on X chromosome (F &lt; 0.2 female, F &gt; 0.8 male)</span><br>
  <span class="step">Relatedness:</span> <span class="tool">KING v2.3.2, kinship &gt; 0.0884 flagged (second-degree or closer)</span><br>
  <span class="step">Population structure:</span> <span class="tool">PCA with 1000 Genomes Phase 3 as reference (smartpca v7.2)</span><br>
  <span class="note">14,291 samples removed at this stage (2.4 pct of total)</span>
</div>

<div class="pipeline-box">
  <span class="pipeline-label">Stage 3 -- Variant Quality Control</span>
  <span class="step">Call rate:</span> <span class="tool">&gt; 0.98 per variant</span><br>
  <span class="step">Hardy-Weinberg equilibrium:</span> <span class="tool">P &gt; 1 x 10<sup>-6</sup> in controls</span><br>
  <span class="step">Minor allele frequency:</span> <span class="tool">&gt; 0.005 (per ancestry group)</span><br>
  <span class="step">Strand alignment:</span> <span class="tool">Strand consensus via SHAPEIT4 pre-phasing</span><br>
  <span class="note">587,431 variants passed all filters across both platforms</span>
</div>

<div class="pipeline-box">
  <span class="pipeline-label">Stage 4 -- Imputation</span>
  <span class="step">Pre-phasing:</span> <span class="tool">SHAPEIT4 v4.2.2</span><br>
  <span class="step">Imputation server:</span> <span class="tool">Minimac4 v4.1 with TOPMed r3 reference panel</span><br>
  <span class="step">Post-imputation filter:</span> <span class="tool">R-squared &gt; 0.3 and MAF &gt; 0.001</span><br>
  <span class="note">~28.4 million variants available after imputation and filtering</span>
</div>

<div class="pipeline-box">
  <span class="pipeline-label">Stage 5 -- Association Testing</span>
  <span class="step">Method:</span> <span class="tool">SAIGE v1.3.0 (saddle-point approximation for case-control imbalance)</span><br>
  <span class="step">Model:</span> <span class="tool">Logistic mixed model, additive genotype coding</span><br>
  <span class="step">Covariates:</span> <span class="tool">Age, sex, genotyping batch, and top 10 PCs per ancestry</span><br>
  <span class="note">Run separately for each of the four ancestry groups</span>
</div>

<div class="pipeline-box">
  <span class="pipeline-label">Stage 6 -- Cross-Ancestry Meta-Analysis</span>
  <span class="step">Software:</span> <span class="tool">MR-MEGA v0.2</span><br>
  <span class="step">Model:</span> <span class="tool">Random-effects, accounting for allelic heterogeneity across ancestries</span><br>
  <span class="step">Heterogeneity filter:</span> <span class="tool">Cochran Q P &gt; 1 x 10<sup>-4</sup></span><br>
  <span class="note">Final summary statistics deposited in GWAS Catalog under accession GCST90XXXXX</span>
</div>

## Software Versions

<table class="paper-table">
  <caption><span class="tab-num">Table S1.</span> Key software tools and versions used in the analysis pipeline.</caption>
  <thead>
    <tr>
      <th>Tool</th>
      <th>Version</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>PLINK</td><td>v2.0-alpha-6</td><td>Sample and variant QC</td></tr>
    <tr><td>KING</td><td>v2.3.2</td><td>Kinship estimation</td></tr>
    <tr><td>SHAPEIT4</td><td>v4.2.2</td><td>Pre-phasing</td></tr>
    <tr><td>Minimac4</td><td>v4.1</td><td>Genotype imputation</td></tr>
    <tr><td>SAIGE</td><td>v1.3.0</td><td>Single-variant association testing</td></tr>
    <tr><td>MR-MEGA</td><td>v0.2</td><td>Cross-ancestry meta-analysis</td></tr>
    <tr><td>SuSiE</td><td>v0.12.35</td><td>Fine-mapping</td></tr>
    <tr><td>FUMA</td><td>v1.5.6</td><td>Functional annotation</td></tr>
  </tbody>
</table>
