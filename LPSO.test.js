const { Builder, Capabilities, By } = require("selenium-webdriver") 

jest.setTimeout(30000)

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get("https://www.lafayettesheriff.com")
   
})

// afterAll(async() => {
//     await driver.quit()
//})
describe ("Lafayette Sheriff Tests", () => {

    ////////////////////////////
    /////About Button
    ///////////////////////////

    it("Can click About button and verify About page ", async () => {

        let aboutUsButton = await driver.findElement(By.xpath("/html/body/div[1]/table/tbody/tr/td/div[2]/ul/li[1]/a"))

        await aboutUsButton.click()

        let aboutCheck = await driver.findElement(By.css("#content > p.PageTitle")).getText()

        expect(aboutCheck).toContain("Vision Statement")
    
    })
    ////////////////////////////
    /////Corrections Button
    ///////////////////////////

    it("Can click corrections button", async () => {
    
         let correctionsButton = await driver.findElement(By.xpath("/html/body/div[1]/table/tbody/tr/td/div[2]/ul/li[3]/a"))
    
        await correctionsButton.click()
    
    })
    ////////////////////////////
    /////Community Button
    ///////////////////////////

    it("Can click community button", async () => {

        let communityButton = await driver.findElement(By.xpath("/html/body/div[1]/table/tbody/tr/td/div[2]/ul/li[4]/a"))

        await communityButton.click()
    }) 
    ////////////////////////////
    /////Divisions Button
    ///////////////////////////

    it("Can click divisions button", async () => {

        let divisionsButton = await driver.findElement(By.xpath("/html/body/div[1]/table/tbody/tr/td/div[2]/ul/li[5]/a"))

        await divisionsButton.click()
    })
    ////////////////////////////
    /////Law Enforcement Button
    ///////////////////////////

    it("Can click law enforcement button", async () => {
        
        let lawenforcementButton = await driver.findElement(By.xpath("/html/body/div[1]/table/tbody/tr/td/div[2]/ul/li[6]/a"))

        await lawenforcementButton.click()
    })
    ////////////////////////////
    /////Subscriptions Button
    ///////////////////////////

    it("Can click subscriptions button", async () => {

        let subscriptionsButton = await driver.findElement(By.xpath("/html/body/div[1]/table/tbody/tr/td/div[2]/ul/li[7]/a"))

        await subscriptionsButton.click()
    })
    ////////////////////////////
    /////Home Button
    ///////////////////////////

    it("Can click Home button", async () => {

        let homeButton = await driver.findElement(By.css("#s1 > a:nth-child(1)"))

        await homeButton.click()
    })
    ////////////////////////////
    /////Patrol Requests Button
    ///////////////////////////

    it("Can click Patrol Requests button", async () => {

        let patrolButton = await driver.findElement(By.css("#p6 > table:nth-child(2) > tbody > tr > td:nth-child(3) > ul > li:nth-child(3) > a"))

        await patrolButton.click()
    })
    ////////////////////////////
    /////Narcotics Unit Button
    ///////////////////////////

    it("Can click Narcotics Unit button", async () => {

        let narcoButton = await driver.findElement(By.xpath("/html/body/div[1]/table/tbody/tr/td/div[4]/table/tbody/tr/td[1]/ul/li[4]/a"))

        await narcoButton.click()
    })
    ////////////////////////////
    /////Crime Statistics Button
    ///////////////////////////

    it("Can click Crime Stats button", async () => {

        let crimestatsButton = await driver.findElement(By.xpath("/html/body/div[1]/table/tbody/tr/td/div[4]/table/tbody/tr/td[1]/ul/li[6]/a"))

        await crimestatsButton.click()
    })

})
//npx jest LPSO.test.js