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
  globalTeardown: './globalTeardown.ts',
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
    ['json', { outputFile: 'playwright-report/test-results.json' }],
    ['allure-playwright']
  ],
  
};

module.exports = config; 