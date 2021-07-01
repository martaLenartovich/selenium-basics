exports.config = {
  framework: "jasmine",
  seleniumAddress: "http://localhost:4444/wd/hub",
  // capabilities: {
  //  browserName: "chrome",
  //  "goog:chromeOptions": {
  //    w3c: false,
  //  },
  // },
  
  // capabilities: {
  //   browserName: "firefox",
  //   marionette: true,
  //   "moz:firefoxOptions": {
  //     args: ["--safe-mode"],
  //   },
  // },

  multiCapabilities: [{
    browserName: "chrome",
    "goog:chromeOptions": {
      w3c: false,
    }
  }, {
    browserName: "firefox",
    marionette: true,
    "moz:firefoxOptions": {
      args: ["--safe-mode"],
    }
  }],
  directConnect: false,

  specs: ["output_js/specs/firefox.js"],
  splitTestsBetweenCapabilities: true
};
