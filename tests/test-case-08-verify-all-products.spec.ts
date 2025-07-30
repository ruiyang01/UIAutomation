import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

test('Test Case 8: Verify All Products and product detail page @smoke', async ({ page }) => {
  // 1. Launch browser (handled by Playwright)
  // 2. Navigate to url 'http://automationexercise.com'
  // 3. Verify that home page is visible successfully
  // 4. Click on 'Products' button
  // 5. Verify user is navigated to ALL PRODUCTS page successfully
  // 6. The products list is visible
  // 7. Click on 'View Product' of first product
  // 8. User is landed to product detail page
  // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand

  const home = new HomePage(page);
  const productsPage = new ProductsPage(page);
  // 2. Navigate to url 'http://automationexercise.com'
  await home.goto();
  // 3. Verify that home page is visible successfully
  expect(await home.isHomePageVisible()).toBeTruthy();

  // 4. Click on 'Products' button
  await home.clickProducts();

  // 5. Verify user is navigated to products  page successfully
  expect(await productsPage.isProductsPageVisible()).toBeTruthy();


  // // 1. Launch browser and navigate to site
  // await page.goto('http://automationexercise.com');

  // // 2. Verify that home page is visible successfully
  // await expect(page).toHaveURL('https://automationexercise.com/');
  // await expect(page.locator('html')).toContainText('Automation Exercise');

  // // 3. Click on 'Products' button
  // await page.getByRole('link', { name: ' Products' }).click();

  // // 4. Verify user is navigated to ALL PRODUCTS page successfully
  // await expect(page).toHaveURL(/.*\/products/);
  // await expect(page.locator('.title.text-center')).toHaveText('ALL PRODUCTS');

  // // 5. The products list is visible
  // const productList = page.locator('.features_items .product-image-wrapper');
  // await expect(productList.first()).toBeVisible();

  // // 6. Click on 'View Product' of first product
  // await productList.first().locator('text=View Product').click();

  // // 7. Verify user is landed on product detail page
  // await expect(page).toHaveURL(/\/product_details\/\d+/);

  // // 8. Verify detail info is visible
  // await expect(page.locator('h2')).toBeVisible(); // product name
  // await expect(page.locator('p:has-text("Category")')).toBeVisible();
  // await expect(page.locator('span:has-text("Rs.")')).toBeVisible(); // price
  // await expect(page.locator('b:has-text("Availability:")')).toBeVisible();
  // await expect(page.locator('b:has-text("Condition:")')).toBeVisible();
  // await expect(page.locator('b:has-text("Brand:")')).toBeVisible();
});
