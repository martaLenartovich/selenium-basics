"use strict";
exports.__esModule = true;
exports.BasePage = void 0;
var protractor_1 = require("protractor");
var BasePage = /** @class */ (function () {
    function BasePage() {
    }
    BasePage.prototype.open = function (url) {
        console.log("Opening \"" + url + "\" url");
        return protractor_1.browser.get(url);
    };
    return BasePage;
}());
exports.BasePage = BasePage;
