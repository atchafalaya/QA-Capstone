const chromedriver = require("chromedriver")
const { Builder, Capabilities, By, until } = require("selenium-webdriver")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const DDA = require('../QA-Capstone/pageObjects/DDApage')
const MyDDAPage = new DDA (driver, "https://downtownlafayette.org")

test ("DDA Page Object Test", async () => {

    await MyDDAPage.navToHome()
    await MyDDAPage.searchSite()
    await MyDDAPage.verifySearchTest()
})