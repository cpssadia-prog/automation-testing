import { test, expect } from '../fixtures/testSetup.js';
import { attachstepscreenshot } from '../utilities/screenshot.js';

class AddtoCart {
    constructor(page) {
        this.page = page;
        this.product = page.locator('.inventory_item');
        this.cartbutton = page.locator('[data-test="shopping-cart-link"]');
        this.cartbadge = page.locator('[data-test="shopping-cart-badge"]');
        this.checkout = page.getByRole('button', { name: 'Checkout' });
    }

    async addMultipleItemsToCart(productsList) {
        for (const item of productsList) {
            await this.page.locator(item.buttonSelector).click();
            await attachstepscreenshot(this.page, 'after adding product');
        }
    }

    async removeMultipleItemsFromCart(productsList) {
        for (const item of productsList) {
            await this.page.locator(item.removeButtonSelector).click();
            await attachstepscreenshot(this.page, 'after removing product');
        }
    }

    async clickCartIcon() {
        await this.cartbutton.click();
        await attachstepscreenshot(this.page, 'after clicking cart icon');
    }

    async clickCheckout() {
        await this.checkout.click();
        await attachstepscreenshot(this.page, 'after clicking checkout');
    }

    async getCartCount() {
        const cartCount = await this.cartbadge.textContent();

        await attachstepscreenshot(this.page, 'after getting cart count');

        return cartCount;
    }
}

export default AddtoCart;