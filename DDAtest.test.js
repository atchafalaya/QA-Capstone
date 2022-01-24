const { Builder, Capabilities, By } = require("selenium-webdriver") 

jest.setTimeout(30000)

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const testNames = require('../QA-Capstone/pageObjects/testNames')

beforeEach(async () => {
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

        let subscribeButton = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div/footer/div[3]/div/div/a"))
        await subscribeButton.click()

        let emailBox = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div/div/article/div/div/div/div/div[3]/div[1]/div/div[2]/div/div/form/div/div[2]/input"))

        await emailBox.sendKeys(testNames.email)

        let firstNameBox = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div/div/article/div/div/div/div/div[3]/div[1]/div/div[2]/div/div/form/div/div[3]/input"))

        await firstNameBox.sendKeys(testNames.firstName)

        let lastNameBox = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div/div/article/div/div/div/div/div[3]/div[1]/div/div[2]/div/div/form/div/div[4]/input"))

        await lastNameBox.sendKeys(testNames.lastName)

        // let submitButton = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div/div/article/div/div/div/div/div[3]/div[1]/div/div[2]/div/div/form/div/div[7]/input"))

        // await lastNameBox.click()
    })

})