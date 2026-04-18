+++
title = "Targeting Rules"
weight = 2
date = "2025-08-19"
description = "Control which users see a feature using targeting rules"
+++

# Targeting Rules

Targeting rules determine which users receive a particular flag variation. Rules are evaluated in order, and the first matching rule wins.

## User attributes

Every flag evaluation requires a user context with at least an `id` field. Additional attributes enable more granular targeting.

```typescript
const user = {
  id: 'user-456',
  email: 'alex@example.com',
  attributes: {
    plan: 'pro',
    country: 'DE',
    signupDate: '2025-03-15',
    betaTester: true,
  },
};
```

## Rule types

| Rule Type | Operator | Example |
|---|---|---|
| Attribute match | `equals`, `contains`, `startsWith` | `plan equals "enterprise"` |
| Numeric comparison | `greaterThan`, `lessThan` | `age greaterThan 18` |
| Set membership | `in`, `notIn` | `country in ["US", "CA", "GB"]` |
| Date comparison | `before`, `after` | `signupDate after "2025-01-01"` |
| Segment | `inSegment` | `inSegment "beta-users"` |

## Segments

Segments are reusable groups of users defined by rules. Instead of duplicating targeting logic across flags, reference a segment by name.

```json
{
  "name": "beta-users",
  "rules": [
    { "attribute": "betaTester", "operator": "equals", "value": true },
    { "attribute": "plan", "operator": "in", "value": ["pro", "enterprise"] }
  ],
  "match": "all"
}
```

The `match` field controls whether all rules must match (`"all"`) or any single rule (`"any"`).

## Percentage rollout

Gradually roll out a feature to a percentage of users. Beacon uses consistent hashing on the user ID to ensure the same user always receives the same variation.

```json
{
  "flag": "new-checkout",
  "rules": [
    {
      "type": "percentage",
      "percentage": 25,
      "variation": "enabled"
    }
  ],
  "defaultVariation": "disabled"
}
```

| Rollout | Users affected | Recommended for |
|---|---|---|
| 5% | Canary group | Initial validation |
| 25% | Broader test | Performance monitoring |
| 50% | Half of traffic | A/B experiment |
| 100% | All users | Full rollout |

> Percentage rollouts are sticky. A user assigned to the 25% bucket remains in it even if you increase the rollout to 50%. This prevents users from switching between variations during a rollout.

## Rule priority

Rules are evaluated top to bottom. Place more specific rules above general ones.

1. Individual user overrides (for internal testing)
2. Segment-based rules (for beta groups)
3. Attribute-based rules (for plan-level targeting)
4. Percentage rollout (for gradual release)
5. Default variation (fallback for everyone else)
