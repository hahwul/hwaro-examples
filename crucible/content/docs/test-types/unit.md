+++
title = "Unit Tests"
description = "Writing effective unit tests with Crucible"
tags = ["unit-tests", "testing"]
+++

# Unit Tests

Unit tests verify individual functions, methods, or classes in isolation. They form the base of the test pyramid and should make up the majority of your test suite.

## Characteristics

| Property | Unit Test |
|----------|-----------|
| Scope | Single function or method |
| Dependencies | Mocked or stubbed |
| Execution Time | < 50ms per test |
| Isolation | Complete -- no shared state |
| Determinism | Must be 100% deterministic |

## Writing a Unit Test

A unit test follows the Arrange-Act-Assert pattern:

```javascript
const { describe, it, expect } = require('crucible-runner');
const { calculateDiscount } = require('../../src/pricing');

describe('calculateDiscount', () => {
  it('applies percentage discount to the price', () => {
    // Arrange
    const price = 100.00;
    const discountPercent = 15;

    // Act
    const result = calculateDiscount(price, discountPercent);

    // Assert
    expect(result).toBe(85.00);
  });

  it('returns original price when discount is zero', () => {
    const result = calculateDiscount(50.00, 0);
    expect(result).toBe(50.00);
  });

  it('throws when discount exceeds 100 percent', () => {
    expect(() => calculateDiscount(50.00, 150)).toThrow('Discount cannot exceed 100%');
  });

  it('handles floating point precision correctly', () => {
    const result = calculateDiscount(10.00, 33.33);
    expect(result).toBeCloseTo(6.67, 2);
  });
});
```

## Test Case Table

The following table documents expected behavior for the `validateEmail` function:

| Input | Expected Output | Result |
|-------|----------------|--------|
| `"user@example.com"` | `true` | PASS |
| `"user@sub.example.com"` | `true` | PASS |
| `"user+tag@example.com"` | `true` | PASS |
| `""` | `false` | PASS |
| `"not-an-email"` | `false` | PASS |
| `"@example.com"` | `false` | PASS |
| `"user@"` | `false` | PASS |
| `"user@.com"` | `false` | FAIL |
| `null` | throws `TypeError` | PASS |

## Mocking Dependencies

Unit tests must isolate the code under test. Use mocks and stubs to replace external dependencies:

```javascript
const { describe, it, expect, mock } = require('crucible-runner');
const { UserService } = require('../../src/services/user');

describe('UserService.getProfile', () => {
  it('returns user profile from the repository', async () => {
    // Create a mock repository
    const mockRepo = mock({
      findById: async (id) => ({
        id: id,
        name: 'Alice',
        email: 'alice@example.com',
      }),
    });

    const service = new UserService(mockRepo);
    const profile = await service.getProfile('usr_123');

    expect(profile.name).toBe('Alice');
    expect(mockRepo.findById).toHaveBeenCalledWith('usr_123');
    expect(mockRepo.findById).toHaveBeenCalledTimes(1);
  });

  it('throws NotFoundError when user does not exist', async () => {
    const mockRepo = mock({
      findById: async () => null,
    });

    const service = new UserService(mockRepo);

    await expect(service.getProfile('usr_999'))
      .rejects.toThrow('User not found');
  });
});
```

## Assertion Reference

Common assertions for unit tests:

| Assertion | Description | Example |
|-----------|-------------|---------|
| `toBe(value)` | Strict equality | `expect(1 + 1).toBe(2)` |
| `toEqual(value)` | Deep equality | `expect(obj).toEqual({ a: 1 })` |
| `toBeCloseTo(n, d)` | Float comparison | `expect(0.1 + 0.2).toBeCloseTo(0.3, 5)` |
| `toBeTruthy()` | Truthy check | `expect("hello").toBeTruthy()` |
| `toBeFalsy()` | Falsy check | `expect(0).toBeFalsy()` |
| `toContain(item)` | Array/string contains | `expect([1, 2, 3]).toContain(2)` |
| `toThrow(msg)` | Exception check | `expect(fn).toThrow('error')` |
| `toHaveLength(n)` | Length check | `expect([1, 2]).toHaveLength(2)` |
| `toMatch(regex)` | Regex match | `expect(str).toMatch(/^hello/)` |
| `toBeNull()` | Null check | `expect(result).toBeNull()` |

## Best Practices

- **One assertion per concept** -- A test should verify one behavior, though multiple assertions for a single concept are fine
- **Descriptive names** -- Test names should read as specifications: "returns empty array when no results found"
- **No shared mutable state** -- Each test must set up its own data; never rely on order of execution
- **Test edge cases** -- Empty inputs, boundary values, null, undefined, negative numbers, and very large inputs
- **Avoid testing implementation** -- Assert on outputs and observable behavior, not internal method calls
