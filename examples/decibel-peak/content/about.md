+++
title = "Specs"
description = "Technical sound specifications."
+++

{% extends "base.html" %}

{% block content %}

<div class="act-card">
  <h2 class="act-name">SIGNAL PATH</h2>
  <p style="margin-top: 2rem;">PURE ANALOG SIGNAL CHAIN. NO DIGITAL COMPRESSION. NO LIMITERS. RAW VOLTAGE DIRECT TO ARRAY.</p>
</div>

<div class="divider"></div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
  <div style="border: 2px solid var(--white); padding: 2rem;">
    <h3 style="color: var(--red);">AMPLIFICATION</h3>
    <p>120,000 WATTS TOTAL OUTPUT. CUSTOM HORN-LOADED SUB-ARRAYS.</p>
  </div>
  <div style="border: 2px solid var(--white); padding: 2rem;">
    <h3 style="color: var(--red);">ACOUSTICS</h3>
    <p>CONCRETE WAREHOUSE ENVIRONMENT. NATURAL REVERB DECAY 4.2S.</p>
  </div>
</div>

<div class="divider"></div>

<div style="text-align: center;">
  <svg width="200" height="100" viewBox="0 0 100 50" fill="none" stroke="var(--white)" stroke-width="1">
    <path d="M0 25 L10 5 L20 45 L30 15 L40 35 L50 25 L60 45 L70 5 L80 35 L90 15 L100 25" stroke="var(--red)" stroke-width="2" />
    <path d="M0 25 H100" stroke-dasharray="2,2" />
  </svg>
  <p class="tech-specs">REAL-TIME WAVEFORM MONITORING ACTIVE</p>
</div>

{% endblock %}
