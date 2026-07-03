+++
title = "Achromatic Doublet"
date = "2026-03-17"
description = "Plate 05: a crown-and-flint lens pair takes a dispersed field back down to a single white exit beam."
template = "plate"
[extra]
plate_no = "05"
material = "Crown + flint doublet, Δn F−C 27.3"
angle = "f = 340 mm"
wavelength = "400–700 nm"
vh = "76"
glass = [
  [["20","10"],["34","4"],["40","34"],["34","64"],["20","58"],["14","34"]],
  [["58","14"],["70","10"],["76","34"],["70","58"],["58","60"],["54","34"]]
]
rays = [
  ["2","6","25","30","#6d28c9"],
  ["2","16","25","31","#2f6fd6"],
  ["2","26","25","32","#2f8f5b"],
  ["2","36","25","34","#d4af22"],
  ["2","46","25","35","#d1791f"],
  ["2","56","25","36","#e0475c"]
]
beams = [["25","33","64","34"],["64","34","98","34"]]
nodes = [["64","34","1.1"],["90","34","0.7"]]
ticks = [
  ["8","70","start","dispersed field enters"],
  ["66","70","start","recombined exit beam"]
]
+++

Every other plate in this book takes white light apart. This is the one plate that puts it back together — a crown lens and a flint lens cemented in sequence, cut so that the flint's stronger dispersion cancels the crown's, and a field that entered scattered across the visible band leaves as a single beam again.
<!-- more -->

## Cancelling dispersion on purpose

A single lens ground from one material bends every wavelength by a slightly different amount, which is why an uncorrected lens smears colour at its edges — the same effect the wedge in Plate 03 is built to maximise, here treated as a flaw to remove. Pairing a weak flint element with a stronger crown element, chosen so their dispersions are nearly equal and opposite, lets the two cancel while the pair's net focusing power survives. The difference between the two glasses' dispersion, logged as Δn across the F and C spectral lines, is the single number that decides how well the cancellation works.

## Reading the recombination

Follow the six entering rays to the node between the two lens bodies — that is where the correction happens, not at either surface alone but in the combined path through both elements. What exits past the second node is drawn as a single beam because, to the resolution this plate is drawn at, it is: residual colour error in a well-made doublet is smaller than the stroke width used to draw it.

## Logbook note

The two elements were sourced separately, months apart, and cemented on the bench with balsam rather than modern epoxy, in keeping with how the rest of the salvaged stock in this book was assembled. Runa notes in the margin that it took four attempts to find a flint blank with close enough dispersion to earn the word achromatic honestly.
