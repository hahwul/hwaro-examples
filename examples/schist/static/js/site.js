/* Mobile drawer toggle for the sidebar-docs rule index. No-ops on pages
   (like the homepage) that don't render a sidebar. */
(function () {
  "use strict";
  var toggle = document.getElementById("nav-toggle");
  var sidebar = document.getElementById("sidebar");
  if (!toggle || !sidebar) { return; }

  function close() {
    sidebar.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    var open = sidebar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  sidebar.addEventListener("click", function (event) {
    if (event.target.tagName === "A") { close(); }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") { close(); }
  });
})();
