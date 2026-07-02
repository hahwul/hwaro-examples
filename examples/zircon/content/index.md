+++
title = "Zircon"
template = "home"
+++

Most teams reach for a hosted registry because running one sounds like
undifferentiated work — until an outage, a yanked package, or a compromised
maintainer account turns "someone else's problem" into an incident review.
Zircon exists for the moment you decide the registry itself is worth owning.

A Zircon instance sits between your builds and the public internet. Every
package that crosses it — whether published internally or pulled through a
mirror — is checked against a signed attestation before it reaches a
`node_modules` folder or a `site-packages` directory. If the signature
doesn't match the source it claims, the install fails loudly instead of
succeeding quietly.

Mirroring means {{ pkg(name="lodash", cmd="zircon mirror add npm") }} and its
transitive dependents keep resolving even when the upstream registry has a
bad day. Provenance means a package like {{ pkg(name="@acme/http-kit") }}
carries proof of exactly which commit, which builder, and which identity
produced it — checkable offline, not just trusted on arrival. Access control
means publish rights are scoped tokens with expiry, not a shared password
in a wiki page.

None of this requires a platform team. A single Zircon binary, a Postgres
database, and a bucket for blob storage is enough to run a registry that
outlives whichever engineer set it up.
