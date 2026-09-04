
import { test } from '../fixtures/testSetup.js';
import { attachstepscreenshot } from '../utilities/screenshot.js';

class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginbutton = page.locator('#login-button');

        // Successful login message
        this.message = page.locator(
            '#header_container > div.header_secondary_container > span'
        );

        // Invalid login error message
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async login(username, password) {

        await test.step('After URL open', async () => {
            await attachstepscreenshot(
                this.page,
                '01 - After URL open'
            );
        });

        await test.step('enter username', async () => {
            await this.username.fill(username);

            await attachstepscreenshot(
                this.page,
                '02 - After username'
            );
        });

        await test.step('Enter password', async () => {
            await this.password.fill(password);

            await attachstepscreenshot(
                this.page,
                '03 - After password'
            );
        });

        await test.step('Click Login', async () => {
            await this.loginbutton.click();

            await attachstepscreenshot(
                this.page,
                '04 - After login click'
            );
        });
    }
}

export default LoginPage;

