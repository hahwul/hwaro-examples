const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // View homepage
  await page.goto('http://127.0.0.1:3000');
  await page.screenshot({ path: 'prism-home.png', fullPage: true });
  console.log('Homepage screenshot saved.');

  // View Getting Started section
  await page.goto('http://127.0.0.1:3000/getting-started/');
  await page.screenshot({ path: 'prism-getting-started.png', fullPage: true });
  console.log('Getting Started screenshot saved.');

  // View Guide section
  await page.goto('http://127.0.0.1:3000/guide/');
  await page.screenshot({ path: 'prism-guide.png', fullPage: true });
  console.log('Guide screenshot saved.');

  await browser.close();
})();
