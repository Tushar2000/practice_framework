import { Page } from "@playwright/test";
import { Basepage } from "./Basepage";

export class checkoutpage extends Basepage{
    constructor(page:Page){
        super(page);
    }

    private productname = ".inventory_item_name";

    async getproductname():Promise<string>{
        const name =  await this.page.locator(this.productname).innerText();
        return name.trim();
    }
}