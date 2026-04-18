+++
title = "Poster"
tags = ["paper", "dark", "poster", "conference", "visual"]
+++

<div class="poster-header">
  <div class="poster-eyebrow">POSTER P-247</div>
  <h1 class="poster-title">MACHINE LEARNING FOR REAL-TIME AIR QUALITY PREDICTION IN URBAN ENVIRONMENTS</h1>
  <div class="poster-authors">Wei Chen, Adaeze Okafor, Dimitri Petrov, Sakura Nakamura</div>
  <div class="poster-institution">Department of Environmental Computing, Metropolitan Institute of Technology</div>
  <div class="poster-institution">Center for Urban Atmospheric Research, Global Climate Analytics Lab</div>
  <div class="poster-conference">International Conference on Environmental Data Science 2026</div>
</div>

<!-- ================================================================== -->
<!-- PANEL 1: INTRODUCTION (BLUE) -->
<!-- ================================================================== -->

<div class="poster-panel poster-panel--blue">
  <div class="poster-panel-header">1. Introduction</div>
  <div class="poster-panel-body">

<p>Urban air quality monitoring faces critical challenges: sparse sensor coverage, variable pollutant sources, and rapidly changing atmospheric conditions demand prediction systems that can operate in real time. Traditional physics-based dispersion models require extensive computational resources and struggle to incorporate heterogeneous data sources.</p>

<p>Machine learning offers a data-driven alternative capable of integrating meteorological observations, traffic patterns, industrial emissions data, and satellite imagery into unified prediction frameworks. This study compares four ML architectures for real-time PM2.5, NO2, and O3 forecasting across a 200-sensor urban network.</p>

