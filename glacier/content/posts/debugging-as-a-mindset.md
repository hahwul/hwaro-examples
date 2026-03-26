+++
title = "Debugging as a Mindset"
date = "2026-02-22"
description = "Debugging is not a technical skill. It is a way of thinking: systematic, patient, and honest about what you do not know."
tags = ["debugging", "engineering", "craft"]
categories = ["engineering"]
template = "post"
+++

The difference between a junior and senior engineer is not what they know. It is how they behave when something breaks. Junior engineers guess. Senior engineers investigate. The gap between these two approaches is the gap between hours of frustration and minutes of focused diagnosis.

## The Scientific Method

Debugging is applied science. You observe a symptom. You form a hypothesis about its cause. You design an experiment to test that hypothesis. You execute the experiment and observe the result. You either confirm or refute the hypothesis and repeat.

This sounds obvious when written out. In practice, most engineers skip directly from observation to attempted fix. They see an error, make a change that seems related, and hope it works. When it does not, they make another change. This is not debugging. It is random mutation.

## Binary Search for Bugs

The single most powerful debugging technique is bisection. If the system worked at point A and fails at point B, the cause lies somewhere between them. Find the midpoint, test there, and repeat. This works for time (git bisect), for code (comment out half the logic), and for systems (bypass half the components).

```bash
# Git bisect automates binary search through commits
git bisect start
git bisect bad HEAD
git bisect good v1.2.0
# Git checks out the midpoint. Test and mark good/bad.
```

Bisection is powerful because it does not require understanding. You do not need to know why something fails. You only need to know whether it fails. Each test eliminates half of the remaining possibilities.

## Reading Before Writing

When confronted with a bug, the instinct is to start changing code. Resist this instinct. Read first. Read the error message carefully, word by word. Read the stack trace from bottom to top. Read the relevant source code. Read the documentation for the APIs involved.

Most bugs become obvious once you actually read the evidence in front of you. The error message often says exactly what went wrong. The stack trace often points to exactly where it went wrong. Engineers skip this step because reading feels passive and unproductive. It is the opposite.

## Rubber Duck Debugging

Explaining the problem aloud, even to an inanimate object, is remarkably effective. The act of articulating forces you to be precise about what you know and what you assume. The moment you say "and then this function returns... well, I think it returns..." you have found the gap in your understanding. That gap is usually where the bug lives.

## The Emotional Dimension

Debugging is emotionally difficult. The system is telling you that your mental model is wrong, and accepting this takes humility. The temptation is to blame the tool, the library, the compiler, the operating system. Sometimes these are genuinely at fault. Usually, they are not.

Assume the bug is in your code until you have strong evidence otherwise. This assumption is correct the vast majority of the time, and it focuses your investigation on the territory you can actually change.

## Building the Habit

Debugging is a skill that improves with practice, but only if you practice deliberately. After fixing a bug, take five minutes to write down what happened, what the cause was, and how you found it. Over time, this log becomes a personal field guide to the failure modes you encounter most often. Patterns emerge. You get faster. The mindset becomes second nature.
