+++
title = "The Column Divider"
description = "The ornamental divider painted or printed between the two columns of a folio Bible - its functions, conventions, and forms."
date = "2026-03-20"
template = "chapter"
weight = 6
tags = ["ornament", "divider"]
[taxonomies]
era = ["General"]
[extra]
chapter_no = "VI"
era = "Across the Tradition"
printed = "Present in nearly all textura Bibles of the folio format"
types = "Not a type - a painted or printed vertical ornament"
format = "A vertical strip typically 8-16mm wide between the two columns"
source = "Examples from the forty-two-line, the Coverdale, the 1611 Great, and numerous Continental editions"
pages = "One per folio opening; approximately 400-600 per full Bible"
specimen_caption = "Three patterns of column divider: the lozenge chain (left), the lineated punctuation (centre), the floriate medallion (right)."
specimen_svg = '''
<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="600" height="300" fill="#0a0806" stroke="#b49660" stroke-width="0.8"/>
  <g transform="translate(100,40)">
    <line x1="0" y1="0" x2="0" y2="220" stroke="#b49660" stroke-width="0.6"/>
    <g transform="translate(0,20)"><path d="M 0 -10 L 8 0 L 0 10 L -8 0 Z" fill="#c5321a" stroke="#b49660" stroke-width="0.6"/></g>
    <g transform="translate(0,70)"><path d="M 0 -10 L 8 0 L 0 10 L -8 0 Z" fill="#c5321a" stroke="#b49660" stroke-width="0.6"/></g>
    <g transform="translate(0,120)"><path d="M 0 -10 L 8 0 L 0 10 L -8 0 Z" fill="#c5321a" stroke="#b49660" stroke-width="0.6"/></g>
    <g transform="translate(0,170)"><path d="M 0 -10 L 8 0 L 0 10 L -8 0 Z" fill="#c5321a" stroke="#b49660" stroke-width="0.6"/></g>
    <text x="0" y="250" text-anchor="middle" font-family="Old Standard TT, serif" font-style="italic" font-size="11" fill="#b49660">Lozenge chain</text>
  </g>
  <g transform="translate(300,40)">
    <line x1="0" y1="0" x2="0" y2="220" stroke="#b49660" stroke-width="0.6"/>
    <g transform="translate(0,10)"><circle r="2" fill="#b49660"/></g>
    <g transform="translate(0,40)"><circle r="2" fill="#b49660"/></g>
    <g transform="translate(0,80)"><rect x="-6" y="-1" width="12" height="2" fill="#c5321a"/></g>
    <g transform="translate(0,120)"><rect x="-6" y="-1" width="12" height="2" fill="#c5321a"/></g>
    <g transform="translate(0,160)"><circle r="2" fill="#b49660"/></g>
    <g transform="translate(0,190)"><circle r="2" fill="#b49660"/></g>
    <g transform="translate(0,220)"><circle r="2" fill="#b49660"/></g>
    <text x="0" y="250" text-anchor="middle" font-family="Old Standard TT, serif" font-style="italic" font-size="11" fill="#b49660">Lineated punctuation</text>
  </g>
  <g transform="translate(500,40)">
    <line x1="0" y1="0" x2="0" y2="220" stroke="#b49660" stroke-width="0.6"/>
    <g transform="translate(0,50)">
      <circle r="10" fill="none" stroke="#b49660" stroke-width="0.7"/>
      <circle r="5" fill="#962513"/>
    </g>
    <g transform="translate(0,110)">
      <path d="M 0 -12 Q 8 -4 8 0 Q 8 4 0 12 Q -8 4 -8 0 Q -8 -4 0 -12 Z" fill="none" stroke="#b49660" stroke-width="0.8"/>
      <circle r="3" fill="#c5321a"/>
    </g>
    <g transform="translate(0,170)">
      <circle r="10" fill="none" stroke="#b49660" stroke-width="0.7"/>
      <circle r="5" fill="#962513"/>
    </g>
    <text x="0" y="250" text-anchor="middle" font-family="Old Standard TT, serif" font-style="italic" font-size="11" fill="#b49660">Floriate medallion</text>
  </g>
</svg>
'''
+++

## The Function

The column divider performs several distinct functions in the textura Bible. The first is optical: the two columns of dense Gothic type, set in close proximity, would otherwise produce visual interference at the gutter, with the eye drawn across the column break by the accidents of letter alignment. The divider restores the visual separation. The second function is structural: the divider marks the folio as a formal liturgical object, distinguishing it from the less formal single-column layouts of contemporary vernacular books. The third is decorative: the divider is an opportunity for the ornamental programme of the Bible to be exhibited at regular intervals across the volume.

## The Lozenge Chain

The most common pattern is the lozenge chain: a vertical line in black or umber ink, punctuated at regular intervals (typically every eight to ten lines of body text) by a small lozenge in red or gilt. The lozenges may be open (drawn as outlined figures upon the ground) or filled (solid colour), and may be punctuated by a small dot at the centre.

The pattern is inherited from the manuscript tradition and appears in virtually every textura Bible of the Continental tradition. The English Bibles of the sixteenth century typically preferred the lozenge chain over alternative patterns; the 1611 Bible uses a variant in which the lozenge is drawn as a mandorla (an almond-shaped figure) rather than a pure diamond.

## The Lineated Punctuation

A less common pattern is the lineated punctuation: a vertical line punctuated not by figures but by alternating dots (in black or umber) and short horizontal bars (in red). The pattern is most commonly found in the Italian and Dutch Bibles of the late fifteenth and early sixteenth centuries, where the influence of Italian manuscript conventions is most strongly felt.

The pattern has a somewhat lighter appearance than the lozenge chain and is particularly well-suited to the smaller formats (quarto, octavo) where the divider must be narrower. The English Bibles did not generally adopt this pattern, preferring the more emphatic lozenge chain even in their smaller formats.

## The Floriate Medallion

The most elaborate pattern is the floriate medallion: a vertical line punctuated at longer intervals (typically every sixteen to twenty lines) by a larger medallion containing an ornamental device - a floral rosette, a geometric interlace, or a small figurative scene. The pattern is characteristic of the Catholic Bibles of the late sixteenth and early seventeenth centuries, particularly the Louvain Bibles and the Plantin Bibles of Antwerp.

The larger spacing between medallions accommodates the greater elaborateness of each device; the pattern does not support the lozenge-chain interval without becoming visually overloaded.

{{ alert(type="note", body="The present edition employs the lozenge chain in its two-column bodies, as a gesture toward the tradition most familiar to English-speaking readers. Readers who prefer a different pattern may modify the stylesheet to substitute a different SVG in the column-divider position.") }}

## The Contemporary Use

The column divider persists in certain contemporary typographic works as a self-conscious quotation of the textura tradition. Emigre magazine (1984-2005) used a lozenge-chain divider in several issues; The Baffler magazine has used variants for decades. In web typography, the pattern has been rare but is not unknown - the present edition is one example.