<div class="poster-figure">
<svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sensor network diagram showing placement across a city grid">
  <rect width="700" height="320" fill="#12121e" rx="6"/>
  <!-- Grid lines -->
  <line x1="50" y1="40" x2="50" y2="280" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="130" y1="40" x2="130" y2="280" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="210" y1="40" x2="210" y2="280" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="290" y1="40" x2="290" y2="280" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="370" y1="40" x2="370" y2="280" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="450" y1="40" x2="450" y2="280" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="530" y1="40" x2="530" y2="280" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="610" y1="40" x2="610" y2="280" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="50" y1="40" x2="650" y2="40" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="50" y1="100" x2="650" y2="100" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="50" y1="160" x2="650" y2="160" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="50" y1="220" x2="650" y2="220" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="50" y1="280" x2="650" y2="280" stroke="#2a2a3a" stroke-width="1"/>
  <!-- Road blocks (darker rectangles) -->
  <rect x="55" y="45" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="135" y="45" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="215" y="45" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="295" y="45" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="375" y="45" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="455" y="45" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="535" y="45" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="55" y="105" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="135" y="105" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="215" y="105" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="295" y="105" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="375" y="105" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="455" y="105" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="535" y="105" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="55" y="165" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="135" y="165" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="215" y="165" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="295" y="165" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="375" y="165" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="455" y="165" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="535" y="165" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="55" y="225" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="135" y="225" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="215" y="225" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="295" y="225" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="375" y="225" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="455" y="225" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="535" y="225" width="70" height="50" rx="3" fill="#1a1a28" stroke="#2a2a3a" stroke-width="1"/>
  <!-- Sensor nodes (circles with glow effect) -->
  <circle cx="90" cy="70" r="8" fill="#4a90e2" opacity="0.9"/>
  <circle cx="250" cy="70" r="8" fill="#4a90e2" opacity="0.9"/>
  <circle cx="410" cy="70" r="8" fill="#4a90e2" opacity="0.9"/>
  <circle cx="570" cy="70" r="8" fill="#4a90e2" opacity="0.9"/>
  <circle cx="170" cy="130" r="8" fill="#4a90e2" opacity="0.9"/>
  <circle cx="330" cy="130" r="8" fill="#4a90e2" opacity="0.9"/>
  <circle cx="490" cy="130" r="8" fill="#4a90e2" opacity="0.9"/>
  <circle cx="90" cy="190" r="8" fill="#4a90e2" opacity="0.9"/>
  <circle cx="250" cy="190" r="8" fill="#4a90e2" opacity="0.9"/>
  <circle cx="410" cy="190" r="8" fill="#4a90e2" opacity="0.9"/>
  <circle cx="570" cy="190" r="8" fill="#4a90e2" opacity="0.9"/>
  <circle cx="170" cy="250" r="8" fill="#4a90e2" opacity="0.9"/>
  <circle cx="330" cy="250" r="8" fill="#4a90e2" opacity="0.9"/>
  <circle cx="490" cy="250" r="8" fill="#4a90e2" opacity="0.9"/>
  <!-- Connection lines between nearby sensors -->
  <line x1="90" y1="70" x2="170" y2="130" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="250" y1="70" x2="170" y2="130" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="250" y1="70" x2="330" y2="130" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="410" y1="70" x2="330" y2="130" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="410" y1="70" x2="490" y2="130" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="570" y1="70" x2="490" y2="130" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="170" y1="130" x2="90" y2="190" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="170" y1="130" x2="250" y2="190" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="330" y1="130" x2="250" y2="190" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="330" y1="130" x2="410" y2="190" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="490" y1="130" x2="410" y2="190" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="490" y1="130" x2="570" y2="190" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="90" y1="190" x2="170" y2="250" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="250" y1="190" x2="170" y2="250" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="250" y1="190" x2="330" y2="250" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="410" y1="190" x2="330" y2="250" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="410" y1="190" x2="490" y2="250" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <line x1="570" y1="190" x2="490" y2="250" stroke="#4a90e2" stroke-width="2" opacity="0.3"/>
  <!-- Sensor labels -->
  <circle cx="90" cy="70" r="4" fill="#f0f0f4"/>
  <circle cx="250" cy="70" r="4" fill="#f0f0f4"/>
  <circle cx="410" cy="70" r="4" fill="#f0f0f4"/>
  <circle cx="570" cy="70" r="4" fill="#f0f0f4"/>
  <circle cx="170" cy="130" r="4" fill="#f0f0f4"/>
  <circle cx="330" cy="130" r="4" fill="#f0f0f4"/>
  <circle cx="490" cy="130" r="4" fill="#f0f0f4"/>
  <circle cx="90" cy="190" r="4" fill="#f0f0f4"/>
  <circle cx="250" cy="190" r="4" fill="#f0f0f4"/>
  <circle cx="410" cy="190" r="4" fill="#f0f0f4"/>
  <circle cx="570" cy="190" r="4" fill="#f0f0f4"/>
  <circle cx="170" cy="250" r="4" fill="#f0f0f4"/>
  <circle cx="330" cy="250" r="4" fill="#f0f0f4"/>
  <circle cx="490" cy="250" r="4" fill="#f0f0f4"/>
  <!-- Legend -->
  <circle cx="630" cy="295" r="6" fill="#4a90e2"/>
  <text x="642" y="300" fill="#8888a0" font-family="Inter, sans-serif" font-size="11" font-weight="600">SENSOR</text>
  <!-- Title -->
  <text x="350" y="20" fill="#8888a0" font-family="Anton, sans-serif" font-size="13" text-anchor="middle" letter-spacing="3">URBAN SENSOR NETWORK -- 200 NODES ACROSS 85 KM2</text>
</svg>
<div class="poster-figure-caption">Figure 1. Schematic of the urban sensor network deployment across the metropolitan study area</div>
</div>

  </div>
</div>

<!-- ================================================================== -->
<!-- PANEL 2: METHODS (RED) -->
<!-- ================================================================== -->

<div class="poster-panel poster-panel--red">
  <div class="poster-panel-header">2. Methods</div>
  <div class="poster-panel-body">

<p>Four machine learning architectures were trained and evaluated on 18 months of continuous sensor data (January 2024 -- June 2025). Each model received identical input features: hourly pollutant concentrations, meteorological variables (temperature, humidity, wind speed/direction, pressure), traffic density indices, and satellite-derived AOD measurements.</p>

