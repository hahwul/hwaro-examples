+++
title = "Register"
description = "Enter the race. Qualify for the starting line."
tags = ["event", "race"]
+++

<div class="register-page">

<div class="section-header">
  <span class="section-label">ENTRY FORM</span>
  <h1 class="section-title">ENTER THE RACE</h1>
</div>

<p style="text-align:center;color:var(--ink-dim);font-family:'IBM Plex Mono',monospace;letter-spacing:0.05em;">Qualifying standard: 10.05 under legal wind. Entry closes 7 days before race day.</p>

<form class="register-form" onsubmit="return false;">
  <div class="form-row">
    <div class="form-group">
      <label for="first-name">First Name</label>
      <input type="text" id="first-name" name="first-name" placeholder="First name" required>
    </div>
    <div class="form-group">
      <label for="last-name">Last Name</label>
      <input type="text" id="last-name" name="last-name" placeholder="Last name" required>
    </div>
  </div>
  <div class="form-group">
    <label for="country">Country Code (IOC)</label>
    <input type="text" id="country" name="country" placeholder="e.g. USA, GBR, JPN" maxlength="3" required>
  </div>
  <div class="form-group">
    <label for="pb">Season Best (100m, seconds)</label>
    <input type="text" id="pb" name="pb" placeholder="e.g. 9.94" required>
  </div>
  <div class="form-group">
    <label for="block-setting">Preferred Block Setting</label>
    <select id="block-setting" name="block-setting">
      <option>Narrow (fast starters)</option>
      <option>Medium (balanced)</option>
      <option>Wide (drive phase)</option>
    </select>
  </div>
  <div class="form-group">
    <label for="notes">Medical / Logistics Notes</label>
    <textarea id="notes" name="notes" rows="3" placeholder="Accreditation, equipment, travel..."></textarea>
  </div>
  <button type="submit" class="btn btn-primary btn-full">Submit Entry</button>
</form>

</div>
