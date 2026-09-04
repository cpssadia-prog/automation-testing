import { test, expect } from '../fixtures/testSetup.js';
import LoginData from '../testdata/LoginData.json';
import LoginPage from '../pages/LoginPage.js';
import { attachstepscreenshot }  from '../utilities/screenshot.js';

test.describe('login test case',()=> {

test(`Login Test Case(saucedemo)`, async ({ page }) => {
    const login = new LoginPage(page)
    const data = LoginData.validUsers[0];
    await test.step('Enter Credentials',async()=>{
    await login.login(data.username,data.password);
     });
    await test.step('verify welcome message on landing page',async()=>{
    await expect(login.message).toHaveText(data.message);
    await attachstepscreenshot(page,'05-welcome message should be displayed');
});
});
});

test.describe('Negative Login Test Case', () => {

  test('Login with Invalid Credentials', async ({ page }) => {

    const login = new LoginPage(page);
    const data = LoginData.InvalidUsers[0];

    await test.step('Enter Invalid Credentials', async () => {
      await login.login(data.username, data.password);
    });

    await test.step('Verify Error Message', async () => {
      await expect(login.errorMessage).toHaveText(data.message);

      await attachstepscreenshot(
        page,
        '05-error message should be displayed'
      );
    });

  });

});


