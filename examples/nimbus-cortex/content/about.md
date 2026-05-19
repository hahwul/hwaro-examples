+++
title = "Cluster handbook"
description = "How the research cluster is operated, and what the console will and will not do for you."
+++

Nimbus Cortex is the training console for a research cluster of two hundred and eighty-eight accelerators. It is the working surface for a small ML research team — three permanent researchers, two rotating residents, and the platform engineer who keeps the slab from melting. The page you stepped away from is what the team watches from the moment a run is submitted to the moment it lands a checkpoint.

## What the console does

The console shows you the run, the GPU envelope, and the loss curve. It does not show you the model, the data, or the prompt. We deliberately keep the working surface to *the training itself* — the model lives in the repo, the data lives in the catalog, and the prompts live in evaluation. Mixing them on the same page makes for a cluttered console and a confused team.

> The console is for training health. If you want to know what the model is doing, run the eval. If you want to know what the model means, write the note.

## What the console will not do

The console will not interpret your loss curve for you. Two researchers can look at the same curve and write different runbooks; we would rather both researchers see the same curve than have the console pick a winner.

The console will not kill your run. The kill switch lives behind a confirmation in the CLI and a second confirmation in the cluster's web UI. We have stopped enough good runs on a bad gut feel that we no longer trust ourselves with a single-click kill.

## The team

Three researchers, two residents, one platform engineer. The platform engineer is the only person on rotation; researchers are paired by topic, not by shift. The handbook here is canonical — if it disagrees with a wiki page, the handbook wins.
