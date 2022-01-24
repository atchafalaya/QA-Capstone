const { Builder, Capabilities, By } = require("selenium-webdriver") 

jest.setTimeout(30000)

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get("https://www.lafayettesheriff.com")
   
})

afterAll(async() => {
    await driver.quit()
})
describe ("Lafayette Sheriff Tests", () => {

    it("Can click about button ", async () => {

        let aboutUsButton = await driver.findElement(By.xpath("/html/body/div[1]/table/tbody/tr/td/div[2]/ul/li[1]/a"))

        await aboutUsButton.click()
    
    })

    it("Can click corrections button", async () => {
    
         let correctionsButton = await driver.findElement(By.xpath("/html/body/div[1]/table/tbody/tr/td/div[2]/ul/li[3]/a"))
    
        await correctionsButton.click()
    
    })

   // it("Can click careers button", async () => {
        
     //   let careersButton = await driver.findElement(By.xpath("/html/body/div[1]/table/tbody/tr/td/div[2]/ul/li[2]/a"))

      //  await careersButton.click()
  //  })

    it("Can click community button", async () => {

        let communityButton = await driver.findElement(By.xpath("/html/body/div[1]/table/tbody/tr/td/div[2]/ul/li[4]/a"))

        await communityButton.click()
    }) 

    it("Can click divisions button", async () => {

        let divisionsButton = await driver.findElement(By.xpath("/html/body/div[1]/table/tbody/tr/td/div[2]/ul/li[5]/a"))

        await divisionsButton.click()
    })

    it("Can click law enforcement button", async () => {
        
        let lawenforcementButton = await driver.findElement(By.xpath("/html/body/div[1]/table/tbody/tr/td/div[2]/ul/li[6]/a"))

        await lawenforcementButton.click()
    })

    it("Can click subscriptions button", async () => {

        let subscriptionsButton = await driver.findElement(By.xpath("/html/body/div[1]/table/tbody/tr/td/div[2]/ul/li[7]/a"))

        await subscriptionsButton.click()
    })
})
