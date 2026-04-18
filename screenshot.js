const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Wait a moment for server to fully start
  await new Promise(resolve => setTimeout(resolve, 2000));

  await page.goto('http://127.0.0.1:3000/');
  await page.waitForTimeout(1000); // Wait for animations
  await page.screenshot({ path: 'void-chromatica-screenshot.png' });

  await browser.close();
})();
