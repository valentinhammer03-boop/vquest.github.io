// tests/ui.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Responsives Layout und Plus-Button', () => {
  test('Plus-Button und Header im Notizen-Panel immer sichtbar', async ({ page }) => {
    await page.goto('http://localhost:3000');
    // Notizen-Panel öffnen
    await page.locator('.trigger-btn').nth(1).click();
    // Header im Notizen-Panel sichtbar
    const header = page.locator('#postit-panel-header');
    await expect(header).toBeVisible();
    // Plus-Button im Header sichtbar und klickbar
    const plusBtn = header.locator('.add-btn');
    await expect(plusBtn).toBeVisible();
    await expect(plusBtn).toBeEnabled();
  });

  test('Kein weißer Bildschirm nach Plus-Button im Notizen-Panel', async ({ page }) => {
    await page.goto('http://localhost:3000');
    // Notizen-Panel öffnen
    await page.locator('.trigger-btn').nth(1).click();
    const header = page.locator('#postit-panel-header');
    const plusBtn = header.locator('.add-btn');
    await expect(plusBtn).toBeVisible();
    await plusBtn.click();
    // Nach dem Klick sollte weiterhin das Panel sichtbar sein
    await expect(header).toBeVisible();
    // Es sollte mindestens ein PostIt geben
    await expect(page.locator('#postit-container .postit')).toHaveCount(1);
  });
});
