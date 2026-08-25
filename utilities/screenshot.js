import {test} from '@playwright/test';
 
export async function attachstepscreenshot(page, name){
    await test.info().attach(name, {
        body: await page.screenshot(),
        contentType: 'image/png',
    });
}
 
export async function attachscreenshotaftereach(page, testInfo){
    await testInfo.attach('Final Screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });
 
    if(testInfo.status !== testInfo.expectedStatus) {
        await testInfo.attach('Failure Screenshot', {
            body: await page.screenshot(),
            contentType: 'image/png',
        });
    }
}

