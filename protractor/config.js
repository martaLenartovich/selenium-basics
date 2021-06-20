exports.config = {
  // launch locally when fields directConnect and seleniumAddress are not provided

  chromeDriver: "./specs/driver/chromedriver.exe",

  specs: ["./specs/scripts.js"],

  capabilities: {
    browserName: "chrome",

    chromeOptions: {
      args: [
        //"–headless", 
        "–disable-gpu",
        "–window-size=800×600"],
    },
  },
};
