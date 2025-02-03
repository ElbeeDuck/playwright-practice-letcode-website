exports.DropdownPage = class DropdownPage {
    constructor(page) {
        this.page = page;
        this.fruitList = page.locator('#fruits');
        this.fruitResponse = page.locator('.subtitle');
        this.multipleValueLocator = page.locator('#superheros');
        this.languageList = page.locator('#lang');
        this.countryList = page.locator('#country');
        
    }
    async selectFruit(fruit) {
        await this.fruitList.selectOption(fruit);
        return this.fruitResponse.textContent();
    }

    async selectSuperHeros(array) {
        await this.multipleValueLocator.selectOption(array);
    }

    async selectLastLanguage() {
        //await this.languageList.waitFor({ state: 'visible', timeout: 5000 });
        const options = await this.languageList.locator('option').allTextContents();
        const lastLanguage = options[options.length - 1];
        await this.languageList.selectOption({ label: lastLanguage });  
        return lastLanguage;
    }

    async selectCountry(country){
        await this.page.selectOption('#country', {value: country});
        const selectedValue = await this.countryList.inputValue();
        return selectedValue;
    }
};