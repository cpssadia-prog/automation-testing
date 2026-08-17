class Homepage{

    constructor(page){
        this.page = page;
    
    this.products=page.locator('[data-test="inventory-item"]');
    this.productsname=page.locator('[data-test="inventory-item-name"]');
    this.productprice=page.locator('[data-test="inventory-item-price"]');
    this.sortDropdown =page.locator('[data-test="product-sort-container"]');
    }
     async gotoURL(){
       await this.page.goto('https://www.saucedemo.com/');
     }
     async getproductnames(productsname){
        return await this.productsname.allTextContents();
     }
     async getproductprice(productsprice){
        return await this.productprice.allTextContents();
     }
     async sortdropdown(option){
         await this.sortDropdown.selectOption(option);
     }
}
export default Homepage;