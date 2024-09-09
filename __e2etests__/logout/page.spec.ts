import { test, expect } from '@playwright/test';

test.describe('Logout Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the logout page before each test
    await page.goto('http://localhost:3000/logout');
  });

  test('should have correct title and header', async ({ page }) => {
    // Check the page title
    await expect(page).toHaveTitle('Athletifi | The Future of Sports');

    // Check the main heading
    const heading = page.locator('text=Logout successful!');
    await expect(heading).toBeVisible();
  });

  test('should display logout confirmation message', async ({ page }) => {
    const message = page.locator('text=Now that you are logged out');
    await expect(message).toBeVisible();
  });

  test('should have link to home page', async ({ page }) => {
    const homeLink = page.locator('a:has-text("home page")');
    await expect(homeLink).toBeVisible();
    await expect(homeLink).toHaveAttribute('href', '/');
  });

  test('should have link to login page', async ({ page }) => {
    const loginLink = page.locator('a:has-text("log back in")');
    await expect(loginLink).toBeVisible();
    await expect(loginLink).toHaveAttribute('href', '/login');
  });

  test('should navigate to home page when clicking home link', async ({ page }) => {
    await page.click('a:has-text("home page")');
    await expect(page).toHaveURL('http://localhost:3000/', { timeout: 10000 });
  });

  test('should navigate to login page when clicking login link', async ({ page }) => {
    await page.click('a:has-text("log back in")');
    await expect(page).toHaveURL('http://localhost:3000/login', { timeout: 10000 });
  });

  test('should clear certain data from local storage', async ({ page }) => {
    // This test checks if the 'hasShownModal' item is removed from local storage
    await page.evaluate(() => {
      localStorage.setItem('hasShownModal', 'true');
    });

    await page.reload();

    const hasShownModal = await page.evaluate(() => localStorage.getItem('hasShownModal'));
    expect(hasShownModal).toBeNull();
  });

  test('should have working navigation links in header and footer', async ({ page }) => {
    // Check header links
    await page.click('header >> text=About us');
    await expect(page).toHaveURL('http://localhost:3000/about-us');

    await page.goto('http://localhost:3000/logout');

    await page.click('header >> text=Blog');
    await expect(page).toHaveURL('http://localhost:3000/blog?page=1');

    await page.goto('http://localhost:3000/logout');

    // Check footer links
    await page.click('footer >> text=Privacy Policy');
    await expect(page).toHaveURL('http://localhost:3000/privacy-policy');

    await page.goto('http://localhost:3000/logout');

    await page.click('footer >> text=Terms of Use');
    await expect(page).toHaveURL('http://localhost:3000/terms-of-use');
  });
});