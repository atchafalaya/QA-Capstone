const { Builder, Capabilities } = require("selenium-webdriver")
const chromedriver = require("chromedriver")
const  LPSO  = require("./pageObjects/extend-LPSOpage")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const myPage = new LPSO (driver, 'https://www.lafayettesheriff.com/')

jest.setTimeout(10000)

test('Searching LPSO Page', async ()=> {
    await myPage.navigate()
    await myPage.doSearch('crime mapping')
    
   // expect(results).toContain('Search Again')

    //await myPage.driver.quit()
})
// npx pageObject-LPSO.test.js