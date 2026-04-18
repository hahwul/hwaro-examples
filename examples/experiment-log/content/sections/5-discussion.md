+++
title = "5. Discussion"
description = "Interpretation of the sequential optimisation results, comparison to literature, methodological limitations, and references."
weight = 5
template = "post"
tags = ["paper", "dark", "experimental", "discussion", "references"]
categories = ["sections"]
[extra]
section_number = "5"
+++

## 5.1 Interpretation of the sequential approach

The three-trial sequential optimisation converged on an optimised Pd-Cu catalyst formulation and reaction temperature for selective butadiene hydrogenation within a minimal number of experiments. The key insight is that a structured, single-variable-change protocol with documented decision rationale at each transition enables efficient navigation of the parameter space when mechanistic knowledge constrains the search direction.

### Why sequential beats factorial here

A full two-factor, three-level factorial design (Pd:Cu ratio and temperature) would require 9 experiments plus replicates, totalling at least 18 runs. The sequential approach achieved the same optimum in 3 primary runs plus 2 replicates (5 total), a 72 pct reduction in experimental effort. This efficiency gain depends on two assumptions that held in this case:

1. **Monotonic response:** Selectivity responds monotonically to Cu loading and inversely to temperature in the explored range, with no local maxima or interaction effects that would trap a sequential search.

2. **Mechanistic prior:** Published literature on Pd-Cu alloy catalysts provided sufficient prior knowledge to predict the direction (though not the magnitude) of each parameter change.

When these assumptions fail -- for example, in systems with strong parameter interactions or multiple local optima -- factorial or response surface designs remain necessary. The sequential approach is not a universal replacement for design of experiments, but rather a complement for well-characterised systems.

## 5.2 Comparison with literature

<table class="paper-table">
  <caption><span class="tab-num">Table 5.1.</span> Comparison of this work with reported Pd-Cu catalysts for selective diene hydrogenation.</caption>
  <thead>
    <tr>
      <th>Reference</th>
      <th>Substrate</th>
      <th>Pd:Cu ratio</th>
      <th>Temp (C)</th>
      <th>Selectivity (pct)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Studt et al. (2008)</td>
      <td>Acetylene</td>
      <td class="num">1:1</td>
      <td class="num">80</td>
      <td class="num">85</td>
    </tr>
    <tr>
      <td>Ramos et al. (2020)</td>
      <td>Propylene</td>
      <td class="num">2:1</td>
      <td class="num">110</td>
      <td class="num">88</td>
    </tr>
    <tr>
      <td>Liu &amp; Chen (2022)</td>
      <td>Butadiene</td>
      <td class="num">3:1</td>
      <td class="num">100</td>
      <td class="num">79</td>
    </tr>
    <tr>
      <td>Kovacs et al. (2023)</td>
      <td>Butadiene</td>
      <td class="num">1:1</td>
      <td class="num">90</td>
      <td class="num">93</td>
    </tr>
    <tr>
      <td><strong>This work (EXP-03)</strong></td>
      <td>Butadiene</td>
      <td class="num">2:1</td>
      <td class="num">95</td>
      <td class="num">91.2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">Direct comparison is approximate due to differences in reactor configuration, catalyst support, WHSV, and feed composition between studies.</td></tr>
  </tfoot>
</table>

The EXP-03 result (91.2 pct) is comparable to the highest reported values. Kovacs et al. achieved 93 pct at a Pd:Cu ratio of 1:1, but at the cost of significantly lower conversion (62 pct vs. our 78.3 pct). Our optimised conditions offer a favourable balance between selectivity and conversion, translating to a higher absolute yield of the target product.

## 5.3 Mechanistic interpretation

The characterisation data (Section 4) provide a consistent mechanistic picture. Increasing Cu content from Pd:Cu 3:1 to 2:1 causes:

- **Lattice contraction:** Cu atoms (1.28 A) replacing Pd atoms (1.37 A) in the fcc lattice compress the Pd-Pd interatomic distance, altering the geometry of adsorption sites
- **Electronic modification:** XPS shows a +0.3 eV shift in Pd 3d5/2, indicating charge transfer from Pd to Cu. This lowers the d-band centre, weakening the pi-bonding interaction between 1-butene and surface Pd atoms
- **Ensemble effect:** Dilution of contiguous Pd surface ensembles by Cu atoms disrupts the multi-site adsorption geometry required for di-sigma-bonded 1-butene, favouring the weaker pi-bonded state that desorbs more readily

Reducing the temperature from 120 C to 95 C further improves selectivity by exploiting the differential activation energies of primary hydrogenation (butadiene to 1-butene, E_a approximately 45 kJ/mol) versus secondary hydrogenation (1-butene to n-butane, E_a approximately 65 kJ/mol). At lower temperatures, the higher-barrier secondary pathway is suppressed more strongly, widening the selectivity gap.

## 5.4 Limitations

1. **Limited parameter space:** Only two variables (Pd:Cu ratio and temperature) were explored. Other potentially important parameters -- catalyst support, metal loading, WHSV, H2:diene ratio -- were held constant. The identified optimum is therefore conditional on these fixed parameters.

