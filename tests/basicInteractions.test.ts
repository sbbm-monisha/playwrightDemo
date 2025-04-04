import {test, expect} from "@playwright/test";

test("input field demo", async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message")
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log("before enterning data"+await messageInput.inputValue());//to get the input value from a  field
    await messageInput.type("HI Welcome");
    console.log("after enterning data"+await messageInput.inputValue());
});

test("input text demo", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
const sum1 = page.locator("#sum1");
const sum2 = page.locator("#sum2");

const sumCalBtn = page.locator("//button[text()='Get Sum']")
let num1 = 10;
let num2 = 20;
await sum1.fill(""+num1);
await sum2.type(""+num2);
await sumCalBtn.click();

const totalVal = page.locator("#addmessage");
console.log(await totalVal.textContent());//like getText() in selenium
let result = num1+num2;
expect(totalVal).toHaveText(""+result);
})

test.only("checkbox demo", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singlecheckox = page.locator("#isAgeSelected");
    expect(singlecheckox).not.toBeChecked();
    await singlecheckox.check();
    expect(singlecheckox).toBeChecked();
})