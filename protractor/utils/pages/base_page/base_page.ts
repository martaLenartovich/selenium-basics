import { browser } from "protractor";

export class BasePage {
    open(url: string) {
        console.log(`Opening "${url}" url`);
        return browser.get(url);
    }
}