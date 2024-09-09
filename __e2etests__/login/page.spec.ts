import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the login page before each test
    await page.goto('http://localhost:3000/login');
  });

  test('should have correct title and header', async ({ page }) => {
    // Check the page H1 header
    const heading1 = page.locator('h1:has-text("AthletiFi")');
    await expect(heading1).toBeVisible();

    // Check the tabs
    const signInTab = page.getByRole('tab', { name: 'Sign In' });
    await expect(signInTab).toBeVisible();
    await expect(signInTab).toHaveClass('amplify-tabs__item amplify-tabs__item--active');

    const signUpTab = page.getByRole('tab', { name: 'Create Account' });
    await expect(signUpTab).toBeVisible();
  });

  test('should have all form elements', async ({ page }) => {
    // Check for email and password inputs
    await expect(page.locator('input[name="username"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();

    // Check for the sign-in button
    const signInButton = page.getByRole('button', { name: 'Sign in' });
    await expect(signInButton).toBeVisible();
  });

  test('user can log in and view their profile', async ({ page }) => {
    const username = process.env.REACT_APP_PLAYWRIGHT_USERNAME;
    if (username === null || username === undefined) {
        throw 'Username is not defined in environment file';
    }
  
    const password = process.env.REACT_APP_PLAYWRIGHT_PASSWORD;
    if (password === null || password === undefined) {
        throw 'Password is not defined in environment file';
    }

    // Fill in the login form
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);

    // Click the login button
    await page.click('button[type="submit"]');

    // Wait for navigation to complete
    await page.waitForURL('http://localhost:3000/profile');

    // Check that we're on the profile page
    await expect(page).toHaveURL('http://localhost:3000/profile');

    // Check that the user's name is displayed
    const userName = await page.textContent('[data-testid="username"]');
    expect(userName).toBe('Louis Choi3');
  });

  test('should have "Reset Password" link', async ({ page }) => {
    const forgotPasswordLink = page.locator('text=Reset Password');
    await expect(forgotPasswordLink).toBeVisible();
  });
});

  // test('should handle redirect parameter', async ({ page }) => {
  //   // Navigate to login page with redirect parameter
  //   await page.goto('http://localhost:3000/login?redirect=/dashboard');

  //   // Fill in valid login details
  //   await page.fill('input[name="email"]', 'valid@example.com');
  //   await page.fill('input[name="password"]', 'validpassword');

  //   // Submit the form
  //   await Promise.all([
  //     page.waitForResponse(response => response.url().includes('/auth') && response.status() === 200),
  //     page.click('button:has-text("Sign in")')
  //   ]);

  //   // Check if redirected to the specified page
  //   await expect(page).toHaveURL(/.*\/dashboard.*/);
  // });

  // test('should handle invite_id parameter', async ({ page }) => {
  //   // Navigate to login page with invite_id
  //   await page.goto('http://localhost:3000/login?invite_id=test123');

  //   // Fill in valid login details
  //   await page.fill('input[name="email"]', 'valid@example.com');
  //   await page.fill('input[name="password"]', 'validpassword');

  //   // Submit the form
  //   await Promise.all([
  //     page.waitForResponse(response => response.url().includes('/auth') && response.status() === 200),
  //     page.click('button:has-text("Sign in")')
  //   ]);

  //   // Check if the invite_id is handled correctly
  //   // This might involve checking the URL or some visible confirmation on the page
  //   // Adjust according to your application's behavior
  //   await expect(page).toHaveURL(/.*invite_id=test123.*/);
  // });

  // test('should show error for invalid credentials', async ({ page }) => {
  //   await page.fill('input[name="username"]', 'invalid@example.com');
  //   await page.fill('input[name="password"]', 'invalidpassword');
  //   await page.click('button:has-text("Sign in")');

  //   const errorMessage = page.locator('text=Invalid email or password');
  //   await expect(errorMessage).toBeVisible();
  // });

  // test('should maintain form state on navigation', async ({ page }) => {
  //   await page.fill('input[name="email"]', 'test@example.com');
  //   await page.click('text=About us');
  //   await page.goBack();

  //   const emailInput = page.locator('input[name="email"]');
  //   await expect(emailInput).toHaveValue('test@example.com');
  // });