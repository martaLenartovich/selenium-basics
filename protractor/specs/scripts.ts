import { browser, protractor } from "protractor";
import {} from "jasmine";
import { HomePage } from "../utils/pages/home_page/home_page";
import { CareersPage } from "../utils/pages/careers_page/careers_page";

const careersPage = new CareersPage();
const homePage = new HomePage();

describe("search job test", function () {
  it("should search Software Testing Engineer position in All Cities in Belarus", async function () {
    const EC = protractor.ExpectedConditions;
    browser.manage().timeouts().pageLoadTimeout(20000);
    browser.waitForAngularEnabled(false);
    await homePage.open();
    await browser.manage().window().maximize();
    await CareersPage.careersButton.click();
    careersPage.scrollToJobSearchFilterForm();
    console.log('1. Enter "Software Testing Engineer" in Keyword field');
    await CareersPage.keyword.sendKeys("Software Testing Engineer");
    console.log(
      '2. Select "All Cities in Belarus" option in Location dropdown'
    );
    await CareersPage.citiesDropdownArrow.click();
    expect(CareersPage.chinaCheckbox).toBeDefined();
    await browser.wait(() => CareersPage.allCitiesCheckbox.isDisplayed(), 5000);
    await CareersPage.allCitiesCheckbox.click();
    console.log(
      '3. Select "Software Test Engineering" skill in Skills dropdown'
    );
    await CareersPage.skillsDropdownField.click(); 
    await browser.wait(EC.elementToBeClickable(CareersPage.skillsDropdown), 5000); 
    await browser.sleep(3000);
    await CareersPage.softwareTestEngineeringCheckbox.click();
    const labelSelectedText = await CareersPage.labelSelected.getText();
    const counterText = await CareersPage.counter.getText();
    expect(labelSelectedText + counterText).toEqual("Selected:1");
    console.log('4. Click "Find" button');
    expect(await CareersPage.findButton.isEnabled()).toEqual(true);
    await CareersPage.findButton.click(); 
    expect(CareersPage.resultLine).toBeDefined();
  });
});
