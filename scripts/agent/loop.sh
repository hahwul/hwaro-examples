#!/usr/bin/env bash
# The autonomous quality loop: verify -> shots -> review -> fix, until the
# reviewer approves and the deterministic gates pass, or MAX_ROUNDS is spent.
#
#   round 1..N:  verify + shots + review
#                approved + gates green?  -> report, exit 0
#                last round, still open?  -> report best effort, exit 0
#                otherwise fix (builder escalates to a strong model for the
#                final fix) and go again
#
# It never blocks the pipeline: after its best effort it always exits 0 and
# prints how to preview (hwaro serve) and ship (just pr) the result. The
# quality sign-off belongs to the human who runs `just full` and inspects
# the shots — this loop's job is to get agy as close as it can, then report.
#
# Usage: scripts/agent/loop.sh <name>
# Env:   MAX_ROUNDS (default 3), AGY_REVIEW_MODEL, AGY_ESCALATION_MODEL

set -uo pipefail
cd "$(dirname "$0")/../.."

name="${1:?usage: loop.sh <name>}"
max="${MAX_ROUNDS:-3}"
review_model="${AGY_REVIEW_MODEL:-Gemini 3.1 Pro (High)}"
review_fallback="${AGY_REVIEW_FALLBACK_MODEL:-Gemini 3.5 Flash (High)}"
escalation_model="${AGY_ESCALATION_MODEL:-Gemini 3.1 Pro (High)}"
out="_agent/$name"
mkdir -p "$out"

# final report — the loop never blocks; it always ends here with the outcome
# and how to preview + ship. Quality sign-off is the human's, post-inspection.
summary() {
  echo
  echo "════════════════════════════════════════════════════════════════"
  case "$1" in
    APPROVED) echo "════ $name — APPROVED: reviewer clean, gates green." ;;
    CLEAN)    echo "════ $name — gates green; reviewer returned no findings." ;;
    OPEN)     echo "════ $name — best effort after $max rounds; agy could not"
              echo "════ clear every item. Its remaining calls (triage yourself,"
              echo "════ some may be false positives): $out/findings-r$max.md" ;;
    FIXERR)   echo "════ $name — a fix round errored; site left at its last"
              echo "════ built state. Latest review: $out/findings-r$round.md" ;;
  esac
  echo "════"
  echo "════ Preview:  hwaro serve -i examples/$name"
  echo "════ Shots:    $out/"
  echo "════ Ship:     just pr $name"
  echo "════════════════════════════════════════════════════════════════"
}

# quality anchor for the reviewer (generate once; non-fatal if it fails)
[ -f "_agent/aerogram/home-light-720.png" ] || scripts/agent/shots.sh aerogram || true

for round in $(seq 1 "$max"); do
  echo "════ round $round/$max — verify"
  verify_log="$out/verify-r$round.log"
  verify_ok=1
  scripts/agent/verify.sh "$name" | tee "$verify_log" || verify_ok=0

  echo "════ round $round/$max — shots"
  rm -f "$out"/*.png
  scripts/agent/shots.sh "$name"

  echo "════ round $round/$max — review ($review_model)"
  findings="$out/findings-r$round.md"
  rm -f "$findings"
  review_log=$(AGY_MODEL="$review_model" ROUND="$round" \
    scripts/agent/run-agy.sh scripts/agent/review.prompt "$name" | tee /dev/stderr) || true
  # inconclusive review (no verdict, no findings — e.g. model quota returns
  # empty output): retry once on the fallback model before failing
  if ! printf '%s' "$review_log" | grep -q 'VERDICT:' && [ ! -s "$findings" ]; then
    echo "════ review returned no verdict — retrying on $review_fallback"
    review_log=$(AGY_MODEL="$review_fallback" ROUND="$round" \
      scripts/agent/run-agy.sh scripts/agent/review.prompt "$name" | tee /dev/stderr) || true
  fi
  approved=0
  printf '%s' "$review_log" | grep -q 'VERDICT: APPROVED' && approved=1

  if [ "$approved" -eq 1 ] && [ "$verify_ok" -eq 1 ]; then
    summary APPROVED
    exit 0
  fi

  # collect what to fix: reviewer findings and/or verify failures
  if [ "$verify_ok" -eq 0 ]; then
    {
      echo ""
      echo "ALSO: the deterministic gate (scripts/agent/verify.sh $name) FAILED with:"
      grep -E 'FAIL|WARN' "$verify_log" | sed 's/^/  /'
      echo "Every FAIL line above must be fixed too; re-run the script to confirm."
    } >> "$findings"
  fi
  # gates green and the reviewer wrote nothing actionable — nothing to fix
  if [ ! -s "$findings" ]; then
    summary CLEAN
    exit 0
  fi

  # last round: we've done our best — report and hand back to the human
  if [ "$round" -eq "$max" ]; then
    summary OPEN
    exit 0
  fi

  # the last fix chance gets the strong builder
  fix_model=""
  [ "$round" -eq $((max - 1)) ] && fix_model="$escalation_model"
  echo "════ round $round/$max — fix (${fix_model:-agy default})"
  if ! AGY_MODEL="$fix_model" scripts/agent/guarded-run.sh scripts/agent/fix.prompt "$name" "$findings"; then
    summary FIXERR
    exit 0
  fi
done
