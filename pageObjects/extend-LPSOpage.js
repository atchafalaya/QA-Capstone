const {By} = require("selenium-webdriver")
const basePage = require("./basePage")

module.exports = class LPSO extends basePage {
    /* selectors */
    searchBar = By.css('input[name="s"]')
    //results = By.id('res')
  

    constructor(driver, url) {
        super(driver, url)
        /* super calls the original element and methods from basepage */
    }

    /* methods */

    async doSearch(term) {
        await this.setInput(this.searchBar, `${term}\n`)
    }

    // async getResults() {
    //     return await this.getText(this.results)
    // }
}
