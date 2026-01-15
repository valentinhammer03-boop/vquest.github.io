import { test as base, expect, devices } from '@playwright/test';

const testIphone = base.extend({
  contextOptions: async ({}, use) => {
    await use({ ...devices['iPhone 13'] });
  },
});

const testAndroid = base.extend({
  contextOptions: async ({}, use) => {
    await use({ ...devices['Pixel 5'] });
  },
});

testIphone('Spracheingabe funktioniert auf iPhone', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('#mic-trigger');
  await expect(page.locator('#status')).toContainText(['Listening', 'Ready']);
});

testAndroid('Spracheingabe funktioniert auf Android', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('#mic-trigger');
  await expect(page.locator('#status')).toContainText(['Listening', 'Ready']);
});
