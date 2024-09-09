import { test, expect } from '@playwright/test';

test.describe('Terms of Use Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the terms of use page before each test
    await page.goto('http://localhost:3000/terms-of-use');
  });

  test('should have correct title and header', async ({ page }) => {
    // Check the page title
    await expect(page).toHaveTitle('Terms of Use | AthletiFi');

    // Check the main heading
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Terms of Use');
  });

  test('should display last updated date', async ({ page }) => {
    const lastUpdated = page.locator('text=Last Updated:');
    await expect(lastUpdated).toBeVisible();
    // You might want to check for a specific date, but be aware this might change
    // await expect(lastUpdated).toContainText('January 16, 2024');
  });

  test('should have all required sections', async ({ page }) => {
    const sections = [
      'Acceptance of Terms',
      'Use of Services',
      'Intellectual Property',
      'Privacy',
      'Disclaimers',
      'Limitation of Liability',
      'Indemnification',
      'Changes to Terms',
      'Governing Law',
      'Contact Information',
    ];

    for (const section of sections) {
      const sectionHeading = page.getByRole('heading', { name: `${section}` });
      await expect(sectionHeading).toBeVisible();
    }
  });

  test('should have a visible footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    // Check if the "Home" link in the header works
    await page.click('text=Home');
    await expect(page).toHaveURL('http://localhost:3000/');

    // Navigate back to the Terms of Use page
    await page.goto('http://localhost:3000/terms-of-use');

    // Check if the "Privacy Policy" link in the footer works
    await page.click('footer >> text=Privacy Policy');
    await expect(page).toHaveURL('http://localhost:3000/privacy-policy');
  });

  test('should have correct contact email', async ({ page }) => {
    const contactEmail = page.locator('text=support@athleti.fi');
    await expect(contactEmail).toBeVisible();
    await expect(contactEmail).toHaveAttribute('href', 'mailto:support@athleti.fi');
  });
});