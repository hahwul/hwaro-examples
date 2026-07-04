# hwaro-examples · agent orchestration
#
# `just new <name>` drives agy (Antigravity CLI) end-to-end: a strong model
# authors the manifest entry, the default (cheap) model builds the site, and
# deterministic scripts verify it. Screenshots for the DESIGN.md §16 design
# review land in _agent/<name>/ — that judgment stays with a human or a
# strong model, never with the builder's self-report.
#
# Requires: agy on PATH with this repo as a trusted workspace, hwaro, python3,
# Google Chrome (for screenshots), just.

design_model := env_var_or_default("AGY_DESIGN_MODEL", "Gemini 3.5 Flash (High)")
review_model := env_var_or_default("AGY_REVIEW_MODEL", "Gemini 3.1 Pro (High)")

default:
    @just --list

# author + insert the manifest entry for a new example (strong model)
design name:
    AGY_MODEL="{{design_model}}" scripts/agent/guarded-run.sh scripts/agent/design.prompt {{name}}

# build the example site from its existing manifest entry (agy default model)
build name:
    AGY_TIMEOUT=45m scripts/agent/guarded-run.sh scripts/agent/build.prompt {{name}}

# apply a review-findings file to an existing example (agy default model)
fix name findings:
    scripts/agent/guarded-run.sh scripts/agent/fix.prompt {{name}} {{findings}}

# deterministic gates: check-site + silent-failure greps + h1 + prose floor
verify name:
    scripts/agent/verify.sh {{name}}

# headless screenshots (light/dark 1280x720, full, 360px, section, page)
shots name:
    scripts/agent/shots.sh {{name}}

# one vision-review pass over _agent/<name>/*.png (writes findings-r<round>.md)
review name round="1":
    AGY_MODEL="{{review_model}}" ROUND={{round}} scripts/agent/run-agy.sh scripts/agent/review.prompt {{name}}

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
    git checkout -b "example/{{name}}"
    git add manifest.json tags.json "examples/{{name}}"
    git commit -m "Add example: {{name}}"
    git push -u origin "example/{{name}}"
    gh pr create --title "Add example: {{name}}" \
      --body "New example \`{{name}}\` built via the agent pipeline (just full {{name}}). Gates: check-site PASS, verify PASS, reviewer APPROVED."
