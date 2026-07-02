+++
title = "The Guides"
description = "Five guides that take a deployment from an empty host to a hardware-key-protected identity server, read in order."
sort_by = "weight"
template = "section"
generate_feeds = false
+++

Five guides, numbered like the chapters of a specification and meant to be read
in order. The first stands a server up on a bare host. The middle three define
the protocol surface Corundum exposes — the authorization code flow, the tokens
it mints, and the OpenID Connect discovery that ties them together. The last
turns on hardware-key authentication. Nothing here assumes prior familiarity
with a particular client library; everything is given in terms of the wire
protocol, so any conformant client will interoperate.
