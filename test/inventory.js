// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('inventory', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('inventory', async function() {
    await driver.get("https://app2.jubelio.com/home/inventory/")
    await driver.manage().window().setRect({ width: 697, height: 539 })
    await driver.findElement(By.css("span .react-grid-checkbox-label")).click()
    {
      const element = await driver.findElement(By.css(".ladda-button:nth-child(3)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css(".btn-primary > .ladda-label")).click()
    await driver.findElement(By.css(".form-group:nth-child(2) .form-control")).sendKeys("29 Des 2024")
  })
})