class AddtoCart {
    constructor(page) {
        this.page = page;
        this.product = page.locator('.inventory_item');
        
        // Playwright Best Practices: User-facing locators & Test IDs
        this.cartbutton = page.locator('[data-test="shopping-cart-link"]'); 
        this.cartbadge = page.locator('[data-test="shopping-cart-badge"]');
        this.checkout = page.getByRole('button', { name: 'Checkout' });
    }

    async addMultipleItemsToCart(productsList) {
        for (const item of productsList) {
            await this.page.locator(item.buttonSelector).click();
        }
    }

    async removeMultipleItemsFromCart(productsList) {
        for (const item of productsList) {
            await this.page.locator(item.removeButtonSelector).click();
        }
    }

    async clickCartIcon() {
        await this.cartbutton.click();
    }

    async clickCheckout() {
        await this.checkout.click();
    }

    async getCartCount() {
        return await this.cartbadge.textContent();
    }
}

export default AddtoCart;