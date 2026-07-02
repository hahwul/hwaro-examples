/* Halite — spreadsheet-style chrome for every code block on the site.
   Wraps each `pre` inside `.prose` with a column-letter header row and a
   row-number gutter, echoing the ledger-paper signature onto code samples
   themselves — a Rust snippet or a formula both get filed like a range on
   a sheet. Purely decorative: it only reads `textContent` to count lines
   and never touches the highlighted markup inside `pre code`, so
   highlight.js output is left exactly as rendered. */
(function () {
  'use strict';

  var COLUMNS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  var blocks = document.querySelectorAll('.prose pre');
  blocks.forEach(function (pre) {
    if (pre.parentNode && pre.parentNode.classList.contains('gridblock-body')) return;

    var code = pre.querySelector('code') || pre;
    var text = code.textContent.replace(/\n+$/, '');
    var lineCount = text.length ? text.split('\n').length : 1;

    var wrap = document.createElement('div');
    wrap.className = 'gridblock';

    var head = document.createElement('div');
    head.className = 'gridblock-colrow';
    head.setAttribute('aria-hidden', 'true');
    head.appendChild(document.createElement('span')).className = 'gridblock-corner';
    COLUMNS.forEach(function (letter) {
      var col = document.createElement('span');
      col.className = 'gridblock-col';
      col.textContent = letter;
      head.appendChild(col);
    });

    var body = document.createElement('div');
    body.className = 'gridblock-body';

    var gutter = document.createElement('div');
    gutter.className = 'gridblock-gutter';
    gutter.setAttribute('aria-hidden', 'true');
    for (var i = 1; i <= lineCount; i++) {
      var row = document.createElement('span');
      row.textContent = String(i);
      gutter.appendChild(row);
    }

    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(head);
    wrap.appendChild(body);
    body.appendChild(gutter);
    body.appendChild(pre);
  });
})();
