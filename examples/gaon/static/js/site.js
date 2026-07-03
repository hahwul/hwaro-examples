(function () {
  "use strict";
  var toggle = document.getElementById("nav-toggle");
  var sidebar = document.getElementById("sidebar");
  var backdrop = document.getElementById("sidebar-backdrop");

  function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove("is-open");
    if (backdrop) backdrop.hidden = true;
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }
  function openSidebar() {
    if (!sidebar) return;
    sidebar.classList.add("is-open");
    if (backdrop) backdrop.hidden = false;
    if (toggle) toggle.setAttribute("aria-expanded", "true");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      if (sidebar.classList.contains("is-open")) closeSidebar();
      else openSidebar();
    });
  }
  if (backdrop) backdrop.addEventListener("click", closeSidebar);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && sidebar && sidebar.classList.contains("is-open")) closeSidebar();
  });

  document.querySelectorAll(".sidebar-links a, .sidebar-home-link").forEach(function (a) {
    a.addEventListener("click", closeSidebar);
  });
})();
