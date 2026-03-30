+++
title = "Integration Tests"
description = "Writing integration tests that verify component interactions"
tags = ["integration-tests", "testing"]
+++

# Integration Tests

Integration tests verify that multiple components work together correctly. They sit in the middle of the test pyramid and test the boundaries between modules, services, and external systems.

## Characteristics

| Property | Integration Test |
|----------|-----------------|
| Scope | Multiple components or services |
| Dependencies | Real (databases, APIs, queues) |
| Execution Time | 100ms - 5s per test |
| Isolation | Per-test database transactions |
| Determinism | High, with proper fixture management |

## When to Write Integration Tests

Integration tests are most valuable at system boundaries:

- Database queries and ORM mappings
- HTTP API endpoints
- Message queue producers and consumers
- File system operations
- Cache interactions
- Third-party service adapters

## Database Integration Test

```javascript
const { describe, it, expect, beforeEach, afterEach } = require('crucible-runner');
const { createTestDatabase, destroyTestDatabase } = require('../fixtures/database');
const { UserRepository } = require('../../src/repositories/user');

describe('UserRepository', () => {
  let db;
  let repo;

  beforeEach(async () => {
    db = await createTestDatabase();
    repo = new UserRepository(db);
  });

  afterEach(async () => {
    await destroyTestDatabase(db);
  });

  it('inserts and retrieves a user', async () => {
    const user = await repo.create({
      name: 'Bob',
      email: 'bob@example.com',
      role: 'member',
    });

    expect(user.id).toBeDefined();

    const found = await repo.findById(user.id);
    expect(found.name).toBe('Bob');
    expect(found.email).toBe('bob@example.com');
  });

  it('enforces unique email constraint', async () => {
    await repo.create({ name: 'Alice', email: 'alice@example.com', role: 'member' });

    await expect(
      repo.create({ name: 'Alicia', email: 'alice@example.com', role: 'member' })
    ).rejects.toThrow('duplicate key');
  });

  it('paginates results correctly', async () => {
    for (let i = 0; i < 25; i++) {
      await repo.create({
        name: `User ${i}`,
        email: `user${i}@example.com`,
        role: 'member',
      });
    }

    const page1 = await repo.list({ page: 1, perPage: 10 });
    const page2 = await repo.list({ page: 2, perPage: 10 });
    const page3 = await repo.list({ page: 3, perPage: 10 });

    expect(page1.items).toHaveLength(10);
    expect(page2.items).toHaveLength(10);
    expect(page3.items).toHaveLength(5);
    expect(page1.total).toBe(25);
  });
});
```

## API Integration Test

```javascript
const { describe, it, expect, beforeAll, afterAll } = require('crucible-runner');
const { startServer, stopServer } = require('../fixtures/server');

describe('POST /api/orders', () => {
  let server;
  let baseUrl;

  beforeAll(async () => {
    server = await startServer({ port: 0 });
    baseUrl = `http://localhost:${server.port}`;
  });

  afterAll(async () => {
    await stopServer(server);
  });

  it('creates an order and returns 201', async () => {
    const response = await fetch(`${baseUrl}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [
          { sku: 'WIDGET-001', quantity: 2, price: 19.99 },
          { sku: 'GADGET-005', quantity: 1, price: 49.99 },
        ],
      }),
    });

    expect(response.status).toBe(201);

    const order = await response.json();
    expect(order.id).toBeDefined();
    expect(order.total).toBe(89.97);
    expect(order.items).toHaveLength(2);
    expect(order.status).toBe('pending');
  });

  it('returns 400 for empty order', async () => {
    const response = await fetch(`${baseUrl}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [] }),
    });

    expect(response.status).toBe(400);

    const error = await response.json();
    expect(error.message).toBe('Order must contain at least one item');
  });
});
```

## Test Case Table: Order Validation

| Scenario | Input | Expected Status | Expected Error | Result |
|----------|-------|----------------|----------------|--------|
| Valid order | 2 items, valid SKUs | 201 | -- | PASS |
| Empty items array | `[]` | 400 | "at least one item" | PASS |
| Missing SKU | `{ quantity: 1 }` | 400 | "SKU required" | PASS |
| Negative quantity | `quantity: -1` | 400 | "positive quantity" | PASS |
| Zero price | `price: 0` | 400 | "positive price" | FAIL |
| Duplicate SKUs | same SKU twice | 201 | -- | PASS |
| Max items exceeded | 101 items | 400 | "max 100 items" | SKIP |

## Fixture Management

Integration tests require external resources. Use Crucible fixtures to manage lifecycle:

```yaml
# crucible.config.yaml
fixtures:
  postgres:
    type: "docker"
    image: "postgres:16"
    ports:
      - "5432:5432"
    env:
      POSTGRES_DB: "crucible_test"
      POSTGRES_USER: "test"
      POSTGRES_PASSWORD: "test"
    health_check:
      command: "pg_isready -U test"
      interval: 1000
      retries: 10

  redis:
    type: "docker"
    image: "redis:7"
    ports:
      - "6379:6379"
    health_check:
      command: "redis-cli ping"
      interval: 500
      retries: 10
```

## Best Practices

- **Use transactions for database tests** -- Roll back after each test to ensure isolation
- **Start services once per suite** -- Use `beforeAll`/`afterAll` for expensive setup like server startup
- **Test real error paths** -- Verify that connection failures, timeouts, and constraint violations are handled correctly
- **Keep fixtures minimal** -- Insert only the data required for each test case
- **Use deterministic IDs** -- Avoid relying on auto-increment ordering across parallel tests
