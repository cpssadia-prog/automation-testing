import { test, expect } from '../fixtures/testSetup.js';
import { attachstepscreenshot } from '../utilities/screenshot.js';

class LoginPage{

    constructor(page){
        this.page = page;

        this.username=page.locator('#user-name');
        this.password=page.locator('#password');
        this.loginbutton=page.locator('#login-button');
        this.message = page.locator('#header_container > div.header_secondary_container > span');
    }
   
    async login(username, password) {
    await test.step('After URL open', async () => {
    await attachstepscreenshot(this.page, '01 - After URL open');
 });

   await test.step('enter username',async()=>{
     await this.username.fill(username);
     await attachstepscreenshot(this.page, '02 - After username');
});
    await test.step('Enter password', async () => {
    await this.password.fill(password);
    await attachstepscreenshot(this.page, '03 - After password');
});
   await test.step('Click Login', async () => {
    await this.loginbutton.click();
    await attachstepscreenshot(this.page, '04 - After login click');
}); 
    }
}
   /* async AttachScreenshot(name){
        await test.info().attach(name,{
            body: await this.page.screenshot(),
            contentType: 'image/png',
        })
    }
    async gotoURL(){
       await this.page.goto('https://www.saucedemo.com/');
       await this.AttachScreenshot('01-Login page opened');
    }
    async login(username,password){
        await this.username.fill(username);
        await this.AttachScreenshot('02-after entering username');
        await this.password.fill(password);
        await this.AttachScreenshot('03-after entering password');
        await this.loginbutton.click();
        await this.AttachScreenshot('04-after clicking login');
    }
}*/
export default LoginPage;