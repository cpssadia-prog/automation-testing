import { test, expect } from '@playwright/test';
import LoginData from '../testdata/LoginData.json';
import LoginPage from  '../pages/LoginPage';

test(`Login Test Case(saucedemo)`, async ({ page }) => {
    const login = new LoginPage(page);
    const data = LoginData.validUsers[0];

    await login.gotoURL();
    await login.login(data.username,data.password);
    await expect(login.message).toHaveText(data.message);
});
test('login with invalid password', async ({page}) =>{
    const login = new LoginPage(page);
    const data = LoginData.InvalidUsers[0];

    await login.gotoURL();
    await login.login(data.username,data.password);
    await expect(data.message);
});
test('login with invalid username', async ({page}) =>{
    const login = new LoginPage(page);
    const data = LoginData.InvalidUsername[0];

    await login.gotoURL();
    await login.login(data.username,data.password);
    await expect(data.message);
});

