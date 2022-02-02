const {By} = require("selenium-webdriver")
const basePage = require("./basePage")

module.exports = class DDA extends basePage {
    driver;
    url;
    constructor(myDriver, myUrl){
        this.driver = myDriver
        this.url = myUrl
    }

/* SELECTORS */

homePage = By.css("#logo")
searchField = By.xpath("")
verifySearchText = By.xpath("")

/* METHODS */

async navToHome() {
    await this.driver.get(this.url)
}
async searchSite() {
    let searchButton = await this.driver.findElement(this.searchField)
    await searchButton.click()
    await searchButton.sendKeys("Events")
}
async verifySearchTest() {
    let verifySearch = await this.driver.findElement(this.verifySearchText)

    let verifySearchText = await verifySearch.getText()

    expect(verifySearchText).toContain("Events")
}
}