<div class="poster-figure">
<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of four ML models compared with arrows">
  <rect width="700" height="220" fill="#12121e" rx="6"/>
  <!-- Title -->
  <text x="350" y="28" fill="#8888a0" font-family="Anton, sans-serif" font-size="13" text-anchor="middle" letter-spacing="3">MODEL COMPARISON ARCHITECTURE</text>
  <!-- Input block -->
  <rect x="20" y="75" width="100" height="70" rx="6" fill="#1a1a28" stroke="#4a90e2" stroke-width="3"/>
  <text x="70" y="103" fill="#f0f0f4" font-family="Anton, sans-serif" font-size="13" text-anchor="middle" letter-spacing="1">SENSOR</text>
  <text x="70" y="121" fill="#f0f0f4" font-family="Anton, sans-serif" font-size="13" text-anchor="middle" letter-spacing="1">DATA</text>
  <!-- Arrow from input -->
  <line x1="120" y1="110" x2="160" y2="60" stroke="#4a90e2" stroke-width="3"/>
  <line x1="120" y1="110" x2="160" y2="90" stroke="#4a90e2" stroke-width="3"/>
  <line x1="120" y1="110" x2="160" y2="130" stroke="#4a90e2" stroke-width="3"/>
  <line x1="120" y1="110" x2="160" y2="165" stroke="#4a90e2" stroke-width="3"/>
  <!-- Model 1: Random Forest -->
  <rect x="165" y="40" width="140" height="40" rx="6" fill="#1a1a28" stroke="#e24a4a" stroke-width="3"/>
  <text x="235" y="65" fill="#f0f0f4" font-family="Anton, sans-serif" font-size="13" text-anchor="middle" letter-spacing="1">RANDOM FOREST</text>
  <!-- Model 2: XGBoost -->
  <rect x="165" y="90" width="140" height="40" rx="6" fill="#1a1a28" stroke="#e24a4a" stroke-width="3"/>
  <text x="235" y="115" fill="#f0f0f4" font-family="Anton, sans-serif" font-size="13" text-anchor="middle" letter-spacing="1">XGBOOST</text>
  <!-- Model 3: LSTM -->
  <rect x="165" y="140" width="140" height="40" rx="6" fill="#1a1a28" stroke="#e24a4a" stroke-width="3"/>
  <text x="235" y="165" fill="#f0f0f4" font-family="Anton, sans-serif" font-size="13" text-anchor="middle" letter-spacing="1">LSTM</text>
  <!-- Model 4: Transformer -->
  <rect x="165" y="190" width="140" height="40" rx="6" fill="#1a1a28" stroke="#e24a4a" stroke-width="3"/>
  <text x="235" y="215" fill="#f0f0f4" font-family="Anton, sans-serif" font-size="13" text-anchor="middle" letter-spacing="1">TRANSFORMER</text>
  <!-- Arrows to comparison -->
  <line x1="305" y1="60" x2="370" y2="110" stroke="#e24a4a" stroke-width="3"/>
  <line x1="305" y1="110" x2="370" y2="110" stroke="#e24a4a" stroke-width="3"/>
  <line x1="305" y1="160" x2="370" y2="110" stroke="#e24a4a" stroke-width="3"/>
  <line x1="305" y1="210" x2="370" y2="140" stroke="#e24a4a" stroke-width="3"/>
  <!-- Comparison block -->
  <rect x="370" y="75" width="140" height="70" rx="6" fill="#1a1a28" stroke="#e2c44a" stroke-width="3"/>
  <text x="440" y="103" fill="#f0f0f4" font-family="Anton, sans-serif" font-size="13" text-anchor="middle" letter-spacing="1">CROSS-</text>
  <text x="440" y="121" fill="#f0f0f4" font-family="Anton, sans-serif" font-size="13" text-anchor="middle" letter-spacing="1">VALIDATION</text>
  <!-- Arrow to output -->
  <line x1="510" y1="110" x2="555" y2="110" stroke="#e2c44a" stroke-width="3"/>
  <!-- Output block -->
  <rect x="555" y="75" width="125" height="70" rx="6" fill="#1a1a28" stroke="#4ae24a" stroke-width="3"/>
  <text x="617" y="103" fill="#f0f0f4" font-family="Anton, sans-serif" font-size="13" text-anchor="middle" letter-spacing="1">PERFORMANCE</text>
  <text x="617" y="121" fill="#f0f0f4" font-family="Anton, sans-serif" font-size="13" text-anchor="middle" letter-spacing="1">RANKING</text>
</svg>
<div class="poster-figure-caption">Figure 2. Model comparison pipeline: four architectures evaluated through 5-fold cross-validation</div>
</div>

  </div>
</div>

<!-- ================================================================== -->
<!-- PANEL 3: RESULTS (GREEN) -->
<!-- ================================================================== -->

<div class="poster-panel poster-panel--green">
  <div class="poster-panel-header">3. Results</div>
  <div class="poster-panel-body">

