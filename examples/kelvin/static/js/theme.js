(function () {
  "use strict";
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  function current() {
    var set = root.getAttribute("data-theme");
    if (set === "dark" || set === "light") return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function sync() {
    var mode = current();
    toggle.setAttribute("aria-pressed", mode === "dark" ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    sync();
  });

  sync();
})();
