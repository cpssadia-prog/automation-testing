import { test, expect } from '../fixtures/testSetup.js';
import { attachstepscreenshot }  from '../utilities/screenshot.js';
import LoginData from '../testdata/LoginData.json';
import LoginPage from  '../pages/LoginPage';
import Homepage from '../pages/Homepage';
import Homedata from '../testdata/Homedata.json'
import logout from '../pages/logout';

test.describe('Home page test case',()=> {
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
    await test.step('dropdown',async()=>{
    await home.sortdropdown(dataa.option);
    await attachstepscreenshot(page,'after dropdown');
});
    await test.step('product price',async()=>{
    const productprice = await home.getproductprice();
    await expect(productprice).toEqual(dataa.expected);
    await attachstepscreenshot(page,'get product price');
});
});
});
test.describe('Home page test case price high to low',()=> {
test(`login and homepage`,async ({page})=>{
     const login = new LoginPage(page);
     const data = LoginData.validUsers[0];

     const home = new Homepage(page);
     const dataa = Homedata.sorting.priceHighLow;

    await test.step('Enter Credentials',async()=>{
    await login.login(data.username,data.password);
     });
    await test.step('verify welcome message on landing page',async()=>{
    await expect(login.message).toHaveText(data.message);
    await attachstepscreenshot(page,'05-welcome message should be displayed');
});
    await test.step('dropdown',async()=>{
    await home.sortdropdown(dataa.option);
    await attachstepscreenshot(page,'after dropdown');
});
    await test.step('product price',async()=>{
    const productprice = await home.getproductprice();
    await expect(productprice).toEqual(dataa.expected);
    await attachstepscreenshot(page,'get product price');
});
});
});
test.describe('Home page test case name z to a', () => {
  test('login and homepage', async ({ page }) => {
    const login = new LoginPage(page);
    const data = LoginData.validUsers[0];
    const home = new Homepage(page);
    const dataa = Homedata.sorting.nameZA;

    await test.step('Enter Credentials', async () => {
      await login.login(data.username, data.password);
    });

    await test.step('verify welcome message on landing page', async () => {
      await expect(login.message).toHaveText(data.message);
      await attachstepscreenshot(page, '05-welcome message should be displayed');
    });

    await test.step('dropdown', async () => {
      await home.sortdropdown(dataa.option);
      await attachstepscreenshot(page, 'after dropdown');
    });

    await test.step('product names', async () => {
      const productnames = await home.getproductnames();
      await expect(productnames).toEqual(dataa.expected);
      await attachstepscreenshot(page, 'get product names');
    });
  });
});
test.describe('Home page test case name a to z', () => {
  test('login and homepage', async ({ page }) => {
    const login = new LoginPage(page);
    const data = LoginData.validUsers[0];
    const home = new Homepage(page);
    const dataa = Homedata.sorting.NameAtoZ;

    await test.step('Enter Credentials', async () => {
      await login.login(data.username, data.password);
    });

    await test.step('verify welcome message on landing page', async () => {
      await expect(login.message).toHaveText(data.message);
      await attachstepscreenshot(page, '05-welcome message should be displayed');
    });

    await test.step('dropdown', async () => {
      await home.sortdropdown(dataa.option);
      await attachstepscreenshot(page, 'after dropdown');
    });

    await test.step('product names', async () => {
      const productnames = await home.getproductnames();
      await expect(productnames).toEqual(dataa.expected);
      await attachstepscreenshot(page, 'get product names');
    });
  });
});
