const { Builder, Capabilities, By } = require("selenium-webdriver") 

jest.setTimeout(50000)

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const testNames = require('./pageObjects/testNames')

beforeAll(async () => {
    await driver.get("https://downtownlafayette.org")
   
})


describe ("Downtown Development Authority Tests", () => {

    ///////////////////
    //// Events Button
    //////////////////

    it("Can click Events button and load Events page", async () => {

        let eventsButton = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/header/div/div[2]/nav/ul/li[1]/a"))
        await eventsButton.click()

        let eventsCheck = await driver.findElement(By.css("#et-boc > div > div > div.et_pb_section.et_pb_section_1.colorblock.et_pb_with_background.et_section_regular > div > div > div > div > h1")).getText()

        expect(eventsCheck).toContain("Events")
    })

    /////////////////
    //// Arts Button
    ////////////////

    it("Can click Arts & Culture button", async () => {
        
        let artsButton = await driver.findElement(By.css("#categories-5 > ul > li.cat-item.cat-item-75 > a"))
        await artsButton.click()
    })

    //////////////////////////
    //// Business News Button
    /////////////////////////

    it("Can click Business News button", async () => {

        let bizNewsButton = await driver.findElement(By.css("#categories-6 > ul > li.cat-item.cat-item-74 > a"))
        await bizNewsButton.click()
    })

    ///////////////////////
    //// Businesses Button
    //////////////////////

    it("Can click Businesses button", async () => {

        let businessesButton = await driver.findElement(By.css("#categories-6 > ul > li.cat-item.cat-item-22 > a"))
        await businessesButton.click()
    })

    ///////////////////////////////////
    //// Commercial Real Estate button
    //////////////////////////////////

    it("Can click Commercial Real Estate button", async () => {

        let commercialButton = await driver.findElement(By.css("#categories-6 > ul > li.cat-item.cat-item-25 > a"))
        await commercialButton.click()
    })

    ////////////////////////
    //// Creativity button
    ///////////////////////

    it("Can click creativity button", async () => {

        let creativityButton = await driver.findElement(By.css("#categories-6 > ul > li.cat-item.cat-item-19 > a"))
        await creativityButton.click()
    })

    ////////////////////////
    //// Developer button
    ///////////////////////

    it("Can click Developer button", async () => {

        let developerButton = await driver.findElement(By.css("#categories-6 > ul > li.cat-item.cat-item-83 > a"))
        await developerButton.click()
    })

    //////////////////////////
    //// Downtown News button
    /////////////////////////

    it("Can click Downtown News button", async ()=> {

        let downtownnewsButton = await driver.findElement(By.css("#categories-6 > ul > li.cat-item.cat-item-39 > a"))
        await downtownnewsButton.click()
    })

    ///////////////////////////
    //// News and Media button
    //////////////////////////

    it("Can click News and Media Button", async () => {

        let mediaButton = await driver.findElement(By.css("#menu-item-225025 > a"))
        await mediaButton.click()

    })

    ///////////////////////
    //// Resources button
    //////////////////////

    it("Can click Resources button", async () => {

        let resourcesButton = await driver.findElement(By.css("#menu-item-225025 > a"))
        await resourcesButton.click()
        
    })

    ///////////////////////
    //// Give Back button
    //////////////////////

    it("Can click Give Back button", async () => {

        let giveButton = await driver.findElement(By.css("#menu-item-227103 > a"))
        await giveButton.click()
    })

    ///////////////////
    //// Shop button
    //////////////////

  //  it("Can click Shop button", async () => {
        
 //       let shopButton = await driver.findElement(By.css("#menu-item-226966 > a"))
 //       await shopButton.click()
 //   })

    /////////////////////////////
    //// Subscribe to Newsletter
    ////////////////////////////

 //   it("Can subscribe to newsletter", async () => {

    //     await driver.get("https://downtownlafayette.org/contacts/subscribe")

    //     await driver.findElement(By.id("mce-EMAIL")).click()
    //     await driver.findElement(By.id("mce-EMAIL")).sendKeys("james.m.proctor+DDA1@gmail.com")
    //     await driver.findElement(By.id("mce-FNAME")).sendKeys("Test")
    //     await driver.findElement(By.id("mce-LNAME")).click()
    //     await driver.findElement(By.id("mce-LNAME")).sendKeys("Tester")
    // })

})