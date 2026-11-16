// Requires Hwaro, Google Chrome, and Playwright (as in deploy.yml).
// npm install --prefix /tmp/hwaro-browser-tests --no-save playwright
// NODE_PATH=/tmp/hwaro-browser-tests/node_modules node scripts/test-browser.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { chromium } = require('playwright');
const { expect: defaultExpect } = require('playwright/test');
const expect = defaultExpect.configure({ timeout: 2000 });

const root = path.resolve(__dirname, '..');
const sites = require('../manifest.json').examples;
const output = fs.mkdtempSync(path.join(os.tmpdir(), 'hwaro-browser-'));
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  let file = path.resolve(output, '.' + new URL(req.url, 'http://localhost').pathname);
  if (!file.startsWith(output + path.sep)) { res.writeHead(404).end(); return; }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) { res.writeHead(404).end(); return; }
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
  res.end(fs.readFileSync(file));
});

async function main() {
  let browser;
  let passed = 0;
  let failed = 0;
  async function check(label, run) {
    try { await run(); passed++; console.log('PASS: ' + label); }
    catch (error) { failed++; console.error('FAIL: ' + label + '\n' + error.message); }
  }
  try {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const origin = 'http://127.0.0.1:' + server.address().port;
    for (const site of sites) {
      execFileSync('hwaro', ['build', '--base-url', origin + '/' + site.name, '-o', path.join(output, site.name)], {
        cwd: path.join(root, 'examples', site.name), stdio: 'pipe'
      });
    }
    browser = await chromium.launch({ channel: 'chrome' });
    const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
    context.setDefaultTimeout(5000);
    context.setDefaultNavigationTimeout(10000);
    // Cache the allowed CDN dependency once; font latency is unrelated to search.
    const cdn = await context.request.get('https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js');
    assert(cdn.ok(), 'Fuse.js CDN unavailable');
    const fuse = await cdn.body();
    await context.route('https://cdn.jsdelivr.net/npm/fuse.js@7.0.0*', route => route.fulfill({ body: fuse, contentType: 'application/javascript' }));
    await context.route('https://fonts.googleapis.com/**', route => route.fulfill({ body: '', contentType: 'text/css' }));

    for (const site of sites) {
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      const base = origin + '/' + site.name;
      await page.goto(base + '/');
      await check(site.name + ' mobile widths on every page', async () => {
        await page.setViewportSize({ width: 360, height: 900 });
        const files = fs.readdirSync(path.join(output, site.name), { recursive: true }).filter(file => file.endsWith('.html'));
        assert(files.length > 0, 'No rendered pages');
        const overflow = [];
        for (const file of files) {
          await page.goto(base + '/' + file);
          const width = await page.evaluate(() => document.documentElement.scrollWidth);
          if (width > 360) overflow.push({ file, width });
        }
        await page.setViewportSize({ width: 1280, height: 720 });
        assert.deepEqual(overflow, []);
      });
      await page.goto(base + '/');

      if (site.scheme === 'auto') {
        await check(site.name + ' theme toggle and persistence', async () => {
          await page.emulateMedia({ colorScheme: 'dark' });
          const toggle = page.locator('#theme-toggle, #theme-button');
          await toggle.click();
          await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
          await toggle.click();
          await page.reload();
          await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
        });
      }

      if (site.features.search_ui !== 'none') {
        let release;
        let requested = false;
        const gate = new Promise(resolve => { release = resolve; });
        await page.route('**/search.json', async route => { requested = true; await gate; await route.continue(); });
        await page.goto(base + '/');
        if (site.features.search_ui === 'page') await page.goto(base + '/search/');
        else if (['palette', 'overlay'].includes(site.features.search_ui)) {
          await page.locator('#search-open, #search-trigger, #search-button').click();
        }
        const data = JSON.parse(fs.readFileSync(path.join(output, site.name, 'search.json')));
        const entry = data.find(item => item.url.split('/').filter(Boolean).length > 2);
        assert(entry, site.name + ' has no searchable section entries');
        const input = page.locator('#search-input, #palette-input, #rule-search-input, #log-filter, [data-finder-input]').first();
        const results = page.locator('#search-results a, #palette-results a, #rule-search-results a, #find-results a, #log a, #issues-list a');
        const label = site.name === 'tsugi' ? entry.title.split(' — ')[1] : entry.title;
        const matching = results.filter({ hasText: label }).first();
        await input.fill(entry.title);
        await expect.poll(() => requested, { message: site.name + ' must request the search index' }).toBe(true);
        const loaded = page.waitForResponse(response => response.url().endsWith('/search.json'));
        release();
        await loaded;
        await check(site.name + ' query entered while loading', async () => {
          await expect(matching).toBeVisible();
          // An unchanged original listing is not a successful search.
          await expect(results.filter({ visible: true }).first()).toContainText(label);
        });
        // A second input event also exercises URL rendering independently of loading.
        await input.fill(entry.title + ' ');
        await check(site.name + ' result links', async () => {
          await expect(matching).toBeVisible();
          if (site.name === 'seoulnight') {
            await expect(matching.locator('.search-result-section')).toHaveText('notes');
          }
          for (const href of await results.filter({ visible: true }).evaluateAll(links => links.map(link => link.href))) {
            assert(data.some(item => new URL(item.url, origin).href === href), 'URL was prefixed twice: ' + href);
            assert((await page.request.get(href)).ok(), 'Search result is unreachable: ' + href);
          }
        });

        if (site.name === 'notch') {
          await page.reload();
          let resume;
          let pending = false;
          const blocked = new Promise(resolve => { resume = resolve; });
          await page.route('**/search.json', async route => { pending = true; await blocked; await route.continue(); });
          await input.fill(entry.title);
          await expect.poll(() => pending, { message: 'notch must request the search index again' }).toBe(true);
          await input.fill('');
          const done = page.waitForResponse(response => response.url().endsWith('/search.json'));
          resume();
          await done;
          await page.waitForLoadState('networkidle');
          await check('notch clearing a pending query', async () => {
            await expect(page.locator('#find-results')).toBeHidden();
            await expect(page.locator('#release-list')).toBeVisible();
          });
        }
        if (['palette', 'overlay'].includes(site.features.search_ui)) {
          await check(site.name + ' keyboard search navigation', async () => {
            await input.press('Escape');
            await expect(page.getByRole('dialog')).toBeHidden();
            const trigger = page.locator('#search-open, #search-trigger, #search-button');
            await expect(trigger).toBeFocused();
            await trigger.click();
            await input.fill(entry.title);
            await expect(matching).toBeVisible();
            await input.press('ArrowDown');
            const active = await input.getAttribute('aria-activedescendant');
            assert(active, 'ArrowDown must select a search result');
            const href = await page.locator('#' + active + ' a').getAttribute('href');
            await input.press('Enter');
            await page.waitForURL(new URL(href, origin).href);
            await expect(page.locator('main')).toBeVisible();
          });
        } else await input.fill('');
      }
      await check(site.name + ' JavaScript errors', async () => assert.deepEqual(errors, []));
      await page.close();
    }
    console.log(`Browser checks: ${passed} passed, ${failed} failed`);
    if (failed) process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
    fs.rmSync(output, { recursive: true, force: true });
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
