# hwaro-examples · agent orchestration
#
# `just new <name>` drives agy (Antigravity CLI) end-to-end: the design step
# authors the manifest entry (art direction — where a site's quality is
# actually decided), the build step executes it, and deterministic scripts
# verify it. Screenshots for the DESIGN.md §16 design review land in
# _agent/<name>/ — that judgment stays with a human or a strong model, never
# with the builder's self-report.
#
# Models are pinned rather than left to agy's implicit default, so a CLI
# update cannot silently change what builds the collection. Override any of
# them with AGY_DESIGN_MODEL / AGY_BUILD_MODEL / AGY_REVIEW_MODEL (and
# AGY_FIX_MODEL / AGY_ESCALATION_MODEL, read by loop.sh).
#
# Requires: agy on PATH with this repo as a trusted workspace, hwaro, python3,
# Google Chrome (for screenshots), just.
#
# Every prompt (design, build, fix, review) pulls the upstream hwaro-design
# skill fresh on each run (scripts/agent/load-skill.sh) instead of a
# hand-copied excerpt: local checkout at ../hwaro if present, else GitHub raw.
# Override with HWARO_REPO / HWARO_REF if your hwaro checkout lives elsewhere
# or you want a specific ref. DESIGN.md §13 records where this collection
# deliberately overrides that skill.

design_model := env_var_or_default("AGY_DESIGN_MODEL", "Gemini 3.6 Flash (High)")
build_model  := env_var_or_default("AGY_BUILD_MODEL",  "Gemini 3.6 Flash (High)")
review_model := env_var_or_default("AGY_REVIEW_MODEL", "Gemini 3.1 Pro (High)")

default:
    @just --list

# author + insert the manifest entry for a new example (art direction)
design name:
    AGY_MODEL="{{design_model}}" scripts/agent/guarded-run.sh scripts/agent/design.prompt {{name}}

# build the example site from its existing manifest entry
build name:
    AGY_MODEL="{{build_model}}" AGY_TIMEOUT=45m scripts/agent/guarded-run.sh scripts/agent/build.prompt {{name}}

# apply a review-findings file to an existing example
fix name findings:
    AGY_MODEL="{{build_model}}" scripts/agent/guarded-run.sh scripts/agent/fix.prompt {{name}} {{findings}}

# deterministic gates: check-site + silent-failure greps + h1 + prose floor
verify name:
    scripts/agent/verify.sh {{name}}

# headless screenshots (light/dark 1280x720, full, 360px, section, page)
shots name:
    scripts/agent/shots.sh {{name}}

# one vision-review pass over _agent/<name>/*.png (writes findings-r<round>.md)
review name round="1":
    #!/usr/bin/env bash
    set -uo pipefail
    export PEERS="$(scripts/agent/field.sh {{name}})"
    AGY_MODEL="{{review_model}}" ROUND={{round}} scripts/agent/run-agy.sh scripts/agent/review.prompt {{name}}

# the peer set a review judges against (same category), with their thumbnails
field name:
    @scripts/agent/field.sh {{name}}

# autonomous quality loop (verify->shots->review->fix, up to 3 rounds, never blocks)
loop name:
    scripts/agent/loop.sh {{name}}

# semi-manual pipeline: you review the shots yourself and drive `just fix`
new name: (design name) (build name) (verify name) (shots name)
    @echo "── {{name}} pipeline done. Review _agent/{{name}}/*.png against DESIGN.md §16,"
    @echo "── write findings to _agent/{{name}}/findings.md, then: just fix {{name}} _agent/{{name}}/findings.md"

# fully autonomous pipeline: design -> build -> quality loop (never blocks; you inspect, then `just pr`)
full name: (design name) (build name) (loop name)

# branch + commit the finished example and open a PR (run after inspecting)
pr name:
    #!/usr/bin/env bash
    set -euo pipefail
    scripts/sync-tags.sh
    scripts/agent/verify.sh {{name}}
    CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
    if [ "$CURRENT_BRANCH" != "example/{{name}}" ]; then
        git checkout -b "example/{{name}}"
    fi
    git add manifest.json tags.json "examples/{{name}}"
    git commit -m "Add example: {{name}}"
    git push -u origin "example/{{name}}"
    gh pr create --title "Add example: {{name}}" \
      --body "New example \`{{name}}\` built via the agent pipeline (just full {{name}}). Gates: check-site PASS, verify PASS, reviewer APPROVED."
