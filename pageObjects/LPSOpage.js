const {By, until} = require("selenium-webdriver");
const searchTerms = require("./searchTerms");

module.exports = class MyLPSOPage {
    driver;
    url;
    constructor(myDriver, myUrl){
        this.driver = myDriver
        this.url = myUrl
    }

/* SELECTORS */

homePage = By.xpath("/html/body/div[1]/table/tbody/tr/td/div[1]/div[2]/a[1]")
searchField = By.xpath("/html/body/div[1]/table/tbody/tr/td/div[1]/div[2]/form/input[2]")
verifySearchText = By.xpath("/html/body/div[1]/table/tbody/tr/td/div[4]/table/tbody/tr/td[2]/a[4]")


/* METHODS */

async navToHome() {
    await this.driver.get(this.url)
    //await this.driver.wait(untilElementLocated(this.homePage))
}
async searchSite() {
    let searchButton = await this.driver.findElement(this.searchField)
    // await searchButton.sendKeys(`${searchTerms}`)
    await searchButton.sendKeys("crime statistics")
    await searchButton.click()
    await this.driver.sleep(1000)
    
}
async verifySearchTest() {
    let verifySearch = await this.driver.findElement(this.verifySearchText)

    let verifySearchText = await verifySearch.getText()
    
    expect(verifySearchText).toContain("Lafayette Parish Crime Statistics")
}
}