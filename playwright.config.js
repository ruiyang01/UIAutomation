// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    // screenshot: 'only-on-failure',
    baseURL: 'http://automationexercise.com',
  },
  projects: [
    {
      name: 'smoke',
      use: { browserName: 'chromium' },
      grep: /@smoke/,
    },
  ],
  reporter: [
    ['list'], 
    ['html'],
    ['allure-playwright']
  ],
  
};

module.exports = config; 