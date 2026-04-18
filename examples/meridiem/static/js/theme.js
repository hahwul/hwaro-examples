/* ==========================================================================
   Meridiem - Theme & Clock Controller
   ========================================================================== */

(function () {
  'use strict';

  // --- Theme Switching ---
  function setTheme() {
    var hour = new Date().getHours();
    var isAM = (hour >= 6 && hour < 18);
    document.documentElement.className = isAM ? 'am-theme' : 'pm-theme';
  }

  // --- Digital Clock ---
  function updateDigitalClock() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var period = h >= 12 ? 'PM' : 'AM';
    var h12 = h % 12 || 12;

    var timeStr = pad(h12) + ':' + pad(m) + ':' + pad(s);

    var digitalEl = document.querySelector('.clock-digital');
    if (digitalEl) {
      digitalEl.textContent = timeStr;
    }

    var periodEl = document.querySelector('.clock-period');
    if (periodEl) {
      periodEl.textContent = period;
    }

    var dateEl = document.querySelector('.clock-date');
    if (dateEl) {
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
      dateEl.textContent = days[now.getDay()] + ', ' + months[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear();
    }
  }

  // --- Analog Clock Hands ---
  function updateClockHands() {
    var now = new Date();
    var h = now.getHours() % 12;
    var m = now.getMinutes();
    var s = now.getSeconds();

    var hourDeg = (h * 30) + (m * 0.5);
    var minDeg = (m * 6) + (s * 0.1);
    var secDeg = s * 6;

    var hourHand = document.querySelector('.clock-hand-hour');
    var minHand = document.querySelector('.clock-hand-minute');
    var secHand = document.querySelector('.clock-hand-second');

    if (hourHand) {
      hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
    }
    if (minHand) {
      minHand.style.transform = 'rotate(' + minDeg + 'deg)';
    }
    if (secHand) {
      secHand.style.transform = 'rotate(' + secDeg + 'deg)';
      secHand.style.animation = 'none';
    }
  }

  // --- Utility ---
  function pad(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  // --- Generate Clock Marks ---
  function generateClockMarks() {
    var face = document.querySelector('.clock-face');
    if (!face) return;

    for (var i = 0; i < 12; i++) {
      var mark = document.createElement('div');
      mark.className = 'clock-mark major';
      mark.style.transform = 'translateX(-50%) rotate(' + (i * 30) + 'deg)';
      face.appendChild(mark);
    }
  }

  // --- Initialize ---
  function init() {
    setTheme();
    generateClockMarks();
    updateDigitalClock();
    updateClockHands();

    // Update clock every second
    setInterval(function () {
      updateDigitalClock();
      updateClockHands();
    }, 1000);

    // Update theme every minute
    setInterval(setTheme, 60000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
