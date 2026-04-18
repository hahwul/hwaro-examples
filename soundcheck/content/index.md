+++
title = "Input List"
description = "Technical Rider & Soundcheck Progress"
+++

{% extends "base.html" %}

{% block content %}
<div class="technical-panel">
  <div class="panel-header">system_readiness</div>
  <h2>MAstEr fAdErs</h2>
  <div class="fader-grid">
    <div class="fader-track"><div class="fader-knob" style="bottom: 70%;"></div></div>
    <div class="fader-track"><div class="fader-knob" style="bottom: 40%;"></div></div>
    <div class="fader-track"><div class="fader-knob" style="bottom: 85%;"></div></div>
    <div class="fader-track"><div class="fader-knob" style="bottom: 20%;"></div></div>
    <div class="fader-track"><div class="fader-knob" style="bottom: 60%;"></div></div>
    <div class="fader-track"><div class="fader-knob" style="bottom: 90%;"></div></div>
  </div>
</div>

<div class="technical-panel">
  <div class="panel-header">stage_inputs</div>
  <table class="data-table">
    <thead>
      <tr>
        <th>CH</th>
        <th>SOURCE</th>
        <th>MICROPHONE</th>
        <th>STATUS</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>01</td><td>KICK DRUM</td><td>AKG D112</td><td style="color: var(--phosphor-green);">CHECKED</td></tr>
      <tr><td>02</td><td>SNARE TOP</td><td>SHURE SM57</td><td style="color: var(--phosphor-green);">CHECKED</td></tr>
      <tr><td>03</td><td>HI-HAT</td><td>NEUMANN KM184</td><td style="color: var(--light-gray);">PENDING</td></tr>
      <tr><td>07</td><td>BASS DI</td><td>RADIAL J48</td><td style="color: var(--phosphor-green);">CHECKED</td></tr>
      <tr><td>12</td><td>VOX MAIN</td><td>SHURE SM58</td><td style="color: var(--phosphor-green);">CHECKED</td></tr>
    </tbody>
  </table>
</div>

<div class="technical-panel">
  <div class="panel-header">frequency_analysis</div>
  <div class="equalizer">
    <div class="eq-bar" style="height: 20%;"></div>
    <div class="eq-bar" style="height: 40%;"></div>
    <div class="eq-bar active" style="height: 80%;"></div>
    <div class="eq-bar active" style="height: 100%;"></div>
    <div class="eq-bar active" style="height: 90%;"></div>
    <div class="eq-bar" style="height: 60%;"></div>
    <div class="eq-bar" style="height: 30%;"></div>
    <div class="eq-bar active" style="height: 75%;"></div>
    <div class="eq-bar" style="height: 45%;"></div>
    <div class="eq-bar" style="height: 15%;"></div>
  </div>
  <p style="font-family: 'Fira Mono'; font-size: 12px; color: var(--light-gray);">PEAK DETECTED AT 2.4kHz // COMPRESSION APPLIED</p>
</div>
{% endblock %}
