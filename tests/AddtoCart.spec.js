import { test, expect } from '@playwright/test';

import LoginData from '../testdata/LoginData.json';
import LoginPage from '../pages/LoginPage';
import AddtoCart from '../pages/AddtoCart';
import cartdata from '../testdata/cartdata.json';
import logout from '../pages/logout';
test('Login and add multiple products to cart', async ({ page }) => {

    const login = new LoginPage(page);
    const addToCart = new AddtoCart(page);

    const data = LoginData.validUsers[0];

    await login.gotoURL();

    await login.login(
        data.username,
        data.password
    );
    await expect(login.message)
        .toHaveText(data.message);
    await addToCart.addMultipleItemsToCart(
        cartdata.products
    );
    const cartCount =
        await addToCart.getCartCount();
    await expect(cartCount).toBe('6');
     const LogOut = new logout(page);
     await LogOut.logout();
});