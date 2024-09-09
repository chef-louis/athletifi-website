import { test, expect } from '@playwright/test';

test.describe('Privacy Policy Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the privacy policy page before each test
    await page.goto('http://localhost:3000/privacy-policy');
  });

  test('should have correct title and header', async ({ page }) => {
    // Check the page title
    await expect(page).toHaveTitle('Terms of Use | AthletiFi');

    // Check the main heading
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Privacy Policy');
  });

  test('should display last updated date', async ({ page }) => {
    const lastUpdated = page.locator('text=Last Updated:');
    await expect(lastUpdated).toBeVisible();
    // You might want to check for a specific date, but be aware this might change
    // await expect(lastUpdated).toContainText('January 16, 2024');
  });

  test('should have all required sections', async ({ page }) => {
    const sections = [
      'Introduction',
      'Information Collection',
      'Use of Information',
      'Sharing of Information',
      'Data Security',
      'Your Rights',
      'Changes to This Policy',
      'Contact Us',
    ];

    for (const section of sections) {
      const sectionHeading = page.getByRole('heading', { name: `${section}` });
      await expect(sectionHeading).toBeVisible();
    }

    const additionalSectionHeading = page.getByRole('heading', { name: /Children.*Privacy$/ });
    await expect(additionalSectionHeading).toBeVisible();
    
  });

  test('should have a visible footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    // Check if the "Home" link in the header works
    await page.click('text=Home');
    await expect(page).toHaveURL('http://localhost:3000/');

    // Navigate back to the Privacy Policy page
    await page.goto('http://localhost:3000/privacy-policy');

    // Check if the "Terms of Use" link in the footer works
    await page.click('footer >> text=Terms of Use');
    await expect(page).toHaveURL('http://localhost:3000/terms-of-use');
  });

  test('should have correct contact email', async ({ page }) => {
    const contactEmail = page.locator('text=support@athleti.fi');
    await expect(contactEmail).toBeVisible();
    await expect(contactEmail).toHaveAttribute('href', 'mailto:support@athleti.fi');
  });

  test('should have a section about user rights', async ({ page }) => {
    const userRightsSection = page.locator('h2:has-text("Your Rights")');
    await expect(userRightsSection).toBeVisible();

    const rights = [
      'Access the personal information we hold about you',
      'Request correction or deletion of your personal information',
      'Object to or restrict our processing of your personal information'
    ];

    for (const right of rights) {
      const rightText = page.getByText(`${right}`);
      await expect(rightText).toBeVisible();
    }
  });

  test('should mention data protection measures', async ({ page }) => {
    const securitySection = page.locator('h2:has-text("Data Security")');
    await expect(securitySection).toBeVisible();

    const securityText = page.locator('text=implement appropriate technical and organizational measures');
    await expect(securityText).toBeVisible();
  });
});