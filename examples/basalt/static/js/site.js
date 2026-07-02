(function () {
  "use strict";
  var toggle = document.getElementById("nav-toggle");
  var sidebar = document.getElementById("sidebar");
  var backdrop = document.getElementById("sidebar-backdrop");
  if (!toggle || !sidebar) return;

  function close() {
    sidebar.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    if (backdrop) backdrop.hidden = true;
  }

  toggle.addEventListener("click", function () {
    var open = sidebar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (backdrop) backdrop.hidden = !open;
  });

  sidebar.addEventListener("click", function (event) {
    if (event.target.tagName === "A") close();
  });

  if (backdrop) backdrop.addEventListener("click", close);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") close();
  });
})();
