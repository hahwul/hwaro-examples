/* Linden — inline search.
   The input sits under the masthead; typing swaps the method list for
   matches in place, and clearing the input restores the full list.
   Every result string is inserted with textContent, never innerHTML. */
(function () {
  var box = document.querySelector(".search-inline");
  var input = document.getElementById("method-search");
  var status = document.getElementById("search-status");
  var list = document.getElementById("method-list");
  if (!box || !input || !list) return;

  var base = box.getAttribute("data-base") || "";
  var original = list.innerHTML;
  var count = document.querySelector(".method-count");
  var countOriginal = count ? count.textContent : "";
  var fuse = null;

  fetch(box.getAttribute("data-index"))
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var methods = data.filter(function (item) {
        return (item.url || item.permalink || "").indexOf("/methods/") !== -1;
      });
      fuse = new Fuse(methods, {
        keys: ["title", "content"],
        threshold: 0.32,
        ignoreLocation: true,
        minMatchCharLength: 2
      });
    })
    .catch(function () {
      if (status) status.textContent = "The index could not be opened.";
    });

  function hrefFor(item) {
    var url = item.url || item.permalink || "";
    return /^https?:\/\//.test(url) ? url : base + url;
  }

  function snippet(text) {
    var words = (text || "").replace(/\s+/g, " ").trim().split(" ");
    return words.length > 22 ? words.slice(0, 22).join(" ") + "…" : words.join(" ");
  }

  function buildRow(item) {
    var li = document.createElement("li");
    li.className = "method-row";

    var link = document.createElement("a");
    link.className = "method-link";
    link.href = hrefFor(item);

    var kicker = document.createElement("span");
    kicker.className = "method-kicker";
    kicker.textContent = "Result";

    var title = document.createElement("span");
    title.className = "method-title";
    title.textContent = item.title || "Untitled";

    var desc = document.createElement("span");
    desc.className = "method-desc";
    desc.textContent = snippet(item.content);

    link.appendChild(kicker);
    link.appendChild(title);
    link.appendChild(desc);
    li.appendChild(link);
    return li;
  }

  function render(query) {
    if (!query) {
      list.innerHTML = original;
      if (status) status.textContent = "";
      if (count) count.textContent = countOriginal;
      return;
    }
    if (!fuse) return;
    var results = fuse.search(query).slice(0, 8);
    list.innerHTML = "";
    if (count) count.textContent = "Filtered by search";
    if (results.length === 0) {
      var empty = document.createElement("li");
      empty.className = "method-empty";
      empty.textContent = "No method matches “" + query + "”.";
      list.appendChild(empty);
    } else {
      results.forEach(function (r) { list.appendChild(buildRow(r.item)); });
    }
    if (status) {
      status.textContent = results.length + (results.length === 1 ? " result for “" : " results for “") + query + "”";
    }
  }

  var timer = null;
  input.addEventListener("input", function () {
    window.clearTimeout(timer);
    var value = input.value.trim();
    timer = window.setTimeout(function () { render(value); }, 120);
  });
})();
