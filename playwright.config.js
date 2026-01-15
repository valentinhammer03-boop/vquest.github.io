// playwright.config.js
// Playwright-Konfiguration für Cross-Browser-Tests
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  projects: [
    { name: 'Desktop Chrome', use: { browserName: 'chromium', viewport: { width: 1280, height: 800 } } },
    { name: 'iPhone 13', use: { browserName: 'webkit', ...require('@playwright/test').devices['iPhone 13'] } },
    { name: 'Android Chrome', use: { browserName: 'chromium', ...require('@playwright/test').devices['Pixel 5'] } },
  ],
  webServer: {
    command: 'npx serve .',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
};
module.exports = config;
