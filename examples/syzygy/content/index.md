+++
title = "Syzygy"
description = "A three-day systems programming conference on schedulers, allocators, and bare metal"
template = "home"

[[extra.day1]]
time = "08:30"
end = "09:15"
kind = "break"
label = "Registration & Coffee"

[[extra.day1]]
time = "09:15"
end = "09:30"
kind = "session"
label = "Opening Remarks"
note = "The conference chairs frame three days of schedulers, allocators, and bare metal."

[[extra.day1]]
time = "09:30"
end = "10:15"
kind = "keynote"
label = "The Scheduler Is Lying to You"
speaker = "Mira Kessler"
room = "Main Hall"
url = "/talks/scheduler-is-lying-to-you/"
abstract = "Opening keynote. Everything your kernel tells you about run queues, load averages, and fairness is a simplification built for a machine that stopped existing around 2014."

[[extra.day1]]
time = "10:15"
end = "10:45"
kind = "break"
label = "Coffee Break"

[[extra.day1]]
time = "10:45"
end = "11:30"
kind = "talk"
label = "Lock-Free Allocators at the Edge of Cache Coherence"
speaker = "Teodor Vance"
room = "Main Hall"
url = "/talks/lock-free-allocators/"
abstract = "Why a correct lock-free free-list is not the same thing as a fast one, and what MESI actually costs you per bucket."

[[extra.day1]]
time = "11:30"
end = "12:30"
kind = "session"
label = "Birds of a Feather — Allocator Design"
note = "Open discussion, Annex room. Bring your worst false-sharing bug."

[[extra.day1]]
time = "12:30"
end = "13:45"
kind = "break"
label = "Lunch"

[[extra.day1]]
time = "13:45"
end = "14:45"
kind = "session"
label = "Workshop — Building a Slab Allocator From Scratch"
note = "Hands-on, Annex room. Bring a laptop with a C toolchain and a debugger you trust."

[[extra.day1]]
time = "14:45"
end = "15:15"
kind = "break"
label = "Coffee Break"

[[extra.day1]]
time = "15:15"
end = "16:15"
kind = "session"
label = "Panel — Betting on RISC-V in Production"
note = "Four teams that shipped RISC-V hardware discuss what the toolchains still get wrong."

[[extra.day1]]
time = "16:15"
end = "18:00"
kind = "break"
label = "Reception"
note = "Cash bar, Turbine Hall foyer. No slides, no lanyards required."
+++

Three days of talks on the parts of a system most conferences wave past: the
scheduler, the allocator, the boot sequence. No panels about culture, no
booths, no track named "cloud." Just the machine, from reset vector to
run queue.
