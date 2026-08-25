import { test, expect } from '../fixtures/testSetup.js';
import { attachstepscreenshot }  from '../utilities/screenshot.js';
import LoginData from '../testdata/LoginData.json';
import LoginPage from  '../pages/LoginPage';
import Homepage from '../pages/Homepage';
import Homedata from '../testdata/Homedata.json'
import logout from '../pages/logout';

test.describe('login test case',()=> {
test(`login and homepage`,async ({page})=>{
     const login = new LoginPage(page);
     const data = LoginData.validUsers[0];

     const home = new Homepage(page);
     const dataa = Homedata.sorting.priceLowHigh;

    await test.step('Enter Credentials',async()=>{
    await login.login(data.username,data.password);
     });
    await test.step('verify welcome message on landing page',async()=>{
    await expect(login.message).toHaveText(data.message);
    await attachstepscreenshot(page,'05-welcome message should be displayed');
});
     
    await home.sortdropdown(dataa.option);
    const productprice = await home.getproductprice();
    await expect(productprice).toEqual(dataa.expected);
    const logOut = new logout(page);
    await logOut.logout();
    await expect(logOut.username).toBeVisible();
    await expect(logOut.password).toBeVisible();
    await expect(logOut.loginBtn).toBeVisible();
});
});

