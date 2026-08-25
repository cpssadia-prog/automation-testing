import { test as base} from '@playwright/test';
import BasePage from  '../pages/BasePage.js';
import { attachscreenshotaftereach } from '../utilities/screenshot.js';

const APP_URL = 'https://www.saucedemo.com/'

export const test = base.extend({
    pagesetup: [
        async({page},use)=>{
            const basepage = new BasePage(page);
            await basepage.navigate(APP_URL);
            await use();
        },
        {auto:true},
        ]
});

test.afterEach(async({page},testinfo)=>{
    await attachscreenshotaftereach(page,testinfo);
})
export {expect} from '@playwright/test';
