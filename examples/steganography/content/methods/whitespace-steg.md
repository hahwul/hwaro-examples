+++
title = "Whitespace Steganography"
description = "Concealing information by manipulating whitespace and invisible characters in text documents"
date = "2025-03-12"
tags = ["text", "stego"]
+++

Whitespace steganography is a method of hiding data within text documents by manipulating spaces, tabs, and line endings. Because text documents typically ignore multiple spaces or look identical regardless of trailing whitespace, these characters serve as an excellent carrier for hidden payloads. A reader viewing the document in a standard text editor sees only the visible characters, while a specialized parser can extract the hidden binary message.

<!-- more -->

The most famous implementation of this technique is Snow, which appends trailing spaces and tabs at the ends of lines. The spaces and tabs represent binary 0s and 1s, respectively. Another approach is to use Unicode zero-width characters—such as zero-width spaces, zero-width non-joiners, or zero-width joiners—which are completely invisible when rendered in web browsers or text processors. This makes it possible to embed entire keys or documents inside simple email bodies or blog posts.

Below is a simple JavaScript snippet showing how to extract a hidden binary message from trailing spaces in a string:

```javascript
function extractWhitespaceMsg(text) {
  // Find trailing spaces and tabs at the end of lines
  const matches = text.match(/[ \t]+$/gm);
  if (!matches) return '';
  return matches.map(line => {
    return line.split('').map(c => c === '\t' ? '1' : '0').join('');
  }).join(' ');
}
```
