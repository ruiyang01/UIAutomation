import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { validUser } from '../data/users';
import { registerUser } from '../utils/registerUser';

test.describe('Test Case 2: Login User with correct email and password', () => {
  test.beforeAll(async ({ browser }) => {
    // Register the user before running the login test
    const page = await browser.newPage();
    await registerUser(page, validUser);
    await page.close();
  });

  test('should login successfully and delete account', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);

    // 1. Launch browser (handled by Playwright)
    // 2. Navigate to url 'http://automationexercise.com'
    await home.goto();

    // 3. Verify that home page is visible successfully
    await expect(await home.isHomePageVisible()).toBeTruthy();

    // 4. Click on 'Signup / Login' button
    await home.clickSignupLogin();

    // 5. Verify 'Login to your account' is visible
    await expect(await login.isLoginHeaderVisible()).toBeTruthy();

    // 6. Enter correct email address and password
    await login.login(validUser.email, validUser.password);

    // 7. Click 'login' button (handled in login method)

    // 8. Verify that 'Logged in as username' is visible
    await expect(await login.isLoggedInAs(validUser.name)).toBeTruthy();

    // 9. Click 'Delete Account' button
    await login.deleteAccount();

    // 10. Verify that 'ACCOUNT DELETED!' is visible
    await expect(await login.isAccountDeleted()).toBeTruthy();
  });
}); 