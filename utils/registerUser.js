const { HomePage } = require('../pages/HomePage');

async function registerUser(page, { name, email, password }) {
  const home = new HomePage(page);
  await home.goto();
  await home.clickSignupLogin();
  await page.locator('input[data-qa="signup-name"]').fill(name);
  await page.locator('input[data-qa="signup-email"]').fill(email);
  await page.locator('button[data-qa="signup-button"]').click();
  await page.locator('input[id="id_gender1"]').check();
  await page.locator('input[id="name"]').fill(name);
  await page.locator('input[id="password"]').fill(password);
  await page.selectOption('select[id="days"]', '1');
  await page.selectOption('select[id="months"]', '1');
  await page.selectOption('select[id="years"]', '2000');
  await page.locator('input[id="newsletter"]').check();
  await page.locator('input[id="optin"]').check();
  await page.locator('input[id="first_name"]').fill('Test');
  await page.locator('input[id="last_name"]').fill('User');
  await page.locator('input[id="company"]').fill('TestCompany');
  await page.locator('input[id="address1"]').fill('123 Test St');
  await page.locator('input[id="address2"]').fill('Apt 1');
  await page.selectOption('select[id="country"]', 'United States');
  await page.locator('input[id="state"]').fill('TestState');
  await page.locator('input[id="city"]').fill('TestCity');
  await page.locator('input[id="zipcode"]').fill('12345');
  await page.locator('input[id="mobile_number"]').fill('+1234567890');
  await page.locator('button[data-qa="create-account"]').click();
  await page.locator('text=Account Created!').waitFor();
  await page.locator('a[data-qa="continue-button"]').click();
}

module.exports = { registerUser }; 