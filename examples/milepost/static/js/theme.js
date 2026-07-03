(function () {
  "use strict";
  var KEY = "milepost-theme";
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function effective() {
    var t = root.getAttribute("data-theme");
    if (t === "light" || t === "dark") return t;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function reflect(t) {
    btn.setAttribute("aria-pressed", t === "dark" ? "true" : "false");
    btn.setAttribute("aria-label", t === "dark" ? "Switch to day road" : "Switch to night road");
  }

  btn.addEventListener("click", function () {
    var next = effective() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
    reflect(next);
  });

  reflect(effective());
})();
