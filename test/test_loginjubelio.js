const { Builder, By, until } = require("selenium-webdriver");

describe("Login Jubelio", function () {
  let driver;

  // Tambahkan timeout global (contoh: 10 detik)
  this.timeout(10000);

  // Setup WebDriver
  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  // Teardown WebDriver
  after(async function () {
    await driver.quit();
  });

  it("should login to Jubelio", async function () {
    await driver.get("https://app2.jubelio.com/login");
    await driver.manage().window().setRect({ width: 697, height: 539 });

    await driver.findElement(By.name("email")).sendKeys("enjiimarnii@gmail.com");
    // Masukkan password
    await driver.findElement(By.name("password")).sendKeys("Enjimarni1@");

    // Klik tombol login
    await driver.findElement(By.css(".ladda-label")).click();

    // Tunggu elemen tertentu pada halaman berikutnya (validasi login berhasil)
    await driver.wait(until.elementLocated(By.css(".some-element")), 10000);
  });
});
