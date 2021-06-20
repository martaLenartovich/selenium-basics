const { By, Key, Builder, until } = require("selenium-webdriver");
require("chromedriver");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 40 * 1000;

describe('search job test', function () {
  it('should search Software Testing Engineer position in All Cities in Belarus', async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.epam.com/");
    await driver.manage().window().maximize();
    await (await driver.findElement(By.xpath('//a[@href="/careers"]'))).click();
    let jobSearchFilterForm = driver.findElement(By.id("jobSearchFilterForm"));
    await driver.executeScript(
      "arguments[0].scrollIntoView();",
      jobSearchFilterForm
    );
    console.log('1. Enter "Software Testing Engineer" in Keyword field');
    const keyword = await driver.findElement(
      By.xpath('//input[@id="new_form_job_search_1445745853_copy-keyword"]')
    );
    await keyword.sendKeys("Software Testing Engineer");

    console.log(
      '2. Select "All Cities in Belarus" option in Location dropdown'
    );
    const citiesDropdownArrow = await driver.findElement(
      By.xpath('//span[@class="select2-selection__arrow"]')
    );
    await citiesDropdownArrow.click();
    const chinaCheckbox = await driver.findElement(
      By.xpath('//li[contains(text(), "China")]')
    );
    expect(chinaCheckbox).toBeDefined();
    //по непонятным причинам тут бывает выбирается брест, хотя поиск идет по тексту
    const allCitiesCheckbox = await driver.findElement(
      By.xpath('//li[contains(text(), "All Cities in Belarus")]')
    );
    await driver.wait(() => allCitiesCheckbox.isDisplayed(), 5000);
    await allCitiesCheckbox.click();

    console.log(
      '3. Select "Software Test Engineering" skill in Skills dropdown'
    );
    await (await driver.findElement(By.className("selected-params"))).click();
    const skillsDropdown = await driver.findElement(
      By.css(".multi-select-dropdown:not(.hidden)")
    );
    await driver.wait(until.elementIsEnabled(skillsDropdown));
    const softwareTestEngineeringCheckboxArray = await driver.findElements(
      By.xpath('//*[contains(text(),"Software Test Engineering")]')
    );
    const softwareTestEngineeringCheckbox =
      softwareTestEngineeringCheckboxArray[1];
    await driver.wait(
      until.elementIsEnabled(softwareTestEngineeringCheckbox),
      10000
    );
    await softwareTestEngineeringCheckbox.click();
    const labelSelected = await driver
      .findElement(By.className("label"))
      .getText();
    const counter = await driver.findElement(By.className("counter")).getText();
    expect(labelSelected + counter).toEqual("Selected:1");

    console.log('4. Click "Find" button');
    const findButton = await driver.findElement(
      By.xpath('//button[@type="submit"]')
    );
    expect(await findButton.isEnabled()).toBeTrue();
    await findButton.click();

    const resultLine = await driver.findElement(
      By.xpath('//h1[@class="search-result__heading"]')
    );
    expect(resultLine).toBeDefined();

    await driver.quit();
  });
});
