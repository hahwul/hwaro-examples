/* Cypress — inline sidebar search.
   The box sits above the procedure tree; typing swaps the grouped tree for
   a flat list of matches in place, and clearing the input restores the
   original Drivetrain / Brakes / Wheels grouping. Every result string is
   inserted with textContent, never innerHTML. */
(function () {
  "use strict";
  var box = document.querySelector(".search-inline");
  var input = document.getElementById("procedure-search");
  var status = document.getElementById("search-status");
  var tree = document.getElementById("procedure-tree");
  if (!box || !input || !tree) return;

  var base = box.getAttribute("data-base") || "";
  var original = tree.innerHTML;
  var fuse = null;

  fetch(box.getAttribute("data-index"))
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var procedures = data.filter(function (item) {
        var url = item.url || item.permalink || "";
        return url.indexOf("/repairs/") === 0 && url !== "/repairs/";
      });
      fuse = new Fuse(procedures, {
        keys: ["title", "content"],
        threshold: 0.32,
        ignoreLocation: true,
        minMatchCharLength: 2
      });
    })
    .catch(function () {
      if (status) status.textContent = "The procedure index could not be opened.";
    });

  function hrefFor(item) {
    var url = item.url || item.permalink || "";
    return /^https?:\/\//.test(url) ? url : base + url;
  }

  function render(query) {
    if (!query) {
      tree.innerHTML = original;
      if (status) status.textContent = "";
      return;
    }
    if (!fuse) return;
    var results = fuse.search(query).slice(0, 8);
    tree.innerHTML = "";
    var list = document.createElement("ul");
    list.className = "tree-list";
    if (results.length === 0) {
      var li = document.createElement("li");
      li.className = "tree-empty";
      li.textContent = "No procedure matches “" + query + "”.";
      list.appendChild(li);
    } else {
      results.forEach(function (r) {
        var row = document.createElement("li");
        var a = document.createElement("a");
        a.href = hrefFor(r.item);
        a.textContent = r.item.title || "Untitled";
        row.appendChild(a);
        list.appendChild(row);
      });
    }
    tree.appendChild(list);
    if (status) {
      status.textContent = results.length +
        (results.length === 1 ? " result for “" : " results for “") + query + "”";
    }
  }

  var timer = null;
  input.addEventListener("input", function () {
    window.clearTimeout(timer);
    var value = input.value.trim();
    timer = window.setTimeout(function () { render(value); }, 120);
  });
})();
