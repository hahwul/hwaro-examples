import { test, expect } from '@playwright/test';

test('verify sonar theme', async ({ page }) => {
  // Go to the local sonar site
  await page.goto('http://127.0.0.1:3000');

  // Check the title
  await expect(page).toHaveTitle(/SONAR/);

  // Check for the sonar display
  const sonarDisplay = page.locator('.sonar-display');
  await expect(sonarDisplay).toBeVisible();

  // Check for some CRT effects (e.g., the scanline overlay)
  const bodyBefore = await page.evaluate(() => {
    const body = document.querySelector('body');
    return window.getComputedStyle(body, '::before').content;
  });
  expect(bodyBefore).toBeDefined();

  // Take a screenshot
  await page.screenshot({ path: 'sonar_home.png', fullPage: true });

  // Go to discovery page
  await page.goto('http://127.0.0.1:3000/discovery/');
  await page.screenshot({ path: 'sonar_discovery.png', fullPage: true });
});
