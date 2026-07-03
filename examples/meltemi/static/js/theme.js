/* Meltemi — theme toggle (bone-and-coral / dusk-and-coral).
   The choice persists to localStorage; with no saved choice the site
   follows the system preference (see the inline head script). */
(function () {
  var KEY = "meltemi-theme";
  var root = document.documentElement;
  var btn = document.getElementById("theme-button");
  if (!btn) return;

  function current() {
    var attr = root.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function reflect(mode) {
    btn.setAttribute("aria-pressed", mode === "dark" ? "true" : "false");
    btn.setAttribute(
      "aria-label",
      mode === "dark" ? "Switch to daylight theme" : "Switch to dusk theme"
    );
  }

  reflect(current());

  btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(KEY, next);
    } catch (e) {
      /* private mode: the toggle still works for this visit */
    }
    reflect(next);
  });
})();
