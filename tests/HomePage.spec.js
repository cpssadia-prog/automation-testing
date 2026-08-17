import { test, expect } from '@playwright/test';
import LoginData from '../testdata/LoginData.json';
import LoginPage from  '../pages/LoginPage';
import Homepage from '../pages/Homepage';
import Homedata from '../testdata/Homedata.json'
import logout from '../pages/logout';

test(`login and homepage`,async ({page})=>{
     const login = new LoginPage(page);
     const data = LoginData.validUsers[0];

     const home = new Homepage(page);
     const dataa = Homedata.sorting.priceLowHigh;

     await login.gotoURL();
     await login.login(data.username,data.password);
     await expect(login.message).toHaveText(data.message);
     
    await home.sortdropdown(dataa.option);
    const productprice = await home.getproductprice();
    await expect(productprice).toEqual(dataa.expected);
    const logOut = new logout(page);
    await logOut.logout();
    await expect(logOut.username).toBeVisible();
    await expect(logOut.password).toBeVisible();
    await expect(logOut.loginBtn).toBeVisible();
})
