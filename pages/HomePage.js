class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.signupLoginButton = page.locator('a:has-text("Signup / Login")');
    this.testCasesButton = page.getByRole('link', { name: 'Test Cases', exact: true });

    this.homeBody = page.locator('body');
    // Try multiple selectors for consent dialogs/buttons
    this.consentSelectors = [
      'button:has-text("Accept")',
      'button:has-text("I Agree")',
      'button:has-text("AGREE")',
      'button:has-text("OK")',
      'button:has-text("Consent")',
      'div.fc-dialog-overlay',
      'div.fc-consent-root button',
      'button[aria-label="Accept"]',
      'button[title="Accept"]',
      'button[mode="primary"]',
    ];
  }

  async goto() {
    await this.page.goto('/');
    await this.closeConsentDialogIfPresent();
    
  }

  async isHomePageVisible() {
    await this.homeBody.waitFor();
    return this.page.locator('body').isVisible();
  }

  async closeConsentDialogIfPresent() {
    for (const selector of this.consentSelectors) {
      const el = this.page.locator(selector);
      try {
        if (await el.first().isVisible({ timeout: 1500 }).catch(() => false)) {
          await el.first().click({ timeout: 2000, force: true });
          await this.page.waitForTimeout(1000); // Wait for overlay to disappear
        }
      } catch (e) {
        // Ignore if not clickable
      }
    }
  }

  async clickSignupLogin() {
    await this.closeConsentDialogIfPresent();
    await this.signupLoginButton.click();
  }

  async clickTestCases() {
    await this.closeConsentDialogIfPresent();
    await this.testCasesButton.click();
  }
}

module.exports = { HomePage }; 