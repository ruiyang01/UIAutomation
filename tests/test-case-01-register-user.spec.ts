import { test, expect } from '@playwright/test';

test('Test Case 1: Register User', async ({ page }) => {
  // 1. Launch browser (handled by Playwright)
  // 2. Navigate to url 'http://automationexercise.com'
  await page.goto('/');

  // 3. Verify that home page is visible successfully
  await expect(page.locator('body')).toContainText('Home');

  // 4. Click on 'Signup / Login' button
  await page.click('a:has-text("Signup / Login")');

  // 5. Verify 'New User Signup!' is visible
  await expect(page.locator('text=New User Signup!')).toBeVisible();

  // 6. Enter name and email address
  await page.fill('input[data-qa="signup-name"]', 'Test User');
  const email = `testuser_${Date.now()}@example.com`;
  await page.fill('input[data-qa="signup-email"]', email);

  // 7. Click 'Signup' button
  await page.click('button[data-qa="signup-button"]');

  // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await expect(page.locator('text=Enter Account Information')).toBeVisible();

  // 9. Fill details: Title, Name, Email, Password, Date of birth
  await page.check('input[id="id_gender1"]');
  await page.fill('input[id="name"]', 'Test User');
  await page.fill('input[id="password"]', 'TestPassword123');
  await page.selectOption('select[id="days"]', '1');
  await page.selectOption('select[id="months"]', '1');
  await page.selectOption('select[id="years"]', '2000');

  // 10. Select checkbox 'Sign up for our newsletter!'
  await page.check('input[id="newsletter"]');
  // 11. Select checkbox 'Receive special offers from our partners!'
  await page.check('input[id="optin"]');

  // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  await page.fill('input[id="first_name"]', 'Test');
  await page.fill('input[id="last_name"]', 'User');
  await page.fill('input[id="company"]', 'TestCompany');
  await page.fill('input[id="address1"]', '123 Test St');
  await page.fill('input[id="address2"]', 'Apt 1');
  await page.selectOption('select[id="country"]', 'United States');
  await page.fill('input[id="state"]', 'TestState');
  await page.fill('input[id="city"]', 'TestCity');
  await page.fill('input[id="zipcode"]', '12345');
  await page.fill('input[id="mobile_number"]', '+1234567890');

  // 13. Click 'Create Account button'
  await page.click('button[data-qa="create-account"]');

  // 14. Verify that 'ACCOUNT CREATED!' is visible
  await expect(page.locator('text=Account Created!')).toBeVisible();

  // 15. Click 'Continue' button
  await page.click('a[data-qa="continue-button"]');

  // 16. Verify that 'Logged in as username' is visible
  await expect(page.locator('text=Logged in as Test User')).toBeVisible();

  // 17. Click 'Delete Account' button
  await page.click('a:has-text("Delete Account")');

  // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await expect(page.locator('text=Account Deleted!')).toBeVisible();
  await page.click('a[data-qa="continue-button"]');
}); 