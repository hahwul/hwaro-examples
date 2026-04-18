+++
title = "Signal Path"
description = "Backstage Technical Specifications"
+++

{% extends "base.html" %}

{% block content %}
<div class="technical-panel">
  <div class="panel-header">equipment_manifest</div>
  <h2>BACKstAgE rIG</h2>
  <ul class="equipment-list">
    <li>MIDAS M32 DIGITAL CONSOLE</li>
    <li>DBX 160A COMPRESSOR</li>
    <li>LEXICON PCM70 REVERB</li>
    <li>TC ELECTRONIC D-TWO DELAY</li>
  </ul>
</div>

<div class="technical-panel">
  <div class="panel-header">calibration_log</div>
  <p>All signal paths verified for impedance matching. 48V phantom power confirmed on channels 03, 04, 05. Stage monitors set to 95dB peak.</p>
  <div style="margin-top: 2rem;">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--phosphor-green)">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
    <span style="font-family: 'Fira Mono'; color: var(--phosphor-green);">GROUND LOOP DETECTED ON CH 09 // ISOLATED</span>
  </div>
</div>
{% endblock %}
