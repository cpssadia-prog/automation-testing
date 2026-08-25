import { test, expect } from '../fixtures/testSetup.js';
import { attachstepscreenshot } from '../utilities/screenshot.js';
class logout{
 
    constructor(page){
        this.page = page;
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[data-test="login-button"]');
        this.menuBtn = page.locator('#react-burger-menu-btn');
        this.logoutBtn = page.locator('#logout_sidebar_link');
        this.allItemsBtn = page.locator('#inventory_sidebar_link');
        this.aboutBtn = page.locator('#about_sidebar_link');
        this.resetBtn = page.locator('#reset_sidebar_link')
 
    }
    async logout() {
        await test.step('click menu button', async () => {
        await this.menuBtn.click();
         await attachstepscreenshot(this.page, 'after menu button');
    });
       await test.step('click logout', async () => {
        await this.logoutBtn.click();
         await attachstepscreenshot(this.page, 'after logout button');
    });
    }
   
    async allItemsButton(){
        await this.menuBtn.click();
        await this.allItemsBtn.click();
    }
 
    async aboutButton(){
        await this.menuBtn.click();
        await this.aboutBtnBtn.click();
    }
 
    async resetButton(){
        await this.menuBtn.click();
        await this.resetBtnBtn.click();
    }
}
 
export default logout;