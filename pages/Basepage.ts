import { Page } from "@playwright/test";

export class Basepage{
    public page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async navigateto(url:string):Promise<void>{
        await this.page.goto(url);
    }

    async waitforpageload(){
        await this.page.waitForLoadState('load');
    }
}