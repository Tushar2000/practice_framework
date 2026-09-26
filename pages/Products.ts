import { Page } from "@playwright/test";
import { Basepage } from "./Basepage";

export class Products extends Basepage{
    constructor(page:Page){
        super(page);
    }

    private producttextpath = ".title"
    private logopath = ".app_logo"
    private productlist = ".inventory_item_label";
    private productnamepath = ".inventory_item_name"
    private productdescrippath = ".inventory_item_desc"
    private pricepath = ".inventory_item_price";
    private addtocartpath = "button[id*='add-to-cart-']";
    private checkoutpath = ".shopping_cart_link";


    async isproductfieldvisible():Promise<boolean>{
        return await this.page.locator(this.producttextpath).isVisible()
    }

    async islogopresent():Promise<boolean>{
        return await this.page.locator(this.logopath).isVisible();
    }

    async validateproductdetails(){
        const totalproducts = await this.page.locator(this.productlist).count();
        console.log(`total no. of products ${totalproducts}`);

        for(let i=0;i<totalproducts;i++){
            const productname = await this.page.locator(this.productnamepath).nth(i).innerText();
            console.log(`${i} product name is : ${productname}`);
            if(!productname){
                throw new Error(`product ${i} is missing a title`)
            }
            const descrption = await this.page.locator(this.productdescrippath).nth(i).innerText();
            console.log(`${i} product name is : ${descrption}`);
            if(!descrption){
                throw new Error(`descrption ${i} is missing`)
            }
            const price = await this.page.locator(this.pricepath).nth(i).innerText();
            console.log(`${i} product name is : ${price}`);
            if(!price){
                throw new Error(`price ${i} is missing`)
            }
             const addtocart = await this.page.locator(this.addtocartpath).nth(i).innerText();
             console.log(`${i} product name is : ${addtocart}`);
             if(!addtocart){
                 throw new Error(`addtocart ${i} is missing`)
             }
            
        }
    }

    async addtocartbyname(targetproductname:string){
        const productcount = await this.page.locator(this.productlist).count();
        console.log(productcount);
        for(let i=0;i<productcount;i++){
            const product = this.page.locator(this.productlist).nth(i);
            const name = await this.page.locator(this.productnamepath).nth(i).innerText();
            console.log(name);
            if(targetproductname===name){
                console.log("found");
                //await this.page.locator(product).click();
                
            }
            
        }
        
    }

    async clickcheckoutbutton(){
        await this.page.locator(this.checkoutpath).click();
    }

    



}