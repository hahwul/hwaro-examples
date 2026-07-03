+++
title = "About"
description = "Background and writing philosophy of Mara Lindqvist, technical writer for developer APIs and SDKs."
+++

I got into technical writing sideways, through API support. Two years of answering "why does this call return 402 instead of 401" taught me more about documentation than any style guide did: readers do not want prose, they want the exact shape of the request and response, the one sentence that explains the edge case, and a way out when the happy path does not apply to them.

That is still the whole job description, just applied at a larger scale. I write and maintain API references, SDK quickstarts, authentication guides, and error taxonomies for platforms where an unclear paragraph costs someone a support ticket or a churned integration. I work docs-as-code by default — Markdown or MDX living in the same repository as the SDK, reviewed in the same pull request as the endpoint it documents — because docs that ship separately from the code drift from it within a quarter.

A few things I hold to on every project:

- **One source of truth.** If the OpenAPI spec, the SDK method signatures, and the reference docs can disagree with each other, they eventually will. I generate what I can and hand-write only what actually needs a human's judgment.
- **Runnable examples or none at all.** A code sample that has not been executed against the real API is a guess with syntax highlighting.
- **Diátaxis, loosely held.** Tutorials, how-to guides, reference, and explanation are different jobs and read differently. I keep them separate even when it is tempting to merge a quickstart and a reference page into one convenient document.
- **Errors are a first-class deliverable.** A well-structured error reference — one taxonomy, one page per family, consistent fields — does more for integration success than another paragraph of prose.

Outside of API docs, I facilitate documentation workshops at Write the Docs and occasionally write about the craft. If you are rebuilding a documentation set that has drifted from the product it describes, or standing up SDK docs for the first time, that is the work I like best. Reach me at [mara@quietreference.dev](mailto:mara@quietreference.dev), or see the [CV](/cv/) for the full history and the [guides](/guides/) for writing samples.
