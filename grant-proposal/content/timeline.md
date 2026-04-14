+++
title = "Project Timeline"
description = "Detailed project timeline with milestones, deliverables, and go/no-go decision points."
tags = ["paper", "light", "proposal", "funding", "persuasive"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Section E &middot; Project Management</p>
  <h1 class="paper-title">Detailed Project Timeline</h1>
  <p class="paper-subtitle">Milestones, deliverables, and management structure for the 36-month programme.</p>
</header>

## Year-by-Year Milestones

### Year 1 (Months 1-12): Foundation

| Month | Milestone | Deliverable | Responsible |
|---|---|---|---|
| 1 | Project kickoff | Kickoff report, website launch | PI (Patel) |
| 3 | Data inventory complete | Data catalogue, gap analysis | All teams |
| 6 | Baseline models operational | Model documentation, validation report | Chen, Al-Rashidi |
| 9 | First stakeholder workshops | Workshop summary, priority matrix | Tanaka |
| 12 | **Year 1 Review** | Annual progress report, Year 2 plan | PI (Patel) |

### Year 2 (Months 13-24): Integration

| Month | Milestone | Deliverable | Responsible |
|---|---|---|---|
| 15 | Coupled model prototype | Technical report, code release v0.1 | Chen, Al-Rashidi |
| 18 | Optimization framework ready | Algorithm documentation, benchmarks | Okafor |
| 20 | Scenario analysis complete | Scenario report, stakeholder feedback | Tanaka, Patel |
| 24 | **Year 2 Review / Go-No-Go** | Annual report, tool prototype demo | PI (Patel) |

### Year 3 (Months 25-36): Delivery

| Month | Milestone | Deliverable | Responsible |
|---|---|---|---|
| 28 | Tool beta release | Software package, user documentation | Okafor, Chen |
| 30 | Validation complete | Validation report, peer-reviewed paper | All teams |
| 33 | Final stakeholder workshops | Policy recommendations, training materials | Tanaka |
| 36 | **Project completion** | Final report, open-source tool release, 6+ publications | PI (Patel) |

## Decision Milestones

<!-- Timeline with decision points SVG -->
<figure>
<svg viewBox="0 0 700 120" xmlns="http://www.w3.org/2000/svg" aria-label="Decision milestone timeline" style="width:100%;max-width:700px;display:block;margin:1rem auto;">
  <!-- Main timeline arrow -->
  <line x1="50" y1="50" x2="650" y2="50" stroke="#1a1c20" stroke-width="1.5"/>
  <polygon points="650,45 665,50 650,55" fill="#1a1c20"/>
  <!-- Year markers -->
  <line x1="50" y1="42" x2="50" y2="58" stroke="#1a1c20" stroke-width="1.5"/>
  <text x="50" y="38" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" font-weight="600" fill="#1a1c20">M0</text>
  <line x1="250" y1="42" x2="250" y2="58" stroke="#1a1c20" stroke-width="1.5"/>
  <text x="250" y="38" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" font-weight="600" fill="#1a1c20">M12</text>
  <line x1="450" y1="42" x2="450" y2="58" stroke="#1a1c20" stroke-width="1.5"/>
  <text x="450" y="38" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" font-weight="600" fill="#1a1c20">M24</text>
  <line x1="650" y1="42" x2="650" y2="58" stroke="#1a1c20" stroke-width="1.5"/>
  <text x="650" y="38" text-anchor="middle" font-family="'Inter',sans-serif" font-size="9" font-weight="600" fill="#1a1c20">M36</text>
  <!-- Decision diamonds -->
  <polygon points="250,70 258,82 250,94 242,82" fill="none" stroke="#1a5276" stroke-width="1.5"/>
  <text x="250" y="86" text-anchor="middle" font-family="'Inter',sans-serif" font-size="7" font-weight="600" fill="#1a5276">D1</text>
  <text x="250" y="108" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" fill="#5a5e68">Proceed to</text>
  <text x="250" y="118" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" fill="#5a5e68">integration?</text>
  <polygon points="450,70 458,82 450,94 442,82" fill="none" stroke="#a85c00" stroke-width="1.5"/>
  <text x="450" y="86" text-anchor="middle" font-family="'Inter',sans-serif" font-size="7" font-weight="600" fill="#a85c00">D2</text>
  <text x="450" y="108" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" fill="#5a5e68">Go/No-Go:</text>
  <text x="450" y="118" text-anchor="middle" font-family="'Inter',sans-serif" font-size="8" fill="#5a5e68">tool release?</text>
  <!-- Milestone circles -->
  <circle cx="150" cy="50" r="5" fill="#1e6e3a" stroke="#fafafa" stroke-width="1"/>
  <text x="150" y="72" text-anchor="middle" font-family="'Inter',sans-serif" font-size="7" fill="#1e6e3a">Baseline</text>
  <circle cx="350" cy="50" r="5" fill="#1e6e3a" stroke="#fafafa" stroke-width="1"/>
  <text x="350" y="72" text-anchor="middle" font-family="'Inter',sans-serif" font-size="7" fill="#1e6e3a">Coupled</text>
  <circle cx="550" cy="50" r="5" fill="#1e6e3a" stroke="#fafafa" stroke-width="1"/>
  <text x="550" y="72" text-anchor="middle" font-family="'Inter',sans-serif" font-size="7" fill="#1e6e3a">Validated</text>
</svg>
<figcaption style="text-align:center;font-size:0.82rem;color:#5a5e68;font-style:italic;">Fig. 5. Major decision milestones along the 36-month project timeline.</figcaption>
</figure>

## Risk Management

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Data availability delays | Medium | High | Pre-negotiated data agreements; synthetic data fallback |
| Model coupling difficulties | Medium | High | Modular architecture; staged integration with fallback |
| Staff turnover | Low | Medium | Cross-training; documented workflows; overlap hiring |
| Stakeholder disengagement | Low | High | Early relationship building; co-design approach; incentive structure |
| Computational resource constraints | Low | Medium | Cloud burst capability; priority queue access at partner institutions |
