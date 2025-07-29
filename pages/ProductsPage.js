class ProductsPage {
    constructor(page) {
        this.page = page;
        this.searchBox = page.locator('input[id="search_product"]');
        this.searchButton = page.locator('button[id="submit_search"]');
    }

    async isProductsPageVisible() {
        await this.page.waitForSelector('input[id="search_product"]');
        return this.searchButton.isVisible();
    }
}

module.exports = { ProductsPage };