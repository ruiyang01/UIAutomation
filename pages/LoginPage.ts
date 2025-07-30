import {Page, Locator} from '@playwright/test'

export class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  private page: Page;
  private loginHeader: Locator;
  private emailInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private loggedInAs: Locator;
  private deleteAccountButton: Locator;
  private accountDeleted: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginHeader = page.locator('text=Login to your account');
    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.loggedInAs = page.locator('text=Logged in as');
    this.deleteAccountButton = page.locator('a:has-text("Delete Account")');
    this.accountDeleted = page.locator('text=Account Deleted!');
  }

  async isLoginHeaderVisible() {
    return this.loginHeader.isVisible();
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async isLoggedInAs(username: string) {
    return this.page.locator(`text=Logged in as ${username}`).isVisible();
  }

  async deleteAccount() {
    await this.deleteAccountButton.click();
  }

  async isAccountDeleted() {
    return this.accountDeleted.isVisible();
  }
}
