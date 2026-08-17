class Checkout {
    constructor(page) {
        this.page = page;
        this.product = page.locator('.inventory_item');
        this.quantity = page.locator('.cart_quantity');
        this.thankyouOrder=page.locator('.complete-header')
        // Checkout Information page
        this.firstName =page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode =page.locator('[data-test="postalCode"]');
        this.continueBtn =page.locator('[data-test="continue"]');
        // Checkout Overview page
        this.checkoutOverviewPageTitle =page.locator('[data-test="title"]');
        this.checkoutOverviewTitle = 'Checkout: Overview';
        this.paymentinfo = page.locator('#checkout_summary_container > div > div.summary_info > div:nth-child(1)');
        this.shipping = page.locator('#checkout_summary_container > div > div.summary_info > div:nth-child(3)');
         this.totalprice =page.locator('#checkout_summary_container > div > div.summary_info > div:nth-child(5)');
        this.finishBtn =page.locator('[data-test="finish"]');
        this.cancelBtn =page.locator('[data-test="cancel"]');
        this.completeHeader = page.locator('[data-test="complete-header"]');
    }
    // Enter checkout information
    async EnterInformation(firstName, lastName, postalCode) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
    }
 
    async continueButton() {
        await this.continueBtn.click();
    }
    async gotoCheckoutOverview() {
        await this.page.waitForURL('**/checkout-step-two.html');
    }
    // Click Finish
    async finishButton() {
        await this.finishBtn.click();
    }
    // Get order completion message
    async getCompleteMessage() {
        return await this.completeHeader.textContent();
    }
}
export default Checkout;