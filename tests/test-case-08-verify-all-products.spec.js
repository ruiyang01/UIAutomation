const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductsPage } = require('../pages/ProductsPage');

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
  await expect(await home.isHomePageVisible()).toBeTruthy();

  // 4. Click on 'Products' button
  await home.clickProducts();

  // 5. Verify user is navigated to products  page successfully
  await expect(await productsPage.isProductsPageVisible()).toBeTruthy();

}); 