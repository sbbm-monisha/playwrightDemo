import {expect, test } from "@playwright/test"

test("handling alrets",async({page})=>{
await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
page.on("dialog", async(alert) =>{
    const textalert = alert.message();
    console.log(textalert);
    await alert.accept();
})
await page.locator("button:has-text('Click Me')").nth(0).click();
})

test("handling second alrets",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog", async(alert) =>{
        const textalert = alert.message();
        console.log(textalert);
        await alert.dismiss();
    })
    await page.locator("button:has-text('Click Me')").nth(1).click();
    expect(page.locator("id=confirm-demo")).toContainText("Cancel!")
    })

    test("handling third alrets",async({page})=>{
        await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
        page.on("dialog", async(alert) =>{
            const textalert = alert.defaultValue();
            console.log(textalert);
            await alert.accept("koushik");
        })
        await page.locator("button:has-text('Click Me')").nth(2).click();
        expect(page.locator("id=prompt-demo")).toContainText("'koushik'")
        })

        //bootstrap alert or modal alert (ex: close or save changes we can inspect the element )
        test("handling modal alrets",async({page})=>{
            await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
            await page.click("button[data-target='#myModal']")
            await page.click("(//button[text()='Save Changes'])[1]")
        })

        test("select dropdown", async({page})=>{
            await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
            await page.selectOption("#select-demo", {
                //label:"Tuesday"
                //value:"Tuesday"
                index: 5
            })
        //multiselect
            await page.selectOption("#multi-select", [{
                label: "Texas"
            }, {index: 2},
        {value: "Washington"}])
        })

        test.only("Bootstrap dropdown", async({page}) => {
            await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")
            await page.click("#country+span")//+ to get sibling
            await page.locator("ul#select2-country-results")
                .locator("Li", {
                    hasText: "India"
                }).click();
            await page.waitForTimeout(3000);
        })