2. **Single-catalyst support:** All experiments used gamma-Al2O3. Catalyst-support interactions may significantly affect selectivity, and the optimum Pd:Cu ratio could differ on other supports (SiO2, TiO2, carbon).

3. **Sequential search limitations:** The single-variable-change protocol cannot identify synergistic interactions between parameters. If a temperature-composition interaction existed outside the explored range, the sequential approach would miss it.

4. **Scale-up considerations:** All experiments were conducted at laboratory scale (200 mg catalyst) in a fixed-bed reactor at atmospheric pressure. Performance at industrial scale (larger beds, higher pressures, different flow regimes) may differ.

5. **Deactivation:** While the 48 h stability test showed acceptable deactivation rates, longer-term stability (hundreds of hours) and regeneration cycle performance were not assessed.

## 5.5 Future directions

- Explore Pd:Cu ratios between 2:1 and 1:1 at 95 C to determine whether further Cu addition improves selectivity without excessive conversion loss
- Test temperatures below 95 C (e.g. 80 C, 70 C) to map the selectivity-conversion trade-off at higher Cu loadings
- Investigate alternative supports (TiO2, CeO2) that may enhance the electronic modification effect through metal-support interactions
- Conduct long-term stability tests (500+ h) with periodic regeneration to assess industrial viability
- Apply the sequential approach to other selective hydrogenation targets (e.g. methylacetylene/propadiene removal from propylene streams)

## 5.6 Conclusions

A three-trial sequential optimisation of Pd-Cu/Al2O3 catalysts for selective butadiene hydrogenation achieved 91.2 pct selectivity toward 1-butene at 71.4 pct yield, starting from a baseline of 72.4 pct selectivity. The structured, single-variable-change protocol with documented decision nodes enabled rapid convergence with minimal experimental effort. Catalyst characterisation confirmed that the selectivity improvement arises from electronic modification of Pd surface sites by alloyed Cu, combined with temperature-dependent suppression of secondary hydrogenation pathways.

---

## References

<ol class="references-list">
  <li>Studt F, Abild-Pedersen F, Bligaard T, Sorensen RZ, Christensen CH, Norskov JK. Identification of non-precious metal alloy catalysts for selective hydrogenation of acetylene. <em>Science</em> 2008;320(5881):1320-1322.</li>
  <li>Ramos JJ, Alvarez-Galvan MC, Garcia-Martinez JC, Fierro JLG. Selective hydrogenation of propylene over Pd-Cu bimetallic catalysts: effect of composition and support. <em>Appl. Catal. A: Gen.</em> 2020;602:117720.</li>
  <li>Liu X, Chen JG. Selective hydrogenation of 1,3-butadiene on Pd-Cu bimetallic catalysts: a combined experimental and DFT study. <em>J. Catal.</em> 2022;408:145-155.</li>
  <li>Kovacs TN, Szabo B, Baan K, Sapi A, Kukovecz A. Pd-Cu nanoalloys on alumina for ultra-selective butadiene hydrogenation: balancing conversion and selectivity. <em>Catal. Today</em> 2023;417:114028.</li>
  <li>Molnar A, Sarkany A, Varga M. Hydrogenation of carbon-carbon multiple bonds: chemo-, regio- and stereo-selectivity. <em>J. Mol. Catal. A: Chem.</em> 2001;173(1-2):185-221.</li>
  <li>Teschner D, Borsodi J, Wootsch A, Revay Z, Havecker M, Knop-Gericke A, Jackson SD, Schlogl R. The roles of subsurface carbon and hydrogen in palladium-catalyzed alkyne hydrogenation. <em>Science</em> 2008;320(5872):86-89.</li>
  <li>Armbruster M, Kovnir K, Friedrich M, Teschner D, Wowsnick G, Hahne M, Gille P, Jiang L, Schwarz S, Fecher GH, Felser C, Ksenofontov V, Jeurgens LPH, Bieri F, Schlogl R. Al13Fe4 as a low-cost alternative for palladium in heterogeneous hydrogenation. <em>Nature Mater.</em> 2012;11:690-693.</li>
  <li>Cao Y, Sui Z, Zhu Y, Zhou X, Chen D. Selective hydrogenation of acetylene over Pd-In/Al2O3 catalyst: promotional effect of indium and composition-dependent performance. <em>ACS Catal.</em> 2017;7(11):7835-7846.</li>
  <li>Pei GX, Liu XY, Wang A, Lee AF, Isaacs MA, Li L, Pan X, Yang X, Wang X, Tai Z, Wilson K, Zhang T. Ag alloyed Pd single-atom catalysts for efficient selective hydrogenation of acetylene to ethylene in excess ethylene. <em>ACS Catal.</em> 2015;5(6):3717-3725.</li>
  <li>Bergstrom L, Farouk H, Yamamoto T, Chandrasekaran P, Novak O. Sequential optimisation of Pd-Cu bimetallic catalysts for selective hydrogenation: a three-trial iterative approach. <em>J. Catal. Eng.</em> 2026;61(11):1842-1868.</li>
</ol>
