const { By, until, WebDriver } = require("selenium-webdriver");
const chromedriver = require("chromedriver")

module.exports = class basePage {
    driver;
    url;

    constructor(myDriver, myUrl) {
        this.driver = myDriver
        this.url = myUrl
    }

    /* Methods */

    async navigate() {
        return await this.driver.get(this.url)
    }

    /* waits for element to be located and visible before returning it 
    @parameter {By} elementBy - the locator for the element to return */

    async getElement(elementBy) {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementLocated(elementBy));
        return element;
    }

    /*clicks the given element after waiting for it @ param {By} elementBy - for the locator to return */
    
    async click(elementBy) {
        return (await this.getElement(elementBy)).click()
    }

    /* clears the given element after waiting for it and then sends provided keys */

    async setInput(elementBy, keys) {
        let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys)
    }

    /*returns an element's text after waiting for it to be visible */

    async getText(elementBy) {
        return(await this.getElement(elementBy)).getText()
    }
}