<div class="metrics-bar">
  <div class="metric-item">
    <span class="metric-value metric-value--blue">2.41</span>
    <span class="metric-label">Best MAE (ug/m3)</span>
  </div>
  <div class="metric-item">
    <span class="metric-value metric-value--green">0.94</span>
    <span class="metric-label">Best R-Squared</span>
  </div>
  <div class="metric-item">
    <span class="metric-value metric-value--gold">24h</span>
    <span class="metric-label">Prediction Horizon</span>
  </div>
  <div class="metric-item">
    <span class="metric-value metric-value--red">87%</span>
    <span class="metric-label">Alert Accuracy</span>
  </div>
</div>

<div class="poster-figure">
<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart comparing four ML models across three metrics">
  <rect width="700" height="380" fill="#12121e" rx="6"/>
  <!-- Title -->
  <text x="350" y="28" fill="#8888a0" font-family="Anton, sans-serif" font-size="13" text-anchor="middle" letter-spacing="3">MODEL PERFORMANCE COMPARISON</text>
  <!-- Y-axis labels -->
  <text x="40" y="80" fill="#8888a0" font-family="Inter, sans-serif" font-size="12" font-weight="700" text-anchor="end">100</text>
  <text x="40" y="140" fill="#8888a0" font-family="Inter, sans-serif" font-size="12" font-weight="700" text-anchor="end">80</text>
  <text x="40" y="200" fill="#8888a0" font-family="Inter, sans-serif" font-size="12" font-weight="700" text-anchor="end">60</text>
  <text x="40" y="260" fill="#8888a0" font-family="Inter, sans-serif" font-size="12" font-weight="700" text-anchor="end">40</text>
  <text x="40" y="320" fill="#8888a0" font-family="Inter, sans-serif" font-size="12" font-weight="700" text-anchor="end">20</text>
  <!-- Y-axis grid lines -->
  <line x1="50" y1="76" x2="680" y2="76" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="50" y1="136" x2="680" y2="136" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="50" y1="196" x2="680" y2="196" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="50" y1="256" x2="680" y2="256" stroke="#2a2a3a" stroke-width="1"/>
  <line x1="50" y1="316" x2="680" y2="316" stroke="#2a2a3a" stroke-width="1"/>
  <!-- Baseline -->
  <line x1="50" y1="336" x2="680" y2="336" stroke="#585870" stroke-width="2"/>
  <!-- GROUP 1: Random Forest -->
  <!-- R2 (scaled: 0.89 -> 89% height) -->
  <rect x="72" y="106" width="32" height="230" rx="3" fill="#4a90e2"/>
  <text x="88" y="98" fill="#4a90e2" font-family="Inter, sans-serif" font-size="13" font-weight="800" text-anchor="middle">0.89</text>
  <!-- MAE (scaled: inverted, lower=better, 3.82 -> 62% of max) -->
  <rect x="108" y="174" width="32" height="162" rx="3" fill="#e24a4a"/>
  <text x="124" y="166" fill="#e24a4a" font-family="Inter, sans-serif" font-size="13" font-weight="800" text-anchor="middle">3.82</text>
  <!-- Accuracy (82%) -->
  <rect x="144" y="122" width="32" height="214" rx="3" fill="#4ae24a"/>
  <text x="160" y="114" fill="#4ae24a" font-family="Inter, sans-serif" font-size="13" font-weight="800" text-anchor="middle">82%</text>
  <!-- Label -->
  <text x="120" y="360" fill="#f0f0f4" font-family="Anton, sans-serif" font-size="14" text-anchor="middle" letter-spacing="1">RANDOM FOREST</text>
  <!-- GROUP 2: XGBoost -->
  <rect x="222" y="94" width="32" height="242" rx="3" fill="#4a90e2"/>
  <text x="238" y="86" fill="#4a90e2" font-family="Inter, sans-serif" font-size="13" font-weight="800" text-anchor="middle">0.91</text>
  <rect x="258" y="156" width="32" height="180" rx="3" fill="#e24a4a"/>
  <text x="274" y="148" fill="#e24a4a" font-family="Inter, sans-serif" font-size="13" font-weight="800" text-anchor="middle">3.15</text>
  <rect x="294" y="112" width="32" height="224" rx="3" fill="#4ae24a"/>
  <text x="310" y="104" fill="#4ae24a" font-family="Inter, sans-serif" font-size="13" font-weight="800" text-anchor="middle">85%</text>
  <text x="270" y="360" fill="#f0f0f4" font-family="Anton, sans-serif" font-size="14" text-anchor="middle" letter-spacing="1">XGBOOST</text>
  <!-- GROUP 3: LSTM -->
  <rect x="372" y="88" width="32" height="248" rx="3" fill="#4a90e2"/>
  <text x="388" y="80" fill="#4a90e2" font-family="Inter, sans-serif" font-size="13" font-weight="800" text-anchor="middle">0.92</text>
  <rect x="408" y="144" width="32" height="192" rx="3" fill="#e24a4a"/>
  <text x="424" y="136" fill="#e24a4a" font-family="Inter, sans-serif" font-size="13" font-weight="800" text-anchor="middle">2.87</text>
  <rect x="444" y="108" width="32" height="228" rx="3" fill="#4ae24a"/>
  <text x="460" y="100" fill="#4ae24a" font-family="Inter, sans-serif" font-size="13" font-weight="800" text-anchor="middle">86%</text>
  <text x="420" y="360" fill="#f0f0f4" font-family="Anton, sans-serif" font-size="14" text-anchor="middle" letter-spacing="1">LSTM</text>
  <!-- GROUP 4: Transformer -->
  <rect x="522" y="76" width="32" height="260" rx="3" fill="#4a90e2"/>
  <text x="538" y="68" fill="#4a90e2" font-family="Inter, sans-serif" font-size="13" font-weight="800" text-anchor="middle">0.94</text>
  <rect x="558" y="130" width="32" height="206" rx="3" fill="#e24a4a"/>
  <text x="574" y="122" fill="#e24a4a" font-family="Inter, sans-serif" font-size="13" font-weight="800" text-anchor="middle">2.41</text>
  <rect x="594" y="102" width="32" height="234" rx="3" fill="#4ae24a"/>
  <text x="610" y="94" fill="#4ae24a" font-family="Inter, sans-serif" font-size="13" font-weight="800" text-anchor="middle">87%</text>
  <text x="570" y="360" fill="#f0f0f4" font-family="Anton, sans-serif" font-size="14" text-anchor="middle" letter-spacing="1">TRANSFORMER</text>
  <!-- Legend -->
  <rect x="80" y="44" width="14" height="14" rx="2" fill="#4a90e2"/>
  <text x="100" y="55" fill="#d0d0d8" font-family="Inter, sans-serif" font-size="12" font-weight="700">R-SQUARED</text>
  <rect x="200" y="44" width="14" height="14" rx="2" fill="#e24a4a"/>
  <text x="220" y="55" fill="#d0d0d8" font-family="Inter, sans-serif" font-size="12" font-weight="700">MAE (INVERTED)</text>
  <rect x="350" y="44" width="14" height="14" rx="2" fill="#4ae24a"/>
  <text x="370" y="55" fill="#d0d0d8" font-family="Inter, sans-serif" font-size="12" font-weight="700">ALERT ACCURACY</text>
