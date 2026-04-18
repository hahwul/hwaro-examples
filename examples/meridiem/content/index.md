+++
title = "Dashboard"
tags = ["dashboard", "time-tracker"]
+++

<div class="clock-section">
  <div class="clock-container">
    <div class="clock-face">
      <div class="clock-hand clock-hand-hour"></div>
      <div class="clock-hand clock-hand-minute"></div>
      <div class="clock-hand clock-hand-second"></div>
    </div>
    <div class="clock-digital">00:00:00</div>
    <span class="clock-period">AM</span>
    <div class="clock-date">Loading...</div>
  </div>
</div>

<h2>Time Tracker</h2>

<div class="dashboard-grid">
  <div class="card card-accent">
    <div class="card-label">Total Hours</div>
    <div class="card-value">7.5<span class="card-unit">hrs</span></div>
    <div class="card-detail">Today's tracked time</div>
  </div>
  <div class="card card-accent-alt">
    <div class="card-label">Tasks Completed</div>
    <div class="card-value">12</div>
    <div class="card-detail">Out of 15 planned</div>
  </div>
  <div class="card card-accent-success">
    <div class="card-label">Focus Time</div>
    <div class="card-value">4.2<span class="card-unit">hrs</span></div>
    <div class="card-detail">Deep work sessions</div>
  </div>
</div>

<div class="tracker-section">
  <h2>Today's Task Log</h2>
  <table class="tracker-table">
    <thead>
      <tr>
        <th>Status</th>
        <th>Time</th>
        <th>Task</th>
        <th>Duration</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <tr class="tracker-row">
        <td><span class="tracker-status status-complete"></span></td>
        <td class="tracker-time">06:30 AM</td>
        <td class="tracker-task">Morning planning and review</td>
        <td class="tracker-duration">0:30</td>
        <td><span class="tracker-tag">Planning</span></td>
      </tr>
      <tr class="tracker-row">
        <td><span class="tracker-status status-complete"></span></td>
        <td class="tracker-time">07:00 AM</td>
        <td class="tracker-task">API endpoint refactor</td>
        <td class="tracker-duration">1:45</td>
        <td><span class="tracker-tag">Development</span></td>
      </tr>
      <tr class="tracker-row">
        <td><span class="tracker-status status-complete"></span></td>
        <td class="tracker-time">08:45 AM</td>
        <td class="tracker-task">Code review for pull requests</td>
        <td class="tracker-duration">0:45</td>
        <td><span class="tracker-tag">Review</span></td>
      </tr>
      <tr class="tracker-row">
        <td><span class="tracker-status status-complete"></span></td>
        <td class="tracker-time">09:30 AM</td>
        <td class="tracker-task">Team standup meeting</td>
        <td class="tracker-duration">0:15</td>
        <td><span class="tracker-tag">Meeting</span></td>
      </tr>
      <tr class="tracker-row">
        <td><span class="tracker-status status-complete"></span></td>
        <td class="tracker-time">10:00 AM</td>
        <td class="tracker-task">Database migration scripts</td>
        <td class="tracker-duration">1:30</td>
        <td><span class="tracker-tag">Development</span></td>
      </tr>
      <tr class="tracker-row">
        <td><span class="tracker-status status-complete"></span></td>
        <td class="tracker-time">11:30 AM</td>
        <td class="tracker-task">Documentation updates</td>
        <td class="tracker-duration">0:45</td>
        <td><span class="tracker-tag">Docs</span></td>
      </tr>
      <tr class="tracker-row">
        <td><span class="tracker-status status-active"></span></td>
        <td class="tracker-time">01:00 PM</td>
        <td class="tracker-task">Integration testing</td>
        <td class="tracker-duration">1:15</td>
        <td><span class="tracker-tag">Testing</span></td>
      </tr>
      <tr class="tracker-row">
        <td><span class="tracker-status status-pending"></span></td>
        <td class="tracker-time">02:30 PM</td>
        <td class="tracker-task">Sprint retrospective</td>
        <td class="tracker-duration">0:45</td>
        <td><span class="tracker-tag">Meeting</span></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="weekly-section">
  <h2>Weekly Summary</h2>
  <div class="weekly-grid">
    <div class="weekly-cell">
      <div class="weekly-day">Mon</div>
      <div class="weekly-hours">8.0</div>
      <div class="weekly-bar"><div class="weekly-bar-fill" style="width: 100%"></div></div>
    </div>
    <div class="weekly-cell">
      <div class="weekly-day">Tue</div>
      <div class="weekly-hours">7.5</div>
      <div class="weekly-bar"><div class="weekly-bar-fill" style="width: 94%"></div></div>
    </div>
    <div class="weekly-cell">
      <div class="weekly-day">Wed</div>
      <div class="weekly-hours">6.0</div>
      <div class="weekly-bar"><div class="weekly-bar-fill" style="width: 75%"></div></div>
    </div>
    <div class="weekly-cell today">
      <div class="weekly-day">Thu</div>
      <div class="weekly-hours">7.5</div>
      <div class="weekly-bar"><div class="weekly-bar-fill" style="width: 94%"></div></div>
    </div>
    <div class="weekly-cell">
      <div class="weekly-day">Fri</div>
      <div class="weekly-hours">--</div>
      <div class="weekly-bar"><div class="weekly-bar-fill" style="width: 0%"></div></div>
    </div>
    <div class="weekly-cell">
      <div class="weekly-day">Sat</div>
      <div class="weekly-hours">--</div>
      <div class="weekly-bar"><div class="weekly-bar-fill" style="width: 0%"></div></div>
    </div>
    <div class="weekly-cell">
      <div class="weekly-day">Sun</div>
      <div class="weekly-hours">--</div>
      <div class="weekly-bar"><div class="weekly-bar-fill" style="width: 0%"></div></div>
    </div>
  </div>
</div>
