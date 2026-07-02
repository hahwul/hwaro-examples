+++
title = "Agate"
description = "The complete language reference for a whitespace-strict template language"
template = "home"
+++

Agate treats whitespace as syntax, not decoration. Every `.agate` file has exactly one correct on-disk shape: two-space indentation opens a block, dedentation closes it, and there is no `{% endif %}` or `{% endfor %}` to fall out of sync with what the page actually does. A trailing space at the end of a line is a compile error, not a warning, because a grammar that argues with itself about invisible characters cannot be trusted to agree with anything else. This is not minimalism for its own sake — it is the reason the compiler can turn a template straight into a native render function instead of re-parsing a string on every request. Read the seven chapters below in order. Each one assumes the last, and by the end you will know exactly what your indentation compiles to.