</svg>
<div class="poster-figure-caption">Figure 3. Performance comparison across four ML architectures (higher bars = better performance)</div>
</div>

  </div>
</div>

<!-- ================================================================== -->
<!-- PANEL 4: CONCLUSIONS (GOLD) -->
<!-- ================================================================== -->

<div class="poster-panel poster-panel--gold">
  <div class="poster-panel-header">4. Conclusions</div>
  <div class="poster-panel-body">

<div class="poster-grid">
<div>

<ul class="takeaway-list">
<li>The Transformer architecture achieved the best overall performance with an R-squared of 0.94 and MAE of 2.41 ug/m3 for 24-hour PM2.5 forecasts</li>
<li>All four models significantly outperformed the existing physics-based baseline (R-squared 0.71) currently deployed in the municipal monitoring system</li>
<li>Real-time inference latency remained below 200ms for all models, confirming feasibility for operational deployment across the full 200-sensor network</li>
<li>Ensemble approaches combining Transformer and XGBoost predictions showed marginal additional improvement (+0.01 R-squared) at the cost of doubled computational overhead</li>
</ul>

</div>
<div>

<div class="qr-block">
<svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="QR code placeholder for supplementary materials">
  <rect width="180" height="180" fill="#f0f0f4" rx="4"/>
  <rect x="10" y="10" width="50" height="50" rx="4" fill="#0a0a12"/>
  <rect x="18" y="18" width="34" height="34" rx="2" fill="#f0f0f4"/>
  <rect x="24" y="24" width="22" height="22" rx="1" fill="#0a0a12"/>
  <rect x="120" y="10" width="50" height="50" rx="4" fill="#0a0a12"/>
  <rect x="128" y="18" width="34" height="34" rx="2" fill="#f0f0f4"/>
  <rect x="134" y="24" width="22" height="22" rx="1" fill="#0a0a12"/>
  <rect x="10" y="120" width="50" height="50" rx="4" fill="#0a0a12"/>
  <rect x="18" y="128" width="34" height="34" rx="2" fill="#f0f0f4"/>
  <rect x="24" y="134" width="22" height="22" rx="1" fill="#0a0a12"/>
  <rect x="70" y="10" width="10" height="10" fill="#0a0a12"/>
  <rect x="90" y="10" width="10" height="10" fill="#0a0a12"/>
  <rect x="70" y="30" width="10" height="10" fill="#0a0a12"/>
  <rect x="80" y="40" width="10" height="10" fill="#0a0a12"/>
  <rect x="100" y="30" width="10" height="10" fill="#0a0a12"/>
  <rect x="70" y="70" width="10" height="10" fill="#0a0a12"/>
  <rect x="90" y="70" width="10" height="10" fill="#0a0a12"/>
  <rect x="110" y="70" width="10" height="10" fill="#0a0a12"/>
  <rect x="130" y="70" width="10" height="10" fill="#0a0a12"/>
  <rect x="150" y="70" width="10" height="10" fill="#0a0a12"/>
  <rect x="70" y="90" width="10" height="10" fill="#0a0a12"/>
  <rect x="100" y="90" width="10" height="10" fill="#0a0a12"/>
  <rect x="120" y="90" width="10" height="10" fill="#0a0a12"/>
  <rect x="150" y="90" width="10" height="10" fill="#0a0a12"/>
  <rect x="10" y="80" width="10" height="10" fill="#0a0a12"/>
  <rect x="30" y="80" width="10" height="10" fill="#0a0a12"/>
  <rect x="10" y="100" width="10" height="10" fill="#0a0a12"/>
  <rect x="40" y="100" width="10" height="10" fill="#0a0a12"/>
  <rect x="70" y="110" width="10" height="10" fill="#0a0a12"/>
  <rect x="90" y="110" width="10" height="10" fill="#0a0a12"/>
  <rect x="120" y="120" width="10" height="10" fill="#0a0a12"/>
  <rect x="140" y="120" width="10" height="10" fill="#0a0a12"/>
  <rect x="160" y="120" width="10" height="10" fill="#0a0a12"/>
  <rect x="80" y="130" width="10" height="10" fill="#0a0a12"/>
  <rect x="100" y="140" width="10" height="10" fill="#0a0a12"/>
  <rect x="120" y="140" width="10" height="10" fill="#0a0a12"/>
  <rect x="70" y="150" width="10" height="10" fill="#0a0a12"/>
  <rect x="100" y="160" width="10" height="10" fill="#0a0a12"/>
  <rect x="130" y="160" width="10" height="10" fill="#0a0a12"/>
  <rect x="150" y="150" width="10" height="10" fill="#0a0a12"/>
</svg>
<div class="qr-label">Scan for Supplementary Materials</div>
</div>

<div class="contact-block">
<p><strong>Corresponding Author:</strong> Wei Chen</p>
<p>wei.chen@mit-envcomp.edu</p>
<p>Department of Environmental Computing</p>
<p>Metropolitan Institute of Technology</p>
</div>

</div>
</div>

  </div>
</div>

---

## Poster Sections

Detailed content for each section of this poster is available on the following pages:

- [1. Introduction]({{ base_url }}/sections/1-introduction/) -- Background and objectives
- [2. Methods]({{ base_url }}/sections/2-methods/) -- Sensor network and model architectures
- [3. Results]({{ base_url }}/sections/3-results/) -- Detailed performance analysis
- [4. Conclusions]({{ base_url }}/sections/4-conclusions/) -- Key findings and future work

Additional resources:

- [Data Specifications]({{ base_url }}/data/) -- Sensor network and dataset details
- [Appendix]({{ base_url }}/appendix/) -- References, contact, and funding
