"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var protractor_1 = require("protractor");
var home_page_1 = require("../utils/pages/home_page");
var careers_page_1 = require("../utils/pages/careers_page");
var careersPage = new careers_page_1.CareersPage();
var homePage = new home_page_1.HomePage();
describe("search job test", function () {
    it("should search Software Testing Engineer position in All Cities in Belarus", function () {
        return __awaiter(this, void 0, void 0, function () {
            var EC, labelSelectedText, counterText, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        EC = protractor_1.protractor.ExpectedConditions;
                        protractor_1.browser.manage().timeouts().pageLoadTimeout(20000);
                        protractor_1.browser.waitForAngularEnabled(false);
                        return [4, homePage.open()];
                    case 1:
                        _b.sent();
                        return [4, protractor_1.browser.manage().window().maximize()];
                    case 2:
                        _b.sent();
                        return [4, careersPage.open()];
                    case 3:
                        _b.sent();
                        protractor_1.browser.executeScript("arguments[0].scrollIntoView();", careers_page_1.CareersPage.jobSearchFilterForm.getWebElement());
                        console.log('1. Enter "Software Testing Engineer" in Keyword field');
                        return [4, careers_page_1.CareersPage.keyword.sendKeys("Software Testing Engineer")];
                    case 4:
                        _b.sent();
                        console.log('2. Select "All Cities in Belarus" option in Location dropdown');
                        return [4, careers_page_1.CareersPage.citiesDropdownArrow.click()];
                    case 5:
                        _b.sent();
                        expect(careers_page_1.CareersPage.chinaCheckbox).toBeDefined();
                        return [4, protractor_1.browser.wait(function () { return careers_page_1.CareersPage.allCitiesCheckbox.isDisplayed(); }, 5000)];
                    case 6:
                        _b.sent();
                        return [4, careers_page_1.CareersPage.allCitiesCheckbox.click()];
                    case 7:
                        _b.sent();
                        console.log('3. Select "Software Test Engineering" skill in Skills dropdown');
                        return [4, careers_page_1.CareersPage.skillsDropdownField.click()];
                    case 8:
                        _b.sent();
                        return [4, protractor_1.browser.wait(EC.elementToBeClickable(careers_page_1.CareersPage.skillsDropdown), 5000)];
                    case 9:
                        _b.sent();
                        return [4, protractor_1.browser.sleep(3000)];
                    case 10:
                        _b.sent();
                        return [4, careers_page_1.CareersPage.softwareTestEngineeringCheckbox.click()];
                    case 11:
                        _b.sent();
                        return [4, careers_page_1.CareersPage.labelSelected.getText()];
                    case 12:
                        labelSelectedText = _b.sent();
                        return [4, careers_page_1.CareersPage.counter.getText()];
                    case 13:
                        counterText = _b.sent();
                        expect(labelSelectedText + counterText).toEqual("Selected:1");
                        console.log('4. Click "Find" button');
                        _a = expect;
                        return [4, careers_page_1.CareersPage.findButton.isEnabled()];
                    case 14:
                        _a.apply(void 0, [_b.sent()]).toEqual(true);
                        return [4, careers_page_1.CareersPage.findButton.click()];
                    case 15:
                        _b.sent();
                        expect(careers_page_1.CareersPage.resultLine).toBeDefined();
                        return [2];
                }
            });
        });
    });
});
//# sourceMappingURL=scripts.js.map