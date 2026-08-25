import { test, expect } from '../fixtures/testSetup.js';
import { attachstepscreenshot } from '../utilities/screenshot.js';
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
     await test.step('after add to cart', async () => {
        await attachstepscreenshot(this.page, 'checkout page');
         });
        await test.step('Enter firstname', async () => {
            await this.firstName.fill(firstName);
            await attachstepscreenshot(this.page, 'After firstaname');
         });
         await test.step('Enter lastname', async () => {
            await this.lastName.fill(lastName);
             await attachstepscreenshot(this.page, 'After firstaname');
          });
          await test.step('Enter postal code', async () => {
             await this.postalCode.fill(postalCode);
              await attachstepscreenshot(this.page, 'after postalcode');
           });
    }
   
    async continueButton() {
        await test.step('click continue button', async () => {
        await this.continueBtn.click();
         await attachstepscreenshot(this.page, 'after continue button');
           });
    }
    async gotoCheckoutOverview() {
        await test.step('click checkout overview page', async () => {
        await this.page.waitForURL('**/checkout-step-two.html');
          await attachstepscreenshot(this.page, 'after checkout overview page');
           });
    }

    async finishButton() {
        await test.step('click finish button', async () => {
        await this.finishBtn.click();
         await attachstepscreenshot(this.page, 'after finish button');
           });
    }
    // Get order completion message
    async getCompleteMessage() {
        await test.step('complete message', async () => {
        return await this.completeHeader.textContent();
         await attachstepscreenshot(this.page, 'after complete page');
           });
    }
}
export default Checkout;