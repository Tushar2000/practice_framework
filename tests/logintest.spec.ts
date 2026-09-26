import { test,expect } from "@playwright/test";
import { Loginpage } from "../pages/Loginpage";
import { Products } from "../pages/Products";
import { checkoutpage } from "../pages/checkoutpage";


test("user should be able to login",async ({page})=>{
    const loginpage = new Loginpage(page);
    const productpage = new Products(page);
    const Checkoutpage = new checkoutpage(page);
    await loginpage.navigateto("https://www.saucedemo.com/");
    await loginpage.waitforpageload();
    await loginpage.login("standard_user","secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await loginpage.waitforpageload();

    const isproduct = await productpage.isproductfieldvisible();
    //expect(isproduct).toBeTruthy();
    const islogo = await productpage.islogopresent();
    expect(islogo).toBeTruthy();
    await productpage.validateproductdetails();
    await productpage.addtocartbyname("Sauce Labs Bolt T-Shirt");
    


})