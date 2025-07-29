const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { TestCasesPage } = require('../pages/TestCasesPage');

test('Test Case 7: Verify Test Cases Page @smoke', async ({ page }) => {
  // 1. Launch browser (handled by Playwright)
  const home = new HomePage(page);
  const testCasesPage = new TestCasesPage(page);
  // 2. Navigate to url 'http://automationexercise.com'
  await home.goto();
  // 3. Verify that home page is visible successfully
  await expect(await home.isHomePageVisible()).toBeTruthy();

  // 4. Click on 'Test Cases' button
  await home.clickTestCases();

  // 5. Verify user is navigated to test cases page successfully
  await expect(await testCasesPage.isTestCasesPageVisible()).toBeTruthy();
}); 