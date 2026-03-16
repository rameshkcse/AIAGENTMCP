const { test, expect } = require('@playwright/test');

test.describe('Example Tests', () => {
  test('should have title', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('should find element', async ({ page }) => {
    await page.goto('https://playwright.dev');
    const getStarted = page.locator('text=Get started');
    await expect(getStarted).toBeVisible();
  });

  test('should navigate and check URL', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await page.locator('text=Get started').click();
    await expect(page).toHaveURL(/.*intro/);
  });
});