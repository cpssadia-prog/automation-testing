import { test} from '@playwright/test';

export async function attachstepscreenshot(page,name){
    await test.info().attach(name,{
        body: await page.screenshot(),
        contentType: 'image/png',
    });
}
export async function attachscreenshotaftereach(page,testinfo){
    await testinfo.attach('Final screenshot',{
    body: await page.screenshot(),
    contentType: 'image/png',
    });

if(testinfo.status!==testinfo.expectedstatus){
   await testinfo.attach('failurescreenshot',{
    body: await page.screenshot(),
    contentType: 'image/png',
    });
}
}

