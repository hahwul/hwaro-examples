+++
title = "A/B Tests"
weight = 1
date = "2025-08-21"
description = "Setting up and running A/B tests with Beacon"
+++

# A/B Tests

An A/B test compares two or more variations of a feature to determine which performs better against a defined metric. Beacon handles traffic splitting, event collection, and statistical analysis.

## Creating an experiment

Every experiment requires three components: a hypothesis, one or more metrics, and an audience definition.

```json
{
  "name": "checkout-redesign-q3",
  "hypothesis": "The streamlined checkout will increase conversion rate by at least 5%",
  "flag": "checkout-layout",
  "variations": [
    { "key": "control", "name": "Standard checkout", "weight": 50 },
    { "key": "streamlined", "name": "Streamlined checkout", "weight": 50 }
  ],
  "metrics": ["checkout-conversion", "revenue-per-user"],
  "audience": {
    "percentage": 100,
    "segments": []
  },
  "startDate": "2025-09-01",
  "endDate": "2025-09-28"
}
```

## Experiment lifecycle

| Phase | Duration | Activity |
|---|---|---|
| Setup | 1-2 days | Define hypothesis, metrics, and audience |
| Burn-in | 2-3 days | Collect initial data, verify instrumentation |
| Running | 1-4 weeks | Collect data until statistical significance |
| Analysis | 1-2 days | Review results and make a decision |
| Rollout | Immediate | Ship the winning variation or roll back |

## Traffic allocation

Beacon splits traffic using consistent hashing. Once a user is assigned to a variation, they remain in that variation for the duration of the experiment.

### Multi-armed experiments

You can test more than two variations:

```json
{
  "variations": [
    { "key": "control", "weight": 34 },
    { "key": "variant-a", "weight": 33 },
    { "key": "variant-b", "weight": 33 }
  ]
}
```

> Ensure variation weights sum to 100. Beacon will reject configurations where weights do not add up correctly.

## Audience filtering

Limit your experiment to specific user segments to reduce noise and focus on the target population.

| Filter | Example | Purpose |
|---|---|---|
| Country | `country in ["US", "CA"]` | Test in specific markets |
| Plan | `plan equals "pro"` | Test with paying users only |
| New users | `signupDate after "2025-08-01"` | Avoid bias from existing habits |
| Segment | `inSegment "mobile-users"` | Platform-specific experiments |

## Best practices

- State your hypothesis before starting the experiment
- Run the experiment for at least two full business cycles (typically two weeks)
- Avoid peeking at results before the experiment reaches significance
- Document the decision and reasoning after each experiment
