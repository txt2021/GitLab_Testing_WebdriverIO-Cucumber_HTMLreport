
module.exports = class Page {  

    open (path) {
        browser.url(path);
    }

    async click(locator){
        await $(locator).click();
    }

    async setvalue(locator,text){
        await ((await $(locator)).setValue(text));
    }

    async isdisplayed(locator){
        const elem = await $(locator);
        await expect(elem).toBeDisplayed();
    }

    async checkElement(locator,text) {
        const elem = await $(locator);
        await expect(elem).toHaveText(text);
    }

    async urlChecking(text){
        await expect(browser).toHaveUrlContaining(text);
    }

}
