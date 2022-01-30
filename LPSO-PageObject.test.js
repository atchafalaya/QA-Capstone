const chromedriver = require("chromedriver")
const { Builder, Capabilities, By, until }= require("selenium-webdriver")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const LPS = require('../QA-Capstone/pageObjects/LPSOpage')
const MyLPSOPage = new LPS (driver, "https://www.lafayettesheriff.com/")

//jest setTimeout(5000)

test("LPSO Page Object Test", async () => {

    await MyLPSOPage.navToHome()
    await MyLPSOPage.searchSite()
    //await MyLPSOPage.verifySearchTest()

})
