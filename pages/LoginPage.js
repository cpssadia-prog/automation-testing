class LoginPage{

    constructor(page){
        this.page = page;

        this.username=page.locator('#user-name');
        this.password=page.locator('#password');
        this.loginbutton=page.locator('#login-button');
        this.message = page.locator('#header_container > div.header_secondary_container > span');
    }
    async gotoURL(){
       await this.page.goto('https://www.saucedemo.com/');
    }
    async login(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
    }
}
export default LoginPage;