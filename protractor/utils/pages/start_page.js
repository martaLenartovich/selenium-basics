"use strict";
exports.__esModule = true;
exports.StartPage = void 0;
var protractor_1 = require("protractor");
var StartPage = (function () {
    function StartPage() {
    }
    StartPage.URL = 'https://www.epam.com/';
    StartPage.careerButton = protractor_1.element(protractor_1.By.css('a[href="/careers"]'));
    return StartPage;
}());
exports.StartPage = StartPage;
//# sourceMappingURL=start_page.js.map