import {Page, Locator} from '@playwright/test';

export class TestCasesPage {
    private page: Page;
    private testCasesPageHeader: Locator;
    private testCasesTexts: Locator;
    constructor(page: Page) {
        this.page = page;
        this.testCasesPageHeader = page.locator('h2:has-text("Test Cases")');
        this.testCasesTexts = page.locator('h5:has-text("Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:")')
    }

    async isTestCasesPageVisible() {
        await this.page.waitForSelector('h2:has-text("Test Cases")');
        return this.testCasesTexts.isVisible();
    }
}

