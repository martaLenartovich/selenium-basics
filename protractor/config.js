// const { browser } = require("protractor");
let { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  // launch locally when fields directConnect and seleniumAddress are not provided

  chromeDriver: "./specs/driver/chromedriver.exe",
  firefoxDriver: "./specs/driver/geckodriver.exe",
  specs: ["output_js/specs/scripts.js"],


  capabilities: {
    browserName: "chrome",
    "goog:chromeOptions": {
      w3c: false,
    },
  },
  //capabilities: {
  //  {
  //    browserName: "firefox",
  //    marionette: true,
  //    'moz:firefoxOptions': {
  //      'args': ['--safe-mode'],
  //    }
  //  },
  //},

    chromeOptions: {
      args: [
        //"–headless",
        "–disable-gpu",
        "–window-size=800×600",
      ],
    },
  onPrepare: function () {
    //console logs configurations
    jasmine.getEnv().addReporter(new SpecReporter({
        displayStacktrace: 'all',      // display stacktrace for each failed assertion, values: (all|specs|summary|none) 
        displaySuccessesSummary: false, // display summary of all successes after execution 
        displayFailuresSummary: true,   // display summary of all failures after execution 
        displayPendingSummary: true,    // display summary of all pending specs after execution 
        displaySuccessfulSpec: true,    // display each successful spec 
        displayFailedSpec: true,        // display each failed spec 
        displayPendingSpec: false,      // display each pending spec 
        displaySpecDuration: false,     // display each spec duration 
        displaySuiteNumber: false,      // display each suite number (hierarchical) 
        colors: {
            success: 'green',
            failure: 'red',
            pending: 'yellow'
        },
        prefixes: {
            success: '✓ ',
            failure: '✗ ',
            pending: '* '
        },
        customProcessors: []
    }));
    browser.manage().timeouts().pageLoadTimeout(20000);
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(40000);

}
};
