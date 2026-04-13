+++
title = "Reserve"
description = "One hundred seats per show. Reserve in advance."
tags = ["event", "theater", "intimate"]
+++

<div class="reserve-page">

<p class="section-label">reserve a seat</p>
<h1 class="section-title">one hundred seats<br>per performance</h1>

<p style="text-align:center;max-width:520px;margin:0 auto 2rem;color:var(--ink);font-weight:300;line-height:2;">The house is small. Many nights sell out before the box office opens. Reserve in advance.</p>

<form onsubmit="return false;">
  <div class="form-row">
    <div class="form-group">
      <label for="first-name">first name</label>
      <input type="text" id="first-name" name="first-name">
    </div>
    <div class="form-group">
      <label for="last-name">last name</label>
      <input type="text" id="last-name" name="last-name">
    </div>
  </div>
  <div class="form-group">
    <label for="email">email</label>
    <input type="email" id="email" name="email">
  </div>
  <div class="form-group">
    <label for="show">performance</label>
    <select id="show" name="show">
      <option>Thu 19:30 &middot; Remainder</option>
      <option>Fri 19:30 &middot; Two Rooms</option>
      <option>Fri 22:00 &middot; Late House</option>
      <option>Sat 19:30 &middot; Quiet Hour</option>
      <option>Sat 22:00 &middot; Afterimage</option>
    </select>
  </div>
  <div class="form-group">
    <label for="seats">seats</label>
    <select id="seats" name="seats">
      <option>1 seat</option>
      <option>2 seats</option>
      <option>3 seats</option>
      <option>4 seats</option>
    </select>
  </div>
  <div class="form-group">
    <label for="notes">access needs</label>
    <textarea id="notes" name="notes" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-full">hold my seats</button>
</form>

<p style="text-align:center;color:var(--ink-dim);font-family:'JetBrains Mono',monospace;font-size:0.75rem;letter-spacing:0.25em;margin-top:2rem;">doors open 20 minutes before curtain. no latecomers.</p>

</div>
