/* Flyleaf — inline search.
   The input lives in the hero; typing swaps the Contents list for
   matches in place, and clearing the input restores the Contents.
   Every result string is inserted with textContent, never innerHTML. */
(function () {
  var box = document.querySelector(".leaf-search");
  var input = document.getElementById("leaf-search-input");
  var status = document.getElementById("search-status");
  var list = document.getElementById("contents-list");
  if (!box || !input || !list) return;

  var base = box.getAttribute("data-base") || "";
  var original = list.innerHTML;
  var fuse = null;

  fetch(box.getAttribute("data-index"))
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, {
        keys: ["title", "content"],
        threshold: 0.34,
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
    return words.length > 24 ? words.slice(0, 24).join(" ") + "…" : words.join(" ");
  }

  function buildRow(item) {
    var li = document.createElement("li");
    li.className = "contents-row";

    var link = document.createElement("a");
    link.className = "row-link";
    link.href = hrefFor(item);

    var title = document.createElement("span");
    title.className = "row-title";
    title.textContent = item.title || "Untitled";

    var leader = document.createElement("span");
    leader.className = "row-leader";
    leader.setAttribute("aria-hidden", "true");

    link.appendChild(title);
    link.appendChild(leader);
    li.appendChild(link);

    if (item.content) {
      var gloss = document.createElement("p");
      gloss.className = "row-gloss";
      gloss.textContent = snippet(item.content);
      li.appendChild(gloss);
    }
    return li;
  }

  function render(query) {
    if (!query) {
      list.innerHTML = original;
      if (status) status.textContent = "";
      return;
    }
    if (!fuse) return;
    var results = fuse.search(query).slice(0, 6);
    list.innerHTML = "";
    if (results.length === 0) {
      var empty = document.createElement("li");
      empty.className = "contents-empty";
      empty.textContent = "No passage matches “" + query + "”.";
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
