(function () {
  "use strict";

  var toggle = document.getElementById("nav-toggle");
  var sidebar = document.getElementById("sidebar");
  var backdrop = document.getElementById("sidebar-backdrop");
  if (!toggle || !sidebar) return;

  function closeTree() {
    sidebar.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    if (backdrop) backdrop.hidden = true;
  }

  function toggleTree() {
    var isOpen = sidebar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    if (backdrop) backdrop.hidden = !isOpen;
  }

  toggle.addEventListener("click", toggleTree);
  if (backdrop) backdrop.addEventListener("click", closeTree);

  sidebar.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeTree();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && sidebar.classList.contains("is-open")) closeTree();
  });
})();
