import { test, expect } from '../../fixtures/testSetup.js';
import { attachstepscreenshot } from '../../utilities/screenshot.js';
import LoginData from '../../testdata/LoginData.json';
import LoginPage from '../../pages/LoginPage';
import AddtoCart from '../../pages/AddtoCart';
import cartdata from '../../testdata/cartdata.json';

import CheckoutData from '../../testdata/checkoutdata.json';
import Checkout from '../../pages/checkout';
import logout from '../../pages/logout';

test.describe('smoke test case',()=> {
test('Login, Add Product and Checkout', async ({ page }) => {
 
    const login = new LoginPage(page);
    const addToCart = new AddtoCart(page);
    const checkOut = new Checkout(page);
    const data = LoginData.validUsers[0];
    const info = CheckoutData.validInformation[0];
 
    /*await login.gotoURL();
    await login.login(loginUser.username, loginUser.password);
    await expect(login.message).toHaveText(loginUser.message);*/

     await test.step('Enter Credentials',async()=>{
        await login.login(data.username,data.password);
         });
        await test.step('verify welcome message on landing page',async()=>{
        await expect(login.message).toHaveText(data.message);
        await attachstepscreenshot(page,'05-welcome message should be displayed');
 });
    await addToCart.addMultipleItemsToCart(cartdata.products);
 
    const cartCount = await addToCart.getCartCount();
    const expectedCount = cartdata.products.length.toString();
    await expect(cartCount).toBe(expectedCount);

    await addToCart.clickCartIcon();
    await addToCart.clickCheckout();
 
    await checkOut.EnterInformation(
        info.firstName,
        info.lastName,
        info.postalCode
    );
    await checkOut.continueButton();
    await checkOut.gotoCheckoutOverview();
    await expect(checkOut.checkoutOverviewPageTitle).toHaveText(checkOut.checkoutOverviewTitle );
   
    await expect(checkOut.quantity).toHaveText(Array(cartdata.products.length).fill('1'));
    await expect(checkOut.paymentinfo).toBeVisible();
    await expect(checkOut.shipping).toBeVisible();
    await expect(checkOut.totalprice).toBeVisible();
    await checkOut.finishButton();
    await expect(checkOut.thankyouOrder).toHaveText('Thank you for your order!');
 
    const logOut = new logout(page);
    await logOut.logout();
    await expect(logOut.username).toBeVisible();
    await expect(logOut.password).toBeVisible();
    await expect(logOut.loginBtn).toBeVisible();
});
})