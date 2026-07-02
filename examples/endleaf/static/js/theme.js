/* Endleaf — theme toggle (warm stock / lamp-lit pressroom).
   The choice persists to localStorage; with no saved choice the site
   follows the system preference (see the inline head script in header.html). */
(function () {
  var KEY = "endleaf-theme";
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
      mode === "dark" ? "Switch to warm-stock (light) theme" : "Switch to pressroom (dark) theme"
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
