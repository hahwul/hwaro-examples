+++
title = "Release Process"
description = "How releases are cut and published from the monorepo."
+++

Releases follow a changeset-driven workflow. Every pull request that affects a published package must include a changeset file describing the user-visible impact and the intended version bump. Changeset files live in the `.changeset` directory and are plain markdown with a small frontmatter section.

When a release is ready, a maintainer runs `mono release prepare`. The command consumes all pending changesets, computes the next version for each affected package using semver rules, and writes the updated versions back into each `package.json`. It also generates a consolidated changelog entry per package by grouping changesets under the relevant heading.

`mono release prepare` opens a single pull request titled "Version Packages". The PR is intentionally noisy: every version bump, every dependency adjustment, and every changelog entry is visible in the diff. Reviewers verify that the bumps line up with the spirit of the changes and merge the PR when satisfied.

Merging the version PR triggers `mono release publish` in CI. The publish step runs the build for each package whose version changed, validates that the produced artifacts match the declared entry points, and pushes the tarballs to the registry. Tags are created with the pattern `pkg-name@1.2.3` so that multiple packages can be released from the same commit without collisions.

Hotfix releases bypass the changeset queue. A maintainer cherry-picks the fix onto the previous release branch, runs `mono release prepare --hotfix`, and merges the resulting PR. The hotfix branch then merges back into the main branch to keep history linear.

Pre-releases are supported through the `--pre` flag, which appends a tag such as `next` or `beta` to the version. Pre-release versions are excluded from the default dist-tag and consumers must opt in explicitly.
