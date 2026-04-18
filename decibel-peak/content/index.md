+++
title = "Acts"
description = "Industrial Noise Lineup"
+++

{% extends "base.html" %}

{% block content %}

<div class="vu-meter">
  <div class="vu-needle"></div>
  <div style="position: absolute; top: 10px; right: 10px; color: var(--red); font-weight: bold;">+12dB</div>
</div>

<div class="act-card">
  <h2 class="act-name">VOID RESONANCE</h2>
  <div class="tech-specs">INPUT: ANALOG SYNTH // OUTPUT: 110dB // FREQ: 20Hz - 15kHz</div>
</div>

<div class="divider"></div>

<div class="act-card">
  <h2 class="act-name">CRUSH DEPTH</h2>
  <div class="tech-specs">INPUT: CONTACT MIC // OUTPUT: 115dB // FREQ: 50Hz - 20kHz</div>
</div>

<div class="divider"></div>

<div class="act-card">
  <h2 class="act-name">STATIC SURGE</h2>
  <div class="tech-specs">INPUT: WHITE NOISE GEN // OUTPUT: 108dB // FREQ: 10Hz - 22kHz</div>
</div>

<div class="warning-box">
  <svg width="60" height="60" viewBox="0 0 24 24" fill="var(--red)">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
  </svg>
  <div>
    <h3 style="margin: 0; color: var(--red); font-size: 32px;">WARNING</h3>
    <p>EXTREME SOUND PRESSURE LEVELS. EAR PROTECTION MANDATORY AT ALL TIMES WITHIN 50 METERS OF MAIN ARRAY.</p>
  </div>
</div>

{% endblock %}
