+++
title = "Join the Parade"
description = "Reserve a spot on the route. Grandstand seats on a first-come basis."
tags = ["event", "parade", "celebration"]
+++

<div class="join-page">

<div class="section-header">
  <span class="section-label">RSVP</span>
  <h1 class="section-title">JOIN THE PARADE</h1>
</div>

<div class="join-card">
  <form onsubmit="return false;">
    <div class="form-row">
      <div class="form-group">
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" name="first-name" required>
      </div>
      <div class="form-group">
        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" name="last-name" required>
      </div>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="group-size">Group Size</label>
      <select id="group-size" name="group-size">
        <option>1 person</option>
        <option>2 people</option>
        <option>3 to 5 people</option>
        <option>6 to 10 people</option>
      </select>
    </div>
    <div class="form-group">
      <label for="stand">Preferred Grandstand</label>
      <select id="stand" name="stand">
        <option>Battery Park (start)</option>
        <option>Bowling Green</option>
        <option>Wall Street / Canyon of Heroes</option>
        <option>Fulton / Brass Band Zone</option>
        <option>City Hall (reviewing stand)</option>
      </select>
    </div>
    <div class="form-group">
      <label for="needs">Accessibility Needs</label>
      <textarea id="needs" name="needs" rows="3" placeholder="Wheelchair space, hearing loop, sign language..."></textarea>
    </div>
    <button type="submit" class="btn btn-primary btn-full">Confirm My Spot</button>
  </form>
</div>

<p style="text-align:center;margin-top:2rem;color:var(--ink-dim);">Grandstand seats are complimentary. Confetti supplies provided at every tier.</p>

</div>
