const { Builder, Capabilities, By } = require("selenium-webdriver") 

jest.setTimeout(50000)

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const testNames = require('./pageObjects/testNames')

beforeAll(async () => {
    await driver.get("https://downtownlafayette.org")

//afterAll(async () => {
   // await driver.quit()
})

describe ("Downtown Development Authority Tests", () => {

    ///////////////////
    //// Events Button
    //////////////////

    it("Can click Events button and load Events page", async () => {

        let eventsButton = await driver.findElement(By.css('#categories-5 > ul > li.cat-item.cat-item-73 > a')) 
        await eventsButton.click()

        let eventsCheck = await driver.findElement(By.css("#post-228758 > h2 > a")).getText()

        expect(eventsCheck).toContain("Merry")
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

    ///////////////////////
    //// Drink button
    //////////////////////

    it("Can click Drink Button", async () => {

        let drinkButton = await driver.findElement(By.css("#categories-6 > ul > li.cat-item.cat-item-13 > a"))
        await drinkButton.click()

    })

    ///////////////////////
    //// Eat button
    //////////////////////

    it("Can click Eat button", async () => {

        let eatButton = await driver.findElement(By.css("#categories-6 > ul > li.cat-item.cat-item-12 > a"))
        await eatButton.click()
        
    })

    ///////////////////////
    //// Festival button
    //////////////////////

    it("Can click Festival button", async () => {

        let festivalButton = await driver.findElement(By.css("#categories-6 > ul > li.cat-item.cat-item-60 > a"))
        await festivalButton.click()
    })

    ////////////////////////////
    //// Lafayette sign  button
    ///////////////////////////

    it("Can click Lafayette Sign button", async () => {
        
        let signButton = await driver.findElement(By.css("#categories-6 > ul > li.cat-item.cat-item-20 > a"))
        await signButton.click()
    })

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
   
}) //npx jest DDA.test.js