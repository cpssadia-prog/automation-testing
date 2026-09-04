import { test, expect } from '../../fixtures/testSetup.js';
import { attachstepscreenshot } from '../../utilities/screenshot.js';
import LoginData from '../../testdata/LoginData.json';
import LoginPage from '../../pages/LoginPage.js';
import AddtoCart from '../../pages/AddtoCart.js';
import cartdata from '../../testdata/cartdata.json';
import CheckoutData from '../../testdata/checkoutdata.json';
import Checkout from '../../pages/Checkout.js';
import logout from '../../pages/logout.js';

 test.describe('smoke page',()=> {
test('Login, Add Product and Checkout', async ({ page }) => {
 
    const login = new LoginPage(page);
    const addToCart = new AddtoCart(page);
    const checkOut = new Checkout(page);
    const info = CheckoutData.validInformation[0];
    const data = LoginData.validUsers[0];
    await test.step('Enter Credentials',async()=>{
    await login.login(data.username,data.password);
     });
    await test.step('verify welcome message on landing page',async()=>{
    await expect(login.message).toHaveText(data.message);
    await attachstepscreenshot(page,'05-welcome message should be displayed');
});

      await test.step('Add to cart',async()=>{
    await addToCart.addMultipleItemsToCart( cartdata.products );
      });
   await test.step('cart count',async()=>{
    const cartCount = await addToCart.getCartCount();
    await expect(cartCount).toBe(cartdata.products.length.toString());
     await attachstepscreenshot(page,'cart count should be displayed');
     });
   await test.step(' click cart icon',async()=>{
    await addToCart.clickCartIcon();
    await attachstepscreenshot(page,'cart icon displayed');
     });
      await test.step(' click checkout',async()=>{
    await addToCart.clickCheckout();
   await attachstepscreenshot(page,'after checkout');
     });

await test.step('Enter checkout information', async () => {
    await checkOut.EnterInformation(
        info.firstName,
        info.lastName,
        info.postalCode
    );

    await attachstepscreenshot(page, 'after checkout information');
});
   await test.step('click continue button', async () => {
    await checkOut.continueButton();
    await attachstepscreenshot(page, 'after continue');
});
    await test.step('click checkout overview', async () => {
    await checkOut.gotoCheckoutOverview();
    await attachstepscreenshot(page, 'after checkout button');
});

     await test.step('overview detials', async () => {
    await expect(checkOut.checkoutOverviewPageTitle).toHaveText(checkOut.checkoutOverviewTitle );
   
    await expect(checkOut.quantity).toHaveText(Array(cartdata.products.length).fill('1'));
    await expect(checkOut.paymentinfo).toBeVisible();
    await expect(checkOut.shipping).toBeVisible();
    await expect(checkOut.totalprice).toBeVisible();
    await attachstepscreenshot(page, 'overview details will be displayed');
}); 
   await test.step('click finish button', async () => {
    await checkOut.finishButton();
    await expect(checkOut.thankyouOrder).toHaveText('Thank you for your order!');
 await attachstepscreenshot(page, 'order completion message will be displayed');
}); 
      await test.step('logout',async()=>{
    const LogOut = new logout(page);
    await LogOut.logout();
     await attachstepscreenshot(page,'after logout');
});
});
});