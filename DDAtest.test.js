const { Builder, Capabilities, By } = require("selenium-webdriver") 

jest.setTimeout(50000)

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const testNames = require('../QA-Capstone/pageObjects/testNames')

beforeAll(async () => {
    await driver.get("https://downtownlafayette.org")
   
})
describe ("Lafayette Consolidated Government Tests", () => {
    it("Can click events button", async () => {

        let eventsButton = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/header/div/div[2]/nav/ul/li[1]/a"))
        await eventsButton.click()
    })
    it("Can click explore button", async () => {

        let exploreButton = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/header/div/div[2]/nav/ul/li[2]/a"))
        await exploreButton.click()
    })
    it("Can subscribe to newsletter", async () => {

        await driver.get("https://downtownlafayette.org/contacts/subscribe")

        await driver.findElement(By.id("mce-EMAIL")).click()
        await driver.findElement(By.id("mce-EMAIL")).sendKeys("james.m.proctor+DDA1@gmail.com")
        await driver.findElement(By.id("mce-FNAME")).sendKeys("Test")
        await driver.findElement(By.id("mce-LNAME")).click()
        await driver.findElement(By.id("mce-LNAME")).sendKeys("Tester")
    })

})