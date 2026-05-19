+++
title = "How we read the board"
description = "Velocity Board is opinionated. Here is the opinion."
+++

Velocity Board is the product-analytics surface for a small team that ships every week. It is not a chart farm. The board is opinionated about which numbers a small team should look at, and unapologetic about hiding the ones that do not help that team make decisions.

## The four numbers

There are four numbers on the board that we believe matter every week. Anything else is interesting context or a debugging detail.

1. **Weekly active accounts.** Not users, not sessions — accounts. Multi-seat teams count once.
2. **Week-over-week retention.** Of the accounts that were active last week, what fraction were active this week. The rolling six-week curve is the second most-watched number on the board.
3. **Time to first value.** The median time from sign-up to the first event that the customer would have paid us for. We sample this nightly across the previous seven days.
4. **Hard errors per thousand events.** Anything the client reports as a hard error. We treat the rate, not the absolute count.

> If a number is not on this list, it is here to help us understand one of the four numbers above. Promotion onto the four list is a quarterly discussion, not a Slack thread.

## The discipline

The board is regenerated nightly from the events warehouse. There is no real-time path; we do not want to optimise for a number that has not had a chance to settle. When you see today's number, it is the close-of-yesterday number, and we are happy with that.

We also do not display a number we do not trust. If the events pipeline missed a window, the affected panel turns into a striped placeholder and surfaces an incident link. We would rather show nothing than show a number that we will spend the morning explaining.
