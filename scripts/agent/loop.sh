#!/usr/bin/env bash
# The autonomous quality loop: verify -> shots -> review -> fix, until the
# reviewer approves and the deterministic gates pass, or MAX_ROUNDS is spent.
#
#   round 1..N:  verify + shots + review
#                pass?  -> exit 0
#                last round? -> exit 1 (human takes over)
#                otherwise fix (builder escalates to a strong model for the
#                final fix) and go again
#
# Usage: scripts/agent/loop.sh <name>
# Env:   MAX_ROUNDS (default 3), AGY_REVIEW_MODEL, AGY_ESCALATION_MODEL

set -uo pipefail
cd "$(dirname "$0")/../.."

name="${1:?usage: loop.sh <name>}"
max="${MAX_ROUNDS:-3}"
review_model="${AGY_REVIEW_MODEL:-Claude Sonnet 4.6 (Thinking)}"
review_fallback="${AGY_REVIEW_FALLBACK_MODEL:-Gemini 3.1 Pro (High)}"
escalation_model="${AGY_ESCALATION_MODEL:-Claude Sonnet 4.6 (Thinking)}"
out="_agent/$name"
mkdir -p "$out"

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
    echo "════ APPROVED in round $round — gates green, reviewer satisfied"
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
  if [ ! -s "$findings" ]; then
    echo "reviewer approved nothing-to-fix but produced no findings file — stopping" >&2
    exit 1
  fi

  if [ "$round" -eq "$max" ]; then
    echo "════ NOT approved after $max rounds — human review needed ($findings)" >&2
    exit 1
  fi

  # the last fix chance gets the strong builder
  fix_model=""
  [ "$round" -eq $((max - 1)) ] && fix_model="$escalation_model"
  echo "════ round $round/$max — fix (${fix_model:-agy default})"
  AGY_MODEL="$fix_model" scripts/agent/guarded-run.sh scripts/agent/fix.prompt "$name" "$findings" || exit 1
done
