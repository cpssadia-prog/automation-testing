import { test, expect } from '@playwright/test';

import LoginData from '../testdata/LoginData.json';
import LoginPage from '../pages/LoginPage';
import logout from '../pages/logout';

test("Checkout testcase", async ({ page }) => {
 
    const login = new LoginPage(page);
    const data = LoginData.validUsers[0];

    await login.gotoURL();
    await login.login(data.username,data.password);
    await expect(data.message);
 
    const LogOut = new logout(page);
 
    await LogOut.logout();
 
});