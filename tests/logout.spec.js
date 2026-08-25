import { test, expect } from '../fixtures/testSetup.js';
import { attachstepscreenshot }  from '../utilities/screenshot.js';
import LoginData from '../testdata/LoginData.json';
import LoginPage from '../pages/LoginPage';
import logout from '../pages/logout';

test.describe('login test case',()=> {
test("Checkout testcase", async ({ page }) => {
 
    const login = new LoginPage(page);
    const data = LoginData.validUsers[0];

  await test.step('Enter Credentials',async()=>{
    await login.login(data.username,data.password);
     });
    await test.step('verify welcome message on landing page',async()=>{
    await expect(login.message).toHaveText(data.message);
    await attachstepscreenshot(page,'05-welcome message should be displayed');
});
    const LogOut = new logout(page);
 
    await LogOut.logout();
 
});
});