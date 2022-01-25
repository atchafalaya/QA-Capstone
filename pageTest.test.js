const {Builder, Capabilities, By, until} = require('selenium-webdriver')

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const SelectorsMethods = require('./pageObjects/selectorsMethods')
const testPage = require('./pageObjects/selectorsMethods')

const testPage = new testPage(driver, 'https//www.lafayettesheriff.com/site.php')

beforeEach(async () => {
    await testPage.navToHome()
})

afterAll(async () => {
    await testPage.driver.quit
})

