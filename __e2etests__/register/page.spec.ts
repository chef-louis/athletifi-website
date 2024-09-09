import { test, expect } from '@playwright/test';

test.describe('Register Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the register page before each test
    await page.goto('http://localhost:3000/register');
  });

  test('should have correct title and header', async ({ page }) => {
    // Check the page H1 header
    const heading1 = page.locator('h1:has-text("AthletiFi")');
    await expect(heading1).toBeVisible();

    // Check the tabs
    const signInTab = page.getByRole('tab', { name: 'Sign In' });
    await expect(signInTab).toBeVisible();

    const signUpTab = page.getByRole('tab', { name: 'Create Account' });
    await expect(signUpTab).toBeVisible();
    await expect(signUpTab).toHaveClass('amplify-tabs__item amplify-tabs__item--active');
  });

  test('should have all form elements', async ({ page }) => {
    // Check for name, email, password, and confirm password inputs
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(page.locator('input[name="confirm_password"]')).toBeVisible();

    // Check for the sign-in button
    const signInButton = page.getByRole('button', { name: 'Create Account' });
    await expect(signInButton).toBeVisible();
  });

});