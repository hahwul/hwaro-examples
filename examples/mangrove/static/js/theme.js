/* Mangrove — theme toggle (day / night passage) and the mobile sidebar
   drawer. The current choice persists to localStorage; with no saved
   choice the site follows the system preference (see the inline
   head script in header.html, which applies it before first paint). */
(function () {
  var KEY = "mangrove-theme";
  var root = document.documentElement;
  var btn = document.getElementById("theme-button");

  function current() {
    var attr = root.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function reflect(mode) {
    if (!btn) return;
    btn.setAttribute("aria-pressed", mode === "dark" ? "true" : "false");
    btn.setAttribute(
      "aria-label",
      mode === "dark" ? "Switch to day passage view" : "Switch to night passage view"
    );
  }

  if (btn) {
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
  }

  /* Mobile drawer: the sidebar tree hides behind a header button below
     900px; this just flips an attribute the CSS watches. */
  var navBtn = document.getElementById("nav-button");
  var sidebar = document.getElementById("sidebar");
  if (navBtn && sidebar) {
    navBtn.addEventListener("click", function () {
      var open = root.getAttribute("data-nav") === "open";
      root.setAttribute("data-nav", open ? "closed" : "open");
      navBtn.setAttribute("aria-expanded", open ? "false" : "true");
    });
  }
})();
