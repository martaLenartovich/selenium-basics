import { browser, element, by, protractor } from "protractor";
import {} from "jasmine";

describe("search job test", function () {
  it("should search Software Testing Engineer position in All Cities in Belarus", async function () {
    const EC = protractor.ExpectedConditions;
    browser.manage().timeouts().pageLoadTimeout(20000);
    browser.waitForAngularEnabled(false);
    await browser.get("https://www.epam.com/");
    await browser.manage().window().maximize();
    const careerButton = element(by.css('a[href="/careers"]'));
    await careerButton.click();
    const jobSearchFilterForm = element(by.id("jobSearchFilterForm"));
    browser.executeScript(
      "arguments[0].scrollIntoView();",
      jobSearchFilterForm.getWebElement()
    );
    console.log('1. Enter "Software Testing Engineer" in Keyword field');
    const keyword = element(by.css('input[placeholder="Keyword"]'));
    await keyword.sendKeys("Software Testing Engineer");
    console.log(
      '2. Select "All Cities in Belarus" option in Location dropdown'
    );
    const citiesDropdownArrow = element(by.css(".select2-selection__arrow"));
    await citiesDropdownArrow.click();
    const chinaCheckbox = element(by.xpath('//li[contains(text(), "China")]'));
    expect(chinaCheckbox).toBeDefined();
    //по непонятным причинам тут бывает выбирается брест, хотя поиск идет по тексту
    const allCitiesCheckbox = element(
      by.xpath('//li[contains(text(), "All Cities in Belarus")]')
    );
    await browser.wait(() => allCitiesCheckbox.isDisplayed(), 5000);
    await allCitiesCheckbox.click();
    console.log(
      '3. Select "Software Test Engineering" skill in Skills dropdown'
    );
    await element(by.className("selected-params")).click();
    const skillsDropdown = element(
      by.css(".multi-select-dropdown:not(.hidden)")
    );
    //await browser.wait(until.elementIsEnabled(skillsDropdown));
    await browser.wait(EC.elementToBeClickable(skillsDropdown), 5000);
    const softwareTestEngineeringCheckbox = element(
      by.xpath(
        '//span[@class="checkbox-custom-label" and contains(text(),"Software Test Engineering")]'
      )
    );
    await browser.sleep(3000);
    await softwareTestEngineeringCheckbox.click();
    const labelSelected = await element(by.className("label")).getText();
    const counter = await element(by.className("counter")).getText();
    expect(labelSelected + counter).toEqual("Selected:1");
    console.log('4. Click "Find" button');
    const findButton = element(by.xpath('//button[@type="submit"]'));
    expect(await findButton.isEnabled()).toEqual(true);
    await findButton.click();
    const resultLine = element(
      by.xpath('//h1[@class="search-result__heading"]')
    );
    expect(resultLine).toBeDefined();
  });
});
