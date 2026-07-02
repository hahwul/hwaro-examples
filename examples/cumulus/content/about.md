+++
title = "About the log"
description = "Why Cumulus exists, how each sighting is recorded, and the small script that pulls the weather behind every entry."
+++

Cumulus is a cloud-spotting journal kept from a single stretch of the North Sea coast. It is not a forecast and it is not science — it is a habit. Most mornings, and a good few afternoons, I walk down to the shingle, look up, and write down what the sky is doing. This site is the tidy version of that notebook.

## What gets logged

Every sighting records the same handful of things, so the entries stay comparable across seasons:

- **Genus** — the Latin name, following the ten cloud genera of the international classification, with the species and variety where I am confident of them.
- **Cover** — an eyeball estimate in *oktas*, eighths of the sky. Zero is clear, eight is fully overcast.
- **Conditions** — wind, air temperature, visibility, and the estimated cloud base, taken from the same spot each time.

The place names — Harle Sands, Gowan Ness, Fen Point, Brindle Cove, Thornwick Bar, Saltmarsh Head — are the working names I use for the stretches of coast I watch from. The clouds are real; the coast is mine. The full record lives on the [sightings wall](/sightings/), and you can also [browse it by genus and condition](/tags/).

## Reading a sky

If you are new to this, three habits will take you a long way:

1. **Start with height.** Low, middle, or high? That alone narrows ten genera to three or four.
2. **Then read the base.** Flat and even means a stable layer; ragged and rising means convection.
3. **Watch it change.** A cloud's future is written in how it is moving now. High cirrus thickening usually means weather within a day.

## The weather behind each entry

I cross-check my eyeball conditions against the nearest aerodrome observation, the raw METAR report. I keep a small script on the laptop that fetches and timestamps it so it lands in the same folder as the day's notes:

```bash
#!/usr/bin/env bash
# Fetch the latest METAR for a station and file it with the day's log.
station="${1:-EGXH}"
stamp="$(date -u +%Y-%m-%dT%H%MZ)"
url="https://tgftp.example-aviation.test/data/${station}.TXT"

curl -fsS "$url" \
  | tail -n 1 \
  | tee "logs/${station}-${stamp}.metar"
```

Decoding a METAR by hand gets quick with practice — the cloud groups (`FEW`, `SCT`, `BKN`, `OVC`) and the height in hundreds of feet tell you most of what you need before the plain-language remarks. One day I will write the decoder up as its own sighting.

Until then: look up more often. The best cloud you will see this year is probably one you would have walked straight under.
