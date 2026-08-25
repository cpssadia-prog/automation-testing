import { test } from '@playwright/test';
import { attachstepscreenshot } from '../utilities/screenshot.js';

class Homepage {
    constructor(page) {
        this.page = page;

        this.products = page.locator('[data-test="inventory-item"]');
        this.productsname = page.locator('[data-test="inventory-item-name"]');
        this.productprice = page.locator('[data-test="inventory-item-price"]');
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    }

    async getproductnames() {
        let productNames;

        await test.step('Product names', async () => {
            productNames = await this.productsname.allTextContents();
            await attachstepscreenshot(this.page, 'All product names' );
        });
        return productNames;
    }

    async getproductprice() {
        let productPrices;

        await test.step('Product price', async () => {
            productPrices = await this.productprice.allTextContents();

            await attachstepscreenshot(
                this.page,
                'After all product price'
            );
        });

        return productPrices;
    }

    async sortdropdown(option) {
        await test.step('Sort', async () => {
            await this.sortDropdown.selectOption(option);

            await attachstepscreenshot(
                this.page,
                'After sorting'
            );
        });
    }
}

export default Homepage;