/* Meltemi — countdown-to-race line under the masthead.
   Reads the target date off the masthead element and fills in the
   whole-day count. No-JS visitors still get the plain race date via
   the noscript fallback in the template. */
(function () {
  var wrap = document.querySelector(".masthead-countdown");
  var num = document.getElementById("countdown-num");
  if (!wrap || !num) return;

  var raceDate = new Date(wrap.getAttribute("data-race-date"));
  if (isNaN(raceDate.getTime())) return;

  var msPerDay = 24 * 60 * 60 * 1000;
  var diff = Math.ceil((raceDate.getTime() - Date.now()) / msPerDay);

  if (diff > 0) {
    num.textContent = diff;
    wrap.querySelector(".countdown-label").textContent =
      diff === 1 ? "day to the start line" : "days to the start line";
  } else if (diff === 0) {
    num.textContent = "0";
    wrap.querySelector(".countdown-label").textContent = "race day";
  } else {
    num.textContent = "✓";
    wrap.querySelector(".countdown-label").textContent = "Myrtali is done";
  }
})();
