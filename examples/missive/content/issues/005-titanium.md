+++
title = "Titanium's Fatigue Floor"
date = "2025-07-01"
description = "Ti-6Al-4V runs an S-N fatigue program until a bar that never came close to its yield strength fails anyway, at cycle 2.1 million."
tags = ["titanium", "fatigue", "biomedical"]
[extra]
material = "Ti-6Al-4V"
batch = "LOT 058-D"
chip = "#9a9f9a"
test = "Rotating-bending fatigue, ASTM E466"
verdict = "Failed at 2.1M cycles"
verdict_class = "failed"
+++

Ti-6Al-4V accounts for more than half of all titanium alloy ever produced, split almost evenly between airframe components and hip and knee implants, and both applications care about the same number: not how much stress the alloy can take once, but how much it can take repeatedly, for years, without anyone watching. This issue's specimen went onto a rotating-bending fatigue rig at a stress amplitude well under half its 880 MPa yield strength — a load any static test would call trivial.

<!-- more -->

We ran the bar at 310 MPa amplitude, logging cycles automatically and inspecting the surface with dye penetrant every quarter million cycles. Nothing showed for the first 1.8 million. At 2.1 million cycles the bar separated cleanly, and the fracture surface told the whole story under low magnification: a smooth, textured "beach mark" region radiating from a single origin point at a surface machining mark, transitioning abruptly to a coarser, brighter overload zone where the remaining cross-section finally gave out in one event.

That beach-mark region is fatigue striation growth — a crack advancing a few nanometers with every stress cycle, invisible to the eye and to any load cell, until the remaining ligament of sound material can no longer carry the peak load and fails all at once. The origin was not a material defect; it was a witness mark from the finishing lathe, a surface roughness of a few microns that was enough to concentrate stress and start the crack thousands of cycles before it would otherwise have begun. It is the reason implant-grade Ti-6Al-4V bar is specified with a polished or shot-peened finish rather than an as-machined one, and the reason the fatigue floor of a titanium part is set by its worst surface flaw, not its bulk chemistry.

Next issue: [reaction-bonded silicon carbide](/issues/006-silicon-carbide/), tested not for how it bends or tires, but for whether anything can get through it at all.
