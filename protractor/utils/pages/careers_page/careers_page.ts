import { browser, By, element } from "protractor";
import { BasePage } from "../base_page/base_page";

export class CareersPage extends BasePage{
  static careersButton = element(By.xpath('//a[@href="/careers"]'));
  static jobSearchFilterForm = element(By.id("jobSearchFilterForm"));
  static keyword = element(By.css('input[placeholder="Keyword"]'));
  static citiesDropdownArrow = element(By.css(".select2-selection__arrow"));
  static chinaCheckbox = element(By.xpath('//li[contains(text(), "China")]'));
  static allCitiesCheckbox = element(
    By.xpath('//li[contains(text(), "All Cities in Belarus")]')
  );
  static skillsDropdownField = element(By.className("selected-params"));
  static skillsDropdown = element(
    By.css(".multi-select-dropdown:not(.hidden)")
  );
  static softwareTestEngineeringCheckbox = element(
    By.xpath(
      '//span[@class="checkbox-custom-label" and contains(text(),"Software Test Engineering")]'
    )
  );
  static labelSelected = element(By.className("label"));
  static counter = element(By.className("counter"));
  static findButton = element(By.xpath('//button[@type="submit"]'));
  static resultLine = element(
    By.xpath('//h1[@class="search-result__heading"]')
  );
  
  url: string;
  constructor() {
    super();
    this.url = "https://www.epam.com/careers";
  }
  open() {
    return super.open(this.url);
  }
  scrollToJobSearchFilterForm (){
    browser.executeScript(
      "arguments[0].scrollIntoView();",
      CareersPage.jobSearchFilterForm.getWebElement()
    );
  }
}
