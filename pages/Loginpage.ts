import { Page } from "@playwright/test";
import { Basepage } from "./Basepage";

export class Loginpage extends Basepage{
    
    constructor(page:Page){
        super(page);
    }

    private usernamepath = "#user-name";
    private passwordpath = "#password";
    private submitpath = "#login-button";

    async login(username:string,password:string):Promise<void>{
        await this.page.fill(this.usernamepath,username);
        await this.page.fill(this.passwordpath,password);
        await this.page.click(this.submitpath);
    }
}
