import { test, expect } from '../fixtures/testSetup.js';
import { attachstepscreenshot }  from '../utilities/screenshot.js';
import LoginData from '../testdata/LoginData.json';
import LoginPage from '../pages/LoginPage';
import AddtoCart from '../pages/AddtoCart';
import cartdata from '../testdata/cartdata.json';
import logout from '../pages/logout';
test.describe('login test case',()=> {
test('Login and add multiple products to cart', async ({ page }) => {

    const login = new LoginPage(page);
    const addToCart = new AddtoCart(page);

    const data = LoginData.validUsers[0];

    await test.step('Enter Credentials',async()=>{
    await login.login(data.username,data.password);
     });
    await test.step('verify welcome message on landing page',async()=>{
    await expect(login.message).toHaveText(data.message);
    await attachstepscreenshot(page,'05-welcome message should be displayed');
});
    await addToCart.addMultipleItemsToCart(
        cartdata.products
    );
    const cartCount =
        await addToCart.getCartCount();
    await expect(cartCount).toBe('6');
     const LogOut = new logout(page);
     await LogOut.logout();
});
});