+++
title = "End-to-End Tests"
description = "Writing end-to-end tests that validate complete user workflows"
tags = ["e2e-tests", "testing"]
+++

# End-to-End Tests

End-to-end (E2E) tests validate complete user workflows through the full application stack. They interact with the system the same way a real user would -- through the browser, CLI, or API -- and verify that all layers work together.

## Characteristics

| Property | E2E Test |
|----------|----------|
| Scope | Full application stack |
| Dependencies | All real services |
| Execution Time | 5s - 60s per test |
| Isolation | Dedicated test environment |
| Determinism | Moderate -- requires careful management |

## Test Pyramid Placement

E2E tests sit at the top of the pyramid. They provide the highest confidence but are the most expensive to write, run, and maintain.

```
        /\          Fewer tests, higher confidence
       /E2E\        per test, but slower and more
      /------\      brittle. Reserve for critical
     /  Int.  \     user journeys.
    /----------\
   /   Unit     \
  /______________\
```

## Browser-Based E2E Test

```javascript
const { describe, it, expect } = require('crucible-runner');
const { browser } = require('crucible-runner/e2e');

describe('User Registration Flow', () => {
  it('registers a new user and redirects to the dashboard', async () => {
    const page = await browser.newPage();

    // Navigate to the registration page
    await page.goto('http://localhost:3000/register');
    expect(await page.title()).toBe('Create Account');

    // Fill in the registration form
    await page.fill('#name', 'Charlie Test');
    await page.fill('#email', 'charlie@example.com');
    await page.fill('#password', 'SecureP@ss123');
    await page.fill('#password-confirm', 'SecureP@ss123');

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for navigation
    await page.waitForURL('**/dashboard');

    // Verify the dashboard loaded
    expect(await page.textContent('.welcome-message'))
      .toBe('Welcome, Charlie Test');

    // Verify the sidebar shows the user email
    expect(await page.textContent('.user-email'))
      .toBe('charlie@example.com');

    await page.close();
  });

  it('shows validation errors for invalid input', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/register');

    // Submit empty form
    await page.click('button[type="submit"]');

    // Check for validation messages
    const errors = await page.$$('.field-error');
    expect(errors).toHaveLength(4);

    expect(await page.textContent('#name-error')).toBe('Name is required');
    expect(await page.textContent('#email-error')).toBe('Valid email is required');

    await page.close();
  });
});
```

## E2E Test Scenarios

The following table documents the critical user journeys covered by E2E tests:

| Scenario | Steps | Expected Outcome | Priority | Result |
|----------|-------|-------------------|----------|--------|
| User registration | Fill form, submit, verify redirect | Dashboard loads with user name | Critical | PASS |
| User login | Enter credentials, submit | Redirect to dashboard | Critical | PASS |
| Password reset | Request reset, click email link, set new password | Login with new password succeeds | High | PASS |
| Create project | Login, click new project, fill details, save | Project appears in list | High | PASS |
| Delete project | Navigate to project, click delete, confirm | Project removed from list | Medium | PASS |
| Search functionality | Type query, press enter | Results page shows matches | Medium | FAIL |
| Export report | Generate report, click export, choose format | File downloads correctly | Low | SKIP |
| Session timeout | Wait for expiry, attempt action | Redirect to login page | Medium | PASS |

## Page Object Pattern

Organize E2E tests with page objects to reduce duplication and improve maintainability:

```javascript
// pages/login.page.js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = '#email';
    this.passwordInput = '#password';
    this.submitButton = 'button[type="submit"]';
    this.errorMessage = '.login-error';
  }

  async navigate() {
    await this.page.goto('http://localhost:3000/login');
  }

  async login(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.submitButton);
  }

  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }
}

module.exports = { LoginPage };
```

```javascript
// tests/e2e/login.e2e.test.js
const { describe, it, expect } = require('crucible-runner');
const { browser } = require('crucible-runner/e2e');
const { LoginPage } = require('../pages/login.page');

describe('Login', () => {
  it('logs in with valid credentials', async () => {
    const page = await browser.newPage();
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('alice@example.com', 'correct-password');

    await page.waitForURL('**/dashboard');
    expect(page.url()).toContain('/dashboard');

    await page.close();
  });

  it('rejects invalid credentials', async () => {
    const page = await browser.newPage();
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('alice@example.com', 'wrong-password');

    const error = await loginPage.getErrorMessage();
    expect(error).toBe('Invalid email or password');

    await page.close();
  });
});
```

## Retry Strategy for Flaky Tests

E2E tests are more prone to flakiness due to timing, network, and rendering dependencies. Configure retries selectively:

```yaml
# crucible.config.yaml
execution:
  retries: 0          # Default: no retries

  overrides:
    - pattern: "tests/e2e/**"
      retries: 2       # Retry E2E tests up to 2 times
      timeout: 60000   # 60 second timeout for E2E
```

## Best Practices

- **Cover critical paths only** -- E2E tests are expensive; focus on the journeys that matter most to users
- **Use stable selectors** -- Prefer `data-testid` attributes over CSS classes or element structure
- **Manage test data explicitly** -- Seed known data before each test; never depend on data from other tests
- **Parallelize with isolated environments** -- Each worker should have its own database and application instance
- **Screenshot on failure** -- Capture the page state when a test fails to aid debugging
- **Keep tests short** -- An E2E test that takes more than 60 seconds is testing too much in one scenario
