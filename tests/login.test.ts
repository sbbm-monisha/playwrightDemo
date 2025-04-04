import { chromium, test } from "playwright/test"

test("login test demo", async() =>{
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page =await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']");
   // await page.click("text=Login");
    await page.click("'Login'");

    await page.fill("//input[@id='input-email']", "koushik350@gmail.com");
    await page.fill("//input[@id='input-password']", "Pass123$");
    await page.click("input[value='Login']");

    await page.waitForTimeout(40000);

    const newcontext = await browser.newContext();  //newcontext will open new browser, newpage will open another tab
    const newpage1 =  await newcontext.newPage();
    await newpage1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await newpage1.waitForTimeout(40000);
})